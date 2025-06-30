# Searchbar Component

A flexible, accessible search input for filtering, searching, and quick lookup. Supports variants, sizes, and debounced search events.

## Folder Structure & File Responsibilities

- `Searchbars.tsx`: Main searchbar component. Handles input, search, and clear logic.
- `searchbars.module.scss`: SCSS module for searchbar styles and variants.
- `configurations.ts`: Types and configuration objects for searchbar variants and props.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Searchbar } from 'src/components/Searchbars';
```

**NPM:**

```tsx
import { Searchbar } from 'ui-kit-modern';
```

## Supported Props

- `value`, `defaultValue`: Controlled/uncontrolled value
- `onChange`: Input change handler
- `onSearch`: Called on Enter or debounce
- `placeholder`: Input placeholder
- `variant`: Visual style (default, minimal, outlined, filled, underlined)
- `size`: small | medium | large
- `disabled`, `loading`, `clearable`, `autoFocus`, `debounce`
- ...plus all native `<input />` props

## Best Practices

- Use `onSearch` for debounced or explicit search actions.
- Use `onChange` for live filtering.
- Use `clearable` for user-friendly UX.
- Use consistent variants and sizes across your UI.

## Example

```tsx
<Searchbar
	value={search}
	onChange={setSearch}
	onSearch={handleSearch}
	placeholder='Search users...'
	variant='outlined'
	size='large'
	clearable
/>
```
