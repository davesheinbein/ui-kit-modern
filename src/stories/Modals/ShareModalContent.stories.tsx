import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShareModalContent } from '../../components/ShareModalContent';

const meta: Meta<typeof ShareModalContent> = {
	title: 'Modals/ShareModalContent',
	component: ShareModalContent,
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
type Story = StoryObj<typeof ShareModalContent>;

const Template = (args) => (
	<ShareModalContent {...args}>
		Share something!
	</ShareModalContent>
);

export const Default: Story = {
	args: {},
};
