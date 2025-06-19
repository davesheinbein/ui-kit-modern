import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnifiedCard } from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/Communication Cards',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Communication-focused cards for chat previews, messaging, and social interactions. ' +
					'Designed for chat applications and social features.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['chat-preview'],
			description:
				'The type of communication card to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

export const ChatPreviewCard: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Team Chat',
		subtitle: '3 new messages',
		content: (
			<div>
				<div style={{ marginBottom: '0.75rem' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: '0.5rem',
							marginBottom: '0.5rem',
						}}
					>
						<div
							style={{
								width: '24px',
								height: '24px',
								borderRadius: '50%',
								background: '#007bff',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontSize: '0.75rem',
								fontWeight: 'bold',
								flexShrink: 0,
							}}
						>
							A
						</div>
						<div style={{ minWidth: 0 }}>
							<div
								style={{
									fontSize: '0.85rem',
									fontWeight: '500',
								}}
							>
								Alex
							</div>
							<div
								style={{
									fontSize: '0.85rem',
									color: '#333',
								}}
							>
								Great game everyone! 🎉
							</div>
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: '0.5rem',
							marginBottom: '0.5rem',
						}}
					>
						<div
							style={{
								width: '24px',
								height: '24px',
								borderRadius: '50%',
								background: '#28a745',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontSize: '0.75rem',
								fontWeight: 'bold',
								flexShrink: 0,
							}}
						>
							M
						</div>
						<div style={{ minWidth: 0 }}>
							<div
								style={{
									fontSize: '0.85rem',
									fontWeight: '500',
								}}
							>
								Morgan
							</div>
							<div
								style={{
									fontSize: '0.85rem',
									color: '#333',
								}}
							>
								Ready for the next round? ⚡
							</div>
						</div>
					</div>

					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: '0.5rem',
						}}
					>
						<div
							style={{
								width: '24px',
								height: '24px',
								borderRadius: '50%',
								background: '#dc3545',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontSize: '0.75rem',
								fontWeight: 'bold',
								flexShrink: 0,
							}}
						>
							S
						</div>
						<div style={{ minWidth: 0 }}>
							<div
								style={{
									fontSize: '0.85rem',
									fontWeight: '500',
								}}
							>
								Sam
							</div>
							<div
								style={{
									fontSize: '0.85rem',
									color: '#333',
								}}
							>
								Let's do this! 💪
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						fontSize: '0.75rem',
						color: '#666',
						textAlign: 'right',
						borderTop: '1px solid #e9ecef',
						paddingTop: '0.5rem',
					}}
				>
					Last message: 2 minutes ago
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
						flex: 1,
					}}
				>
					Open Chat
				</button>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#6c757d',
						border: '1px solid #6c757d',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Mute
				</button>
			</div>
		),
	},
};

export const PrivateChatPreview: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Sarah_Puzzler',
		subtitle: '1 new message',
		content: (
			<div>
				<div style={{ marginBottom: '0.75rem' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							gap: '0.5rem',
							marginBottom: '0.5rem',
						}}
					>
						<div
							style={{
								width: '32px',
								height: '32px',
								borderRadius: '50%',
								background:
									'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontSize: '0.9rem',
								fontWeight: 'bold',
								flexShrink: 0,
							}}
						>
							SP
						</div>
						<div style={{ minWidth: 0 }}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									gap: '0.5rem',
									marginBottom: '0.25rem',
								}}
							>
								<span
									style={{
										fontSize: '0.9rem',
										fontWeight: '600',
									}}
								>
									Sarah_Puzzler
								</span>
								<span
									style={{
										width: '8px',
										height: '8px',
										borderRadius: '50%',
										backgroundColor: '#22c55e',
										display: 'inline-block',
									}}
								></span>
							</div>
							<div
								style={{
									fontSize: '0.9rem',
									color: '#333',
								}}
							>
								Thanks for the challenge! Want to play
								again? 😊
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						fontSize: '0.75rem',
						color: '#666',
						textAlign: 'right',
						borderTop: '1px solid #e9ecef',
						paddingTop: '0.5rem',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<span>🔔 Notifications on</span>
					<span>Just now</span>
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Reply
				</button>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Challenge
				</button>
			</div>
		),
	},
};

export const GroupChatBusy: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Puzzle Masters',
		subtitle: '12 new messages',
		content: (
			<div>
				<div
					style={{
						background: '#fff3cd',
						border: '1px solid #ffeaa7',
						borderRadius: '0.25rem',
						padding: '0.5rem',
						marginBottom: '0.75rem',
						fontSize: '0.85rem',
					}}
				>
					🔥 <strong>Very active chat</strong> - 12 messages
					in last 5 minutes
				</div>

				<div style={{ marginBottom: '0.75rem' }}>
					<div
						style={{
							fontSize: '0.85rem',
							marginBottom: '0.25rem',
						}}
					>
						<strong>PuzzleQueen:</strong> Who's up for speed
						round?
					</div>
					<div
						style={{
							fontSize: '0.85rem',
							marginBottom: '0.25rem',
						}}
					>
						<strong>WordWizard:</strong> I'm in! 🚀
					</div>
					<div
						style={{
							fontSize: '0.85rem',
							marginBottom: '0.25rem',
						}}
					>
						<strong>BrainTeaser:</strong> Count me in too
					</div>
					<div
						style={{
							fontSize: '0.8rem',
							color: '#666',
							fontStyle: 'italic',
							textAlign: 'center',
							margin: '0.5rem 0',
						}}
					>
						+ 9 more messages...
					</div>
				</div>

				<div
					style={{
						fontSize: '0.75rem',
						color: '#666',
						textAlign: 'right',
						borderTop: '1px solid #e9ecef',
						paddingTop: '0.5rem',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<span>👥 8 members active</span>
					<span>30 seconds ago</span>
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
						flex: 1,
					}}
				>
					Join Conversation
				</button>
			</div>
		),
	},
};

export const ChatPreviewMuted: Story = {
	args: {
		kind: 'chat-preview',
		title: 'Random Chat',
		subtitle: 'Muted • 47 new messages',
		content: (
			<div style={{ opacity: 0.7 }}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
						marginBottom: '0.75rem',
						padding: '0.5rem',
						background: '#f8f9fa',
						borderRadius: '0.25rem',
					}}
				>
					<span style={{ fontSize: '1.2rem' }}>🔇</span>
					<div>
						<div
							style={{
								fontSize: '0.9rem',
								fontWeight: '500',
							}}
						>
							Chat is muted
						</div>
						<div
							style={{ fontSize: '0.8rem', color: '#666' }}
						>
							You won't receive notifications
						</div>
					</div>
				</div>

				<div style={{ fontSize: '0.85rem', color: '#666' }}>
					Last message from <strong>RandomUser42</strong>:
					"Anyone want to play?"
				</div>

				<div
					style={{
						fontSize: '0.75rem',
						color: '#666',
						textAlign: 'right',
						borderTop: '1px solid #e9ecef',
						paddingTop: '0.5rem',
						marginTop: '0.75rem',
					}}
				>
					15 minutes ago
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					Unmute
				</button>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: 'transparent',
						color: '#007bff',
						border: '1px solid #007bff',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
					}}
				>
					View Chat
				</button>
			</div>
		),
	},
};

export const EmptyChatPreview: Story = {
	args: {
		kind: 'chat-preview',
		title: 'New Conversation',
		subtitle: 'No messages yet',
		content: (
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<div
					style={{
						fontSize: '2rem',
						marginBottom: '0.5rem',
						opacity: 0.5,
					}}
				>
					💬
				</div>
				<div
					style={{
						fontSize: '0.9rem',
						color: '#666',
						marginBottom: '0.5rem',
					}}
				>
					Start a conversation
				</div>
				<div style={{ fontSize: '0.8rem', color: '#999' }}>
					Send a message to get things started
				</div>
			</div>
		),
		actions: (
			<div style={{ display: 'flex', gap: '0.5rem' }}>
				<button
					style={{
						padding: '0.375rem 0.75rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.25rem',
						cursor: 'pointer',
						fontSize: '0.85rem',
						flex: 1,
					}}
				>
					Send Message
				</button>
			</div>
		),
	},
};

// Communication Cards Gallery
export const CommunicationCardsShowcase: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(320px, 1fr))',
				padding: '1rem',
			}}
		>
			<UnifiedCard
				kind='chat-preview'
				title='Team Alpha'
				subtitle='2 new messages'
				content={
					<div>
						<p>
							<strong>Captain:</strong> Ready for battle?
						</p>
						<p>
							<strong>Player2:</strong> Let's go! 🚀
						</p>
						<p
							style={{ color: '#666', fontSize: '0.8rem' }}
						>
							1 minute ago
						</p>
					</div>
				}
			/>

			<UnifiedCard
				kind='chat-preview'
				title='Global Chat'
				subtitle='Very active • 50+ messages'
				content={
					<div>
						<p>
							🔥 <strong>Busy chat</strong>
						</p>
						<p style={{ color: '#666' }}>
							Many players discussing strategies
						</p>
						<p
							style={{ color: '#666', fontSize: '0.8rem' }}
						>
							Continuous activity
						</p>
					</div>
				}
			/>

			<UnifiedCard
				kind='chat-preview'
				title='Study Group'
				subtitle='Muted • 12 messages'
				content={
					<div style={{ opacity: 0.7 }}>
						<p>🔇 Chat notifications disabled</p>
						<p style={{ color: '#666' }}>
							Last: "See you tomorrow!"
						</p>
					</div>
				}
			/>

			<UnifiedCard
				kind='chat-preview'
				title='Private Chat'
				subtitle='Start conversation'
				content={
					<div style={{ textAlign: 'center' }}>
						<p>💬</p>
						<p style={{ color: '#666' }}>No messages yet</p>
					</div>
				}
			/>
		</div>
	),
};
