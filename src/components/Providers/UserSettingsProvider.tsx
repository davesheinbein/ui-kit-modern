import React from 'react';
import UnifiedProvider from './UnifiedProvider';

interface UserSettingsProviderProps {
	children: React.ReactNode;
	initialSettings?: any;
}

/**
 * UserSettingsProvider - Backward compatibility wrapper
 *
 * This component maintains the same API as the original UserSettingsProvider
 * but delegates to the new DRY UnifiedProvider system.
 */
const UserSettingsProvider: React.FC<
	UserSettingsProviderProps
> = ({ children, initialSettings, ...props }) => {
	return (
		<UnifiedProvider
			kind='user-settings-provider'
			initialSettings={initialSettings}
			{...props}
		>
			{children}
		</UnifiedProvider>
	);
};

export default UserSettingsProvider;
