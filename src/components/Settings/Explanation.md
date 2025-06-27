# Settings Component Group

A flexible settings panel component for user preferences, theme selection, and customization. Supports slot-based content and responsive layouts.

## Folder Structure & File Responsibilities

- `Settings.tsx`: Main settings component. Handles layout, slot content, and variant switching.
- `Settings.module.scss`: SCSS module for settings styles and responsive design.
- `configurations.ts`: Types and configuration objects for settings variants.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Settings } from 'src/components/Settings';
```

**NPM:**

```tsx
import { Settings } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'panel' | 'customization' | 'user-preferences' | 'theme-selector' | 'theme-customization' | 'theme-builder' | 'accessibility' | 'privacy' | 'custom' (default: 'panel')
- `children`: ReactNode (settings content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new settings variants.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for your settings context.
- Combine with Providers for context-aware settings.
- See Storybook for settings panel and customization examples.
