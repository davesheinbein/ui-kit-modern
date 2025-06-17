import React from 'react';
import styles from './ThemeSelector.module.scss';

export const vsModeDefaults = {
	player: '#2563eb',
	enemy: '#ef4444',
	playerBg: '#e0e7ff',
	enemyBg: '#fee2e2',
	boardBg: '#fff',
	font: '#222',
	border: '#e0e7ef',
};

interface ThemeSelectorProps {
	value: string;
	onChange: (theme: string) => void;
	themes: string[];
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
	value,
	onChange,
	themes,
}) => (
	<div className={styles.themeSelectorContainer}>
		<label className={styles.themeSelectorLabel}>
			Theme:
		</label>
		<select
			className={styles.themeSelectorSelect}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			{themes.map((theme) => (
				<option key={theme} value={theme}>
					{theme}
				</option>
			))}
		</select>
	</div>
);

export default ThemeSelector;
