# Inputs Component System

## Overview

The `Inputs` folder implements a highly DRY, configurable, and extensible input component system for React. It provides a unified `Input` component with advanced features, a configuration-driven approach, Redux integration for state management, and a factory for rapid input creation. This system is designed for scalability, reusability, and consistency across all forms and input use cases in the UI kit.

## Key Files and Structure

- **Input.tsx**: The main input component. Handles all input logic, configuration merging, Redux state, debounced value changes, validation, and advanced UI features (clearable, password toggle, icons, etc.).
- **configurations.ts**: Central registry of all input types, variants, and configuration presets. Defines the configuration interface, input kinds, and groups.
- **factory.tsx**: Provides the `InputFactory` class and functional factory for creating any input by kind, with optional overrides, in a single line.
- **index.ts**: Barrel file for exports.
- **Input.module.scss**: Styles for all input variants, states, and sizes.
- **Explanation.md**: (This file) Documentation and ERD for the Inputs system.

## How It Works

- **Configuration-Driven**: All input types and their default behaviors are defined in `configurations.ts`. This allows for easy extension and consistent usage.
- **Unified Component**: `Input.tsx` merges configuration, props, and Redux state. It supports both controlled and uncontrolled usage, debounced value changes, custom validation, and advanced UI features.
- **Redux Integration**: Each input instance is tracked in Redux by a unique `componentId`, allowing for global state, validation, and focus management.
- **Factory Pattern**: The `InputFactory` and `InputFactoryFunction` allow for DRY, declarative input creation in forms and UIs.

## Example Usage

```tsx
import { InputFactory } from './factory';

// Create a password input with custom label
div>
  {InputFactory.password({ label: 'Password', required: true })}
</div>
```

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    InputComponent ||--o{ InputConfiguration : uses
    InputComponent ||--o{ ReduxInputState : manages
    InputComponent ||--o{ InputFactory : created_by
    InputFactory ||--o{ InputConfiguration : references
    ReduxInputState ||--|| InputConfiguration : config_for
    InputComponent {
      string kind
      string value
      string label
      ...
    }
    InputConfiguration {
      string kind
      string variant
      string label
      ...
    }
    ReduxInputState {
      string componentId
      string value
      string state
      ...
    }
    InputFactory {
      create(kind, overrides)
      ...
    }
```

## Function-by-Function Reference

### configurations.ts

- **InputVariant, ExtendedInputKind, InputSize, InputState, InputStyle**: Type definitions for input variants, kinds, sizes, states, and styles.
- **InputConfiguration**: Interface describing the structure of an input configuration object.
- **INPUT_CONFIGURATIONS**: Record mapping each `ExtendedInputKind` to its default configuration.
- **INPUT_GROUPS**: Categorizes input kinds for organized display (basic, specialized, authentication, utility).
- **InputKind**: Type alias for `ExtendedInputKind`.

### factory.tsx

- **InputFactory**: Class with static methods for creating input components:
  - `create(kind, overrides)`: Returns an `Input` of the given kind, merging default config and overrides.
  - `text(props)`, `email(props)`, `password(props)`, `number(props)`: Create basic input types.
  - `search(props)`, `url(props)`, `tel(props)`: Create specialized input types.
  - `username(props)`, `loginEmail(props)`, `confirmationPassword(props)`: Create authentication input types.
  - `searchFilter(props)`, `custom(props)`: Create utility/custom input types.
- **InputFactoryFunction(kindOrProps, overrides)**: Functional factory for creating inputs. If the first argument is a string, creates an input of that kind; if it's a props object, uses its `kind` property or defaults to 'text'.
- **I**: Shorthand alias for `InputFactoryFunction`.

### Input.tsx

- **Input (main component)**: React forwardRef component. Handles all input logic, configuration merging, Redux state, debounced value changes, validation, and advanced UI features (clearable, password toggle, icons, etc.).
- **handleChange(event)**: Handles input value changes, updates Redux state, calls `onChange`/`onValueChange`, and runs custom validation if provided.
- **handleClear()**: Clears the input value and updates state.
- **handlePasswordToggle()**: Toggles password visibility in Redux state.
- **handleFocus(event)**: Sets focus state in Redux and calls `onFocus` prop.
- **handleBlur(event)**: Clears focus state in Redux and calls `onBlur` prop.

### index.ts

- **Exports**: Re-exports all main types, components, configurations, and factories for easy import.

---

This system ensures all inputs are consistent, easily configurable, and maintainable across the UI kit.
