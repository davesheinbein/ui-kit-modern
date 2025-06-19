import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const RulesModalWrapper = ({
	open,
	onClose,
	columnCount = 4,
	mode = 'daily',
	wildcardsActive,
}: {
	open: boolean;
	onClose: () => void;
	columnCount?: number;
	mode?: 'daily' | 'custom' | 'multiplayer';
	wildcardsActive?: boolean;
}) => {
	return (
		<ModalFactory
			kind='rules'
			open={open}
			title='How to Play'
			onClose={onClose}
		>
			<div style={{ padding: '1rem 0', textAlign: 'left' }}>
				<div style={{ marginBottom: '1.5rem' }}>
					<h4
						style={{
							margin: '0 0 0.5rem 0',
							color: '#007bff',
						}}
					>
						Objective
					</h4>
					<p style={{ margin: '0 0 1rem 0' }}>
						Find groups of {columnCount} words that share
						something in common.
					</p>
				</div>

				<div style={{ marginBottom: '1.5rem' }}>
					<h4
						style={{
							margin: '0 0 0.5rem 0',
							color: '#007bff',
						}}
					>
						How to Play
					</h4>
					<ul
						style={{ margin: '0', paddingLeft: '1.2rem' }}
					>
						<li>
							Select {columnCount} words you think belong
							together
						</li>
						<li>Click "Submit" to check your guess</li>
						<li>Find all groups to win!</li>
						{wildcardsActive && (
							<li>
								Watch out for wildcards that can fit in
								multiple groups
							</li>
						)}
					</ul>
				</div>

				<div style={{ marginBottom: '1.5rem' }}>
					<h4
						style={{
							margin: '0 0 0.5rem 0',
							color: '#007bff',
						}}
					>
						Difficulty Levels
					</h4>
					<ul
						style={{ margin: '0', paddingLeft: '1.2rem' }}
					>
						<li>
							<strong>Yellow:</strong> Most straightforward
						</li>
						<li>
							<strong>Green:</strong> A little trickier
						</li>
						<li>
							<strong>Blue:</strong> Often involves wordplay
						</li>
						<li>
							<strong>Purple:</strong> Hardest, usually
							requires specific knowledge
						</li>
					</ul>
				</div>

				{mode === 'multiplayer' && (
					<div style={{ marginBottom: '1.5rem' }}>
						<h4
							style={{
								margin: '0 0 0.5rem 0',
								color: '#007bff',
							}}
						>
							Multiplayer Mode
						</h4>
						<p style={{ margin: '0' }}>
							Race against other players to find all groups
							first! Be quick and accurate to claim victory.
						</p>
					</div>
				)}
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof RulesModalWrapper> = {
	title: 'Modals/Rules Modal (Modal)',
	component: RulesModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Modal component that displays game rules and instructions, configurable for different game modes and settings. Now powered by the DRY modal system.',
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
				'Function called when modal should be closed',
		},
		columnCount: {
			control: 'number',
			description: 'Number of words in each group',
		},
		mode: {
			control: 'select',
			options: ['daily', 'custom', 'multiplayer'],
			description: 'Game mode being played',
		},
		wildcardsActive: {
			control: 'boolean',
			description:
				'Whether wildcards are enabled in the game',
		},
	},
};

export default meta;
type Story = StoryObj<typeof RulesModalWrapper>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
	},
};

export const CustomMode: Story = {
	args: {
		open: true,
		onClose: () => {},
		mode: 'custom',
		columnCount: 5,
	},
};

export const MultiplayerWithWildcards: Story = {
	args: {
		open: true,
		onClose: () => {},
		mode: 'multiplayer',
		columnCount: 6,
		wildcardsActive: true,
	},
};

export const LargeGrid: Story = {
	args: {
		open: true,
		onClose: () => {},
		mode: 'custom',
		columnCount: 8,
		wildcardsActive: false,
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		mode: 'daily',
		columnCount: 4,
	},
};
