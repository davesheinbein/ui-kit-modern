// ===== PRIMARY DRY FORM FIELD SYSTEM =====
// Use these for new development - Maximum DRYness

// Enhanced form field factory and ultra-DRY system
export {
	default as FormFieldFactory,
	F,
	FormFieldPresets,
} from './FormFieldFactoryDRY';
export type { FormFieldFactoryProps } from './FormFieldFactoryDRY';

// Enhanced form field configuration system
export * from './FormFieldConfigurations';

// Core unified components
export { default as UnifiedFormField } from './UnifiedFormField';
export type {
	FieldKind,
	FormFieldProps,
	UnifiedFormFieldProps,
} from './UnifiedFormField';

// Base FormField component (similar to Modal base)
export { default as FormField } from './FormField';
export type { FormFieldProps as BaseFormFieldProps } from './FormField';

// DRY Form Field Body Factory
export { default as FormFieldBodyFactory } from './FormFieldBodyFactory';
export type { FormFieldBodyFactoryProps } from './FormFieldBodyFactory';
