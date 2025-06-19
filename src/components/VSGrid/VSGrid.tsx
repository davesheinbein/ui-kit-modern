/**
 * @deprecated Use UnifiedGrid with kind="vs-grid" instead
 *
 * Legacy VSGrid component - wrapper around UnifiedGrid
 * This component is kept for backward compatibility.
 *
 * Migration example:
 *
 * Before:
 * <VSGrid words={words} selected={selected} onSelect={onSelect} />
 *
 * After:
 * <UnifiedGrid kind="vs-grid" words={words} selected={selected} onSelect={onSelect} />
 *
 * Or use factory:
 * {GridFactory('vs-grid', { words, selected, onSelect })}
 *
 * Or use quick grid:
 * <QuickGrids.VS words={words} selected={selected} onSelect={onSelect} />
 */

import React from 'react';
import UnifiedGrid from '../Grid/UnifiedGrid';

export interface VSGridProps {
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

const VSGrid: React.FC<VSGridProps> = (props) => {
	console.warn(
		'VSGrid is deprecated. Use UnifiedGrid with kind="vs-grid" instead. ' +
			'See migration guide in component documentation.'
	);

	return <UnifiedGrid kind='vs-grid' {...props} />;
};

export default VSGrid;
