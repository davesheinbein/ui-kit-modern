import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	SettingsFactory,
	CustomizationCategory,
	defaultThemes,
} from '../../components/Settings';
import type { SettingsFactoryProps } from '../../components/Settings';

const meta: Meta<SettingsFactoryProps> = {
	title: 'Settings/Theme Appearance (DRY System)',
	component: SettingsFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Theme appearance customization integrated into the Settings system. Provides comprehensive theme management through the unified Settings architecture.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'theme-settings',
				'theme-customization',
				'theme-selector',
				'theme-builder',
				'customization-category',
			],
			description:
				'Theme appearance configuration using Settings system',
		},
		items: {
			control: 'object',
			description: 'Theme items for customization',
		},
		onEquip: {
			action: 'themeEquipped',
			description: 'Function called when theme is equipped',
		},
		onSettingChange: {
			action: 'themeSettingChanged',
			description:
				'Function called when theme setting changes',
		},
	},
};

export default meta;
type Story = StoryObj<SettingsFactoryProps>;

// Create theme items from defaultThemes
const createThemeItems = (equippedTheme = 'light') =>
	defaultThemes.map((theme, index) => ({
		id: theme.name,
		name: theme.label,
		type: 'theme' as const,
		equipped: theme.name === equippedTheme,
		unlocked: true,
		icon: theme.color,
		preview: theme.bg,
		description: `${theme.label} theme appearance`,
		// Additional theme data
		themeData: theme,
	}));

// =============================================================================
// MAIN THEME SETTINGS STORIES
// =============================================================================

export const ThemeSettings: Story = {
	args: {
		kind: 'theme-settings',
		items: createThemeItems('dark'),
	},
};

export const ThemeCustomization: Story = {
	args: {
		kind: 'theme-customization',
		items: createThemeItems('oceanic'),
	},
};

export const ThemeSelector: Story = {
	args: {
		kind: 'theme-selector',
		items: createThemeItems('sunset'),
	},
};

export const ThemeBuilder: Story = {
	args: {
		kind: 'theme-builder',
		items: createThemeItems('forest'),
	},
};

// =============================================================================
// CUSTOMIZATION CATEGORY VARIATIONS
// =============================================================================

export const ThemeCustomizationCategory: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Appearance',
			description:
				'Customize your visual theme and appearance',
			customizationType: 'themes',
			gridLayout: true,
			columns: 4,
			showHeader: true,
			showFooter: false,
		},
		items: createThemeItems('purple'),
	},
};

export const CompactThemeGrid: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Quick Theme Selection',
			customizationType: 'themes',
			gridLayout: true,
			columns: 6,
			showHeader: false,
			showFooter: false,
		},
		items: createThemeItems('cherry'),
	},
};

export const ThemeGallery: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Gallery',
			description:
				'Explore and choose from available themes',
			customizationType: 'themes',
			gridLayout: true,
			columns: 3,
			showHeader: true,
			showFooter: true,
		},
		items: createThemeItems('midnight'),
	},
};

// =============================================================================
// COMPREHENSIVE CUSTOMIZATION DEMO
// =============================================================================

export const FullThemeCustomization: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Appearance',
			description:
				'Customize your visual theme and appearance',
			customizationType: 'themes',
			gridLayout: true,
			columns: 4,
			showHeader: true,
			showFooter: false,
			themeSettings: {
				display: 'cards',
				layout: 'grid',
				showLabels: true,
				showPreview: true,
				animated: true,
				size: 'medium',
				themes: defaultThemes,
				allowCustomThemes: true,
				showVSModeOptions: true,
			},
		},
		items: createThemeItems('light'),
		onEquip: (slot: string, id: string) => {
			console.log(`Equipped theme ${id} in slot ${slot}`);
		},
		onSettingChange: (
			sectionId: string,
			fieldId: string,
			value: any
		) => {
			console.log(
				`Theme setting changed: ${sectionId}.${fieldId} = ${value}`
			);
		},
	},
};

// =============================================================================
// INTERACTIVE EXAMPLES
// =============================================================================

export const InteractiveThemeSelection: Story = {
	args: {
		kind: 'theme-customization',
		items: createThemeItems(),
	},
	render: (args) => {
		const [selectedTheme, setSelectedTheme] =
			React.useState('light');

		const handleThemeEquip = (
			slot: string,
			themeId: string
		) => {
			setSelectedTheme(themeId);
			args.onEquip?.(slot, themeId);
		};

		const updatedItems = createThemeItems(selectedTheme);

		return (
			<div>
				<div
					style={{
						marginBottom: '1rem',
						padding: '1rem',
						background: 'var(--background)',
						borderRadius: '8px',
					}}
				>
					<h3>Current Theme: {selectedTheme}</h3>
					<p>Click on any theme below to see it applied</p>
				</div>
				<SettingsFactory
					{...args}
					items={updatedItems}
					onEquip={handleThemeEquip}
				/>
			</div>
		);
	},
};

export const ThemeComparison: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Comparison',
			description: 'Compare different themes side by side',
			customizationType: 'themes',
			gridLayout: true,
			columns: 2,
			showHeader: true,
			showFooter: false,
		},
		items: createThemeItems(),
	},
	render: (args) => {
		const [comparedThemes, setComparedThemes] =
			React.useState(['light', 'dark']);

		const handleThemeEquip = (
			slot: string,
			themeId: string
		) => {
			setComparedThemes((prev) => {
				if (prev.includes(themeId)) return prev;
				return [prev[1], themeId];
			});
		};

		const comparisonItems = defaultThemes
			.filter((theme) =>
				comparedThemes.includes(theme.name)
			)
			.map((theme) => ({
				id: theme.name,
				name: theme.label,
				type: 'theme' as const,
				equipped: true,
				unlocked: true,
				icon: theme.color,
				preview: theme.bg,
				description: `${theme.label} theme`,
				themeData: theme,
			}));

		return (
			<div>
				<div
					style={{
						marginBottom: '1rem',
						padding: '1rem',
						background: 'var(--background)',
						borderRadius: '8px',
					}}
				>
					<h3>Comparing: {comparedThemes.join(' vs ')}</h3>
					<p>Click themes below to compare them</p>
				</div>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '2rem',
					}}
				>
					<div>
						<h4>Available Themes</h4>
						<SettingsFactory
							{...args}
							items={createThemeItems()}
							onEquip={handleThemeEquip}
						/>
					</div>
					<div>
						<h4>Comparison</h4>
						<SettingsFactory
							kind='customization-category'
							configuration={{
								kind: 'customization-category',
								title: 'Current Comparison',
								customizationType: 'themes',
								gridLayout: true,
								columns: 1,
								showHeader: true,
								showFooter: false,
							}}
							items={comparisonItems}
						/>
					</div>
				</div>
			</div>
		);
	},
};

// =============================================================================
// THEME MANAGEMENT EXAMPLES
// =============================================================================

export const ThemeLibrary: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Library',
			description:
				'Browse and manage your theme collection',
			customizationType: 'themes',
			gridLayout: true,
			columns: 4,
			showHeader: true,
			showFooter: true,
		},
		items: createThemeItems('oceanic'),
	},
};

export const QuickThemeSwitch: Story = {
	args: {
		kind: 'theme-selector',
		configuration: {
			kind: 'theme-selector',
			title: 'Quick Switch',
			customizationType: 'themes',
			gridLayout: false,
			showHeader: false,
			showFooter: false,
		},
		items: createThemeItems('sunset'),
	},
};
