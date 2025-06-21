// src/components/Media/index.ts
export type {
	MediaKind,
	MediaSize,
	MediaShape,
	MediaVariant,
	MediaFit,
	MediaAction,
	MediaMetadata,
	MediaConfiguration,
} from './configurations';

export type { UnifiedMediaProps } from './UnifiedMedia';
export { default as UnifiedMedia } from './UnifiedMedia';
export { default as Media } from './Media';
export { MediaFactory, MediaComponents } from './factory';
export { getMediaConfig } from './configurations';
