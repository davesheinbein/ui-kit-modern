// Grid types and interfaces
import type {
	GridConfiguration,
	ExtendedGridKind,
} from '../configurations';

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
	kind?: GridKind;
	words?: string[];
	selected?: string[];
	locked?: string[];
	wildcards?: string[];
	onSelect?: (word: string) => void;
	gridSize?: { rows: number; cols: number };
	className?: string;
	cellClassName?: string;
	interactive?: boolean;
	isLocked?: boolean;
	preview?: boolean;
	keyboardNavigation?: boolean;
	gap?: string;
	maxWidth?: string;
	minHeight?: string;
	backgroundColor?: string;
	borderRadius?: string | number;
	boxShadow?: string;
	padding?: string | number;
	cellRenderer?: (
		word: string,
		cellState: CellState,
		index: number
	) => React.ReactNode;
	showCellNumbers?: boolean;
	cellAlignment?: 'center' | 'left' | 'right';
	cellTextTransform?:
		| 'none'
		| 'uppercase'
		| 'lowercase'
		| 'capitalize';
	showOverlays?: boolean;
	overlayRenderer?: (
		word: string,
		cellState: CellState
	) => React.ReactNode;
	overlayPosition?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'center';
	opponentSelected?: string[];
	playerColor?: string;
	opponentColor?: string;
	solvedBy?: Record<string, string[]>;
	playerId?: string;
	opponentId?: string;
	botDifficulty?: string;
	showOpponentIndicators?: boolean;
	showSolvedBadges?: boolean;
	groups?: Array<{
		id: string | number;
		title: string;
		words: string[];
		color?: string;
		completed?: boolean;
	}>;
	groupDirection?: 'row' | 'column';
	groupRenderer?: (
		group: any,
		index: number
	) => React.ReactNode;
	showGroupTitles?: boolean;
	groupLayout?: 'list' | 'grid' | 'inline';
	showPlaceholders?: boolean;
	placeholderContent?: React.ReactNode;
	placeholderRenderer?: (index: number) => React.ReactNode;
	ariaLabel?: string;
	screenReaderText?: string;
	announceSelections?: boolean;
	pendingSolvedGroups?: {
		groupIdx: number;
		words: string[];
	}[];
	activePuzzle?: { groupLabels?: string[] };
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
