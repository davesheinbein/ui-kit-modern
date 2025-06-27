# Chart Component Group

Reusable chart components for data visualization, including bar, line, pie, and custom charts. Designed for dashboards, analytics, and reporting UIs with flexible configuration and theming.

## Folder Structure & File Responsibilities

- `Chart.tsx`: Main Chart component. Handles rendering of different chart types and data series.
- `Chart.module.scss`: SCSS module for chart styling and responsive layouts.
- `configurations.ts`: Type definitions and configuration options for chart kinds, variants, and data formats.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Chart } from 'src/components/Chart';
```

**NPM Package:**

```tsx
import { Chart } from 'ui-kit-modern';
```

## Supported Props

| Prop          | Type    | Description                             | Default   |
| ------------- | ------- | --------------------------------------- | --------- |
| `kind`        | string  | Chart type (bar, line, pie, area, etc.) | 'bar'     |
| `data`        | array   | Data series to visualize                | []        |
| `dataKey`     | string  | Key for y-axis values                   | —         |
| `labelKey`    | string  | Key for x-axis labels                   | —         |
| `title`       | string  | Chart title                             | —         |
| `subtitle`    | string  | Chart subtitle                          | —         |
| `colorScheme` | string  | Color palette for chart elements        | 'primary' |
| `showLegend`  | boolean | Show/hide chart legend                  | false     |
| `showGrid`    | boolean | Show/hide grid lines                    | false     |
| `className`   | string  | Additional CSS classes                  | —         |

## Configuration

- Use `configurations.ts` to define chart kinds, variants, and data formats.
- Customize styles in `Chart.module.scss` for branding and accessibility.

## Best Practices

- Choose the appropriate chart type for your data.
- Use clear labels and legends for readability.
- Keep data series and color schemes consistent across charts.

---
