import React from 'react';
import type { CellState, GridProps } from './types';
import Cell from './Cell';
import { getSolvedByPlayer } from './helpers';

export function renderCell(
	word: string,
	index: number,
	props: GridProps,
	finalInteractive: boolean,
	selected: string[],
	locked: string[],
	wildcards: string[],
	opponentSelected: string[],
	solvedBy: Record<string, string[]>
) {
	const cellState: CellState = {
		word,
		index,
		isSelected: selected.includes(word),
		isLocked: locked.includes(word),
		isWildcard: wildcards.includes(word),
		isOpponentSelected: opponentSelected.includes(word),
		solvedByPlayer: getSolvedByPlayer(word, solvedBy),
		isInteractive:
			finalInteractive && !locked.includes(word),
	};
	return (
		<Cell
			word={word}
			index={index}
			cellState={cellState}
			cellClassName={props.cellClassName || ''}
			cellAlignment={props.cellAlignment || 'center'}
			cellTextTransform={props.cellTextTransform || 'none'}
			showCellNumbers={props.showCellNumbers ?? false}
			playerId={props.playerId}
			opponentId={props.opponentId}
			onSelect={props.onSelect}
			keyboardNavigation={props.keyboardNavigation ?? true}
			overlayProps={{
				showOverlays: props.showOverlays,
				preview: props.preview,
				overlayRenderer: props.overlayRenderer,
				showOpponentIndicators:
					props.showOpponentIndicators,
				playerId: props.playerId,
				opponentId: props.opponentId,
				botDifficulty: props.botDifficulty,
				playerColor: props.playerColor,
				opponentColor: props.opponentColor,
				showSolvedBadges: props.showSolvedBadges,
				overlayPosition: props.overlayPosition,
			}}
			cellRenderer={props.cellRenderer}
		/>
	);
}
