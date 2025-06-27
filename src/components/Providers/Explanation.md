# Providers Component Group

Context provider components for theme, settings, sockets, and more. Designed for scalable state management and context sharing across the UI kit.

## Folder Structure & File Responsibilities

- `Providers.tsx`: Main providers component. Handles context creation and composition for theme, settings, sockets, etc.
- `Providers.module.scss`: SCSS module for provider styles and layout.
- `configurations.ts`: Types and configuration objects for provider variants and positions.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Providers } from 'src/components/Providers';
```

**NPM:**

```tsx
import { Providers } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'context' | 'socket' | 'listener' | 'settings' | 'theme' | 'custom' (default: 'context')
- `position`: 'root' | 'app' | 'component' | 'inline' (default: 'root')
- `children`: ReactNode (wrapped content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new provider variants or positions.
- Theming via SCSS and global config.

## Best Practices

- Wrap your app or sections with the appropriate provider for context-aware features.
- Compose multiple providers for complex state management.
- See Storybook for provider usage and patterns.
