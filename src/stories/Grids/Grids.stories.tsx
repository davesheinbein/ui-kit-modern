import React from 'react';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';
import {
	GridFactory,
	type GridKind,
} from '../../components/Grid';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/Grids',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY grid component. Single component handles ALL grid types through the "kind" prop. ' +
					'Supports basic grids, game grids, VS modes (bot/multiplayer), pregame lockout, solved groups display, ' +
					'and specialized grid variants with configuration-driven approach.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'basic',
				'game',
				'preview',
				'locked',
				'vs-grid',
				'pregame-lockout',
				'solved-groups',
				'word-grid',
				'custom',
			],
			description: 'The type of grid to render',
		},
		words: {
			control: 'object',
			description: 'Array of words to display in the grid',
		},
		selected: {
			control: 'object',
			description: 'Array of currently selected words',
		},
		opponentSelected: {
			control: 'object',
			description: 'Array of words selected by opponent',
		},
		locked: {
			control: 'object',
			description: 'Array of locked words',
		},
		playerId: {
			control: 'text',
			description: 'ID of the current player',
		},
		opponentId: {
			control: 'text',
			description:
				'ID of the opponent (leave empty for bot games)',
		},
		botDifficulty: {
			control: { type: 'select' },
			options: ['easy', 'medium', 'hard'],
			description: 'Bot difficulty level (for bot games)',
		},
		playerColor: {
			control: 'color',
			description: 'Color for player indicators',
		},
		opponentColor: {
			control: 'color',
			description: 'Color for opponent/bot indicators',
		},
		gridSize: {
			control: 'object',
			description: 'Grid dimensions (rows and cols)',
		},
		pendingSolvedGroups: {
			control: 'object',
			description:
				'Array of solved groups with their words',
		},
		activePuzzle: {
			control: 'object',
			description: 'Puzzle data with group labels',
		},
		preview: {
			control: 'boolean',
			description: 'Whether grid is in preview mode',
		},
		isLocked: {
			control: 'boolean',
			description: 'Whether grid is locked',
		},
		onSelect: {
			action: 'wordSelected',
			description:
				'Function called when a word is selected',
		},
		overrideConfig: {
			control: 'object',
			description: 'Override configuration object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof GridFactory>;

// Sample data
const sampleWords = [
	'BOOK',
	'READ',
	'PAGE',
	'WORD',
	'SONG',
	'SING',
	'NOTE',
	'BEAT',
	'BLUE',
	'CYAN',
	'NAVY',
	'TEAL',
	'DUCK',
	'GOOSE',
	'SWAN',
	'CRANE',
];

const multiplayerWords = [
	'FOREST',
	'OCEAN',
	'MOUNTAIN',
	'DESERT',
	'PIANO',
	'GUITAR',
	'VIOLIN',
	'DRUMS',
	'SUMMER',
	'WINTER',
	'SPRING',
	'AUTUMN',
	'THUNDER',
	'LIGHTNING',
	'RAINBOW',
	'CLOUDS',
];

const sampleSolvedGroups = [
	{
		groupIdx: 0,
		words: ['BOOK', 'READ', 'PAGE', 'WORD'],
	},
	{
		groupIdx: 1,
		words: ['SONG', 'SING', 'NOTE', 'BEAT'],
	},
];

// ===== COMPREHENSIVE GRID OVERVIEW =====
export const AllGridTypesOverview: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<h2>Basic Grid Types</h2>
			<Wrapper
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<Wrapper>
					<h3>Basic Game Grid</h3>
					<GridFactory
						kind='game'
						words={sampleWords}
						selected={['BOOK', 'READ']}
						onSelect={() => {}}
					/>
				</Wrapper>
				<Wrapper>
					<h3>Preview Grid</h3>
					<GridFactory
						kind='preview'
						words={sampleWords}
						preview={true}
					/>
				</Wrapper>
				<Wrapper>
					<h3>Locked Grid</h3>
					<GridFactory
						kind='locked'
						words={sampleWords}
						isLocked={true}
					/>
				</Wrapper>
			</Wrapper>

			<h2>VS Mode Grids</h2>
			<Wrapper
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<Wrapper>
					<h3>VS Grid</h3>
					<GridFactory
						kind='vs-grid'
						words={sampleWords}
						selected={['BOOK', 'READ']}
						opponentSelected={['BLUE', 'CYAN']}
						playerId='player1'
						opponentId='player2'
						onSelect={() => {}}
					/>
				</Wrapper>
				<Wrapper>
					<h3>VS Bot Grid</h3>
					<GridFactory
						kind='vs-grid'
						words={sampleWords}
						selected={['SONG', 'SING']}
						playerId='player1'
						botDifficulty='medium'
						onSelect={() => {}}
					/>
				</Wrapper>
				<Wrapper>
					<h3>VS Multiplayer Grid</h3>
					<GridFactory
						kind='vs-grid'
						words={multiplayerWords}
						selected={['FOREST', 'PIANO']}
						opponentSelected={['SUMMER', 'THUNDER']}
						playerId='player1'
						opponentId='player2'
						onSelect={() => {}}
					/>
				</Wrapper>
			</Wrapper>

			<h2>Special Grid Types</h2>
			<Wrapper
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<Wrapper>
					<h3>Pregame Lockout</h3>
					<GridFactory
						kind='pregame-lockout'
						words={sampleWords}
						gridSize={{ rows: 4, cols: 4 }}
					/>
				</Wrapper>
				<Wrapper>
					<h3>Solved Groups Display</h3>
					<GridFactory
						kind='solved-groups'
						pendingSolvedGroups={sampleSolvedGroups}
						activePuzzle={{
							groupLabels: [
								'Reading',
								'Music',
								'Colors',
								'Birds',
							],
						}}
					/>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Overview of all available grid types in the DRY Grid system.',
			},
		},
	},
};

// ===== BASIC GRID STORIES =====
export const BasicGrid: Story = {
	args: {
		kind: 'game',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		locked: [],
	},
};

export const PreviewGrid: Story = {
	args: {
		kind: 'preview',
		words: sampleWords,
		preview: true,
	},
};

export const LockedGrid: Story = {
	args: {
		kind: 'locked',
		words: sampleWords,
		isLocked: true,
	},
};

// ===== VS GRID STORIES =====
export const VSGrid: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		playerId: 'player1',
		opponentId: 'player2',
	},
};

export const VSGridWithSolvedWords: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		solvedBy: {
			player1: ['BOOK', 'READ', 'PAGE', 'WORD'],
			player2: ['SONG', 'SING'],
		},
		playerId: 'player1',
		opponentId: 'player2',
	},
};

export const VSGridCustomColors: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		playerColor: '#10b981',
		opponentColor: '#f59e0b',
		playerId: 'player1',
		opponentId: 'player2',
	},
};

// ===== VS BOT GAME STORIES =====
export const VSBotEasy: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BANANA', 'SQUARE'],
		playerId: 'user1',
		botDifficulty: 'easy',
	},
};

export const VSBotMedium: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['APPLE', 'CIRCLE'],
		playerId: 'user1',
		botDifficulty: 'medium',
	},
};

export const VSBotHard: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['ORANGE', 'TRIANGLE'],
		playerId: 'user1',
		botDifficulty: 'hard',
	},
};

export const VSBotActiveGame: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ', 'PAGE'],
		locked: ['WORD'],
		playerId: 'user1',
		botDifficulty: 'medium',
	},
};

// ===== VS MULTIPLAYER STORIES =====
export const VSMultiplayerBasic: Story = {
	args: {
		kind: 'vs-grid',
		words: multiplayerWords,
		selected: ['FOREST', 'PIANO'],
		opponentSelected: ['SUMMER', 'THUNDER'],
		playerId: 'player1',
		opponentId: 'player2',
		playerColor: '#2563eb',
		opponentColor: '#ef4444',
	},
};

export const VSMultiplayerCompetitive: Story = {
	args: {
		kind: 'vs-grid',
		words: multiplayerWords,
		selected: ['FOREST', 'OCEAN', 'PIANO', 'GUITAR'],
		opponentSelected: [
			'SUMMER',
			'WINTER',
			'THUNDER',
			'LIGHTNING',
		],
		locked: ['MOUNTAIN'],
		playerId: 'player1',
		opponentId: 'player2',
		playerColor: '#10b981',
		opponentColor: '#f59e0b',
	},
};

export const VSMultiplayerCustomStyling: Story = {
	args: {
		kind: 'vs-grid',
		words: multiplayerWords,
		selected: ['FOREST'],
		opponentSelected: ['PIANO'],
		playerId: 'player1',
		opponentId: 'player2',
		overrideConfig: {
			styling: {
				background:
					'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				borderRadius: 20,
			},
		},
	},
};

// ===== PREGAME LOCKOUT STORIES =====
export const PregameLockoutDefault: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(16)
			.fill('')
			.map((_, i) => `WORD${i + 1}`),
		gridSize: { rows: 4, cols: 4 },
	},
};

export const PregameLockoutTwoByTwo: Story = {
	args: {
		kind: 'pregame-lockout',
		words: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
		gridSize: { rows: 2, cols: 2 },
	},
};

export const PregameLockoutThreeByThree: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(9)
			.fill('')
			.map((_, i) => `WORD${i + 1}`),
		gridSize: { rows: 3, cols: 3 },
	},
};

export const PregameLockoutCustomStyling: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(16)
			.fill('')
			.map((_, i) => `LOCK${i + 1}`),
		gridSize: { rows: 4, cols: 4 },
		overrideConfig: {
			layout: {
				rows: 4,
				cols: 4,
				gap: 16,
			},
			styling: {
				background: '#fefce8',
				borderRadius: 16,
				padding: 16,
			},
		},
	},
};

// ===== SOLVED GROUPS DISPLAY STORIES =====
export const SolvedGroupsDefault: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: [
			{
				groupIdx: 0,
				words: ['APPLE', 'BANANA', 'ORANGE', 'GRAPE'],
			},
			{
				groupIdx: 1,
				words: ['CIRCLE', 'SQUARE', 'TRIANGLE', 'OVAL'],
			},
		],
		activePuzzle: {
			groupLabels: ['FRUITS', 'SHAPES'],
		},
	},
};

export const SolvedGroupsCompleteGame: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: [
			{
				groupIdx: 0,
				words: ['COLD', 'GRAY', 'WET', 'WINDY'],
			},
			{
				groupIdx: 1,
				words: ['DEAD', 'EXACTLY', 'RIGHT', 'SMACK'],
			},
			{
				groupIdx: 2,
				words: ['ASTRONAUT', 'COFFEE', 'PEA', 'WHALE'],
			},
			{
				groupIdx: 3,
				words: ['BARM', 'LEAR', 'RANKLE', 'SHIP'],
			},
		],
		activePuzzle: {
			groupLabels: [
				'QUALITIES OF A RAINY DAY',
				'SQUARELY',
				'CONTENTS OF A POD',
				'BODY PART PLUS A STARTING LETTER',
			],
		},
	},
};

export const SolvedGroupsPlayerVsBot: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: [
			{
				groupIdx: 0,
				words: ['APPLE', 'BANANA', 'ORANGE', 'GRAPE'],
			},
			{
				groupIdx: 1,
				words: ['CIRCLE', 'SQUARE', 'TRIANGLE', 'OVAL'],
			},
			{
				groupIdx: 2,
				words: ['RED', 'BLUE', 'GREEN', 'YELLOW'],
			},
		],
		activePuzzle: {
			groupLabels: [
				'FRUITS (Player)',
				'SHAPES (Bot)',
				'COLORS (Player)',
			],
		},
	},
};

export const SolvedGroupsMultiplayer: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: [
			{
				groupIdx: 0,
				words: [
					'TWITTER',
					'FACEBOOK',
					'INSTAGRAM',
					'LINKEDIN',
				],
			},
			{
				groupIdx: 1,
				words: ['PYTHON', 'JAVASCRIPT', 'RUST', 'GOLANG'],
			},
			{
				groupIdx: 2,
				words: ['REACT', 'VUE', 'ANGULAR', 'SVELTE'],
			},
			{
				groupIdx: 3,
				words: ['VSCODE', 'SUBLIME', 'VIM', 'ATOM'],
			},
		],
		activePuzzle: {
			groupLabels: [
				'SOCIAL MEDIA PLATFORMS (codemaster_99)',
				'PROGRAMMING LANGUAGES (devqueen_42)',
				'FRONTEND FRAMEWORKS (codemaster_99)',
				'CODE EDITORS (devqueen_42)',
			],
		},
	},
};

// ===== COMPREHENSIVE SHOWCASE STORIES =====
export const GridSizesComparison: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				gap: '20px',
				flexWrap: 'wrap',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3 style={{ margin: '0 0 10px 0' }}>2x2 Grid</h3>
				<GridFactory
					kind='pregame-lockout'
					words={['WORD1', 'WORD2', 'WORD3', 'WORD4']}
					gridSize={{ rows: 2, cols: 2 }}
				/>
			</Wrapper>
			<Wrapper>
				<h3 style={{ margin: '0 0 10px 0' }}>3x3 Grid</h3>
				<GridFactory
					kind='pregame-lockout'
					words={Array(9)
						.fill('')
						.map((_, i) => `W${i + 1}`)}
					gridSize={{ rows: 3, cols: 3 }}
				/>
			</Wrapper>
			<Wrapper>
				<h3 style={{ margin: '0 0 10px 0' }}>
					4x4 Grid (Default)
				</h3>
				<GridFactory
					kind='pregame-lockout'
					words={Array(16)
						.fill('')
						.map((_, i) => `WORD${i + 1}`)}
					gridSize={{ rows: 4, cols: 4 }}
				/>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Comparison of different grid sizes using pregame lockout.',
			},
		},
	},
};

export const VSDemo: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3>VS Bot - Medium Difficulty</h3>
				<GridFactory
					kind='vs-grid'
					words={sampleWords.slice(0, 8)}
					selected={['BOOK', 'READ']}
					playerId='user1'
					botDifficulty='medium'
				/>
			</Wrapper>
			<Wrapper>
				<h3>VS Multiplayer - Player vs Player</h3>
				<GridFactory
					kind='vs-grid'
					words={multiplayerWords.slice(0, 8)}
					selected={['FOREST', 'OCEAN']}
					opponentSelected={['PIANO', 'GUITAR']}
					playerId='player1'
					opponentId='player2'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Basic VS Grid</h3>
				<GridFactory
					kind='vs-grid'
					words={sampleWords.slice(0, 8)}
					selected={['BLUE', 'CYAN']}
					playerId='player1'
				/>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstration of the  VS Grid system showing all three modes: bot game, multiplayer, and basic VS grid with their respective styling.',
			},
		},
	},
};

export const ProperGameFlow: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h3
					style={{ margin: '0 0 10px 0', color: '#2563eb' }}
				>
					Solved Groups (displayed separately)
				</h3>
				<GridFactory
					kind='solved-groups'
					pendingSolvedGroups={[
						{
							groupIdx: 0,
							words: ['APPLE', 'BANANA', 'ORANGE', 'GRAPE'],
						},
						{
							groupIdx: 1,
							words: [
								'CIRCLE',
								'SQUARE',
								'TRIANGLE',
								'OVAL',
							],
						},
					]}
					activePuzzle={{
						groupLabels: [
							'FRUITS (Player)',
							'SHAPES (Bot)',
						],
					}}
				/>
			</Wrapper>
			<Wrapper>
				<h3
					style={{ margin: '0 0 10px 0', color: '#2563eb' }}
				>
					Active Game Grid (no individual badges)
				</h3>
				<GridFactory
					kind='vs-grid'
					words={[
						'RED',
						'BLUE',
						'GREEN',
						'YELLOW',
						'CAR',
						'BIKE',
						'PLANE',
						'BOAT',
					]}
					selected={['RED', 'BLUE']}
					playerId='user1'
				/>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates proper Connections game flow: solved groups are displayed separately from the main game grid, which remains clean during active gameplay.',
			},
		},
	},
};

// ===== INTERACTIVE DEMOS =====
export const GridVariantsShowcase: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(320px, 1fr))',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h4 style={{ marginBottom: '0.5rem' }}>
					Basic Game Grid
				</h4>
				<GridFactory
					kind='game'
					words={sampleWords.slice(0, 8)}
					selected={['BOOK', 'READ']}
					onSelect={() => {}}
				/>
			</Wrapper>
			<Wrapper>
				<h4 style={{ marginBottom: '0.5rem' }}>
					VS Bot Grid
				</h4>
				<GridFactory
					kind='vs-grid'
					words={sampleWords.slice(0, 8)}
					selected={['SONG', 'SING']}
					playerId='player1'
					botDifficulty='medium'
				/>
			</Wrapper>
			<Wrapper>
				<h4 style={{ marginBottom: '0.5rem' }}>
					VS Multiplayer Grid
				</h4>
				<GridFactory
					kind='vs-grid'
					words={multiplayerWords.slice(0, 8)}
					selected={['FOREST']}
					opponentSelected={['PIANO']}
					playerId='player1'
					opponentId='player2'
				/>
			</Wrapper>
			<Wrapper>
				<h4 style={{ marginBottom: '0.5rem' }}>
					Pregame Lockout
				</h4>
				<GridFactory
					kind='pregame-lockout'
					words={Array(8)
						.fill('')
						.map((_, i) => `WORD${i + 1}`)}
					gridSize={{ rows: 2, cols: 4 }}
				/>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Showcase of different grid variants and their typical use cases.',
			},
		},
	},
};
