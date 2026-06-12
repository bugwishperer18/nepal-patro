# Security Policy

Nepal Patro is a no-login public utility app. It avoids storing sensitive personal data and keeps daily data fetching limited to allowlisted public sources.

## Reporting a Vulnerability

Please open a private security advisory or contact the maintainer before publishing exploit details. Include:

- Affected page or API route
- Steps to reproduce
- Impact and suggested fix, if known

## Security Baseline

- Static app with a restrictive Content Security Policy.
- Serverless data API fetches only from allowlisted HTTPS domains.
- Remote data is normalized and rendered through DOM APIs, not raw HTML injection.
- Electron runs with `contextIsolation`, `sandbox`, and `nodeIntegration: false`.
- External Electron navigation is restricted to system-browser HTTP(S) links.

## Non-Goals

This app does not provide financial, legal, medical, or religious authority. Rates, panchang, rashifal, loan estimates, and land conversions are planning aids and should be confirmed with official providers before high-stakes decisions.
