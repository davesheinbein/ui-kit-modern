# Graphs Component Group

The Graph component is designed for **advanced data visualizations** such as relationships, time series, scatter, radar, and network graphs. It supports axes, grid, and spatial layouts for exploring complex data structures and connections.

> For dashboard widgets, metrics, and business analytics (bar, pie, donut, KPI, etc.), use the **Chart** component instead.

## Folder Structure & File Responsibilities

- `Graph.tsx`: Main Graph component. Handles rendering of advanced graph types and data series using Recharts and custom layouts.
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

| Prop         | Type   | Description                                                         | Default |
| ------------ | ------ | ------------------------------------------------------------------- | ------- |
| `kind`       | string | Graph kind (time series, scatter, radar, network, etc.)             | 'line'  |
| `dataSeries` | array  | Data series to visualize (see configurations.ts for format)         | []      |
| `className`  | string | Additional CSS classes                                              | —       |
| ...          |        | See `GraphProps` for more configuration (axes, grid, layouts, etc.) |         |

## Configuration

- Use `configurations.ts` to define graph kinds, variants, data formats, and advanced visualization options.
- Customize styles in `Graph.module.scss` for branding and accessibility.

## Best Practices

- Use Graph for advanced data visualizations with axes, grid, and spatial layouts.
- Use clear labels, legends, and tooltips for readability.
- For dashboard widgets (bar, pie, donut, KPI, etc.), use the **Chart** component.

---
