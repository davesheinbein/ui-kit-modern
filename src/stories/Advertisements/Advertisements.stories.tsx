import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Advertisements } from '../../components/Advertisements';
import type {
	AdvertisementProps,
	AdVariant,
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

// ===== BASIC EXAMPLES =====

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
};

export const WithCloseButton: Story = {
	args: {
		...Default.args,
		closable: true,
		title: 'Closable Advertisement',
		description:
			'This ad can be closed by clicking the X button',
	},
};

export const LoadingState: Story = {
	args: {
		...Default.args,
		loading: true,
		title: 'This will not show',
		description: 'This will not show either',
	},
};

// ===== AD TYPES =====

export const BannerAd: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'standard',
		title: 'Summer Sale Banner',
		description: 'Up to 70% off on summer collection',
		ctaText: 'Shop Sale',
		imageUrl: sampleImage,
		sponsored: true,
		clickable: true,
	},
};

export const NativeAd: Story = {
	args: {
		count: 'one',
		kind: 'native',
		variant: 'minimal',
		title: 'Recommended Article',
		description: 'You might also like this related content',
		ctaText: 'Read More',
		imageUrl: sampleImage,
		sponsored: true,
		sponsoredText: 'Promoted',
	},
};

export const StickyAd: Story = {
	args: {
		count: 'one',
		kind: 'sticky',
		variant: 'minimal',
		title: 'Special Offer',
		description: "Limited time deal - don't miss out!",
		ctaText: 'Get Deal',
		closable: true,
		sponsored: true,
	},
};

export const FloatingAdPersistent: Story = {
	args: {
		count: 'one',
		kind: 'floating',
		variant: 'standard',
		size: 'small',
		title: 'Persistent Notification',
		description:
			'This floating ad stays visible until manually closed',
		ctaText: 'View Details',
		closable: true,
		autoClose: false, // Does not auto-disappear
		sponsored: true,
		clickable: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Floating advertisement that remains visible until the user manually closes it. Good for important notifications or persistent CTAs.',
			},
		},
	},
};

export const FloatingAdAutoDisappear: Story = {
	args: {
		count: 'one',
		kind: 'floating',
		variant: 'standard',
		size: 'small',
		title: 'Limited Time Offer',
		description:
			'This ad will disappear automatically in 5 seconds',
		ctaText: 'Claim Now',
		closable: true,
		autoClose: true, // Auto-disappears
		autoCloseDelay: 5000, // 5 seconds
		pauseOnHover: true, // Pauses timer when user hovers
		sponsored: true,
		clickable: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Floating advertisement that automatically disappears after 5 seconds. Timer pauses when user hovers over the ad. Good for temporary promotions or announcements.',
			},
		},
	},
};

export const ToastAd: Story = {
	args: {
		count: 'one',
		kind: 'toast',
		variant: 'minimal',
		size: 'small',
		title: 'Success!',
		description: 'Your order has been placed',
		closable: true,
		autoClose: true,
		autoCloseDelay: 3000,
	},
};

export const BillboardAd: Story = {
	args: {
		count: 'one',
		kind: 'billboard',
		variant: 'branded',
		size: 'large',
		title: 'Brand Showcase',
		description:
			'Experience the difference with our premium products',
		ctaText: 'Explore',
		imageUrl: sampleImageLarge,
		background:
			'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	},
};

export const ModalAd: Story = {
	args: {
		count: 'one',
		kind: 'modal',
		variant: 'premium',
		size: 'large',
		title: 'Exclusive Offer!',
		description:
			'Sign up now and get 20% off your first purchase. This offer is only available to new customers.',
		ctaText: 'Sign Up Now',
		imageUrl: sampleImage,
		closable: true,
		showBackdrop: true,
		backdropOpacity: 0.7,
		closeOnBackdrop: true,
		sponsored: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Modal advertisement with backdrop. Click outside or the close button to dismiss.',
			},
		},
	},
};

// ===== VARIANTS =====

export const StandardVariant: Story = {
	args: {
		...BannerAd.args,
		variant: 'standard',
		title: 'Standard Advertisement',
		description: 'This uses the standard variant styling',
	},
};

export const PremiumVariant: Story = {
	args: {
		...BannerAd.args,
		variant: 'premium',
		title: 'Premium Advertisement',
		description:
			'This uses the premium variant with enhanced styling',
		background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
	},
};

export const MinimalVariant: Story = {
	args: {
		...BannerAd.args,
		variant: 'minimal',
		title: 'Minimal Advertisement',
		description: 'Clean and simple styling',
		sponsored: false,
	},
};

export const BrandedVariant: Story = {
	args: {
		...BannerAd.args,
		variant: 'branded',
		title: 'Branded Advertisement',
		description: 'Custom branded styling and colors',
		background: '#4c51bf',
		titleColor: '#fff',
		descriptionColor: '#e2e8f0',
	},
};

// ===== SIZES =====

export const SmallSize: Story = {
	args: {
		...BannerAd.args,
		size: 'small',
		title: 'Small Ad',
		description: 'Compact size',
	},
};

export const MediumSize: Story = {
	args: {
		...BannerAd.args,
		size: 'medium',
		title: 'Medium Ad',
		description: 'Standard size for most placements',
	},
};

export const LargeSize: Story = {
	args: {
		...BannerAd.args,
		size: 'large',
		title: 'Large Advertisement',
		description: 'Prominent size for important campaigns',
		imageUrl: sampleImageLarge,
	},
};

// ===== SIZE VARIANTS =====

export const FitContentSize: Story = {
	args: {
		...BannerAd.args,
		size: 'fit-content',
		title: 'Fit Content Ad',
		description: 'This ad adapts to its content size',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Advertisement that uses fit-content sizing to adapt to its content.',
			},
		},
	},
};

// ===== MULTI-AD LAYOUTS =====

export const StackLayout: Story = {
	args: {
		count: 'many',
		layout: 'stack',
		spacing: 16,
		maxAds: 3,
		ads: [
			{
				kind: 'banner',
				content: {
					title: 'First Advertisement',
					description:
						'This is the first ad in a stack layout',
					ctaText: 'Learn More',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: {},
			},
			{
				kind: 'native',
				content: {
					title: 'Second Advertisement',
					description:
						'This is the second ad with native styling',
					ctaText: 'Read More',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: {},
			},
			{
				kind: 'banner',
				content: {
					title: 'Third Advertisement',
					description: 'This is the third ad in the stack',
					ctaText: 'Get Started',
					imageUrl: sampleImage,
					sponsored: true,
				},
				style: {},
				behavior: {},
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Multiple ads displayed in a vertical stack layout.',
			},
		},
	},
};

export const GridLayout: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		spacing: 20,
		maxAds: 4,
		ads: [
			{
				kind: 'banner',
				content: {
					title: 'Grid Ad 1',
					description: 'First ad in grid',
					ctaText: 'Click',
					imageUrl: sampleImage,
				},
				style: {},
				behavior: {},
			},
			{
				kind: 'banner',
				content: {
					title: 'Grid Ad 2',
					description: 'Second ad in grid',
					ctaText: 'Click',
					imageUrl: sampleImage,
				},
				style: {},
				behavior: {},
			},
			{
				kind: 'banner',
				content: {
					title: 'Grid Ad 3',
					description: 'Third ad in grid',
					ctaText: 'Click',
					imageUrl: sampleImage,
				},
				style: {},
				behavior: {},
			},
			{
				kind: 'banner',
				content: {
					title: 'Grid Ad 4',
					description: 'Fourth ad in grid',
					ctaText: 'Click',
					imageUrl: sampleImage,
				},
				style: {},
				behavior: {},
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Multiple ads displayed in a responsive grid layout.',
			},
		},
	},
};

export const CustomStyling: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'branded',
		title: 'Custom Styled Ad',
		description:
			'This ad demonstrates custom styling capabilities',
		ctaText: 'Get Started',
		imageUrl: sampleImage,
		background:
			'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		borderRadius: 16,
		padding: '24px 32px',
		titleColor: '#ffffff',
		descriptionColor: '#e2e8f0',
		ctaBackground: '#ffffff',
		ctaColor: '#667eea',
		sponsored: true,
		sponsoredText: 'Featured',
		sponsoredColor: '#fbbf24',
	},
};

export const InteractiveDemo: Story = {
	args: {
		count: 'one',
		kind: 'banner',
		variant: 'standard',
		size: 'medium',
		title: 'Interactive Advertisement',
		description:
			'Try changing the controls below to see how the ad responds',
		ctaText: 'Customize Me',
		imageUrl: sampleImage,
		sponsored: true,
		clickable: true,
		closable: true,
		animationEnabled: true,
		entranceAnimation: 'fade',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Use the controls below to experiment with different ad configurations and see the results in real-time.',
			},
		},
	},
};

// ===== CLOSE FUNCTIONALITY TESTS =====

export const CloseButtonTest: Story = {
	args: {
		...Default.args,
		closable: true,
		title: 'Test Close Functionality',
		description:
			'Click the X button in the top-right corner to close this ad. The ad should completely disappear from the DOM.',
		ctaText: 'Test Button',
		size: 'large',
		onAdClose: (adId: string) => {
			console.log('Ad closed:', adId);
			alert(`Advertisement ${adId} was closed!`);
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Test the close functionality. When you click the close button (×), the advertisement should completely disappear. Check console for close event.',
			},
		},
	},
};

export const MultipleClosableAds: Story = {
	args: {
		count: 'many',
		layout: 'stack',
		maxAds: 3,
		ads: [
			{
				kind: 'banner',
				content: {
					title: 'First Closable Ad',
					description:
						'This is the first ad that can be closed',
					ctaText: 'Click Me',
					imageUrl: sampleImage,
					sponsored: true,
				},
				behavior: {
					closable: true,
				},
			},
			{
				kind: 'native',
				content: {
					title: 'Second Closable Ad',
					description:
						'This is the second ad that can be closed',
					ctaText: 'Learn More',
					imageUrl: sampleImage,
				},
				behavior: {
					closable: true,
				},
			},
			{
				kind: 'toast',
				content: {
					title: 'Third Closable Ad',
					description: 'This toast ad can also be closed',
					ctaText: 'Dismiss',
				},
				behavior: {
					closable: true,
				},
			},
		],
		onAdClose: (adId: string) => {
			console.log('Ad in container closed:', adId);
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Test multiple closable ads in a container. Each ad can be closed independently.',
			},
		},
	},
};

// ===== GOOGLE ADS EXAMPLES =====

export const GoogleSearchAd: Story = {
	args: {
		count: 'one',
		kind: 'search-ad',
		variant: 'google-search',
		title: 'Best Productivity Apps - Download Free',
		description:
			'Boost your productivity with our award-winning app. Features include task management, calendar sync, and team collaboration. Try it free today!',
		displayUrl: 'productivityapp.com',
		sitelinks: [
			{
				text: 'Download App',
				url: 'https://example.com/download',
			},
			{
				text: 'Pricing',
				url: 'https://example.com/pricing',
			},
			{
				text: 'Features',
				url: 'https://example.com/features',
			},
			{
				text: 'Support',
				url: 'https://example.com/support',
			},
		],
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Google Search Ad - Text-only format that appears at the top/bottom of Google search results with sitelinks extensions.',
			},
		},
	},
};

export const GoogleDisplayAd: Story = {
	args: {
		count: 'one',
		kind: 'display-ad',
		size: 'fit-content',
		variant: 'google-display',
		title: 'Summer Collection Sale',
		description:
			'Discover our latest summer fashion collection with up to 50% off select items.',
		imageUrl:
			'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop',
		imageAlt: 'Summer fashion collection',
		displayUrl: 'fashionstore.com',
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Google Display Ad - Banner placement on websites with image and text content.',
			},
		},
	},
};

export const GoogleShoppingAd: Story = {
	args: {
		count: 'one',
		kind: 'shopping-ad',
		size: 'fit-content',
		variant: 'google-shopping',
		title: 'Wireless Bluetooth Headphones',
		imageUrl:
			'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
		imageAlt: 'Wireless headphones',
		price: '$129.99',
		brand: 'AudioTech',
		rating: 4.5,
		reviews: 1247,
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Google Shopping Ad - Product-focused ad with image, price, ratings, and merchant info.',
			},
		},
	},
};

export const GoogleVideoAd: Story = {
	args: {
		count: 'one',
		kind: 'video-ad',
		variant: 'google-video',
		title: 'New Electric Vehicle - Zero Emissions',
		description:
			'Experience the future of driving with our latest electric vehicle featuring 400-mile range and 15-minute fast charging.',
		imageUrl:
			'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=450&fit=crop',
		imageAlt: 'Electric vehicle',
		videoUrl: 'https://example.com/video.mp4',
		skipCountdown: 5,
		videoDuration: 30,
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Google Video Ad - YouTube-style video player with skip functionality and overlay content.',
			},
		},
	},
};

export const GoogleLocalAd: Story = {
	args: {
		count: 'one',
		kind: 'local-ad',
		size: 'fit-content',
		variant: 'google-local',
		title: "Mario's Italian Restaurant",
		location: '123 Main Street, Downtown',
		hours: 'Open until 10:00 PM',
		rating: 4.8,
		reviews: 324,
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Google Local Ad - Business listing with location, hours, ratings, and contact info.',
			},
		},
	},
};

// ===== META/FACEBOOK ADS EXAMPLES =====

export const MetaImageAd: Story = {
	args: {
		count: 'one',
		kind: 'image-ad',
		size: 'fit-content',
		variant: 'meta-image',
		title: 'Transform Your Home with Smart Lighting',
		description:
			'Control your lights from anywhere with our smart lighting system. Easy installation, voice control, and energy savings.',
		imageUrl:
			'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
		imageAlt: 'Smart home lighting',
		brand: 'SmartHome Tech',
		ctaText: 'Shop Now',
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Image Ad - Facebook/Instagram feed-style post with image and engagement elements.',
			},
		},
	},
};

export const MetaStoryAd: Story = {
	args: {
		count: 'one',
		kind: 'story-ad',
		size: 'fit-content',
		variant: 'meta-story',
		title: 'Limited Time Offer',
		imageUrl:
			'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=700&fit=crop',
		imageAlt: 'Fashion model',
		brand: 'Fashion Forward',
		ctaText: 'Shop Collection',
		storyOverlay: {
			text: '50% OFF',
			position: 'center',
			color: '#ffffff',
		},
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Story Ad - Vertical fullscreen format for Instagram/Facebook Stories with overlay text.',
			},
		},
	},
};

export const MetaReelsAd: Story = {
	args: {
		count: 'one',
		kind: 'reels-ad',
		size: 'fit-content',
		variant: 'meta-reels',
		title: 'Master cooking with our new app! 👨‍🍳✨',
		imageUrl:
			'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=700&fit=crop',
		imageAlt: 'Cooking video',
		brand: 'CookMaster',
		ctaText: 'Download App',
		videoUrl: 'https://example.com/cooking-video.mp4',
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Reels Ad - TikTok-style vertical video format with social actions and casual content.',
			},
		},
	},
};

export const MetaCarouselAd: Story = {
	args: {
		count: 'one',
		kind: 'carousel-ad',
		size: 'fit-content',
		variant: 'meta-carousel',
		title: 'Explore Our Product Range',
		brand: 'TechGadgets',
		ctaText: 'View All Products',
		carouselItems: [
			{
				imageUrl:
					'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
				title: 'Wireless Headphones',
				description:
					'Premium sound quality with noise cancellation',
				ctaText: 'Buy Now',
				ctaUrl: 'https://example.com/headphones',
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop',
				title: 'Smart Watch',
				description:
					'Track your fitness and stay connected',
				ctaText: 'Learn More',
				ctaUrl: 'https://example.com/smartwatch',
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&h=200&fit=crop',
				title: 'Laptop Stand',
				description:
					'Ergonomic design for better productivity',
				ctaText: 'Shop Now',
				ctaUrl: 'https://example.com/laptop-stand',
			},
		],
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Carousel Ad - Horizontally swipeable cards showing multiple products or content pieces.',
			},
		},
	},
};

export const MetaCollectionAd: Story = {
	args: {
		count: 'one',
		kind: 'collection-ad',
		size: 'fit-content',
		variant: 'meta-collection',
		title: 'Shop the Look',
		imageUrl:
			'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=300&fit=crop',
		imageAlt: 'Fashion collection hero image',
		brand: 'StyleHub',
		ctaText: 'Browse Collection',
		collectionProducts: [
			{
				imageUrl:
					'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=150&h=150&fit=crop',
				title: 'Dress',
				price: '$89',
				url: 'https://example.com/dress',
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=150&h=150&fit=crop',
				title: 'Jacket',
				price: '$129',
				url: 'https://example.com/jacket',
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=150&h=150&fit=crop',
				title: 'Shoes',
				price: '$99',
				url: 'https://example.com/shoes',
			},
			{
				imageUrl:
					'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop',
				title: 'Bag',
				price: '$79',
				url: 'https://example.com/bag',
			},
		],
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Collection Ad - Mobile-only format with hero image and product grid for instant shopping.',
			},
		},
	},
};

export const MetaLeadAd: Story = {
	args: {
		count: 'one',
		kind: 'lead-ad',
		size: 'fit-content',
		variant: 'facebook-feed',
		title: 'Get Your Free Marketing Guide',
		description:
			'Download our comprehensive 50-page marketing guide and boost your business growth. No spam, just valuable insights.',
		imageUrl:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
		imageAlt: 'Marketing guide',
		brand: 'MarketPro',
		ctaText: 'Download Free Guide',
		leadFormFields: [
			{ type: 'text', label: 'Full Name', required: true },
			{
				type: 'email',
				label: 'Email Address',
				required: true,
			},
			{
				type: 'phone',
				label: 'Phone Number',
				required: false,
			},
			{
				type: 'select',
				label: 'Company Size',
				required: false,
				options: [
					'1-10 employees',
					'11-50 employees',
					'51+ employees',
				],
			},
		],
		clickable: true,
		visible: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Meta Lead Ad - In-app form for lead generation without leaving Facebook/Instagram.',
			},
		},
	},
};

// ===== VISUAL COMPARISON SECTION =====

export const AdTypeComparison: Story = {
	args: {
		count: 'many',
		layout: 'grid',
		maxAds: 6,
		ads: [
			{
				kind: 'search-ad',
				content: {
					title: 'Google Search Style',
					description: 'Text-only search result ad',
					displayUrl: 'example.com',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'display-ad',
				content: {
					title: 'Google Display',
					description: 'Banner with image',
					imageUrl:
						'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
					displayUrl: 'example.com',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'shopping-ad',
				content: {
					title: 'Product Shopping Ad',
					imageUrl:
						'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
					price: '$99.99',
					brand: 'Brand',
					rating: 4.5,
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'image-ad',
				content: {
					title: 'Meta Feed Ad',
					description: 'Social media style',
					imageUrl:
						'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=200&fit=crop',
					brand: 'SocialBrand',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'story-ad',
				content: {
					title: 'Story Format',
					imageUrl:
						'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=350&fit=crop',
					brand: 'StoryBrand',
				},
				style: {},
				behavior: { clickable: true },
			},
			{
				kind: 'carousel-ad',
				content: {
					title: 'Carousel Ad',
					brand: 'CarouselBrand',
					carouselItems: [
						{
							imageUrl:
								'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=100&fit=crop',
							title: 'Item 1',
						},
						{
							imageUrl:
								'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=100&fit=crop',
							title: 'Item 2',
						},
					],
				},
				style: {},
				behavior: { clickable: true },
			},
		],
		spacing: 20,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Visual comparison showing the diversity of different ad types side by side. Notice how each ad type has its own unique layout, styling, and visual hierarchy.',
			},
		},
	},
};

export const FloatingAdComparison: Story = {
	args: {
		count: 'many',
		layout: 'stack',
		spacing: 20,
		maxAds: 2,
		ads: [
			{
				kind: 'floating',
				content: {
					title: 'Persistent Ad',
					description: 'Stays until manually closed',
					ctaText: 'View',
					sponsored: true,
				},
				style: {
					background: '#e3f2fd',
					border: '2px solid #2196f3',
				},
				behavior: {
					closable: true,
					autoClose: false,
					clickable: true,
				},
			},
			{
				kind: 'floating',
				content: {
					title: 'Auto-Disappearing Ad',
					description:
						'Disappears in 7 seconds (hover to pause)',
					ctaText: 'Quick Action',
					sponsored: true,
				},
				style: {
					background: '#fff3e0',
					border: '2px solid #ff9800',
				},
				behavior: {
					closable: true,
					autoClose: true,
					autoCloseDelay: 7000,
					pauseOnHover: true,
					clickable: true,
				},
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Side-by-side comparison of persistent floating ad vs auto-disappearing floating ad. The orange ad will disappear after 7 seconds (hover to pause timer), while the blue ad remains until manually closed.',
			},
		},
	},
};
