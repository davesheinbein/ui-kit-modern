import React from 'react';
import Board from './Sub/Board';
import styles from './gameboards.module.scss';

/**
 * Configuration for a single gameboard instance.
 * @template TConfig - The type of the config object for the board type.
 */

// Standardized props for all boards
export interface GameBoardProps {
	/**
	 * Optional className for board root
	 */
	className?: string;
	/**
	 * Optional style for board root
	 */
	style?: React.CSSProperties;
	/**
	 * Board variant for theming (e.g., 'square-grid', 'hex-grid', etc.)
	 */
	variant?: string;
	/**
	 * Dynamic sizing/layout (e.g., cellSize, boardSize, etc.)
	 */
	[key: string]: any;
}

export interface GameboardConfig<
	TConfig = Record<string, any>,
> {
	/**
	 * The type of board to render (e.g., 'square-grid', 'hex-grid', etc.)
	 */
	type: string;
	/**
	 * The configuration object for the board type. Shape depends on board type.
	 */
	config: TConfig;
	/**
	 * Optional className for the board instance
	 */
	className?: string;
	/**
	 * Optional style for the board instance
	 */
	style?: React.CSSProperties;
}

/**
 * Props for the Gameboards component.
 */
export interface GameboardsProps {
	/**
	 * Array of board configurations to render. Each config specifies a board type and its props.
	 * If not provided, defaults to BOARD_CONFIGS.
	 */
	boards?: GameboardConfig[];
	/**
	 * Theme for the boards: 'light', 'dark', or 'auto'.
	 * @default 'auto'
	 */
	theme?: 'light' | 'dark' | 'auto';
	/**
	 * Optional className for the wrapper.
	 */
	className?: string;
	/**
	 * Optional style for the wrapper.
	 */
	style?: React.CSSProperties;
}

/**
 * Default board configurations for demo and Storybook usage.
 * Each config is type-safe and documented for Storybook argTypes.
 */
export const BOARD_CONFIGS: GameboardConfig[] = [
	{
		type: 'square-grid',
		config: {
			size: 3,
			cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
		},
	},
	{
		type: 'rectangular-grid',
		config: {
			rows: 4,
			columns: 4,
			cells: Array(16).fill(''),
		},
	},
	{
		type: 'hex-grid',
		config: { hexes: Array(19).fill({}) },
	},
	{
		type: 'triangular-grid',
		config: { triangles: Array(9).fill({}) },
	},
	{
		type: 'isometric-grid',
		config: { cells: Array(9).fill({}) },
	},
	{
		type: 'blocked-terrain-grid',
		config: {
			grid: Array(16).fill({}),
			blockedCells: [2, 5, 9],
		},
	},
	{
		type: 'teleportation-zone-grid',
		config: {
			grid: Array(16).fill({}),
			teleportZones: [3, 12],
		},
	},
	{
		type: 'elevation-grid',
		config: {
			grid: Array(16).fill({}),
			elevationMarkers: [1, 7, 14],
		},
	},
	{
		type: 'multi-zone-grid',
		config: {
			grid: Array(16).fill({}),
			zones: [
				[0, 1, 2],
				[3, 4, 5],
			],
			movementTypes: ['walk', 'fly'],
		},
	},
	{
		type: 'rotating-square-grid',
		config: { grid: Array(9).fill({}), rotation: 45 },
	},
	{
		type: 'modular-square-tile-grid',
		config: { tiles: [{ label: 'MS1' }, { label: 'MS2' }] },
	},
	{
		type: 'modular-hex-tile-board',
		config: {
			hexTiles: [{ label: 'MH1' }, { label: 'MH2' }],
		},
	},
	{
		type: 'fog-of-war-hidden-grid',
		config: {
			grid: Array(16).fill({}),
			fogCells: [4, 8, 12],
		},
	},
	{
		type: 'sliding-grid',
		config: {
			grid: Array(9).fill({}),
			slidingTiles: [1, 2, 3],
		},
	},
	{
		type: 'layered-grid',
		config: {
			layers: [Array(9).fill({}), Array(9).fill({})],
		},
	},
	{
		type: 'random-terrain-grid',
		config: {
			grid: Array(16).fill({}),
			terrainTypes: ['grass', 'water', 'mountain'],
		},
	},
	{
		type: 'expanding-grid',
		config: {
			grid: Array(9).fill({}),
			addOnTiles: [10, 11],
		},
	},
	{
		type: 'hidden-tile-flip-over-grid',
		config: {
			grid: Array(9).fill({}),
			hiddenTiles: [2, 5],
		},
	},
	{
		type: 'circular-grid',
		config: { cells: Array(12).fill({}) },
	},
	{
		type: 'spiral-grid',
		config: { cells: Array(12).fill({}) },
	},
	// Abstract / Symbolic Boards
	{
		type: 'word-letter-grid',
		config: { tiles: [{ label: 'W1' }, { label: 'W2' }] },
	},
	{
		type: 'dot-connection-board',
		config: {
			tiles: [{ label: 'Dot1' }, { label: 'Dot2' }],
		},
		// ...existing code...
	},
	// Tile & Card-Based Boards
	{
		type: 'tile-laying-terrain-board',
		config: {
			tiles: [{ label: 'Tile1' }, { label: 'Tile2' }],
		},
	},
	{
		type: 'room-tile-board-builder',
		config: {
			tiles: [{ label: 'Room1' }, { label: 'Room2' }],
		},
	},
	{
		type: 'card-based-landscape-grid',
		config: {
			tiles: [{ label: 'Card1' }, { label: 'Card2' }],
		},
	},
	{
		type: 'modular-room-dungeon-builder',
		config: {
			tiles: [{ label: 'Dungeon1' }, { label: 'Dungeon2' }],
		},
	},
	{
		type: 'area-reveals-shuffled-tiles',
		config: {
			tiles: [{ label: 'Area1' }, { label: 'Area2' }],
		},
	},
	{
		type: 'collapsing-board',
		config: {
			tiles: [
				{ label: 'Collapse1' },
				{ label: 'Collapse2' },
			],
		},
	},
	{
		type: 'time-event-card-row',
		config: {
			tiles: [{ label: 'Event1' }, { label: 'Event2' }],
		},
	},
	{
		type: 'tableau-building-layout-board',
		config: {
			tiles: [{ label: 'Tableau1' }, { label: 'Tableau2' }],
		},
	},
	{
		type: 'mystery-shuffle-reveal-board',
		config: {
			tiles: [{ label: 'Mystery1' }, { label: 'Mystery2' }],
		},
	},
	{
		type: 'evolving-card-grid',
		config: {
			tiles: [{ label: 'Evolve1' }, { label: 'Evolve2' }],
		},
	},
	// Themed Environment Boards
	{
		type: 'ship-layout-board',
		config: {
			tiles: [{ label: 'Deck1' }, { label: 'Deck2' }],
		},
	},
	{
		type: 'castle-multiple-rooms-board',
		config: {
			tiles: [{ label: 'Hall' }, { label: 'Chamber' }],
		},
	},
	{
		type: 'zoo-layout-wildlife-park-board',
		config: {
			tiles: [{ label: 'Lion' }, { label: 'Giraffe' }],
		},
	},
	{
		type: 'carnival-amusement-park-map',
		config: {
			tiles: [{ label: 'Ride1' }, { label: 'Ride2' }],
		},
	},
	{
		type: 'kitchen-restaurant-layout',
		config: {
			tiles: [{ label: 'Kitchen' }, { label: 'Dining' }],
		},
	},
	{
		type: 'science-lab-hazard-zones',
		config: {
			tiles: [{ label: 'Lab1' }, { label: 'Lab2' }],
		},
	},
	// Add more board configs as needed
];

const Gameboards: React.FC<GameboardsProps> = ({
	boards = BOARD_CONFIGS,
	theme = 'auto',
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={[
				styles.gameboardsContainer || 'gameboardsContainer',
				className,
			]
				.filter(Boolean)
				.join(' ')}
			style={style}
			data-theme={theme}
			{...props}
		>
			{boards.map((board: GameboardConfig, idx: number) => {
				// Compose board props: config + className + style + variant
				const boardProps: GameBoardProps = {
					...board.config,
					className: [
						'gameboard',
						styles[`gameboard--${board.type}`] ||
							`gameboard--${board.type}`,
						board.className,
					]
						.filter(Boolean)
						.join(' '),
					style: board.style,
					variant: board.type,
				};
				return (
					<Board
						key={idx}
						boardType={board.type}
						boardProps={boardProps}
					/>
				);
			})}
		</div>
	);
};

export default Gameboards;
