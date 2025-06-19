export { default as UnifiedGrid } from './UnifiedGrid';
export type {
	GridKind,
	UnifiedGridProps,
	BaseGridProps,
	VSGridProps,
	SolvedGroupsProps,
	PregameGridProps,
} from './UnifiedGrid';

// Keep the original Grid component for backward compatibility
export { default as Grid } from './Grid';
export type { GridProps } from './Grid';

// Export enhanced grid configuration system
export * from './GridConfigurations';

// Export enhanced grid factory and ultra-DRY system
export {
	default as GridFactory,
	GridFactoryClass,
	G,
	GridPresets,
	QuickGrids,
} from './GridFactoryDRY';
export type { GridFactoryProps } from './GridFactoryDRY';
