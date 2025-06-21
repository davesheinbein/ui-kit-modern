// ===== PRIMARY DRY FORM FIELD SYSTEM =====
// Use these for new development - Maximum DRYness

// Enhanced form field factory and factory system
export {
	default as FormFieldFactory,
	F,
	FormFieldPresets,
} from './factory';
export type { FormFieldFactoryProps } from './factory';

// Enhanced form field configuration system
export * from './configurations';

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
