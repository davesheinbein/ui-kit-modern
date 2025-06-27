# Media Component Group

A component for displaying images, videos, and other media types with responsive and customizable styling.

## Folder Structure & File Responsibilities

- `Media.tsx`: Main media component. Handles rendering, fit, shape, and metadata.
- `Media.module.scss`: SCSS module for media styles, responsive design, and variants.
- `configurations.ts`: Types and configuration objects for media kinds, sizes, shapes, and variants.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Media } from 'src/components/Media';
```

**NPM:**

```tsx
import { Media } from 'ui-kit-modern';
```

## Supported Props

- `kind`: MediaKind (e.g. 'image', 'video', etc.)
- `src`: string (media source URL)
- `alt`: string (for images)
- `size`: MediaSize (optional)
- `shape`: MediaShape (optional)
- `fit`: MediaFit (optional)
- `metadata`: MediaMetadata (optional)
- ...plus all native media element props

## Configuration

- Use `configurations.ts` to define new media kinds, sizes, or shapes.
- Theming via SCSS and global config.

## Best Practices

- Use the correct `kind` for each media type.
- Provide `alt` text for accessibility.
- See Storybook for usage and layout examples.
