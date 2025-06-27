# Statistics Component Group

A component for displaying statistics, leaderboards, achievements, and trends. Supports multiple display variants and customizable data.

## Folder Structure & File Responsibilities

- `Statistics.tsx`: Main statistics component. Handles rendering, data logic, and variant switching.
- `Statistics.module.scss`: SCSS module for statistics styles and variants.
- `configurations.ts`: Types and configuration objects for statistics variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Statistics } from 'src/components/Statistics';
```

**NPM:**

```tsx
import { Statistics } from 'ui-kit-modern';
```

## Supported Props

- `variant`: 'daily' | 'vs' | 'history' | 'summary' | 'detailed' | 'comparison' | 'leaderboard' | 'achievements' | 'trends' | 'custom' (default: 'summary')
- `data`: any (statistics data object)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new statistics variants.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for your data context.
- Provide clear, structured data for best results.
- See Storybook for statistics and leaderboard examples.
