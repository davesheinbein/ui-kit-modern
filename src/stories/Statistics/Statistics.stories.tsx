import React from 'react';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Statistics,
	StatisticsProps,
} from '../../components/Statistics';

const meta: Meta<typeof Statistics> = {
	title: 'Statistics/Statistics',
	component: Statistics,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Component description to be updated.',
			},
		},
	},
	argTypes: {
		mode: {
			control: 'select',
			options: ['daily', 'vs', 'history'],
			description: 'Display mode for statistics',
		},
		stats: {
			control: 'object',
			description: 'Player statistics data object',
		},
		opponentStats: {
			control: 'object',
			description: 'Opponent statistics for VS mode',
			if: { arg: 'mode', eq: 'vs' },
		},
		globalStats: {
			control: 'object',
			description: 'Global statistics and rankings',
			if: { arg: 'mode', eq: 'daily' },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		style: {
			control: 'object',
			description: 'Inline styles for the component',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Statistics>;

const Template = (args: StatisticsProps) => (
	<Statistics {...args} />
);

export const Default: Story = {
	args: {
		stats: {
			total_matches_played: 42,
			vs_bot_matches_played: 18,
			vs_multiplayer_matches_played: 12,
			win_count: 25,
			loss_count: 17,
			perfect_puzzles: 7,
			longest_streak: 5,
			current_streak: 2,
			average_solve_time: 45,
			mistake_rate: 0.12,
			favorite_category: 'Animals',
			last_played_at: '2025-06-16T12:00:00Z',
			join_date: '2024-01-01T00:00:00Z',
		},
		mode: 'daily',
	},
};

export const DailyMode: Story = {
	args: {
		stats: {
			total_matches_played: 42,
			vs_bot_matches_played: 18,
			vs_multiplayer_matches_played: 12,
			win_count: 25,
			loss_count: 17,
			perfect_puzzles: 7,
			longest_streak: 5,
			current_streak: 2,
			average_solve_time: 45,
			mistake_rate: 0.12,
			favorite_category: 'Animals',
			last_played_at: '2025-06-16T12:00:00Z',
			join_date: '2024-01-01T00:00:00Z',
		},
		mode: 'daily',
		globalStats: {
			percentileRank: 85,
			leaderboardPosition: 156,
		},
	},
};

export const VSMode: Story = {
	args: {
		stats: {
			total_matches_played: 42,
			vs_bot_matches_played: 18,
			vs_multiplayer_matches_played: 12,
			win_count: 25,
			loss_count: 17,
			perfect_puzzles: 7,
			longest_streak: 5,
			current_streak: 2,
			average_solve_time: 45,
			mistake_rate: 0.12,
			favorite_category: 'Animals',
			last_played_at: '2025-06-16T12:00:00Z',
			join_date: '2024-01-01T00:00:00Z',
		},
		mode: 'vs',
		opponentStats: {
			total_matches_played: 38,
			vs_bot_matches_played: 22,
			vs_multiplayer_matches_played: 16,
			win_count: 28,
			loss_count: 10,
			perfect_puzzles: 9,
			longest_streak: 8,
			current_streak: 4,
			average_solve_time: 52,
			mistake_rate: 0.08,
			favorite_category: 'Technology',
			last_played_at: '2025-06-16T15:30:00Z',
			join_date: '2023-11-15T00:00:00Z',
		},
	},
};

export const HistoryMode: Story = {
	args: {
		stats: {
			total_matches_played: 156,
			vs_bot_matches_played: 89,
			vs_multiplayer_matches_played: 67,
			win_count: 124,
			loss_count: 32,
			perfect_puzzles: 23,
			longest_streak: 15,
			current_streak: 8,
			average_solve_time: 38,
			mistake_rate: 0.06,
			favorite_category: 'History',
			last_played_at: '2025-06-19T10:15:00Z',
			join_date: '2023-06-01T00:00:00Z',
		},
		mode: 'history',
	},
};
