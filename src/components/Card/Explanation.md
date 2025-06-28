# Card Component Group

Reusable card components for displaying grouped content, actions, or media. Supports multiple card types, layouts, and interactive states for dashboards, lists, and previews.

---

## Folder Structure & File Responsibilities

- `Card.tsx`: Main Card component. Handles rendering, layout, and content slots.
- `Card.module.scss`: SCSS module for card styling and variants.
- `configurations.ts`: Type definitions and configuration options for card variants, sizes, and layouts.
- `index.ts`: Barrel export for the component and types.
- `Explanation.md`: This documentation file.

---

## Import & Usage

**Local Import:**

```tsx
import {
	Card,
	FriendCard,
	ProfileCard,
	NotificationCard,
} from 'src/components/Card';
```

**NPM Package:**

```tsx
import { Card } from 'ui-kit-modern';
```

---

## Card Props (All Kinds)

| Prop            | Type             | Description                                                        | Default         |
| --------------- | ---------------- | ------------------------------------------------------------------ | --------------- |
| `kind`          | string           | Card kind/layout (see below)                                       | 'default'       |
| `variant`       | string           | Card style (outlined, filled, elevated, etc.)                      | 'outlined'      |
| `size`          | string           | Card size (small, medium, large)                                   | 'medium'        |
| `padding`       | string           | Card padding (none, small, medium, large)                          | 'medium'        |
| `hover`         | boolean          | Enable hover effect                                                | false           |
| `clickable`     | boolean          | Enable clickable style                                             | false           |
| `shape`         | string           | Card shape: 'horizontal-rect', 'vertical-rect', 'square', 'circle' | 'vertical-rect' |
| `title`         | string/ReactNode | Card title                                                         | —               |
| `subtitle`      | string/ReactNode | Card subtitle                                                      | —               |
| `content`       | string/ReactNode | Card content/body                                                  | —               |
| `actions`       | React.ReactNode  | Action buttons or links                                            | —               |
| `onClick`       | function         | Click handler for interactive cards                                | —               |
| `className`     | string           | Additional CSS classes                                             | —               |
| `children`      | React.ReactNode  | Custom content (for `custom` kind or advanced use)                 | —               |
| ...HTMLDivProps |                  | All standard div props                                             |                 |

### Kind-Specific Props

| Kind            | Additional Props & Notes                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| `friend`        | `friend` (object: `{ id, username, online, ... }`), `onChallenge`, `onMessage`, `onRemove`, `unreadCount` |
| `profile`       | User info, stats, avatar                                                                                  |
| `notification`  | `notificationType` (info, warning, error, etc.), `actions`                                                |
| `stats`         | `statValue`, `statLabel`                                                                                  |
| `game`          | Game info, status, actions                                                                                |
| `achievement`   | Badge, title, description                                                                                 |
| `puzzle`        | Puzzle image, title, action                                                                               |
| `settings`      | Configuration panel                                                                                       |
| `leaderboard`   | List of top players                                                                                       |
| `chat-preview`  | Recent messages                                                                                           |
| `room-info`     | Room details, participants                                                                                |
| `match-summary` | Teams, score, summary                                                                                     |
| `user-status`   | Avatar, status                                                                                            |
| `custom`        | Fully flexible slot via `children`                                                                        |

---

## Card Kinds

| Kind            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `default`       | Basic card with standard styling.                             |
| `elevated`      | Card with a shadow for depth.                                 |
| `outlined`      | Card with a border, no shadow.                                |
| `filled`        | Card with a solid background.                                 |
| `friend`        | Shows user info, status, and actions for a friend.            |
| `game`          | Displays game details, status, and actions.                   |
| `profile`       | Shows user profile info, avatar, and stats.                   |
| `notification`  | Used for notification messages, often with icons and actions. |
| `stats`         | Highlights statistics or metrics.                             |
| `settings`      | Contains settings options or controls.                        |
| `achievement`   | Displays an achievement, badge, or reward.                    |
| `puzzle`        | Shows puzzle/game content and actions.                        |
| `leaderboard`   | Ranks users or teams, often with scores.                      |
| `chat-preview`  | Shows a preview of a chat or message.                         |
| `room-info`     | Displays information about a room or group.                   |
| `match-summary` | Summarizes a game or match result.                            |
| `user-status`   | Shows a user’s current status (online, offline, etc.).        |
| `custom`        | For any custom layout or content not covered above.           |

---

## Card Kind Descriptions

- **default**: Basic card with standard styling.
- **elevated**: Card with a shadow for depth.
- **outlined**: Card with a border, no shadow.
- **filled**: Card with a solid background.
- **friend**: Shows user info, status, and actions for a friend.
- **game**: Displays game details, status, and actions.
- **profile**: Shows user profile info, avatar, and stats.
- **notification**: Used for notification messages, often with icons and actions.
- **stats**: Highlights statistics or metrics.
- **settings**: Contains settings options or controls.
- **achievement**: Displays an achievement, badge, or reward.
- **puzzle**: Shows puzzle/game content and actions.
- **leaderboard**: Ranks users or teams, often with scores.
- **chat-preview**: Shows a preview of a chat or message.
- **room-info**: Displays information about a room or group.
- **match-summary**: Summarizes a game or match result.
- **user-status**: Shows a user’s current status (online, offline, etc.).
- **custom**: For any custom layout or content not covered above.

---

## Usage Patterns

### Generic Card

```tsx
<Card
	kind='default'
	title='Welcome'
	content='This is a generic card.'
/>
```

### Friend Card

```tsx
<FriendCard
  friend={{ id: '1', username: 'Jane', online: true }}
  onChallenge={() => ...}
  onMessage={() => ...}
  onRemove={() => ...}
  unreadCount={2}
/>
```

### Stats Card

```tsx
<StatsCard statValue={2840} statLabel='Points' />
```

### Custom Card

```tsx
<Card kind='custom'>
	<div>Custom layout here</div>
</Card>
```

---

## Best Practices

- Use cards to group related content or actions.
- Prefer `kind` for specialized layouts; use `variant` and `size` for style tweaks.
- Use interactive props (`hover`, `clickable`, `onClick`) for actionable cards.
- For advanced layouts, use the `custom` kind and pass children.
- All animation logic is centralized in `src/styles/Animations.scss`.
- Only add layout/visual styles for card kinds in `Card.module.scss`.

---

## Card Kinds Table

| Kind          | Layout/Use Case           | Visually Distinct? | Example Use             |
| ------------- | ------------------------- | ------------------ | ----------------------- |
| default       | Generic card              | No                 | Any grouping            |
| elevated      | Shadowed card             | No                 | Emphasis                |
| outlined      | Bordered card             | No                 | Separation              |
| filled        | Filled background         | No                 | Highlight               |
| friend        | Friend info/actions       | Yes                | Friends list            |
| profile       | User profile              | Yes                | Profile page            |
| notification  | Alert/message/achievement | Yes                | Notifications           |
| stats         | Key metric                | Yes                | Dashboard stats         |
| game          | Game info/status/actions  | Yes                | Game list               |
| achievement   | Badge/title/description   | Yes                | Achievements            |
| puzzle        | Puzzle/game/quiz          | Yes                | Puzzle dashboard        |
| settings      | Config panel              | Yes                | Settings page           |
| leaderboard   | Top players list          | Shared             | Leaderboard             |
| chat-preview  | Recent messages           | Shared             | Chat sidebar            |
| room-info     | Room details/participants | Shared             | Game room               |
| match-summary | Teams/score/summary       | Yes                | Match history           |
| user-status   | Avatar/status             | Yes                | User status list        |
| custom        | Fully flexible            | Yes                | Advanced custom layouts |

---

## Advanced: Creating Cards Programmatically

Use the `createCard(kind, props)` helper for dynamic card creation:

```tsx
import { createCard } from 'src/components/Card';

const card = createCard('friend', { friend: friendData, onChallenge: ... });
```

---

## Maintainer Notes

- All animation keyframes and reusable animation classes must be defined in `src/styles/Animations.scss`.
- Only add layout/visual styles for card kinds in `Card.module.scss`.
- Keep kind-specific logic in `Card.tsx` minimal and prop-driven.
- Update this documentation and stories when adding new card kinds or props.
