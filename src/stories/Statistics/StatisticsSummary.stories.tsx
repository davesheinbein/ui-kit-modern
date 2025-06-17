import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	StatisticsSummary,
	StatisticsSummaryProps,
} from '../../components/Statistics';

const meta: Meta<typeof StatisticsSummary> = {
	title: 'Statistics/StatisticsSummary',
	component: StatisticsSummary,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Component description to be updated.',
			},
		},
	},
	argTypes: {
		// Add argTypes here
	},
};

export default meta;
type Story = StoryObj<typeof StatisticsSummary>;

const Template = (args: StatisticsSummaryProps) => (
	<StatisticsSummary {...args} />
);

export const Default: Story = {
	args: {},
};
Default.args = {
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
};
