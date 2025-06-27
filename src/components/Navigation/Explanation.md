# Navigation Component Group

A flexible navigation bar and menu system for app and site navigation. Supports horizontal, vertical, and custom layouts.

## Folder Structure & File Responsibilities

- `Navigation.tsx`: Main navigation component. Handles rendering, item logic, and layout switching.
- `Navigation.module.scss`: SCSS module for navigation styles and responsive design.
- `configurations.ts`: Types and configuration objects for navigation variants and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Navigation } from 'src/components/Navigation';
```

**NPM:**

```tsx
import { Navigation } from 'ui-kit-modern';
```

## Supported Props

- `items`: NavigationItem[] (array of navigation links/items)
- `variant`: string (layout variant, e.g. 'horizontal', 'vertical', etc.)
- `onSelect`: (item) => void (item select handler)
- ...plus all native `<nav>` props

## Configuration

- Use `configurations.ts` to define new navigation variants or item configs.
- Theming via SCSS and global config.

## Best Practices

- Use semantic item configs for clarity.
- Choose the appropriate `variant` for your layout.
- See Storybook for navigation examples and best practices.
