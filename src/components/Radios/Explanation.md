# Radios Component Group

A modern, accessible radio button group supporting multiple variants and layouts. Designed for single-choice selections in forms and settings.

## Folder Structure & File Responsibilities

- `Radio.tsx`: Main radio component. Handles rendering, group logic, and accessibility.
- `Radio.module.scss`: SCSS module for radio styles, states, and variants.
- `configurations.ts`: Types and configuration objects for radio variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Radio } from 'src/components/Radios';
```

**NPM:**

```tsx
import { Radio } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'standard' | 'button' | 'card' | 'switch' | 'custom' (default: 'standard')
- `name`: string (radio group name)
- `value`: string (radio value)
- `checked`: boolean (controlled checked state)
- `onChange`: (e) => void (change handler)
- `label`: string | ReactNode
- `disabled`: boolean
- ...plus all native `<input type="radio" />` props

## Configuration

- Use `configurations.ts` to define new radio variants.
- Theming via SCSS and global config.

## Best Practices

- Group radios by `name` for exclusive selection.
- Use the appropriate `variant` for your UI context.
- See Storybook for radio group and variant examples.
