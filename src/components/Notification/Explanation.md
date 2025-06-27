# Notification Component Group

A component for displaying notifications, alerts, and messages to users. Supports icons, actions, and multiple variants.

## Folder Structure & File Responsibilities

- `Notification.tsx`: Main notification component. Handles rendering, actions, and accessibility.
- `Notification.module.scss`: SCSS module for notification styles, icons, and variants.
- `configurations.ts`: Types and configuration objects for notification variants and custom configs.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local:**

```tsx
import { Notification } from 'src/components/Notification';
```

**NPM:**

```tsx
import { Notification } from 'ui-kit-modern';
```

## Supported Props

- `variant`: string (e.g. 'info', 'success', 'warning', 'error', etc.)
- `icon`: ReactNode (optional icon)
- `message`: string | ReactNode
- `actions`: NotificationAction[] (optional action buttons)
- `onClose`: () => void (optional close handler)
- ...plus all native `<div>` props

## Configuration

- Use `configurations.ts` to define new notification variants or actions.
- Theming via SCSS and global config.

## Best Practices

- Use the appropriate `variant` for the message type.
- Provide clear, actionable messages.
- See Storybook for notification examples and best practices.
