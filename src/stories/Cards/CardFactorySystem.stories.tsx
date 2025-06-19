import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
	QuickCards,
	CardFactoryClass,
	CARD_CONFIGURATIONS,
	CARD_GROUPS,
} from '../../components/Card';

const meta: Meta<typeof CardFactory> = {
	title: 'Cards/Card Factory System',
	component: CardFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Comprehensive demonstration of the DRY Card Factory system. ' +
					'Shows all the different ways to create cards using the unified architecture, ' +
					'similar to the Button Factory system but for cards.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof CardFactory>;

// Factory Function Examples
export const FactoryFunction: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				CardFactory Function
			</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				The primary factory function for creating cards with
				specific configurations.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<CardFactory
					kind='friend'
					friend={{
						id: '1',
						username: 'FactoryFriend',
						online: true,
						division: 'Gold',
						tier: 'II',
					}}
					onMessage={() => {}}
					onChallenge={() => {}}
				/>

				<CardFactory
					kind='game'
					title='Factory Game'
					content='Created with CardFactory function'
				/>

				<CardFactory
					kind='stats'
					title='Factory Stats'
					statValue='95%'
					statLabel='Success rate'
				/>
			</div>
		</div>
	),
};

// Card Presets Examples
export const CardPresetsDemo: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				CardPresets - Pre-configured Cards
			</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Ready-to-use card components for common use cases.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.FriendCard
					</h4>
					<CardPresets.FriendCard
						friend={{
							id: '1',
							username: 'PresetFriend',
							online: true,
							division: 'Diamond',
							tier: 'I',
						}}
						onMessage={() => {}}
						onChallenge={() => {}}
					/>
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.GameCard
					</h4>
					<CardPresets.GameCard
						title='Preset Game Card'
						content='Pre-configured game card with optimal settings'
					/>
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.StatsCard
					</h4>
					<CardPresets.StatsCard
						title='Performance'
						statValue='87%'
						statLabel='Win rate'
					/>
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.NotificationCard
					</h4>
					<CardPresets.NotificationCard
						title='System Update'
						content='New features are available'
						notificationType='info'
					/>
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.InfoCard
					</h4>
					<CardPresets.InfoCard
						title='Information Card'
						content='General information display with hover effects'
					/>
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardPresets.ActionCard
					</h4>
					<CardPresets.ActionCard
						title='Action Card'
						content='Interactive card with click and hover effects'
						onClick={() => alert('Action card clicked!')}
					/>
				</div>
			</div>
		</div>
	),
};

// QuickCards Examples
export const QuickCardsDemo: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				QuickCards - Ultra-short Aliases
			</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Ultra-short factory functions for rapid development.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(280px, 1fr))',
				}}
			>
				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.f (friend)
					</h4>
					{QuickCards.f({
						friend: {
							id: '1',
							username: 'QuickFriend',
							online: true,
							division: 'Gold',
							tier: 'III',
						},
						onMessage: () => {},
						onChallenge: () => {},
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.g (game)
					</h4>
					{QuickCards.g({
						title: 'Quick Game',
						content: 'Fast game card creation',
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.s (stats)
					</h4>
					{QuickCards.s({
						title: 'Quick Stats',
						statValue: '42',
						statLabel: 'Level',
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.info
					</h4>
					{QuickCards.info({
						title: 'Info Card',
						content: 'Quick info card with hover',
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.action
					</h4>
					{QuickCards.action({
						title: 'Action Card',
						content: 'Quick interactive card',
						onClick: () => alert('Quick action!'),
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						QuickCards.display
					</h4>
					{QuickCards.display({
						title: 'Display Card',
						content: 'Clean outlined display',
					})}
				</div>
			</div>
		</div>
	),
};

// Card Factory Class Examples
export const CardFactoryClassDemo: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				CardFactoryClass - Programmatic Creation
			</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Class-based factory for advanced programmatic card
				creation.
			</p>

			<div
				style={{
					display: 'grid',
					gap: '1rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardFactoryClass.create
					</h4>
					{CardFactoryClass.create('game', {
						title: 'Class-created Game',
						content:
							'Created using CardFactoryClass.create method',
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardFactoryClass.friend
					</h4>
					{CardFactoryClass.friend({
						friend: {
							id: '1',
							username: 'ClassFriend',
							online: true,
							division: 'Silver',
							tier: 'II',
						},
						onMessage: () => {},
						onChallenge: () => {},
					})}
				</div>

				<div>
					<h4
						style={{
							marginBottom: '0.5rem',
							fontSize: '1rem',
						}}
					>
						CardFactoryClass.stats
					</h4>
					{CardFactoryClass.stats({
						title: 'Class Stats',
						statValue: '78%',
						statLabel: 'Accuracy',
					})}
				</div>
			</div>
		</div>
	),
};

// Configuration System Demo
export const ConfigurationSystemDemo: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				Card Configuration System
			</h3>
			<p style={{ marginBottom: '1.5rem', color: '#666' }}>
				Demonstration of the underlying configuration system
				that powers all card types.
			</p>

			<div style={{ marginBottom: '2rem' }}>
				<h4 style={{ marginBottom: '1rem' }}>
					Available Card Kinds
				</h4>
				<div
					style={{
						display: 'grid',
						gap: '0.5rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(150px, 1fr))',
						fontSize: '0.9rem',
					}}
				>
					{Object.keys(CARD_CONFIGURATIONS).map((kind) => (
						<div
							key={kind}
							style={{
								padding: '0.5rem',
								background: '#f8f9fa',
								borderRadius: '0.25rem',
								textAlign: 'center',
							}}
						>
							{kind}
						</div>
					))}
				</div>
			</div>

			<div style={{ marginBottom: '2rem' }}>
				<h4 style={{ marginBottom: '1rem' }}>
					Card Groups
				</h4>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(250px, 1fr))',
					}}
				>
					{Object.entries(CARD_GROUPS).map(
						([groupName, group]) => (
							<div
								key={groupName}
								style={{
									padding: '1rem',
									background: '#f8f9fa',
									borderRadius: '0.5rem',
								}}
							>
								<h5
									style={{
										margin: '0 0 0.5rem 0',
										textTransform: 'capitalize',
									}}
								>
									{groupName
										.replace(/([A-Z])/g, ' $1')
										.trim()}
								</h5>
								<div style={{ fontSize: '0.85rem' }}>
									{Object.values(group).join(', ')}
								</div>
							</div>
						)
					)}
				</div>
			</div>

			<div>
				<h4 style={{ marginBottom: '1rem' }}>
					Sample Cards from Each Group
				</h4>
				<div
					style={{
						display: 'grid',
						gap: '1rem',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
					}}
				>
					{/* User Interface Group */}
					<UnifiedCard
						kind='friend'
						title='User Interface Group'
						friend={{
							id: '1',
							username: 'UIExample',
							online: true,
							division: 'Gold',
							tier: 'I',
						}}
						onMessage={() => {}}
						onChallenge={() => {}}
					/>

					{/* Game Interface Group */}
					<UnifiedCard
						kind='game'
						title='Game Interface Group'
						content='Game-specific card functionality'
					/>

					{/* Information Display Group */}
					<UnifiedCard
						kind='stats'
						title='Information Display Group'
						statValue='92%'
						statLabel='Example metric'
					/>

					{/* Layout Elements Group */}
					<UnifiedCard
						kind='elevated'
						title='Layout Elements Group'
						content='Basic layout and styling options'
					/>
				</div>
			</div>
		</div>
	),
};

// Complete Factory Comparison
export const CompleteFactoryComparison: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				Complete Factory System Comparison
			</h3>
			<p style={{ marginBottom: '2rem', color: '#666' }}>
				All methods to create the same card type -
				demonstrating the flexibility of the DRY system.
			</p>

			<div style={{ display: 'grid', gap: '2rem' }}>
				{/* Friend Card Examples */}
				<div>
					<h4 style={{ marginBottom: '1rem' }}>
						Friend Card - All Creation Methods
					</h4>
					<div
						style={{
							display: 'grid',
							gap: '1rem',
							gridTemplateColumns:
								'repeat(auto-fit, minmax(280px, 1fr))',
						}}
					>
						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								UnifiedCard Direct
							</h5>
							<UnifiedCard
								kind='friend'
								friend={{
									id: '1',
									username: 'DirectUser',
									online: true,
									division: 'Gold',
									tier: 'II',
								}}
								onMessage={() => {}}
								onChallenge={() => {}}
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardFactory Function
							</h5>
							<CardFactory
								kind='friend'
								friend={{
									id: '2',
									username: 'FactoryUser',
									online: true,
									division: 'Gold',
									tier: 'II',
								}}
								onMessage={() => {}}
								onChallenge={() => {}}
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardPresets.FriendCard
							</h5>
							<CardPresets.FriendCard
								friend={{
									id: '3',
									username: 'PresetUser',
									online: true,
									division: 'Gold',
									tier: 'II',
								}}
								onMessage={() => {}}
								onChallenge={() => {}}
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								QuickCards.f
							</h5>
							{QuickCards.f({
								friend: {
									id: '4',
									username: 'QuickUser',
									online: true,
									division: 'Gold',
									tier: 'II',
								},
								onMessage: () => {},
								onChallenge: () => {},
							})}
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardFactoryClass.friend
							</h5>
							{CardFactoryClass.friend({
								friend: {
									id: '5',
									username: 'ClassUser',
									online: true,
									division: 'Gold',
									tier: 'II',
								},
								onMessage: () => {},
								onChallenge: () => {},
							})}
						</div>
					</div>
				</div>

				{/* Stats Card Examples */}
				<div>
					<h4 style={{ marginBottom: '1rem' }}>
						Stats Card - All Creation Methods
					</h4>
					<div
						style={{
							display: 'grid',
							gap: '1rem',
							gridTemplateColumns:
								'repeat(auto-fit, minmax(280px, 1fr))',
						}}
					>
						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								UnifiedCard Direct
							</h5>
							<UnifiedCard
								kind='stats'
								title='Direct Stats'
								statValue='85%'
								statLabel='Success rate'
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardFactory Function
							</h5>
							<CardFactory
								kind='stats'
								title='Factory Stats'
								statValue='90%'
								statLabel='Win rate'
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardPresets.StatsCard
							</h5>
							<CardPresets.StatsCard
								title='Preset Stats'
								statValue='92%'
								statLabel='Accuracy'
							/>
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								QuickCards.s
							</h5>
							{QuickCards.s({
								title: 'Quick Stats',
								statValue: '88%',
								statLabel: 'Performance',
							})}
						</div>

						<div>
							<h5
								style={{
									fontSize: '0.9rem',
									marginBottom: '0.5rem',
									color: '#666',
								}}
							>
								CardFactoryClass.stats
							</h5>
							{CardFactoryClass.stats({
								title: 'Class Stats',
								statValue: '94%',
								statLabel: 'Efficiency',
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};
