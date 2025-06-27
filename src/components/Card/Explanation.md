# Card Component Group

Reusable card components for displaying grouped content, actions, or media. Supports multiple card types, layouts, and interactive states for dashboards, lists, and previews.

## Folder Structure & File Responsibilities

- `Card.tsx`: Main Card component. Handles rendering, layout, and content slots.
- `Card.module.scss`: SCSS module for card styling and variants.
- `configurations.ts`: Type definitions and configuration options for card variants, sizes, and layouts.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Card } from 'src/components/Card';
```

**NPM Package:**

```tsx
import { Card } from 'ui-kit-modern';
```

## Supported Props

| Prop        | Type             | Description                                   | Default    |
| ----------- | ---------------- | --------------------------------------------- | ---------- |
| `variant`   | string           | Card style (outlined, filled, elevated, etc.) | 'outlined' |
| `size`      | string           | Card size (small, medium, large)              | 'medium'   |
| `title`     | string/ReactNode | Card title                                    | —          |
| `content`   | string/ReactNode | Card content/body                             | —          |
| `actions`   | React.ReactNode  | Action buttons or links                       | —          |
| `onClick`   | function         | Click handler for interactive cards           | —          |
| `className` | string           | Additional CSS classes                        | —          |

## Configuration

- Use `configurations.ts` to define card variants, sizes, and layouts.
- Customize styles in `Card.module.scss` for branding.

## Best Practices

- Use cards to group related content or actions.
- Prefer `variant` and `size` props for consistent layouts.
- Use interactive cards for clickable or actionable content.

---
