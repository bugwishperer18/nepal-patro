# Nepal Patro Build Notes

Maintainer: BugWhisperer  
Project: `nepal-patro`  
Last updated: 2026-06-14

## Overview

Nepal Patro is a modern Nepali calendar and daily utility app built as a static web app with optional Electron packaging for macOS. It is designed around a clean Apple-inspired interface, subtle Nepali flag accents, bilingual English/Nepali UI, daily data refresh, and practical tools that are useful for Nepali households, travelers, professionals, and planners.

## Current Product Surface

- Calendar homepage with BS/AD toggle.
- English/Nepali language toggle across the site.
- Month picker covering BS 2083 calendar views plus the first BS 2084 month available in the calendar.
- Clickable day detail modal with festival, panchang, rashi, market signal, and saved personal notes.
- Dedicated top-level pages:
  - Calendar
  - Events
  - Tools
  - Rates
  - Gold/Silver
  - Market
  - Fuel
  - Horoscope
  - Date Converter
  - Panchang
  - Shubha Sait
- Tools page with modern icon cards and direct navigation to dedicated tools.
- Share panel for public sharing with native share/copy fallback.
- Saved notes in local storage.
- Data freshness/status panel for fetched sources.

## Daily Data Tools

### Forex

- Source: Nepal Rastra Bank forex page.
- Shows only Nepal-relevant currencies:
  - USD
  - CNY
  - EUR
  - GBP
  - JPY
  - AUD
  - CAD
- USD and CNY are placed first.
- Shows unit, buy, and sell prices.
- Includes country/region flag icons.
- Daily refresh is cached in the browser for the day.

### Gold/Silver

- Source: Hamro Patro gold page.
- Uses `Gold Hallmark - tola` as the primary gold price.
- Shows gold/silver rows in a table/card layout.
- Includes last updated date/time.
- Includes readable historical charts for:
  - Gold Hallmark - Tola
  - Silver - Tola
- Chart points support hover/click tooltips with date and price.

### Fuel

- Source: Nepal Oil Corporation petrol page.
- Uses the `Kathmandu, Pokhara, Dipayal` section where available.
- Tracks:
  - Petrol
  - Diesel
  - LP Gas cylinder
- Includes last updated date and manual refresh.

### Kalimati Market

- Source: Kalimati market price page.
- Pulls vegetable and fruit wholesale rates from the daily wholesale price section.
- Shows larger readable cards with produce icons.
- Includes search, count badge, last updated date, and manual refresh.

### Panchang and Rashifal

- Panchang source: `panchang-ts`, MIT License.
- Panchang is calculated offline for Kathmandu, Nepal.
- The app calculates:
  - Nepali date
  - Tithi line
  - Yoga
  - Karana
  - Nakshatra
  - Sunrise/sunset
  - Moonrise/moonset
  - Abhijit Muhurta
  - Rahu Kalam
- Hamro Patro remains a Rashifal reference/status source.
- Rashifal page shows live source availability/status.
- In-app rashifal text remains advisory/original guidance unless a licensed content feed is configured.
- Panchang and Shubha Sait include clear advice to confirm high-stakes religious decisions with an official patro or priest.

## Utility Tools

### BS ⇄ AD Date Converter

- Uses vendored MIT-licensed `@remotemerge/nepali-date-converter`.
- Supported range:
  - BS 1975-2099
  - AD 1918-04-13 through 2043-04-13
- Supports:
  - Nepali to English conversion
  - English to Nepali conversion
- The homepage sidebar converter uses full date inputs, not only day selection.
- Legal/official documents should still be confirmed with official records.

### Nepali Land Metrics Converter

Supports conversion across:

- Ropani system:
  - Ropani
  - Aana
  - Paisa
  - Daam
- Bigha system:
  - Bigha
  - Kattha
  - Dhur
- Square units:
  - Sq.Ft
  - Sq.M

### Loan EMI Calculator

Inputs:

- Loan amount
- Interest rate %
- Tenure in years
- Tenure in months
- Start date

Outputs:

- EMI per month
- Total interest
- Total amount
- EMI end date

Additional features:

- Compare two monthly installment scenarios.
- Model amendment impact for changes in principal, interest rate, and remaining tenure.

## Security Status

Implemented protections:

- Restrictive Content Security Policy in `index.html`.
- No unsafe remote-data `innerHTML` rendering in `app.js`.
- Vercel API fetches only allowlisted HTTPS source domains.
- API source fetches use timeouts and validation before returning parsed data.
- Data source fallback is explicit and visible in source-health UI.
- Electron hardening:
  - `contextIsolation: true`
  - `nodeIntegration: false`
  - `sandbox: true`
  - `webSecurity: true`
  - external links restricted to HTTP/HTTPS system-browser opens
  - permission requests denied by default
- `SECURITY.md` added for public reporting and support expectations.
- `scripts/validate-data.cjs` checks data shape, source-health metadata, CSP/security expectations, Electron hardening, and converter range claims.

## Data Confidence Rules

- Forex, gold/silver, fuel, and Kalimati market data are fetched from named public pages and cached daily.
- If a source cannot be fetched or parsed safely, bundled fallback data is used and the UI marks the source as needing review.
- Panchang/rashifal status is transparent:
  - Panchang is calculated with `panchang-ts` for Kathmandu, Nepal.
  - Rashifal uses original in-app advisory guidance and live reference/status from Hamro Patro when reachable.
  - No free, reliable, license-clear monthly Nepali Rashifal feed suitable for republishing was found during research.
- BS/AD converter uses a vendored MIT-licensed conversion table, but official records should be used for legal documents.

## Run Locally

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
npm install
npm run serve
```

Open:

```text
http://localhost:5173
```

## Run Electron App

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
npm run electron
```

## Build macOS DMG

Use a workspace-local Electron Builder cache:

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
env ELECTRON_BUILDER_CACHE="$PWD/.cache/electron-builder" npm run dist:mac
```

Expected arm64 artifact:

```text
dist/Nepal-Patro-1.0.0-arm64.dmg
```

The current package is unsigned and not notarized. Apple Developer signing and notarization should be added before public macOS distribution outside personal testing.

## Quality Checks

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
npm run check:all
npm audit --audit-level=moderate
```

Additional converter smoke checks were run for:

- `2083-01-22 BS = 2026-05-05 AD`
- `1975-01-01 BS = 1918-04-13 AD`
- `2099-12-30 BS = 2043-04-13 AD`
- `2026-05-05 AD = 2083-01-22 BS`

## Deploy to Vercel

The repo is linked to the Vercel project `nepal-patro`.

Run from the project directory:

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
vercel deploy --prod --yes
```

Important: do not run Vercel from `~`, because it will try to deploy the home directory.

## GitHub Release Flow

Run from the project directory:

```sh
cd /Users/sudee/Documents/Codex/2026-05-03/build-a-web-app-electron-app
git status
git add .
git commit -m "Your release message"
git push origin main
```

Generated folders are ignored:

- `node_modules/`
- `dist/`
- `release/`
- `.cache/`
- `.vercel/`

## Current Release Notes

Latest completed release work:

- Expanded BS/AD conversion to BS 1975-2099.
- Vendored `@remotemerge/nepali-date-converter` browser build and MIT license.
- Added `panchang-ts` as the free MIT-licensed Panchang calculation source.
- Added package assets to Electron build config.
- Built macOS arm64 DMG locally.
- Pushed latest converter/package changes to GitHub.
- Verified project checks and dependency audit from the repo directory.

## Remaining Improvements

- Add a licensed/official panchang and rashifal content feed if the app should republish full religious/astrology content.
- Add Apple Developer signing and notarization for public macOS distribution.
- Add automated visual regression tests for desktop, tablet, and mobile.
- Add Vercel deployment URL/status to this file after final production deployment is confirmed.
- Add optional PWA service worker for offline installability if desired.
