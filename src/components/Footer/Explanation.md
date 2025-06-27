# Footer Component Group

Reusable footer components for application and website layouts. Supports multiple footer types, content slots, and responsive layouts for copyright, navigation, and status.

## Folder Structure & File Responsibilities

- `Footer.tsx`: Main Footer component. Handles rendering of left, center, and right content sections.
- `Footer.module.scss`: SCSS module for footer styling and layout.
- `configurations.ts`: Type definitions and configuration options for footer kinds and variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Footer } from 'src/components/Footer';
```

**NPM Package:**

```tsx
import { Footer } from 'ui-kit-modern';
```

## Supported Props

| Prop            | Type            | Description                               | Default |
| --------------- | --------------- | ----------------------------------------- | ------- |
| `kind`          | string          | Footer type (app, landing, minimal, etc.) | 'app'   |
| `leftContent`   | React.ReactNode | Content for the left section              | —       |
| `centerContent` | React.ReactNode | Content for the center section            | —       |
| `rightContent`  | React.ReactNode | Content for the right section             | —       |
| `className`     | string          | Additional CSS classes                    | —       |

## Configuration

- Use `configurations.ts` to define footer kinds and variants.
- Customize layout in `Footer.module.scss` for branding.

## Best Practices

- Use footers for navigation, copyright, and status.
- Keep content concise and relevant.
- Ensure responsive design for all devices.

---
