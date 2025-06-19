import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/VS Status Bar (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'VS (Versus) Status Bar for displaying player statistics during multiplayer games.',
			},
		},
	},
	argTypes: {
		player: {
			control: 'object',
			description:
				'Player data including username, avatar, groups solved, and mistakes',
		},
		opponent: {
			control: 'object',
			description:
				'Opponent data including username, avatar, groups solved, and mistakes',
		},
		timer: {
			control: 'text',
			description: 'Game timer display (e.g., "02:45")',
		},
		totalGroups: {
			control: 'number',
			description: 'Total number of groups in the game',
		},
		showMistakes: {
			control: 'boolean',
			description: 'Whether to show mistake counts',
		},
		showTimer: {
			control: 'boolean',
			description: 'Whether to show the timer',
		},
		onEmoteClick: {
			action: 'emote clicked',
			description: 'Callback when emote button is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

export const Default: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Player1',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 2,
			mistakes: 1,
			isYou: true,
		},
		opponent: {
			username: 'Player2',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 1,
			mistakes: 0,
		},
		timer: '02:45',
		totalGroups: 4,
		onEmoteClick: () => console.log('Emote clicked'),
	},
};

export const SinglePlayer: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Solo Player',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 3,
			mistakes: 2,
			isYou: true,
		},
		timer: '01:30',
		totalGroups: 4,
		showMistakes: true,
		showTimer: true,
	},
};

export const WithoutAvatars: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Player1',
			groupsSolved: 2,
			mistakes: 1,
			isYou: true,
		},
		opponent: {
			username: 'Player2',
			groupsSolved: 3,
			mistakes: 0,
		},
		timer: '03:20',
		totalGroups: 4,
	},
};

export const HideMistakes: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Player1',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 1,
			mistakes: 3,
			isYou: true,
		},
		opponent: {
			username: 'Player2',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 2,
			mistakes: 1,
		},
		timer: '04:15',
		totalGroups: 4,
		showMistakes: false,
		showTimer: true,
	},
};

export const HideTimer: Story = {
	args: {
		kind: 'vs-status',
		player: {
			username: 'Player1',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 4,
			mistakes: 0,
			isYou: true,
		},
		opponent: {
			username: 'Player2',
			avatarUrl: 'https://via.placeholder.com/32',
			groupsSolved: 3,
			mistakes: 2,
		},
		totalGroups: 4,
		showMistakes: true,
		showTimer: false,
	},
};
