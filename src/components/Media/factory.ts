// src/components/Media/MediaFactory.ts
import React from 'react';
import {
	MediaConfiguration,
	getMediaConfig,
	MediaKind,
} from './configurations';
import { UnifiedMediaProps } from './UnifiedMedia';
import UnifiedMedia from './UnifiedMedia';

/**
 * Factory Media Factory
 * Creates configured media components from configuration objects
 */
export class MediaFactory {
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
	UserAvatar: MediaFactory.createFromKind('user-avatar'),
	SystemAvatar:
		MediaFactory.createFromKind('system-avatar'),
	BotAvatar: MediaFactory.createFromKind('bot-avatar'),
	GuestAvatar: MediaFactory.createFromKind('guest-avatar'),
	AdminAvatar: MediaFactory.createFromKind('admin-avatar'),
	TeamAvatar: MediaFactory.createFromKind('team-avatar'),
	OrganizationAvatar: MediaFactory.createFromKind(
		'organization-avatar'
	),

	// Media cards
	ImageCard: MediaFactory.createFromKind('image-card'),
	VideoCard: MediaFactory.createFromKind('video-card'),
	AudioCard: MediaFactory.createFromKind('audio-card'),
	DocumentCard:
		MediaFactory.createFromKind('document-card'),
	GalleryCard: MediaFactory.createFromKind('gallery-card'),
	ThumbnailCard: MediaFactory.createFromKind(
		'thumbnail-card'
	),

	// Video players
	VideoPlayer: MediaFactory.createFromKind('video-player'),
	VideoEmbed: MediaFactory.createFromKind('video-embed'),
	LiveStream: MediaFactory.createFromKind('live-stream'),
	ScreenShare: MediaFactory.createFromKind('screen-share'),
	PresentationViewer: MediaFactory.createFromKind(
		'presentation-viewer'
	),

	// Image components
	ImageViewer: MediaFactory.createFromKind('image-viewer'),
	ImageGallery:
		MediaFactory.createFromKind('image-gallery'),
	ImageCarousel: MediaFactory.createFromKind(
		'image-carousel'
	),
	ImageGrid: MediaFactory.createFromKind('image-grid'),
	ImageComparison: MediaFactory.createFromKind(
		'image-comparison'
	),

	// Audio components
	AudioPlayer: MediaFactory.createFromKind('audio-player'),
	PodcastPlayer: MediaFactory.createFromKind(
		'podcast-player'
	),
	VoiceRecorder: MediaFactory.createFromKind(
		'voice-recorder'
	),
	WaveformVisualizer: MediaFactory.createFromKind(
		'waveform-visualizer'
	),
};
