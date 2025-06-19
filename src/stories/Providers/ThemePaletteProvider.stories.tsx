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
	const { darkMode, setDarkMode, palette, setPalette } =
		useThemePalette();

	return (
		<div
			style={{
				padding: '1rem',
				border: '1px solid #ddd',
				borderRadius: '8px',
				backgroundColor: darkMode ? '#333' : '#fff',
				color: darkMode ? '#fff' : '#333',
			}}
		>
			<h3>Theme Palette Status</h3>
			<p>Dark Mode: {darkMode ? 'Yes' : 'No'}</p>
			<p>Palette Colors: {Object.keys(palette).length}</p>
			<div style={{ marginTop: '1rem' }}>
				<button
					onClick={() => setDarkMode(!darkMode)}
					style={{
						backgroundColor: darkMode ? '#555' : '#007bff',
						color: '#fff',
						border: 'none',
						padding: '0.5rem 1rem',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Toggle Dark Mode
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
				component:
					'A DRY theme palette context provider that manages dark mode state and color palette. Built using the unified Providers system.',
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
