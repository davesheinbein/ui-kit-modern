# Chat Component Group

Components for real-time chat, messaging, and conversation UIs. Supports user-to-user, group, and system messages with flexible layouts and customization.

## Folder Structure & File Responsibilities

- `Chat.tsx`: Main Chat component. Handles message rendering, input, and event handling.
- `Chat.module.scss`: SCSS module for chat styling and message bubbles.
- `configurations.ts`: Type definitions and configuration options for chat kinds, message types, and layouts.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

## Import & Usage

**Local Import:**

```tsx
import { Chat } from 'src/components/Chat';
```

**NPM Package:**

```tsx
import { Chat } from 'ui-kit-modern';
```

## Supported Props

| Prop              | Type     | Description                              | Default   |
| ----------------- | -------- | ---------------------------------------- | --------- |
| `messages`        | array    | List of message objects                  | []        |
| `currentUser`     | string   | ID or name of the current user           | —         |
| `onSend`          | function | Callback for sending a new message       | —         |
| `kind`            | string   | Chat variant (default, quick-chat, etc.) | 'default' |
| `title`           | string   | Chat window title                        | —         |
| `showCloseButton` | boolean  | Show/hide close button                   | false     |
| `className`       | string   | Additional CSS classes                   | —         |

## Configuration

- Use `configurations.ts` to define chat kinds, message types, and layouts.
- Customize styles in `Chat.module.scss` for branding and accessibility.

## Best Practices

- Use clear message types for user, system, and group messages.
- Provide feedback for message sending and errors.
- Keep chat UIs accessible and responsive.

---
