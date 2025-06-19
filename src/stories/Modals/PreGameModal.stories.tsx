import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const PreGameModalWrapper = ({
	open,
	onReady,
	onGoHome,
}: {
	open: boolean;
	onReady: () => void;
	onGoHome: () => void;
}) => {
	return (
		<ModalFactory
			kind='pre-game'
			open={open}
			title='Ready to Play?'
			onClose={onGoHome}
			onConfirm={onReady}
			onCancel={onGoHome}
			confirmText='Ready!'
			cancelText='Go Home'
		>
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<p>
					Get ready for an exciting game! Click "Ready!"
					when you're prepared to start.
				</p>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof PreGameModalWrapper> = {
	title: 'Modals/Pre Game (Modal)',
	component: PreGameModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal shown before game starts with ready and go home options. Now powered by the DRY modal system.',
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
type Story = StoryObj<typeof PreGameModalWrapper>;

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
