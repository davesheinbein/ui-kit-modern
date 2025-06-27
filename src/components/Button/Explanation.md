# Button Component Group

A set of reusable button components for actions, navigation, and form submissions. Supports multiple variants, sizes, and states for consistent UI interactions.

## Folder Structure & File Responsibilities

- `Button.tsx`: Main Button component. Handles rendering, click logic, and state management.
- `Button.module.scss`: SCSS module for button styling and variants.
- `configurations.ts`: Type definitions and configuration options for button variants, sizes, and states.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Button } from 'src/components/Button';
```

**NPM Package:**

```tsx
import { Button } from 'ui-kit-modern';
```

## Supported Props

| Prop        | Type            | Description                             | Default   |
| ----------- | --------------- | --------------------------------------- | --------- |
| `variant`   | string          | Button style (primary, secondary, etc.) | 'default' |
| `size`      | string          | Button size (small, medium, large)      | 'medium'  |
| `disabled`  | boolean         | Disable the button                      | false     |
| `loading`   | boolean         | Show loading spinner                    | false     |
| `onClick`   | function        | Click event handler                     | —         |
| `type`      | string          | Button type (button, submit, reset)     | 'button'  |
| `children`  | React.ReactNode | Button label or content                 | —         |
| `className` | string          | Additional CSS classes                  | —         |

## Configuration

- Use `configurations.ts` to define button variants, sizes, and states.
- Customize styles in `Button.module.scss` for branding.

## Best Practices

- Use semantic button types for accessibility.
- Prefer `variant` and `size` props for consistent styling.
- Use `loading` state for async actions to provide feedback.

---
