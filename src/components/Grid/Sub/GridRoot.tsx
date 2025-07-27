import React from 'react';
import styles from '../Grid.module.scss';
import { getGridStyles } from './GridStyles';
import { renderCell } from './renderCell';
import PlaceholderRenderer from './PlaceholderRenderer';
import type { GridProps } from './types';

/**
 * Flexible, prop-driven Grid component for word grids, game boards, and data displays
 * All functionality is exposed via clean, declarative props
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	(props, ref) => {
		const {
			kind,
			words = [],
			selected = [],
			locked = [],
			wildcards = [],
			onSelect,
			gridSize,
			className = '',
			cellClassName = '',
			interactive = true,
			isLocked = false,
			preview = false,
			keyboardNavigation = true,
			gap = 'var(--spacing-sm)',
			maxWidth = '480px',
			minHeight = '320px',
			backgroundColor,
			borderRadius = '12px',
			boxShadow,
			padding = '8px',
			cellRenderer,
			showCellNumbers = false,
			cellAlignment = 'center',
			cellTextTransform = 'none',
			showOverlays = true,
			overlayRenderer,
			overlayPosition = 'top-right',
			opponentSelected = [],
			playerColor = '#2563eb',
			opponentColor = '#ef4444',
			solvedBy = {},
			playerId,
			opponentId,
			botDifficulty,
			showOpponentIndicators = true,
			showSolvedBadges = true,
			groups,
			groupDirection = 'column',
			groupRenderer,
			showGroupTitles = true,
			groupLayout = 'list',
			showPlaceholders = false,
			placeholderContent = '×',
			placeholderRenderer,
			ariaLabel,
			screenReaderText,
			announceSelections = false,
			pendingSolvedGroups,
			activePuzzle,
			categoryDirection,
			...rest
		} = props;

		const getAutoGridSize = (
			words: string[]
		): { rows: number; cols: number } => {
			const n = words.length;
			if (n === 0) return { rows: 4, cols: 4 };
			const sqrt = Math.sqrt(n);
			if (Number.isInteger(sqrt)) {
				return { rows: sqrt, cols: sqrt };
			}
			// Try to find closest factors for rectangular grids
			let bestRows = 4,
				bestCols = 4,
				minDiff = Infinity;
			for (let r = 1; r <= n; r++) {
				if (n % r === 0) {
					const c = n / r;
					if (Math.abs(r - c) < minDiff) {
						bestRows = r;
						bestCols = c;
						minDiff = Math.abs(r - c);
					}
				}
			}
			return { rows: bestRows, cols: bestCols };
		};

		const finalGroups =
			groups ||
			(pendingSolvedGroups && activePuzzle ?
				pendingSolvedGroups.map((group) => ({
					id: group.groupIdx,
					title:
						activePuzzle.groupLabels?.[group.groupIdx] ||
						`Group ${group.groupIdx + 1}`,
					words: group.words,
					completed: true,
				}))
			:	[]);

		const finalGroupDirection =
			groupDirection || categoryDirection || 'column';
		const finalInteractive =
			interactive && !preview && !isLocked;

		const autoGrid = getAutoGridSize(words);
		const rows = gridSize?.rows ?? autoGrid.rows;
		const cols = gridSize?.cols ?? autoGrid.cols;

		const gridStyles = getGridStyles(props, rows, cols);

		const gridClasses = [
			styles.Grid,
			preview && styles.preview,
			isLocked && styles.locked,
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div
				ref={ref}
				className={gridClasses}
				style={{ ...rest.style, ...gridStyles }}
				aria-label={ariaLabel || 'Game grid'}
				role='grid'
				{...rest}
			>
				{screenReaderText && (
					<p className={styles.visuallyHidden}>
						{screenReaderText}
					</p>
				)}
				{showPlaceholders ?
					<PlaceholderRenderer
						rows={rows}
						cols={cols}
						placeholderContent={placeholderContent}
						placeholderRenderer={placeholderRenderer}
					/>
				:	words.map((word, index) =>
						renderCell(
							word,
							index,
							props,
							finalInteractive,
							selected,
							locked,
							wildcards,
							opponentSelected,
							solvedBy
						)
					)
				}
			</div>
		);
	}
);

Grid.displayName = 'Grid';
export default Grid;
