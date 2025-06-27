# Advertisements Component Group

Components for displaying ads, promotional banners, and sponsored content in your application. Designed for flexible placement and easy integration with ad networks or custom campaigns.

## Folder Structure & File Responsibilities

- `Advertisements.tsx`: Main Advertisements component. Handles rendering of ad units, banners, or custom ad content.
- `Advertisements.module.scss`: SCSS module for styling ad components and layouts.
- `configurations.ts`: Type definitions and configuration options for ad types, placements, and variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Advertisements } from 'src/components/Advertisements';
```

**NPM Package:**

```tsx
import { Advertisements } from 'ui-kit-modern';
```

## Supported Props

| Prop        | Type            | Description                                 | Default  |
| ----------- | --------------- | ------------------------------------------- | -------- |
| `kind`      | string          | Type of ad (e.g., banner, sidebar, native)  | 'banner' |
| `placement` | string          | Where to display the ad (e.g., top, bottom) | 'top'    |
| `adUnitId`  | string          | Ad network unit ID or custom identifier     | —        |
| `content`   | React.ReactNode | Custom ad content (overrides default)       | —        |
| `onClick`   | function        | Callback when ad is clicked                 | —        |

## Configuration

- Use `configurations.ts` to define ad types, placements, and variants for your project.
- Integrate with ad networks by passing the appropriate `adUnitId` and handling events.

## Best Practices

- Use clear, non-intrusive ad placements to avoid disrupting user experience.
- Leverage configuration for consistent ad styling and behavior.
- Use custom content for in-house promotions or special campaigns.

---
