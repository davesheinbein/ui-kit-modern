import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react';

interface UserSettings {
	chatEnabled: boolean;
	profanityFilter: boolean;
	notificationsEnabled: boolean;
}

interface UserSettingsContextType {
	settings: UserSettings | null;
	setSettings: (settings: UserSettings) => void;
}

export const UserSettingsContext =
	createContext<UserSettingsContextType>({
		settings: null,
		setSettings: () => {},
	});

export const useUserSettings = () =>
	useContext(UserSettingsContext);

interface UserSettingsProviderProps {
	children: ReactNode;
}

const UserSettingsProvider: React.FC<
	UserSettingsProviderProps
> = ({ children }) => {
	const [settings, setSettings] =
		useState<UserSettings | null>(null);

	return (
		<UserSettingsContext.Provider
			value={{ settings, setSettings }}
		>
			{children}
		</UserSettingsContext.Provider>
	);
};

export default UserSettingsProvider;
