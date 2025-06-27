# Wrappers Component Group

A set of wrapper components for layout, containment, and elevation. Useful for grouping content and providing layout structure.

## Folder Structure & File Responsibilities

- `Wrapper.tsx`: Main wrapper component. Handles rendering, elevation, and layout logic.
- `Wrapper.module.scss`: SCSS module for wrapper styles and elevation variants.
- `configurations.ts`: Types and configuration objects for wrapper variants and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Wrapper } from 'src/components/Wrappers';
```

**NPM:**

```tsx
import { Wrapper } from 'ui-kit-modern';
```

## Supported Props

- `variant`: string (e.g. 'base', 'elevated', etc.)
- `children`: ReactNode (wrapped content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new wrapper variants or custom configs.
- Theming via SCSS and global config.

## Best Practices

- Use wrappers to group and contain content for layout clarity.
- Combine with Grid, Page, and Utility components for advanced layouts.
- See Storybook for wrapper and layout examples.
