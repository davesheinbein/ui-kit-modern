# Pages Component Group

A layout component for structuring pages, supporting multiple variants and layouts. Integrates with other layout and navigation components.

## Folder Structure & File Responsibilities

- `Page.tsx`: Main page component. Handles layout, variant switching, and slot-based content.
- `Pages.module.scss`: SCSS module for page styles, containment, and responsive design.
- `configurations.ts`: Types and configuration objects for page variants and layouts.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Page } from 'src/components/Pages';
```

**NPM:**

```tsx
import { Page } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'default' | 'centered' | 'full-height' | 'dashboard' | 'landing' | 'custom' (default: 'default')
- `children`: ReactNode (page content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new page variants or layouts.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for the page context.
- Combine with Header, Sidebar, and Grid for complex layouts.
- See Storybook for layout and variant examples.
