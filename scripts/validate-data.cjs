const fs = require("node:fs");
const path = require("node:path");
const dailyData = require("../data/daily-data.json");
const dailyApi = require("../api/daily-data.js");

const root = path.resolve(__dirname, "..");
const requiredCurrencies = ["USD", "CNY", "EUR", "GBP", "JPY", "AUD", "CAD"];

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
  assert(fs.existsSync(path.join(root, "manifest.webmanifest")), "PWA manifest is missing");
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
  assert(/Verified: BS 2083 - Baisakh 2084/.test(app), "converter range copy must disclose exact verified range");
  assert(!/BS 2000-2090|2000-2090/.test(app + read("index.html")), "overbroad converter range claim found");
  assert(!/const variant = base\.slice/.test(app), "converter must not use generated BS month patterns");
}

validateDailyData();
validateSecuritySurface();
validateConverterClaims();
console.log("World-class guardrails passed");
