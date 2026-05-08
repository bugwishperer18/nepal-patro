# Nepal Patro

A modern Nepali calendar, panchang, forex, bullion, market-rate, and date-converter app by BugWhisperer.

## Features

- Full 2083 BS calendar views with the first month of 2084 BS.
- Clickable day details with festival, panchang, rashi, market notes, and personal notes.
- Dedicated pages for Calendar, Events, Tools, Rates, Gold/Silver, Date Converter, and Panchang.
- NRB-focused forex rates with buy and sell prices for USD, CNY, EUR, GBP, JPY, AUD, and CAD.
- Gold and silver price page with last updated date and clean table layout.
- BS to AD and AD to BS date converter.
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

## Deploy

Deploy this repo to Vercel. The static app is served from the project root and the daily data endpoint is available at `/api/daily-data`.

## Developer

Built and maintained by BugWhisperer.
