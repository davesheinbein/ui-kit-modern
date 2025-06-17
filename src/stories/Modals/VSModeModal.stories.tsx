import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSModeModal } from '../../components/VSModeModal';
import type { VSModeModalProps } from '../../components/VSModeModal/VSModeModal';

const meta: Meta<typeof VSModeModal> = {
	title: 'Modals/VSModeModal',
	component: VSModeModal,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal for selecting versus game mode options.',
			},
		},
	},
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether the modal is open/visible',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when the modal should be closed',
		},
		onStart: {
			action: 'started',
			description:
				'Function called when a mode is selected to start',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VSModeModal>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
		onStart: () => {},
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		onStart: () => {},
	},
};
