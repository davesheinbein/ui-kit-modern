export { default as UnifiedNavigation } from './UnifiedNavigation';
export type { UnifiedNavigationProps } from './UnifiedNavigation';

// Keep the original Navigation component for backward compatibility
export { default as Navigation } from './Navigation';
export type { NavigationProps } from './Navigation';

// Export enhanced navigation configuration system
export * from './NavigationConfigurations';

// Export enhanced navigation factory and ultra-DRY system
export {
	default as NavigationFactory,
	N,
	NavigationPresets,
} from './NavigationFactoryDRY';
