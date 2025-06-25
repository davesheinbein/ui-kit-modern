# Analytics Component System (`src/components/Analytics`)

This folder implements a **unified, configuration-driven analytics and tracking system** for the UI kit. It provides reusable, DRY analytics dashboards, charts, metrics, heatmaps, funnels, reports, and real-time analytics, all with minimal code duplication and maximum flexibility.

## Key Concepts

- **Analytics.tsx**: The main analytics component, supporting all analytics types (dashboard, chart, metric, heatmap, funnel, cohort, report, realtime) via a single, flexible API.
- **configurations.ts**: Centralizes all configuration types and presets for analytics components. Defines the available kinds, default layouts, and settings.
- **Analytics.module.scss**: All styles for analytics dashboards, charts, and event logs.
- **index.ts**: Exports all main symbols for easy import elsewhere.

## How It Works

- **Ultra-DRY**: All analytics UIs share the same core logic and styles, with only the configuration and data source changing per kind.
- **Integration**: Designed to integrate with Redux, custom event buses, or third-party analytics providers.
