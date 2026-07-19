# Nepal Patro Project

## Purpose

Nepal Patro is a no-login Nepali calendar and utility app for everyday Nepal-focused planning: calendar, events, panchang, rates, date conversion, land conversion, loan estimates, auspicious timing, and local notes.

## Current Surface

- Calendar covering BS 2083 plus the first month of BS 2084.
- BS/AD calendar toggle.
- English/Nepali site language toggle.
- Accessible light/dark mode with remembered preference.
- Calendar day modal with festival, tithi, nakshatra, yoga, karana, rashi, market note, and personal note.
- Dedicated pages for Calendar, Events, Tools, Rates, Gold/Silver, Market, Fuel, Horoscope, Date Converter, Land Converter, Loan Calculator, Panchang, and Shubha Sait.
- Auspicious time planner for purchase, investment, study, travel, and griha puja with avoid filters.
- Advisory Rashifal with daily, weekly, monthly, and yearly views plus detailed rashi pages.
- Cmd/Ctrl+K quick jump for pages, tools, and rashi detail pages.
- Daily data refresh using Vercel API plus local fallback for static/Electron.

## Stack

- Static web app: `index.html`, `styles.css`, `app.js`
- Serverless API: `api/daily-data.js`
- Desktop shell: Electron in `electron/main.cjs`
- Packaging: `electron-builder`
- Hosting: Vercel
- Data validation: `scripts/validate-data.cjs`

## Data Confidence

The app is useful for planning, not authority. Always preserve visible notices and source-health panels for:

- daily rates
- panchang and shubha sait
- rashifal
- land conversion
- loan estimates
- date conversion range

Official or high-stakes decisions should be confirmed with the relevant official source, bank, land office, official patro, priest, or qualified professional.

## Data Refresh Model

The client checks browser storage before fetching. If the app has already refreshed today, it uses same-day cached data. On first daily open or manual refresh, it fetches `/api/daily-data`. Static file and Electron use bundled fallback data if hosted API access fails.

## Source Inventory

| Area | Source | Notes |
| --- | --- | --- |
| Forex | NRB | `USD`, `CNY`, `EUR`, `GBP`, `JPY`, `AUD`, `CAD`; no INR |
| Gold/Silver | Hamro Patro | Use `Gold Hallmark - tola` as primary |
| Fuel | NOC | `Kathmandu, Pokhara, Dipayal`; petrol, diesel, LP Gas |
| Vegetables/Fruit | Kalimati | Daily wholesale section |
| Panchang | `panchang-ts` | MIT, Kathmandu calculation |
| Rashifal | Original app guidance | Third-party full text requires license |
| BS/AD | Vendored converter | MIT, BS 1975-2099 |

## UX Principles

- Apple-like clarity: quieter colors, softer surfaces, precise spacing, readable controls.
- Nepali flag red/blue as accents, not a heavy theme.
- Avoid marketing pages; every page should be a usable tool.
- Keep mobile dense but calm. No horizontal overflow.
- Use direct pages for major tools; reserve modals for calendar day detail and lightweight previews.

## Known Limits

- BS/AD conversion is limited to BS 1975-2099.
- Full official 2084 lunar festival data should be updated only when a public patro is announced.
- Free licensed monthly Nepali Rashifal feed has not been found; do not republish third-party horoscope text.
- Current macOS package is unsigned and not notarized.

## Verification

Required before release-like handoff:

```sh
npm run check:all
npm audit --audit-level=moderate
```

Useful visual smoke check after frontend work:

```sh
npx -p playwright@1.57.0 node -e "const { chromium } = require('playwright'); (async()=>{ const b=await chromium.launch({headless:true}); const p=await b.newPage({viewport:{width:1280,height:900}}); await p.goto('file://' + process.cwd() + '/index.html'); await p.screenshot({path:'/tmp/nepal-patro.png'}); await b.close(); })();"
```

Use an escalated shell for Playwright if macOS blocks Chromium from the sandbox.
