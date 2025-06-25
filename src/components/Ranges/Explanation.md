# Ranges Component System

## Overview

The `Ranges` folder implements a DRY, configuration-driven system for all types of range sliders and controls in the UI kit. It supports single and dual sliders, stepped ranges, color/volume/brightness pickers, progress sliders, and more, all using a single, `Range` component, a central configuration registry, and a factory for rapid, declarative range creation. This system ensures consistency, extensibility, and rapid development of range-based UIs.

## Key Files and Structure

- **Range.tsx**: The main range/slider component. Handles all rendering logic for different range types, merging configuration, props, and Redux state for value management.
- **configurations.ts**: Central registry of all range kinds, variants, and configuration presets. Defines the configuration interface and factory props.
- **factory.tsx**: Provides the `RangeFactory` for DRY, declarative range/slider creation. Includes utility for custom and preset ranges.
- **index.ts**: Barrel file for exports.
- **Range.module.scss**: Styles for all range variants, sizes, orientations, and states.
- **Explanation.md**: (This file) Documentation and ERD for the Ranges system.

## How It Works

- **Configuration-Driven**: All range types and their default behaviors are defined in `configurations.ts`. This allows for easy extension and consistent usage.
- **Unified Component**: `Range.tsx` merges configuration, props, and Redux state. It supports all common range features (dual-range, marks, tooltips, error/help text, etc.) and custom content.
- **Factory Pattern**: The `RangeFactory` allows for DRY, declarative range/slider creation in apps and UIs.
- **Customizability**: Utility functions and configuration allow for custom range controls, layouts, and behaviors.

## Example Usage

```tsx
// Standard slider
<RangeFactory kind="slider" value={value} onChange={setValue} label="Volume" />

// Dual-range slider
<RangeFactory kind="dual-range" value={range} onChange={setRange} label="Select Range" />
```

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    RangeComponent ||--o{ RangeConfiguration : uses
    RangeComponent ||--o{ RangeFactory : created_by
    RangeFactory ||--o{ RangeConfiguration : references
    RangeComponent {
      string kind
      number|number[] value
      string label
      ...
    }
    RangeConfiguration {
      string variant
      string size
      string style
      ...
    }
    RangeFactory {
      RangeFactory(kind, configuration)
      ...
    }
```

## Function-by-Function Reference

### Range.tsx

- **Range (component)**: Main React component for rendering range/slider controls. Handles configuration merging, Redux state management for value, rendering of marks, tooltips, and value display, and all accessibility/UX logic.
- **handleChange**: Handles value changes, updates Redux state, and calls the `onChange` callback.
- **handleMouseDown**: Handles mouse down event, sets dragging state and shows tooltip if enabled.
- **handleMouseUp**: Handles mouse up event, resets dragging state, hides tooltip, and calls the `onChangeComplete` callback.
- **handleInputChange**: Handles input change event for the slider, parses and updates value.
- **getTrackStyle**: Returns the CSS style for the slider track, including active and inactive segments for single and dual-range.
- **renderMarks**: Renders tick marks and labels along the slider track if enabled.
- **renderTooltip**: Renders a tooltip showing the current value(s) if enabled.

### configurations.ts

- **RangeVariant, RangeSize, RangeState, ExtendedRangeKind, RangeStyle (types)**: Type definitions for the range system.
- **RangeConfiguration (interface)**: Interface for range configuration objects.
- **RangeFactoryProps (interface)**: Props for the range factory component.
- **RANGE_CONFIGURATIONS**: Registry of all built-in range configurations by kind.

### factory.tsx

- **RangeFactory**: React component that creates a range/slider using the configuration system. Merges configuration and props, then renders the `Range` component.

### index.ts

- **Range, RangeFactory, RangeKind, RangeConfiguration, RangeFactoryProps**: Exported main Range component, factory, and types.
- **All configuration types and helpers**: Re-exported from `configurations.ts`.
- **RANGE_CONFIGURATIONS**: Exported registry of all range configurations.

## Extending the System

- Add new range types or presets in `configurations.ts`.
- Use the factory for DRY range/slider creation.
- All rendering and state logic is centralized in `Range.tsx` and configuration.

---

This system ensures all range/slider controls are consistent, easily configurable, and maintainable across the UI kit.
