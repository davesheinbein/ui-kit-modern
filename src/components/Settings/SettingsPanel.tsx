import React, { useContext } from 'react';
import UnifiedSettings from './UnifiedSettings';
import { UserSettingsContext } from '../UserSettingsProvider';
import { SettingsSection } from './SettingsConfigurations';

/**
 * SettingsPanel - Backward compatibility wrapper
 * For new development, use UnifiedSettings with kind="settings-panel"
 */
const SettingsPanel: React.FC = () => {
	const { settings, setSettings } = useContext(
		UserSettingsContext
	);

	if (!settings) return null;

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
		<UnifiedSettings
			kind='settings-panel'
			title='User Settings'
			sections={userSettingsSections}
			onSettingChange={handleSettingChange}
		/>
	);
};

export default SettingsPanel;
