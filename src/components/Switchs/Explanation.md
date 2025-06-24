# Switchs Component System Explanation

## Overview

The `Switchs` folder provides a flexible, configuration-driven system for rendering all types of switch components in a modern React UI kit. It supports a wide range of switch kinds (toggle, checkbox-switch, button-switch, slider-switch, dark-mode-toggle, notification-toggle, privacy-switch, feature-toggle, power-switch, custom), variants, sizes, states, and advanced features like animation, icons, labels, and Redux integration for state management. The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and customization of switches with minimal code.

## Architecture

- **configurations.ts**: Centralizes all switch configuration types, variants, and presets. Defines the shape of switch configuration objects and provides reusable configuration objects for common switch types.
- **factory.tsx**: Exposes the `SwitchFactory` component, which generates a switch based on the provided kind and configuration. Handles merging of base and custom configuration, and passes all props to the underlying switch.
- **Switch.tsx**: The core component that renders the switch UI based on the provided configuration and props. Handles all switch logic, including controlled/uncontrolled state, Redux integration, and accessibility.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Switch.module.scss**: Modern, theme-aware styles for all switch layouts, variants, and states, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `SwitchFactory` or `Switch` component for most new switches. Pass a `kind` and optional props to generate the desired switch variant.
- Use configuration objects from `configurations.ts` or define your own for custom switches.
- Customize label, help text, error, icons, and other props as needed.

## Key Features

- **Ultra-DRY**: One function call = one switch, with minimal boilerplate.
- **Highly Configurable**: Supports custom variants, sizes, states, animation, icons, and more.
- **Presets & Shortcuts**: Rapidly create dark mode, notification, privacy, and feature toggles with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.
- **Redux Integration**: Each switch instance can be isolated in Redux state for advanced scenarios.

## Mermaid ERD Diagram

```mermaid
erDiagram
    SwitchFactory ||--o{ Switch : creates
    Switch ||--o{ SwitchConfiguration : uses
    SwitchFactory ||--o{ SWITCH_CONFIGURATIONS : provides
    Switch ||--|> Switch.module.scss : styles
    Switch ||--|> configurations.ts : configures
    SwitchFactory ||--|> factory.tsx : implements
    Switch ||--|> index.ts : exports

    SwitchFactory {
      kind
      ...config
    }
    Switch {
      kind
      checked
      onChange
      ...props
    }
    SwitchConfiguration {
      variant
      size
      state
      style
      showLabels
      showIcons
      animated
      required
      borderRadius
      animationDuration
      ...props
    }
```

## Example

```tsx
// Create a dark mode toggle switch
<Switch kind="dark-mode-toggle" label="Dark Mode" />

// Create a notification toggle with label and icon
<Switch kind="notification-toggle" label="Notifications" onLabel="On" offLabel="Off" />
```

---

## Function-by-Function Reference

### `Switch` (default export from `Switch.tsx`)

A React component that renders a configurable switch (toggle, checkbox, button, slider, etc.) with support for controlled/uncontrolled state, Redux integration, accessibility, and advanced styling. Handles all switch logic, including state updates, label rendering, error/help text, and animation.

#### Key Internal Functions:

- **`handleToggle`**: Toggles the checked state, dispatches Redux updates, and calls the `onChange` callback.
- **Redux Integration**: Uses `useAppDispatch` and `useAppSelector` to sync switch state with the Redux store, supporting isolated state per switch instance.
- **Effect Hooks**: Syncs initial/default state and cleans up Redux state on unmount.

---

### `SwitchFactory` (default export from `factory.tsx`)

A React component (with `forwardRef`) that generates a switch based on a given kind and configuration. Merges base and custom configuration, and passes all props to the underlying `Switch` component. Handles state overrides for `disabled`, `error`, and `required` props.

#### Props:

- `kind`: The switch kind (e.g., 'toggle', 'dark-mode-toggle').
- `configuration`: Optional partial configuration to override base config.
- All other props are passed to the `Switch` component.

---

### Types and Configurations (from `configurations.ts`)

- **`SwitchVariant`, `SwitchSize`, `SwitchState`, `SwitchStyle`**: Type definitions for switch variants, sizes, states, and styles.
- **`ExtendedSwitchKind`**: Union type for all supported switch kinds.
- **`SwitchConfiguration`**: Interface for switch configuration objects (variant, size, state, style, animation, etc.).
- **`SwitchFactoryProps`**: Props for the factory component.
- **`SWITCH_CONFIGURATIONS`**: Preset configuration objects for each switch kind.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `Switch` and `SwitchFactory` components, as well as all relevant types, for easy import elsewhere in the UI kit.

---

This reference covers all main exports, classes, and utilities in the `Switchs` folder, supporting rapid, DRY, and maintainable switch UI development.

---

This folder enables rapid, maintainable, and highly customizable switch UIs for any modern React application.
