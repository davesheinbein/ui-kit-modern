# Table Component Group

A modern, flexible table component for displaying tabular data with sorting, filtering, and editing support.

## Folder Structure & File Responsibilities

- `Table.tsx`: Main table component. Handles rendering, sorting, filtering, and editing logic.
- `Table.module.scss`: SCSS module for table styles and responsive design.
- `configurations.ts`: Types and configuration objects for table variants and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Table } from 'src/components/Table';
```

**NPM:**

```tsx
import { Table } from 'ui-kit-modern';
```

## Supported Props

- `columns`: Array<{ key: string, label: string, ... }>
- `data`: Array<any> (table rows)
- `sortable`: boolean (enable sorting)
- `filterable`: boolean (enable filtering)
- `editable`: boolean (enable editing)
- ...plus all native `<table>` props

## Configuration

- Use `configurations.ts` to define new table variants or presets.
- Theming via SCSS and global config.

## Best Practices

- Define columns and data clearly for best results.
- Enable sorting/filtering/editing as needed for your use case.
- See Storybook for table, sorting, and editing examples.
