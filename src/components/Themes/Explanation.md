# Themes Component Group

A system for theme selection, palette management, and theme switching across the UI kit. Supports multiple display and variant options.

## Folder Structure & File Responsibilities

- `Themes.tsx`: Main themes component. Handles theme selection, palette, and provider logic.
- `Theme.module.scss`: SCSS module for theme styles, swatches, and layouts.
- `configurations.ts`: Types and configuration objects for theme variants, displays, and layouts.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Themes } from 'src/components/Themes';
```

**NPM:**

```tsx
import { Themes } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'selector' | 'palette' | 'provider' | 'switcher' | 'custom' (default: 'selector')
- `display`: 'swatches' | 'dropdown' | 'cards' | 'grid' | 'list' (default: 'swatches')
- `themes`: ThemeDefinition[] (array of theme configs)
- `onChange`: (theme) => void (theme change handler)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new theme variants, displays, or layouts.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` and `display` for your app’s needs.
- Integrate with Providers for global theming.
- See Storybook for theme selector and palette examples.
