import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedProvider,
	ProviderFactory,
	P,
	ProviderPresets,
	useThemePalette,
} from '../../components/Providers';

// Example component that uses the theme palette context
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
				<button
					onClick={() =>
						setTheme(
							currentTheme === 'light' ? 'dark' : 'light'
						)
					}
					style={{
						backgroundColor: '#007bff',
						color: '#fff',
						border: 'none',
						padding: '0.5rem 1rem',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Switch Theme
				</button>
			</div>
		</div>
	);
};

const meta: Meta<typeof UnifiedProvider> = {
	title: 'Providers/ThemePaletteProvider (DRY System)',
	component: UnifiedProvider,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `### ThemePaletteProvider (DRY System)

A theme palette provider component built using the unified Providers system. Provides theme context for the application with color palette management and theme switching.

Uses the DRY Provider system with \`kind="theme-palette-provider"\` to render a theme palette provider with consistent configuration and behavior.`,
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'theme-palette-provider',
				'socket-provider',
				'user-settings-provider',
				'achievement-socket-listener',
			],
			description: 'Type of provider to render',
		},
		children: {
			control: false,
			description:
				'Child components that will have access to theme palette context',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedProvider>;

export const Default: Story = {
	args: {
		kind: 'theme-palette-provider',
	},
	render: (args) => (
		<UnifiedProvider {...args}>
			<ThemePaletteDemo />
		</UnifiedProvider>
	),
};

// DRY System Examples using factory patterns
export const ThemeUsingFactory: Story = {
	render: () => (
		<P kind='theme-palette-provider'>
			<ThemePaletteDemo />
		</P>
	),
};

export const ThemeUsingPresets: Story = {
	render: () =>
		ProviderPresets.THEME_PALETTE ?
			ProviderPresets.THEME_PALETTE()
		:	<P kind='theme-palette-provider'>
				<ThemePaletteDemo />
			</P>,
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
				<h3>ProviderFactory ThemePalette:</h3>
				<ProviderFactory kind='theme-palette-provider'>
					<ThemePaletteDemo />
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
				<P kind='theme-palette-provider'>
					<ThemePaletteDemo />
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
				<h3>ProviderPresets.THEME_PALETTE:</h3>
				<div
					style={{
						border: '1px solid #e5e7eb',
						borderRadius: '8px',
						padding: '1rem',
					}}
				>
					{ProviderPresets.THEME_PALETTE()}
					<ThemePaletteDemo />
				</div>
			</div>
		</div>
	),
};
