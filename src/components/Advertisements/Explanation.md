# Advertisements Component Group

Components for displaying ads, promotional banners, and sponsored content in your application. Designed for flexible placement and easy integration with ad networks or custom campaigns.

## Features

### Size Options

The component supports both general sizes and specific ad formats:

**General Sizes:**

- `fit-content` - Adapts to content size
- `small` - Compact format (max 300px wide)
- `medium` - Standard format (max 500px wide)
- `large` - Prominent format (max 728px wide)
- `fullscreen` - Full width format

**Google Display Ad Standard Sizes:**

- `leaderboard` - 728x90px (header banners)
- `banner` - 468x60px (classic banner)
- `half-banner` - 234x60px (compact banner)
- `button` - 125x125px (square button)
- `skyscraper` - 120x600px (sidebar)
- `wide-skyscraper` - 160x600px (wide sidebar)
- `rectangle` - 336x280px (inline content)
- `square` - 250x250px (perfect square)
- `small-rectangle` - 180x150px (compact rectangle)
- `mobile-banner` - 320x50px (mobile optimized)
- `large-mobile` - 320x100px (large mobile banner)

### Clean Styling

The component uses a clean, single-container approach with no redundant borders or shadows. Each ad type container has its own styling without nested redundancy.

**Box Shadow Approach:**

- Only the outermost `.advertisement` container applies a box shadow
- Individual ad type containers (Google, Meta, etc.) have no box shadow to prevent double-shadow effects
- Box shadow can be customized via the `shadow` prop or CSS variables (`--ad-shadow`, `--ad-shadow-hover`)
- Hover effects are applied at the container level for consistent behavior

## Folder Structure & File Responsibilities

- `Advertisements.tsx`: Main Advertisements component with full type safety and size support
- `Advertisements.module.scss`: SCSS module with clean styling and Google Display Ad size classes
- `configurations.ts`: Type definitions and configuration options for ad types and placements
- `index.ts`: Barrel export for the component and types
- `Explanation.md`: This documentation file

## Import & Usage

**Local Import:**

```tsx
import { Advertisements } from 'src/components/Advertisements';
```

**NPM Package:**

```tsx
import { Advertisements } from 'ui-kit-modern';
```

## Props

### Single Advertisement

| Prop          | Type      | Description                                 | Default    |
| ------------- | --------- | ------------------------------------------- | ---------- |
| `kind`        | AdKind    | Type of ad (banner, native, modal, etc.)    | 'banner'   |
| `size`        | AdSize    | Size including fit-content and Google sizes | 'medium'   |
| `variant`     | AdVariant | Visual style variant                        | 'standard' |
| `title`       | string    | Advertisement title                         | —          |
| `description` | string    | Advertisement description                   | —          |
| `ctaText`     | string    | Call-to-action button text                  | —          |
| `ctaUrl`      | string    | URL for click actions                       | —          |
| `imageUrl`    | string    | Image URL for the advertisement             | —          |
| `sponsored`   | boolean   | Show sponsored label                        | false      |
| `closable`    | boolean   | Allow closing the advertisement             | false      |
| `clickable`   | boolean   | Make the advertisement clickable            | true       |

### Multiple Advertisements

```tsx
<Advertisements
	count='many'
	layout='grid'
	ads={[
		{
			kind: 'banner',
			size: 'leaderboard',
			content: {
				title: 'Google Display Ad',
				description: 'Standard leaderboard format',
				ctaText: 'Learn More',
			},
		},
		{
			kind: 'native',
			size: 'fit-content',
			content: {
				title: 'Native Ad',
				description: 'Adapts to content',
				ctaText: 'Read More',
			},
		},
	]}
/>
```

## Size Examples

```tsx
// Fit content - adapts to content size
<Advertisements kind="banner" size="fit-content" title="Flexible Ad" />

// Google Display Ad formats
<Advertisements kind="banner" size="leaderboard" title="Header Banner" />
<Advertisements kind="banner" size="skyscraper" title="Sidebar Ad" />
<Advertisements kind="banner" size="rectangle" title="Inline Ad" />
<Advertisements kind="banner" size="mobile-banner" title="Mobile Ad" />

// General sizes
<Advertisements kind="banner" size="small" title="Compact Ad" />
<Advertisements kind="banner" size="large" title="Prominent Ad" />
```

## Best Practices

- Use `fit-content` for ads that should adapt to their content
- Use Google Display Ad standard sizes for compatibility with ad networks
- Leverage clean styling with no redundant borders or shadows
- Use appropriate sizes for different placements (leaderboard for headers, skyscraper for sidebars)
- Test mobile responsiveness with `mobile-banner` and `large-mobile` sizes

---
