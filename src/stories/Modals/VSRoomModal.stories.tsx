import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const VSRoomModalWrapper = ({
	open,
	onClose,
	onJoin,
}: {
	open: boolean;
	onClose: () => void;
	onJoin: (roomCode: string) => void;
}) => {
	const [roomCode, setRoomCode] = useState('');

	const handleJoin = () => {
		if (roomCode.trim()) {
			onJoin(roomCode.trim());
		}
	};

	return (
		<ModalFactory
			kind='vs-room'
			open={open}
			title='Join Room'
			onClose={onClose}
			onConfirm={handleJoin}
			onCancel={onClose}
			confirmText='Join'
			cancelText='Cancel'
		>
			<div style={{ padding: '1rem 0' }}>
				<div style={{ marginBottom: '1.5rem' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '0.5rem',
							fontWeight: '600',
						}}
					>
						Room Code:
					</label>
					<input
						type='text'
						value={roomCode}
						onChange={(e) =>
							setRoomCode(e.target.value.toUpperCase())
						}
						placeholder='Enter room code...'
						style={{
							width: '100%',
							padding: '0.75rem',
							border: '2px solid #ddd',
							borderRadius: '6px',
							fontSize: '1rem',
							textAlign: 'center',
							letterSpacing: '0.1em',
							fontFamily: 'monospace',
						}}
						maxLength={6}
					/>
				</div>
				<div
					style={{
						fontSize: '0.9rem',
						color: '#666',
						textAlign: 'center',
					}}
				>
					Ask your friend for their room code to join their
					game.
				</div>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof VSRoomModalWrapper> = {
	title: 'Modals/VS Room (Modal)',
	component: VSRoomModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal for joining versus game rooms with room code input. Now powered by the DRY modal system.',
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
type Story = StoryObj<typeof VSRoomModalWrapper>;

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
