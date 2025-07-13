import { useContext } from 'react';
import { ThemePaletteContext } from '../../Providers';

export function useDarkModeCheckbox(
	checked: boolean | undefined,
	onChange: any,
	kind: string,
	darkModeContext: boolean
) {
	const themePaletteContext = useContext(
		ThemePaletteContext
	);
	let finalChecked = checked;
	let finalOnChange = onChange;

	if (
		kind === 'dark-mode-toggle' &&
		darkModeContext &&
		themePaletteContext
	) {
		const hasDarkMode = 'darkMode' in themePaletteContext;
		if (hasDarkMode) {
			finalChecked = (themePaletteContext as any).darkMode;
			finalOnChange = () =>
				(themePaletteContext as any).setDarkMode(
					!(themePaletteContext as any).darkMode
				);
		}
	}
	return { finalChecked, finalOnChange };
}
