import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory } from '../../components/Grid';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/SolvedGroupsDisplay (Modern Grid Layout)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Solved groups display with modern grid-based layout, clean styling, and smooth animations. Features responsive auto-fit columns and difficulty-based color coding.',
			},
		},
	},
	argTypes: {
		pendingSolvedGroups: {
			control: 'object',
			description:
				'Array of solved groups with their words',
		},
		activePuzzle: {
			control: 'object',
			description: 'Puzzle data with group labels',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Basic solved groups display with two categories.',
			},
		},
	},
};

export const CompleteGame: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Complete game showing all four difficulty levels with NYT Connections-style color coding.',
			},
		},
	},
};

export const PartialProgress: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: [
			{
				groupIdx: 0,
				words: ['FOREST', 'OCEAN', 'MOUNTAIN', 'DESERT'],
			},
			{
				groupIdx: 2,
				words: ['PIANO', 'GUITAR', 'VIOLIN', 'DRUMS'],
			},
		],
		activePuzzle: {
			groupLabels: [
				'NATURAL LANDSCAPES',
				'WEATHER CONDITIONS',
				'MUSICAL INSTRUMENTS',
				'COOKING METHODS',
			],
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Partial game progress showing non-consecutive solved groups.',
			},
		},
	},
};

export const PlayerVsBot: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Bot vs Player game showing who solved which groups with pill badges.',
			},
		},
	},
};

export const PlayerVsPlayer: Story = {
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
				words: ['CAPITAL', 'CROWN', 'LEMON', 'ROYAL'],
			},
		],
		activePuzzle: {
			groupLabels: [
				'QUALITIES OF A RAINY DAY (alex_chen)',
				'SQUARELY (jordan_swift)',
				'MONARCHS (alex_chen)',
				'BODY PART PLUS A STARTING LETTER',
			],
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Multiplayer game between alex_chen and jordan_swift with username pill badges.',
			},
		},
	},
};

export const PlayerVsPlayerIntense: Story = {
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
	parameters: {
		docs: {
			description: {
				story:
					'Complete multiplayer game between codemaster_99 and devqueen_42 with alternating wins shown via colored username pills.',
			},
		},
	},
};
