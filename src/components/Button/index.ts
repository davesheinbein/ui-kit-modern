export { default as UnifiedButton } from './UnifiedButton';
export type {
	ButtonKind,
	UnifiedButtonProps,
} from './UnifiedButton';

// Keep the original Button component for backward compatibility
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

// Export enhanced button configuration system
export * from './ButtonConfigurations';

// Export enhanced button factory and ultra-DRY system
export {
	default as ButtonFactory,
	B,
	ButtonPresets,
} from './ButtonFactoryDRY';
