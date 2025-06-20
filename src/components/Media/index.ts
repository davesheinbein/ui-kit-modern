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
} from './MediaConfigurations';

export type { UnifiedMediaProps } from './UnifiedMedia';
export { default as UnifiedMedia } from './UnifiedMedia';
export { default as Media } from './Media';
export {
	MediaFactoryDRY,
	MediaComponents,
} from './MediaFactoryDRY';
export { getMediaConfig } from './MediaConfigurations';
