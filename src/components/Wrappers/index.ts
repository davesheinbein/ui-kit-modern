export { default as UnifiedWrapper } from './UnifiedWrapper';
export type { UnifiedWrapperProps } from './UnifiedWrapper';

// Keep the original Wrapper component for backward compatibility
export { default as Wrapper } from './Wrapper';
export type { WrapperProps } from './Wrapper';

// Export enhanced wrapper configuration system
export * from './WrapperConfigurations';

// Export enhanced wrapper factory and ultra-DRY system
export {
	default as WrapperFactory,
	W,
	WrapperPresets,
	createWrapper,
	createWrapperWithConfig,
	type WrapperFactoryProps,
} from './WrapperFactoryDRY';
