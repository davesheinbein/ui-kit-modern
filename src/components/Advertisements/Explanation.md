# Advertisements Component System (`src/components/Advertisements`)

This folder now implements a **single, Advertisements component**. You only need to import `Advertisements` and provide props to render any ad (banner, interstitial, native card, sticky bar, floating widget, toast, modal, etc.), as a single or multi-ad layout. All configuration, state, and rendering logic is handled internally.

## Key Concepts

- **Advertisements.tsx**: The only component you need to import. Accepts all props and renders the correct ad(s) and layout based on configuration. Handles all ad logic, analytics, provider integration, and layout.
- **configurations.ts**: Centralizes all configuration types, ad kinds, and default settings. Defines the available ad types, variants, sizes, and provider support.
- **Advertisements.module.scss**: All styles for ad components, including layouts, variants, and responsive design.
- **index.ts**: Exports only `Advertisements` and types for easy import elsewhere.

## How It Works

- **Single entry point**: Just use `<Advertisements {...props} />` for any ad or ad layout. No need for factories, presets, or helpers.
- **Configuration-driven**: Each ad type (banner, interstitial, native card, sticky bar, etc.) is defined by a `kind` and a configuration object. The component uses these to render the correct UI and manage state.
- **Ultra-DRY**: All ad UIs share the same core logic and styles, with only the configuration and content changing per kind.
- **Provider & Analytics Support**: Built-in support for multiple ad providers (AdSense, Adsterra, custom, etc.) and analytics hooks for impressions, clicks, and more.
- **Responsive & Smart Layouts**: Easily switch between stack, carousel, grid, and single layouts, with responsive breakpoints and auto-rotation.

## Example Usage

```tsx
import { Advertisements } from 'src/components/Advertisements';

// Render a single banner ad
<Advertisements
	kind='banner'
	content={{ title: 'Ad Title', ctaText: 'Click Here' }}
/>;

// Render a multi-ad layout (stack, grid, carousel, etc.)
<Advertisements
	count='many'
	adPool={[
		{ kind: 'banner', content: { title: 'Header Ad' } },
		{
			kind: 'native-card',
			content: { title: 'In-Content Ad' },
		},
		{
			kind: 'sticky-bar',
			content: { title: 'Sticky Bar' },
		},
	]}
	layout='grid'
	maxAds={3}
/>;
```

## Advanced Programmatic Usage

For advanced scenarios (dynamic ad generation, validation, or custom ad pools), use the static helpers on the Advertisements component:

```tsx
// Create a single ad programmatically
const adProps = Advertisements.Factory.create(
	'native-card',
	{
		title: user.isPremium ? 'Premium Content' : 'Join Now',
		ctaText: 'Learn More',
	}
);

// Validate ad content before rendering
if (Advertisements.Utils.validateContent(adProps.content)) {
	<Advertisements {...adProps} />;
}

// Build a dynamic ad pool
const adPool = getUserAds().map((ad) =>
	Advertisements.Factory.create(ad.kind, ad.content)
);
<Advertisements
	count='many'
	adPool={adPool}
	layout='stack'
/>;
```

**For most use cases, just use the `kind` prop. Advanced helpers are only needed for dynamic, programmatic scenarios.**
