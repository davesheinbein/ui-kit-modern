import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

interface UserStats {
	name: string;
	email: string;
	gamesPlayed: number;
	gamesWon: number;
	currentStreak: number;
	bestStreak: number;
	averageTime: string;
}

// Create a wrapper component for Storybook compatibility
const StatisticsModalWrapper = ({
	open,
	onClose,
	user,
	onSignIn,
}: {
	open: boolean;
	onClose: () => void;
	user?: UserStats | null;
	onSignIn?: () => void;
}) => {
	return (
		<ModalFactory
			kind='statistics'
			open={open}
			title='Statistics'
			onClose={onClose}
		>
			<div style={{ padding: '1rem 0' }}>
				{user ?
					<div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								marginBottom: '1.5rem',
								paddingBottom: '1rem',
								borderBottom: '1px solid #eee',
							}}
						>
							<div
								style={{
									width: '48px',
									height: '48px',
									borderRadius: '50%',
									backgroundColor: '#007bff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white',
									fontWeight: 'bold',
								}}
							>
								{user.name.charAt(0).toUpperCase()}
							</div>
							<div>
								<div
									style={{
										fontWeight: '600',
										marginBottom: '0.25rem',
									}}
								>
									{user.name}
								</div>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									{user.email}
								</div>
							</div>
						</div>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '1rem',
							}}
						>
							<div>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									Games Played
								</div>
								<div
									style={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
								>
									{user.gamesPlayed}
								</div>
							</div>
							<div>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									Games Won
								</div>
								<div
									style={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
								>
									{user.gamesWon}
								</div>
							</div>
							<div>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									Current Streak
								</div>
								<div
									style={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
								>
									{user.currentStreak}
								</div>
							</div>
							<div>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									Best Streak
								</div>
								<div
									style={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
								>
									{user.bestStreak}
								</div>
							</div>
							<div style={{ gridColumn: 'span 2' }}>
								<div
									style={{
										color: '#666',
										fontSize: '0.9rem',
									}}
								>
									Average Time
								</div>
								<div
									style={{
										fontSize: '1.5rem',
										fontWeight: 'bold',
									}}
								>
									{user.averageTime}
								</div>
							</div>
						</div>
					</div>
				:	<div style={{ textAlign: 'center' }}>
						<div
							style={{
								padding: '2rem 1rem',
								backgroundColor: '#f8f9fa',
								borderRadius: '8px',
								marginBottom: '1rem',
							}}
						>
							<p
								style={{
									margin: '0 0 1rem 0',
									color: '#666',
								}}
							>
								Sign in to track your statistics and compete
								with friends!
							</p>
							{onSignIn && (
								<button
									onClick={onSignIn}
									style={{
										padding: '0.75rem 1.5rem',
										backgroundColor: '#007bff',
										color: 'white',
										border: 'none',
										borderRadius: '6px',
										fontSize: '1rem',
										fontWeight: '600',
										cursor: 'pointer',
									}}
								>
									Sign In
								</button>
							)}
						</div>
					</div>
				}
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof StatisticsModalWrapper> = {
	title: 'Modals/Statistics (Modal)',
	component: StatisticsModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Modal component that displays user statistics, achievements, and game mode information. Now powered by the DRY modal system.',
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
		user: {
			control: 'object',
			description:
				'User information object with name, email, and statistics',
		},
		onSignIn: {
			action: 'signIn',
			description:
				'Function called when sign in button is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StatisticsModalWrapper>;

const mockUser: UserStats = {
	name: 'John Doe',
	email: 'john.doe@example.com',
	gamesPlayed: 47,
	gamesWon: 34,
	currentStreak: 5,
	bestStreak: 12,
	averageTime: '3:24',
};

export const WithUser: Story = {
	args: {
		open: true,
		onClose: () => {},
		user: mockUser,
	},
};

export const GuestUser: Story = {
	args: {
		open: true,
		onClose: () => {},
		user: null,
		onSignIn: () => {},
	},
};

export const HighPerformer: Story = {
	args: {
		open: true,
		onClose: () => {},
		user: {
			...mockUser,
			gamesPlayed: 150,
			gamesWon: 142,
			currentStreak: 28,
			bestStreak: 45,
			averageTime: '2:15',
		},
	},
};
