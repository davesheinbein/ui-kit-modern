import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
	useSocket,
	useUserSettings,
	useThemePalette,
} from '../../components/Providers';
import type { UnifiedProviderProps } from '../../components/Providers';

// Example component that uses the provider context
const ProviderDemo: React.FC<{ providerType: string }> = ({
	providerType,
}) => (
	<div
		style={{
			padding: '2rem',
			border: '1px solid #e5e7eb',
			borderRadius: '8px',
			background: '#f9fafb',
			margin: '1rem 0',
		}}
	>
		<h3>Provider Demo: {providerType}</h3>
		<p>
			This component would consume the context provided by
			the {providerType}.
		</p>
		<div
			style={{
				background: '#fff',
				padding: '1rem',
				borderRadius: '4px',
				fontFamily: 'monospace',
				fontSize: '0.875rem',
			}}
		>
			{providerType} context is active and available to
			child components.
		</div>
	</div>
);

// Specific demo components for each provider type
const SocketDemo: React.FC = () => {
	const socketContext = useSocket();

	if (!socketContext) {
		return <div>No socket context available</div>;
	}

	const { isConnected, socket, emit, on } = socketContext;

	return (
		<div
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
			}}
		>
			<h3>Socket Status</h3>
			<p>Connected: {isConnected ? 'Yes' : 'No'}</p>
			<p>
				Socket: {socket ? 'Available' : 'Not available'}
			</p>
			<div
				style={{
					marginTop: '1rem',
					display: 'flex',
					gap: '0.5rem',
				}}
			>
				<Button
					kind='primary'
					onClick={() =>
						emit('test-event', { message: 'Hello' })
					}
					disabled={!isConnected}
				>
					Send Test Event
				</Button>
				<Button
					kind='secondary'
					onClick={() =>
						on('test-response', (data: any) =>
							console.log('Received:', data)
						)
					}
					disabled={!isConnected}
				>
					Listen for Response
				</Button>
			</div>
		</div>
	);
};

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

const ThemePaletteDemo: React.FC = () => {
	const themePaletteContext = useThemePalette();

	if (!themePaletteContext) {
		return (
			<div
				style={{
					padding: '1rem',
					border: '1px solid #ddd',
					borderRadius: '8px',
				}}
			>
				<p>Theme Palette Provider not found</p>
			</div>
		);
	}

	const { palette, setPalette, currentTheme, setTheme } =
		themePaletteContext;

	return (
		<div
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
				backgroundColor: '#fff',
				color: '#333',
			}}
		>
			<h3>Theme Palette Status</h3>
			<p>Current Theme: {currentTheme}</p>
			<p>Palette Colors: {Object.keys(palette).length}</p>
			<div style={{ marginTop: '1rem' }}>
				<Button
					kind='primary'
					onClick={() =>
						setTheme(
							currentTheme === 'light' ? 'dark' : 'light'
						)
					}
				>
					Switch Theme
				</Button>
			</div>
		</div>
	);
};

const AchievementListenerDemo: React.FC = () => (
	<div
		style={{
			padding: '1rem',
			border: '1px solid #ddd',
			borderRadius: '8px',
		}}
	>
		<h3>Achievement Socket Listener Status</h3>
		<p style={{ fontSize: '0.9em', color: '#666' }}>
			Achievement listener is active (invisible component
			that listens for socket events)
		</p>
		<div
			style={{
				background: '#f0f8ff',
				padding: '0.75rem',
				borderRadius: '4px',
				marginTop: '0.5rem',
			}}
		>
			🏆 Ready to receive achievement notifications
		</div>
	</div>
);

// Meta configuration for the DRY Provider system
const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/Provider',
	component: UnifiedProvider,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### Provider (DRY System)

The new unified Provider system provides a single component that can render any provider type through configuration:

- **UnifiedProvider**: Main component with kind prop
- **ProviderFactory**: Factory function for programmatic creation  
- **P**: Ultra-short alias for rapid development
- **ProviderPresets**: Pre-configured provider patterns

### Usage Examples:

Using UnifiedProvider with kind prop:
\`\`\`tsx
<UnifiedProvider kind="socket-provider" autoConnect url="/api/socket" />
<UnifiedProvider kind="user-settings-provider" initialSettings={settings} />
<UnifiedProvider kind="achievement-socket-listener" />
\`\`\`

Using ProviderFactory:
\`\`\`tsx
<ProviderFactory kind="socket-provider" autoConnect={true} />
<ProviderFactory kind="user-settings-provider" />
\`\`\`

Using ultra-short alias:
\`\`\`tsx
<P kind="theme-palette-provider" />
\`\`\`

Using presets:
\`\`\`tsx
{ProviderPresets.SOCKET_CONNECTION(session, true)}
{ProviderPresets.USER_SETTINGS(initialSettings)}
\`\`\`

Available Provider Kinds: socket-provider, user-settings-provider, achievement-socket-listener, theme-palette-provider`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'socket-provider',
				'user-settings-provider',
				'achievement-socket-listener',
				'theme-palette-provider',
			],
			description: 'Provider type/kind',
		},
		autoConnect: {
			control: 'boolean',
			description: 'Auto-connect for socket provider',
		},
		url: {
			control: 'text',
			description: 'Socket URL (for socket provider)',
		},
		initialSettings: {
			control: 'object',
			description:
				'Initial settings (for settings provider)',
		},
		session: {
			control: 'object',
			description: 'Session object (for socket provider)',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedProvider>;

// ===== BASIC PROVIDER VARIANTS =====

export const SocketProvider: Story = {
	name: '🔌 Socket Provider',
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: '/api/socket',
		children: <SocketDemo />,
	},
};

export const UserSettingsProvider: Story = {
	name: '⚙️ User Settings Provider',
	args: {
		kind: 'user-settings-provider',
		initialSettings: {
			theme: 'light',
			notifications: true,
			language: 'en',
		},
		children: <UserSettingsDemo />,
	},
};

export const AchievementSocketListener: Story = {
	name: '🏆 Achievement Socket Listener',
	args: {
		kind: 'achievement-socket-listener',
		children: <AchievementListenerDemo />,
	},
};

export const ThemePaletteProvider: Story = {
	name: '🎨 Theme Palette Provider',
	args: {
		kind: 'theme-palette-provider',
		children: <ThemePaletteDemo />,
	},
};

// ===== PROVIDER CONFIGURATIONS =====

export const SocketWithAutoConnect: Story = {
	name: '🔌 Socket (Auto-Connect)',
	args: {
		kind: 'socket-provider',
		autoConnect: true,
		url: '/api/socket',
		session: { userId: '123', token: 'abc123' },
		children: (
			<ProviderDemo providerType='Auto-Connect Socket Provider' />
		),
	},
};

export const UserSettingsWithDefaults: Story = {
	name: '⚙️ User Settings (With Defaults)',
	args: {
		kind: 'user-settings-provider',
		initialSettings: {
			theme: 'dark',
			notifications: false,
			language: 'en',
			soundEnabled: true,
			difficulty: 'medium',
		},
		children: (
			<ProviderDemo providerType='User Settings Provider with Defaults' />
		),
	},
};

// ===== FACTORY PATTERN EXAMPLES =====

export const FactoryPattern: Story = {
	name: '🏭 Factory Pattern Example',
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
				<h3>ProviderFactory Examples:</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<ProviderFactory
						kind='socket-provider'
						autoConnect={true}
					>
						<ProviderDemo providerType='Factory Socket Provider' />
					</ProviderFactory>
					<ProviderFactory
						kind='user-settings-provider'
						initialSettings={{ theme: 'light' }}
					>
						<ProviderDemo providerType='Factory User Settings Provider' />
					</ProviderFactory>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the ProviderFactory function for programmatic provider creation.',
			},
		},
	},
};

export const UltraDRYAlias: Story = {
	name: '⚡ Ultra-DRY Alias (P)',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>Ultra-short "P" alias:</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<P kind='theme-palette-provider'>
						<ProviderDemo providerType='Ultra-DRY Theme Provider' />
					</P>
					<P kind='achievement-socket-listener'>
						<ProviderDemo providerType='Ultra-DRY Achievement Listener' />
					</P>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'The ultra-short "P" alias for maximum development speed.',
			},
		},
	},
};

export const PresetPatterns: Story = {
	name: '🎯 Preset Patterns',
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<div>
				<h3>ProviderPresets Examples:</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					{ProviderPresets.SOCKET_CONNECTION(
						undefined,
						true,
						undefined
					)}
					{ProviderPresets.USER_SETTINGS({
						theme: 'light',
					})}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Pre-configured provider patterns for common use cases.',
			},
		},
	},
};

// ===== NESTED PROVIDERS EXAMPLE =====

export const NestedProviders: Story = {
	name: '🔗 Nested Providers',
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3>Nested Provider Setup:</h3>
			<UnifiedProvider kind='theme-palette-provider'>
				<UnifiedProvider
					kind='user-settings-provider'
					initialSettings={{
						theme: 'dark',
						notifications: true,
					}}
				>
					<UnifiedProvider
						kind='socket-provider'
						autoConnect={true}
						url='/api/socket'
					>
						<div
							style={{
								padding: '2rem',
								border: '2px dashed #d1d5db',
								borderRadius: '8px',
								background: '#f9fafb',
							}}
						>
							<h4>App Component</h4>
							<p>
								This component has access to all three
								provider contexts:
							</p>
							<ul>
								<li>Theme Palette Provider</li>
								<li>User Settings Provider</li>
								<li>Socket Provider</li>
							</ul>
							<p>Perfect for a complete app setup!</p>
						</div>
					</UnifiedProvider>
				</UnifiedProvider>
			</UnifiedProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Example showing how to nest multiple providers for a complete application setup.',
			},
		},
	},
};

// ===== COMPREHENSIVE SHOWCASE =====

export const AllVariantsShowcase: Story = {
	name: '🎯 Complete DRY System Showcase',
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
				<h2>🎯 UnifiedProvider with Kind Prop</h2>
				<p>Single component, different kinds:</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<UnifiedProvider
						kind='socket-provider'
						autoConnect
					>
						<ProviderDemo providerType='DRY System Socket' />
					</UnifiedProvider>
					<UnifiedProvider
						kind='user-settings-provider'
						initialSettings={{ theme: 'light' }}
					>
						<ProviderDemo providerType='DRY System Settings' />
					</UnifiedProvider>
					<UnifiedProvider kind='theme-palette-provider'>
						<ProviderDemo providerType='DRY System Theme' />
					</UnifiedProvider>
				</div>
			</div>

			<div>
				<h2>🏭 Factory Pattern</h2>
				<p>Programmatic provider creation:</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<ProviderFactory kind='achievement-socket-listener'>
						<ProviderDemo providerType='Factory Achievement Listener' />
					</ProviderFactory>
				</div>
			</div>

			<div>
				<h2>⚡ Ultra-DRY Alias</h2>
				<p>Maximum convenience with "P":</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<P kind='socket-provider' autoConnect={true}>
						<ProviderDemo providerType='Ultra-DRY Socket' />
					</P>
				</div>
			</div>

			<div>
				<h2>🎯 Preset Patterns</h2>
				<p>
					Pre-configured provider patterns for common use
					cases:
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					{ProviderPresets.SOCKET_CONNECTION(
						undefined,
						true,
						undefined
					)}
					{ProviderPresets.USER_SETTINGS({ theme: 'dark' })}
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: `Complete showcase of the DRY Provider system demonstrating all patterns:

1. **UnifiedProvider**: Single component with kind prop
2. **ProviderFactory**: Factory function pattern  
3. **Ultra-DRY Aliases**: P for maximum convenience
4. **Preset Patterns**: Pre-configured common patterns

This system eliminates code duplication and provides a consistent API for all provider variants.`,
			},
		},
	},
};

// ===== DETAILED PROVIDER VARIANTS =====

export const SocketProviderDetailed: Story = {
	name: '🔌 Socket Provider (Detailed)',
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: 'ws://localhost:3000',
		children: <SocketDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Socket provider with detailed connection status and event handling.',
			},
		},
	},
};

export const SocketAutoConnect: Story = {
	name: '🔌 Socket (Auto-Connect)',
	args: {
		kind: 'socket-provider',
		autoConnect: true,
		url: 'ws://localhost:3000',
		children: <SocketDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Socket provider that automatically connects on mount.',
			},
		},
	},
};

export const SocketWithSession: Story = {
	name: '🔌 Socket (With Session)',
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: 'ws://localhost:3000',
		session: {
			user: { id: '123', name: 'Test User' },
			token: 'abc123',
		},
		children: <SocketDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Socket provider with session data for authentication.',
			},
		},
	},
};

export const UserSettingsDetailed: Story = {
	name: '⚙️ User Settings (Detailed)',
	args: {
		kind: 'user-settings-provider',
		children: <UserSettingsDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'User settings provider with interactive controls.',
			},
		},
	},
};

export const UserSettingsWithInitial: Story = {
	name: '⚙️ User Settings (With Initial)',
	args: {
		kind: 'user-settings-provider',
		initialSettings: {
			chatEnabled: false,
			profanityFilter: true,
			notificationsEnabled: false,
		},
		children: <UserSettingsDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'User settings provider with initial settings configuration.',
			},
		},
	},
};

export const ThemePaletteDetailed: Story = {
	name: '🎨 Theme Palette (Detailed)',
	args: {
		kind: 'theme-palette-provider',
		children: <ThemePaletteDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Theme palette provider with interactive theme switching.',
			},
		},
	},
};

export const AchievementListenerDetailed: Story = {
	name: '🏆 Achievement Listener (Detailed)',
	args: {
		kind: 'achievement-socket-listener',
		children: <AchievementListenerDemo />,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Achievement socket listener that monitors for achievement events.',
			},
		},
	},
};

// ===== PROVIDER-SPECIFIC DRY EXAMPLES =====

export const SocketDRYExamples: Story = {
	name: '🔌 Socket DRY Examples',
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
				<h3>🏭 ProviderFactory Socket:</h3>
				<ProviderFactory
					kind='socket-provider'
					autoConnect={true}
					url='ws://localhost:3000'
				>
					<SocketDemo />
				</ProviderFactory>
			</div>
			<div>
				<h3>⚡ Ultra-DRY (P) Socket:</h3>
				<P
					kind='socket-provider'
					autoConnect={false}
					url='ws://localhost:3000'
				>
					<SocketDemo />
				</P>
			</div>
			<div>
				<h3>🎯 Preset Socket:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.SOCKET_CONNECTION(
						{ user: { id: '123', name: 'Test User' } },
						true,
						'ws://localhost:3000'
					)}
					<SocketDemo />
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All DRY patterns for Socket Provider: Factory, Ultra-DRY, and Presets.',
			},
		},
	},
};

export const UserSettingsDRYExamples: Story = {
	name: '⚙️ User Settings DRY Examples',
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
				<h3>🏭 ProviderFactory UserSettings:</h3>
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
			<div>
				<h3>⚡ Ultra-DRY (P) UserSettings:</h3>
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
			<div>
				<h3>🎯 Preset UserSettings:</h3>
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
	parameters: {
		docs: {
			description: {
				story:
					'All DRY patterns for User Settings Provider: Factory, Ultra-DRY, and Presets.',
			},
		},
	},
};

export const ThemePaletteDRYExamples: Story = {
	name: '🎨 Theme Palette DRY Examples',
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
				<h3>🏭 ProviderFactory ThemePalette:</h3>
				<ProviderFactory kind='theme-palette-provider'>
					<ThemePaletteDemo />
				</ProviderFactory>
			</div>
			<div>
				<h3>⚡ Ultra-DRY (P) ThemePalette:</h3>
				<P kind='theme-palette-provider'>
					<ThemePaletteDemo />
				</P>
			</div>
			<div>
				<h3>🎯 Preset ThemePalette:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.THEME_PALETTE &&
						ProviderPresets.THEME_PALETTE()}
					<ThemePaletteDemo />
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All DRY patterns for Theme Palette Provider: Factory, Ultra-DRY, and Presets.',
			},
		},
	},
};

export const AchievementListenerDRYExamples: Story = {
	name: '🏆 Achievement Listener DRY Examples',
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
				<h3>🏭 ProviderFactory AchievementListener:</h3>
				<ProviderFactory kind='achievement-socket-listener'>
					<AchievementListenerDemo />
				</ProviderFactory>
			</div>
			<div>
				<h3>⚡ Ultra-DRY (P) AchievementListener:</h3>
				<P kind='achievement-socket-listener'>
					<AchievementListenerDemo />
				</P>
			</div>
			<div>
				<h3>🎯 Preset AchievementListener:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.ACHIEVEMENT_LISTENER &&
						ProviderPresets.ACHIEVEMENT_LISTENER()}
					<AchievementListenerDemo />
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All DRY patterns for Achievement Socket Listener: Factory, Ultra-DRY, and Presets.',
			},
		},
	},
};
