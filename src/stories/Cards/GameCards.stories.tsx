import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
} from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/Game Cards',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Game-specific card components designed for gaming interfaces. ' +
					'Includes puzzle cards, match summaries, room information, and more.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'game',
				'puzzle',
				'room-info',
				'match-summary',
				'achievement',
				'leaderboard',
			],
			description: 'The type of game card to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

export const GameCard: Story = {
	args: {
		kind: 'game',
		title: 'Daily Challenge',
		subtitle: 'Word Connections Pro',
		content: (
			<div>
				<p
					style={{
						margin: '0.5rem 0',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					🎯 <span>Find 4 groups of connected words</span>
				</p>
				<p
					style={{
						margin: '0.5rem 0',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					⏰ <span>Time limit: 5 minutes</span>
				</p>
				<p
					style={{
						margin: '0.5rem 0',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					🏆 <span>Reward: 50 XP + Bonus</span>
				</p>
				<p
					style={{
						margin: '0.5rem 0',
						display: 'flex',
						alignItems: 'center',
						gap: '0.5rem',
					}}
				>
					👥 <span>Players: 847 completed today</span>
				</p>
			</div>
		),
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					marginTop: '1rem',
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
						fontWeight: '500',
					}}
				>
					Start Challenge
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: 'transparent',
						color: '#007bff',
						border: '1px solid #007bff',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					View Rules
				</button>
			</div>
		),
	},
};

export const PuzzleCard: Story = {
	args: {
		kind: 'puzzle',
		title: 'Puzzle #247',
		subtitle: 'Science & Nature Theme',
		content: (
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '0.5rem 0',
					}}
				>
					<span>🧩 Difficulty:</span>
					<span
						style={{ fontWeight: '600', color: '#dc3545' }}
					>
						Hard
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '0.5rem 0',
					}}
				>
					<span>📊 Success Rate:</span>
					<span style={{ fontWeight: '600' }}>32%</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '0.5rem 0',
					}}
				>
					<span>⭐ Best Time:</span>
					<span
						style={{ fontWeight: '600', color: '#28a745' }}
					>
						2:45
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						margin: '0.5rem 0',
					}}
				>
					<span>🎯 Your Record:</span>
					<span style={{ fontWeight: '600' }}>
						Not attempted
					</span>
				</div>
			</div>
		),
	},
};

export const RoomInfoCard: Story = {
	args: {
		kind: 'room-info',
		title: 'Game Room: ALPHA-7',
		subtitle: 'Competitive Multiplayer',
		content: (
			<div>
				<div
					style={{
						background: '#f8f9fa',
						padding: '1rem',
						borderRadius: '0.5rem',
						marginBottom: '1rem',
					}}
				>
					<h4
						style={{
							margin: '0 0 0.5rem 0',
							fontSize: '1.1rem',
						}}
					>
						Room Status
					</h4>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: '0.5rem',
						}}
					>
						<div>
							👥 Players: <strong>4/4</strong>
						</div>
						<div>
							🎮 Mode: <strong>Competitive</strong>
						</div>
						<div>
							⏱️ Round Time: <strong>3 min</strong>
						</div>
						<div>
							🏆 Prize Pool: <strong>500 XP</strong>
						</div>
					</div>
				</div>
				<div>
					<h5 style={{ margin: '0 0 0.5rem 0' }}>
						Current Players:
					</h5>
					<ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
						<li>🥇 MasterGamer (Host)</li>
						<li>🥈 PuzzleQueen</li>
						<li>🥉 WordWizard</li>
						<li>📍 YOU</li>
					</ul>
				</div>
			</div>
		),
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					marginTop: '1rem',
				}}
			>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
						fontWeight: '500',
						flex: 1,
					}}
				>
					Ready Up
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#dc3545',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Leave
				</button>
			</div>
		),
	},
};

export const MatchSummaryCard: Story = {
	args: {
		kind: 'match-summary',
		title: 'Match Complete!',
		subtitle: 'Victory - 3rd Place 🥉',
		content: (
			<div>
				<div
					style={{
						background:
							'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
						padding: '1rem',
						borderRadius: '0.5rem',
						marginBottom: '1rem',
						textAlign: 'center',
					}}
				>
					<div
						style={{
							fontSize: '2rem',
							marginBottom: '0.5rem',
						}}
					>
						🎯
					</div>
					<div
						style={{
							fontSize: '1.5rem',
							fontWeight: 'bold',
						}}
					>
						1,250 Points
					</div>
				</div>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '0.5rem',
					}}
				>
					<div>
						⏱️ Time: <strong>4:32</strong>
					</div>
					<div>
						🎪 Bonus: <strong>Speed</strong>
					</div>
					<div>
						💰 XP Earned: <strong>+75</strong>
					</div>
					<div>
						📈 Rank Change: <strong>+2</strong>
					</div>
				</div>

				<div
					style={{
						marginTop: '1rem',
						padding: '0.75rem',
						background: '#e3f2fd',
						borderRadius: '0.375rem',
					}}
				>
					<strong>Achievement Unlocked!</strong>
					<br />
					<small>First Top 3 Finish</small>
				</div>
			</div>
		),
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					marginTop: '1rem',
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
						flex: 1,
					}}
				>
					Play Again
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
					Share
				</button>
			</div>
		),
	},
};

export const AchievementCard: Story = {
	args: {
		kind: 'achievement',
		title: '🏆 Speed Demon',
		subtitle: 'Complete 10 puzzles under 1 minute',
		content: (
			<div>
				<div
					style={{
						background:
							'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						color: 'white',
						padding: '1rem',
						borderRadius: '0.5rem',
						textAlign: 'center',
						marginBottom: '1rem',
					}}
				>
					<div
						style={{
							fontSize: '3rem',
							marginBottom: '0.5rem',
						}}
					>
						⚡
					</div>
					<div
						style={{
							fontSize: '1.1rem',
							fontWeight: 'bold',
						}}
					>
						Progress: 7/10
					</div>
				</div>

				<div style={{ marginBottom: '1rem' }}>
					<div
						style={{
							background: '#e9ecef',
							height: '8px',
							borderRadius: '4px',
							overflow: 'hidden',
						}}
					>
						<div
							style={{
								background:
									'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
								height: '100%',
								width: '70%',
								transition: 'width 0.3s ease',
							}}
						></div>
					</div>
					<small style={{ color: '#666' }}>
						3 more to unlock!
					</small>
				</div>

				<div style={{ fontSize: '0.9rem', color: '#666' }}>
					<p>
						<strong>Reward:</strong> 200 XP + Speed Badge
					</p>
					<p>
						<strong>Rarity:</strong> Epic (5% of players)
					</p>
				</div>
			</div>
		),
	},
};

export const LeaderboardCard: Story = {
	args: {
		kind: 'leaderboard',
		title: 'Weekly Leaderboard',
		subtitle: 'Top Players This Week',
		content: (
			<div>
				<div style={{ marginBottom: '1rem' }}>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							padding: '0.5rem',
							background: '#fff3cd',
							borderRadius: '0.375rem',
							border: '1px solid #ffeaa7',
						}}
					>
						<span style={{ fontSize: '1.5rem' }}>🥉</span>
						<div>
							<div style={{ fontWeight: 'bold' }}>
								#3 Sarah_Puzzler
							</div>
							<div
								style={{
									fontSize: '0.9rem',
									color: '#666',
								}}
							>
								2,847 points
							</div>
						</div>
					</div>
				</div>

				<div style={{ fontSize: '0.9rem' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							margin: '0.25rem 0',
						}}
					>
						<span>Games Played:</span>
						<strong>34</strong>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							margin: '0.25rem 0',
						}}
					>
						<span>Average Time:</span>
						<strong>1:23</strong>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							margin: '0.25rem 0',
						}}
					>
						<span>Win Rate:</span>
						<strong>89%</strong>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							margin: '0.25rem 0',
						}}
					>
						<span>Best Streak:</span>
						<strong>15 wins</strong>
					</div>
				</div>

				<div
					style={{
						marginTop: '1rem',
						padding: '0.5rem',
						background: '#f8f9fa',
						borderRadius: '0.375rem',
						textAlign: 'center',
						fontSize: '0.85rem',
					}}
				>
					<strong>Your Rank:</strong> #12 (↑3 from last
					week)
				</div>
			</div>
		),
	},
};

// Game Cards Gallery
export const GameCardsShowcase: Story = {
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
				kind='game'
				title='Speed Round'
				subtitle='Quick Challenge'
				content={
					<div>
						<p>⚡ 30-second puzzles</p>
						<p>🎯 Beat your best time</p>
						<p>💎 Triple XP reward</p>
					</div>
				}
			/>

			<UnifiedCard
				kind='puzzle'
				title='Mystery Puzzle'
				subtitle='??? Theme'
				content={
					<div>
						<p>🎭 Theme hidden until start</p>
						<p>📊 Difficulty: Unknown</p>
						<p>🎲 Random category</p>
					</div>
				}
			/>

			<UnifiedCard
				kind='achievement'
				title='🎖️ Perfectionist'
				subtitle='Score 100% on 5 puzzles'
				content='Progress: 3/5 completed'
			/>

			<UnifiedCard
				kind='room-info'
				title='Training Room'
				subtitle='Practice Mode'
				content={
					<div>
						<p>👤 Solo practice</p>
						<p>📚 Tutorial included</p>
						<p>🔄 Unlimited attempts</p>
					</div>
				}
			/>
		</div>
	),
};
