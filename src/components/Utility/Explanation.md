# Utility Component System Explanation

## Overview

The `Utility` folder provides a highly flexible, configuration-driven system for rendering a wide variety of utility UI components in a modern React UI kit. It supports overlay components (tooltips, popovers, dropdowns, modals), separators (dividers, spacers), tags/labels (chips, badges, status indicators), process/step components (steppers, breadcrumbs, pagination), rating/feedback (stars, hearts, thumbs), and layout utilities (container, grid-item, stack, etc.). The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and customization of utility components with minimal code.

## Architecture

- **configurations.ts**: Centralizes all utility configuration types, variants, and presets. Defines the shape of utility configuration objects and provides reusable configuration objects for all supported utility kinds.
- **factory.ts**: Exposes the `UtilityFactory` class and a set of ultra-DRY creation functions and presets (`UtilityComponents`) for rapid instantiation of any utility component. Includes utilities for overlays, tags, steppers, ratings, and more.
- **Utility.tsx**: The core component that renders the utility UI based on the provided configuration and props. Handles all logic for overlays, tags, ratings, steppers, and Redux state management for isolation and interactivity.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Utility.module.scss**: Modern, theme-aware styles for all utility layouts, variants, and states, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `UtilityFactory` or `UtilityComponents` for most new utility components. Pass a `kind` and optional props to generate the desired utility UI.
- Use configuration objects from `configurations.ts` or define your own for custom utilities.
- Customize label, icon, actions, placement, and other props as needed.

## Key Features

- **Ultra-DRY**: One function call = one utility component, with minimal boilerplate.
- **Highly Configurable**: Supports overlays, tags, steppers, ratings, layout utilities, and more.
- **Presets & Shortcuts**: Rapidly create tooltips, popovers, chips, badges, steppers, and ratings with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.
- **Redux Integration**: Each utility instance can be isolated in Redux state for advanced scenarios.

## Mermaid ERD Diagram

```mermaid
erDiagram
    UtilityFactory ||--o{ Utility : creates
    Utility ||--o{ UtilityConfiguration : uses
    UtilityFactory ||--o{ UTILITY_CONFIGURATIONS : provides
    UtilityFactory ||--o{ UtilityComponents : provides
    Utility ||--|> Utility.module.scss : styles
    Utility ||--|> configurations.ts : configures
    UtilityFactory ||--|> factory.ts : implements
    Utility ||--|> index.ts : exports

    UtilityFactory {
      create(config)
      createFromKind(kind)
    }
    Utility {
      kind
      label
      icon
      actions
      ...props
    }
    UtilityConfiguration {
      kind
      variant
      size
      label
      icon
      placement
      trigger
      ...props
    }
```

## Example

```tsx
// Create a tooltip utility
<Utility kind="tooltip" label="Info" />

// Create a chip utility with dismiss
<Utility kind="chip" label="Tag" dismissible />

// Use a pre-configured rating stars utility
<UtilityComponents.RatingStars value={4} onValueChange={setRating} />
```

---

## Function-by-Function Reference

### `Utility` (default export from `Utility.tsx`)

A React component that renders a configurable utility UI (tooltip, popover, tag, chip, badge, divider, stepper, rating, etc.) based on the provided kind and configuration. Handles all logic for overlays, tags, ratings, steppers, and Redux state management for isolation and interactivity.

#### Key Internal Functions:

- **Redux State Management**: Initializes and cleans up isolated Redux state for each utility instance.
- **`handleMouseEnter` / `handleMouseLeave`**: Handles hover-triggered overlays (tooltips, popovers) with delay.
- **`handleClick`**: Handles click-triggered overlays and general click events.
- **`handleDismiss`**: Handles dismissing dismissible utilities (chips, tags, overlays).
- **`handleRatingClick(newValue)`**: Handles rating value changes for interactive rating utilities.
- **`handleStepClick(step)`**: Handles step changes for steppers and wizards.
- **Render Functions**: `renderOverlayContent`, `renderTagContent`, `renderStars`, `renderStepper`, `renderDivider`, and `renderContent` render the appropriate UI for each utility kind.

---

### `UtilityFactory` (class, from `factory.ts`)

A class with static methods for creating utility components in a DRY, declarative way. Provides methods to create a utility from a configuration or from a kind.

- **`create(config)`**: Returns a React component for the given utility configuration.
- **`createFromKind(kind)`**: Returns a React component for the given utility kind using the configuration registry.

---

### `UtilityComponents` (from `factory.ts`)

A set of pre-configured utility components for all supported utility kinds. Examples:

- `Tooltip`, `Popover`, `DropdownMenu`, `ContextMenu`, `ModalOverlay`
- `Divider`, `Separator`, `Spacer`, `SectionBreak`
- `Tag`, `Chip`, `Badge`, `Label`, `Pill`, `StatusIndicator`
- `Stepper`, `Breadcrumb`, `Pagination`, `WizardSteps`
- `RatingStars`, `RatingHearts`, `ThumbsRating`, `NumericRating`, `FeedbackScale`
- `Container`, `GridItem`, `FlexItem`, `Stack`, `InlineStack`

---

### Types and Configurations (from `configurations.ts`)

- **`UtilityKind`, `UtilitySize`, `UtilityVariant`, `UtilityPlacement`**: Type definitions for utility kinds, sizes, variants, and placements.
- **`UtilityAction`**: Interface for utility actions (e.g., button actions in overlays).
- **`UtilityConfiguration`**: Interface for utility configuration objects.
- **`UTILITY_CONFIGURATIONS`**: Preset configuration objects for each utility kind.
- **`getUtilityConfig(kind)`**: Returns the configuration for a given utility kind.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `Utility` component, all types, the `UtilityFactory`, `UtilityComponents`, and configuration helpers for easy import elsewhere in the UI kit.

---

This folder enables rapid, maintainable, and highly customizable utility UIs for any modern React application.
