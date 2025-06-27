# Textareas Component Group

A set of styled, accessible textarea components for multi-line text input. Supports multiple variants, error, and helper text.

## Folder Structure & File Responsibilities

- `Textarea.tsx`: Main textarea component. Handles rendering, state, and variant switching.
- `Textarea.module.scss`: SCSS module for textarea styles, states, and variants.
- `configurations.ts`: Types and configuration objects for textarea variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Textarea } from 'src/components/Textareas';
```

**NPM:**

```tsx
import { Textarea } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'standard' | 'outlined' | 'filled' | 'minimal' | 'custom' (default: 'standard')
- `value`: string (controlled value)
- `defaultValue`: string (uncontrolled initial value)
- `onChange`: (e) => void (change handler)
- `label`: string | ReactNode
- `helperText`: string | ReactNode
- `errorText`: string | ReactNode
- `disabled`: boolean
- ...plus all native `<textarea>` props

## Configuration

- Use `configurations.ts` to define new textarea variants.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for your UI context.
- Provide helper and error text for better UX.
- See Storybook for textarea and form examples.
