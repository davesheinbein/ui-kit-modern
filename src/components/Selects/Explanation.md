# Selects Component System

## Overview

The `Selects` folder implements a DRY, configuration-driven system for all types of select dropdowns and pickers in the UI kit. It supports standard dropdowns, multiselects, autocompletes, searchable dropdowns, country/timezone/language selectors, tag/user pickers, date ranges, and more—all using a single, `Select` component, a central configuration registry, and a factory for rapid, declarative select creation. This system ensures consistency, extensibility, and rapid development of selection UIs.

## Key Files and Structure

- **Select.tsx**: The main select component. Handles all rendering logic for different select types, merging configuration, props, and Redux state for value management.
- **configurations.ts**: Central registry of all select kinds, variants, and configuration presets. Defines the configuration interface, option structure, and option groups.
- **factory.tsx**: Provides the `SelectFactory` and specific creators for DRY, declarative select creation. Includes utility for custom and preset selects.
- **index.ts**: Barrel file for exports.
- **Select.module.scss**: Styles for all select variants, sizes, placements, and states.
- **Explanation.md**: (This file) Documentation and ERD for the Selects system.

## How It Works

- **Configuration-Driven**: All select types and their default behaviors are defined in `configurations.ts`. This allows for easy extension and consistent usage.
- **Unified Component**: `Select.tsx` merges configuration, props, and Redux state. It supports all common select features (search, multi, clear, loading, error/help text, custom icons/images, etc.) and custom content.
- **Factory Pattern**: The `SelectFactory` and specific creators allow for DRY, declarative select creation in apps and UIs.
- **Customizability**: Utility functions and configuration allow for custom select controls, layouts, and behaviors.

## Example Usage

```tsx

// Standard dropdown
<Dropdown
  options={[{ value: '1', label: 'One' }, { value: '2', label: 'Two' }]}
  value={selected}
  onChange={setSelected}
/>

// Multiselect
<Multiselect
  options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
  value={selectedList}
  onChange={setSelectedList}
/>

// Autocomplete
<Autocomplete
  options={searchOptions}
  onSearch={handleSearch}
  value={searchValue}
  onChange={setSearchValue}
/>
```

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    SelectComponent ||--o{ SelectConfiguration : uses
    SelectComponent ||--o{ SelectFactory : created_by
    SelectFactory ||--o{ SelectConfiguration : references
    SelectComponent {
      string kind
      string|array value
      SelectOption[] options
      ...
    }
    SelectConfiguration {
      string variant
      string size
      string style
      ...
    }
    SelectFactory {
      SelectFactory(kind, configuration)
      Dropdown
      Multiselect
      Autocomplete
      ...
    }
```

## Function-by-Function Reference

### Select.tsx

- **Select (component)**: Main React component for rendering select controls. Handles configuration merging, Redux state management for value, open/close state, search, and all accessibility/UX logic.
- **setIsOpen**: Sets the open/closed state of the dropdown in Redux.
- **setInternalValue**: Sets the selected value(s) in Redux.
- **setSearchValue**: Sets the search input value in Redux.
- **setFocusedIndex**: Sets the focused option index in Redux for keyboard navigation.
- **handleToggle**: Toggles the open/closed state of the dropdown, and focuses the search input if needed.
- **handleSelect**: Handles selection/deselection of options, updates Redux state, and calls the `onChange` callback.
- **handleClear**: Clears the selected value(s), updates Redux state, and calls the `onChange` callback.
- **handleSearchChange**: Handles changes to the search input, updates Redux state, and calls the `onSearch` callback.
- **handleKeyDown**: Handles keyboard navigation and selection (arrows, enter, escape) in the dropdown.
- **getDisplayValue**: Returns the display string for the current value(s), including selected count and truncation logic for multiselect.

### configurations.ts

- **SelectVariant, ExtendedSelectKind, SelectSize, SelectState, SelectStyle, SelectPlacement (types)**: Type definitions for the select system.
- **SelectOption, SelectOptionGroup (interfaces)**: Structures for select options and option groups.
- **SelectConfiguration (interface)**: Interface for select configuration objects.
- **SelectFactoryProps (interface)**: Props for the select factory component.
- **SELECT_CONFIGURATIONS**: Registry of all built-in select configurations by kind.

### factory.tsx

- **SelectFactory**: React component that creates a select control using the configuration system. Merges configuration and props, then renders the `Select` component.
- **Dropdown, Multiselect, Autocomplete, SearchableDropdown, CountrySelector, TimezoneSelector, LanguageSelector, CategoryFilter, TagSelector, UserPicker, DateRangeSelector, CustomSelect**: Prebuilt select creators for all common select kinds.

### index.ts

- **Select, SelectFactory, SelectKind, SelectConfiguration, SelectFactoryProps**: Exported main Select component, factory, and types.
- **All configuration types and helpers**: Re-exported from `configurations.ts`.

## Extending the System

- Add new select types or presets in `configurations.ts`.
- Use the factory or specific creators for DRY select creation.
- All rendering and state logic is centralized in `Select.tsx` and configuration.

---

This system ensures all select controls are consistent, easily configurable, and maintainable across the UI kit.
