export { default as UnifiedCheckbox } from './UnifiedCheckbox';
export type {
	CheckboxKind,
	UnifiedCheckboxProps,
	BaseCheckboxProps,
} from './UnifiedCheckbox';

// Keep the original Checkbox component for backward compatibility
export { default as Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

// Export enhanced checkbox configuration system
export * from './CheckboxConfigurations';

// Export enhanced checkbox factory and ultra-DRY system
export {
	default as CheckboxFactory,
	C,
	CheckboxPresets,
	CheckboxFactory as CheckboxFactoryClass,
} from './CheckboxFactoryDRY';
export type { CheckboxFactoryProps } from './CheckboxFactoryDRY';

// Legacy exports for specific checkbox types (these now use the unified system)
export { default as DarkModeToggle } from './DarkModeToggle';
export type { DarkModeToggleProps } from './DarkModeToggle';
