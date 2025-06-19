import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
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

// Meta configuration for the DRY Provider system
const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/Provider (DRY System)',
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
		children: (
			<ProviderDemo providerType='Socket Provider' />
		),
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
		children: (
			<ProviderDemo providerType='User Settings Provider' />
		),
	},
};

export const AchievementSocketListener: Story = {
	name: '🏆 Achievement Socket Listener',
	args: {
		kind: 'achievement-socket-listener',
		children: (
			<ProviderDemo providerType='Achievement Socket Listener' />
		),
	},
};

export const ThemePaletteProvider: Story = {
	name: '🎨 Theme Palette Provider',
	args: {
		kind: 'theme-palette-provider',
		children: (
			<ProviderDemo providerType='Theme Palette Provider' />
		),
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
