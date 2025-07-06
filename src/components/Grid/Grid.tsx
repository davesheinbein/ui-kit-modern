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
	kind: 'grid' | 'pregame' | 'solved';
	words?: string[];
	selected?: string[];
	locked?: string[];
	wildcards?: string[];
	onSelect?: (word: string) => void;
	gridSize?: { rows: number; cols: number };
	opponentSelected?: string[];
	playerColor?: string;
	opponentColor?: string;
	solvedBy?: Record<string, string[]>;
	playerId?: string;
	opponentId?: string;
	botDifficulty?: string;
	preview?: boolean;
	pendingSolvedGroups?: {
		groupIdx: number;
		words: string[];
	}[];
	activePuzzle?: { groupLabels?: string[] };

	isLocked?: boolean;
	className?: string;
	cellClassName?: string;
	categoryDirection?: 'row' | 'column';
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
	(
		{
			kind,
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
			isLocked = false,
			className = '',
			cellClassName = '',
			categoryDirection = 'column',
			...props
		},
		ref
	) => {
		if (!['grid', 'pregame', 'solved'].includes(kind)) {
			throw new Error(`Invalid Grid kind: ${kind}`);
		}

		if (kind === 'grid') {
			const isVSMode = !!(
				opponentSelected?.length ||
				(playerId && opponentId)
			);
			const isPreview = !!preview;

			const rows = gridSize?.rows ?? 4;
			const cols = gridSize?.cols ?? 4;
			const layout = {
				rows,
				cols,
				gap: 'var(--spacing-sm)',
				maxWidth: '480px',
				minHeight: '320px',
			};
			const gridClasses = [
				'Grid',
				isVSMode ? 'vs-mode' : '',
				isPreview ? 'preview' : '',
				className,
			]
				.filter(Boolean)
				.join(' ');

			const isInteractive = !preview && !isLocked && true;
			const isGridLocked = isLocked || false;

			let vsModeClass = '';
			if (isVSMode) {
				if (botDifficulty && !opponentId) {
					vsModeClass = styles['bot-mode'];
				} else if (opponentId && playerId !== opponentId) {
					vsModeClass = styles['multiplayer-mode'];
				}
			}

			return (
				<div
					ref={ref}
					{...props}
					className={`${styles.Grid} ${className}`}
					style={{
						display: 'grid',
						gridTemplateRows: `repeat(${rows}, 1fr)`,
						gridTemplateColumns: `repeat(${cols}, 1fr)`,
						gap: layout.gap,
						maxWidth: layout.maxWidth,
						minHeight: layout.minHeight,
						...props.style,
					}}
				>
					{words.map((word, i) => {
						const isSelected = selected.includes(word);
						const isWordLocked = locked.includes(word);
						const isWildcard = wildcards.includes(word);
						const isOpponent =
							opponentSelected.includes(word);

						let solvedByPlayer = null;
						for (const pid in solvedBy) {
							if (solvedBy[pid]?.includes(word)) {
								solvedByPlayer = pid;
							}
						}

						const cellClasses = [
							styles['grid-cell'],
							'',
							isInteractive ? styles.interactive : '',
							isSelected ? styles.selected : '',
							isWordLocked ? styles.locked : '',
							isWildcard ? styles.wildcard : '',
							isOpponent ? styles.opponent : '',
							solvedByPlayer === playerId ?
								styles['solved-by-player']
							:	'',
							solvedByPlayer === opponentId ?
								styles['solved-by-opponent']
							:	'',
							cellClassName,
						]
							.filter(Boolean)
							.join(' ');

						return (
							<div
								key={word}
								className={cellClasses}
								style={{ position: 'relative' }}
								onClick={
									isInteractive ?
										() => onSelect?.(word)
									:	undefined
								}
								tabIndex={isInteractive ? 0 : -1}
							>
								{word}
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
		} else if (kind === 'pregame') {
			const rows = gridSize?.rows ?? 4;
			const cols = gridSize?.cols ?? 4;
			const layout = {
				rows,
				cols,
				gap: 'var(--spacing-sm)',
				maxWidth: '480px',
				minHeight: '320px',
			};
			const gridClasses = [
				'Grid',
				'pregame-grid',
				className,
			]
				.filter(Boolean)
				.join(' ');

			const renderPregameLockout = (
				words: string[],
				layout: any,
				gridClasses: string,
				props: any,
				ref: React.Ref<HTMLDivElement>
			) => {
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
						className={`${styles.Grid} ${gridClasses}`}
						{...props}
						style={{ ...props.style, ...gridStyle }}
					>
						{words.map((word, idx) => (
							<div
								key={idx}
								className={styles['pregame-cell-lockout']}
							>
								<span>×</span>
							</div>
						))}
					</div>
				);
			};

			return renderPregameLockout(
				words,
				layout,
				gridClasses,
				{ ...props, kind: 'grid-container' },
				ref
			);
		} else if (kind === 'solved') {
			const gridClasses = ['Grid', 'solved', className]
				.filter(Boolean)
				.join(' ');

			const renderSolvedGroups = (
				pendingSolvedGroups: any[],
				activePuzzle: any,
				gridClasses: string,
				props: any,
				ref: React.Ref<HTMLDivElement>,
				gridSize?: { rows: number; cols: number },
				categoryDirection: 'row' | 'column' = 'column'
			) => {
				if (!pendingSolvedGroups.length) return null;

				const totalGroups =
					activePuzzle?.groupLabels?.length || 4;
				const foundGroups = pendingSolvedGroups.length;

				const cols = gridSize?.cols || 4;
				const solvedCategoriesStyle: React.CSSProperties = {
					display: 'grid',
					gridTemplateColumns: `repeat(${cols}, 1fr)`,
					gap: 'var(--spacing-md)',
					maxWidth: '100%',
				};

				return (
					<Wrapper
						ref={ref}
						className={`${styles['boardContainer']} ${gridClasses}`}
						{...props}
						style={{ ...props.style }}
					>
						<p className={styles['visuallyHidden']}>
							{foundGroups} categories solved
						</p>
						<ol
							className={styles['solvedCategories']}
							style={solvedCategoriesStyle}
						>
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
											className={styles['categoryGroup']}
											style={{
												display: 'flex',
												flexDirection: categoryDirection,
											}}
										>
											<div
												className={styles['categoryTitle']}
											>
												{fullTitle}
											</div>
											<ul className={styles['cardList']}>
												{wordsArray.map(
													(w: string, idx: number) => (
														<li
															key={idx}
															className={styles['cardItem']}
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

			return renderSolvedGroups(
				pendingSolvedGroups,
				activePuzzle,
				gridClasses,
				{ ...props, kind: 'grid-container' },
				ref,
				gridSize,
				categoryDirection
			);
		} else {
			return null;
		}
	}
);

export const createGridConfiguration = createGridConfig;

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

	const isBotGame = !!botDifficulty && !opponentId;
	const isMultiplayerGame =
		!!opponentId && playerId !== opponentId;

	if (
		isVSMode &&
		isMultiplayerGame &&
		isOpponent &&
		!solvedByPlayer
	) {
		overlays.push(
			<span
				key='opponent'
				className={styles['vsGhostOverlay']}
			>
				Opponent
			</span>
		);
	}

	if (isVSMode && solvedByPlayer) {
		const isPlayerSolved = solvedByPlayer === playerId;
		const label =
			isPlayerSolved ? 'You'
			: isBotGame ? 'Bot'
			: 'Opponent';

		overlays.push(
			<span
				key='solved'
				className={styles['vsSolvedBadge']}
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
