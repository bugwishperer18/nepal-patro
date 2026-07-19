---
name: nepal-patro
description: Use when changing this Nepal Patro app, especially calendar, rates, panchang, data-source, Electron, accessibility, or deployment behavior.
---

# Nepal Patro Skill

## Before Editing

1. Read `AGENTS.md` for operational gotchas.
2. Read the relevant section of `PROJECT.md` or `BUILD_NOTES.md` for product/data context.
3. Check `git status --short`; this repo often has active UI changes in progress.

## Implementation Rules

- Keep the web app static-first. Do not introduce a build step unless the user explicitly agrees.
- Use DOM creation and `textContent` for remote/fetched data. `innerHTML` should stay absent from `app.js`.
- Preserve bilingual English/Nepali rendering for new visible strings.
- Preserve light/dark theme tokens and verify contrast for new colors.
- Keep source-health UI honest whenever data can be stale or fallback.
- Do not broaden BS/AD range beyond BS 1975-2099.
- Keep major tools as dedicated pages/sections, not only popups.

## Data Rules

- Add new external data sources only in `api/daily-data.js`.
- Add source hostnames to the allowlist only when the URL is fixed and HTTPS.
- Validate parsed data before returning it.
- Keep bundled fallback data in `data/daily-data.json` useful for static file and Electron.
- Never accept user-provided source URLs.

## Security Rules

- Run `npm run check:all` after code changes.
- Keep Electron settings hardened:
  - `contextIsolation: true`
  - `nodeIntegration: false`
  - `sandbox: true`
  - `webSecurity: true`
- Keep CSP restrictive in `index.html`.

## Visual QA

- For frontend changes, use Playwright screenshot checks when possible.
- Check desktop and mobile widths.
- Verify no horizontal overflow.
- If Playwright fails in the sandbox, run it from an escalated shell.

## Release

- Commit/push only when the user asks.
- Production deploy is Vercel project `nepal-patro`.
- Always run Vercel from the project directory, never from `~`.
