# Radios Component System

## Overview

The `Radios` folder implements a DRY, configuration-driven system for all types of radio groups and selectors in the UI kit. It supports standard radios, button groups, card selections, toggle switches, image/color/size pickers, and more, all using a single, `Radio` component, a central configuration registry, and a factory for rapid, declarative radio creation. This system ensures consistency, extensibility, and rapid development of selection UIs.

## Key Files and Structure

- **Radio.tsx**: The main radio group component. Handles all rendering logic for different radio types, merging configuration, props, and Redux state for value management.
- **configurations.ts**: Central registry of all radio kinds, variants, and configuration presets. Defines the configuration interface and option structure.
- **factory.tsx**: Provides the `RadioFactory` and specific creators for DRY, declarative radio group creation. Includes utility for custom and preset radios.
- **index.ts**: Barrel file for exports.
- **Radio.module.scss**: Styles for all radio variants, sizes, alignments, and states.
- **Explanation.md**: (This file) Documentation and ERD for the Radios system.

## How It Works

- **Configuration-Driven**: All radio types and their default behaviors are defined in `configurations.ts`. This allows for easy extension and consistent usage.
- **Unified Component**: `Radio.tsx` merges configuration, props, and Redux state. It supports all common radio features (deselect, error, help text, custom icons/images, etc.) and custom content.
- **Factory Pattern**: The `RadioFactory` and specific creators allow for DRY, declarative radio group creation in apps and UIs.
- **Customizability**: Utility functions and configuration allow for custom radio groups, layouts, and behaviors.

## Example Usage

```tsx
// Button group radio
<ButtonGroupRadio
  name="color"
  options={[{ value: 'red', label: 'Red' }, { value: 'blue', label: 'Blue' }]}
  value={selectedColor}
  onChange={setSelectedColor}
/>

// Card selection radio
<CardSelectionRadio
  name="plan"
  options={[{ value: 'basic', label: 'Basic' }, { value: 'pro', label: 'Pro' }]}
  value={selectedPlan}
  onChange={setSelectedPlan}
/>
```

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    RadioComponent ||--o{ RadioConfiguration : uses
    RadioComponent ||--o{ RadioFactory : created_by
    RadioFactory ||--o{ RadioConfiguration : references
    RadioComponent {
      string kind
      string name
      string value
      RadioOption[] options
      ...
    }
    RadioConfiguration {
      string variant
      string size
      string alignment
      ...
    }
    RadioFactory {
      RadioFactory(kind, configuration)
      ButtonGroupRadio
      CardSelectionRadio
      ...
    }
```

## Function-by-Function Reference

### Radio.tsx

- **Radio (component)**: Main React component for rendering radio groups. Handles configuration merging, Redux state management for value, rendering of options, and all accessibility/UX logic.
- **handleChange**: Handles selection/deselection of radio options, updates Redux state, and calls the `onChange` callback.
- **renderOption**: Renders a single radio option, including icon, image, label, and description, with correct classes and accessibility.

### configurations.ts

- **RadioVariant, ExtendedRadioKind, RadioSize, RadioState, RadioStyle, RadioAlignment (types)**: Type definitions for the radio system.
- **RadioOption (interface)**: Structure for a single radio option.
- **RadioConfiguration (interface)**: Interface for radio configuration objects.
- **RadioFactoryProps (interface)**: Props for the radio factory component.
- **RADIO_CONFIGURATIONS**: Registry of all built-in radio configurations by kind.

### factory.tsx

- **RadioFactory**: React component that creates a radio group using the configuration system. Merges configuration and props, then renders the `Radio` component.
- **StandardRadio, ButtonGroupRadio, CardSelectionRadio, ToggleSwitchRadio, ImageRadio, ColorPickerRadio, SizeSelectorRadio, PlanSelectorRadio, PreferenceRadio, CustomRadio**: Prebuilt radio group creators for all common radio kinds.

### index.ts

- **Radio, RadioProps**: Exported main Radio component and its props type.
- **RadioFactory, RadioKind, RadioConfiguration, RadioFactoryProps**: Exported from `factory.tsx`.
- **All configuration types and helpers**: Re-exported from `configurations.ts`.

## Extending the System

- Add new radio types or presets in `configurations.ts`.
- Use the factory or specific creators for DRY radio group creation.
- All rendering and state logic is centralized in `Radio.tsx` and configuration.

---

This system ensures all radio groups/selectors are consistent, easily configurable, and maintainable across the UI kit.
