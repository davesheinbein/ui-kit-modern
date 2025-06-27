# Graphs Component Group

Reusable graph components for visualizing data relationships, networks, and connections. Supports multiple graph types (bar, line, pie, network, etc.) and interactive features for analytics and dashboards.

## Folder Structure & File Responsibilities

- `Graph.tsx`: Main Graph component. Handles rendering of different graph types and data series.
- `Graph.module.scss`: SCSS module for graph styling and responsive layouts.
- `configurations.ts`: Type definitions and configuration options for graph kinds, variants, and data formats.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Graph } from 'src/components/Graphs';
```

**NPM Package:**

```tsx
import { Graph } from 'ui-kit-modern';
```

## Supported Props

| Prop          | Type    | Description                                | Default   |
| ------------- | ------- | ------------------------------------------ | --------- |
| `kind`        | string  | Graph type (bar, line, pie, network, etc.) | 'bar'     |
| `data`        | array   | Data series to visualize                   | []        |
| `dataKey`     | string  | Key for y-axis values                      | —         |
| `labelKey`    | string  | Key for x-axis labels                      | —         |
| `title`       | string  | Graph title                                | —         |
| `subtitle`    | string  | Graph subtitle                             | —         |
| `colorScheme` | string  | Color palette for graph elements           | 'primary' |
| `showLegend`  | boolean | Show/hide graph legend                     | false     |
| `showGrid`    | boolean | Show/hide grid lines                       | false     |
| `className`   | string  | Additional CSS classes                     | —         |

## Configuration

- Use `configurations.ts` to define graph kinds, variants, and data formats.
- Customize styles in `Graph.module.scss` for branding and accessibility.

## Best Practices

- Choose the appropriate graph type for your data.
- Use clear labels and legends for readability.
- Keep data series and color schemes consistent across graphs.

---
