# Chart Component Group

The Chart component is now consumed exclusively via the `<Charts {...props} />` entry point for all dashboard widgets, metrics, and business analytics. All usage, imports, and documentation should reference `Charts` (not `Chart`).

> For advanced data visualizations (relationships, time series, scatter, radar, network, etc.), use the **Graph** component instead.

## Legend Rendering

- The legend is only rendered if the `showLegend` prop is `true` (default) **and** there is data in `dataSeries`.
- To hide the legend, set `showLegend={false}` on `<Charts />`.
- The legend and all chart containers are fully responsive and will fit the size of their content, preventing text overflow and ensuring accessibility.

## Example

```tsx
<Charts
	type='kpi'
	dataSeries={data}
	showLegend={false} // Hides the legend
	size='large'
	variant='glass'
	orientation='vertical'
	// ...other props
/>
```

## Folder Structure & File Responsibilities

- `Chart.tsx`: Main Chart implementation. Do not import directly—use `Charts`.
- `Chart.module.scss`: SCSS module for chart styling and responsive layouts.
- `configurations.ts`: Type definitions and configuration options for chart kinds, variants, data formats, and `chartType`.
- `index.ts`: Barrel export for the component and types. **Always import from here.**
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Charts } from 'src/components/Chart';
```

**NPM Package:**

```tsx
import { Charts } from 'ui-kit-modern';
```

## Supported Props

| Prop         | Type   | Description                                                                | Default  |
| ------------ | ------ | -------------------------------------------------------------------------- | -------- |
| `kind`       | string | Chart kind (legend, tooltip, filter, etc. for dashboard widgets)           |          |
| `chartType`  | string | Widget type (see below)                                                    | 'kpi'    |
| `dataSeries` | array  | Data series to visualize (see below for format)                            | []       |
| `className`  | string | Additional CSS classes                                                     | —        |
| `spacing`    | string | 'tight' \| 'normal' \| 'loose'                                             | 'normal' |
| `size`       | string | 'small' \| 'medium' \| 'large'                                             | 'medium' |
| `showLegend` | bool   | Whether to render the legend (only if data is present)                     | true     |
| ...          |        | See `ChartProps` for more configuration (legends, filters, tooltips, etc.) |          |

### chartType (Widget Types)

- `'kpi'`: KPI widget for displaying a single key value
- `'scorecard'`: Scorecard for a value and label
- `'progress'`: Progress bar for completion percentage
- `'gauge'`: Gauge (semi-circular) for percentage
- `'delta'`: Value with up/down delta indicator
- `'circularProgress'`: Circular progress indicator (SVG)
- `'status'`: Status indicator (badge, color-coded)
- `'iconTile'`: Icon with value and label
- `'leaderboard'`: Ranked list of entries (name, value, avatar)

### dataSeries Format

Each widget expects a specific data shape. Example for each type:

- **KPI/Scorecard/Progress/Gauge/CircularProgress:**
  ```js
  [
  	{
  		id: 'kpi',
  		label: 'Active Users',
  		data: [{ value: 1280 }],
  	},
  ];
  ```
- **Delta:**
  ```js
  [
  	{
  		id: 'delta',
  		label: 'Change',
  		data: [{ value: 120, delta: 8 }],
  	},
  ];
  ```
- **Status:**
  ```js
  [
  	{
  		id: 'status',
  		label: 'Server',
  		data: [{ status: 'ok' }],
  	},
  ];
  ```
- **IconTile:**
  ```js
  [
  	{
  		id: 'icon',
  		label: 'Messages',
  		icon: <span>💬</span>,
  		data: [{ value: 42 }],
  	},
  ];
  ```
- **Leaderboard:**
  ```js
  [
  	{
  		id: 'leaderboard',
  		label: 'Top Players',
  		data: [
  			{ name: 'Alice', value: 120 },
  			{ name: 'Bob', value: 110 },
  			{ name: 'Carol', value: 105 },
  		],
  	},
  ];
  ```

## Best Practices

- Use Chart for dashboard widgets and business metrics.
- Use clear labels and accessible markup for readability.
- For advanced data visualizations, use the **Graph** component.

---

Instead of importing individual helpers, import and use the Charts entry point

### Usage example:

```tsx
import { Charts } from 'src/components/Chart';

<Charts {...props} />;
```

# Charts Component Usage

All chart and widget types are now configured and rendered via the `<Charts {...props} />` entry point. All usage, documentation, and exports should reference this single entry point.

## Legend Layout and Sizing

**Legend layout, orientation, and sizing are now fully controlled by Card props.**

- To change the legend's orientation, size, or variant, pass the corresponding Card props (e.g., `size`, `variant`, `orientation`) to `<Charts />`.
- The Chart legend is rendered using the Card component, so all Card layout and style options are available.
- There are no longer any separate legend orientation or size props specific to Chart; use Card props instead.

## Accessibility

- All chart widgets and legends are accessible and use appropriate ARIA roles and labels.

## Prop Types

All chart prop types are centralized in `configurations.ts` for maintainability and DRYness.

## Removed Features

- The sparkline widget has been removed from all code, stories, and documentation.
- Redundant legend orientation/size props have been removed; use Card props instead.

## Storybook

- The `AllPropVariations` story demonstrates all major prop and variant combinations side by side for easy comparison.

---

For more details, see the prop types in `src/components/Chart/configurations.ts` and the Card component documentation.
