# Admin Component Group

A set of components and utilities for building admin panels, dashboards, and configuration UIs. Designed for flexibility, clarity, and integration with the rest of the UI kit.

## Folder Structure & File Responsibilities

- `Admin.tsx`: Main admin panel component. Handles layout, configuration, and rendering of admin features.
- `Admin.module.scss`: SCSS module for admin-specific styles and layout.
- `configurations.ts`: Types and configuration objects for admin panel variants and settings.
- `Explanation.md`: This documentation file.
- `index.ts`: Barrel export for the component and types.

## Import & Usage

**Local:**

```tsx
import { Admin } from 'src/components/Admin';
```

**NPM:**

```tsx
import { Admin } from 'ui-kit-modern';
```

## Supported Props

- `config`: object (admin panel configuration)
- `onAction`: (action) => void (handler for admin actions)
- `children`: ReactNode (custom admin content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new admin panel variants or settings.
- Theming via SCSS and global config.

## Best Practices

- Use the `config` prop to customize the admin panel for your use case.
- Combine with other UI kit components for advanced admin dashboards.
- See Storybook for admin panel and configuration examples.
