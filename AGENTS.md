# AGENTS.md

## Cursor Cloud specific instructions

This is an **Astro v5 static marketing website** for **Oros IT Support** (local IT support for small businesses in Zuid-Limburg, Netherlands) with React 19 islands, Tailwind CSS v4, and TypeScript.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at `localhost:4321`) |
| Build | `npm run build` |
| Type check | `npx astro check` |
| Preview build | `npm run preview` |

See `README.md` for the full commands table.

### Site structure

- **Primary language:** Dutch (`/`) — lang code `nl`
- **Secondary language:** English (`/en/`) — lang code `en`
- All copy lives in `src/i18n/translations.ts` (single source of truth for both languages)
- Sections in order: Hero, TrustBar, Services, About, WhyOros, CommonProblems, Comparison, QuickScan, Pricing, Contact

### Notes

- **No backend, database, or external API dependencies.** The contact form is UI-only (`e.preventDefault()`).
- **Netlify edge functions** (`netlify/edge-functions/rewrite.js`) only work when deployed or via `netlify dev`; they are not needed for local development.
- `@astrojs/check` and `typescript` are devDependencies needed to run `npx astro check`. They are installed alongside the project deps.
- The `fontkitten` transitive dependency warns about requiring Node >= 24.12.0; this is harmless and does not affect functionality on Node 22.
- Package manager is **npm** (lockfile: `package-lock.json`).
