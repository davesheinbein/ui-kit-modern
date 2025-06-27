# Sidebar Component Group

A flexible sidebar component for navigation, chat, notifications, and more. Supports left/right positioning and multiple variants.

## Folder Structure & File Responsibilities

- `Sidebar.tsx`: Main sidebar component. Handles rendering, positioning, and variant switching.
- `Sidebar.module.scss`: SCSS module for sidebar styles and responsive design.
- `configurations.ts`: Types and configuration objects for sidebar variants and positions.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Sidebar } from 'src/components/Sidebar';
```

**NPM:**

```tsx
import { Sidebar } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'friends' | 'settings' | 'chat' | 'notifications' | 'custom' (default: 'friends')
- `position`: 'left' | 'right' (default: 'left')
- `children`: ReactNode (sidebar content)
- ...plus all native `<aside>` props

## Configuration

- Use `configurations.ts` to define new sidebar variants or positions.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` and `position` for your UI context.
- Combine with Header and Page for full layouts.
- See Storybook for sidebar and panel examples.
