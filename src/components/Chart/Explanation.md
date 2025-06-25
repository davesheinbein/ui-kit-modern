# Chart Component Folder Explanation

## Overview

## Key Files

- **Chart.tsx**: The main React component. It dynamically renders different chart UIs (legends, tooltips, filters, controls) based on the `kind` and configuration props. It supports Redux integration for stateful features like selection and filtering.
- **configurations.ts**: Centralizes all chart configuration presets. Defines the `ChartKind` type, configuration interfaces, and a map of default configurations for each kind. The `getChartConfig` function resolves the correct config for a given kind.
- **Chart.module.scss**: Contains all styles for the chart component, including layout, variants, legend, filter, tooltip, and control styles. Uses SCSS modules and project-wide variables/mixins for consistency.

## Usage Patterns

- **Direct Usage**: Import and use `<Chart kind="legend-horizontal" ... />` with custom props.
- **Redux Integration**: The component uses Redux for managing selected series, search/filter state, and supports callbacks for advanced interactivity.
