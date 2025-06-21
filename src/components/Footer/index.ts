export { default as UnifiedFooter } from './UnifiedFooter';
export type {
	FooterKind,
	UnifiedFooterProps,
} from './UnifiedFooter';

// Keep the original Footer component for backward compatibility
export { default as Footer } from './Footer';
export type { FooterProps } from './Footer';

export * from './configurations';

export {
	default as FooterFactory,
	Foot,
	FooterPresets,
	createFooter,
} from './factory';
