import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	SettingsFactory,
	defaultThemes,
} from '../../components/Settings';
import type { SettingsFactoryProps } from '../../components/Settings';

const meta: Meta<SettingsFactoryProps> = {
	title: 'Settings/Theme Customization (DRY System)',
	component: SettingsFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Advanced theme customization system integrated into the unified Settings architecture. Provides comprehensive theme management, custom theme creation, and appearance configuration.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'theme-customization',
				'theme-builder',
				'customization-category',
			],
			description: 'Type of theme customization interface',
		},
		items: {
			control: 'object',
			description:
				'Theme items available for customization',
		},
		onEquip: {
			action: 'themeEquipped',
			description: 'Function called when theme is equipped',
		},
		onSettingChange: {
			action: 'themeSettingChanged',
			description:
				'Function called when theme settings change',
		},
	},
};

export default meta;
type Story = StoryObj<SettingsFactoryProps>;

// Create theme items with customization data
const createCustomizationItems = (
	equippedTheme = 'light'
) =>
	defaultThemes.map((theme) => ({
		id: theme.name,
		name: theme.label,
		type: 'theme' as const,
		equipped: theme.name === equippedTheme,
		unlocked: true,
		icon: theme.color,
		preview: theme.bg,
		description: `Customize ${theme.label} theme appearance`,
		themeData: theme,
		customizable: true,
		variants: ['light', 'dark', 'auto'],
	}));

// =============================================================================
// THEME CUSTOMIZATION STORIES
// =============================================================================

export const BasicThemeCustomization: Story = {
	args: {
		kind: 'theme-customization',
		items: createCustomizationItems('light'),
	},
};

export const AdvancedThemeBuilder: Story = {
	args: {
		kind: 'theme-builder',
		items: createCustomizationItems('dark'),
	},
};

export const ThemeCustomizationPanel: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Theme Customization',
			description: 'Create and customize your own themes',
			customizationType: 'themes',
			gridLayout: true,
			columns: 3,
			showHeader: true,
			showFooter: true,
		},
		items: createCustomizationItems('oceanic'),
	},
};

// =============================================================================
// INTERACTIVE EXAMPLES
// =============================================================================

export const InteractiveThemeBuilder: Story = {
	args: {
		kind: 'theme-builder',
		items: createCustomizationItems(),
	},
	render: (args) => {
		const [currentTheme, setCurrentTheme] =
			React.useState('light');
		const [customThemes, setCustomThemes] = React.useState<
			string[]
		>([]);

		const handleThemeEquip = (
			slot: string,
			themeId: string
		) => {
			setCurrentTheme(themeId);
			args.onEquip?.(slot, themeId);
		};

		const handleCustomTheme = (themeName: string) => {
			setCustomThemes((prev) => [...prev, themeName]);
		};

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
					<h3>Theme Builder</h3>
					<p>
						Current theme: <strong>{currentTheme}</strong>
					</p>
					{customThemes.length > 0 && (
						<p>
							Custom themes created:{' '}
							{customThemes.join(', ')}
						</p>
					)}
				</div>
				<SettingsFactory
					{...args}
					items={createCustomizationItems(currentTheme)}
					onEquip={handleThemeEquip}
				/>
			</div>
		);
	},
};

export const AdvancedCustomization: Story = {
	args: {
		kind: 'customization-category',
		configuration: {
			kind: 'customization-category',
			title: 'Advanced Theme Customization',
			description:
				'Full-featured theme customization with all options',
			customizationType: 'themes',
			gridLayout: true,
			columns: 4,
			showHeader: true,
			showFooter: true,
			themeSettings: {
				display: 'cards',
				layout: 'grid',
				showLabels: true,
				showPreview: true,
				animated: true,
				size: 'large',
				themes: defaultThemes,
				allowCustomThemes: true,
				showVSModeOptions: true,
			},
		},
		items: createCustomizationItems('midnight'),
	},
};
