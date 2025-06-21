import React from 'react';
import UnifiedGrid from './UnifiedGrid';

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

// =============================================================================
// BACKWARD COMPATIBILITY WRAPPERS
// =============================================================================

export interface VSGridPropsLegacy {
	words: string[];
	selected: string[];
	locked: string[];
	wildcards?: string[];
	onSelect: (word: string) => void;
	opponentSelected?: string[];
	playerColor?: string;
	opponentColor?: string;
	solvedBy?: Record<string, string[]>;
	playerId?: string;
	opponentId?: string;
	gridSize?: { rows: number; cols: number };
	preview?: boolean;
}

/**
 * VSGrid - Legacy component wrapper
 * @deprecated Use UnifiedGrid with kind="vs-grid" instead
 */
export const VSGrid: React.FC<VSGridPropsLegacy> = (props) => {
	console.warn(
		'VSGrid is deprecated. Use UnifiedGrid with kind="vs-grid" instead. ' +
			'See migration guide in component documentation.'
	);

	return <UnifiedGrid kind='vs-grid' {...props} />;
};
