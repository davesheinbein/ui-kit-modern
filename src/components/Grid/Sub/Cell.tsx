import React from 'react';
import styles from '../Grid.module.scss';
import type { CellState, GridProps } from './types';
import { renderOverlays } from './overlays';

interface CellProps {
	word: string;
	index: number;
	cellState: CellState;
	cellClassName: string;
	cellAlignment: 'center' | 'left' | 'right';
	cellTextTransform:
		| 'none'
		| 'uppercase'
		| 'lowercase'
		| 'capitalize';
	showCellNumbers: boolean;
	playerId?: string;
	opponentId?: string;
	onSelect?: (word: string) => void;
	keyboardNavigation: boolean;
	overlayProps: Parameters<typeof renderOverlays>[1];
	cellRenderer?: GridProps['cellRenderer'];
}

const Cell: React.FC<CellProps> = ({
	word,
	index,
	cellState,
	cellClassName,
	cellAlignment,
	cellTextTransform,
	showCellNumbers,
	playerId,
	opponentId,
	onSelect,
	keyboardNavigation,
	overlayProps,
	cellRenderer,
}) => {
	if (cellRenderer) {
		return cellRenderer(word, cellState, index);
	}
	const cellClasses = [
		styles['grid-cell'],
		cellState.isInteractive && styles.interactive,
		cellState.isSelected && styles.selected,
		cellState.isLocked && styles.locked,
		cellState.isWildcard && styles.wildcard,
		cellState.isOpponentSelected && styles.opponent,
		cellState.solvedByPlayer === playerId &&
			styles['solved-by-player'],
		cellState.solvedByPlayer === opponentId &&
			styles['solved-by-opponent'],
		cellClassName,
	]
		.filter(Boolean)
		.join(' ');
	const cellStyles: React.CSSProperties = {
		textAlign: cellAlignment,
		textTransform: cellTextTransform,
	};
	return (
		<div
			key={`${word}-${index}`}
			className={cellClasses}
			style={cellStyles}
			onClick={
				cellState.isInteractive ?
					() => onSelect?.(word)
				:	undefined
			}
			onKeyDown={
				cellState.isInteractive && keyboardNavigation ?
					(event) => {
						if (
							event.key === 'Enter' ||
							event.key === ' '
						) {
							event.preventDefault();
							onSelect?.(word);
						}
					}
				:	undefined
			}
			tabIndex={
				cellState.isInteractive && keyboardNavigation ?
					0
				:	-1
			}
			role={cellState.isInteractive ? 'button' : undefined}
			aria-label={
				cellState.isInteractive ?
					`Select ${word}`
				:	undefined
			}
			aria-pressed={
				cellState.isInteractive ?
					cellState.isSelected
				:	undefined
			}
		>
			{showCellNumbers && (
				<span className={styles.cellNumber}>
					{index + 1}
				</span>
			)}
			<span className={styles.cellContent}>{word}</span>
			{renderOverlays(cellState, overlayProps)}
		</div>
	);
};

export default Cell;
