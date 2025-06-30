# Overlay Component Group

A flexible overlay component for modals, sidebars, dialogs, and more. Provides a dimmed background and click-to-close support.

## Usage

```tsx
import Overlay from 'src/components/Overlays/Overlay';

<Overlay open={isOpen} onClick={handleClose} />;
```

## Props

- `open` (boolean): Whether the overlay is visible.
- `onClick` (function): Called when the overlay is clicked.
- `zIndex` (number): Optional z-index (default 1000).
- `className` (string): Optional extra class names.
- `style` (object): Optional inline styles.
- `children` (ReactNode): Optional content inside the overlay.

## Best Practices

- Use for modal backgrounds, sidebar overlays, or blocking UI.
- Combine with modals, drawers, or custom dialogs.
- Style via SCSS or override with `className`/`style`.
