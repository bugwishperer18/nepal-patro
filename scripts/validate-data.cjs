const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const dailyData = require("../data/daily-data.json");
const dailyApi = require("../api/daily-data.js");

const root = path.resolve(__dirname, "..");
const requiredCurrencies = ["USD", "CNY", "EUR", "GBP", "JPY", "AUD", "CAD"];
const packageJson = require("../package.json");

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function validateDailyData() {
  assert(dailyData.updatedAt, "daily data needs updatedAt");
  assert(dailyData.forex?.rates?.length === requiredCurrencies.length, "forex must include the expected currency count");
  assert(JSON.stringify(dailyData.forex.rates.map(([code]) => code)) === JSON.stringify(requiredCurrencies), "forex ordering changed");
  assert(dailyApi._internal.validateForex(dailyData.forex), "forex data failed validation");
  assert(dailyApi._internal.validateGold(dailyData.gold), "gold data failed validation");
  assert(dailyApi._internal.validateFuel(dailyData.fuel), "fuel data failed validation");
  assert(dailyApi._internal.validateMarket(dailyData.market), "market data failed validation");
  assert(dailyApi._internal.validatePanchang(dailyData.panchang), "panchang data failed validation");
  assert(packageJson.dependencies?.["panchang-ts"], "panchang-ts dependency is required for calculated Panchang");
  assert(/panchang-ts/.test(read("api/daily-data.js")), "daily data API must use panchang-ts for Panchang");
  assert(dailyData.horoscope?.sourceUrl, "horoscope sourceUrl is required");
  assert(dailyData.sourceHealth, "sourceHealth is required for honest data confidence");
  assert(dailyData.sourceHealth.panchang, "panchang sourceHealth is required");
  assert(dailyData.sourceHealth.horoscope, "horoscope sourceHealth is required");
}

function validateSecuritySurface() {
  const app = read("app.js");
  const html = read("index.html");
  const electron = read("electron/main.cjs");
  const api = read("api/daily-data.js");
  assert(!/\.innerHTML\s*=|insertAdjacentHTML|document\.write|eval\s*\(|new Function\s*\(/.test(app), "unsafe HTML/eval sink found in app.js");
  assert(/Content-Security-Policy/.test(html), "index.html needs a CSP");
  assert(/object-src 'none'/.test(html), "CSP must block object embeds");
  assert(/frame-src 'none'/.test(html), "CSP must block frames");
  assert(/base-uri 'self'/.test(html), "CSP must restrict base-uri");
  assert(/source-panel/.test(html), "source status panels must stay visible");
  assert(/manifest\.webmanifest/.test(html), "index.html must reference the PWA manifest");
  assert(/vendor\/remotemerge-nepali-date-converter\/ndc-browser\.js/.test(html), "index.html must load the vendored BS/AD converter");
  assert(fs.existsSync(path.join(root, "manifest.webmanifest")), "PWA manifest is missing");
  assert(fs.existsSync(path.join(root, "vendor/remotemerge-nepali-date-converter/LICENSE")), "vendored converter license is missing");
  assert(/contextIsolation:\s*true/.test(electron), "Electron contextIsolation must stay enabled");
  assert(/nodeIntegration:\s*false/.test(electron), "Electron nodeIntegration must stay disabled");
  assert(/sandbox:\s*true/.test(electron), "Electron sandbox must stay enabled");
  assert(/setPermissionRequestHandler/.test(electron), "Electron must deny unexpected permission requests");
  assert(/function openExternalSafely/.test(electron), "Electron external links must go through a safe protocol check");
  assert(!/shell\.openExternal\(url\)/.test(electron), "Electron must not open unvalidated URLs");
  assert(/parsed\.protocol !== "https:"/.test(api), "API safeFetch must enforce HTTPS sources");
}

function validateConverterClaims() {
  const app = read("app.js");
  const html = read("index.html");
  assert(/Verified: BS 1975 - 2099/.test(app + html), "converter range copy must disclose exact verified range");
  assert(/converterStartYear = 1975/.test(app), "converter start year must stay at 1975");
  assert(/converterEndYear = 2099/.test(app), "converter end year must stay at 2099");
  assert(!/BS 2000-2090|2000-2090/.test(app + read("index.html")), "overbroad converter range claim found");
  assert(!/const variant = base\.slice/.test(app), "converter must not use synthetic BS month patterns");
}

function loadBrowserDateConverter() {
  const source = `${read("vendor/remotemerge-nepali-date-converter/ndc-browser.js")}\nthis.DateConverter = DateConverter;`;
  const context = {};
  vm.createContext(context);
  vm.runInContext(source, context);
  return context.DateConverter;
}

function extractMonthSeed() {
  const app = read("app.js");
  const match = app.match(/const monthSeed = (\[[\s\S]*?\]);\n\nfunction addDays/);
  assert(match, "monthSeed could not be extracted for calendar validation");
  const context = {};
  vm.createContext(context);
  vm.runInContext(`this.monthSeed = ${match[1]};`, context);
  return context.monthSeed;
}

function validateCalendarEvents() {
  const DateConverter = loadBrowserDateConverter();
  const monthSeed = extractMonthSeed();
  validateMonthLengths(monthSeed, DateConverter);
  const weekdayRules = [
    { pattern: /सोमबार|Somwar|Monday/i, weekday: "Monday" },
    { pattern: /मंगलबार|Tuesday/i, weekday: "Tuesday" },
    { pattern: /बुधबार|Wednesday/i, weekday: "Wednesday" },
    { pattern: /बिहीबार|Thursday/i, weekday: "Thursday" },
    { pattern: /शुक्रबार|Friday/i, weekday: "Friday" },
    { pattern: /शनिबार|Saturday/i, weekday: "Saturday" },
    { pattern: /आइतबार|Sunday/i, weekday: "Sunday" }
  ];
  monthSeed.forEach((month) => {
    Object.entries(month.events || {}).forEach(([day, title]) => {
      const rule = weekdayRules.find((item) => item.pattern.test(title));
      if (!rule) return;
      const converted = new DateConverter(`${month.year}-${monthSeedMonthNumber(month.name)}-${day}`).toAd();
      assert(converted.day === rule.weekday, `${title} on ${month.name} ${day}, ${month.year} resolves to ${converted.day}, not ${rule.weekday}`);
    });
  });
  validateMajor2083Events(monthSeed);
}

function validateMonthLengths(monthSeed, DateConverter) {
  monthSeed.forEach((month) => {
    const monthNumber = monthSeedMonthNumber(month.name);
    const start = convertBsStartToUtc(DateConverter, month.year, monthNumber);
    const nextMonth = monthNumber === 12 ? 1 : monthNumber + 1;
    const nextYear = monthNumber === 12 ? month.year + 1 : month.year;
    const next = convertBsStartToUtc(DateConverter, nextYear, nextMonth);
    const days = Math.round((next - start) / 86400000);
    assert(month.days === days, `${month.year} ${month.name} should have ${days} days, found ${month.days}`);
  });
}

function convertBsStartToUtc(DateConverter, year, month) {
  const converted = new DateConverter(`${year}-${month}-1`).toAd();
  return Date.UTC(converted.year, converted.month - 1, converted.date);
}

function validateMajor2083Events(monthSeed) {
  const expected = [
    ["वैशाख", 1, "नयाँ वर्ष"],
    ["वैशाख", 18, "बुद्ध जयन्ती"],
    ["जेठ", 15, "गणतन्त्र दिवस"],
    ["भदौ", 12, "जनै पूर्णिमा"],
    ["भदौ", 13, "गाईजात्रा"],
    ["भदौ", 19, "श्रीकृष्ण जन्माष्टमी"],
    ["भदौ", 29, "हरितालिका तीज"],
    ["आश्विन", 3, "संविधान दिवस"],
    ["आश्विन", 25, "घटस्थापना"],
    ["आश्विन", 31, "फूलपाती"],
    ["कार्तिक", 1, "महाअष्टमी"],
    ["कार्तिक", 3, "महानवमी"],
    ["कार्तिक", 4, "विजया दशमी"],
    ["कार्तिक", 22, "लक्ष्मी पूजा"],
    ["कार्तिक", 23, "गाई तिहार"],
    ["कार्तिक", 24, "गोवर्धन पूजा"],
    ["कार्तिक", 25, "भाइटीका"],
    ["कार्तिक", 29, "छठ पर्व"],
    ["पुष", 15, "तमु ल्होसार"],
    ["माघ", 1, "माघे संक्रान्ति"],
    ["माघ", 16, "शहीद दिवस"],
    ["माघ", 24, "सोनाम ल्होसार"],
    ["फागुन", 22, "महाशिवरात्रि"],
    ["चैत", 7, "फागु पूर्णिमा"],
    ["चैत", 23, "घोडे जात्रा"]
  ];
  expected.forEach(([monthName, day, title]) => {
    const month = monthSeed.find((item) => item.year === 2083 && item.name === monthName);
    assert(month, `2083 ${monthName} missing from monthSeed`);
    const event = month.events?.[day] || "";
    assert(event.includes(title), `Expected ${title} on 2083 ${monthName} ${day}, found "${event || "none"}"`);
  });
}

function monthSeedMonthNumber(name) {
  const months = ["वैशाख", "जेठ", "असार", "साउन", "भदौ", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत"];
  const index = months.indexOf(name);
  assert(index >= 0, `unknown BS month in monthSeed: ${name}`);
  return index + 1;
}

validateDailyData();
validateSecuritySurface();
validateConverterClaims();
validateCalendarEvents();
console.log("World-class guardrails passed");
