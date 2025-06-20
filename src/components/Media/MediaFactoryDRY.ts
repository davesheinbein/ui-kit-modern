// src/components/Media/MediaFactoryDRY.ts
import React from 'react';
import {
	MediaConfiguration,
	getMediaConfig,
	MediaKind,
} from './MediaConfigurations';
import { UnifiedMediaProps } from './UnifiedMedia';
import UnifiedMedia from './UnifiedMedia';

/**
 * Ultra-DRY Media Factory
 * Creates configured media components from configuration objects
 */
export class MediaFactoryDRY {
	static create(
		config: MediaConfiguration & Partial<UnifiedMediaProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<UnifiedMediaProps>
		>((props, ref) =>
			React.createElement(UnifiedMedia, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: MediaKind) {
		const config = getMediaConfig(kind);
		return this.create(config);
	}
}

// Pre-configured media components
export const MediaComponents = {
	// Avatar types
	UserAvatar: MediaFactoryDRY.createFromKind('user-avatar'),
	SystemAvatar:
		MediaFactoryDRY.createFromKind('system-avatar'),
	BotAvatar: MediaFactoryDRY.createFromKind('bot-avatar'),
	GuestAvatar:
		MediaFactoryDRY.createFromKind('guest-avatar'),
	AdminAvatar:
		MediaFactoryDRY.createFromKind('admin-avatar'),
	TeamAvatar: MediaFactoryDRY.createFromKind('team-avatar'),
	OrganizationAvatar: MediaFactoryDRY.createFromKind(
		'organization-avatar'
	),

	// Media cards
	ImageCard: MediaFactoryDRY.createFromKind('image-card'),
	VideoCard: MediaFactoryDRY.createFromKind('video-card'),
	AudioCard: MediaFactoryDRY.createFromKind('audio-card'),
	DocumentCard:
		MediaFactoryDRY.createFromKind('document-card'),
	GalleryCard:
		MediaFactoryDRY.createFromKind('gallery-card'),
	ThumbnailCard: MediaFactoryDRY.createFromKind(
		'thumbnail-card'
	),

	// Video players
	VideoPlayer:
		MediaFactoryDRY.createFromKind('video-player'),
	VideoEmbed: MediaFactoryDRY.createFromKind('video-embed'),
	LiveStream: MediaFactoryDRY.createFromKind('live-stream'),
	ScreenShare:
		MediaFactoryDRY.createFromKind('screen-share'),
	PresentationViewer: MediaFactoryDRY.createFromKind(
		'presentation-viewer'
	),

	// Image components
	ImageViewer:
		MediaFactoryDRY.createFromKind('image-viewer'),
	ImageGallery:
		MediaFactoryDRY.createFromKind('image-gallery'),
	ImageCarousel: MediaFactoryDRY.createFromKind(
		'image-carousel'
	),
	ImageGrid: MediaFactoryDRY.createFromKind('image-grid'),
	ImageComparison: MediaFactoryDRY.createFromKind(
		'image-comparison'
	),

	// Audio components
	AudioPlayer:
		MediaFactoryDRY.createFromKind('audio-player'),
	PodcastPlayer: MediaFactoryDRY.createFromKind(
		'podcast-player'
	),
	VoiceRecorder: MediaFactoryDRY.createFromKind(
		'voice-recorder'
	),
	WaveformVisualizer: MediaFactoryDRY.createFromKind(
		'waveform-visualizer'
	),
};
