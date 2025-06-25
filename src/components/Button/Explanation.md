# Button Component System (`src/components/Button`)

This folder implements a **unified, configuration-driven button system** for the UI kit. It provides reusable, DRY buttons, icon buttons, word buttons, copy-link buttons, navigation buttons, and more, all with minimal code duplication and maximum flexibility.

## Key Concepts

- **Button.tsx**: The main button component, supporting all button types (primary, secondary, danger, icon, word, copy-link, etc.) via a single, flexible API.
- **configurations.ts**: Centralizes all configuration types, button kinds, and default settings. Defines the available button types, variants, and behaviors.
- **Button.module.scss**: All styles for buttons, including variants, sizes, icon layouts, and accessibility.
- **index.ts**: Exports all main symbols for easy import elsewhere.

## How It Works

- **Ultra-DRY**: All button UIs share the same core logic and styles, with only the configuration and content changing per kind.
