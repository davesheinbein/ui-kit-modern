# Advertisements Component System (`src/components/Advertisements`)

This folder now implements a **single, Advertisements component**. You only need to import `Advertisements` and provide props to render any ad (banner, interstitial, native card, sticky bar, floating widget, toast, modal, etc.), as a single or multi-ad layout. All configuration, state, and rendering logic is handled internally.

## Key Concepts

- **Advertisements.tsx**: The only component you need to import. Accepts all props and renders the correct ad(s) and layout based on configuration. Handles all ad logic, analytics, provider integration, and layout.
- **configurations.ts**: Centralizes all configuration types, ad kinds, and default settings. Defines the available ad types, variants, sizes, and provider support.
- **Advertisements.module.scss**: All styles for ad components, including layouts, variants, and responsive design.
- **index.ts**: Exports only `Advertisements` and types for easy import elsewhere.

## How It Works

- **Single entry point**: Just use `<Advertisements {...props} />` for any ad or ad layout. No need for factories, presets, or helpers.
- **Configuration-driven**: Each ad type (banner, interstitial, native card, sticky bar, etc.) is defined by a `kind` and a configuration object. The component uses these to render the correct UI and manage state.
- **Ultra-DRY**: All ad UIs share the same core logic and styles, with only the configuration and content changing per kind.
- **Provider & Analytics Support**: Built-in support for multiple ad providers (AdSense, Adsterra, custom, etc.) and analytics hooks for impressions, clicks, and more.
- **Responsive & Smart Layouts**: Easily switch between stack, carousel, grid, and single layouts, with responsive breakpoints and auto-rotation.
