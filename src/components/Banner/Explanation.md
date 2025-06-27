# Banner Component Group

Reusable banner components for notifications, announcements, promotions, or calls to action. Designed for flexible placement (top, bottom, inline) and customizable appearance.

## Folder Structure & File Responsibilities

- `Banner.tsx`: Main Banner component. Handles rendering, dismiss logic, and content display.
- `Banner.module.scss`: SCSS module for banner styling and variants.
- `configurations.ts`: Type definitions and configuration options for banner types, variants, and placements.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Banner } from 'src/components/Banner';
```

**NPM Package:**

```tsx
import { Banner } from 'ui-kit-modern';
```

## Supported Props

| Prop          | Type             | Description                              | Default |
| ------------- | ---------------- | ---------------------------------------- | ------- |
| `kind`        | string           | Banner type (info, warning, promo, etc.) | 'info'  |
| `message`     | string/ReactNode | Banner content                           | —       |
| `dismissible` | boolean          | Show close/dismiss button                | false   |
| `onDismiss`   | function         | Callback when dismissed                  | —       |
| `placement`   | string           | Where to display (top, bottom, inline)   | 'top'   |

## Configuration

- Use `configurations.ts` to define banner types, variants, and placements.
- Customize styles in `Banner.module.scss` for branding.

## Best Practices

- Use banners for important, time-sensitive, or promotional messages.
- Avoid overusing banners to prevent user fatigue.
- Make banners dismissible for non-critical information.

---
