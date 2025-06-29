# Inputs Component Group

A set of accessible, styled input fields for forms and data entry. Supports multiple input types and variants.

## Folder Structure & File Responsibilities

- `Input.tsx`: Main input component. Handles all input types, validation, and accessibility.
- `Input.module.scss`: SCSS module for input styles, states, and variants.
- `configurations.ts`: Types and configuration objects for input variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Input } from '../components/Inputs';
```

**NPM:**

```tsx
import { Input } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel' | 'custom' (default: 'text')
- `value`: string (controlled value)
- `defaultValue`: string (uncontrolled initial value)
- `onChange`: (e) => void (change handler)
- `label`: string | ReactNode
- `helperText`: string | ReactNode
- `errorText`: string | ReactNode
- `disabled`: boolean
- ...plus all native `<input />` props

## Configuration

- Use `configurations.ts` to add or customize input variants.
- Theming via SCSS variables and global config.

## Best Practices

- Use the correct `variant` for each input type.
- Provide labels and helper text for accessibility.
- See Storybook for usage examples and best practices.
