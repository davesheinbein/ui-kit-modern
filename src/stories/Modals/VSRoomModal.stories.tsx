import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VSRoomModal } from '../../components/VSRoomModal';
import type { VSRoomModalProps } from '../../components/VSRoomModal/VSRoomModal';

const meta: Meta<typeof VSRoomModal> = {
	title: 'Modals/VSRoomModal',
	component: VSRoomModal,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal for joining versus game rooms with room code input.',
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
		onJoin: {
			action: 'joined',
			description:
				'Function called when joining a room with the room code',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VSRoomModal>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
		onJoin: () => {},
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		onJoin: () => {},
	},
};
