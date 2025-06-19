import React from 'react';
import UnifiedProvider from './UnifiedProvider';

/**
 * AchievementSocketListener - Backward compatibility wrapper
 *
 * This component maintains the same API as the original AchievementSocketListener
 * but delegates to the new DRY UnifiedProvider system.
 */
const AchievementSocketListener: React.FC = (props) => {
	return (
		<UnifiedProvider
			kind='achievement-socket-listener'
			{...props}
		/>
	);
};

export default AchievementSocketListener;
