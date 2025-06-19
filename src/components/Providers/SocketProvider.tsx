import React from 'react';
import UnifiedProvider from './UnifiedProvider';

interface SocketProviderProps {
	children: React.ReactNode;
	session?: any;
	autoConnect?: boolean;
	url?: string;
}

/**
 * SocketProvider - Backward compatibility wrapper
 *
 * This component maintains the same API as the original SocketProvider
 * but delegates to the new DRY UnifiedProvider system.
 */
const SocketProvider: React.FC<SocketProviderProps> = ({
	children,
	session,
	autoConnect = false,
	url = '/api/socket',
	...props
}) => {
	return (
		<UnifiedProvider
			kind='socket-provider'
			session={session}
			autoConnect={autoConnect}
			url={url}
			{...props}
		>
			{children}
		</UnifiedProvider>
	);
};

export default SocketProvider;
