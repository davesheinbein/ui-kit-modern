export { default as UnifiedWrapper } from './UnifiedWrapper';
export type { UnifiedWrapperProps } from './UnifiedWrapper';

// Keep the original Wrapper component for backward compatibility
export { default as Wrapper } from './Wrapper';
export type { WrapperProps } from './Wrapper';

export * from './configurations';

export {
	default as WrapperFactory,
	W,
	WrapperPresets,
	createWrapper,
	createWrapperWithConfig,
	type WrapperFactoryProps,
} from './factory';
