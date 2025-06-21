export { default as UnifiedGraph } from './UnifiedGraph';
export type {
	GraphKind,
	UnifiedGraphProps,
} from './UnifiedGraph';

// Keep the original Graphs component for backward compatibility
export { default as Graphs } from './Graphs';
export type { GraphsProps, GraphShape } from './Graphs';

export * from './configurations';

export {
	default as GraphFactory,
	G,
	GraphPresets,
	QuickGraphs,
} from './factory';

// Default export for backward compatibility
export { default } from './Graphs';
