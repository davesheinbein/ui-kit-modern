/**
 * MediaConfigurations.ts - DRY Media Component Configuration System
 */

import { ReactNode } from 'react';

export type MediaKind =
	// Avatar types
	| 'user-avatar'
	| 'system-avatar'
	| 'bot-avatar'
	| 'guest-avatar'
	| 'admin-avatar'
	| 'team-avatar'
	| 'organization-avatar'

	// Media cards
	| 'image-card'
	| 'video-card'
	| 'audio-card'
	| 'document-card'
	| 'gallery-card'
	| 'thumbnail-card'

	// Video players
	| 'video-player'
	| 'video-embed'
	| 'live-stream'
	| 'screen-share'
	| 'presentation-viewer'

	// Image components
	| 'image-viewer'
	| 'image-gallery'
	| 'image-carousel'
	| 'image-grid'
	| 'image-comparison'

	// Audio components
	| 'audio-player'
	| 'podcast-player'
	| 'voice-recorder'
	| 'waveform-visualizer';

export type MediaSize =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl';
export type MediaShape =
	| 'circle'
	| 'square'
	| 'rounded'
	| 'pill';
export type MediaVariant =
	| 'default'
	| 'bordered'
	| 'shadow'
	| 'glass'
	| 'gradient';
export type MediaFit =
	| 'cover'
	| 'contain'
	| 'fill'
	| 'scale-down'
	| 'none';

export interface MediaAction {
	id: string;
	label: string;
	icon?: ReactNode;
	onClick: () => void;
	variant?: 'primary' | 'secondary' | 'ghost';
	disabled?: boolean;
}

export interface MediaMetadata {
	title?: string;
	description?: string;
	author?: string;
	duration?: string;
	fileSize?: string;
	dimensions?: string;
	createdAt?: string;
	tags?: string[];
}

export interface MediaConfiguration {
	kind: MediaKind;
	variant: MediaVariant;
	size: MediaSize;
	shape?: MediaShape;
	fit: MediaFit;

	// Content
	alt?: string;
	placeholder?: string;
	fallbackIcon?: ReactNode;

	// Behavior
	lazy?: boolean;
	autoPlay?: boolean;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
	clickable?: boolean;
	draggable?: boolean;

	// Interaction
	actions?: MediaAction[];
	showOverlay?: boolean;
	showMetadata?: boolean;
	showActions?: boolean;

	// Styling
	aspectRatio?: string;
	maxWidth?: string;
	maxHeight?: string;
	borderRadius?: string;
	className?: string;
}

export const MEDIA_CONFIGURATIONS: Record<
	MediaKind,
	MediaConfiguration
> = {
	// Avatar types
	'user-avatar': {
		kind: 'user-avatar',
		variant: 'default',
		size: 'md',
		shape: 'circle',
		fit: 'cover',
		alt: 'User avatar',
		placeholder: '/images/default-avatar.png',
		fallbackIcon: '👤',
		clickable: false,
	},

	'system-avatar': {
		kind: 'system-avatar',
		variant: 'bordered',
		size: 'sm',
		shape: 'square',
		fit: 'cover',
		alt: 'System avatar',
		placeholder: '/images/system-avatar.png',
		fallbackIcon: '⚙️',
		clickable: false,
	},

	'bot-avatar': {
		kind: 'bot-avatar',
		variant: 'gradient',
		size: 'md',
		shape: 'circle',
		fit: 'cover',
		alt: 'Bot avatar',
		placeholder: '/images/bot-avatar.png',
		fallbackIcon: '🤖',
		clickable: false,
	},

	'guest-avatar': {
		kind: 'guest-avatar',
		variant: 'default',
		size: 'sm',
		shape: 'circle',
		fit: 'cover',
		alt: 'Guest user',
		placeholder: '/images/guest-avatar.png',
		fallbackIcon: '👥',
		clickable: false,
	},

	'admin-avatar': {
		kind: 'admin-avatar',
		variant: 'bordered',
		size: 'md',
		shape: 'circle',
		fit: 'cover',
		alt: 'Admin user',
		placeholder: '/images/admin-avatar.png',
		fallbackIcon: '👑',
		clickable: true,
	},

	'team-avatar': {
		kind: 'team-avatar',
		variant: 'shadow',
		size: 'lg',
		shape: 'rounded',
		fit: 'cover',
		alt: 'Team avatar',
		placeholder: '/images/team-avatar.png',
		fallbackIcon: '👥',
		clickable: true,
	},

	'organization-avatar': {
		kind: 'organization-avatar',
		variant: 'bordered',
		size: 'xl',
		shape: 'square',
		fit: 'cover',
		alt: 'Organization logo',
		placeholder: '/images/org-avatar.png',
		fallbackIcon: '🏢',
		clickable: true,
	},

	// Media cards
	'image-card': {
		kind: 'image-card',
		variant: 'shadow',
		size: 'md',
		fit: 'cover',
		alt: 'Image',
		lazy: true,
		clickable: true,
		showOverlay: true,
		showActions: true,
		aspectRatio: '16/9',
	},

	'video-card': {
		kind: 'video-card',
		variant: 'shadow',
		size: 'lg',
		fit: 'cover',
		alt: 'Video thumbnail',
		lazy: true,
		clickable: true,
		showOverlay: true,
		showMetadata: true,
		showActions: true,
		aspectRatio: '16/9',
		controls: false,
	},

	'audio-card': {
		kind: 'audio-card',
		variant: 'bordered',
		size: 'md',
		shape: 'rounded',
		fit: 'cover',
		alt: 'Audio cover',
		clickable: true,
		showOverlay: true,
		showMetadata: true,
		showActions: true,
		aspectRatio: '1/1',
	},

	'document-card': {
		kind: 'document-card',
		variant: 'bordered',
		size: 'sm',
		shape: 'rounded',
		fit: 'contain',
		alt: 'Document preview',
		clickable: true,
		showMetadata: true,
		showActions: true,
		aspectRatio: '3/4',
	},

	'gallery-card': {
		kind: 'gallery-card',
		variant: 'shadow',
		size: 'md',
		fit: 'cover',
		alt: 'Gallery item',
		lazy: true,
		clickable: true,
		showOverlay: true,
		aspectRatio: '1/1',
	},

	'thumbnail-card': {
		kind: 'thumbnail-card',
		variant: 'default',
		size: 'xs',
		fit: 'cover',
		alt: 'Thumbnail',
		lazy: true,
		clickable: true,
		aspectRatio: '1/1',
	},

	// Video players
	'video-player': {
		kind: 'video-player',
		variant: 'default',
		size: 'lg',
		fit: 'contain',
		alt: 'Video player',
		controls: true,
		autoPlay: false,
		muted: false,
		loop: false,
		showActions: true,
		aspectRatio: '16/9',
	},

	'video-embed': {
		kind: 'video-embed',
		variant: 'default',
		size: 'lg',
		fit: 'contain',
		alt: 'Embedded video',
		controls: true,
		autoPlay: false,
		lazy: true,
		aspectRatio: '16/9',
	},

	'live-stream': {
		kind: 'live-stream',
		variant: 'bordered',
		size: 'xl',
		fit: 'contain',
		alt: 'Live stream',
		controls: true,
		autoPlay: true,
		muted: false,
		showOverlay: true,
		showActions: true,
		aspectRatio: '16/9',
	},

	'screen-share': {
		kind: 'screen-share',
		variant: 'default',
		size: 'xl',
		fit: 'contain',
		alt: 'Screen share',
		controls: false,
		autoPlay: true,
		muted: true,
		showActions: true,
		aspectRatio: '16/10',
	},

	'presentation-viewer': {
		kind: 'presentation-viewer',
		variant: 'bordered',
		size: 'xl',
		fit: 'contain',
		alt: 'Presentation slide',
		controls: true,
		showActions: true,
		showMetadata: true,
		aspectRatio: '16/9',
	},

	// Image components
	'image-viewer': {
		kind: 'image-viewer',
		variant: 'default',
		size: 'xl',
		fit: 'contain',
		alt: 'Image',
		lazy: true,
		clickable: true,
		showActions: true,
		showOverlay: true,
	},

	'image-gallery': {
		kind: 'image-gallery',
		variant: 'shadow',
		size: 'md',
		fit: 'cover',
		alt: 'Gallery image',
		lazy: true,
		clickable: true,
		showOverlay: true,
		aspectRatio: '1/1',
	},

	'image-carousel': {
		kind: 'image-carousel',
		variant: 'default',
		size: 'lg',
		fit: 'cover',
		alt: 'Carousel image',
		lazy: true,
		clickable: true,
		showActions: true,
		aspectRatio: '16/9',
	},

	'image-grid': {
		kind: 'image-grid',
		variant: 'shadow',
		size: 'sm',
		fit: 'cover',
		alt: 'Grid image',
		lazy: true,
		clickable: true,
		aspectRatio: '1/1',
	},

	'image-comparison': {
		kind: 'image-comparison',
		variant: 'bordered',
		size: 'lg',
		fit: 'contain',
		alt: 'Comparison image',
		clickable: true,
		showActions: true,
		aspectRatio: '16/9',
	},

	// Audio components
	'audio-player': {
		kind: 'audio-player',
		variant: 'bordered',
		size: 'md',
		fit: 'cover',
		alt: 'Audio player',
		controls: true,
		autoPlay: false,
		muted: false,
		loop: false,
		showMetadata: true,
		showActions: true,
	},

	'podcast-player': {
		kind: 'podcast-player',
		variant: 'shadow',
		size: 'lg',
		fit: 'cover',
		alt: 'Podcast player',
		controls: true,
		autoPlay: false,
		showMetadata: true,
		showActions: true,
		aspectRatio: '1/1',
	},

	'voice-recorder': {
		kind: 'voice-recorder',
		variant: 'bordered',
		size: 'sm',
		fit: 'contain',
		alt: 'Voice recorder',
		controls: true,
		showActions: true,
	},

	'waveform-visualizer': {
		kind: 'waveform-visualizer',
		variant: 'default',
		size: 'md',
		fit: 'contain',
		alt: 'Audio waveform',
		controls: true,
		showActions: true,
		aspectRatio: '4/1',
	},
};

export const getMediaConfig = (
	kind: MediaKind
): MediaConfiguration => {
	return MEDIA_CONFIGURATIONS[kind];
};
