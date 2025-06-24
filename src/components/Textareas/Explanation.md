# Textareas Component System Explanation

## Overview

The `Textareas` folder provides a flexible, configuration-driven system for rendering all types of textarea components in a modern React UI kit. It supports a wide range of textarea kinds (standard, comment, description, message, code, review, feedback, note, custom), variants (outlined, filled, minimal, custom), sizes, states, and advanced features like auto-resize, character counters, and custom styles. The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and customization of textareas with minimal code.

## Architecture

- **configurations.ts**: Centralizes all textarea configuration types, variants, and presets. Defines the shape of textarea configuration objects and provides reusable configuration objects for common textarea types.
- **factory.tsx**: Exposes the `TextareaFactory` component, which generates a textarea based on the provided kind and configuration. Handles merging of base and custom configuration, and passes all props to the underlying textarea.
- **Textarea.tsx**: Exports the main `Textarea` component, which is a thin wrapper around `TextareaFactory` for convenience and DRY usage.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Textarea.module.scss**: Modern, theme-aware styles for all textarea layouts, variants, and states, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `Textarea` or `TextareaFactory` component for most new textareas. Pass a `kind` and optional props to generate the desired textarea variant.
- Use configuration objects from `configurations.ts` or define your own for custom textareas.
- Customize label, help text, error, max length, and other props as needed.

## Key Features

- **Ultra-DRY**: One function call = one textarea, with minimal boilerplate.
- **Highly Configurable**: Supports custom variants, sizes, states, auto-resize, counters, and more.
- **Presets & Shortcuts**: Rapidly create comment, review, feedback, and code textareas with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.

## Mermaid ERD Diagram

```mermaid
erDiagram
    TextareaFactory ||--o{ Textarea : creates
    Textarea ||--o{ TextareaConfiguration : uses
    TextareaFactory ||--o{ TEXTAREA_CONFIGURATIONS : provides
    Textarea ||--|> Textarea.module.scss : styles
    Textarea ||--|> configurations.ts : configures
    TextareaFactory ||--|> factory.tsx : implements
    Textarea ||--|> index.ts : exports

    TextareaFactory {
      kind
      ...config
    }
    Textarea {
      kind
      value
      onChange
      ...props
    }
    TextareaConfiguration {
      variant
      size
      state
      style
      showCounter
      autoResize
      required
      borderRadius
      rows
      ...props
    }
```

## Example

```tsx
// Create a comment textarea with auto-resize and counter
<Textarea kind="comment" label="Comment" maxLength={200} />

// Create a code textarea
<Textarea kind="code" label="Code" rows={12} />
```

## Function-by-Function Reference

### `Textarea` (default export from `Textarea.tsx`)

A React component that renders a textarea using the `TextareaFactory` component. It is a thin wrapper for DRY usage and forwards all props and refs to `TextareaFactory`.

---

### `TextareaFactory` (default export from `factory.tsx`)

A React component (with `forwardRef`) that generates a textarea based on a given kind and configuration. Merges base and custom configuration, and passes all props to the underlying textarea. Handles label, help text, error, and all textarea logic.

#### Internal `Textarea` Component (in `factory.tsx`)

- Renders the actual `<textarea>` element with the correct configuration and props.
- Handles label, help text, error display, and value changes.
- Calls `onChange` with the new value when the textarea changes.

---

### Types and Configurations (from `configurations.ts`)

- **`TextareaVariant`, `TextareaSize`, `TextareaState`, `TextareaStyle`**: Type definitions for textarea variants, sizes, states, and styles.
- **`ExtendedTextareaKind`**: Union type for all supported textarea kinds.
- **`TextareaConfiguration`**: Interface for textarea configuration objects (variant, size, state, style, autoResize, counter, etc.).
- **`TextareaFactoryProps`**: Props for the factory component.
- **`TEXTAREA_CONFIGURATIONS`**: Preset configuration objects for each textarea kind.

---

### Barrel Exports (from `index.ts`)

- Re-exports the main `Textarea` and `TextareaFactory` components, as well as all relevant types, for easy import elsewhere in the UI kit.

---

This reference covers all main exports, classes, and utilities in the `Textareas` folder, supporting rapid, DRY, and maintainable textarea UI development.

---

This folder enables rapid, maintainable, and highly customizable textarea UIs for any modern React application.
