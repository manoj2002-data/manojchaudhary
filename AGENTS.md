<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All personal details and both languages' texts live in `src/data/` (`portfolio.ts` site-wide, `about.ts` for About, `pages.ts` for Skills/Projects/Timeline/Contact, `cv.ts` for the Europass CV page, which reuses about/pages data so the CV never drifts from the site); components read text via `useLanguage().t` — keeps contact info and translations editable in one place.
- Shared header/footer render in `src/routes/__root.tsx` inside `LanguageProvider`; each site page (about, skills, projects, timeline, contact) is its own route file, so pages change without touching the homepage.
- Homepage sections are separate components in `src/components/home/`; the dark Skills/Projects/Timeline/Contact pages use `src/components/sections/` — keeps each page's look independent.
- Site images are bundled via ES imports from `src/assets/` (or `public/` with a leading `/`), never Lovable CDN `.asset.json` URLs — the site is also deployed to Vercel, where `/__l5e/` paths do not exist.
