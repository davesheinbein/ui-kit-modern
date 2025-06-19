import React from 'react';
import {
	GridConfiguration,
	ExtendedGridKind,
	GRID_CONFIGURATIONS,
} from './GridConfigurations';
import { UnifiedButton } from '../Button';
import styles from './Grid.module.scss';

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

// Main UnifiedGrid props interface
export interface UnifiedGridProps extends VSGridProps {
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
 * UnifiedGrid - The main grid component that handles all grid types
 *
 * This component uses configuration-driven rendering to support multiple
 * grid types while maintaining a consistent API.
 */
const UnifiedGrid = React.forwardRef<
	HTMLDivElement,
	UnifiedGridProps
>(
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
			styles.unifiedGrid,
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
			<div
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
						<div
							key={word}
							style={{ position: 'relative' }}
						>
							<UnifiedButton
								kind='word'
								word={word}
								isSelected={isSelected}
								isLocked={isWordLocked}
								onClick={
									isInteractive ?
										() => onSelect?.(word)
									:	undefined
								}
								className={cellClasses}
								style={
									isPreview ?
										{
											background:
												'rgb(253.8571428571, 240.7142857143, 188.1428571429)',
											color: '#1e293b',
											borderColor: '#fde047',
											boxShadow:
												'0 0 0 3px rgba(253, 224, 71, 0.3333333333), 0 4px 16px 0 rgba(56, 189, 248, 0.3333333333)',
											transform:
												'translateY(-2px) scale(1.03)',
											zIndex: 2,
										}
									:	undefined
								}
								tabIndex={isInteractive ? 0 : -1}
							/>

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
						</div>
					);
				})}
			</div>
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
		<div
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

						// Parse title to extract category name and player/bot indicator
						const parseTitle = (title: string) => {
							const match = title.match(
								/^(.+?)\s*\((.+?)\)$/
							);
							if (match) {
								const categoryName = match[1].trim();
								const indicator = match[2].trim();
								return { categoryName, indicator };
							}
							return {
								categoryName: title,
								indicator: null,
							};
						};

						const { categoryName, indicator } =
							parseTitle(fullTitle);

						// Determine pill type and style
						const getPillProps = (
							indicator: string | null
						) => {
							if (!indicator) return null;

							if (indicator.toLowerCase() === 'bot') {
								return { text: 'BOT', className: 'bot' };
							} else if (
								indicator.toLowerCase() === 'player'
							) {
								return {
									text: 'PLAYER',
									className: 'player',
								};
							} else {
								// Username - alternate colors for different players
								const isAlternate = groupIdx % 2 === 1;
								return {
									text: indicator,
									className:
										isAlternate ? 'username-alt' : (
											'username'
										),
								};
							}
						};

						const pillProps = getPillProps(indicator);

						return (
							<li
								className={styles.categoryGroup}
								key={groupIdx}
								data-level={groupIdx}
							>
								<div
									className={`${styles.categoryTitle} ${styles.textFadeIn}`}
								>
									<span
										className={styles.categoryTitleText}
									>
										{categoryName}
									</span>
									{pillProps && (
										<span
											className={`${styles.playerPill} ${styles[pillProps.className]}`}
										>
											{pillProps.text}
										</span>
									)}
								</div>
								<ol className={styles.cardList}>
									{wordsArray.map((word) => (
										<li
											className={`${styles.cardItem} ${styles.textFadeIn}`}
											key={word}
										>
											{word}
										</li>
									))}
								</ol>
							</li>
						);
					})}
			</ol>
		</div>
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
		<div
			ref={ref}
			className={gridClasses}
			style={gridStyle}
			{...props}
		>
			{words.map((word, idx) => (
				<div
					key={idx}
					className={styles.pregameCellLockout}
				>
					<span>×</span>
				</div>
			))}
		</div>
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

UnifiedGrid.displayName = 'UnifiedGrid';

export default UnifiedGrid;
