import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PreGameModal } from '../../components/PreGameModal';
import type { PreGameModalProps } from '../../components/PreGameModal/PreGameModal';

const meta: Meta<typeof PreGameModal> = {
	title: 'Modals/PreGameModal',
	component: PreGameModal,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal shown before game starts with ready and go home options.',
			},
		},
	},
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether the modal is open/visible',
		},
		onReady: {
			action: 'ready',
			description: 'Function called when user clicks ready',
		},
		onGoHome: {
			action: 'goHome',
			description:
				'Function called when user clicks go home',
		},
	},
};

export default meta;
type Story = StoryObj<typeof PreGameModal>;

export const Default: Story = {
	args: {
		open: true,
		onReady: () => {},
		onGoHome: () => {},
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onReady: () => {},
		onGoHome: () => {},
	},
};
