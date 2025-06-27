# Switchs Component Group

A set of switch/toggle components for boolean state, supporting multiple styles and sizes. Designed for settings, toggles, and interactive controls.

## Folder Structure & File Responsibilities

- `Switch.tsx`: Main switch component. Handles rendering, state, and variant switching.
- `Switch.module.scss`: SCSS module for switch styles, sizes, and variants.
- `configurations.ts`: Types and configuration objects for switch variants, sizes, and styles.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Switch } from 'src/components/Switchs';
```

**NPM:**

```tsx
import { Switch } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'toggle' | 'checkbox' | 'button' | 'slider' | 'custom' (default: 'toggle')
- `size`: SwitchSize (optional)
- `checked`: boolean (controlled checked state)
- `onChange`: (e) => void (change handler)
- `label`: string | ReactNode
- `disabled`: boolean
- ...plus all native `<input type="checkbox" />` props

## Configuration

- Use `configurations.ts` to define new switch variants, sizes, or styles.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` and `size` for your UI context.
- Provide labels for accessibility.
- See Storybook for switch and toggle examples.
