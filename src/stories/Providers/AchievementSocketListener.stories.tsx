import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
} from '../../components/Providers';

const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/AchievementSocketListener (DRY System)',
	component: UnifiedProvider,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### AchievementSocketListener (DRY System)

An achievement socket listener component built using the unified Providers system. Provides achievement event listening for the application with socket event handling and achievement notifications.

Uses the DRY Provider system with \`kind="achievement-socket-listener"\` to render an achievement socket listener with consistent configuration and behavior.`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'achievement-socket-listener',
				'socket-provider',
				'user-settings-provider',
			],
			description: 'Type of provider to render',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedProvider>;

export const Default: Story = {
	args: {
		kind: 'achievement-socket-listener',
	},
	render: (args) => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<p>
				AchievementSocketListener is active (invisible
				component)
			</p>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				This component listens for socket events but doesn't
				render any UI.
			</p>
			<UnifiedProvider {...args} />
		</div>
	),
};

// DRY System Examples using factory patterns
export const ListenerUsingFactory: Story = {
	render: () => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<p>Achievement Listener (Factory Pattern)</p>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				Using ultra-short P alias for rapid development.
			</p>
			<P kind='achievement-socket-listener' />
		</div>
	),
};

export const ListenerUsingPresets: Story = {
	render: () => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<p>Achievement Listener (Presets Pattern)</p>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				Using ProviderPresets for common configurations.
			</p>
			{ProviderPresets.ACHIEVEMENT_LISTENER()}
		</div>
	),
};

export const FactoryPattern: Story = {
	name: '🏭 Factory Pattern',
	render: () => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<h3>ProviderFactory AchievementListener:</h3>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				Using ProviderFactory for programmatic creation.
			</p>
			<ProviderFactory kind='achievement-socket-listener'>
				<div
					style={{
						padding: '1rem',
						border: '1px solid #ddd',
						borderRadius: '8px',
					}}
				>
					Achievement listener created via factory
				</div>
			</ProviderFactory>
		</div>
	),
};

export const UltraDRYExample: Story = {
	name: '⚡ Ultra-DRY (P)',
	render: () => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<h3>Ultra-short "P" alias:</h3>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				Using ultra-short P alias for rapid development.
			</p>
			<P kind='achievement-socket-listener'>
				<div
					style={{
						padding: '1rem',
						border: '1px solid #ddd',
						borderRadius: '8px',
					}}
				>
					Achievement listener is active
				</div>
			</P>
		</div>
	),
};

export const PresetExample: Story = {
	name: '🎯 Preset Pattern',
	render: () => (
		<div
			style={{
				padding: '2rem',
				border: '1px dashed #ccc',
				borderRadius: '8px',
			}}
		>
			<h3>ProviderPresets.ACHIEVEMENT_LISTENER:</h3>
			<p style={{ fontSize: '0.9em', color: '#666' }}>
				Using pre-configured achievement listener pattern.
			</p>
			{ProviderPresets.ACHIEVEMENT_LISTENER()}
		</div>
	),
};
