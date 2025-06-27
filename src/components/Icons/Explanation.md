# Icons Component Group

A scalable SVG icon system for consistent iconography across the UI kit. Supports size, color, and custom icons. Designed for flexibility, accessibility, and easy integration with all components.

## Folder Structure & File Responsibilities

- `Icons.tsx`: Main icon component. Handles rendering SVGs, sizing, coloring, and custom icons. Accepts all standard SVG props.
- `Icons.module.scss`: SCSS module for icon styles, including size and color variants.
- `configurations.ts`: Exports default icon size/color and type definitions for icon props.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Icons } from 'src/components/Icons';
```

**NPM:**

```tsx
import { Icons } from 'ui-kit-modern';
```

## Supported Props (IconProps)

- `name`: string (icon name, required if using a built-in icon)
- `size`: number | 'small' | 'medium' | 'large' (default: 24)
- `color`: string (CSS color or theme color, default: 'currentColor')
- ...plus all native `<svg>` props (e.g. `aria-label`, `className`)

## Configuration

- Add or customize icons by editing `Icons.tsx` or extending the icon set.
- Use `configurations.ts` to set default size/color.
- Theming is handled via SCSS variables and global theme config.

## Best Practices

- Use semantic icon names for clarity and maintainability.
- Prefer theme colors for consistency across the UI kit.
- Use the `size` and `color` props to match your design needs.
- See Storybook for icon gallery and usage patterns.
