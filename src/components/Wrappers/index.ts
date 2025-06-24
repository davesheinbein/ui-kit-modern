// Core Wrapper component (consolidates Wrapper functionality)
export { default as Wrapper } from './Wrapper';
export type { WrapperProps } from './Wrapper';

// Configuration system
export * from './configurations';

// Factory system
export {
	default as WrapperFactory,
	WrapperPresets,
	createWrapper,
	createWrapperWithConfig,
	type WrapperFactoryProps,
} from './factory';
