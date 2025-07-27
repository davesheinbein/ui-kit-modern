# Copilot Instructions for ui-kit-modern

## Project Overview

- **ui-kit-modern** is a scalable React + TypeScript UI component library, styled with Tailwind CSS and SCSS modules.
- Components are organized by type in `src/components/`, with further subfolders for variants (e.g., `Gameboards`, `Radios`, `Ranges`).
- Storybook stories live in `src/stories/` and follow a parallel folder structure for demos and documentation.
- SCSS modules are used for component-level styles; fallback logic is present for missing modules.

## Key Patterns & Conventions

- **Dual Prop Support:** Many components (especially in `Gameboards`) accept both advanced and minimal prop shapes for Storybook/demo compatibility. Auto-conversion and robust defaulting are common.
- **Component Structure:** Each component typically exports a TypeScript interface for props, a functional React component, and imports its own SCSS module.
- **Styling:** Use Tailwind for utility classes and SCSS modules for unique layouts. SCSS imports in `Sub/` folders must use three dots up (e.g., `@use '../../../styles/Variables.scss' as *;`).
- **Fallbacks:** Components gracefully handle missing or incomplete props, often auto-generating demo data.
- **Exports:** All public components are re-exported from their respective `index.ts` files.

## Developer Workflows

- **Build:** Run `npm run build` (configured via `vite.config.ts` and `tsup`).
- **Storybook:** Stories are in `src/stories/`; run Storybook for live component demos.
- **SCSS Issues:** If you see `[sass] Can't find stylesheet to import`, check that SCSS import paths use the correct number of `..` to reach `styles/`.
- **Testing:** (If present) Tests should be colocated or in a parallel `__tests__` structure.

## Integration & Data Flow

- **Component Communication:** Props are the primary means of data flow; no global state except via Redux in `store/` (if used).
- **Mock Data:** Demo data for stories is in `src/stories/mocks/`.
- **Utilities:** Shared helpers are in `src/utils/`.

## Examples

- **Gameboard Dual Prop:** `WordLetterGridBoard` accepts both `tiles` (minimal) and `letters/words` (advanced), auto-generating a grid if needed.
- **SCSS Import:** In `Sub/` components, use `@use '../../../styles/Variables.scss' as *;` for style imports.

## Key Files & Directories

- `src/components/` — All UI components
- `src/stories/` — Storybook stories
- `src/styles/` — Shared SCSS
- `src/utils/` — Utility helpers
- `src/stories/mocks/` — Demo/mock data

---

For new components, follow the dual-prop and robust defaulting patterns. When in doubt, check similar files in `Gameboards/` or ask for clarification.
