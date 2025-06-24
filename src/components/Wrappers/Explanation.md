# Wrappers Component System Explanation

## Overview

The `Wrappers` folder provides a universal, configuration-driven system for rendering all types of wrapper components in a modern React UI kit. It supports a wide range of wrapper kinds (component, provider, layout, legacy, compatibility, and many more), variants, and layouts. The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and migration of wrappers for any component, layout, or provider with minimal code. Wrappers are used to standardize, enhance, or provide backward compatibility for components across the UI kit.

## Architecture

- **configurations.ts**: Centralizes all wrapper configuration types, variants, and presets. Defines the shape of wrapper configuration objects and provides reusable configuration objects for all supported wrapper kinds, including migration paths and deprecation warnings.
- **Wrapper.tsx**: The core component that renders the wrapper UI based on the provided configuration and props. Handles all logic for mapping kinds, variants, layouts, and rendering the correct target component or container. Also manages migration helpers and deprecation warnings.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Wrapper.module.scss**: Modern, theme-aware styles for all wrapper layouts, variants, and states, supporting dark mode, responsive design, and accessibility. Includes special styles for migration helpers and legacy support.

## Usage

- Use configuration objects from `configurations.ts` or define your own for custom wrappers.
- Use quick wrapper functions and presets for rapid migration and DRY usage.
- Wrappers can be used to standardize layout, provide backward compatibility, or enhance components with additional logic or styling.

## Key Features

- **Ultra-DRY**: One function call = one wrapper, with minimal boilerplate.
- **Highly Configurable**: Supports component, provider, layout, legacy, and compatibility wrappers with custom configuration.
- **Presets & Shortcuts**: Rapidly create button, modal, grid, page, sidebar, and provider wrappers with a single line.
- **Migration Helpers**: Built-in support for migration paths and deprecation warnings for legacy wrappers.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.

## Mermaid ERD Diagram

```mermaid
erDiagram
    WrapperFactory ||--o{ Wrapper : creates
    Wrapper ||--o{ WrapperConfiguration : uses
    WrapperFactory ||--o{ WRAPPER_CONFIGURATIONS : provides
    WrapperFactory ||--o{ WrapperPresets : provides
    WrapperFactory ||--o{ QuickWrappers : provides
    Wrapper ||--|> Wrapper.module.scss : styles
    Wrapper ||--|> configurations.ts : configures
    WrapperFactory ||--|> factory.tsx : implements
    Wrapper ||--|> index.ts : exports

    WrapperFactory {
      create(props)
      button(props)
      modal(props)
      ...
    }
    Wrapper {
      kind
      children
      ...props
    }
    WrapperConfiguration {
      kind
      variant
      layout
      targetComponent
      migrationPath
      ...props
    }
```

## Example

```tsx
// Create a button wrapper
W.button({ children: 'Click me' });

// Create a modal wrapper
W.modal({ isOpen: true });

// Create a legacy wrapper with migration helper
W.legacy({ children: <OldComponent /> });
```

---

## Function-by-Function Reference

### `Wrapper` (default export from `Wrapper.tsx`)

A React component that renders a universal wrapper for any component, provider, layout, or legacy UI. Handles all logic for mapping kinds, variants, layouts, and rendering the correct target component or container. Also manages migration helpers and deprecation warnings for legacy wrappers.

#### Key Internal Functions:

- **`renderTargetComponent(config, props, children, mergedClassName)`**: Renders the correct element or component based on the wrapper configuration.
- **`getRenderData(config, props, isLayoutContainer)`**: Consolidates all rendering logic and generates data attributes and styles.
- **`getComponentType(Component)`**: Maps a component string to a standard HTML/component type.
- **`getContainerType(kind)`**: Maps a wrapper kind to a container type (flex, grid, center, stack, etc.).
- **`getContainerStyles(containerType, props)`**: Generates container styles and props for layout wrappers.
- **`mapWrapperKind(wrapperKind)`**: Maps a wrapper kind to a standardized kind for styling and logic.
- **Migration Helper**: Renders migration/deprecation warnings and helpers for legacy wrappers.

---

### `WrapperFactory` (default export from `factory.tsx`)

A class with static methods for creating wrappers in a DRY, declarative way. Provides methods for all major wrapper types, including component, provider, layout, legacy, and compatibility wrappers.

#### Methods (examples):

- `create(props)`: Create a wrapper with full configuration control.
- `button(props)`, `modal(props)`, `header(props)`, `grid(props)`, `page(props)`, `sidebar(props)`, `settings(props)`, `theme(props)`, `admin(props)`, `card(props)`, `banner(props)`, `chat(props)`, `form(props)`: Create wrappers for specific component types.
- `socketProvider(props)`, `userSettingsProvider(props)`, `themePaletteProvider(props)`, `achievementSocketListener(props)`: Provider wrappers.
- `primaryButton(props)`, `secondaryButton(props)`, `closeButton(props)`, `iconButton(props)`, `browseHeader(props)`, `modalHeader(props)`, `vsGrid(props)`, `startupPage(props)`, `customizationCategory(props)`, `settingsPanel(props)`, `themeSelector(props)`, `friendsSidebar(props)`, `sessionDebugger(props)`, `darkModeToggle(props)`: Legacy wrappers.
- `component(props)`, `provider(props)`: Generic wrappers.
- `flexContainer(props)`, `gridContainer(props)`, `centerContainer(props)`, `stackContainer(props)`: Layout container wrappers.
- `backwardCompatibility(props)`, `legacy(props)`: Migration/compatibility wrappers.

---

### `WrapperPresets` (from `factory.tsx`)

A set of pre-configured wrapper functions for common use cases, e.g. `WrapperPresets.BUTTON`, `WrapperPresets.MODAL`, `WrapperPresets.LEGACY_WITH_WARNING`, etc.

---

### `QuickWrappers` (from `factory.tsx`)

Ultra-convenient shortcuts for instant wrapper creation, e.g. `QuickWrappers.button(children, props)`.

---

### Standalone Factory Functions (from `factory.tsx`)

- `createWrapper(kind, props)`: Create a wrapper by kind and props.
- `createWrapperWithConfig(kind, config, props)`: Create a wrapper by kind, custom config, and props.

---

### Types and Configurations (from `configurations.ts`)

- **`WrapperKind`, `WrapperVariant`, `WrapperLayout`**: Type definitions for wrapper kinds, variants, and layouts.
- **`WrapperConfiguration`**: Interface for wrapper configuration objects.
- **`WRAPPER_CONFIGURATIONS`**: Preset configuration objects for each wrapper kind.
- **`getWrapperConfig(kind)`**: Returns the configuration for a given wrapper kind.
- **`isWrapperKind(kind)`**: Type guard for wrapper kinds.
- **`getWrappersByVariant(variant)`**: Returns all wrappers for a given variant.
- **`getDeprecatedWrappers()`**: Returns all deprecated/legacy wrappers.
- **`createWrapperConfig(baseKind, overrides)`**: Creates a custom wrapper configuration.
- **`WRAPPER_GROUPS`, `QUICK_WRAPPERS`**: Groupings and shortcuts for wrapper kinds.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `Wrapper` component, all types, the `WrapperFactory`, `W`, presets, and configuration helpers for easy import elsewhere in the UI kit.

---

This folder enables rapid, maintainable, and highly customizable wrapper UIs for any modern React application, and provides a migration path for legacy code.
