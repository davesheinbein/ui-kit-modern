export { default as UnifiedButton } from './UnifiedButton';
export type {
	ButtonKind,
	UnifiedButtonProps,
} from './UnifiedButton';

// Keep the original Button component for backward compatibility
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

export * from './configurations';

export {
	default as ButtonFactory,
	B,
	ButtonPresets,
} from './factory';
