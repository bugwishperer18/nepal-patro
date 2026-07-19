# AGENTS.md

## Project Overview

Nepal Patro is a static-first Nepali calendar and daily utility app with an optional Electron macOS shell. The product is maintained as BugWhisperer's public no-login toolkit for Nepali calendar, rates, panchang, land, loan, and planning workflows.

## Commands

```sh
npm run serve          # Static local server at http://localhost:5173
npm run check:all      # JS syntax, data/source/security/converter guardrails
npm run electron       # Launch Electron shell
npm run dist:mac       # Build unsigned macOS DMG
```

For DMG builds, prefer:

```sh
env ELECTRON_BUILDER_CACHE="$PWD/.cache/electron-builder" npm run dist:mac
```

For Vercel production deploys, run from this project directory only:

```sh
vercel deploy --prod --yes
```

Do not run Vercel from `~`; it tries to deploy the home directory.

## Architecture

- `index.html`, `styles.css`, and `app.js` are the primary static app. This is intentionally zero-build for the web surface.
- `api/daily-data.js` is the Vercel serverless data endpoint and also exports parser validators for `scripts/validate-data.cjs`.
- `data/daily-data.json` and `data/daily-data.js` are bundled offline fallback data for static file/Electron use.
- `vendor/remotemerge-nepali-date-converter/` contains the vendored MIT BS/AD converter and license. Do not replace it with a network dependency unless the offline app path is redesigned.
- `electron/main.cjs` is a hardened wrapper around the static app. Keep the desktop shell no-login and local-file friendly.
- `BUILD_NOTES.md` is the detailed release/history record. Keep `AGENTS.md` shorter and operational.

## Data Sources

- Forex: NRB, only `USD`, `CNY`, `EUR`, `GBP`, `JPY`, `AUD`, `CAD`; keep `USD` and `CNY` first.
- Gold/silver: Hamro Patro gold page; primary value is `Gold Hallmark - tola`.
- Fuel: NOC petrol page; use the `Kathmandu, Pokhara, Dipayal` section and include petrol, diesel, and LP Gas.
- Market: Kalimati daily wholesale section; preserve large readable produce cards and search.
- Panchang: `panchang-ts` MIT calculation for Kathmandu, Nepal.
- Rashifal: original advisory text only unless a licensed feed is configured. Do not copy full third-party horoscope text into the app.

All remote data must show source-health/fallback state instead of silently presenting stale bundled data as live.

## Product Patterns

- Keep the UI Apple/macOS-inspired: subtle surfaces, restrained Nepali flag accents, accessible light/dark mode, readable system fonts.
- Top nav links are dedicated sections, not modal-only tools.
- Calendar day details can use a modal, but the backdrop should only dim lightly.
- The homepage calendar should fit a whole month in the first loaded frame when practical.
- Bilingual support must update the whole visible site, including dynamically rendered cards.
- Theme and display choices are remembered in `localStorage`.

## Gotchas

- `scripts/validate-data.cjs` intentionally scans for unsafe sinks like `innerHTML`, `insertAdjacentHTML`, `eval`, and `new Function`. Build DOM nodes with `textContent`.
- The BS/AD converter claim is limited to BS `1975-2099`; do not broaden marketing copy beyond the vendored library range.
- 2084 lunar festivals should stay caveated until public patro data is available.
- Panchang/Shubha Sait are planning aids; high-stakes religious decisions must tell users to confirm with an official patro or priest.
- Land and loan tools are calculators only; keep legal/financial confirmation notices.
- If Playwright browser automation fails in the sandbox, use the already installed browser via an escalated shell command.
- Project skill instructions live in both `.agents/skills/nepal-patro/` and `skills/nepal-patro/`; keep them in sync when changing project guidance.

## Security Requirements

- Keep the CSP in `index.html` restrictive.
- `api/daily-data.js` must fetch only allowlisted HTTPS hosts with timeouts and validators.
- Electron must keep `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`, `webSecurity: true`, deny permissions by default, and open external HTTP(S) links through the system browser only.
- Run `npm run check:all` before handing off code changes.

## Release Notes

- Public repo: `https://github.com/bugwishperer18/nepal-patro.git`
- Production URL: `https://nepal-patro.vercel.app`
- Author/maintainer identity in package/docs: `BugWhisperer`
