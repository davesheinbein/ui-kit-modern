/**
 * Backward Compatibility Wrapper for SessionDebugger
 *
 * This ensures existing imports continue to work while using the new DRY system internally.
 */

import React from 'react';
import { AdminFactory } from './AdminFactoryDRY';

export interface SessionDebuggerProps {
	enabled?: boolean;
}

/**
 * SessionDebugger - Legacy component wrapper
 * @deprecated Use AdminFactory with kind="session-debugger" instead
 */
const SessionDebugger: React.FC<SessionDebuggerProps> = ({
	enabled = false,
}) => {
	return (
		<AdminFactory
			kind='session-debugger'
			enabled={enabled}
			position='top-left'
		/>
	);
};

export default SessionDebugger;
