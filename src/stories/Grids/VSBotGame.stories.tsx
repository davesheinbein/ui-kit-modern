import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory, type GridKind } from '../../index';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/VSBotGame (DRY System)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'VSBotGame grid implemented using the DRY Grid system with bot difficulty configurations and game state management.',
			},
		},
	},
	argTypes: {
		kind: {
			control: { type: 'select' },
			options: [
				'vs-bot',
				'vs-grid',
				'vs-multiplayer',
			] as GridKind[],
		},
		botDifficulty: {
			control: { type: 'select' },
			options: ['easy', 'medium', 'hard'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof GridFactory>;

// Sample words for demonstrations
const sampleWords = [
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

// VSBot Grid with Medium Difficulty
export const MediumBot: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'medium',
		words: sampleWords,
		selected: ['APPLE', 'CIRCLE'],
		playerId: 'user1',
	},
};

// VSBot Grid with Easy Difficulty
export const EasyBot: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'easy',
		words: sampleWords,
		selected: ['BANANA', 'SQUARE'],
		playerId: 'user1',
	},
};

// VSBot Grid with Hard Difficulty
export const HardBot: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'hard',
		words: sampleWords,
		selected: ['ORANGE', 'TRIANGLE'],
		playerId: 'user1',
		// Clean bot game without individual word badges
	},
};

// VSBot Grid with Multiple Selections
export const ActiveGame: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'medium',
		words: sampleWords,
		selected: ['APPLE', 'BANANA', 'ORANGE'],
		locked: ['GRAPE'],
		playerId: 'user1',
		// Active game state without individual badges
	},
};

// VSBot Grid with Custom Configuration
export const CustomConfig: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'medium',
		words: sampleWords,
		selected: ['APPLE'],
		playerId: 'user1',
		overrideConfig: {
			layout: { rows: 4, cols: 4, gap: 16 },
			styling: { background: '#f0f8ff', borderRadius: 12 },
		},
	},
};

// VSBot Grid showing solved groups with badges
export const WithSolvedGroups: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'hard',
		words: [
			// Remaining words after some groups were solved
			'RED',
			'BLUE',
			'GREEN',
			'YELLOW',
			'CAR',
			'BIKE',
			'PLANE',
			'BOAT',
		],
		selected: ['RED', 'BLUE'], // Current player selection
		playerId: 'user1',
		playerColor: '#3b82f6', // Blue for player
		opponentColor: '#ef4444', // Red for bot
		// No solvedBy on main grid - solved groups should be shown separately
	},
};

// VSBot Grid with Bot Solved Groups (clean gameplay without individual badges)
export const BotSolvedGroups: Story = {
	args: {
		kind: 'vs-bot' as GridKind,
		botDifficulty: 'hard',
		words: sampleWords,
		selected: ['APPLE', 'BANANA'], // Player's current selection
		playerId: 'user1',
		playerColor: '#3b82f6',
		opponentColor: '#ef4444',
		// No individual word badges - this is clean gameplay
	},
};

// Demonstration of proper Connections game flow with solved groups
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
					kind='vs-bot'
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
};
