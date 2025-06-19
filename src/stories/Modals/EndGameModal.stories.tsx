import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const EndGameModalWrapper = ({
	open,
	onClose,
	message,
	score,
	attemptsLeft,
	burnBonus,
	win,
	onShare,
	finishTime,
}: {
	open: boolean;
	onClose: () => void;
	message: string;
	score: number;
	attemptsLeft: number;
	burnBonus: number;
	win: boolean;
	onShare: () => void;
	finishTime?: string;
}) => {
	return (
		<ModalFactory
			kind='end-game'
			open={open}
			title={win ? 'Congratulations!' : 'Game Over'}
			onClose={onClose}
			onConfirm={onShare}
			confirmText='Share'
		>
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<p
					style={{
						marginBottom: '1rem',
						fontSize: '1.1rem',
					}}
				>
					{message}
				</p>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '1rem',
						marginBottom: '1rem',
					}}
				>
					<div>
						<strong>Score:</strong> {score}
					</div>
					<div>
						<strong>Attempts Left:</strong> {attemptsLeft}
					</div>
					<div>
						<strong>Burn Bonus:</strong> {burnBonus}
					</div>
					{finishTime && (
						<div>
							<strong>Time:</strong> {finishTime}
						</div>
					)}
				</div>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof EndGameModalWrapper> = {
	title: 'Modals/End Game (Modal)',
	component: EndGameModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Modal component displayed at the end of a game, showing final scores, stats, and actions. Now powered by the DRY modal system.',
			},
		},
	},
	argTypes: {
		message: {
			control: 'text',
			description: 'End game message to display',
		},
		score: {
			control: 'number',
			description: 'Final score achieved',
		},
		attemptsLeft: {
			control: 'number',
			description: 'Number of attempts remaining',
		},
		burnBonus: {
			control: 'number',
			description: 'Bonus points from burn actions',
		},
		win: {
			control: 'boolean',
			description: 'Whether the player won or lost',
		},
		onShare: {
			action: 'shared',
			description:
				'Function called when share button is clicked',
		},
		finishTime: {
			control: 'text',
			description: 'Optional finish time to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof EndGameModalWrapper>;

export const Victory: Story = {
	args: {
		message: 'Congratulations! You solved the puzzle!',
		score: 1200,
		attemptsLeft: 3,
		burnBonus: 100,
		win: true,
		onShare: () => {},
		finishTime: '2:35',
	},
};

export const Defeat: Story = {
	args: {
		message: 'Better luck next time!',
		score: 650,
		attemptsLeft: 0,
		burnBonus: 0,
		win: false,
		onShare: () => {},
		finishTime: '5:00',
	},
};

export const PerfectGame: Story = {
	args: {
		message: 'Perfect game! No mistakes!',
		score: 2000,
		attemptsLeft: 4,
		burnBonus: 500,
		win: true,
		onShare: () => {},
		finishTime: '1:42',
	},
};

export const WithoutFinishTime: Story = {
	args: {
		message: 'Game completed!',
		score: 800,
		attemptsLeft: 2,
		burnBonus: 50,
		win: true,
		onShare: () => {},
	},
};
