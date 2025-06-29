import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../../components/Wrappers';
import { Button } from '../../components/Button';
import { Advertisements } from '../../components/Advertisements/Advertisements';
import {
	AdContent,
	AdAnalyticsEvent,
	AdAnalyticsHooks,
	AdProvider,
	AdProviderType,
	AdConfiguration,
	createAdSenseProvider,
	createAdsterraProvider,
	createCustomProvider,
} from '../../components/Advertisements';
import { commonDecorators } from '../config/decorators';

const meta: Meta = {
	title: 'Advertisements/Advertisements',
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Advertisement System

A modern, advertisement component system built with TypeScript and React. This system provides a DRY (Don't Repeat Yourself) approach to creating and managing advertisements across different platforms and use cases.

## Features

- **10+ Advertisement Types**: Banner, Interstitial, Rewarded Modal, Native Card, Sticky Bar, Floating Widget, Toast Notification, Exit Intent Modal, In-Game Billboard, and flexible Ad Container
- **Unified API**: Just use the <Advertisements /> component with the kind prop for any ad type
- **Analytics Integration**: Comprehensive tracking with hooks for impressions, clicks, conversions, and errors
- **Multi-Provider Support**: Integration with AdSense, Adsterra, custom providers with fallback mechanisms
- **Responsive Design**: Automatic adaptation to different screen sizes with configurable breakpoints
- **Performance Optimized**: Lazy loading, efficient rendering, and minimal re-renders
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **TypeScript**: Full type safety with comprehensive interfaces and type definitions

## Quick Start

\`\`\`tsx
import { Advertisements } from 'src/components/Advertisements';

// Render a single banner ad
<Advertisements kind="banner" content={{ title: 'Special Offer!', ctaText: 'Learn More' }} />;

// Render a multi-ad layout (stack, grid, carousel, etc.)
<Advertisements
  count="many"
  adPool={[
    { kind: 'banner', content: { title: 'Header Ad' } },
    { kind: 'native-card', content: { title: 'In-Content Ad' } },
    { kind: 'sticky-bar', content: { title: 'Sticky Bar' } },
  ]}
  layout="grid"
  maxAds={3}
/>;
\`\`\`

## Advanced Usage

For advanced, programmatic scenarios (dynamic ad pools, validation, etc.), use the static helpers:

\`\`\`tsx
const adProps = Advertisements..create('native-card', { title: 'Dynamic Ad', ctaText: 'Go' });
<Advertisements {...adProps} />;
\`\`\`

But for most use cases, just use the kind prop.

## Advertisement Types

| Type | Use Case | Key Features |
|------|----------|--------------|
| **Banner** | Header/footer ads | Responsive, multiple sizes, customizable |
| **Interstitial** | Full-screen overlays | Modal-style, auto-close, skip functionality |
| **Rewarded Modal** | Game/app rewards | Reward tracking, completion callbacks |
| **Native Card** | In-content ads | Seamless integration, sponsored labels |
| **Sticky Bar** | Persistent messages | Fixed positioning, dismissible |
| **Floating Widget** | Help/support | Corner positioning, auto-hide |
| **Toast Notification** | Temporary alerts | Auto-dismiss, multiple positions |
| **Exit Intent Modal** | Retention campaigns | Exit detection, special offers |
| **In-Game Billboard** | Gaming environments | Interactive, themed styling |
| **Ad Container** | Multiple ad management | Rotation, responsive layouts |
				`,
			},
		},
	},
	decorators: commonDecorators,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ===== SAMPLE DATA =====

// Basic sample content
const sampleBannerContent: AdContent = {
	id: 'banner-1',
	title: 'Summer Sale - 50% Off!',
	description:
		"Don't miss our biggest sale of the year. Shop now and save big on all your favorite items.",
	imageUrl:
		'https://via.placeholder.com/728x90/007bff/ffffff?text=Banner+Ad',
	ctaText: 'Shop Now',
	actionUrl: 'https://example.com/sale',
	altText: 'Summer sale banner advertisement',
};

const sampleNativeContent: AdContent = {
	id: 'native-1',
	title: 'Discover the Future of Technology',
	description:
		'Learn about the latest innovations that are changing the world. Read our comprehensive guide.',
	imageUrl:
		'https://via.placeholder.com/300x200/28a745/ffffff?text=Native+Ad',
	ctaText: 'Learn More',
	actionUrl: 'https://example.com/tech',
	altText: 'Technology article promotion',
	sponsored: true,
};

const sampleRewardContent: AdContent = {
	id: 'reward-1',
	title: 'Watch and Earn Coins!',
	description:
		'Complete this short video to earn 100 coins that you can use in our store.',
	imageUrl:
		'https://via.placeholder.com/400x300/ffc107/000000?text=Reward+Video',
	ctaText: 'Watch Video',
	actionUrl: 'https://example.com/video',
	altText: 'Rewarded video advertisement',
	rewardData: {
		type: 'coins',
		amount: 100,
		description: '100 Premium Coins',
	},
};

// Sample ad pool for containers
const sampleAdPool = [
	{
		kind: 'banner' as const,
		content: {
			id: 'banner-1',
			title: 'Summer Sale - 50% Off!',
			description:
				"Don't miss our biggest sale of the year.",
			imageUrl:
				'https://via.placeholder.com/728x90/007bff/ffffff?text=Banner+Ad+1',
			ctaText: 'Shop Now',
			actionUrl: 'https://example.com/sale',
		} as AdContent,
		weight: 2,
	},
	{
		kind: 'native-card' as const,
		content: {
			id: 'native-1',
			title: 'Discover New Technology',
			description:
				'Learn about the latest innovations changing the world.',
			imageUrl:
				'https://via.placeholder.com/300x200/28a745/ffffff?text=Native+Ad+1',
			ctaText: 'Learn More',
			actionUrl: 'https://example.com/tech',
			sponsored: true,
		} as AdContent,
		weight: 1,
	},
	{
		kind: 'banner' as const,
		content: {
			id: 'banner-2',
			title: 'Premium Membership',
			description:
				'Upgrade to premium for exclusive features.',
			imageUrl:
				'https://via.placeholder.com/728x90/dc3545/ffffff?text=Banner+Ad+2',
			ctaText: 'Upgrade',
			actionUrl: 'https://example.com/premium',
		} as AdContent,
		weight: 1,
	},
	{
		kind: 'native-card' as const,
		content: {
			id: 'native-2',
			title: 'Health & Wellness Tips',
			description:
				'Improve your daily routine with these expert tips.',
			imageUrl:
				'https://via.placeholder.com/300x200/17a2b8/ffffff?text=Native+Ad+2',
			ctaText: 'Read More',
			actionUrl: 'https://example.com/health',
			sponsored: true,
		} as AdContent,
		weight: 1,
	},
	{
		kind: 'floating-widget' as const,
		content: {
			id: 'widget-1',
			title: 'Need Help?',
			imageUrl:
				'https://via.placeholder.com/200x150/ffc107/000000?text=Help+Widget',
			ctaText: 'Chat Now',
			actionUrl: 'https://example.com/chat',
		} as AdContent,
		weight: 1,
	},
];

// Sample analytics hooks for demonstrations
const createAnalyticsHooks = (
	providerName = 'Demo'
): AdAnalyticsHooks => ({
	onImpression: (event) => {
		console.log(`📊 [${providerName}] Impression:`, event);
		// In real app, this would send to analytics service
	},
	onClick: (event) => {
		console.log(`🖱️ [${providerName}] Click:`, event);
		alert(
			`Click tracked for ad: ${event.adId} from ${providerName}`
		);
	},
	onDismiss: (event) => {
		console.log(`❌ [${providerName}] Dismiss:`, event);
	},
	onConversion: (event) => {
		console.log(`💰 [${providerName}] Conversion:`, event);
		const value = event.metadata?.value || 'unknown';
		alert(
			`Conversion! Value: $${value} for ad: ${event.adId}`
		);
	},
	onError: (event) => {
		console.error(`🚨 [${providerName}] Error:`, event);
	},
});

// Sample providers for demonstrations
const createSampleProviders = (): AdProvider[] => [
	createAdSenseProvider({
		publisherId: 'pub-1234567890123456',
		adUnitId: '/12345/example-banner',
		customConfig: {
			autoAds: true,
			responsive: true,
		},
	}),
	createAdsterraProvider({
		customConfig: {
			zoneId: '4578123',
			format: 'banner',
			refreshRate: 30000,
		},
	}),
	createCustomProvider({
		type: 'custom',
		name: 'Custom Sponsor',
		customConfig: {
			endpoint: 'https://api.example.com/ads',
			apiKey: 'demo-key-123',
			targeting: true,
			frequency: 'high',
		},
		loadAdFunction: async (adSlot: HTMLElement) => {
			// Mock custom ad loading logic
			return {
				id: `custom-${Date.now()}`,
				title: 'Custom Sponsor Ad',
				description: 'Premium partnership content',
				imageUrl:
					'https://via.placeholder.com/728x90/28a745/ffffff?text=Custom+Sponsor',
				ctaText: 'Visit Site',
				actionUrl: 'https://example.com/sponsor',
				sponsored: true,
			};
		},
	}),
];

// Enhanced ad pool with provider-specific content
const enhancedAdPool = [
	{
		kind: 'banner',
		content: {
			id: 'adsense-banner-1',
			title: 'AdSense Banner Ad',
			description: 'Powered by Google AdSense',
			imageUrl:
				'https://via.placeholder.com/728x90/4285f4/ffffff?text=AdSense+Banner',
			ctaText: 'Learn More',
			actionUrl: 'https://example.com/adsense',
			provider: 'adsense' as AdProviderType,
		} as AdContent,
		weight: 2,
	},
	{
		kind: 'native-card',
		content: {
			id: 'adsterra-native-1',
			title: 'Adsterra Native Ad',
			description: 'High-performing native advertisement',
			imageUrl:
				'https://via.placeholder.com/300x200/ff6b35/ffffff?text=Adsterra+Native',
			ctaText: 'Discover',
			actionUrl: 'https://example.com/adsterra',
			sponsored: true,
			provider: 'adsterra' as AdProviderType,
		} as AdContent,
		weight: 1,
	},
	{
		kind: 'banner',
		content: {
			id: 'custom-sponsor-1',
			title: 'Premium Sponsor',
			description: 'Exclusive partnership content',
			imageUrl:
				'https://via.placeholder.com/728x90/28a745/ffffff?text=Custom+Sponsor',
			ctaText: 'Visit Site',
			actionUrl: 'https://example.com/sponsor',
			provider: 'custom' as AdProviderType,
		} as AdContent,
		weight: 3,
	},
];

// ===== OVERVIEW & GETTING STARTED =====

export const SystemOverview: Story = {
	render: () => (
		<Wrapper
			p={40}
			maxW={1200}
			center
			direction='column'
			gap={4}
		>
			<header
				style={{ textAlign: 'center', marginBottom: 60 }}
			>
				<h1
					style={{
						fontSize: '48px',
						margin: '0 0 20px',
						background:
							'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					Advertisement System
				</h1>
				<p style={{ fontSize: 20, color: '#666' }}>
					A comprehensive, type-safe advertisement component
					library for modern React applications
				</p>
			</header>

			<Wrapper
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '30px',
					marginBottom: '60px',
				}}
			>
				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#007bff',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						🎯 Multiple Ad Types
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						10+ advertisement types including banners,
						interstitials, native cards, floating widgets,
						and more.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Banner & Native Ads</li>
						<li>Modal & Interstitial</li>
						<li>Floating Widgets</li>
						<li>Game Billboards</li>
					</ul>
				</Wrapper>

				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#28a745',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						🏭 Pattern
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						DRY approach with methods and shorthand creation
						for consistent ad generation.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Advertisement</li>
						<li>Shorthand A class</li>
						<li>Preset configurations</li>
						<li>Group creation</li>
					</ul>
				</Wrapper>

				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#dc3545',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						📊 Analytics Integration
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						Comprehensive tracking with hooks for
						impressions, clicks, conversions, and errors.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Impression tracking</li>
						<li>Click analytics</li>
						<li>Conversion metrics</li>
						<li>Error monitoring</li>
					</ul>
				</Wrapper>

				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#6f42c1',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						🔄 Multi-Provider Support
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						Integration with multiple ad providers including
						AdSense, Adsterra, and custom solutions.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Google AdSense</li>
						<li>Adsterra Network</li>
						<li>Custom providers</li>
						<li>Automatic failover</li>
					</ul>
				</Wrapper>

				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#fd7e14',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						📱 Responsive Design
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						Automatic adaptation to different screen sizes
						with configurable breakpoints.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Mobile-first design</li>
						<li>Flexible layouts</li>
						<li>Breakpoint configuration</li>
						<li>Container adaptation</li>
					</ul>
				</Wrapper>

				<Wrapper
					style={{
						background: 'white',
						padding: '30px',
						borderRadius: '12px',
						boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						border: '1px solid #e9ecef',
					}}
				>
					<h3
						style={{
							color: '#17a2b8',
							marginTop: 0,
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
						}}
					>
						⚡ Performance Optimized
					</h3>
					<p style={{ color: '#666', lineHeight: 1.6 }}>
						Efficient rendering with lazy loading, minimal
						re-renders, and TypeScript type safety.
					</p>
					<ul
						style={{ color: '#666', paddingLeft: '20px' }}
					>
						<li>Lazy loading</li>
						<li>Optimized rendering</li>
						<li>TypeScript support</li>
						<li>Accessibility features</li>
					</ul>
				</Wrapper>
			</Wrapper>

			<section
				style={{
					textAlign: 'center',
					background:
						'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
					padding: '40px',
					borderRadius: '12px',
					color: 'white',
				}}
			>
				<h2 style={{ margin: '0 0 20px' }}>
					Explore the Components
				</h2>
				<p
					style={{
						margin: '0 0 30px',
						fontSize: '18px',
						opacity: 0.9,
					}}
				>
					Browse our comprehensive examples and
					documentation to see the system in action.
				</p>
				<Wrapper
					style={{
						display: 'flex',
						gap: '15px',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Wrapper
						style={{
							padding: '8px 16px',
							background: 'rgba(255,255,255,0.2)',
							borderRadius: '20px',
							fontSize: '14px',
						}}
					>
						Individual Components
					</Wrapper>
					<Wrapper
						style={{
							padding: '8px 16px',
							background: 'rgba(255,255,255,0.2)',
							borderRadius: '20px',
							fontSize: '14px',
						}}
					>
						Patterns
					</Wrapper>
					<Wrapper
						style={{
							padding: '8px 16px',
							background: 'rgba(255,255,255,0.2)',
							borderRadius: '20px',
							fontSize: '14px',
						}}
					>
						Analytics & Providers
					</Wrapper>
					<Wrapper
						style={{
							padding: '8px 16px',
							background: 'rgba(255,255,255,0.2)',
							borderRadius: '20px',
							fontSize: '14px',
						}}
					>
						Complete Examples
					</Wrapper>
				</Wrapper>
			</section>
		</Wrapper>
	),
};

// ===== ADVERTISEMENT COMPONENTS =====

export const BannerAd: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px' }}>
			<h2>Banner Advertisement</h2>
			<Advertisements
				kind='banner'
				content={sampleBannerContent}
				animationEnabled={true}
				trackingEnabled={true}
			/>
		</Wrapper>
	),
};

export const InterstitialAd: Story = {
	render: () => {
		const [isVisible, setIsVisible] = useState(true);

		return (
			<Wrapper style={{ padding: '20px' }}>
				<h2>Interstitial Advertisement</h2>
				<Button
					kind='primary'
					onClick={() => setIsVisible(true)}
					style={{
						padding: '10px 20px',
						background: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '5px',
						cursor: 'pointer',
						marginBottom: '20px',
					}}
				>
					Show Interstitial
				</Button>

				<Advertisements
					kind='interstitial'
					content={{
						id: 'interstitial-1',
						title: 'Special Offer Just for You!',
						description:
							"Limited time offer - get premium access for 50% off. This deal won't last long!",
						imageUrl:
							'https://via.placeholder.com/500x400/dc3545/ffffff?text=Interstitial+Ad',
						ctaText: 'Get Premium',
						actionUrl: 'https://example.com/premium',
						altText: 'Premium subscription offer',
					}}
					isVisible={isVisible}
					showBackdrop={true}
					backdropOpacity={0.8}
					animationEnabled={true}
					onAdClose={() => setIsVisible(false)}
				/>
			</Wrapper>
		);
	},
};

export const RewardedModal: Story = {
	render: () => {
		const [isVisible, setIsVisible] = useState(false);
		const [coins, setCoins] = useState(250);

		return (
			<Wrapper style={{ padding: '20px' }}>
				<h2>Rewarded Modal Advertisement</h2>
				<p>
					Current coins: <strong>{coins}</strong>
				</p>
				<Button
					kind='primary'
					onClick={() => setIsVisible(true)}
					style={{
						padding: '10px 20px',
						background: '#ffc107',
						color: 'black',
						border: 'none',
						borderRadius: '5px',
						cursor: 'pointer',
						marginBottom: '20px',
					}}
				>
					Watch Rewarded Ad
				</Button>

				<Advertisements
					kind='rewarded-modal'
					content={sampleRewardContent}
					isVisible={isVisible}
					showBackdrop={true}
					backdropOpacity={0.9}
					animationEnabled={true}
					onAdClose={() => setIsVisible(false)}
					onRewardEarned={(adId, reward) => {
						setCoins(
							(prev) => prev + (reward?.amount || 0)
						);
						alert(
							`Earned ${reward?.amount} ${reward?.type}!`
						);
					}}
				/>
			</Wrapper>
		);
	},
};

// ===== ADVANCED PROGRAMMATIC USAGE EXAMPLE =====

export const ProgrammaticAd: Story = {
	render: () => {
		const adProps = Advertisements.create('native-card', {
			title: 'Dynamic Ad (Programmatic)',
			ctaText: 'Go',
		});
		return <Advertisements {...adProps} />;
	},
};

// ===== AD CONTAINER EXAMPLES =====

export const StackLayout: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px' }}>
			<h2>Ad Container - Stack Layout</h2>
			<Advertisements
				count='many'
				layout='stack'
				maxAds={3}
				adPool={sampleAdPool}
				spacing={16}
				allowedAdTypes={['banner', 'native-card']}
			/>
		</Wrapper>
	),
};

export const CarouselLayout: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px' }}>
			<h2>Ad Container - Carousel Layout</h2>
			<Advertisements
				count='many'
				layout='carousel'
				maxAds={3}
				adPool={sampleAdPool}
				autoRotate={true}
				rotationInterval={5000}
				allowedAdTypes={['banner', 'native-card']}
				spacing={16}
			/>
		</Wrapper>
	),
};

export const GridLayout: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px' }}>
			<h2>Ad Container - Grid Layout</h2>
			<Advertisements
				count='many'
				layout='grid'
				maxAds={4}
				adPool={sampleAdPool}
				spacing={20}
				allowedAdTypes={['native-card']}
			/>
		</Wrapper>
	),
};

export const ResponsiveContainer: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px' }}>
			<h2>Responsive Ad Container</h2>{' '}
			<p>
				This container adapts its layout and number of ads
				based on screen size. Try resizing the viewport to
				see the changes.
			</p>
			<Advertisements
				count='many'
				layout='stack'
				maxAds={3}
				adPool={sampleAdPool}
				responsive={true}
				breakpoints={{
					mobile: { maxAds: 1, layout: 'single' },
					tablet: { maxAds: 2, layout: 'stack' },
					desktop: { maxAds: 3, layout: 'grid' },
				}}
				spacing={16}
				allowedAdTypes={['banner', 'native-card']}
			/>
		</Wrapper>
	),
};

// ===== AD CONTAINER SPECIFIC STORIES =====
// These stories were moved from Advertisement.stories.tsx

export const WithAutoRotation: Story = {
	args: {
		adPool: [
			{
				kind: 'banner',
				content: {
					title: 'Rotating Banner 1',
					description: 'First rotating advertisement',
					ctaText: 'Click Me',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/728x90/007bff/ffffff?text=Banner+1',
				},
				weight: 1,
			},
			{
				kind: 'banner',
				content: {
					title: 'Rotating Banner 2',
					description: 'Second rotating advertisement',
					ctaText: 'Click Me',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/728x90/28a745/ffffff?text=Banner+2',
				},
				weight: 1,
			},
			{
				kind: 'native-card',
				content: {
					title: 'Native Card Ad',
					description: 'Native card in rotation',
					ctaText: 'Learn More',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Native',
				},
				weight: 1,
			},
		],
	},
	render: (args) => (
		<Advertisements
			count='many'
			layout='carousel'
			maxAds={3}
			adPool={args.adPool}
			autoRotate={true}
			rotationInterval={3000}
			spacing={16}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Ad container that automatically rotates through advertisements every 3 seconds.',
			},
		},
	},
};

export const WithEventHandlers: Story = {
	args: {
		adPool: [
			{
				kind: 'banner',
				content: {
					title: 'Interactive Banner',
					description: 'Click to see event handling',
					ctaText: 'Click Me',
					actionUrl: 'https://example.com',
					imageUrl:
						'https://via.placeholder.com/728x90/007bff/ffffff?text=Interactive+Banner',
				},
				weight: 1,
			},
			{
				kind: 'native-card',
				content: {
					title: 'Interactive Native Card',
					description: 'Watch console for events',
					ctaText: 'Interact',
					actionUrl: 'https://example.com',
					imageUrl:
						'https://via.placeholder.com/300x200/28a745/ffffff?text=Interactive+Card',
				},
				weight: 1,
			},
		],
	},
	render: (args) => (
		<Advertisements
			layout='stack'
			maxAds={2}
			adPool={args.adPool}
			onAdLoad={(adId: string, kind: string) => {
				console.log(`Ad loaded: ${adId} (${kind})`);
			}}
			onAdClick={(adId: string, url: string) => {
				alert(`Ad clicked! ID: ${adId}, URL: ${url}`);
			}}
			onAdImpression={(adId: string) => {
				console.log(`Ad impression: ${adId}`);
			}}
			onAdError={(adId: string, error: string) => {
				console.error(`Ad error: ${adId} - ${error}`);
			}}
			spacing={16}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Click on advertisements to see event handling in action. Check the browser console for impression logs.',
			},
		},
	},
};

export const WithFallbackContent: Story = {
	args: {
		adPool: [], // Empty pool to trigger fallback
	},
	render: (args) => (
		<Advertisements
			layout='stack'
			maxAds={3}
			adPool={args.adPool}
			fallbackContent={
				<Wrapper
					style={{
						padding: '40px',
						textAlign: 'center',
						border: '2px dashed #ccc',
						borderRadius: '8px',
						color: '#666',
						background: '#f9f9f9',
					}}
				>
					<h3>No Advertisements Available</h3>
					<p>Please check back later for new content.</p>
				</Wrapper>
			}
			showFallbackOnError={true}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Shows fallback content when no advertisements are available in the pool.',
			},
		},
	},
};

export const FilteredAdTypes: Story = {
	args: {
		adPool: [
			{
				kind: 'banner',
				content: {
					title: 'Banner (Filtered Out)',
					description: 'This banner will be filtered out',
					ctaText: 'Click Me',
					actionUrl: '#',
				},
				weight: 1,
			},
			{
				kind: 'native-card',
				content: {
					title: 'Native Card (Shown)',
					description: 'Only native cards are allowed',
					ctaText: 'Learn More',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Native+Card',
				},
				weight: 1,
			},
			{
				kind: 'native-card',
				content: {
					title: 'Another Native Card',
					description: 'This will also be shown',
					ctaText: 'Discover',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/300x200/dc3545/ffffff?text=Native+Card+2',
				},
				weight: 1,
			},
		],
	},
	render: (args) => (
		<Advertisements
			layout='stack'
			maxAds={5}
			adPool={args.adPool}
			allowedAdTypes={['native-card']} // Only allow native cards
			spacing={16}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'This container only shows native card advertisements, filtering out other types from the ad pool.',
			},
		},
	},
};

export const WeightedSelection: Story = {
	args: {
		adPool: [
			{
				kind: 'banner',
				content: {
					title: 'High Priority Ad (Weight: 5)',
					description:
						'This ad has higher weight and should appear more often.',
					ctaText: 'Click Me',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/728x90/dc3545/ffffff?text=High+Priority',
				},
				weight: 5, // Higher weight
			},
			{
				kind: 'banner',
				content: {
					title: 'Low Priority Ad (Weight: 1)',
					description:
						'This ad has lower weight and should appear less often.',
					ctaText: 'Click Me',
					actionUrl: '#',
					imageUrl:
						'https://via.placeholder.com/728x90/28a745/ffffff?text=Low+Priority',
				},
				weight: 1, // Lower weight
			},
		],
	},
	render: (args) => (
		<Advertisements
			layout='single'
			maxAds={1}
			adPool={args.adPool}
			autoRotate={true}
			rotationInterval={2000}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'The red "High Priority" ad should appear more frequently due to its higher weight (5 vs 1).',
			},
		},
	},
};

// ===== ENHANCED FEATURES STORIES =====
// These stories were moved from EnhancedFeatures.stories.tsx

export const CompleteIntegrationDemo: Story = {
	render: () => {
		const [metrics, setMetrics] = useState({
			impressions: 0,
			clicks: 0,
			errors: 0,
			conversions: 0,
		});

		const analyticsHooks = {
			onImpression: (event: AdAnalyticsEvent) => {
				setMetrics((prev) => ({
					...prev,
					impressions: prev.impressions + 1,
				}));
			},
			onClick: (event: AdAnalyticsEvent) => {
				setMetrics((prev) => ({
					...prev,
					clicks: prev.clicks + 1,
				}));
			},
			onError: (event: AdAnalyticsEvent) => {
				setMetrics((prev) => ({
					...prev,
					errors: prev.errors + 1,
				}));
			},
			onConversion: (event: AdAnalyticsEvent) => {
				setMetrics((prev) => ({
					...prev,
					conversions: prev.conversions + 1,
				}));
			},
		};

		const providers = [
			createCustomProvider({
				type: 'custom',
				name: 'Premium Sponsor',
				revShare: 70,
				loadAdFunction: async (adSlot: HTMLElement) => {
					await new Promise((resolve) =>
						setTimeout(resolve, 500)
					);
					return {
						id: 'premium-' + Date.now(),
						title: 'Premium Advertisement',
						sponsored: true,
					};
				},
			}),
		];

		return (
			<Wrapper style={{ padding: '20px' }}>
				<h2>Complete Integration Demo</h2>
				<p>
					Real-world example with analytics, providers, and
					performance tracking.
				</p>

				{/* Metrics Dashboard */}
				<Wrapper
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						gap: '10px',
						marginBottom: '20px',
					}}
				>
					{Object.entries(metrics).map(([key, value]) => (
						<Wrapper
							key={key}
							style={{
								background: '#007bff',
								color: 'white',
								padding: '15px',
								borderRadius: '8px',
								textAlign: 'center',
							}}
						>
							<Wrapper
								style={{
									fontSize: '24px',
									fontWeight: 'bold',
								}}
							>
								{value}
							</Wrapper>
							<Wrapper
								style={{
									fontSize: '12px',
									textTransform: 'capitalize',
								}}
							>
								{key}
							</Wrapper>
						</Wrapper>
					))}
				</Wrapper>

				{/* Website Header Ad */}
				<Wrapper style={{ marginBottom: '20px' }}>
					<h3>Header Banner</h3>
					<Advertisements
						kind='banner'
						content={{
							title: 'Special Offer - 50% Off!',
							description:
								'Limited time offer on all products',
							ctaText: 'Shop Now',
							actionUrl: 'https://example.com/sale',
							imageUrl:
								'https://via.placeholder.com/728x90/007bff/ffffff?text=Header+Banner',
						}}
						providers={providers}
						analyticsHooks={analyticsHooks}
						trackingEnabled={true}
					/>
				</Wrapper>

				{/* Content Area with Native Ads */}
				<Wrapper
					style={{
						display: 'grid',
						gridTemplateColumns: '2fr 1fr',
						gap: '20px',
					}}
				>
					<Wrapper>
						<h3>Main Content</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>

						{/* Native Ad in content */}
						<Advertisements
							kind='native-card'
							content={{
								title: 'Sponsored: Learn Web Development',
								description:
									'Master modern web development with our comprehensive course',
								ctaText: 'Start Learning',
								actionUrl: 'https://example.com/course',
								imageUrl:
									'https://via.placeholder.com/300x200/28a745/ffffff?text=Course+Ad',
								sponsored: true,
							}}
							providers={providers}
							analyticsHooks={analyticsHooks}
							trackingEnabled={true}
						/>

						<p>
							Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</p>
					</Wrapper>

					<Wrapper>
						<h3>Sidebar</h3>

						{/* Sidebar Ad Container */}
						<Advertisements
							adPool={[
								{
									kind: 'banner',
									content: {
										title: 'Sidebar Promotion',
										ctaText: 'Check it out',
										actionUrl: 'https://example.com',
									},
									weight: 1,
								},
								{
									kind: 'native-card',
									content: {
										title: 'Featured Product',
										description:
											'Amazing new product just launched',
										ctaText: 'Buy Now',
										actionUrl:
											'https://example.com/product',
									},
									weight: 1,
								},
							]}
							layout='stack'
							maxAds={1}
							providers={providers}
							analyticsHooks={analyticsHooks}
							trackingEnabled={true}
						/>
					</Wrapper>
				</Wrapper>

				{/* Floating Widget */}
				<Advertisements
					kind='floating-widget'
					content={{
						title: 'Newsletter',
						description: 'Subscribe for updates',
						ctaText: 'Subscribe',
						actionUrl: 'https://example.com/newsletter',
					}}
					providers={providers}
					analyticsHooks={analyticsHooks}
					style={{
						position: 'fixed',
						bottom: '20px',
						right: '20px',
						zIndex: 1000,
					}}
					autoHide={true}
					hideDelay={15000}
				/>
			</Wrapper>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Complete real-world example showing a website layout with header banner, sidebar ads, native content ads, and floating widgets with comprehensive analytics tracking.',
			},
		},
	},
};

export const ProviderConfigurationGuide: Story = {
	render: () => (
		<Wrapper style={{ padding: '20px', maxWidth: '800px' }}>
			<h2>Provider Configuration Guide</h2>

			<Wrapper style={{ marginBottom: '30px' }}>
				<h3>1. Google AdSense Setup</h3>
				<pre
					style={{
						background: '#f5f5f5',
						padding: '15px',
						borderRadius: '8px',
						overflow: 'auto',
					}}
				>
					{`import { createAdSenseProvider } from './advertisements';

const adsenseProvider = createAdSenseProvider({
  type: 'adsense',
  publisherId: 'ca-pub-1234567890123456',
  adUnitId: '1234567890',
  refreshRate: 30000,
});

<Advertisements
  kind="banner-ad"
  providers={[adsenseProvider]}
  primaryProvider="adsense"
/>`}
				</pre>
			</Wrapper>

			<Wrapper style={{ marginBottom: '30px' }}>
				<h3>2. Custom Provider Implementation</h3>
				<pre
					style={{
						background: '#f5f5f5',
						padding: '15px',
						borderRadius: '8px',
						overflow: 'auto',
					}}
				>
					{`import { createCustomProvider } from './advertisements';

const customProvider = createCustomProvider({
  type: 'custom',
  name: 'My Ad Network',
  apiKey: 'your-api-key',
  reportingUrl: 'https://api.myadnetwork.com/metrics',
  
  loadAdFunction: async (adSlot, adConfig) => {
    // Your custom ad loading logic
    const response = await fetch('/api/ads', {
      method: 'POST',
      body: JSON.stringify({ config: adConfig }),
    });
    
    const adData = await response.json();
    adSlot.innerHTML = adData.html;
    
    return {
      id: adData.id,
      title: adData.title,
      sponsored: true,
    };
  },
});`}
				</pre>
			</Wrapper>

			<Wrapper style={{ marginBottom: '30px' }}>
				<h3>3. Analytics Integration</h3>
				<pre
					style={{
						background: '#f5f5f5',
						padding: '15px',
						borderRadius: '8px',
						overflow: 'auto',
					}}
				>
					{`const analyticsHooks = {
  onImpression: (event) => {
    // Track to Google Analytics
    gtag('event', 'ad_impression', {
      ad_id: event.adId,
      ad_kind: event.adKind,
    });
    
    // Track to custom analytics
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  },
  
  onClick: (event) => {
    // Track ad clicks
    gtag('event', 'ad_click', {
      ad_id: event.adId,
      url: event.metadata?.actionUrl,
    });
  },
  
  onConversion: (event) => {
    // Track conversions (e.g., for rewarded ads)
    gtag('event', 'conversion', {
      ad_id: event.adId,
      reward: event.metadata?.rewardAmount,
    });
  },
};

<Advertisements
  analyticsHooks={analyticsHooks}
  trackingEnabled={true}
/>`}
				</pre>
			</Wrapper>

			<Wrapper
				style={{
					background: '#e8f5e8',
					padding: '15px',
					borderRadius: '8px',
					border: '1px solid #28a745',
				}}
			>
				<h3
					style={{ color: '#155724', margin: '0 0 10px 0' }}
				>
					Best Practices
				</h3>
				<ul style={{ color: '#155724', margin: 0 }}>
					<li>
						Always provide fallback providers for
						reliability
					</li>
					<li>
						Implement proper error handling and retry
						mechanisms
					</li>
					<li>
						Use analytics to monitor provider performance
					</li>
					<li>
						Test provider rotation in different network
						conditions
					</li>
					<li>
						Respect user privacy and implement GDPR
						compliance
					</li>
					<li>
						Monitor revenue and fill rates across providers
					</li>
				</ul>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Comprehensive guide showing how to configure different ad providers, implement custom providers, integrate analytics, and follow best practices.',
			},
		},
	},
};
