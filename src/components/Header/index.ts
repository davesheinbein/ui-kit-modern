export { default as UnifiedHeader } from './UnifiedHeader';
export type {
	HeaderKind,
	UnifiedHeaderProps,
	HeaderVariant,
} from './UnifiedHeader';

// Keep the original Header component for backward compatibility
export { default as Header } from './Header';
export type { HeaderProps } from './Header';

// Legacy BrowseHeader component using new DRY system
export { default as BrowseHeader } from './BrowseHeader';
export type { BrowseHeaderProps } from './BrowseHeader';

// Export enhanced header configuration system
export * from './HeaderConfigurations';

// Export enhanced header factory and ultra-DRY system
export {
	default as HeaderFactory,
	H,
	HeaderPresets,
	createHeader,
} from './HeaderFactoryDRY';
