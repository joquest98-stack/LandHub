## Purpose
This repository is a small single-page React + TypeScript app (Vite). These instructions give an AI coding agent the minimal, actionable knowledge to be productive quickly in this codebase.

## Big picture
- **App type**: Single-page app without a routing library. Navigation is implemented via the `Page` enum in `types.ts` and manual switch rendering in `App.tsx`.
- **Entry points**: `index.tsx` mounts `App`. `App.tsx` holds global navigation state and renders pages from `pages/`.
- **Styling**: Tailwind is loaded from CDN in `index.html` (see inline `tailwind.config` in that file). Components rely on Tailwind utility classes and custom color names defined there.
- **Build/dev**: Uses Vite. Scripts are in `package.json`: `npm run dev`, `npm run build`, `npm run preview`. Vite server configured at port `3000` in `vite.config.ts`.

## Key files & patterns (reference examples)
- `types.ts` — central domain types and the `Page` enum used for navigation.
  - Example: add new page -> update `Page` and handle it in `App.tsx`.
- `App.tsx` — top-level state and the `renderPage()` switch that chooses which page component to render.
  - Example: pages are rendered via `case Page.X: return <XPage .../>;`.
- `components/layout/Header.tsx` — navigation links (`NAV_LINKS`) and the `onNavigate` callback pattern. Update this array to change header links.
- `hooks/useAuth.ts` + `contexts/AuthContext.ts` — `useAuth()` expects an `AuthContext.Provider` higher in the tree; if not present `useAuth()` throws. (Search shows no provider in the repo; add one when implementing auth features.)
- `components/ui/Button.tsx` — local UI primitives follow a `variant` + `size` pattern; prefer using these primitives for consistent styling.
- `index.html` — includes Tailwind CDN and an `importmap` pointing to CDN-hosted React/Recharts. Note: runtime may rely on these CDN imports.
- `vite.config.ts` — loads env with `loadEnv` and injects `GEMINI_API_KEY` via `define`. Put `GEMINI_API_KEY` in an `.env` file (or set the environment) and restart Vite after changes.

## Developer workflows & commands
- Start dev server: `npm install` (if dependencies needed) then `npm run dev` (Vite, port 3000).
- Build for production: `npm run build`.
- Preview build: `npm run preview`.
- Environment variables: use `.env` (e.g. `.env.local`) with `GEMINI_API_KEY=...`. Vite reads via `loadEnv`; the value is exposed as `process.env.GEMINI_API_KEY` by `vite.config.ts`.

## Project-specific conventions
- Navigation: Add pages by creating a file in `pages/`, adding a `Page` enum value in `types.ts`, and adding a `case` in `App.tsx` and an entry in `NAV_LINKS` if it should appear in the header.
- Passing callbacks: components/pages expect `onNavigate` and `onShowDetails` callbacks from `App.tsx` rather than using a routing library. Maintain this pattern for consistent behavior.
- Styling: Use Tailwind utility classes. The project depends on the inline `tailwind.config` in `index.html` for custom color names (e.g., `accent-green`, `cta-brown`). Avoid adding conflicting color tokens elsewhere.
- UI primitives: Use `components/ui/Button.tsx` for buttons (supports `variant` and `size`).

## Integration & external deps
- `recharts` is used for charts; imports may resolve via the `importmap` in `index.html` or from installed deps during dev/build. Be consistent with how imports are resolved in local dev vs production.
- Vite defines `process.env.API_KEY` and `process.env.GEMINI_API_KEY` in `vite.config.ts`. Use those when accessing the configured API key.

## Common edits and examples
- Add a page:
  1. Create `pages/MyNewPage.tsx`.
  2. Add `MY_NEW_PAGE = "MY_NEW_PAGE"` to `Page` in `types.ts`.
  3. Add a `case Page.MY_NEW_PAGE` in `App.tsx` to render your page.
  4. Optionally add `{ name: 'MyNew', page: Page.MY_NEW_PAGE }` to `NAV_LINKS` in `components/layout/Header.tsx`.

- Ensure `useAuth()` safety: before calling `useAuth()` in a component, confirm the app tree includes an `AuthContext.Provider`. If you add an auth provider, wrap `App` (or a parent) in it in `index.tsx` or `App.tsx`.

## Notes & gotchas
- No router: don't add react-router unless you intend to convert the navigation model; current pattern uses the `Page` enum and callbacks.
- Tailwind via CDN: styling works without local Tailwind build tools, but production nuances may differ — inspect `index.html` if CSS behaves unexpectedly.
- Auth provider missing: searches show `AuthContext` and `useAuth` exist, but no provider. Adding auth-dependent code will require creating and mounting a provider.

## If you're unsure
- Look at `App.tsx`, `types.ts`, `index.html`, and `vite.config.ts` first — they contain the highest-value patterns for this repo.

---
If you'd like, I can refine any section (examples, run steps, or the auth-provider guidance). What should I expand or clarify? 
