# Progress Component Group

Universal progress indicators for tasks, processes, and loading states. Supports linear, circular, step, and custom progress types.

## Folder Structure & File Responsibilities

- `Progress.tsx`: Main progress component. Handles rendering, animation, and variant switching.
- `Progress.module.scss`: SCSS module for progress styles, animations, and variants.
- `configurations.ts`: Types and configuration objects for progress kinds, sizes, and animations.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Progress } from 'src/components/Progress';
```

**NPM:**

```tsx
import { Progress } from 'ui-kit-modern';
```

## Supported Props

- `kind`: 'linear' | 'circular' | 'step' | 'custom' (default: 'linear')
- `value`: number (progress value, 0-100)
- `size`: ProgressSize (optional)
- `variant`: ProgressVariant (optional)
- `animation`: ProgressAnimation (optional)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new progress kinds, sizes, or animations.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `kind` for the progress context.
- Animate progress for better user feedback.
- See Storybook for progress examples and best practices.
