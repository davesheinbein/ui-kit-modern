import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedSettings,
	SettingsFactory,
	S,
	SettingsPresets,
} from '../../components/Settings';
import type { UnifiedSettingsProps } from '../../components/Settings/UnifiedSettings';

const meta: Meta<typeof UnifiedSettings> = {
	title: 'Settings/SettingsPanel (DRY System)',
	component: UnifiedSettings,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A DRY settings panel component built using the unified Settings system. Supports various configuration-driven settings layouts.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'settings-panel',
				'user-settings',
				'accessibility-settings',
				'privacy-settings',
			],
			description: 'Type of settings panel to render',
		},
		sections: {
			control: 'object',
			description: 'Array of settings sections',
		},
		onSettingChange: {
			action: 'settingChanged',
			description: 'Function called when a setting changes',
		},
		onClose: {
			action: 'closed',
			description: 'Function called when panel is closed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedSettings>;

const mockUserSettings = [
	{
		id: 'general',
		title: 'General Settings',
		fields: [
			{
				id: 'notifications',
				label: 'Enable Notifications',
				type: 'checkbox' as const,
				value: true,
			},
			{
				id: 'soundEffects',
				label: 'Sound Effects',
				type: 'checkbox' as const,
				value: false,
			},
			{
				id: 'language',
				label: 'Language',
				type: 'select' as const,
				value: 'en',
				options: [
					{ label: 'English', value: 'en' },
					{ label: 'Spanish', value: 'es' },
					{ label: 'French', value: 'fr' },
				],
			},
		],
	},
	{
		id: 'gameplay',
		title: 'Gameplay Settings',
		fields: [
			{
				id: 'difficulty',
				label: 'Difficulty Level',
				type: 'range' as const,
				value: 3,
				min: 1,
				max: 5,
			},
			{
				id: 'autoSave',
				label: 'Auto Save',
				type: 'checkbox' as const,
				value: true,
			},
		],
	},
];

export const Default: Story = {
	args: {
		kind: 'settings-panel',
		sections: mockUserSettings,
		onSettingChange: () => {},
	},
};

export const UserSettings: Story = {
	args: {
		kind: 'user-settings',
		sections: mockUserSettings,
		onSettingChange: () => {},
	},
};

export const AccessibilitySettings: Story = {
	args: {
		kind: 'accessibility-settings',
		sections: [
			{
				id: 'accessibility',
				title: 'Accessibility Options',
				fields: [
					{
						id: 'highContrast',
						label: 'High Contrast Mode',
						type: 'checkbox' as const,
						value: false,
					},
					{
						id: 'fontSize',
						label: 'Font Size',
						type: 'range' as const,
						value: 16,
						min: 12,
						max: 24,
					},
					{
						id: 'reducedMotion',
						label: 'Reduce Motion',
						type: 'checkbox' as const,
						value: false,
					},
				],
			},
		],
		onSettingChange: () => {},
	},
};

// DRY System Examples using factory patterns
export const SettingsUsingFactory: Story = {
	render: () => (
		<S
			kind='settings-panel'
			sections={mockUserSettings}
			onSettingChange={() => {}}
		/>
	),
};

export const UserSettingsUsingPresets: Story = {
	render: () =>
		SettingsPresets.SETTINGS_PANEL(
			mockUserSettings,
			() => {}
		),
};

export const AccessibilityUsingPresets: Story = {
	render: () =>
		SettingsPresets.ACCESSIBILITY(
			[
				{
					id: 'accessibility',
					title: 'Accessibility Options',
					fields: [
						{
							id: 'highContrast',
							label: 'High Contrast Mode',
							type: 'checkbox' as const,
							value: false,
						},
						{
							id: 'fontSize',
							label: 'Font Size',
							type: 'range' as const,
							value: 16,
							min: 12,
							max: 24,
						},
					],
				},
			],
			() => {}
		),
};
