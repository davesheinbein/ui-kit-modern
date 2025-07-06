import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Advertisements } from '../../components/Advertisements';
import type {
	AdvertisementProps,
	SingleAdProps,
	MultiAdProps,
	AdKind,
	AdVariant,
	AdSize,
	AdTheme,
	AdPosition,
} from '../../components/Advertisements';
import { commonDecorators } from '../config/decorators';

const meta: Meta<AdvertisementProps> = {
	title: 'Advertisements/Advertisements',
	component: Advertisements,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Advertisement System

A comprehensive advertisement component supporting multiple ad types, sizes, and platforms including Google Ads and Meta/Facebook Ads.

## Features

- **Multiple Ad Types**: Banner, Modal, Native, Sticky, Floating, Toast, Billboard
- **Google Ads Support**: Search, Display, Shopping, Video, Local ads
- **Meta/Facebook Ads**: Image, Story, Reels, Carousel, Collection, Lead ads  
- **Standard Ad Sizes**: Including Google Display Ad standard dimensions
- **Clean Styling**: Single-container approach with proper spacing and shadows
- **Responsive Design**: Mobile-optimized layouts and sizing
- **Interactive Features**: Closable ads, auto-dismiss, hover effects

## Usage

Use this component for displaying advertisements, promotional banners, and sponsored content with real-world ad network compatibility.
				`,
			},
		},
	},
	decorators: commonDecorators,
	argTypes: {
		kind: {
			description: 'Type of advertisement to display',
			control: { type: 'select' },
			options: [
				'banner',
				'modal',
				'native',
				'sticky',
				'floating',
				'toast',
				'billboard',
				'container',
			],
		},
		count: {
			description:
				'Whether to display one ad or multiple ads',
			control: { type: 'select' },
			options: ['one', 'many'],
		},
		variant: {
			description:
				'Visual style variant of the advertisement',
			control: { type: 'select' },
			options: [
				'standard',
				'premium',
				'minimal',
				'branded',
			],
		},
		size: {
			description: 'Size of the advertisement',
			control: { type: 'select' },
			options: ['small', 'medium', 'large', 'fullscreen'],
		},
		title: {
			description: 'Main title text of the advertisement',
			control: { type: 'text' },
		},
		description: {
			description: 'Description text of the advertisement',
			control: { type: 'text' },
		},
		ctaText: {
			description: 'Call-to-action button text',
			control: { type: 'text' },
		},
		ctaUrl: {
			description: 'URL to navigate to when clicked',
			control: { type: 'text' },
		},
		imageUrl: {
			description: 'URL of the advertisement image',
			control: { type: 'text' },
		},
		visible: {
			description: 'Whether the advertisement is visible',
			control: { type: 'boolean' },
		},
		loading: {
			description: 'Whether to show loading state',
			control: { type: 'boolean' },
		},
		closable: {
			description:
				'Whether the advertisement can be closed',
			control: { type: 'boolean' },
		},
		clickable: {
			description: 'Whether the advertisement is clickable',
			control: { type: 'boolean' },
		},
		sponsored: {
			description: 'Whether to show sponsored label',
			control: { type: 'boolean' },
		},
		sponsoredText: {
			description: 'Text for the sponsored label',
			control: { type: 'text' },
		},
		autoClose: {
			description:
				'Whether the advertisement auto-closes after a delay',
			control: { type: 'boolean' },
		},
		autoCloseDelay: {
			description:
				'Delay in milliseconds before auto-closing',
			control: { type: 'number' },
		},
		pauseOnHover: {
			description:
				'Whether to pause auto-close timer on hover',
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<AdvertisementProps>;

// Sample data for stories
const sampleImage =
	'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop';
const sampleImageLarge =
	'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=400&fit=crop';

// ===== CORE EXAMPLES =====

export const Default: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'standard',
		size: 'medium',
		title: 'Amazing Product Deal',
		description:
			'Get 50% off on our latest collection. Limited time offer!',
		ctaText: 'Shop Now',
		ctaUrl: 'https://example.com',
		imageUrl: sampleImage,
		imageAlt: 'Product showcase',
		sponsored: true,
		sponsoredText: 'Sponsored',
		clickable: true,
		visible: true,
		loading: false,
		closable: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic banner advertisement demonstrating standard props: title, description, CTA, image, and sponsored labeling.',
			},
		},
	},
};

export const InteractiveFeatures: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'standard',
		size: 'medium',
		title: 'Interactive Advertisement Features',
		description: 'Demonstrates closable, loading, and clickable states',
		ctaText: 'Try Me',
		imageUrl: sampleImage,
		sponsored: true,
		clickable: true,
		closable: true,
		loading: false,
		autoClose: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates interactive features: closable button, clickable behavior, and loading states. Toggle the loading control to see the loading placeholder.',
			},
		},
	},
};

// ===== AD TYPES SHOWCASE =====

export const AdTypesGallery: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		spacing: 20,
		maxAds: 4,
		ads: [
			{
				kind: 'banner',
				content: {
					title: 'Banner Advertisement',
					description: 'Classic banner format with image and CTA',
					ctaText: 'Shop Now',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'native',
				content: {
					title: 'Native Advertisement',
					description: 'Blends naturally with content',
					ctaText: 'Read More',
					imageUrl: sampleImage,
					sponsored: true,
					sponsoredText: 'Promoted',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'floating',
				content: {
					title: 'Floating Ad (Auto-Close)',
					description: 'Disappears after 5 seconds',
					ctaText: 'Quick Action',
					sponsored: true,
				},
				style: {},
				behavior: { 
					clickable: true,
					closable: true,
					autoClose: true,
					autoCloseDelay: 5000,
					pauseOnHover: true,
				},
			},
			{
				kind: 'toast',
				content: {
					title: 'Toast Notification',
					description: 'Quick notification style',
					sponsored: false,
				},
				style: {},
				behavior: { 
					closable: true,
					autoClose: true,
					autoCloseDelay: 3000,
				},
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcase of core ad types: banner, native, auto-closing floating, and toast notifications. These represent the most common advertisement formats for content integration.',
			},
		},
	},
};

export const ModalOverlayAds: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		spacing: 20,
		maxAds: 4,
		ads: [
			{
				kind: 'modal',
				content: {
					title: 'Modal Advertisement',
					description: 'Full-screen overlay with backdrop for maximum impact',
					ctaText: 'Get Started',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { 
					clickable: true,
					closable: true,
				},
			},
			{
				kind: 'sticky',
				content: {
					title: 'Sticky Advertisement',
					description: 'Stays visible while scrolling for persistent messaging',
					ctaText: 'Learn More',
					sponsored: true,
				},
				style: {},
				behavior: { 
					clickable: true,
					closable: true,
				},
			},
			{
				kind: 'floating',
				content: {
					title: 'Floating Ad (Persistent)',
					description: 'Stays until manually closed for important announcements',
					ctaText: 'View Details',
					sponsored: true,
				},
				style: {},
				behavior: { 
					clickable: true,
					closable: true,
					autoClose: false,
				},
			},
			{
				kind: 'billboard',
				content: {
					title: 'Billboard Advertisement',
					description: 'Large format for brand awareness and high-impact campaigns',
					ctaText: 'Explore',
					imageUrl: sampleImageLarge,
					sponsored: true,
				},
				style: {
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				},
				behavior: { clickable: true },
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'High-impact overlay and modal advertisements: modal (full-screen), sticky (persistent scroll), floating (persistent), and billboard (large format). These are designed for maximum visibility and user attention.',
			},
		},
	},
};

export const VariantsShowcase: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		spacing: 20,
		maxAds: 4,
		ads: [
			{
				kind: 'banner',
				variant: 'standard',
				content: {
					title: 'Standard Variant',
					description: 'Default styling with balanced visual hierarchy',
					ctaText: 'Standard CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				variant: 'premium',
				content: {
					title: 'Premium Variant',
					description: 'Enhanced styling with premium feel',
					ctaText: 'Premium CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: { 
					background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
				},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				variant: 'minimal',
				content: {
					title: 'Minimal Variant',
					description: 'Clean and simple design approach',
					ctaText: 'Minimal CTA',
					imageUrl: sampleImage,
					sponsored: false,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				variant: 'branded',
				content: {
					title: 'Branded Variant',
					description: 'Custom brand colors and styling',
					ctaText: 'Branded CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: { 
					background: '#4c51bf',
					titleColor: '#fff',
					descriptionColor: '#e2e8f0',
				},
				behavior: { clickable: true },
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Visual comparison of the four main style variants: standard (balanced), premium (enhanced), minimal (clean), and branded (custom colors). Each variant serves different design needs.',
			},
		},
	},
};

export const SizesShowcase: Story = {
	args: {
		count: 'many',
		layout: 'stack',
		spacing: 24,
		maxAds: 4,
		ads: [
			{
				kind: 'banner',
				size: 'small',
				content: {
					title: 'Small Size Advertisement',
					description: 'Compact format for tight spaces',
					ctaText: 'Small CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				size: 'medium',
				content: {
					title: 'Medium Size Advertisement',
					description: 'Standard size for most placements and general use cases',
					ctaText: 'Medium CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				size: 'large',
				content: {
					title: 'Large Size Advertisement',
					description: 'Prominent size for important campaigns and high-impact messaging that needs maximum attention',
					ctaText: 'Large CTA',
					imageUrl: sampleImageLarge,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				size: 'fit-content',
				content: {
					title: 'Fit-Content Size Advertisement',
					description: 'Adapts to content size automatically',
					ctaText: 'Flexible CTA',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Comparison of ad sizes: small (compact), medium (standard), large (prominent), and fit-content (adaptive). Notice how content and spacing scale appropriately.',
			},
		},
	},
};

// ===== ADVANCED FEATURES =====

export const CustomStyling: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'branded',
		title: 'Custom Styled Advertisement',
		description: 'Demonstrates custom styling capabilities with gradients and colors',
		ctaText: 'Get Started',
		imageUrl: sampleImage,
		background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		borderRadius: 16,
		padding: '24px 32px',
		titleColor: '#ffffff',
		descriptionColor: '#e2e8f0',
		ctaBackground: '#ffffff',
		ctaColor: '#667eea',
		sponsored: true,
		sponsoredText: 'Featured',
		sponsoredColor: '#fbbf24',
		clickable: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Advanced styling example with custom colors, gradients, spacing, and branded appearance. Shows the full range of styling customization available.',
			},
		},
	},
};

export const MultiAdLayout: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		spacing: 20,
		maxAds: 4,
		ads: [
			{
				kind: 'banner',
				content: {
					title: 'Grid Advertisement 1',
					description: 'First ad demonstrating grid layout capabilities',
					ctaText: 'Learn More',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'native',
				content: {
					title: 'Grid Advertisement 2',
					description: 'Native ad styling in grid format',
					ctaText: 'Read More',
					imageUrl: sampleImage,
					sponsored: true,
					sponsoredText: 'Promoted',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'banner',
				content: {
					title: 'Grid Advertisement 3',
					description: 'Third ad with closable functionality',
					ctaText: 'Get Started',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { 
					clickable: true,
					closable: true,
				},
			},
			{
				kind: 'banner',
				content: {
					title: 'Grid Advertisement 4',
					description: 'Fourth ad completing the grid layout',
					ctaText: 'Explore',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: { clickable: true },
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Multiple advertisements in a responsive grid layout. Demonstrates how different ad types and behaviors work together in a multi-ad configuration.',
			},
		},
	},
};

export const InteractivePlayground: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'standard',
		size: 'medium',
		title: 'Interactive Advertisement Playground',
		description: 'Use the controls below to experiment with different configurations and see real-time results',
		ctaText: 'Customize Me',
		imageUrl: sampleImage,
		sponsored: true,
		clickable: true,
		closable: true,
		loading: false,
		autoClose: false,
		autoCloseDelay: 5000,
		pauseOnHover: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Interactive playground for experimenting with all advertisement props and configurations. Use the controls panel to see how different settings affect the ad appearance and behavior.',
			},
		},
	},
};
