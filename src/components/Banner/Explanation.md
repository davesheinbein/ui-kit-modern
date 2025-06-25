# Banner Component System (`src/components/Banner`)

This folder implements a **unified, configuration-driven banner/notification system** for the UI kit. It provides reusable, DRY banners, notifications, toasts, status bars, and global alerts, all with minimal code duplication and maximum flexibility.

## Key Concepts

- **Banner.tsx**: The main banner component, supporting all banner types (feedback, notification, toast, status, global) via a single, flexible API.
- **configurations.ts**: Centralizes all configuration types and presets for banners. Defines the available kinds, default layouts, and settings.
- **Banner.module.scss**: All styles for banners, notifications, toasts, and status bars.
- **index.ts**: Exports all main symbols for easy import elsewhere.

## How It Works

- **Ultra-DRY**: All banner UIs share the same core logic and styles, with only the configuration and content changing per kind.
