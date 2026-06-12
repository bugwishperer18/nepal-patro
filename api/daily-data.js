const fallback = require("../data/daily-data.json");

const allowedHosts = new Set([
  "www.nrb.org.np",
  "www.hamropatro.com",
  "noc.org.np",
  "kalimatimarket.gov.np"
]);

const currencyOrder = ["USD", "CNY", "EUR", "GBP", "JPY", "AUD", "CAD"];
const currencyLabels = {
  USD: "U.S. Dollar",
  CNY: "Chinese Yuan",
  EUR: "European Euro",
  GBP: "UK Pound Sterling",
  JPY: "Japanese Yen",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar"
};

function todayInNepal() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kathmandu",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

async function safeFetch(url) {
  const parsed = new URL(url);
  if (parsed.protocol !== "https:") {
    throw new Error("Blocked non-HTTPS source");
  }

  if (!allowedHosts.has(parsed.hostname)) {
    throw new Error("Blocked source host");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "accept": "text/html,application/json,text/plain;q=0.9,*/*;q=0.8",
        "user-agent": "NepalPatro/1.0 (+https://github.com/BugWhisperer/nepal-patro)"
      }
    });
    if (!response.ok) {
      throw new Error(`Source returned ${response.status}`);
    }
    return response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function cleanText(value) {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseForex(text) {
  const normalized = cleanText(text);
  const rows = currencyOrder.map((code) => {
    const pattern = new RegExp(`${code}[\\s\\S]{0,160}?(\\d+)\\s+(\\d+(?:\\.\\d+)?)\\s+(\\d+(?:\\.\\d+)?)`, "i");
    const match = normalized.match(pattern);
    const fallbackRow = fallback.forex.rates.find(([fallbackCode]) => fallbackCode === code);
    const unit = code === "JPY" ? "10" : "1";
    return [
      code,
      currencyLabels[code],
      match?.[1] || fallbackRow?.[2] || unit,
      match?.[2] || fallbackRow?.[3] || "",
      match?.[3] || fallbackRow?.[4] || ""
    ];
  });

  return {
    badge: `Updated ${todayInNepal()}`,
    updatedAt: todayInNepal(),
    rates: rows
  };
}

function numberFromPrice(value) {
  const match = String(value || "").replace(/,/g, "").match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function validateForex(data) {
  return Array.isArray(data?.rates)
    && data.rates.length === currencyOrder.length
    && data.rates.every(([code, , unit, buy, sell]) => currencyOrder.includes(code)
      && Number(unit) > 0
      && Number(buy) > 0
      && Number(sell) >= Number(buy));
}

function parseGold(text) {
  const normalized = cleanText(text);
  const hallmark = normalized.match(/Gold Hallmark\s*-\s*tola[\s\S]{0,80}?(Nrs\.\s*[\d,]+(?:\.\d+)?)/i)?.[1];
  const silver = normalized.match(/Silver\s*-\s*tola[\s\S]{0,80}?(Nrs\.\s*[\d,]+(?:\.\d+)?)/i)?.[1];
  const hallmark10g = normalized.match(/Gold Hallmark\s*-\s*10g[\s\S]{0,80}?(Nrs\.\s*[\d,]+(?:\.\d+)?)/i)?.[1];
  const silver10g = normalized.match(/Silver\s*-\s*10g[\s\S]{0,80}?(Nrs\.\s*[\d,]+(?:\.\d+)?)/i)?.[1];
  const updated = normalized.match(/Last Updated:\s*([^]+?)(?:Gold Hallmark|$)/i)?.[1]?.trim();
  const base = fallback.gold.preview;
  const valueFor = (label) => base.find(([item]) => item === label)?.[1] || "";
  const preview = [
    ["Gold Hallmark - tola", hallmark || valueFor("Gold Hallmark - tola")],
    ["Gold Tajabi - tola", valueFor("Gold Tajabi - tola")],
    ["Silver - tola", silver || valueFor("Silver - tola")],
    ["Gold Hallmark - 10g", hallmark10g || valueFor("Gold Hallmark - 10g")],
    ["Silver - 10g", silver10g || valueFor("Silver - 10g")],
    ["Last updated", updated || valueFor("Last updated")]
  ];

  return {
    insight: preview[0][1],
    updatedAt: preview[5][1],
    preview
  };
}

function validateGold(data) {
  const hallmark = numberFromPrice(data?.preview?.find(([label]) => label === "Gold Hallmark - tola")?.[1]);
  const silver = numberFromPrice(data?.preview?.find(([label]) => label === "Silver - tola")?.[1]);
  return hallmark > 100000 && silver > 1000 && Boolean(data?.updatedAt);
}

function parseFuel(text) {
  const normalized = cleanText(text);
  const section = normalized.match(/Kathmandu,\s*Pokhara,\s*Dipayal[\s\S]{0,420}?(?:Price applicable|Petrol Prices)/i)?.[0] || normalized;
  const petrol = section.match(/Petrol\(MS\):\s*NRs\s*(\d+(?:\.\d+)?)/i)?.[1];
  const diesel = section.match(/Diesel\(HSD\):\s*NRs\s*(\d+(?:\.\d+)?)/i)?.[1];
  const lpg = section.match(/LP Gas:\s*NRs\s*(\d+(?:\.\d+)?)/i)?.[1];
  const updated = normalized.match(/Kathmandu,\s*Pokhara,\s*Dipayal[\s\S]{0,900}?(\d{4}-\d{2}-\d{2})/i)?.[1] || todayInNepal();
  const rows = [
    ["Petrol", petrol ? `NRs ${petrol}/L` : fallback.fuel.rows?.[0]?.[1] || fallback.fuel.preview[0][1], "Kathmandu, Pokhara, Dipayal"],
    ["Diesel", diesel ? `NRs ${diesel}/L` : fallback.fuel.rows?.[1]?.[1] || "NRs 225.0/L", "Kathmandu, Pokhara, Dipayal"],
    ["LP Gas", lpg ? `NRs ${lpg}/cyl` : fallback.fuel.rows?.[2]?.[1] || "NRs 2160.0/cyl", "Nationwide domestic cylinder"]
  ];
  return {
    insight: rows[0][1].replace("NRs ", "Rs. ").replace("/L", ""),
    updatedAt: updated,
    rows,
    preview: [
      ["Petrol", rows[0][1]],
      ["Diesel", rows[1][1]],
      ["LP Gas", rows[2][1]],
      ["Applies to", "Kathmandu, Pokhara, Dipayal"],
      ["Updated", updated]
    ]
  };
}

function validateFuel(data) {
  return Array.isArray(data?.rows)
    && data.rows.length >= 3
    && data.rows.every((row) => numberFromPrice(row[1]) > 0)
    && Boolean(data?.updatedAt);
}

function parseMarket(text) {
  const normalized = cleanText(text);
  const updatedAt = normalized.match(/संकलित दैनिक थोक मूल्य बारे जानकारी\s*-\s*वि\.सं\.\s*([^क]+?)\s*कृषि उपज/i)?.[1]?.trim()
    || fallback.market.updatedAt
    || todayInNepal();
  const section = normalized.match(/कृषि उपज ईकाइ न्यूनतम अधिकतम औसत([\s\S]*?)(?:कालीमाटी फलफूल|गणेशमान सिंह|द्रुत लिङ्कहरू)/)?.[1] || "";
  const rows = [["Published", updatedAt]];
  const rowPattern = /(.+?)(के\.?जी\.?|केजी|के जी|दर्जन|प्रति गोटा)\s*रू\s*([०-९\d,.]+)\s*रू\s*([०-९\d,.]+)\s*रू\s*([०-९\d,.]+)/g;
  let match;

  while ((match = rowPattern.exec(section)) && rows.length < 140) {
    const label = match[1].trim();
    const unit = match[2].replace(/\s+/g, " ").trim();
    const low = match[3].trim();
    const high = match[4].trim();
    const avg = match[5].trim();
    if (label && !/मूल्य|विवरण|ईकाइ/.test(label)) {
      rows.push([label, `${unit} · रू ${low} - ${high} · औसत रू ${avg}`]);
    }
  }

  return {
    updatedAt,
    source: "https://kalimatimarket.gov.np/price",
    preview: rows.length > 1 ? rows : fallback.market.preview || []
  };
}

function validateMarket(data) {
  return Array.isArray(data?.preview)
    && data.preview.length >= 25
    && Boolean(data.updatedAt)
    && data.preview[0]?.[0] === "Published";
}

function parsePanchangReference(text) {
  const normalized = cleanText(text);
  const date = normalized.match(/([०-९\d]{1,2}\s+\S+\s+[०-९\d]{4},\s*\S+)/)?.[1] || todayInNepal();
  const englishDate = normalized.match(/\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},\s+\d{4}\b/)?.[0] || todayInNepal();
  const dateIndex = normalized.indexOf(date);
  const panchangIndex = normalized.indexOf("पञ्चाङ्ग:");
  const tithiCandidate = dateIndex >= 0 && panchangIndex > dateIndex
    ? normalized.slice(dateIndex + date.length, panchangIndex).trim()
    : normalized.match(/(?:शुक्ल|कृष्ण)\s+\S+/)?.[0]?.trim();
  const tithiLine = tithiCandidate
    || fallback.panchang?.tithiLine
    || "";
  const panchangText = normalized.match(/पञ्चाङ्ग:\s*([अ-ह०-९\s:]+?)(?:\s+\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b|#|Aajako)/)?.[1]?.trim()
    || fallback.panchang?.panchangText
    || "";
  const components = panchangText.split(/\s+/).filter(Boolean);

  return {
    updatedAt: englishDate,
    date,
    tithiLine,
    panchangText,
    source: "Hamro Patro daily panchang reference",
    sourceUrl: "https://www.hamropatro.com/rashifal",
    authority: "Nepal Panchang Nirnayak Bikas Samiti approved patro should be treated as final for religious decisions.",
    components: {
      yoga: components[0] || "",
      karana: components[1] || "",
      nakshatra: components.slice(2).join(" ")
    },
    note: "Live reference parsed from Hamro Patro. Use an officially published patro or priest for sanskar-level muhurat."
  };
}

function validatePanchang(data) {
  return Boolean(data?.updatedAt)
    && Boolean(data?.sourceUrl)
    && (Boolean(data?.tithiLine) || Boolean(data?.panchangText));
}

function parseHoroscopeReference(text) {
  const normalized = cleanText(text);
  const hasRashiList = ["मेष", "वृष", "मिथुन", "कर्कट", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"]
    .every((sign) => normalized.includes(sign));

  return {
    ...fallback.horoscope,
    updatedAt: todayInNepal(),
    source: "Hamro Patro daily rashifal reference",
    sourceUrl: "https://www.hamropatro.com/rashifal",
    providerNote: "Live rashifal source is reachable. The app keeps its own advisory summaries unless a licensed content feed is configured.",
    referenceAvailable: hasRashiList
  };
}

function validateHoroscopeReference(data) {
  return Boolean(data?.sourceUrl) && data?.referenceAvailable === true;
}

function healthOk(source, details = {}) {
  return {
    source,
    status: "live",
    checkedAt: todayInNepal(),
    ...details
  };
}

function healthFallback(source, reason) {
  return {
    source,
    status: "fallback",
    checkedAt: todayInNepal(),
    reason: reason || "Source unavailable or parser validation failed"
  };
}

function useParsedSource(result, parser, validator, fallbackValue, sourceName) {
  if (result.status !== "fulfilled") {
    return {
      value: fallbackValue,
      health: healthFallback(sourceName, result.reason?.message || "Fetch failed")
    };
  }

  try {
    const parsed = parser(result.value);
    if (!validator(parsed)) {
      return {
        value: fallbackValue,
        health: healthFallback(sourceName, "Parsed data did not pass validation")
      };
    }
    return {
      value: parsed,
      health: healthOk(sourceName, {
        updatedAt: parsed.updatedAt,
        rowCount: parsed.rates?.length || parsed.rows?.length || parsed.preview?.length || undefined
      })
    };
  } catch (error) {
    return {
      value: fallbackValue,
      health: healthFallback(sourceName, error.message)
    };
  }
}

async function buildDailyData() {
  const [forexHtml, goldHtml, fuelHtml, marketHtml, rashifalHtml] = await Promise.allSettled([
    safeFetch("https://www.nrb.org.np/forex/"),
    safeFetch("https://www.hamropatro.com/gold"),
    safeFetch("https://noc.org.np/petrol"),
    safeFetch("https://kalimatimarket.gov.np/price"),
    safeFetch("https://www.hamropatro.com/rashifal")
  ]);
  const forex = useParsedSource(forexHtml, parseForex, validateForex, fallback.forex, "NRB forex");
  const gold = useParsedSource(goldHtml, parseGold, validateGold, fallback.gold, "Hamro Patro gold");
  const fuel = useParsedSource(fuelHtml, parseFuel, validateFuel, fallback.fuel, "NOC fuel");
  const market = useParsedSource(marketHtml, parseMarket, validateMarket, fallback.market, "Kalimati market");
  const panchang = useParsedSource(rashifalHtml, parsePanchangReference, validatePanchang, fallback.panchang, "Hamro Patro panchang");
  const horoscope = useParsedSource(rashifalHtml, parseHoroscopeReference, validateHoroscopeReference, fallback.horoscope, "Hamro Patro rashifal");

  return {
    ...fallback,
    updatedAt: todayInNepal(),
    sourceNote: "Daily snapshot from allowlisted NRB, Hamro Patro, NOC, and Kalimati sources.",
    forex: forex.value,
    gold: gold.value,
    fuel: fuel.value,
    market: market.value,
    panchang: panchang.value,
    horoscope: horoscope.value,
    sourceHealth: {
      forex: forex.health,
      gold: gold.health,
      fuel: fuel.health,
      market: market.health,
      panchang: panchang.health,
      horoscope: horoscope.health
    }
  };
}

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request?.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request?.method && !["GET", "HEAD"].includes(request.method)) {
    response.setHeader("Allow", "GET, HEAD, OPTIONS");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const isManualRefresh = Boolean(request?.query?.refresh)
    || new URL(request?.url || "/", "https://nepal-patro.vercel.app").searchParams.has("refresh");
  try {
    const data = await buildDailyData();
    response.setHeader("Cache-Control", isManualRefresh ? "no-store" : "public, s-maxage=86400, stale-while-revalidate=43200");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.status(200).json(data);
  } catch {
    response.setHeader("Cache-Control", isManualRefresh ? "no-store" : "public, s-maxage=3600");
    response.status(200).json({
      ...fallback,
      updatedAt: fallback.updatedAt,
      sourceNote: `${fallback.sourceNote} Live refresh fallback was used.`,
      sourceHealth: {
        forex: healthFallback("NRB forex", "API-level fallback"),
        gold: healthFallback("Hamro Patro gold", "API-level fallback"),
        fuel: healthFallback("NOC fuel", "API-level fallback"),
        market: healthFallback("Kalimati market", "API-level fallback"),
        panchang: healthFallback("Hamro Patro panchang", "API-level fallback"),
        horoscope: healthFallback("Hamro Patro rashifal", "API-level fallback")
      }
    });
  }
};

module.exports._internal = {
  parseForex,
  parseGold,
  parseFuel,
  parseMarket,
  parsePanchangReference,
  parseHoroscopeReference,
  validateForex,
  validateGold,
  validateFuel,
  validateMarket,
  validatePanchang,
  validateHoroscopeReference,
  useParsedSource
};
