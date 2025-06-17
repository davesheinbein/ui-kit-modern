import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackBanner, FeedbackBannerProps } from '../../components/FeedbackBanner';

const meta: Meta<typeof FeedbackBanner> = {
	title: 'Banners/FeedbackBanner',
	component: FeedbackBanner,
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
type Story = StoryObj<typeof FeedbackBanner>;

const Template = (args: FeedbackBannerProps) => <FeedbackBanner {...args} />;

export const Default: Story = {
	args: {},
};
Default.args = {
  message: 'This is a feedback message!',
};
