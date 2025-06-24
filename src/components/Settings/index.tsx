import React, { useContext } from 'react';
import Settings from './Settings';
import { UserSettingsContext } from '../Providers';
import {
	SettingsItem,
	SettingsSection,
} from './configurations';

export type {
	SettingsKind,
	SettingsProps,
} from './Settings';

// Inline backward compatibility wrappers
export interface CustomizationCategoryProps {
	title: string;
	items: SettingsItem[];
	onEquip: (
		slot: string,
		id: string
	) => void | Promise<void>;
	ariaLabelPrefix: string;
	lockedIndices?: number[];
	onLockedClick?: (item: any) => void;
	onShopItemClick?: (item: any) => void;
}

/**
 * CustomizationCategory - Backward compatibility wrapper
 * For new development, use Settings with kind="customization-category"
 */
export const CustomizationCategory: React.FC<
	CustomizationCategoryProps
> = ({
	title,
	items,
	onEquip,
	ariaLabelPrefix,
	lockedIndices = [],
	onLockedClick,
	onShopItemClick,
}) => {
	return (
		<Settings
			kind='customization-category'
			title={title}
			items={items}
			onEquip={onEquip}
			ariaLabelPrefix={ariaLabelPrefix}
			lockedIndices={lockedIndices}
			onLockedClick={onLockedClick}
			onShopItemClick={onShopItemClick}
		/>
	);
};

/**
 * SettingsPanel - Backward compatibility wrapper
 * For new development, use Settings with kind="settings-panel"
 */
export const SettingsPanel: React.FC = () => {
	const userSettingsContext = useContext(
		UserSettingsContext
	);

	if (!userSettingsContext || !userSettingsContext.settings)
		return null;

	const { settings, setSettings } = userSettingsContext;

	const handleSettingChange = (
		sectionId: string,
		fieldId: string,
		value: any
	) => {
		setSettings({
			...settings,
			[fieldId]: value,
		});
	};

	const userSettingsSections: SettingsSection[] = [
		{
			id: 'user-preferences',
			title: 'User Preferences',
			description: 'Configure your user preferences',
			fields: [
				{
					id: 'chatEnabled',
					type: 'checkbox',
					label: 'Enable Chat',
					value: settings.chatEnabled,
				},
				{
					id: 'profanityFilter',
					type: 'checkbox',
					label: 'Profanity Filter',
					value: settings.profanityFilter,
				},
				{
					id: 'notificationsEnabled',
					type: 'checkbox',
					label: 'Enable Notifications',
					value: settings.notificationsEnabled,
				},
			],
		},
	];

	return (
		<Settings
			kind='settings-panel'
			title='User Settings'
			sections={userSettingsSections}
			onSettingChange={handleSettingChange}
		/>
	);
};

export * from './configurations';

export {
	default as SettingsFactory,
	S,
	SettingsPresets,
	QuickSettings,
} from './factory';
export type { SettingsFactoryProps } from './factory';

// Export base components
export { default as Settings } from './Settings';
export type { SettingsProps } from './Settings';
