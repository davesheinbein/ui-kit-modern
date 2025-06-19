import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedTheme,
	ThemeFactory,
	ThemeSelector,
	ThemeSwatches,
	ThemeDropdown,
	ThemeCards,
	CompactThemes,
	MobileThemes,
	DesktopThemes,
	ModalThemes,
	defaultThemes,
} from '../../components/Themes';
import type { UnifiedThemeProps } from '../../components/Themes';

const meta: Meta<UnifiedThemeProps> = {
	title: 'Theme/ThemeSelector (DRY System)',
	component: UnifiedTheme,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A comprehensive DRY theme selector system. Supports multiple display modes (swatches, dropdown, cards, grid, list), various layouts, responsive design, and ultra-short creation aliases. Uses the same DRY pattern as Button components.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'selector',
				'selector-swatches',
				'selector-dropdown',
				'selector-cards',
				'selector-grid',
				'selector-horizontal',
				'selector-vertical',
				'selector-compact',
				'selector-expanded',
				'selector-small',
				'selector-medium',
				'selector-large',
				'mobile-optimized',
				'desktop-optimized',
				'modal-theme-selector',
				'sidebar-theme-selector',
				'header-theme-selector',
			],
			description:
				'Ultra-short theme configuration using predefined kinds',
		},
		value: {
			control: 'select',
			options: [
				'light',
				'dark',
				'oceanic',
				'sunset',
				'forest',
				'purple',
				'cherry',
				'midnight',
			],
			description: 'Currently selected theme value',
		},
		variant: {
			control: 'select',
			options: [
				'selector',
				'palette',
				'provider',
				'switcher',
				'custom',
			],
			description: 'Theme variant type',
		},
		display: {
			control: 'select',
			options: [
				'swatches',
				'dropdown',
				'cards',
				'grid',
				'list',
			],
			description: 'Display mode for themes',
		},
		layout: {
			control: 'select',
			options: [
				'horizontal',
				'vertical',
				'grid',
				'compact',
			],
			description: 'Layout arrangement',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size of theme elements',
		},
		showLabels: {
			control: 'boolean',
			description: 'Show theme labels',
		},
		showPreview: {
			control: 'boolean',
			description: 'Show theme preview swatches',
		},
		animated: {
			control: 'boolean',
			description: 'Enable animations and transitions',
		},
		showGlow: {
			control: 'boolean',
			description: 'Show glow effects on active themes',
		},
		showShadow: {
			control: 'boolean',
			description: 'Show shadow effects',
		},
		hoverEffect: {
			control: 'boolean',
			description: 'Enable hover effects',
		},
		gap: {
			control: 'number',
			description: 'Gap between theme items (in pixels)',
		},
		onChange: {
			action: 'themeChanged',
			description:
				'Function called when theme selection changes',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
	},
};

export default meta;
type Story = StoryObj<UnifiedThemeProps>;

// =============================================================================
// BASIC STORIES
// =============================================================================

export const Default: Story = {
	args: {
		kind: 'selector',
		value: 'light',
	},
};

export const CompactSwatches: Story = {
	args: {
		kind: 'selector-compact',
		value: 'dark',
		showLabels: false,
	},
};

export const DropdownMode: Story = {
	args: {
		kind: 'selector-dropdown',
		value: 'oceanic',
		showLabels: true,
	},
};

export const CardMode: Story = {
	args: {
		kind: 'selector-cards',
		value: 'sunset',
		showLabels: true,
		showPreview: true,
	},
};

// =============================================================================
// LAYOUT VARIATIONS
// =============================================================================

export const HorizontalLayout: Story = {
	args: {
		kind: 'selector-horizontal',
		value: 'forest',
		showLabels: false,
		showPreview: true,
	},
};

export const VerticalLayout: Story = {
	args: {
		kind: 'selector-vertical',
		value: 'purple',
		showLabels: true,
		showPreview: true,
	},
};

export const GridLayout: Story = {
	args: {
		kind: 'selector-grid',
		value: 'cherry',
		showLabels: true,
		showPreview: true,
	},
};

// =============================================================================
// SIZE VARIATIONS
// =============================================================================

export const SmallSize: Story = {
	args: {
		kind: 'selector-small',
		value: 'midnight',
		showLabels: false,
	},
};

export const MediumSize: Story = {
	args: {
		kind: 'selector-medium',
		value: 'light',
		showLabels: true,
	},
};

export const LargeSize: Story = {
	args: {
		kind: 'selector-large',
		value: 'dark',
		showLabels: true,
	},
};

// =============================================================================
// RESPONSIVE VARIATIONS
// =============================================================================

export const MobileOptimized: Story = {
	args: {
		kind: 'mobile-optimized',
		value: 'oceanic',
		showLabels: true,
	},
};

export const DesktopOptimized: Story = {
	args: {
		kind: 'desktop-optimized',
		value: 'sunset',
		showLabels: true,
		showPreview: true,
	},
};

export const TabletOptimized: Story = {
	args: {
		kind: 'tablet-optimized',
		value: 'forest',
		showLabels: true,
		showPreview: true,
	},
};

// =============================================================================
// CONTEXTUAL VARIATIONS
// =============================================================================

export const ModalThemeSelector: Story = {
	args: {
		kind: 'modal-theme-selector',
		value: 'purple',
		showLabels: true,
		showPreview: true,
		title: 'Choose Your Theme',
		subtitle: 'Select a theme that suits your style',
	},
};

export const SidebarThemeSelector: Story = {
	args: {
		kind: 'sidebar-theme-selector',
		value: 'cherry',
		showLabels: true,
		showPreview: false,
	},
};

export const HeaderThemeSelector: Story = {
	args: {
		kind: 'header-theme-selector',
		value: 'midnight',
		showLabels: false,
	},
};

// =============================================================================
// FEATURE DEMONSTRATIONS
// =============================================================================

export const WithoutLabels: Story = {
	args: {
		kind: 'selector-no-labels',
		value: 'light',
		showLabels: false,
		showPreview: true,
	},
};

export const WithoutPreview: Story = {
	args: {
		kind: 'selector-no-preview',
		value: 'dark',
		showLabels: true,
		showPreview: false,
	},
};

export const AnimatedSelector: Story = {
	args: {
		kind: 'selector-animated',
		value: 'oceanic',
		animated: true,
		showGlow: true,
		hoverEffect: true,
	},
};

export const StaticSelector: Story = {
	args: {
		kind: 'selector-static',
		value: 'sunset',
		animated: false,
		showGlow: false,
		hoverEffect: false,
	},
};

// =============================================================================
// SPECIALIZED USE CASES
// =============================================================================

export const VSModeSelector: Story = {
	args: {
		kind: 'vs-mode-selector',
		value: 'forest',
		showLabels: true,
		showPreview: true,
		title: 'VS Mode Theme',
		subtitle: 'Choose a theme for competitive play',
	},
};

export const CustomThemeBuilder: Story = {
	args: {
		kind: 'custom-theme-builder',
		value: 'purple',
		allowCustom: true,
		showLabels: true,
		showPreview: true,
		title: 'Theme Builder',
		subtitle: 'Create or select your perfect theme',
	},
};

// =============================================================================
// FACTORY DEMONSTRATIONS
// =============================================================================

export const FactoryCreated: Story = {
	render: () => {
		const [selectedTheme, setSelectedTheme] =
			React.useState('light');

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
				}}
			>
				<div>
					<h3>ThemeFactory.create() Examples</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						{ThemeFactory.create('selector', {
							value: selectedTheme,
							onChange: setSelectedTheme,
							title: 'Factory Created Selector',
						})}

						{ThemeFactory.create('selector-compact', {
							value: selectedTheme,
							onChange: setSelectedTheme,
							title: 'Factory Compact Selector',
						})}
					</div>
				</div>

				<div>
					<h3>Ultra-Short Aliases</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<ThemeSwatches
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
						<ThemeDropdown
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
						<CompactThemes
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
					</div>
				</div>

				<div>
					<h3>Preset Components</h3>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<MobileThemes
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
						<DesktopThemes
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
						<ModalThemes
							value={selectedTheme}
							onChange={setSelectedTheme}
						/>
					</div>
				</div>
			</div>
		);
	},
};

// =============================================================================
// BACKWARD COMPATIBILITY
// =============================================================================

export const LegacyThemeSelector: Story = {
	render: () => {
		const [selectedTheme, setSelectedTheme] =
			React.useState('light');

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<h3>Legacy ThemeSelector (Backward Compatible)</h3>

				{/* Original swatches mode */}
				<ThemeSelector
					value={selectedTheme}
					onChange={setSelectedTheme}
				/>

				{/* Original dropdown mode */}
				<ThemeSelector
					value={selectedTheme}
					onChange={setSelectedTheme}
					themes={['light', 'dark', 'oceanic', 'sunset']}
				/>
			</div>
		);
	},
};

// =============================================================================
// CUSTOM THEMES
// =============================================================================

export const CustomThemes: Story = {
	render: () => {
		const [selectedTheme, setSelectedTheme] =
			React.useState('custom1');

		const customThemes = [
			{
				name: 'custom1',
				label: 'Custom Blue',
				color: '#3b82f6',
				bg: '#1e40af',
				font: '#ffffff',
				swatchType: 'solid' as const,
				vsMode: {
					player: '#3b82f6',
					enemy: '#ef4444',
					playerBg: '#1e293b',
					enemyBg: '#3b1e1e',
					boardBg: '#1e40af',
					font: '#ffffff',
					border: '#3b82f6',
				},
			},
			{
				name: 'custom2',
				label: 'Custom Pink',
				color: '#ec4899',
				bg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
				font: '#ffffff',
				swatchType: 'gradient' as const,
				vsMode: {
					player: '#ec4899',
					enemy: '#ef4444',
					playerBg: '#831843',
					enemyBg: '#3b1e1e',
					boardBg: '#be185d',
					font: '#ffffff',
					border: '#ec4899',
				},
			},
		];

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<h3>Custom Theme Collection</h3>
				<UnifiedTheme
					kind='selector'
					value={selectedTheme}
					onChange={setSelectedTheme}
					themes={customThemes}
					title='Custom Themes'
					subtitle='User-defined theme collection'
				/>
			</div>
		);
	},
};
