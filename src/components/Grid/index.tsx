import React from 'react';
import { Wrapper } from '../Wrappers';
import Grid from './Grid';
export type {
	GridKind,
	GridProps,
	BaseGridProps,
	VSGridProps,
	SolvedGroupsProps,
	PregameGridProps,
} from './Grid';

export { default as Grid } from './Grid';

export * from './configurations';

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
 * @deprecated Use Grid with kind="vs-grid" instead
 */
export const VSGrid: React.FC<VSGridPropsLegacy> = (
	props
) => {
	console.warn(
		'VSGrid is deprecated. Use Grid with kind="vs-grid" instead. ' +
			'See migration guide in component documentation.'
	);

	return <Grid kind='vs-grid' {...props} />;
};
