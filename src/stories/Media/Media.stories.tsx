import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../../components/Wrappers';
import { Media } from '../../components/Media';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Media> = {
	title: 'Media/Media',
	component: Media,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive media component system supporting avatars, image/video cards, players, galleries, and more with extensive customization options.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'user-avatar',
				'system-avatar',
				'bot-avatar',
				'guest-avatar',
				'admin-avatar',
				'team-avatar',
				'organization-avatar',
				'image-card',
				'video-card',
				'audio-card',
				'document-card',
				'gallery-card',
				'thumbnail-card',
				'video-player',
				'video-embed',
				'live-stream',
				'screen-share',
				'presentation-viewer',
				'image-viewer',
				'image-gallery',
				'image-carousel',
				'image-grid',
				'image-comparison',
				'audio-player',
				'podcast-player',
				'voice-recorder',
				'waveform-visualizer',
			],
			description: 'Media component type',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'bordered',
				'shadow',
				'glass',
				'gradient',
			],
			description: 'Visual variant',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			description: 'Component size',
		},
		shape: {
			control: 'select',
			options: ['circle', 'square', 'rounded', 'pill'],
			description: 'Component shape',
		},
		src: {
			control: 'text',
			description: 'Media source URL',
		},
		alt: {
			control: 'text',
			description: 'Alt text for accessibility',
		},
		title: {
			control: 'text',
			description: 'Media title',
		},
		description: {
			control: 'text',
			description: 'Media description',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text/URL',
		},
		lazy: {
			control: 'boolean',
			description: 'Enable lazy loading',
		},
		autoPlay: {
			control: 'boolean',
			description: 'Auto-play media (videos/audio)',
		},
		controls: {
			control: 'boolean',
			description: 'Show media controls',
		},
		muted: {
			control: 'boolean',
			description: 'Mute audio/video',
		},
		loop: {
			control: 'boolean',
			description: 'Loop media playback',
		},
		clickable: {
			control: 'boolean',
			description: 'Enable click interactions',
		},
		draggable: {
			control: 'boolean',
			description: 'Enable drag interactions',
		},
		showOverlay: {
			control: 'boolean',
			description: 'Show overlay on hover/focus',
		},
		showMetadata: {
			control: 'boolean',
			description: 'Show metadata information',
		},
		showActions: {
			control: 'boolean',
			description: 'Show action buttons',
		},
		aspectRatio: {
			control: 'select',
			options: [
				'1:1',
				'4:3',
				'16:9',
				'21:9',
				'3:2',
				'auto',
			],
			description: 'Aspect ratio',
		},
		fit: {
			control: 'select',
			options: [
				'cover',
				'contain',
				'fill',
				'scale-down',
				'none',
			],
			description: 'Object fit behavior',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Media>;

export const UserAvatar: Story = {
	args: {
		kind: 'user-avatar',
		src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
		alt: 'User Avatar',
		size: 'md',
	},
};

export const ImageCard: Story = {
	args: {
		kind: 'image-card',
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
		alt: 'Beautiful landscape',
		title: 'Mountain Landscape',
		description:
			'A beautiful mountain landscape during sunset',
		variant: 'shadow',
		size: 'md',
		clickable: true,
		showOverlay: true,
	},
};

export const VideoCard: Story = {
	args: {
		kind: 'video-card',
		src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		alt: 'Sample video',
		title: 'Big Buck Bunny',
		description: 'Sample video content',
		variant: 'shadow',
		size: 'lg',
		controls: true,
		showMetadata: true,
	},
};

export const AudioPlayer: Story = {
	args: {
		kind: 'audio-player',
		src: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
		alt: 'Audio player',
		metadata: {
			title: 'Sample Audio',
			author: 'Artist Name',
			duration: '3:45',
		},
		variant: 'bordered',
		size: 'md',
		controls: true,
		showMetadata: true,
	},
};

export const AvatarSizes: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				gap: '1rem',
				alignItems: 'center',
			}}
		>
			<Media.UserAvatar
				size='xs'
				src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
			/>
			<Media.UserAvatar
				size='sm'
				src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
			/>
			<Media.UserAvatar
				size='md'
				src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
			/>
			<Media.UserAvatar
				size='lg'
				src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
			/>
			<Media.UserAvatar
				size='xl'
				src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
			/>
		</Wrapper>
	),
};

export const MediaGallery: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gap: '1rem',
				padding: '2rem',
			}}
		>
			<Media.ImageCard
				src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
				title='Mountain View'
				showOverlay={true}
			/>
			<Media.ImageCard
				src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
				title='Forest Path'
				showOverlay={true}
			/>
			<Media.ImageCard
				src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=300&h=200&fit=crop'
				title='Ocean Waves'
				showOverlay={true}
			/>
			<Media.VideoCard
				src='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
				title='Sample Video'
				showMetadata={true}
			/>
			<Media.AudioCard
				src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop'
				metadata={{
					title: 'Music Track',
					author: 'Artist',
				}}
				showMetadata={true}
			/>
			<Media.DocumentCard
				title='Document.pdf'
				metadata={{
					fileSize: '2.4 MB',
					createdAt: 'Today',
				}}
				showMetadata={true}
			/>
		</Wrapper>
	),
};
