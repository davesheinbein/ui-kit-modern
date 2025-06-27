# Utility Component Group

A set of utility components for layout, spacing, and helper actions across the UI kit. Useful for spacing, alignment, and quick actions.

## Folder Structure & File Responsibilities

- `Utility.tsx`: Main utility component. Handles rendering, placement, and variant switching.
- `Utility.module.scss`: SCSS module for utility styles, responsive design, and variants.
- `configurations.ts`: Types and configuration objects for utility kinds, sizes, and variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Utility } from 'src/components/Utility';
```

**NPM:**

```tsx
import { Utility } from 'ui-kit-modern';
```

## Supported Props

- `kind`: UtilityKind (e.g. 'spacer', 'divider', 'action', etc.)
- `size`: UtilitySize (optional)
- `variant`: UtilityVariant (optional)
- `placement`: UtilityPlacement (optional)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new utility kinds, sizes, or variants.
- Theming via SCSS and global config.

## Best Practices

- Use utility components for layout and spacing, not for core UI.
- Combine with other components for best results.
- See Storybook for utility and layout examples.
