# Happywinds Logos Website

Portfolio site for **Happywinds Logos** — logic-based logo design from Ahmedabad.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` → `.env.local` and set:

- `GMAIL_USER` — studio Gmail
- `GMAIL_APP_PASSWORD` — Google App Password (for contact + careers forms)

## Pages

- `/` — Hero, selected work, logic intro, clients, packages
- `/work` — Full project grid
- `/work/[slug]` — Case study
- `/logic` — Logic-based logos
- `/packages` — Startup / Silver / Gold / Custom
- `/about` — Studio story + team
- `/careers` — Applications (with resume upload)
- `/contact` — Enquiry
- `/services` — Services

## Folder layout

| Path | Purpose |
|------|---------|
| `src/` | App Router pages, components, data |
| `public/assets/` | Images used by the site |
| `scripts/` | One-off asset helpers |
| `_source/` | Original brand dumps (local only, not in git) |
| `_archive/` | Old site copy (local only, not in git) |

## Deploy

Push this repo to GitHub, then connect it in Vercel (framework: Next.js, root directory: `.`).
