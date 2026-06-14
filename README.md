# Nepal Patro

A modern Nepali calendar, panchang, forex, bullion, market-rate, and date-converter app by BugWhisperer.

## Features

- Full 2083 BS calendar views with the first month of 2084 BS.
- Clickable day details with festival, panchang, rashi, market notes, and personal notes.
- Dedicated pages for Calendar, Events, Tools, Rates, Gold/Silver, Date Converter, and Panchang.
- Nepali land metrics converter for Ropani, Aana, Paisa, Daam, Bigha, Kattha, Dhur, sq.ft, and sq.m.
- Loan EMI calculator with monthly EMI, total interest, payoff date, installment comparison, and loan-amendment impact.
- NRB-focused forex rates with buy and sell prices for USD, CNY, EUR, GBP, JPY, AUD, and CAD.
- Gold and silver price page with last updated date and clean table layout.
- BS to AD and AD to BS date converter for BS 1975-2099 using a vendored MIT-licensed converter library.
- Panchang source integration using the MIT-licensed `panchang-ts` calculation library for Kathmandu, Nepal.
- Clear confidence notes for shubha sait, horoscope, and supported converter range.
- Source-health checks that mark stale or parser-fallback data instead of silently presenting it as live.
- Daily data refresh through a Vercel serverless endpoint with local cache fallback.
- Optional Electron desktop shell for macOS.

## Run Locally

```sh
npm run serve
```

Open `http://localhost:5173`.

## Run Desktop App

```sh
npm install
npm run electron
```

## Build macOS DMG

```sh
npm install
npm run dist:mac
```

The first macOS package target is an unsigned DMG for personal use and testing.

## Quality Checks

```sh
npm run check:all
```

The guardrail script validates daily data shape, required forex ordering, parser validators, CSP presence, Electron hardening flags, vendored converter presence, and converter-range claims.

## Deploy

Deploy this repo to Vercel. The static app is served from the project root and the daily data endpoint is available at `/api/daily-data`.

## Developer

Built and maintained by BugWhisperer.

## Data Confidence

Forex uses NRB as the preferred source. Gold/silver, fuel, and Kalimati market data are fetched from named public pages and cached daily. If a public source cannot be fetched or parsed safely, the app uses bundled fallback data and marks the source as needing review. Panchang is calculated with the MIT-licensed `panchang-ts` library for Kathmandu, Nepal, with Hamro Patro retained as a Rashifal reference source. In-app Rashifal guidance remains advisory/original unless a licensed content feed is configured. Shubha sait is advisory. The BS/AD converter uses the vendored MIT-licensed `@remotemerge/nepali-date-converter` browser build for BS 1975-2099; confirm official records for legal documents.

## Third-Party Notices

- `@remotemerge/nepali-date-converter` by Madan Sapkota, MIT License. Vendored at `vendor/remotemerge-nepali-date-converter/`.
- `panchang-ts` by Ishank, MIT License. Used as the free offline Panchang calculation source.
