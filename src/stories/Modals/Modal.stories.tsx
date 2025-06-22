import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';
import { reduxDecorator } from '../config/decorators';
import { useAppDispatch, useAppSelector } from '../../store';
import { openModal, closeModal, selectIsModalOpen } from '../../store/slices/modalSlice';

// Types for different modal configurations
interface UserStats {
	name: string;
	email: string;
	gamesPlayed: number;
	gamesWon: number;
	currentStreak: number;
	bestStreak: number;
	averageTime: string;
}

interface PurchaseItem {
	name: string;
	price: number;
	description: string;
}

const meta: Meta<typeof ModalFactory> = {
	title: 'Modals/Modal',
	component: ModalFactory,
	decorators: [reduxDecorator],
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Modal System

The unified modal system provides both basic modal components and factory-based modal creation for complex use cases.

## Key Benefits

- **Single Source of Truth**: All modals use the same base system
- **Consistent API**: Every modal follows the same pattern
- **Easy to Extend**: Add new modal types by configuration
- **Type Safe**: Full TypeScript support with proper typing
- **Smaller Bundle**: No duplicate code across modal components
- **Better Maintainability**: Changes apply to all modals

## Modal Types Supported

- **Game Modals**: pre-game, end-game, rules, statistics
- **VS Mode**: mode selection, room management
- **Commerce**: purchase, sign-in
- **Utility**: confirmation, alert, form, share content
- **Custom**: any custom content (custom-puzzle)

## Usage Patterns

1. **Direct Factory**: \`ModalFactory\` with \`kind\` prop
2. **Wrapper Components**: For complex interactions
3. **Hook-based**: For state management
`,
			},
		},
		layout: 'fullscreen',
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'pre-game',
				'end-game',
				'rules',
				'statistics',
				'vs-mode',
				'vs-room',
				'purchase',
				'sign-in',
				'share-content',
				'custom-puzzle',
				'confirmation',
				'alert',
				'form',
			],
			description: 'The type of modal to render',
		},
		open: {
			control: 'boolean',
			description: 'Whether the modal is open',
		},
		title: {
			control: 'text',
			description: 'Modal title',
		},
		onClose: {
			action: 'closed',
			description: 'Function called when modal is closed',
		},
		onConfirm: {
			action: 'confirmed',
			description:
				'Function called when modal is confirmed',
		},
		onCancel: {
			action: 'cancelled',
			description:
				'Function called when modal is cancelled',
		},
		confirmText: {
			control: 'text',
			description: 'Text for the confirm button',
		},
		cancelText: {
			control: 'text',
			description: 'Text for the cancel button',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ModalFactory>;

// ===== OVERVIEW STORY =====
export const AllModalTypesOverview: Story = {
	render: () => {
		const dispatch = useAppDispatch();

		return (
			<div style={{ padding: '2rem' }}>
				<h2>Modal System Overview</h2>
				<p>Click any button to see the modal in action:</p>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(200px, 1fr))',
						gap: '1rem',
						marginTop: '2rem',
					}}
				>
					<button
						onClick={() => dispatch(openModal({ id: 'pre-game' }))}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Pre-Game Modal
					</button>
					<button
						onClick={() => dispatch(openModal({ id: 'end-game' }))}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						End Game Modal
					</button>
					<button
						onClick={() => dispatch(openModal({ id: 'rules' }))}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Rules Modal
					</button>
					<button
						onClick={() => setActiveModal('statistics')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Statistics Modal
					</button>
					<button
						onClick={() => setActiveModal('vs-mode')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						VS Mode Modal
					</button>
					<button
						onClick={() => setActiveModal('vs-room')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						VS Room Modal
					</button>
					<button
						onClick={() => setActiveModal('purchase')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Purchase Modal
					</button>
					<button
						onClick={() => setActiveModal('sign-in')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Sign In Modal
					</button>
					<button
						onClick={() => setActiveModal('share-content')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Share Content Modal
					</button>
					<button
						onClick={() => setActiveModal('custom-puzzle')}
						style={{
							padding: '1rem',
							borderRadius: '8px',
							border: '1px solid #ccc',
						}}
					>
						Custom Puzzle Modal
					</button>
				</div>

				{/* Pre-Game Modal */}
				<ModalFactory
					kind='pre-game'
					open={activeModal === 'pre-game'}
					title='Ready to Play?'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					onCancel={() => setActiveModal(null)}
					confirmText='Ready!'
					cancelText='Go Home'
				>
					<div
						style={{
							textAlign: 'center',
							padding: '1rem 0',
						}}
					>
						<p>
							Get ready for an exciting game! Click "Ready!"
							when you're prepared to start.
						</p>
					</div>
				</ModalFactory>

				{/* End Game Modal */}
				<ModalFactory
					kind='end-game'
					open={activeModal === 'end-game'}
					title='Congratulations!'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					confirmText='Share'
				>
					<div
						style={{
							textAlign: 'center',
							padding: '1rem 0',
						}}
					>
						<p
							style={{
								marginBottom: '1rem',
								fontSize: '1.1rem',
							}}
						>
							Congratulations! You solved the puzzle!
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
								<strong>Score:</strong> 1200
							</div>
							<div>
								<strong>Attempts Left:</strong> 3
							</div>
							<div>
								<strong>Burn Bonus:</strong> 100
							</div>
							<div>
								<strong>Time:</strong> 2:35
							</div>
						</div>
					</div>
				</ModalFactory>

				{/* Rules Modal */}
				<ModalFactory
					kind='rules'
					open={activeModal === 'rules'}
					title='How to Play'
					onClose={() => setActiveModal(null)}
				>
					<div
						style={{ padding: '1rem 0', textAlign: 'left' }}
					>
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
								Find groups of 4 words that share something
								in common.
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
								style={{
									margin: '0',
									paddingLeft: '1.2rem',
								}}
							>
								<li>
									Select 4 words you think belong together
								</li>
								<li>Click "Submit" to check your guess</li>
								<li>Find all groups to win!</li>
							</ul>
						</div>
					</div>
				</ModalFactory>

				{/* Statistics Modal */}
				<ModalFactory
					kind='statistics'
					open={activeModal === 'statistics'}
					title='Statistics'
					onClose={() => setActiveModal(null)}
				>
					<div style={{ padding: '1rem 0' }}>
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
									47
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
									34
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
									5
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
									12
								</div>
							</div>
						</div>
					</div>
				</ModalFactory>

				{/* VS Mode Modal */}
				<ModalFactory
					kind='vs-mode'
					open={activeModal === 'vs-mode'}
					title='Choose VS Mode'
					onClose={() => setActiveModal(null)}
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
									style={{
										fontSize: '0.9rem',
										opacity: 0.9,
									}}
								>
									Jump into a game with random opponents
								</div>
							</button>
						</div>
					</div>
				</ModalFactory>

				{/* VS Room Modal */}
				<ModalFactory
					kind='vs-room'
					open={activeModal === 'vs-room'}
					title='Join Room'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					onCancel={() => setActiveModal(null)}
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
								placeholder='Enter room code...'
								style={{
									width: '100%',
									padding: '0.75rem',
									border: '2px solid #ddd',
									borderRadius: '6px',
									fontSize: '1rem',
									textAlign: 'center',
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
							Ask your friend for their room code to join
							their game.
						</div>
					</div>
				</ModalFactory>

				{/* Purchase Modal */}
				<ModalFactory
					kind='purchase'
					open={activeModal === 'purchase'}
					title='Purchase Item'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					onCancel={() => setActiveModal(null)}
					confirmText='Purchase for $5.99'
					cancelText='Cancel'
				>
					<div style={{ padding: '1rem 0' }}>
						<div style={{ marginBottom: '1rem' }}>
							<h3
								style={{
									margin: '0 0 0.5rem 0',
									fontSize: '1.2rem',
								}}
							>
								Premium Theme
							</h3>
							<p
								style={{
									margin: '0 0 0.5rem 0',
									color: '#666',
								}}
							>
								A beautiful dark theme with gradient accents
								and modern styling.
							</p>
							<div
								style={{
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#007bff',
								}}
							>
								$5.99
							</div>
						</div>
					</div>
				</ModalFactory>

				{/* Sign In Modal */}
				<ModalFactory
					kind='sign-in'
					open={activeModal === 'sign-in'}
					title='Sign In'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					onCancel={() => setActiveModal(null)}
					confirmText='Sign In with Google'
					cancelText='Maybe Later'
				>
					<div
						style={{
							padding: '1rem 0',
							textAlign: 'center',
						}}
					>
						<p
							style={{
								marginBottom: '1.5rem',
								color: '#666',
							}}
						>
							Sign in to save your progress, compete with
							friends, and unlock exclusive features!
						</p>
					</div>
				</ModalFactory>

				{/* Share Content Modal */}
				<ModalFactory
					kind='share-content'
					open={activeModal === 'share-content'}
					title='Share Your Results'
					onClose={() => setActiveModal(null)}
				>
					<div
						style={{
							padding: '1rem 0',
							textAlign: 'center',
						}}
					>
						<p style={{ marginBottom: '1.5rem' }}>
							Check out my amazing game results!
						</p>
						<div
							style={{
								display: 'flex',
								gap: '0.5rem',
								flexWrap: 'wrap',
								justifyContent: 'center',
							}}
						>
							<button
								style={{
									padding: '0.5rem 1rem',
									backgroundColor: '#1da1f2',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
									cursor: 'pointer',
								}}
							>
								Twitter
							</button>
							<button
								style={{
									padding: '0.5rem 1rem',
									backgroundColor: '#4267b2',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
									cursor: 'pointer',
								}}
							>
								Facebook
							</button>
							<button
								style={{
									padding: '0.5rem 1rem',
									backgroundColor: '#6772e5',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
									cursor: 'pointer',
								}}
							>
								Copy Link
							</button>
						</div>
					</div>
				</ModalFactory>

				{/* Custom Puzzle Modal */}
				<ModalFactory
					kind='custom-puzzle'
					open={activeModal === 'custom-puzzle'}
					title='Create Custom Puzzle'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					onCancel={() => setActiveModal(null)}
					confirmText='Create Puzzle'
					cancelText='Cancel'
				>
					<div
						style={{
							padding: '1rem 0',
							textAlign: 'center',
						}}
					>
						<div style={{ marginBottom: '1rem' }}>
							<label
								style={{
									display: 'block',
									marginBottom: '0.5rem',
								}}
							>
								Grid Size:
							</label>
							<select
								style={{
									padding: '0.5rem',
									borderRadius: '4px',
									border: '1px solid #ccc',
								}}
							>
								<option value='4x4'>4x4</option>
								<option value='5x5'>5x5</option>
								<option value='6x6'>6x6</option>
							</select>
						</div>
						<div style={{ marginBottom: '1rem' }}>
							<label
								style={{
									display: 'block',
									marginBottom: '0.5rem',
								}}
							>
								Difficulty:
							</label>
							<select
								style={{
									padding: '0.5rem',
									borderRadius: '4px',
									border: '1px solid #ccc',
								}}
							>
								<option value='easy'>Easy</option>
								<option value='medium'>Medium</option>
								<option value='hard'>Hard</option>
							</select>
						</div>
					</div>
				</ModalFactory>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive overview of all modal types in the DRY modal system. Click buttons to see different modals in action.',
			},
		},
	},
};

// ===== GAME MODALS =====
export const PreGameModal: Story = {
	args: {
		kind: 'pre-game',
		open: true,
		title: 'Ready to Play?',
		confirmText: 'Ready!',
		cancelText: 'Go Home',
		children: (
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<p>
					Get ready for an exciting game! Click "Ready!"
					when you're prepared to start.
				</p>
			</div>
		),
	},
};

export const EndGameModalVictory: Story = {
	args: {
		kind: 'end-game',
		open: true,
		title: 'Congratulations!',
		confirmText: 'Share',
		children: (
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<p
					style={{
						marginBottom: '1rem',
						fontSize: '1.1rem',
					}}
				>
					Congratulations! You solved the puzzle!
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
						<strong>Score:</strong> 1200
					</div>
					<div>
						<strong>Attempts Left:</strong> 3
					</div>
					<div>
						<strong>Burn Bonus:</strong> 100
					</div>
					<div>
						<strong>Time:</strong> 2:35
					</div>
				</div>
			</div>
		),
	},
};

export const EndGameModalDefeat: Story = {
	args: {
		kind: 'end-game',
		open: true,
		title: 'Game Over',
		confirmText: 'Share',
		children: (
			<div
				style={{ textAlign: 'center', padding: '1rem 0' }}
			>
				<p
					style={{
						marginBottom: '1rem',
						fontSize: '1.1rem',
					}}
				>
					Better luck next time!
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
						<strong>Score:</strong> 650
					</div>
					<div>
						<strong>Attempts Left:</strong> 0
					</div>
					<div>
						<strong>Burn Bonus:</strong> 0
					</div>
					<div>
						<strong>Time:</strong> 5:00
					</div>
				</div>
			</div>
		),
	},
};

export const RulesModal: Story = {
	args: {
		kind: 'rules',
		open: true,
		title: 'How to Play',
		children: (
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
						Find groups of 4 words that share something in
						common.
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
							Select 4 words you think belong together
						</li>
						<li>Click "Submit" to check your guess</li>
						<li>Find all groups to win!</li>
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
			</div>
		),
	},
};

export const StatisticsModalWithUser: Story = {
	args: {
		kind: 'statistics',
		open: true,
		title: 'Statistics',
		children: (
			<div style={{ padding: '1rem 0' }}>
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
						J
					</div>
					<div>
						<div
							style={{
								fontWeight: '600',
								marginBottom: '0.25rem',
							}}
						>
							John Doe
						</div>
						<div
							style={{ color: '#666', fontSize: '0.9rem' }}
						>
							john.doe@example.com
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
							style={{ color: '#666', fontSize: '0.9rem' }}
						>
							Games Played
						</div>
						<div
							style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
							}}
						>
							47
						</div>
					</div>
					<div>
						<div
							style={{ color: '#666', fontSize: '0.9rem' }}
						>
							Games Won
						</div>
						<div
							style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
							}}
						>
							34
						</div>
					</div>
					<div>
						<div
							style={{ color: '#666', fontSize: '0.9rem' }}
						>
							Current Streak
						</div>
						<div
							style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
							}}
						>
							5
						</div>
					</div>
					<div>
						<div
							style={{ color: '#666', fontSize: '0.9rem' }}
						>
							Best Streak
						</div>
						<div
							style={{
								fontSize: '1.5rem',
								fontWeight: 'bold',
							}}
						>
							12
						</div>
					</div>
				</div>
			</div>
		),
	},
};

export const StatisticsModalGuest: Story = {
	args: {
		kind: 'statistics',
		open: true,
		title: 'Statistics',
		children: (
			<div style={{ padding: '1rem 0' }}>
				<div style={{ textAlign: 'center' }}>
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
						<button
							style={{
								padding: '0.5rem 1rem',
								backgroundColor: '#007bff',
								color: 'white',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		),
	},
};

// ===== VS MODE MODALS =====
export const VSModeModal: Story = {
	args: {
		kind: 'vs-mode',
		open: true,
		title: 'Choose VS Mode',
		children: (
			<div style={{ padding: '1rem 0' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<button
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
		),
	},
};

export const VSRoomModal: Story = {
	args: {
		kind: 'vs-room',
		open: true,
		title: 'Join Room',
		confirmText: 'Join',
		cancelText: 'Cancel',
		children: (
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
		),
	},
};

// ===== COMMERCE MODALS =====
export const PurchaseModal: Story = {
	args: {
		kind: 'purchase',
		open: true,
		title: 'Purchase Item',
		confirmText: 'Purchase for $5.99',
		cancelText: 'Cancel',
		children: (
			<div style={{ padding: '1rem 0' }}>
				<div style={{ marginBottom: '1rem' }}>
					<h3
						style={{
							margin: '0 0 0.5rem 0',
							fontSize: '1.2rem',
						}}
					>
						Premium Theme
					</h3>
					<p
						style={{
							margin: '0 0 0.5rem 0',
							color: '#666',
						}}
					>
						A beautiful dark theme with gradient accents and
						modern styling.
					</p>
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							color: '#007bff',
						}}
					>
						$5.99
					</div>
				</div>
			</div>
		),
	},
};

export const PurchaseModalLoading: Story = {
	args: {
		kind: 'purchase',
		open: true,
		title: 'Purchase Item',
		confirmText: 'Processing...',
		cancelText: 'Cancel',
		children: (
			<div style={{ padding: '1rem 0' }}>
				<div style={{ marginBottom: '1rem' }}>
					<h3
						style={{
							margin: '0 0 0.5rem 0',
							fontSize: '1.2rem',
						}}
					>
						Premium Theme
					</h3>
					<p
						style={{
							margin: '0 0 0.5rem 0',
							color: '#666',
						}}
					>
						A beautiful dark theme with gradient accents and
						modern styling.
					</p>
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							color: '#007bff',
						}}
					>
						$5.99
					</div>
				</div>
				<div style={{ textAlign: 'center', color: '#666' }}>
					Processing your purchase...
				</div>
			</div>
		),
	},
};

export const PurchaseModalError: Story = {
	args: {
		kind: 'purchase',
		open: true,
		title: 'Purchase Item',
		confirmText: 'Purchase for $5.99',
		cancelText: 'Cancel',
		children: (
			<div style={{ padding: '1rem 0' }}>
				<div style={{ marginBottom: '1rem' }}>
					<h3
						style={{
							margin: '0 0 0.5rem 0',
							fontSize: '1.2rem',
						}}
					>
						Premium Theme
					</h3>
					<p
						style={{
							margin: '0 0 0.5rem 0',
							color: '#666',
						}}
					>
						A beautiful dark theme with gradient accents and
						modern styling.
					</p>
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
							color: '#007bff',
						}}
					>
						$5.99
					</div>
				</div>
				<div
					style={{
						padding: '0.75rem',
						backgroundColor: '#f8d7da',
						color: '#721c24',
						borderRadius: '4px',
						marginBottom: '1rem',
					}}
				>
					Insufficient funds. Please add more coins to your
					account.
				</div>
			</div>
		),
	},
};

export const SignInModal: Story = {
	args: {
		kind: 'sign-in',
		open: true,
		title: 'Sign In',
		confirmText: 'Sign In with Google',
		cancelText: 'Maybe Later',
		children: (
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<p
					style={{ marginBottom: '1.5rem', color: '#666' }}
				>
					Sign in to save your progress, compete with
					friends, and unlock exclusive features!
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.75rem',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							padding: '1rem',
							backgroundColor: '#f8f9fa',
							borderRadius: '8px',
							width: '100%',
						}}
					>
						<h4
							style={{
								margin: '0 0 0.5rem 0',
								fontSize: '1rem',
							}}
						>
							Benefits of signing in:
						</h4>
						<ul
							style={{
								margin: '0',
								paddingLeft: '1.2rem',
								textAlign: 'left',
								fontSize: '0.9rem',
							}}
						>
							<li>Save your game progress</li>
							<li>Track your statistics</li>
							<li>Compete on leaderboards</li>
							<li>Unlock achievements</li>
						</ul>
					</div>
				</div>
			</div>
		),
	},
};

// ===== UTILITY MODALS =====
export const ShareContentModal: Story = {
	args: {
		kind: 'share-content',
		open: true,
		title: 'Share Your Results',
		children: (
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<p style={{ marginBottom: '1.5rem' }}>
					Check out my amazing game results!
				</p>
				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#1da1f2',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Twitter
					</button>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#4267b2',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Facebook
					</button>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#6772e5',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Copy Link
					</button>
				</div>
			</div>
		),
	},
};

export const CustomPuzzleModal: Story = {
	args: {
		kind: 'custom-puzzle',
		open: true,
		title: 'Create Custom Puzzle',
		confirmText: 'Create Puzzle',
		cancelText: 'Cancel',
		children: (
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<p style={{ marginBottom: '1rem' }}>
					Configure your custom puzzle settings below.
				</p>
				<div style={{ marginBottom: '1rem' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '0.5rem',
						}}
					>
						Grid Size:
					</label>
					<select
						style={{
							padding: '0.5rem',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
					>
						<option value='4x4'>4x4</option>
						<option value='5x5'>5x5</option>
						<option value='6x6'>6x6</option>
					</select>
				</div>
				<div style={{ marginBottom: '1rem' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '0.5rem',
						}}
					>
						Difficulty:
					</label>
					<select
						style={{
							padding: '0.5rem',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
					>
						<option value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
					</select>
				</div>
			</div>
		),
	},
};

export const CustomPuzzleModalWithForm: Story = {
	args: {
		kind: 'custom-puzzle',
		open: true,
		title: 'New Custom Puzzle',
		confirmText: 'Save Puzzle',
		cancelText: 'Cancel',
		children: (
			<div style={{ padding: '2rem' }}>
				<form>
					<div style={{ marginBottom: '1rem' }}>
						<label htmlFor='title'>Puzzle Title:</label>
						<input
							id='title'
							type='text'
							style={{
								width: '100%',
								padding: '0.5rem',
								marginTop: '0.25rem',
							}}
						/>
					</div>
					<div style={{ marginBottom: '1rem' }}>
						<label htmlFor='description'>
							Description:
						</label>
						<textarea
							id='description'
							rows={3}
							style={{
								width: '100%',
								padding: '0.5rem',
								marginTop: '0.25rem',
							}}
						/>
					</div>
				</form>
			</div>
		),
	},
};

// ===== DEMO STORIES =====
export const ModalSystemDemo: Story = {
	render: () => {
		const [activeModal, setActiveModal] = useState<
			string | null
		>(null);
		const [gameState, setGameState] = useState({
			score: 1200,
			win: true,
			time: '2:35',
		});

		return (
			<div style={{ padding: '2rem' }}>
				<h2>Interactive Modal System Demo</h2>
				<p>Experience the complete modal workflow:</p>

				<div
					style={{
						display: 'flex',
						gap: '1rem',
						marginTop: '2rem',
						flexWrap: 'wrap',
					}}
				>
					<button
						onClick={() => setActiveModal('pre-game')}
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#28a745',
							color: 'white',
							border: 'none',
							borderRadius: '6px',
							cursor: 'pointer',
						}}
					>
						Start Game Flow
					</button>
					<button
						onClick={() => setActiveModal('vs-mode')}
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#007bff',
							color: 'white',
							border: 'none',
							borderRadius: '6px',
							cursor: 'pointer',
						}}
					>
						VS Mode Flow
					</button>
					<button
						onClick={() => setActiveModal('purchase')}
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#ffc107',
							color: '#212529',
							border: 'none',
							borderRadius: '6px',
							cursor: 'pointer',
						}}
					>
						Purchase Flow
					</button>
					<button
						onClick={() => setActiveModal('custom-puzzle')}
						style={{
							padding: '0.75rem 1.5rem',
							backgroundColor: '#6f42c1',
							color: 'white',
							border: 'none',
							borderRadius: '6px',
							cursor: 'pointer',
						}}
					>
						Custom Puzzle
					</button>
				</div>

				{/* All modal implementations using the same ModalFactory */}
				<ModalFactory
					kind='pre-game'
					open={activeModal === 'pre-game'}
					title='Ready to Play?'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal('end-game')}
					onCancel={() => setActiveModal(null)}
					confirmText='Ready!'
					cancelText='Go Home'
				>
					<div
						style={{
							textAlign: 'center',
							padding: '1rem 0',
						}}
					>
						<p>
							Get ready for an exciting game! Click "Ready!"
							to start and see the end game modal.
						</p>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='end-game'
					open={activeModal === 'end-game'}
					title={
						gameState.win ? 'Congratulations!' : 'Game Over'
					}
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal('share-content')}
					confirmText='Share Results'
				>
					<div
						style={{
							textAlign: 'center',
							padding: '1rem 0',
						}}
					>
						<p
							style={{
								marginBottom: '1rem',
								fontSize: '1.1rem',
							}}
						>
							{gameState.win ?
								'Amazing! You solved the puzzle!'
							:	'Better luck next time!'}
						</p>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '1rem',
							}}
						>
							<div>
								<strong>Score:</strong> {gameState.score}
							</div>
							<div>
								<strong>Time:</strong> {gameState.time}
							</div>
						</div>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='share-content'
					open={activeModal === 'share-content'}
					title='Share Your Victory!'
					onClose={() => setActiveModal(null)}
				>
					<div
						style={{
							padding: '1rem 0',
							textAlign: 'center',
						}}
					>
						<p style={{ marginBottom: '1.5rem' }}>
							I just solved today's puzzle in record time!
							🎉
						</p>
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
									backgroundColor: '#1da1f2',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
								}}
							>
								Twitter
							</button>
							<button
								style={{
									padding: '0.5rem 1rem',
									backgroundColor: '#4267b2',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
								}}
							>
								Facebook
							</button>
						</div>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='vs-mode'
					open={activeModal === 'vs-mode'}
					title='Choose VS Mode'
					onClose={() => setActiveModal(null)}
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
								onClick={() => setActiveModal('vs-room')}
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
									Join Room
								</div>
								<div
									style={{
										fontSize: '0.9rem',
										opacity: 0.9,
									}}
								>
									Enter a room code to join friends
								</div>
							</button>
						</div>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='vs-room'
					open={activeModal === 'vs-room'}
					title='Join Room'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
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
								placeholder='ABC123'
								style={{
									width: '100%',
									padding: '0.75rem',
									border: '2px solid #ddd',
									borderRadius: '6px',
									fontSize: '1rem',
									textAlign: 'center',
								}}
							/>
						</div>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='purchase'
					open={activeModal === 'purchase'}
					title='Purchase Item'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal('sign-in')}
					confirmText='Purchase for $5.99'
					cancelText='Cancel'
				>
					<div style={{ padding: '1rem 0' }}>
						<div style={{ marginBottom: '1rem' }}>
							<h3
								style={{
									margin: '0 0 0.5rem 0',
									fontSize: '1.2rem',
								}}
							>
								Premium Theme
							</h3>
							<p
								style={{
									margin: '0 0 0.5rem 0',
									color: '#666',
								}}
							>
								A beautiful dark theme with modern styling.
							</p>
							<div
								style={{
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#007bff',
								}}
							>
								$5.99
							</div>
						</div>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='sign-in'
					open={activeModal === 'sign-in'}
					title='Sign In Required'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					confirmText='Sign In with Google'
					cancelText='Cancel Purchase'
				>
					<div
						style={{
							padding: '1rem 0',
							textAlign: 'center',
						}}
					>
						<p
							style={{
								marginBottom: '1.5rem',
								color: '#666',
							}}
						>
							Please sign in to complete your purchase and
							save your items to your account.
						</p>
					</div>
				</ModalFactory>

				<ModalFactory
					kind='custom-puzzle'
					open={activeModal === 'custom-puzzle'}
					title='Create Custom Puzzle'
					onClose={() => setActiveModal(null)}
					onConfirm={() => setActiveModal(null)}
					confirmText='Create Puzzle'
					cancelText='Cancel'
				>
					<div style={{ padding: '1rem 0' }}>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '1rem',
								marginBottom: '1rem',
							}}
						>
							<div>
								<label
									style={{
										display: 'block',
										marginBottom: '0.5rem',
									}}
								>
									Grid Size:
								</label>
								<select
									style={{
										width: '100%',
										padding: '0.5rem',
										borderRadius: '4px',
										border: '1px solid #ccc',
									}}
								>
									<option value='4x4'>4x4</option>
									<option value='5x5'>5x5</option>
									<option value='6x6'>6x6</option>
								</select>
							</div>
							<div>
								<label
									style={{
										display: 'block',
										marginBottom: '0.5rem',
									}}
								>
									Difficulty:
								</label>
								<select
									style={{
										width: '100%',
										padding: '0.5rem',
										borderRadius: '4px',
										border: '1px solid #ccc',
									}}
								>
									<option value='easy'>Easy</option>
									<option value='medium'>Medium</option>
									<option value='hard'>Hard</option>
								</select>
							</div>
						</div>
					</div>
				</ModalFactory>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Complete interactive demo showing modal workflows and chaining. All modals are created using the same ModalFactory with different configurations.',
			},
		},
	},
};
