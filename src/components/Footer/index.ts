export { default as UnifiedFooter } from './UnifiedFooter';
export type {
	FooterKind,
	UnifiedFooterProps,
} from './UnifiedFooter';

// Keep the original Footer component for backward compatibility
export { default as Footer } from './Footer';
export type { FooterProps } from './Footer';

// Export footer configuration system
export * from './FooterConfigurations';

// Export footer factory and ultra-DRY system
export {
	default as FooterFactory,
	Foot,
	FooterPresets,
	createFooter,
} from './FooterFactoryDRY';
