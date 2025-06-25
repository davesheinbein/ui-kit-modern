# Pages Component System

## Overview

The `Pages` folder implements a configuration-driven, DRY page layout system for React. It enables the creation of many different page types (startup, dashboard, landing, settings, etc.) using a single, highly flexible `Page` component, a central configuration registry, and a factory pattern. This system ensures consistency, scalability, and rapid development of new page layouts across the UI kit.

## Key Files and Structure

- **Page.tsx**: The core page component. Handles all layout, header/footer/navigation rendering, and dynamic content based on configuration and props.
- **configurations.ts**: Central registry of all page types, variants, layouts, and configuration presets. Defines the configuration interface and utility functions for custom pages.
- **factory.tsx**: Provides the `PageFactory` and `PagePresets` for DRY, declarative page creation. Includes utility for custom page creation.
- **index.tsx**: Barrel file for exports and legacy/shortcut components.
- **Pages.module.scss**: Styles for all page variants, layouts, and responsive design.
- **Explanation.md**: (This file) Documentation and ERD for the Pages system.

## How It Works

- **Configuration-Driven**: All page types and their default behaviors are defined in `configurations.ts`. This allows for easy extension and consistent usage.
- **Unified Component**: `Page.tsx` merges configuration, props, and layout logic. It supports all common page features (header, footer, navigation, actions, etc.) and custom content.
- **Factory Pattern**: The `PageFactory` and `PagePresets` allow for DRY, declarative page creation in apps and UIs.
- **Customizability**: Utility functions allow for custom page configurations and overrides, supporting both standard and unique layouts.

## Example Usage

```tsx
// Create a dashboard page with custom title
<PageFactory kind="dashboard" title="Dashboard" />

// Use a preset for a landing page
<PagePresets.Landing title="Welcome!" />
```

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    PageComponent ||--o{ PageConfiguration : uses
    PageComponent ||--o{ ReduxState : may_manage
    PageComponent ||--o{ PageFactory : created_by
    PageFactory ||--o{ PageConfiguration : references
    PageComponent {
      string kind
      string title
      string layout
      ...
    }
    PageConfiguration {
      string kind
      string variant
      string layout
      ...
    }
    PageFactory {
      PageFactory(kind, configuration)
      PagePresets
      ...
    }
    ReduxState {
      // optional, for global state if used
    }
```

## Function-by-Function Reference

### Page.tsx

- **Page (component)**: Main React component for rendering all page types. Merges configuration and props, builds layout, header, footer, navigation, and main content. Handles startup and custom page logic.
- **getPageConfig**: Returns the merged configuration for the current page kind and any overrides.
- **renderPageContent**: Renders the main content area based on the page kind (e.g., startup, default, etc.).

### configurations.ts

- **PageVariant, PageLayout, PageSize, ExtendedPageKind (types)**: Type definitions for page system.
- **PageConfiguration (interface)**: Interface for page configuration objects.
- **PAGE_CONFIGURATIONS**: Registry of all built-in page configurations by kind.
- **getPageConfiguration**: Returns the configuration object for a given page kind.
- **createPageConfig**: Creates a custom page configuration by merging a kind's config with overrides.

### factory.tsx

- **PageFactory**: React component that creates a page using the configuration system. Merges configuration and props, then renders the `Page` component.
- **PagePresets**: Object containing prebuilt page component factories for all common page kinds (e.g., `Landing`, `Dashboard`).
- **createPage**: Utility function to create a page with custom configuration and props.

### index.tsx

- **Page, PageProps, BasePageProps**: Exported types and main Page component.
- **PageFactory, P, PagePresets, createPage**: Exported from `factory.tsx`.
- **All configuration types and helpers**: Re-exported from `configurations.ts`.
- **StartupPage**: Legacy wrapper for startup page creation.

## Extending the System

- Add new page types or presets in `configurations.ts`.
- Use the factory or presets for DRY page creation.
- All layout, header/footer, and content logic is centralized in `Page.tsx` and configuration.

---

This system ensures all pages are consistent, easily configurable, and maintainable across the UI kit.
