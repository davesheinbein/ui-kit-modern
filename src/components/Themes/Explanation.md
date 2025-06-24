# Themes Component System Explanation

## Overview

The `Themes` folder provides a highly flexible, configuration-driven system for rendering theme selectors, palettes, and theme-related UI in a modern React UI kit. It supports a wide range of theme kinds (selector, palette, provider, switcher, custom, and many extended variants), display types (swatches, dropdown, cards, grid, list), layouts, and advanced features like animated previews, VS mode colors, and custom theme building. The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and customization of theme selectors and theme UIs with minimal code.

## Architecture

- **configurations.ts**: Centralizes all theme configuration types, variants, and presets. Defines the shape of theme, display, layout, and VS mode color objects, and provides reusable configuration objects and default themes.
- **factory.tsx**: Exposes the `ThemeFactory` class and a set of ultra-DRY creation functions and presets for rapid instantiation of any theme selector or palette variant. Includes utilities for creating selectors, cards, dropdowns, and context-specific theme UIs.
- **ThemeSelector.tsx**: The main component for rendering theme selectors, supporting all display types, layouts, and configuration-driven options. Handles all theme selection logic, preview rendering, and accessibility.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Theme.module.scss**: Modern, theme-aware styles for all theme layouts, variants, and states, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `ThemeSelector` component or any of the factory shortcuts (e.g., `ThemeSwatches`, `ThemeDropdown`, `ThemeCards`, `ThemeGrid`, etc.) for most new theme selectors. Pass a `kind` and optional props to generate the desired theme UI.
- Use configuration objects from `configurations.ts` or define your own for custom themes.
- Customize display, layout, animation, and other props as needed.

## Key Features

- **Ultra-DRY**: One function call = one theme selector, with minimal boilerplate.
- **Highly Configurable**: Supports custom display types, layouts, animation, VS mode, and more.
- **Presets & Shortcuts**: Rapidly create swatch, dropdown, card, and grid selectors with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.
- **Theming**: Built-in support for theme selection, preview, and custom theme creation.

## Mermaid ERD Diagram

```mermaid
erDiagram
    ThemeFactory ||--o{ ThemeSelector : creates
    ThemeSelector ||--o{ ThemeConfiguration : uses
    ThemeSelector ||--o{ ThemeDefinition : displays
    ThemeFactory ||--o{ defaultThemes : provides
    ThemeSelector ||--|> Theme.module.scss : styles
    ThemeSelector ||--|> configurations.ts : configures
    ThemeFactory ||--|> factory.tsx : implements
    ThemeSelector ||--|> index.ts : exports

    ThemeFactory {
      create(kind, props)
      createGroup(groupName, sharedProps)
      createQuick(quickName, props)
    }
    ThemeSelector {
      kind
      display
      layout
      value
      themes
      ...props
    }
    ThemeConfiguration {
      variant
      display
      layout
      showLabels
      showPreview
      animated
      ...props
    }
    ThemeDefinition {
      name
      label
      color
      bg
      font
      swatchType
      vsMode
    }
```

## Example

```tsx
// Create a theme swatch selector
<ThemeSelector kind="selector-swatches" />

// Create a theme dropdown selector
<ThemeSelector kind="selector-dropdown" />

// Create a custom theme selector with animated previews
<ThemeSelector kind="selector" animated={true} showGlow={true} />
```

## Function-by-Function Reference

### `ThemeSelector` (default export from `ThemeSelector.tsx`)

A React component that renders a theme selector UI based on configuration and props. Supports all display types (swatches, dropdown, cards, grid, list), layouts, and advanced features like animated previews, custom themes, and accessibility. Handles theme selection logic, preview rendering, and dynamic configuration merging.

#### Key Internal Functions:

- **`renderDropdown`**: Renders a dropdown selector for themes.
- **`renderSwatches`**: Renders a swatch-based selector for themes.
- **`renderCards`**: Renders a card-based selector for themes.
- **`renderList`**: Renders a list-based selector for themes.
- **`renderContent`**: Chooses which display function to use based on configuration.
- **`handleThemeChange(themeName)`**: Handles theme selection and calls the `onChange` callback.
- **Dynamic Title/Subtitle**: Generates titles and subtitles based on configuration and props.

---

### `ThemeFactory` (default export from `factory.tsx`)

A class with static methods for creating theme selector components in a DRY, declarative way. Provides methods to create single or grouped theme selectors, as well as quick presets.

#### Methods:

- `create(kind, props)`: Returns a `ThemeSelector` component of the given kind with provided props.
- `createGroup(groupName, sharedProps)`: Returns an array of `ThemeSelector` components for a named group.
- `createQuick(quickName, props)`: Returns a `ThemeSelector` component using a quick preset configuration.

---

### Shortcut and Preset Functions (from `factory.tsx`)

A set of exported functions for quickly creating theme selectors for common use cases and layouts. Examples include:

- `ThemeSelector`, `ThemeSwatches`, `ThemeDropdown`, `ThemeCards`, `ThemeGrid`: Create theme selectors with different display types.
- `HorizontalThemes`, `VerticalThemes`, `CompactThemes`, `ExpandedThemes`: Layout-specific shortcuts.
- `SmallThemes`, `MediumThemes`, `LargeThemes`: Size-specific shortcuts.
- `LabeledThemes`, `UnlabeledThemes`, `PreviewThemes`, `NoPreviewThemes`, `AnimatedThemes`, `StaticThemes`: Feature-specific shortcuts.
- `ThemePalette`, `ThemeSwitcher`, `CustomThemeBuilder`, `VSModeThemes`: Specialized selectors.
- `MobileThemes`, `DesktopThemes`, `TabletThemes`, `ModalThemes`, `SidebarThemes`, `HeaderThemes`, `FooterThemes`: Context-specific selectors.
- `DashboardThemeSelector`, `ModalThemeSelector`, `SidebarThemeSelector`, `HeaderThemeSelector`, `MobileThemeSelector`, `DesktopThemeSelector`: Preset selectors for common UI contexts.
- `CustomThemeSelector`, `AnimatedThemeSelector`, `StaticThemeSelector`, `StyledThemeSelector`, `ControlledThemeSelector`: Utility functions for custom, animated, static, styled, or controlled theme selectors.
- `Themes`: Object with common patterns for rapid theme selector instantiation.

---

### Types and Configurations (from `configurations.ts`)

- **`ThemeVariant`, `ThemeDisplay`, `ThemeLayout`**: Type definitions for theme variants, display types, and layouts.
- **`ThemeDefinition`, `VSModeColors`**: Interfaces for theme definitions and VS mode color schemes.
- **`ThemeConfiguration`**: Interface for theme configuration objects.
- **`ExtendedThemeKind`**: Union type for all supported theme kinds.
- **`defaultThemes`, `vsModeDefaults`**: Default theme definitions and VS mode color presets.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `ThemeSelector` component, all types, and all factory/preset functions for easy import elsewhere in the UI kit.

---

This reference covers all main exports, classes, and utilities in the `Themes` folder, supporting rapid, DRY, and maintainable theme UI development.

---

This folder enables rapid, maintainable, and highly customizable theme UIs for any modern React application.
