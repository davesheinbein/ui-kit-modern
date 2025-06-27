# Ranges Component Group

A modern range/slider component supporting size, color, and custom variants. Designed for forms, filters, and interactive controls.

## Folder Structure & File Responsibilities

- `Range.tsx`: Main range component. Handles rendering, value logic, and accessibility.
- `Range.module.scss`: SCSS module for range styles, sizes, and variants.
- `configurations.ts`: Types and configuration objects for range variants and sizes.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Range } from 'src/components/Ranges';
```

**NPM:**

```tsx
import { Range } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'custom' (default: 'default')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `value`: number (controlled value)
- `min`: number (default: 0)
- `max`: number (default: 100)
- `step`: number (default: 1)
- `onChange`: (e) => void (change handler)
- ...plus all native `<input type="range" />` props

## Configuration

- Use `configurations.ts` to define new range variants or sizes.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` and `size` for your UI context.
- Provide min, max, and step for clarity.
- See Storybook for range and slider examples.
