export { default as UnifiedGraph } from './UnifiedGraph';
export type {
	GraphKind,
	UnifiedGraphProps,
} from './UnifiedGraph';

// Keep the original Graphs component for backward compatibility
export { default as Graphs } from './Graphs';
export type { GraphsProps, GraphShape } from './Graphs';

// Export enhanced graph configuration system
export * from './GraphConfigurations';

// Export enhanced graph factory and ultra-DRY system
export {
	default as GraphFactory,
	G,
	GraphPresets,
	QuickGraphs,
} from './GraphFactoryDRY';

// Default export for backward compatibility
export { default } from './Graphs';
