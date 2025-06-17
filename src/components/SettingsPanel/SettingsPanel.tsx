import React, { useContext } from 'react';
import styles from './SettingsPanel.module.scss';
import { UserSettingsContext } from '../UserSettingsProvider';

const SettingsPanel: React.FC = () => {
	const { settings, setSettings } = useContext(
		UserSettingsContext
	);

	if (!settings) return null;

	return (
		<div className={styles.settingsPanelContainer}>
			<h2>User Settings</h2>
			<div className={styles.settingsPanelOptions}>
				<label className={styles.settingsPanelLabel}>
					<input
						type='checkbox'
						checked={settings.chatEnabled}
						onChange={(e) =>
							setSettings({
								...settings,
								chatEnabled: e.target.checked,
							})
						}
					/>
					Enable Chat
				</label>
				<label className={styles.settingsPanelLabel}>
					<input
						type='checkbox'
						checked={settings.profanityFilter}
						onChange={(e) =>
							setSettings({
								...settings,
								profanityFilter: e.target.checked,
							})
						}
					/>
					Profanity Filter
				</label>
				<label className={styles.settingsPanelLabel}>
					<input
						type='checkbox'
						checked={settings.notificationsEnabled}
						onChange={(e) =>
							setSettings({
								...settings,
								notificationsEnabled: e.target.checked,
							})
						}
					/>
					Enable Notifications
				</label>
			</div>
		</div>
	);
};

export default SettingsPanel;
