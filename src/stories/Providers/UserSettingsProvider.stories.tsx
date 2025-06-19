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
	const userSettingsContext = useUserSettings();

	if (!userSettingsContext) {
		return <div>No user settings context available</div>;
	}

	const { settings, setSettings } = userSettingsContext;

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
				component: `### UserSettingsProvider (DRY System)

A user settings provider component built using the unified Providers system. Provides user settings context for the application with settings management, persistence, and real-time updates.

Uses the DRY Provider system with \`kind="user-settings-provider"\` to render a user settings provider with consistent configuration and behavior.`,
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

export const FactoryPattern: Story = {
	name: '🏭 Factory Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>ProviderFactory UserSettings:</h3>
				<ProviderFactory
					kind='user-settings-provider'
					initialSettings={{
						theme: 'dark',
						notifications: true,
						chatEnabled: true,
						profanityFilter: false,
					}}
				>
					<UserSettingsDemo />
				</ProviderFactory>
			</div>
		</div>
	),
};

export const UltraDRYExample: Story = {
	name: '⚡ Ultra-DRY (P)',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>Ultra-short "P" alias:</h3>
				<P
					kind='user-settings-provider'
					initialSettings={{
						theme: 'light',
						notifications: false,
						chatEnabled: false,
						profanityFilter: true,
					}}
				>
					<UserSettingsDemo />
				</P>
			</div>
		</div>
	),
};

export const PresetExample: Story = {
	name: '🎯 Preset Pattern',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>ProviderPresets.USER_SETTINGS:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.USER_SETTINGS({
						theme: 'dark',
						notifications: true,
						chatEnabled: true,
					})}
					<UserSettingsDemo />
				</div>
			</div>
		</div>
	),
};
