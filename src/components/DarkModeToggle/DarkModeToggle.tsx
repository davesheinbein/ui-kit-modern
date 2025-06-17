import React, { useContext } from 'react';
import styles from './DarkModeToggle.module.scss';
import { ThemePaletteContext } from '../ThemePaletteProvider';

const DarkModeToggle: React.FC = () => {
	const { darkMode, setDarkMode } = useContext(
		ThemePaletteContext
	);

	return (
		<button
			className={styles.darkModeToggle}
			onClick={() => setDarkMode(!darkMode)}
			aria-label={
				darkMode ?
					'Switch to light mode'
				:	'Switch to dark mode'
			}
		>
			{darkMode ? '🌙' : '☀️'}
		</button>
	);
};

export default DarkModeToggle;
