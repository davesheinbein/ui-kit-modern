# Table Component System Explanation

## Overview

The `Table` folder provides a highly flexible, configuration-driven system for rendering all types of tables and data grids in a modern React UI kit. It supports a wide range of table kinds (data, sortable, filterable, editable, grid, leaderboard, etc.), variants (minimal, striped, bordered, modern, glass), layouts (fixed, auto, responsive), and advanced features like sorting, filtering, selection, expansion, pagination, and loading states. The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and customization of tables with minimal code.

## Architecture

- **configurations.ts**: Centralizes all table configuration types, variants, and presets. Defines the shape of table, column, row, filter, and pagination objects, and provides reusable configuration objects for common table types.
- **Table.tsx**: The core component that renders the table UI based on the provided configuration and props. Handles all table logic, including sorting, filtering, selection, expansion, pagination, and Redux state management for isolation.
- **factory.ts**: Exposes the `TableFactory` function and a set of ultra-DRY presets (`T`, `TablePresets`) for rapid instantiation of any table or grid variant. Enables one-liner creation of complex tables.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Table.module.scss**: Modern, theme-aware styles for all table layouts, variants, and states, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `T` function or `TableFactory` for most new tables. Pass a `kind` and optional props to generate the desired table or grid.
- Use preset functions (e.g., `TablePresets.dataTable`, `TablePresets.dataGrid`) for common table types and advanced dashboards.
- Customize columns, data, and behaviors via props or configuration overrides.

## Key Features

- **Ultra-DRY**: One function call = one table, with minimal boilerplate.
- **Highly Configurable**: Supports custom columns, layouts, sorting, filtering, selection, expansion, editing, and more.
- **Presets & Shortcuts**: Rapidly create data tables, grids, leaderboards, and dashboards with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.
- **Redux Integration**: Each table instance can be isolated in Redux state for advanced scenarios.

## Mermaid ERD Diagram

```mermaid
erDiagram
    TableFactory ||--o{ Table : creates
    Table ||--o{ TableConfiguration : uses
    Table ||--o{ TableColumn : defines
    Table ||--o{ TableRow : displays
    Table ||--o{ TableFilter : filters
    Table ||--o{ TablePagination : paginates
    TableFactory ||--o{ TablePresets : provides
    Table ||--|> Table.module.scss : styles
    Table ||--|> configurations.ts : configures
    TableFactory ||--|> factory.ts : implements
    Table ||--|> index.ts : exports

    TableFactory {
      kind
      ...config
    }
    Table {
      kind
      columns
      data
      ...props
    }
    TableConfiguration {
      kind
      variant
      layout
      sortable
      filterable
      ...props
    }
    TableColumn {
      key
      label
      type
      ...props
    }
    TableRow {
      id
      ...data
    }
    TableFilter {
      column
      value
      operator
    }
    TablePagination {
      page
      pageSize
      total
      ...props
    }
```

## Example

```tsx
// Create a sortable data table
T('sortable-table')({ columns, data });

// Create a data grid with advanced features
TablePresets.dataGrid({
	columns,
	data,
	pagination: { page: 1, pageSize: 20 },
});

// Create a leaderboard table
TablePresets.leaderboardTable({ columns, data });
```

## Function-by-Function Reference

### `Table` (default export from `Table.tsx`)

A React component that renders a highly configurable table or data grid. Handles all table logic, including sorting, filtering, selection, expansion, pagination, and Redux state management for isolation. Accepts a wide range of props for columns, data, configuration overrides, and event handlers.

#### Key Internal Functions:

- **`mergeConfigValue(propValue, configValue)`**: Helper to merge prop overrides with base configuration values.
- **Redux State Management**: Initializes and cleans up isolated Redux state for each table instance.
- **Data Processing**: Applies search, filters, and sorting to the data before rendering.
- **`handleSort(column)`**: Handles sorting logic and dispatches sort state updates.
- **`handleRowSelection(rowId, selected)`**: Handles row selection logic and updates Redux state.
- **`handleRowExpansion(rowId)`**: Handles row expansion/collapse logic.
- **`handleCellEdit(rowId, column, value)`**: Handles cell editing logic and updates data/state.
- **Render Functions**: `renderTableHeader`, `renderTableRow`, `renderSearchBar` render the table's header, rows, and search bar, respectively.

---

### `TableFactory` (default export from `factory.ts`)

A function that returns a table component factory for a given configuration or kind. Enables ultra-DRY, one-liner table creation.

- **Usage**: `TableFactory('data-table')({ columns, data })`

### `T` (alias for `TableFactory`)

Ultra-short alias for `TableFactory`. Usage: `T('sortable-table')({ columns, data })`

### `TablePresets`

A set of pre-configured table factories for common table types and advanced dashboards. Examples:

- `TablePresets.dataTable`, `TablePresets.dataGrid`, `TablePresets.leaderboardTable`, `TablePresets.dashboardGrid`, etc.

---

### Types and Configurations (from `configurations.ts`)

- **`TableKind`, `TableVariant`, `TableLayout`**: Type definitions for table kinds, variants, and layouts.
- **`TableColumn`, `TableRow`, `TableFilter`, `TablePagination`**: Interfaces for columns, rows, filters, and pagination.
- **`TableConfiguration`**: Interface for table configuration objects.
- **`TABLE_CONFIGURATIONS`**: Preset configuration objects for each table kind.
- **Helper Functions:**
  - `getTableConfig(kind)`: Returns the configuration for a given table kind.
  - `mergeTableConfig(base, override)`: Merges a base configuration with overrides.
  - `createTableConfig(kind, overrides)`: Creates a custom table configuration.
  - `validateTableConfig(config)`: Validates a table configuration and returns an array of error messages.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `Table` component, all types, and all factory/preset functions for easy import elsewhere in the UI kit.

---

This folder enables rapid, maintainable, and highly customizable table UIs for any modern React application.
