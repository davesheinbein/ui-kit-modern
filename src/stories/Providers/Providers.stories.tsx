import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Providers } from '../../components/Providers';
import { commonDecorators } from '../config/decorators';
import Wrapper from '../../components/Wrappers/Wrapper';
import Button from '../../components/Button/Button';
import {
	useUserSettings,
	useThemePalette,
} from '../../components/Providers';
import { useAppSelector } from '../../store/hooks';
import {
	mockUserSettings,
	mockThemePalette,
	mockSocketSession,
} from '../mocks';

const meta: Meta<typeof Providers> = {
	title: 'Providers/Providers',
	component: Providers,
	decorators: commonDecorators,
	tags: ['autodocs'],
};

export default meta;

const codeExamples: Record<string, string> = {
	UserSettings: `import { useUserSettings } from 'components/Providers';
const settings = useUserSettings();
console.log(settings.language, settings.theme);`,
	Theme: `import { useThemePalette } from 'components/Providers';
const { palette, setTheme } = useThemePalette();
console.log(palette.primary);`,
	Socket: `// If using Redux:
import { useAppSelector } from 'store/hooks';
const socket = useAppSelector(state => state.socket);
console.log(socket.isConnected);`,
};

export const ProviderDemo: React.FC<{
	providerType: string;
}> = ({ providerType }) => (
	<Wrapper
		p={8}
		border='1px solid #e5e7eb'
		radius={8}
		bg='#f9fafb'
		m={4}
	>
		<h3>Provider Demo: {providerType}</h3>
		<p>
			This component would consume the context provided by
			the {providerType}.
		</p>
		<Wrapper
			bg='#fff'
			p={4}
			radius={4}
			style={{
				fontFamily: 'monospace',
				fontSize: '0.875rem',
			}}
		>
			{providerType} context is active and available to
			child components.
		</Wrapper>
		<Wrapper style={{ marginTop: 16 }}>
			<strong>Example usage:</strong>
			<pre
				style={{
					background: '#f4f4f4',
					padding: 12,
					borderRadius: 6,
				}}
			>
				<code>
					{codeExamples[providerType] ||
						'// Example coming soon'}
				</code>
			</pre>
		</Wrapper>
	</Wrapper>
);

// Use Redux selector for socket state
export const SocketDemo: React.FC = () => {
	const socketContext = useAppSelector(
		(state) => state.socket
	);

	if (!socketContext) {
		return <Wrapper>No socket context available</Wrapper>;
	}

	const { isConnected, socket } = socketContext;

	return (
		<Wrapper
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
			<Wrapper style={{ marginTop: 16 }}>
				<strong>Example usage:</strong>
				<pre
					style={{
						background: '#f4f4f4',
						padding: 12,
						borderRadius: 6,
					}}
				>
					<code>{codeExamples.Socket}</code>
				</pre>
			</Wrapper>
		</Wrapper>
	);
};

export const UserSettingsDemo: React.FC = () => {
	const userSettingsContext = useUserSettings();

	if (!userSettingsContext) {
		return (
			<Wrapper>No user settings context available</Wrapper>
		);
	}

	const { settings, setSettings } = userSettingsContext;

	return (
		<Wrapper
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
			}}
		>
			<h3>User Settings</h3>
			<Wrapper style={{ marginBottom: '1rem' }}>
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
			</Wrapper>
			<Wrapper
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
			</Wrapper>
		</Wrapper>
	);
};

export const ThemePaletteDemo: React.FC = () => {
	const themePaletteContext = useThemePalette();

	if (!themePaletteContext) {
		return (
			<Wrapper
				style={{
					padding: '1rem',
					border: '1px solid #ddd',
					borderRadius: '8px',
				}}
			>
				<p>Theme Palette Provider not found</p>
			</Wrapper>
		);
	}

	const { palette, setPalette, currentTheme, setTheme } =
		themePaletteContext;

	return (
		<Wrapper
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
			<Wrapper style={{ marginTop: '1rem' }}>
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
			</Wrapper>
		</Wrapper>
	);
};

export const AchievementListenerDemo: React.FC = () => (
	<Wrapper
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
		<Wrapper
			style={{
				background: '#f0f8ff',
				padding: '0.75rem',
				borderRadius: '4px',
				marginTop: '0.5rem',
			}}
		>
			🏆 Ready to receive achievement notifications
		</Wrapper>
	</Wrapper>
);

// ===== BASIC PROVIDER VARIANTS =====

export const SocketProvider: StoryObj<typeof Providers> = {
	name: 'Socket Provider',
	args: {
		kind: 'socket-provider',
		autoConnect: false,
		url: '/api/socket',
		children: <SocketDemo />,
	},
};

export const UserSettingsProvider: StoryObj<
	typeof Providers
> = {
	name: 'User Settings Provider',
	args: {
		kind: 'user-settings-provider',
		initialSettings: mockUserSettings,
		children: <UserSettingsDemo />,
	},
};

export const AchievementSocketListener: StoryObj<
	typeof Providers
> = {
	name: 'Achievement Socket Listener',
	args: {
		kind: 'achievement-socket-listener',
		children: <AchievementListenerDemo />,
	},
};

export const ThemeProvider: StoryObj<typeof Providers> = {
	name: 'Theme Palette Provider',
	args: {
		kind: 'theme-palette-provider',
		initialTheme: 'light',
		initialPalette: mockThemePalette,
		children: <ThemePaletteDemo />,
	},
};

// ===== PROVIDER CONFIGURATIONS =====

export const SocketWithAutoConnect: StoryObj<
	typeof Providers
> = {
	name: 'Socket (Auto-Connect)',
	args: {
		kind: 'socket-provider',
		autoConnect: true,
		url: '/api/socket',
		session: mockSocketSession,
		children: (
			<ProviderDemo providerType='Auto-Connect Socket Provider' />
		),
	},
};

export const UserSettingsWithDefaults: StoryObj<
	typeof Providers
> = {
	name: 'User Settings (With Defaults)',
	args: {
		kind: 'user-settings-provider',
		initialSettings: mockUserSettings,
		children: (
			<ProviderDemo providerType='User Settings Provider with Defaults' />
		),
	},
};

// ===== NESTED PROVIDERS EXAMPLE =====

export const NestedProviders: StoryObj<typeof Providers> = {
	name: 'Nested Providers',
	render: () => (
		<Wrapper style={{ padding: '1rem' }}>
			<h3>Nested Provider Setup:</h3>
			<Providers
				kind='theme-palette-provider'
				initialTheme='dark'
				initialPalette={mockThemePalette}
			>
				<Providers
					kind='user-settings-provider'
					initialSettings={mockUserSettings}
				>
					<UserSettingsDemo />
				</Providers>
			</Providers>
		</Wrapper>
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

export const AllVariantsShowcase: StoryObj<
	typeof Providers
> = {
	name: 'Complete DRY System Showcase',
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<Wrapper>
				<h2>🎯 Provider with Kind Prop</h2>
				<p>Single component, different kinds:</p>
				<Wrapper
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}
				>
					<Providers
						kind='socket-provider'
						url='/api/socket'
						autoConnect={false}
					>
						<SocketDemo />
					</Providers>
					<Providers
						kind='user-settings-provider'
						initialSettings={{
							chatEnabled: true,
							notificationsEnabled: true,
						}}
					>
						<UserSettingsDemo />
					</Providers>
					<Providers
						kind='theme-palette-provider'
						initialTheme='light'
						initialPalette={{ primary: '#0070f3' }}
					>
						<ThemePaletteDemo />
					</Providers>
					<Providers kind='achievement-socket-listener'>
						<AchievementListenerDemo />
					</Providers>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
	parameters: {
		docs: {
			description: {
				story: `Complete showcase of the DRY Provider system demonstrating all patterns:\n\n1. **Provider**: Single component with kind prop\n2. **Preset Patterns**: Pre-configured common patterns\n\nThis system eliminates code duplication and provides a consistent API for all provider variants.`,
			},
		},
	},
};

// ===== DETAILED PROVIDER VARIANTS =====

export const SocketProviderDetailed: StoryObj<
	typeof Providers
> = {
	name: 'Socket Provider (Detailed)',
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

export const SocketAutoConnect: StoryObj<typeof Providers> =
	{
		name: 'Socket (Auto-Connect)',
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

export const SocketWithSession: StoryObj<typeof Providers> =
	{
		name: 'Socket (With Session)',
		args: {
			kind: 'socket-provider',
			autoConnect: false,
			url: 'ws://localhost:3000',
			session: {
				user: { id: '123', name: 'st User' },
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

export const UserSettingsDetailed: StoryObj<
	typeof Providers
> = {
	name: 'User Settings (Detailed)',
	args: {
		kind: 'user-settings-provider',
		initialSettings: {
			chatEnabled: true,
			profanityFilter: false,
			notificationsEnabled: true,
			language: 'en',
		},
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

export const UserSettingsWithInitial: StoryObj<
	typeof Providers
> = {
	name: 'User Settings (With Initial)',
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

export const ThemePaletteDetailed: StoryObj<
	typeof Providers
> = {
	name: 'Theme Palette (Detailed)',
	args: {
		kind: 'theme-palette-provider',
		initialTheme: 'dark',
		initialPalette: { primary: '#222', secondary: '#fff' },
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

export const AchievementListenerDetailed: StoryObj<
	typeof Providers
> = {
	name: 'Achievement Listener (Detailed)',
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
