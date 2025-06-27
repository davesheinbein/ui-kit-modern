# Modal Component Group

A modern, accessible modal dialog system for overlays, popups, and dialogs. Supports multiple modal variants and custom content.

## Folder Structure & File Responsibilities

- `Modal.tsx`: Main modal component. Handles open/close state, focus management, and ARIA.
- `Modal.module.scss`: SCSS module for modal overlay, content, and animation styles.
- `configurations.ts`: Types and configuration objects for modal kinds and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Modal } from 'src/components/Modal';
```

**NPM:**

```tsx
import { Modal } from 'ui-kit-modern';
```

## Supported Props

- `kind`: ModalKind (variant, e.g. 'default', 'custom', etc.)
- `open`: boolean (modal open state)
- `onClose`: () => void (close handler)
- `children`: ReactNode (modal content)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new modal kinds or custom configs.
- Theming via SCSS and global config.

## Best Practices

- Always provide an `onClose` handler for accessibility.
- Use ARIA attributes for screen reader support.
- See Storybook for modal variants and usage patterns.
