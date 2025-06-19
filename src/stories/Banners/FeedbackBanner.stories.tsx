import type { Meta, StoryObj } from '@storybook/react';
import { BannerFactory } from '../../components/Banner';

const meta: Meta<typeof BannerFactory> = {
	title: 'Banners/Feedback (Banners)',
	component: BannerFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Feedback banner for displaying game completion messages and user feedback.',
			},
		},
	},
	argTypes: {
		message: {
			control: 'text',
			description: 'Feedback message to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BannerFactory>;

export const Default: Story = {
	args: {
		kind: 'feedback',
		message: 'This is a feedback message!',
	},
};

export const EmptyMessage: Story = {
	args: {
		kind: 'feedback',
		message: '',
	},
};

export const LongMessage: Story = {
	args: {
		kind: 'feedback',
		message:
			'Congratulations! You have successfully completed the puzzle game with an amazing performance. Keep up the great work!',
	},
};
