# Card Component System (`src/components/Card`)

This folder implements a **unified, configuration-driven card system** for the UI kit. It provides reusable, DRY cards for friends, games, profiles, notifications, stats, achievements, and more, all with minimal code duplication and maximum flexibility.

## Key Concepts

- **Card.tsx**: The main card component, supporting all card types (default, elevated, outlined, filled, friend, game, profile, notification, stats, etc.) via a single, flexible API.
- **configurations.ts**: Centralizes all configuration types, card kinds, and default settings. Defines the available card types, variants, and behaviors.
- **Card.module.scss**: All styles for cards, including variants, sizes, and specific card kinds.
- **index.ts**: Exports all main symbols for easy import elsewhere.

## How It Works

- **Ultra-DRY**: All card UIs share the same core logic and styles, with only the configuration and content changing per kind.
