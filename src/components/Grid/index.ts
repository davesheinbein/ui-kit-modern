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

export * from './configurations';

export {
	default as GridFactory,
	GridFactoryClass,
	G,
	GridPresets,
	QuickGrids,
} from './factory';
export type { GridFactoryProps } from './factory';
