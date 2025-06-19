import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const VSModeModalWrapper = ({
	open,
	onClose,
	onSelect,
}: {
	open: boolean;
	onClose: () => void;
	onSelect: (mode: string) => void;
}) => {
	return (
		<ModalFactory
			kind='vs-mode'
			open={open}
			title='Choose VS Mode'
			onClose={onClose}
		>
			<div style={{ padding: '1rem 0' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<button
						onClick={() => onSelect('quickPlay')}
						style={{
							padding: '1rem',
							backgroundColor: '#007bff',
							color: 'white',
							border: 'none',
							borderRadius: '8px',
							fontSize: '1.1rem',
							cursor: 'pointer',
							textAlign: 'left',
						}}
					>
						<div
							style={{
								fontWeight: 'bold',
								marginBottom: '0.25rem',
							}}
						>
							Quick Play
						</div>
						<div
							style={{ fontSize: '0.9rem', opacity: 0.9 }}
						>
							Jump into a game with random opponents
						</div>
					</button>

					<button
						onClick={() => onSelect('createRoom')}
						style={{
							padding: '1rem',
							backgroundColor: '#28a745',
							color: 'white',
							border: 'none',
							borderRadius: '8px',
							fontSize: '1.1rem',
							cursor: 'pointer',
							textAlign: 'left',
						}}
					>
						<div
							style={{
								fontWeight: 'bold',
								marginBottom: '0.25rem',
							}}
						>
							Create Room
						</div>
						<div
							style={{ fontSize: '0.9rem', opacity: 0.9 }}
						>
							Create a private room for friends
						</div>
					</button>

					<button
						onClick={() => onSelect('joinRoom')}
						style={{
							padding: '1rem',
							backgroundColor: '#ffc107',
							color: '#212529',
							border: 'none',
							borderRadius: '8px',
							fontSize: '1.1rem',
							cursor: 'pointer',
							textAlign: 'left',
						}}
					>
						<div
							style={{
								fontWeight: 'bold',
								marginBottom: '0.25rem',
							}}
						>
							Join Room
						</div>
						<div
							style={{ fontSize: '0.9rem', opacity: 0.8 }}
						>
							Enter a room code to join friends
						</div>
					</button>
				</div>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof VSModeModalWrapper> = {
	title: 'Modals/VS Mode (Modal)',
	component: VSModeModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal for selecting versus game mode options. Now powered by the DRY modal system.',
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
		onSelect: {
			action: 'selected',
			description:
				'Function called when a mode is selected',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VSModeModalWrapper>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
		onSelect: () => {},
	},
};
