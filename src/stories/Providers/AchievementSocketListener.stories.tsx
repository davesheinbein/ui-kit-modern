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
				component:
					'A DRY socket listener component that handles achievement-related WebSocket events. This component renders nothing but manages socket event handling. Built using the unified Providers system.',
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
