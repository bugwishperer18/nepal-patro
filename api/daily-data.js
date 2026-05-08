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
    const pattern = new RegExp(`${code}[\\s\\S]{0,120}?(\\d+(?:\\.\\d+)?)\\s+(\\d+(?:\\.\\d+)?)`, "i");
    const match = normalized.match(pattern);
    const fallbackRow = fallback.forex.rates.find(([fallbackCode]) => fallbackCode === code);
    const unit = code === "JPY" ? "10" : "1";
    return [
      code,
      currencyLabels[code],
      fallbackRow?.[2] || unit,
      match?.[1] || fallbackRow?.[3] || "",
      match?.[2] || fallbackRow?.[4] || ""
    ];
  });

  return {
    badge: `Updated ${todayInNepal()}`,
    updatedAt: todayInNepal(),
    rates: rows
  };
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

function parseFuel(text) {
  const normalized = cleanText(text);
  const petrol = normalized.match(/Petrol[\s\S]{0,100}?(\d+(?:\.\d+)?)/i)?.[1];
  return {
    insight: petrol ? `Rs. ${petrol}` : fallback.fuel.insight,
    preview: [
      ["Petrol", petrol ? `NRs ${petrol}/L` : fallback.fuel.preview[0][1]],
      ["Applies to", "Kathmandu, Pokhara, Dipayal"],
      ["Updated", todayInNepal()]
    ]
  };
}

async function buildDailyData() {
  const [forexHtml, goldHtml, fuelHtml] = await Promise.allSettled([
    safeFetch("https://www.nrb.org.np/forex/"),
    safeFetch("https://www.hamropatro.com/gold"),
    safeFetch("https://noc.org.np/petrol")
  ]);

  return {
    ...fallback,
    updatedAt: todayInNepal(),
    sourceNote: "Daily snapshot from allowlisted NRB, Hamro Patro, NOC, and Kalimati sources.",
    forex: forexHtml.status === "fulfilled" ? parseForex(forexHtml.value) : fallback.forex,
    gold: goldHtml.status === "fulfilled" ? parseGold(goldHtml.value) : fallback.gold,
    fuel: fuelHtml.status === "fulfilled" ? parseFuel(fuelHtml.value) : fallback.fuel
  };
}

module.exports = async function handler(_request, response) {
  try {
    const data = await buildDailyData();
    response.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.status(200).json(data);
  } catch {
    response.setHeader("Cache-Control", "public, s-maxage=3600");
    response.status(200).json({
      ...fallback,
      updatedAt: fallback.updatedAt,
      sourceNote: `${fallback.sourceNote} Live refresh fallback was used.`
    });
  }
};
