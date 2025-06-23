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

// Factory exports
export {
	default as AdvertisementFactory,
	A,
	AdvertisementPresets,
} from './factory';
