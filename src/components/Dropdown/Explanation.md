# Selects Component Group

A set of dropdown, multiselect, and autocomplete components for selecting options. Designed for forms, filters, and search UIs.

## Folder Structure & File Responsibilities

- `Select.tsx`: Main select component. Handles rendering, option logic, and accessibility.
- `Select.module.scss`: SCSS module for select styles, states, and variants.
- `configurations.ts`: Types and configuration objects for select variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Select } from 'src/components/Selects';
```

**NPM:**

```tsx
import { Select } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'dropdown' | 'multiselect' | 'autocomplete' | 'searchable' | 'custom' (default: 'dropdown')
- `options`: Array<{ label: string, value: string }>
- `value`: string | string[] (selected value(s))
- `onChange`: (value) => void (change handler)
- `label`: string | ReactNode
- `disabled`: boolean
- ...plus all native `<select>` or custom input props

## Configuration

- Use `configurations.ts` to define new select variants.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for your selection context.
- Provide clear option labels and values.
- See Storybook for select, multiselect, and autocomplete examples.
