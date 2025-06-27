# Grid Component Group

A flexible, responsive grid system for layouts, games, and dashboards. Supports multiple variants and custom layouts.

## Folder Structure & File Responsibilities

- `Grid.tsx`: Main grid component. Handles rendering, layout logic, and variant switching.
- `Grid.module.scss`: SCSS module for all grid styles and variants.
- `configurations.ts`: Types and configuration objects for grid variants, layouts, and styling.
- `index.tsx`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Grid } from 'src/components/Grid';
```

**NPM:**

```tsx
import { Grid } from 'ui-kit-modern';
```

## Supported Props

- `kind`: 'grid' | 'pregame' | 'solved' (default: 'grid')
- `layout`: GridLayout (custom layout object)
- `styling`: GridStyling (custom style object)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new grid variants or layouts.
- SCSS variables and mixins for theme integration.

## Best Practices

- Use the `kind` prop to switch between grid modes.
- Customize layout and styling via props for advanced use cases.
- See Storybook for layout examples and variant demos.
