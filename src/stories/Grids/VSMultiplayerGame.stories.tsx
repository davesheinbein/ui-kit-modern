import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory, type GridKind } from '../../index';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/VSMultiplayerGame (DRY System)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'VSMultiplayerGame grid implemented using the DRY Grid system with multiplayer configurations and real-time game state.',
			},
		},
	},
	argTypes: {
		kind: {
			control: { type: 'select' },
			options: [
				'vs-multiplayer',
				'vs-grid',
				'vs-bot',
			] as GridKind[],
		},
		playerColor: {
			control: 'color',
		},
		opponentColor: {
			control: 'color',
		},
	},
};

export default meta;
type Story = StoryObj<typeof GridFactory>;

// Sample words for demonstrations
const sampleWords = [
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

// VS Multiplayer Grid - Normal Mode
export const NormalMode: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: sampleWords,
		selected: ['FOREST', 'PIANO'],
		opponentSelected: ['SUMMER', 'THUNDER'],
		playerId: 'player1',
		opponentId: 'player2',
		playerColor: '#2563eb',
		opponentColor: '#ef4444',
	},
};

// VS Multiplayer Grid - High Competition
export const HighCompetition: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: sampleWords,
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

// VS Multiplayer Grid - Different Colors
export const CustomColors: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: sampleWords,
		selected: ['VIOLIN', 'DRUMS'],
		opponentSelected: ['SPRING', 'AUTUMN'],
		playerId: 'player1',
		opponentId: 'player2',
		playerColor: '#8b5cf6',
		opponentColor: '#06b6d4',
	},
};

// VS Multiplayer Grid - Solved Groups
export const WithSolvedGroups: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: sampleWords,
		selected: ['RAINBOW'],
		opponentSelected: ['CLOUDS'],
		solvedBy: {
			player1: ['FOREST', 'OCEAN', 'MOUNTAIN', 'DESERT'],
			player2: ['PIANO', 'GUITAR', 'VIOLIN', 'DRUMS'],
		},
		playerId: 'player1',
		opponentId: 'player2',
	},
};

// VS Multiplayer Grid - With Custom Styling
export const CustomStyling: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: sampleWords,
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

// VS Multiplayer Grid - Large Grid Layout
export const LargeGrid: Story = {
	args: {
		kind: 'vs-multiplayer' as GridKind,
		words: [
			...sampleWords,
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
};
