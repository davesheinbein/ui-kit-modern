import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory } from '../../components/Grid';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/VSGrid (Unified VS System)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified VS mode grid system using the DRY Grid. Handles all competitive scenarios: bot games, multiplayer games, and general VS modes with dynamic styling and behavior.',
			},
		},
	},
	argTypes: {
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
		onSelect: {
			action: 'wordSelected',
			description:
				'Function called when a word is selected',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		playerId: 'player1',
		opponentId: 'player2',
	},
};

export const WithSolvedWords: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'VS grid showing words solved by each player.',
			},
		},
	},
};

export const PreviewMode: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		playerId: 'player1',
		opponentId: 'player2',
		preview: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'VS grid in preview mode (non-interactive).',
			},
		},
	},
};

export const WithWildcards: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		wildcards: ['DUCK', 'GOOSE'],
		playerId: 'player1',
		opponentId: 'player2',
	},
	parameters: {
		docs: {
			description: {
				story: 'VS grid with wildcard words highlighted.',
			},
		},
	},
};

export const CustomColors: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'VS grid with custom player and opponent colors.',
			},
		},
	},
};

// ===== BOT GAME STORIES =====
// Bot games use botDifficulty prop and no opponentId

// Sample words for bot game demonstrations
const botGameWords = [
	'APPLE',
	'BANANA',
	'ORANGE',
	'GRAPE',
	'CIRCLE',
	'SQUARE',
	'TRIANGLE',
	'OVAL',
	'RED',
	'BLUE',
	'GREEN',
	'YELLOW',
	'CAR',
	'BIKE',
	'PLANE',
	'BOAT',
];

export const BotEasy: Story = {
	args: {
		kind: 'vs-grid',
		words: botGameWords,
		selected: ['BANANA', 'SQUARE'],
		playerId: 'user1',
		botDifficulty: 'easy',
	},
	parameters: {
		docs: {
			description: {
				story:
					'VS Grid in bot mode with easy difficulty. Shows "VS BOT" styling.',
			},
		},
	},
};

export const BotMedium: Story = {
	args: {
		kind: 'vs-grid',
		words: botGameWords,
		selected: ['APPLE', 'CIRCLE'],
		playerId: 'user1',
		botDifficulty: 'medium',
	},
	parameters: {
		docs: {
			description: {
				story:
					'VS Grid in bot mode with medium difficulty.',
			},
		},
	},
};

export const BotHard: Story = {
	args: {
		kind: 'vs-grid',
		words: botGameWords,
		selected: ['ORANGE', 'TRIANGLE'],
		playerId: 'user1',
		botDifficulty: 'hard',
	},
	parameters: {
		docs: {
			description: {
				story: 'VS Grid in bot mode with hard difficulty.',
			},
		},
	},
};

export const BotActiveGame: Story = {
	args: {
		kind: 'vs-grid',
		words: botGameWords,
		selected: ['APPLE', 'BANANA', 'ORANGE'],
		locked: ['GRAPE'],
		playerId: 'user1',
		botDifficulty: 'medium',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Active bot game with multiple selections and locked words.',
			},
		},
	},
};

// ===== MULTIPLAYER GAME STORIES =====
// Multiplayer games use both playerId and opponentId

// Sample words for multiplayer demonstrations
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

export const MultiplayerBasic: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Basic multiplayer VS Grid with opponent selections. Shows "VS PLAYER" styling.',
			},
		},
	},
};

export const MultiplayerCompetitive: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Competitive multiplayer game with multiple selections from both players.',
			},
		},
	},
};

export const MultiplayerWithSolvedGroups: Story = {
	args: {
		kind: 'vs-grid',
		words: multiplayerWords,
		selected: ['RAINBOW'],
		opponentSelected: ['CLOUDS'],
		solvedBy: {
			player1: ['FOREST', 'OCEAN', 'MOUNTAIN', 'DESERT'],
			player2: ['PIANO', 'GUITAR', 'VIOLIN', 'DRUMS'],
		},
		playerId: 'player1',
		opponentId: 'player2',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Multiplayer game showing solved groups (for demonstration - normally would be in separate display).',
			},
		},
	},
};

export const MultiplayerLargeGrid: Story = {
	args: {
		kind: 'vs-grid',
		words: [
			...multiplayerWords,
			'EAGLE',
			'HAWK',
			'SPARROW',
			'ROBIN',
			'ROSE',
			'TULIP',
			'DAISY',
			'LILY',
			'COPPER',
			'SILVER',
			'GOLD',
			'PLATINUM',
			'MARS',
			'VENUS',
			'JUPITER',
			'SATURN',
			'MYSTERY1',
			'MYSTERY2',
		],
		selected: ['FOREST', 'EAGLE', 'ROSE'],
		opponentSelected: ['PIANO', 'HAWK', 'TULIP'],
		playerId: 'player1',
		opponentId: 'player2',
		overrideConfig: {
			layout: {
				rows: 6,
				cols: 6,
				gap: 16,
				maxWidth: 600,
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Large 6x6 multiplayer grid with custom layout configuration.',
			},
		},
	},
};

export const MultiplayerCustomStyling: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Multiplayer grid with custom gradient background styling.',
			},
		},
	},
};

// ===== UNIFIED DEMO STORY =====

export const UnifiedVSDemo: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
			}}
		>
			<div>
				<h3
					style={{ margin: '0 0 15px 0', color: '#2563eb' }}
				>
					Bot Game (VS BOT styling)
				</h3>
				<GridFactory
					kind='vs-grid'
					words={[
						'APPLE',
						'BANANA',
						'ORANGE',
						'GRAPE',
						'RED',
						'BLUE',
						'GREEN',
						'YELLOW',
					]}
					selected={['APPLE', 'BANANA']}
					playerId='user1'
					botDifficulty='medium'
				/>
			</div>
			<div>
				<h3
					style={{ margin: '0 0 15px 0', color: '#2563eb' }}
				>
					Multiplayer Game (VS PLAYER styling)
				</h3>
				<GridFactory
					kind='vs-grid'
					words={[
						'FOREST',
						'OCEAN',
						'MOUNTAIN',
						'DESERT',
						'PIANO',
						'GUITAR',
						'VIOLIN',
						'DRUMS',
					]}
					selected={['FOREST', 'OCEAN']}
					opponentSelected={['PIANO', 'GUITAR']}
					playerId='player1'
					opponentId='player2'
				/>
			</div>
			<div>
				<h3
					style={{ margin: '0 0 15px 0', color: '#2563eb' }}
				>
					Basic VS Grid (no special styling)
				</h3>
				<GridFactory
					kind='vs-grid'
					words={[
						'WORD1',
						'WORD2',
						'WORD3',
						'WORD4',
						'WORD5',
						'WORD6',
						'WORD7',
						'WORD8',
					]}
					selected={['WORD1', 'WORD2']}
					playerId='player1'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstration of the unified VS Grid system showing all three modes: bot game, multiplayer, and basic VS grid with their respective styling.',
			},
		},
	},
};

// ===== PROPER GAME FLOW DEMO =====

export const ProperGameFlow: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			<div>
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
			</div>
			<div>
				<h3
					style={{ margin: '0 0 10px 0', color: '#2563eb' }}
				>
					Active Game Grid (no individual badges)
				</h3>
				<GridFactory
					kind='vs-grid'
					botDifficulty='hard'
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
			</div>
		</div>
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
