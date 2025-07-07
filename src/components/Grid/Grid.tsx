import React from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Grid.module.scss';
import {
	createGridConfig,
	GridConfiguration,
	ExtendedGridKind,
} from './configurations';

export type GridKind = 'grid' | 'pregame' | 'solved';

export interface BaseGridProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'onSelect'
	> {
	words?: string[];
	selected?: string[];
	locked?: string[];
	wildcards?: string[];
	onSelect?: (word: string) => void;
	gridSize?: { rows: number; cols: number };
	className?: string;
	cellClassName?: string;
}

export interface GridProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'onSelect'
	> {
	/** @deprecated Use explicit props instead of kind-based switching */
	kind?: 'grid' | 'pregame' | 'solved';

	// === CORE GRID PROPS ===
	/** Array of words/items to display in the grid */
	words?: string[];
	/** Array of selected words */
	selected?: string[];
	/** Array of locked/disabled words */
	locked?: string[];
	/** Array of wildcard words with special styling */
	wildcards?: string[];
	/** Callback when a word is selected */
	onSelect?: (word: string) => void;
	/** Grid dimensions */
	gridSize?: { rows: number; cols: number };
	/** Custom CSS class for the grid container */
	className?: string;
	/** Custom CSS class for individual cells */
	cellClassName?: string;

	// === INTERACTION PROPS ===
	/** Enable/disable interactivity */
	interactive?: boolean;
	/** Lock the entire grid from interaction */
	isLocked?: boolean;
	/** Preview mode - disables interaction and overlays */
	preview?: boolean;
	/** Enable keyboard navigation */
	keyboardNavigation?: boolean;

	// === VISUAL CUSTOMIZATION ===
	/** Gap between grid cells */
	gap?: string;
	/** Maximum width of the grid */
	maxWidth?: string;
	/** Minimum height of the grid */
	minHeight?: string;
	/** Background color of the grid */
	backgroundColor?: string;
	/** Border radius of the grid */
	borderRadius?: string | number;
	/** Box shadow for the grid */
	boxShadow?: string;
	/** Padding around the grid */
	padding?: string | number;

	// === CELL CUSTOMIZATION ===
	/** Custom cell renderer */
	cellRenderer?: (
		word: string,
		cellState: CellState,
		index: number
	) => React.ReactNode;
	/** Show cell indices/numbers */
	showCellNumbers?: boolean;
	/** Cell content alignment */
	cellAlignment?: 'center' | 'left' | 'right';
	/** Cell text transform */
	cellTextTransform?:
		| 'none'
		| 'uppercase'
		| 'lowercase'
		| 'capitalize';

	// === OVERLAY SYSTEM ===
	/** Enable overlay system */
	showOverlays?: boolean;
	/** Custom overlay renderer */
	overlayRenderer?: (
		word: string,
		cellState: CellState
	) => React.ReactNode;
	/** Overlay position */
	overlayPosition?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'center';

	// === MULTIPLAYER/COMPARISON PROPS ===
	/** Words selected by opponent/other player */
	opponentSelected?: string[];
	/** Player color for styling */
	playerColor?: string;
	/** Opponent color for styling */
	opponentColor?: string;
	/** Words solved by specific players */
	solvedBy?: Record<string, string[]>;
	/** Current player ID */
	playerId?: string;
	/** Opponent player ID */
	opponentId?: string;
	/** Bot difficulty (for styling) */
	botDifficulty?: string;
	/** Show opponent indicators */
	showOpponentIndicators?: boolean;
	/** Show solved badges */
	showSolvedBadges?: boolean;

	// === GROUP/CATEGORY DISPLAY ===
	/** Solved groups to display */
	groups?: Array<{
		id: string | number;
		title: string;
		words: string[];
		color?: string;
		completed?: boolean;
	}>;
	/** Direction for group layout */
	groupDirection?: 'row' | 'column';
	/** Custom group renderer */
	groupRenderer?: (
		group: any,
		index: number
	) => React.ReactNode;
	/** Show group titles */
	showGroupTitles?: boolean;
	/** Group layout style */
	groupLayout?: 'list' | 'grid' | 'inline';

	// === SPECIAL DISPLAY MODES ===
	/** Show placeholder cells (like 'x' for pregame) */
	showPlaceholders?: boolean;
	/** Placeholder content */
	placeholderContent?: React.ReactNode;
	/** Custom placeholder renderer */
	placeholderRenderer?: (index: number) => React.ReactNode;

	// === ACCESSIBILITY ===
	/** ARIA label for the grid */
	ariaLabel?: string;
	/** Screen reader description */
	screenReaderText?: string;
	/** Announce selection changes */
	announceSelections?: boolean;

	// === LEGACY PROPS (deprecated) ===
	/** @deprecated Use groups prop instead */
	pendingSolvedGroups?: {
		groupIdx: number;
		words: string[];
	}[];
	/** @deprecated Use groups prop instead */
	activePuzzle?: { groupLabels?: string[] };
	/** @deprecated Use groupDirection prop */
	categoryDirection?: 'row' | 'column';
}

export interface CellState {
	word: string;
	index: number;
	isSelected: boolean;
	isLocked: boolean;
	isWildcard: boolean;
	isOpponentSelected: boolean;
	solvedByPlayer: string | null;
	isInteractive: boolean;
}

/**
 * Flexible, prop-driven Grid component for word grids, game boards, and data displays
 * All functionality is exposed via clean, declarative props
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	(
		{
			// Legacy prop
			kind,

			// Core props
			words = [],
			selected = [],
			locked = [],
			wildcards = [],
			onSelect,
			gridSize,
			className = '',
			cellClassName = '',

			// Interaction props
			interactive = true,
			isLocked = false,
			preview = false,
			keyboardNavigation = true,

			// Visual customization
			gap = 'var(--spacing-sm)',
			maxWidth = '480px',
			minHeight = '320px',
			backgroundColor,
			borderRadius = '12px',
			boxShadow,
			padding = '8px',

			// Cell customization
			cellRenderer,
			showCellNumbers = false,
			cellAlignment = 'center',
			cellTextTransform = 'none',

			// Overlay system
			showOverlays = true,
			overlayRenderer,
			overlayPosition = 'top-right',

			// Multiplayer props
			opponentSelected = [],
			playerColor = '#2563eb',
			opponentColor = '#ef4444',
			solvedBy = {},
			playerId,
			opponentId,
			botDifficulty,
			showOpponentIndicators = true,
			showSolvedBadges = true,

			// Group props
			groups,
			groupDirection = 'column',
			groupRenderer,
			showGroupTitles = true,
			groupLayout = 'list',

			// Special modes
			showPlaceholders = false,
			placeholderContent = '×',
			placeholderRenderer,

			// Accessibility
			ariaLabel,
			screenReaderText,
			announceSelections = false,

			// Legacy props
			pendingSolvedGroups,
			activePuzzle,
			categoryDirection,

			...props
		},
		ref
	) => {
		// Legacy support - migrate old props to new format
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

		// Handle legacy 'kind' prop
		if (kind === 'pregame') {
			return renderPregameGrid();
		} else if (kind === 'solved') {
			return renderSolvedGrid();
		}

		// Default grid dimensions
		const rows = gridSize?.rows ?? 4;
		const cols = gridSize?.cols ?? 4;

		// Build grid styles
		const gridStyles: React.CSSProperties = {
			display: 'grid',
			gridTemplateRows: `repeat(${rows}, 1fr)`,
			gridTemplateColumns: `repeat(${cols}, 1fr)`,
			gap,
			maxWidth,
			minHeight,
			...(backgroundColor && { backgroundColor }),
			...(borderRadius && { borderRadius }),
			...(boxShadow && { boxShadow }),
			...(padding && { padding }),
			...props.style,
		};

		// Build CSS classes
		const gridClasses = [
			styles.Grid,
			preview && styles.preview,
			isLocked && styles.locked,
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Render cells
		const renderCell = (word: string, index: number) => {
			const cellState: CellState = {
				word,
				index,
				isSelected: selected.includes(word),
				isLocked: locked.includes(word),
				isWildcard: wildcards.includes(word),
				isOpponentSelected: opponentSelected.includes(word),
				solvedByPlayer: getSolvedByPlayer(word),
				isInteractive:
					finalInteractive && !locked.includes(word),
			};

			// Use custom cell renderer if provided
			if (cellRenderer) {
				return cellRenderer(word, cellState, index);
			}

			// Default cell renderer
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
							handleKeyDown(word)
						:	undefined
					}
					tabIndex={
						cellState.isInteractive && keyboardNavigation ?
							0
						:	-1
					}
					role={
						cellState.isInteractive ? 'button' : undefined
					}
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
					{renderOverlays(cellState)}
				</div>
			);
		};

		// Helper functions
		function getSolvedByPlayer(
			word: string
		): string | null {
			for (const pid in solvedBy) {
				if (solvedBy[pid]?.includes(word)) {
					return pid;
				}
			}
			return null;
		}

		function handleKeyDown(word: string) {
			return (event: React.KeyboardEvent) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					onSelect?.(word);
				}
			};
		}

		function renderOverlays(cellState: CellState) {
			if (!showOverlays || preview) return null;

			// Use custom overlay renderer if provided
			if (overlayRenderer) {
				return overlayRenderer(cellState.word, cellState);
			}

			const overlays = [];

			// Opponent indicator
			if (
				showOpponentIndicators &&
				cellState.isOpponentSelected &&
				!cellState.solvedByPlayer
			) {
				overlays.push(
					<span
						key='opponent'
						className={styles.opponentOverlay}
					>
						Opponent
					</span>
				);
			}

			// Solved badge
			if (showSolvedBadges && cellState.solvedByPlayer) {
				const isPlayerSolved =
					cellState.solvedByPlayer === playerId;
				const label =
					isPlayerSolved ? 'You'
					: botDifficulty ? 'Bot'
					: 'Opponent';
				const color =
					isPlayerSolved ? playerColor : opponentColor;

				overlays.push(
					<span
						key='solved'
						className={styles.solvedBadge}
						style={{ backgroundColor: color }}
					>
						{label}
					</span>
				);
			}

			return overlays.length > 0 ?
					<div
						className={`${styles.overlayContainer} ${styles[overlayPosition]}`}
					>
						{overlays}
					</div>
				:	null;
		}

		// Render placeholder grid (for pregame mode)
		function renderPregameGrid() {
			const gridStyles: React.CSSProperties = {
				display: 'grid',
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gap,
				maxWidth,
				minHeight,
				background: backgroundColor || '#f8fafc',
				borderRadius,
				boxShadow: boxShadow || '0 2px 8px 0 #e2e8f040',
				padding,
				alignItems: 'center',
				justifyItems: 'center',
				...props.style,
			};

			const placeholderCells = Array.from(
				{ length: rows * cols },
				(_, index) => {
					if (placeholderRenderer) {
						return placeholderRenderer(index);
					}

					return (
						<div
							key={index}
							className={styles['pregame-cell-lockout']}
						>
							<span>{placeholderContent}</span>
						</div>
					);
				}
			);

			return (
				<div
					ref={ref}
					className={`${styles.Grid} ${styles.pregameGrid} ${className}`}
					style={gridStyles}
					aria-label={ariaLabel || 'Game grid (pregame)'}
					{...props}
				>
					{screenReaderText && (
						<p className={styles.visuallyHidden}>
							{screenReaderText}
						</p>
					)}
					{placeholderCells}
				</div>
			);
		}

		// Render solved groups layout
		function renderSolvedGrid() {
			if (!finalGroups.length) return null;

			const solvedGridStyles: React.CSSProperties = {
				display: groupLayout === 'grid' ? 'grid' : 'block',
				gridTemplateColumns:
					groupLayout === 'grid' ?
						`repeat(${cols}, 1fr)`
					:	undefined,
				gap: 'var(--spacing-md)',
				maxWidth: '100%',
				...props.style,
			};

			return (
				<Wrapper
					ref={ref}
					className={`${styles.boardContainer} ${styles.solvedGrid} ${className}`}
					style={solvedGridStyles}
					aria-label={ariaLabel || 'Solved categories'}
					{...props}
				>
					{screenReaderText && (
						<p className={styles.visuallyHidden}>
							{screenReaderText}
						</p>
					)}
					<ol className={styles.solvedCategories}>
						{finalGroups.map((group, index) => {
							if (groupRenderer) {
								return groupRenderer(group, index);
							}

							return (
								<li
									key={group.id}
									className={styles.categoryGroup}
									style={{
										display: 'flex',
										flexDirection: finalGroupDirection,
									}}
								>
									{showGroupTitles && (
										<div
											className={styles.categoryTitle}
											style={{ color: group.color }}
										>
											{group.title}
										</div>
									)}
									<ul className={styles.cardList}>
										{group.words.map((word, idx) => (
											<li
												key={idx}
												className={styles.cardItem}
											>
												{word}
											</li>
										))}
									</ul>
								</li>
							);
						})}
					</ol>
				</Wrapper>
			);
		}

		// Render main grid
		return (
			<div
				ref={ref}
				className={gridClasses}
				style={gridStyles}
				aria-label={ariaLabel || 'Game grid'}
				role='grid'
				{...props}
			>
				{screenReaderText && (
					<p className={styles.visuallyHidden}>
						{screenReaderText}
					</p>
				)}
				{showPlaceholders ?
					Array.from({ length: rows * cols }, (_, index) =>
						placeholderRenderer ?
							placeholderRenderer(index)
						:	<div
								key={index}
								className={styles.placeholderCell}
							>
								{placeholderContent}
							</div>
					)
				:	words.map((word, index) => renderCell(word, index))
				}
			</div>
		);
	}
);

Grid.displayName = 'Grid';

export default Grid;
