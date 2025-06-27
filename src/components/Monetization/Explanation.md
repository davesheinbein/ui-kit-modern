# Monetization Component Group

Components for displaying monetization options, pricing, and purchase flows. Supports light, dark, and gradient variants for e-commerce and in-app purchases.

## Folder Structure & File Responsibilities

- `Monetization.tsx`: Main monetization component. Handles layout, style, and integration with payment flows.
- `Monetization.module.scss`: SCSS module for monetization styles and variants.
- `configurations.ts`: Types and configuration objects for monetization variants and custom configs.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Monetization } from 'src/components/Monetization';
```

**NPM:**

```tsx
import { Monetization } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'light' | 'dark' | 'gradient' | 'custom' (default: 'light')
- `price`: string | number (displayed price)
- `onPurchase`: () => void (purchase handler)
- `children`: ReactNode (custom content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new variants or custom configs.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for your app’s theme.
- Integrate with payment flows via the `onPurchase` prop.
- See Storybook for layout and style examples.
