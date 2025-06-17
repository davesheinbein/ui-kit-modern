import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react';

interface ThemePaletteContextType {
	darkMode: boolean;
	setDarkMode: (dark: boolean) => void;
	palette: Record<string, string>;
	setPalette: (palette: Record<string, string>) => void;
}

export const ThemePaletteContext =
	createContext<ThemePaletteContextType>({
		darkMode: false,
		setDarkMode: () => {},
		palette: {},
		setPalette: () => {},
	});

export const useThemePalette = () =>
	useContext(ThemePaletteContext);

interface ThemePaletteProviderProps {
	children: ReactNode;
}

const ThemePaletteProvider: React.FC<
	ThemePaletteProviderProps
> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const [palette, setPalette] = useState<
		Record<string, string>
	>({});

	return (
		<ThemePaletteContext.Provider
			value={{ darkMode, setDarkMode, palette, setPalette }}
		>
			{children}
		</ThemePaletteContext.Provider>
	);
};

export default ThemePaletteProvider;
