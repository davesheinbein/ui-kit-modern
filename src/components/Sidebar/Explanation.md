# Sidebar Component System Explanation

## Overview

The `Sidebar` folder provides a highly flexible, configuration-driven system for rendering sidebars in a modern React UI kit. It supports a wide range of sidebar types (friends, settings, chat, notifications, custom), positions (left, right), sizes (small, medium, large, full), and behaviors (modal, overlay, push, slide, fade, scale, responsive, etc.). The system is designed for ultra-DRY (Don't Repeat Yourself) usage, enabling rapid creation and composition of sidebars with minimal code.

## Architecture

- **configurations.ts**: Centralizes all sidebar configuration types, variants, and extended kinds. This file defines the shape of sidebar configuration objects and provides reusable configuration presets for common sidebar types and behaviors.
- **Sidebar.tsx**: The core component that renders the sidebar UI based on the provided configuration. Handles overlay, animation, accessibility, focus management, and all sidebar logic.
- **factory.tsx**: Exposes the `SidebarFactory` class and a set of ultra-DRY creation functions and presets (`S`, `SidebarPresets`, `SidebarGroups`, etc.) for rapid instantiation of any sidebar variant. Includes utilities for creating stacks, responsive sidebars, and custom configurations.
- **index.ts**: Exports all main components, types, and factory functions for easy import and usage throughout the codebase.
- **Sidebar.module.scss**: Modern, theme-aware styles for all sidebar layouts, variants, and behaviors, supporting dark mode, responsive design, and accessibility.

## Usage

- Use the `S` function or `SidebarFactory` for most new sidebars. Pass a `kind` and optional props to generate the desired sidebar.
- Use preset functions (e.g., `SidebarPresets.Friends()`, `SidebarGroups.Friends(0)`) for common sidebar types and behaviors.
- Compose multiple sidebars or create responsive/animated variants using the provided utilities.

## Key Features

- **Ultra-DRY**: One function call = one sidebar, with minimal boilerplate.
- **Highly Configurable**: Supports custom layouts, positions, sizes, animations, and behaviors via configuration.
- **Presets & Shortcuts**: Rapidly create friends, settings, chat, and notification sidebars with a single line.
- **Modern UI**: Fully styled, accessible, and responsive out of the box.
- **Composability**: Easily create stacks, overlays, and responsive sidebars for complex layouts.

## Mermaid ERD Diagram

```mermaid
erDiagram
    SidebarFactory ||--o{ Sidebar : creates
    Sidebar ||--o{ SidebarConfiguration : uses
    SidebarFactory ||--o{ SidebarPresets : provides
    SidebarFactory ||--o{ SidebarGroups : provides
    SidebarFactory ||--o{ SidebarComposer : provides
    Sidebar ||--|> Sidebar.module.scss : styles
    Sidebar ||--|> configurations.ts : configures
    SidebarFactory ||--|> factory.tsx : implements
    Sidebar ||--|> index.ts : exports

    SidebarFactory {
      create(kind, props)
      createFromGroup(group, index, props)
      createQuick(preset, props)
      createMultiple(configs)
      createCustom(baseKind, customConfig, props)
    }
    Sidebar {
      kind
      open
      onClose
      ...props
    }
    SidebarConfiguration {
      kind
      variant
      position
      size
      ...props
    }
```

## Example

```tsx
// Create a friends sidebar (right, medium)
<S kind="friends" open={open} onClose={handleClose} />

// Create a settings sidebar (left, small)
<S kind="settings-left" open={open} onClose={handleClose} />

// Create a stack of sidebars
SidebarComposer.createStack([
  { kind: 'friends', props: { open: true } },
  { kind: 'chat', props: { open: false } },
]);
```

---

This folder enables rapid, maintainable, and highly customizable sidebar UIs for any modern React application.
