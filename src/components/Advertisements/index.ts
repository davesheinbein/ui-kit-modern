// Main consolidated components and types
export {
	Advertisements,
	AdContainer,
} from './Advertisements';

// Backward compatibility alias
export { Advertisements as Advertisement } from './Advertisements';

export type {
	AdKind,
	AdvertisementProps,
	AdContainerProps,
} from './Advertisements';

// Configuration exports
export * from './configurations';

// Factory exports - new DRY system
export {
	AdvertisementFactory,
	AdUtils,
	AdPresets,
	type AdCreationConfig,
} from './factory';

// Legacy support
export { AdvertisementFactory as A } from './factory';
export { AdPresets as AdvertisementPresets } from './factory';
