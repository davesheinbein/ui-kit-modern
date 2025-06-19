import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
	useUserSettings,
} from '../../components/Providers';

// Example component that uses the user settings context
const UserSettingsDemo: React.FC = () => {
	const { settings, setSettings } = useUserSettings();

	return (
		<div
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
			}}
		>
			<h3>User Settings</h3>
			<div style={{ marginBottom: '1rem' }}>
				<p>
					Chat Enabled:{' '}
					{settings?.chatEnabled ? 'Yes' : 'No'}
				</p>
				<p>
					Profanity Filter:{' '}
					{settings?.profanityFilter ? 'Yes' : 'No'}
				</p>
				<p>
					Notifications:{' '}
					{settings?.notificationsEnabled ? 'Yes' : 'No'}
				</p>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
				}}
			>
				<label>
					<input
						type='checkbox'
						checked={settings?.chatEnabled || false}
						onChange={(e) =>
							setSettings({
								...settings,
								chatEnabled: e.target.checked,
							} as any)
						}
					/>{' '}
					Chat Enabled
				</label>
				<label>
					<input
						type='checkbox'
						checked={settings?.profanityFilter || false}
						onChange={(e) =>
							setSettings({
								...settings,
								profanityFilter: e.target.checked,
							} as any)
						}
					/>{' '}
					Profanity Filter
				</label>
				<label>
					<input
						type='checkbox'
						checked={
							settings?.notificationsEnabled || false
						}
						onChange={(e) =>
							setSettings({
								...settings,
								notificationsEnabled: e.target.checked,
							} as any)
						}
					/>{' '}
					Notifications Enabled
				</label>
			</div>
		</div>
	);
};

const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/UserSettingsProvider (DRY System)',
	component: UnifiedProvider,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A DRY user settings context provider that manages user preferences and settings. Built using the unified Providers system.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'user-settings-provider',
				'socket-provider',
				'achievement-socket-listener',
			],
			description: 'Type of provider to render',
		},
		children: {
			control: false,
			description:
				'Child components that will have access to user settings context',
		},
		initialSettings: {
			control: 'object',
			description: 'Initial user settings object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedProvider>;

export const Default: Story = {
	args: {
		kind: 'user-settings-provider',
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<UserSettingsDemo />
		</UnifiedProvider>
	),
};

export const WithInitialSettings: Story = {
	args: {
		kind: 'user-settings-provider',
		initialSettings: {
			chatEnabled: false,
			profanityFilter: true,
			notificationsEnabled: false,
		},
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<UserSettingsDemo />
		</UnifiedProvider>
	),
};

// DRY System Examples using factory patterns
export const SettingsUsingFactory: Story = {
	render: () => (
		<P
			kind='user-settings-provider'
			initialSettings={{
				chatEnabled: true,
				profanityFilter: false,
				notificationsEnabled: true,
			}}
		>
			<UserSettingsDemo />
		</P>
	),
};

export const SettingsUsingPresets: Story = {
	render: () =>
		ProviderPresets.USER_SETTINGS({
			chatEnabled: false,
			profanityFilter: true,
			notificationsEnabled: false,
		}),
};
