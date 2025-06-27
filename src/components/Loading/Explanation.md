# Loading Component Group

Universal loading indicators for asynchronous UI states. Supports spinner, dots, bar, skeleton, and custom loaders.

## Folder Structure & File Responsibilities

- `Loading.tsx`: Main loading component. Handles all loading kinds and accessibility.
- `Loading.module.scss`: SCSS module for loading styles, animations, and variants.
- `configurations.ts`: Types and configuration objects for loading kinds and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Loading } from 'src/components/Loading';
```

**NPM:**

```tsx
import { Loading } from 'ui-kit-modern';
```

## Supported Props

- `kind`: 'spinner' | 'dots' | 'bar' | 'skeleton' | 'custom' (default: 'spinner')
- `size`: number | string (optional)
- `color`: string (optional)
- `ariaLabel`: string (for accessibility)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to add or customize loading kinds.
- Theming via SCSS variables and global config.

## Best Practices

- Use the appropriate `kind` for the loading context.
- Always provide an `ariaLabel` for accessibility.
- See Storybook for visual examples and recommended usage.
