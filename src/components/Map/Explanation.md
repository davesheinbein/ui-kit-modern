# Map Component Group

A flexible map display component for dashboards, games, and geolocation UIs. Supports custom markers, overlays, and regions.

## Folder Structure & File Responsibilities

- `Map.tsx`: Main map component. Handles rendering, marker logic, and overlays.
- `Map.module.scss`: SCSS module for map container and responsive styles.
- `configurations.ts`: Types and configuration objects for map kinds, variants, and markers.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Map } from 'src/components/Map';
```

**NPM:**

```tsx
import { Map } from 'ui-kit-modern';
```

## Supported Props

- `kind`: MapKind (variant, e.g. 'default', 'custom', etc.)
- `markers`: MapMarker[] (array of marker configs)
- `regions`: MapRegion[] (optional overlays)
- `size`: MapSize (optional)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new map kinds, markers, or regions.
- Theming via SCSS and global config.

## Best Practices

- Use semantic marker and region configs for clarity.
- See Storybook for map and marker examples.
