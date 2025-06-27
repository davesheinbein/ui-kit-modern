# Checkbox Component Group

Reusable checkbox components for forms, settings, and selection UIs. Supports single and group checkboxes, custom icons, and indeterminate state.

## Folder Structure & File Responsibilities

- `Checkbox.tsx`: Main Checkbox component. Handles checked, unchecked, and indeterminate states.
- `Checkbox.module.scss`: SCSS module for checkbox styling and variants.
- `configurations.ts`: Type definitions and configuration options for checkbox variants, sizes, and states.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Checkbox } from 'src/components/Checkbox';
```

**NPM Package:**

```tsx
import { Checkbox } from 'ui-kit-modern';
```

## Supported Props

| Prop            | Type             | Description                                | Default   |
| --------------- | ---------------- | ------------------------------------------ | --------- |
| `checked`       | boolean          | Whether the checkbox is checked            | false     |
| `indeterminate` | boolean          | Indeterminate state (for parent selection) | false     |
| `onChange`      | function         | Change event handler                       | —         |
| `label`         | string/ReactNode | Label for the checkbox                     | —         |
| `disabled`      | boolean          | Disable the checkbox                       | false     |
| `size`          | string           | Checkbox size (small, medium, large)       | 'medium'  |
| `variant`       | string           | Style variant (default, filled, etc.)      | 'default' |
| `className`     | string           | Additional CSS classes                     | —         |

## Configuration

- Use `configurations.ts` to define checkbox variants, sizes, and states.
- Customize styles in `Checkbox.module.scss` for branding.

## Best Practices

- Use indeterminate state for parent/child selection patterns.
- Prefer controlled components for form integration.
- Use accessible labels for usability.

---
