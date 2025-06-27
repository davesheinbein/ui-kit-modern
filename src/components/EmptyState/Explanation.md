# EmptyState Component Group

Components for displaying empty, loading, or no-data states in lists, tables, dashboards, and pages. Designed to provide helpful feedback and encourage user action when no content is available.

## Folder Structure & File Responsibilities

- `EmptyState.tsx`: Main EmptyState component. Handles rendering of icons, messages, and action buttons.
- `EmptyState.module.scss`: SCSS module for styling empty state visuals and layouts.
- `configurations.ts`: Type definitions and configuration options for empty state variants and icons.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { EmptyState } from 'src/components/EmptyState';
```

**NPM Package:**

```tsx
import { EmptyState } from 'ui-kit-modern';
```

## Supported Props

| Prop        | Type             | Description                             | Default   |
| ----------- | ---------------- | --------------------------------------- | --------- |
| `kind`      | string           | Empty state type (no-data, error, etc.) | 'no-data' |
| `icon`      | React.ReactNode  | Icon or illustration to display         | —         |
| `message`   | string/ReactNode | Main message to display                 | —         |
| `action`    | React.ReactNode  | Action button or link                   | —         |
| `className` | string           | Additional CSS classes                  | —         |

## Configuration

- Use `configurations.ts` to define empty state variants and icons.
- Customize visuals in `EmptyState.module.scss` for branding.

## Best Practices

- Use clear, helpful messages for empty states.
- Provide actionable next steps when possible.
- Use illustrations or icons to improve user experience.

---
