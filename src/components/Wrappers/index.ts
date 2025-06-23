// Core Wrapper component (consolidates UnifiedWrapper functionality)
export { default as Wrapper } from './Wrapper';
export type { WrapperProps } from './Wrapper';

// Configuration system
export * from './configurations';

// Factory system
export {
	default as WrapperFactory,
	W,
	WrapperPresets,
	createWrapper,
	createWrapperWithConfig,
	type WrapperFactoryProps,
} from './factory';

// Backward compatibility aliases
export { default as UnifiedWrapper } from './Wrapper';
export type { WrapperProps as UnifiedWrapperProps } from './Wrapper';
