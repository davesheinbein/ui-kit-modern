// ===== PRIMARY DRY FORM FIELD SYSTEM =====
// Use these for new development - Maximum DRYness

// Enhanced form field configuration system
export * from './configurations';

// Core  components
export type { FieldKind, FormsProps } from './Forms';

// Base Forms component (similar to Modal base)
export { Forms } from './Forms';
export type { FormsProps as BaseFormsProps } from './Forms';
export { FormsBodyFactory } from './Forms';
