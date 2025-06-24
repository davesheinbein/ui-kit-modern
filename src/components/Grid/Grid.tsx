import React from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Grid.module.scss';
import {
	GRID_CONFIGURATIONS,
	GridConfiguration,
	ExtendedGridKind,
} from './configurations';

// Re-export types for convenience
export type GridKind = ExtendedGridKind;

// Base grid props interface
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

// VS mode specific props
export interface VSGridProps extends BaseGridProps {
	opponentSelected?: string[];
	playerColor?: string;
	opponentColor?: string;
	solvedBy?: Record<string, string[]>;
	playerId?: string;
	opponentId?: string;
	vsMode?: boolean;
}

// Solved groups specific props
export interface SolvedGroupsProps {
	pendingSolvedGroups: {
		groupIdx: number;
		words: string[];
	}[];
	activePuzzle?: {
		groupLabels?: string[];
	};
}

// Pregame lockout specific props
export interface PregameGridProps extends BaseGridProps {
	gridCols: number;
	gridRows: number;
	gridWords: string[];
}

// Main Grid props interface
export interface GridProps extends VSGridProps {
	kind: GridKind;
	configuration?: Partial<GridConfiguration>;

	// Solved groups props (for solved-groups kind)
	pendingSolvedGroups?: {
		groupIdx: number;
		words: string[];
	}[];
	activePuzzle?: {
		groupLabels?: string[];
	};

	// Bot game props (for vs-bot kind)
	botDifficulty?: string;

	// Preview mode
	preview?: boolean;

	// Additional game state
	solvedGroups?: string[][];
	activeGroup?: string[];
	isLocked?: boolean;
}

/**
 * Grid - The main grid component that handles all grid types
 * This component uses configuration-driven rendering to support multiple
 * grid types while maintaining a consistent API.
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	(
		{
			kind,
			configuration,
			words = [],
			selected = [],
			locked = [],
			wildcards = [],
			onSelect,
			opponentSelected = [],
			playerColor = '#2563eb',
			opponentColor = '#ef4444',
			solvedBy = {},
			playerId,
			opponentId,
			gridSize,
			preview = false,
			pendingSolvedGroups = [],
			activePuzzle,
			botDifficulty,
			solvedGroups = [],
			activeGroup = [],
			isLocked = false,
			className = '',
			cellClassName = '',
			...props
		},
		ref
	) => {
		// Get configuration for this grid kind
		const config = {
			...GRID_CONFIGURATIONS[kind],
			...configuration,
		};

		// Override grid size if provided
		const layout =
			gridSize ?
				{ ...config.layout, ...gridSize }
			:	config.layout;

		// Determine behavior based on config and props
		const isInteractive =
			!preview && !isLocked && config.behavior.interactive;
		const isPreview = preview || config.behavior.preview;
		const isGridLocked = isLocked || config.behavior.locked;
		const isVSMode = config.behavior.vsMode;

		// Determine VS mode styling based on props
		let vsModeClass = '';
		if (isVSMode && kind === 'vs-grid') {
			if (botDifficulty && !opponentId) {
				vsModeClass = styles['bot-mode'];
			} else if (opponentId && playerId !== opponentId) {
				vsModeClass = styles['multiplayer-mode'];
			}
		}

		// Build CSS classes
		const gridClasses = [
			styles.Grid,
			styles[`grid-${config.variant}`],
			config.className ? styles[config.className] : '',
			vsModeClass,
			isInteractive ? styles.interactive : '',
			isPreview ? styles.preview : '',
			isGridLocked ? styles.locked : '',
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Grid style object
		const gridStyle: React.CSSProperties = {
			display: 'grid',
			gridTemplateColumns: `repeat(${layout.cols}, 1fr)`,
			gridTemplateRows: `repeat(${layout.rows}, 1fr)`,
			gap: layout.gap,
			maxWidth: layout.maxWidth,
			minHeight: layout.minHeight,
			...config.styling,
		};

		// Handle special grid types
		if (kind === 'solved-groups') {
			return renderSolvedGroups(
				pendingSolvedGroups,
				activePuzzle,
				gridClasses,
				props,
				ref
			);
		}

		if (kind === 'pregame-lockout') {
			return renderPregameLockout(
				words,
				layout,
				gridClasses,
				props,
				ref
			);
		}

		// Render standard grid
		return (
			<Wrapper
				ref={ref}
				className={gridClasses}
				style={gridStyle}
				{...props}
			>
				{words.map((word, i) => {
					const isSelected = selected.includes(word);
					const isWordLocked = locked.includes(word);
					const isWildcard = wildcards.includes(word);
					const isOpponent =
						opponentSelected.includes(word);

					// Determine which player solved this word
					let solvedByPlayer = null;
					for (const pid in solvedBy) {
						if (solvedBy[pid]?.includes(word)) {
							solvedByPlayer = pid;
						}
					}

					// Build cell classes
					const cellClasses = [
						styles.gridCell,
						config.cellClassName ?
							styles[config.cellClassName]
						:	'',
						isInteractive ? styles.interactive : '',
						isSelected ? styles.selected : '',
						isWordLocked ? styles.locked : '',
						isWildcard ? styles.wildcard : '',
						isOpponent ? styles.opponent : '',
						solvedByPlayer === playerId ?
							styles.solvedByPlayer
						:	'',
						solvedByPlayer === opponentId ?
							styles.solvedByOpponent
						:	'',
						cellClassName,
					]
						.filter(Boolean)
						.join(' ');

					return (
						<Wrapper
							key={word}
							style={{ position: 'relative' }}
						>
							{/* Replace Button with a div or your word cell component as needed */}
							<div
								className={cellClasses}
								onClick={
									isInteractive ?
										() => onSelect?.(word)
									:	undefined
								}
								tabIndex={isInteractive ? 0 : -1}
							>
								{word}
							</div>
							{/* VS Mode Overlays */}
							{renderVSOverlays(
								isVSMode || false,
								isOpponent,
								solvedByPlayer,
								playerId,
								opponentId,
								playerColor,
								opponentColor,
								botDifficulty,
								isPreview
							)}
						</Wrapper>
					);
				})}
			</Wrapper>
		);
	}
);

// Helper function to render solved groups
const renderSolvedGroups = (
	pendingSolvedGroups: any[],
	activePuzzle: any,
	gridClasses: string,
	props: any,
	ref: React.Ref<HTMLDivElement>
) => {
	if (!pendingSolvedGroups.length) return null;

	// Get the total number of expected groups (usually 4 for Connections)
	const totalGroups =
		activePuzzle?.groupLabels?.length || 4;
	const foundGroups = pendingSolvedGroups.length;

	return (
		<Wrapper
			ref={ref}
			className={`${styles.boardContainer} ${gridClasses}`}
			{...props}
		>
			<p className={styles.visuallyHidden}>
				{foundGroups} categories solved
			</p>
			<ol className={styles.solvedCategories}>
				{pendingSolvedGroups
					.filter(
						(g, i, arr) =>
							arr.findIndex(
								(x) => x.groupIdx === g.groupIdx
							) === i
					)
					.sort((a, b) => a.groupIdx - b.groupIdx)
					.map(({ groupIdx, words }) => {
						const fullTitle =
							activePuzzle?.groupLabels?.[groupIdx] ||
							`Group ${groupIdx + 1}`;
						const wordsArray =
							Array.isArray(words) ? words : [];
						return (
							<li
								key={groupIdx}
								className={styles.categoryGroup}
							>
								<div className={styles.categoryTitle}>
									{fullTitle}
								</div>
								<ul className={styles.cardList}>
									{wordsArray.map(
										(w: string, idx: number) => (
											<li
												key={idx}
												className={styles.cardItem}
											>
												{w}
											</li>
										)
									)}
								</ul>
							</li>
						);
					})}
			</ol>
		</Wrapper>
	);
};

// Helper function to render pregame lockout
const renderPregameLockout = (
	words: string[],
	layout: any,
	gridClasses: string,
	props: any,
	ref: React.Ref<HTMLDivElement>
) => {
	// Grid style object for lockout
	const gridStyle: React.CSSProperties = {
		display: 'grid',
		gridTemplateColumns: `repeat(${layout.cols}, 1fr)`,
		gridTemplateRows: `repeat(${layout.rows}, 1fr)`,
		gap: layout.gap,
		maxWidth: layout.maxWidth,
		minHeight: layout.minHeight,
		background: '#f8fafc',
		borderRadius: 12,
		boxShadow: '0 2px 8px 0 #e2e8f040',
		padding: 8,
		alignItems: 'center',
		justifyItems: 'center',
	};

	return (
		<Wrapper
			ref={ref}
			className={gridClasses}
			style={gridStyle}
			{...props}
		>
			{words.map((word, idx) => (
				<Wrapper
					key={idx}
					className={styles.pregameCellLockout}
				>
					<span>×</span>
				</Wrapper>
			))}
		</Wrapper>
	);
};

// Helper function to render VS mode overlays
const renderVSOverlays = (
	isVSMode: boolean,
	isOpponent: boolean,
	solvedByPlayer: string | null,
	playerId?: string,
	opponentId?: string,
	playerColor?: string,
	opponentColor?: string,
	botDifficulty?: string,
	isPreview?: boolean
) => {
	if (isPreview) return null;

	const overlays = [];

	// Determine game type
	const isBotGame = !!botDifficulty && !opponentId;
	const isMultiplayerGame =
		!!opponentId && playerId !== opponentId;

	// Opponent selection overlay - ONLY show in true multiplayer games, NOT in bot games
	// Bot games should never show "Opponent" overlays for selections, only "Bot" for solved words
	if (
		isVSMode &&
		isMultiplayerGame &&
		isOpponent &&
		!solvedByPlayer
	) {
		overlays.push(
			<span
				key='opponent'
				className={styles.vsGhostOverlay}
			>
				Opponent
			</span>
		);
	}

	// Solved badge - show when someone actually solved a group
	if (isVSMode && solvedByPlayer) {
		const isPlayerSolved = solvedByPlayer === playerId;
		const label =
			isPlayerSolved ? 'You'
			: isBotGame ? 'Bot'
			: 'Opponent';

		overlays.push(
			<span
				key='solved'
				className={styles.vsSolvedBadge}
				style={{
					background:
						isPlayerSolved ? playerColor : opponentColor,
				}}
			>
				{label}
			</span>
		);
	}

	return overlays;
};

Grid.displayName = 'Grid';

export default Grid;
