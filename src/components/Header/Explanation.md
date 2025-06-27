# Header Component Group

A versatile header system for pages, modals, dashboards, and navigation. Supports multiple layout and style variants, slot-based content, and flexible actions.

## Folder Structure & File Responsibilities

- `Header.tsx`: Main header component. Handles layout, slots, actions, and variant switching.
- `Header.module.scss`: SCSS module for all header styles and variants.
- `configurations.ts`: Types and configuration objects for header variants and tab configurations.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Header } from 'src/components/Header';
```

**NPM:**

```tsx
import { Header } from 'ui-kit-modern';
```

## Supported Props

- `kind`: HeaderKind (variant, e.g. 'dashboard', 'modal', 'page', etc.)
- `title`: string | ReactNode
- `actions`: HeaderAction[] (array of action configs)
- `tabs`: TabConfiguration[] (optional tabs)
- `children`: ReactNode (slot-based content)
- ...plus all native `<header>` props

## Configuration

- Use `configurations.ts` to define new header variants or tab configs.
- SCSS for theming and layout.

## Best Practices

- Use slot-based children for flexible layouts.
- Choose the appropriate `kind` for context (page, modal, etc.).
- See Storybook for layout and variant examples.
