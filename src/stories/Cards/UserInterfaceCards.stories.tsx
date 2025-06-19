import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
} from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/User Interface Cards',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'User interface cards for common UI patterns like profiles, notifications, stats, and friend management. ' +
					'These cards are designed for general application interfaces.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'friend',
				'profile',
				'notification',
				'stats',
				'settings',
				'user-status',
			],
			description: 'The type of UI card to display',
		},
		notificationType: {
			control: 'select',
			options: ['info', 'warning', 'error', 'success'],
			description:
				'Type of notification (for notification cards)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

export const FriendCard: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '1',
			username: 'AliceGamer',
			online: true,
			division: 'Diamond',
			tier: 'II',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 3,
	},
};

export const FriendCardInMatch: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '2',
			username: 'BobPlayer',
			online: true,
			division: 'Gold',
			tier: 'I',
			inMatch: true,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 0,
	},
};

export const FriendCardOffline: Story = {
	args: {
		kind: 'friend',
		friend: {
			id: '3',
			username: 'CharlieAway',
			online: false,
			division: 'Silver',
			tier: 'III',
			inMatch: false,
			idle: false,
		},
		onChallenge: (id: string) =>
			console.log('Challenge friend:', id),
		onMessage: (id: string) =>
			console.log('Message friend:', id),
		onRemove: (id: string) =>
			console.log('Remove friend:', id),
		unreadCount: 1,
	},
};

export const ProfileCard: Story = {
	args: {
		kind: 'profile',
		title: 'Sarah Johnson',
		subtitle: 'Diamond Tier - Level 42',
		content: (
			<div style={{ textAlign: 'center' }}>
				<div
					style={{
						width: '80px',
						height: '80px',
						borderRadius: '50%',
						background:
							'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: '2rem',
						color: 'white',
						margin: '0 auto 1rem auto',
					}}
				>
					👤
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<div
						style={{
							fontSize: '0.9rem',
							color: '#666',
							marginBottom: '0.5rem',
						}}
					>
						Member since January 2024
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							fontSize: '0.9rem',
						}}
					>
						<div>
							<strong>156</strong>
							<br />
							<span style={{ color: '#666' }}>
								Games Won
							</span>
						</div>
						<div>
							<strong>12</strong>
							<br />
							<span style={{ color: '#666' }}>
								Current Streak
							</span>
						</div>
						<div>
							<strong>87%</strong>
							<br />
							<span style={{ color: '#666' }}>
								Win Rate
							</span>
						</div>
					</div>
				</div>

				<div
					style={{
						background: '#f8f9fa',
						padding: '0.75rem',
						borderRadius: '0.5rem',
						fontSize: '0.85rem',
					}}
				>
					🏆 <strong>Recent Achievement:</strong> Speed
					Demon
				</div>
			</div>
		),
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'center',
				}}
			>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Challenge
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Add Friend
				</button>
			</div>
		),
	},
};

export const NotificationInfo: Story = {
	args: {
		kind: 'notification',
		notificationType: 'info',
		title: 'New Feature Available',
		subtitle: 'Dark mode is now available',
		content:
			'Experience the app in a whole new way with our new dark mode theme. You can toggle it in your settings.',
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#007bff',
						border: '1px solid #007bff',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Dismiss
				</button>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Try Now
				</button>
			</div>
		),
	},
};

export const NotificationWarning: Story = {
	args: {
		kind: 'notification',
		notificationType: 'warning',
		title: 'Account Security Notice',
		subtitle: 'Unusual login activity detected',
		content:
			'We noticed a login from a new device. If this was not you, please change your password immediately.',
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#ffc107',
						border: '1px solid #ffc107',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					It was me
				</button>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#ffc107',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Secure Account
				</button>
			</div>
		),
	},
};

export const NotificationError: Story = {
	args: {
		kind: 'notification',
		notificationType: 'error',
		title: 'Connection Lost',
		subtitle: 'Unable to connect to game servers',
		content:
			'Please check your internet connection and try again. If the problem persists, contact support.',
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#dc3545',
						border: '1px solid #dc3545',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Dismiss
				</button>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#dc3545',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Retry
				</button>
			</div>
		),
	},
};

export const NotificationSuccess: Story = {
	args: {
		kind: 'notification',
		notificationType: 'success',
		title: 'Achievement Unlocked!',
		subtitle: 'Congratulations on your milestone',
		content:
			'You have successfully completed 100 puzzles in a row. You earned the "Century" badge and 500 bonus XP!',
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#28a745',
						border: '1px solid #28a745',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					View Badge
				</button>
				<button
					style={{
						padding: '0.25rem 0.75rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Share
				</button>
			</div>
		),
	},
};

export const StatsCard: Story = {
	args: {
		kind: 'stats',
		title: 'Weekly Performance',
		statValue: '87%',
		statLabel: 'Win Rate Improvement',
		content: (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '1rem',
					}}
				>
					<div
						style={{
							fontSize: '2.5rem',
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						87%
					</div>
					<div
						style={{
							textAlign: 'right',
							color: 'rgba(255,255,255,0.9)',
						}}
					>
						<div style={{ fontSize: '0.9rem' }}>
							+15% from last week
						</div>
						<div
							style={{ fontSize: '0.8rem', opacity: 0.8 }}
						>
							🔥 Personal best!
						</div>
					</div>
				</div>

				<div
					style={{
						color: 'rgba(255,255,255,0.9)',
						fontSize: '0.9rem',
					}}
				>
					<div style={{ marginBottom: '0.5rem' }}>
						<strong>Games this week:</strong> 23 played
					</div>
					<div style={{ marginBottom: '0.5rem' }}>
						<strong>Average time:</strong> 1:47 per game
					</div>
					<div>
						<strong>Best streak:</strong> 8 wins in a row
					</div>
				</div>
			</div>
		),
	},
};

export const UserStatusOnline: Story = {
	args: {
		kind: 'user-status',
		title: 'Currently Online',
		subtitle: 'Available for challenges',
		content: (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '0.75rem',
				}}
			>
				<span
					style={{
						width: '16px',
						height: '16px',
						backgroundColor: '#22c55e',
						borderRadius: '50%',
						display: 'inline-block',
						boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)',
					}}
				></span>
				<div>
					<div style={{ fontWeight: '500' }}>
						Ready to play
					</div>
					<div
						style={{ fontSize: '0.85rem', color: '#666' }}
					>
						Last active: now
					</div>
				</div>
			</div>
		),
	},
};

export const UserStatusAway: Story = {
	args: {
		kind: 'user-status',
		title: 'Away',
		subtitle: 'Be back soon',
		content: (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '0.75rem',
				}}
			>
				<span
					style={{
						width: '16px',
						height: '16px',
						backgroundColor: '#fbbf24',
						borderRadius: '50%',
						display: 'inline-block',
						boxShadow: '0 0 0 3px rgba(251, 191, 36, 0.2)',
					}}
				></span>
				<div>
					<div style={{ fontWeight: '500' }}>Auto-away</div>
					<div
						style={{ fontSize: '0.85rem', color: '#666' }}
					>
						Last active: 15 min ago
					</div>
				</div>
			</div>
		),
	},
};

export const SettingsCard: Story = {
	args: {
		kind: 'settings',
		title: 'Notification Preferences',
		subtitle: 'Manage your alerts and updates',
		content: (
			<div>
				<div style={{ marginBottom: '1rem' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '0.5rem',
						}}
					>
						<label style={{ fontSize: '0.9rem' }}>
							Game notifications
						</label>
						<input type='checkbox' defaultChecked />
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '0.5rem',
						}}
					>
						<label style={{ fontSize: '0.9rem' }}>
							Friend requests
						</label>
						<input type='checkbox' defaultChecked />
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: '0.5rem',
						}}
					>
						<label style={{ fontSize: '0.9rem' }}>
							Achievement alerts
						</label>
						<input type='checkbox' defaultChecked />
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<label style={{ fontSize: '0.9rem' }}>
							Marketing emails
						</label>
						<input type='checkbox' />
					</div>
				</div>
			</div>
		),
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: 'transparent',
						color: '#6c757d',
						border: '1px solid #6c757d',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Reset
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Save Changes
				</button>
			</div>
		),
	},
};

// UI Cards Gallery
export const UICardsShowcase: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
				padding: '1rem',
			}}
		>
			<UnifiedCard
				kind='friend'
				friend={{
					id: '1',
					username: 'QuickPlayer',
					online: true,
					division: 'Gold',
					tier: 'II',
				}}
				onMessage={() => {}}
				onChallenge={() => {}}
				unreadCount={2}
			/>

			<UnifiedCard
				kind='notification'
				notificationType='success'
				title='Level Up!'
				content='Welcome to Diamond Tier!'
			/>

			<UnifiedCard
				kind='stats'
				title='Daily Score'
				statValue='2,847'
				statLabel='Points earned today'
			/>

			<UnifiedCard
				kind='user-status'
				title='Online'
				content='Ready for challenges'
			/>
		</div>
	),
};
