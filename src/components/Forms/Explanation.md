# Forms Component Group

Reusable form components and helpers for building complex forms, surveys, and input flows. Supports multiple field types, validation, and custom layouts.

## Folder Structure & File Responsibilities

- `Forms.tsx`: Main Forms component. Handles rendering of fields, validation, and submission logic.
- `Forms.module.scss`: SCSS module for form styling and layout.
- `configurations.ts`: Type definitions and configuration options for field types, validation, and layouts.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Forms } from 'src/components/Forms';
```

**NPM Package:**

```tsx
import { Forms } from 'ui-kit-modern';
```

## Supported Props

| Prop            | Type     | Description                                 | Default    |
| --------------- | -------- | ------------------------------------------- | ---------- |
| `fields`        | array    | List of field configs (input, select, etc.) | []         |
| `onSubmit`      | function | Callback for form submission                | —          |
| `initialValues` | object   | Initial values for fields                   | {}         |
| `validate`      | function | Custom validation logic                     | —          |
| `layout`        | string   | Form layout (vertical, horizontal, etc.)    | 'vertical' |
| `className`     | string   | Additional CSS classes                      | —          |

## Configuration

- Use `configurations.ts` to define field types, validation, and layouts.
- Customize styles in `Forms.module.scss` for branding.

## Best Practices

- Use field configs for DRY, declarative forms.
- Validate user input and provide clear feedback.
- Use accessible labels and controls for usability.

---
