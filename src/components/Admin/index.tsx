export { default as Admin } from './Admin';
export { default as UnifiedAdmin } from './UnifiedAdmin';
export {
	default as AdminFactory,
	A,
	AdminPresets,
	createAdmin,
} from './factory';
export { default as AdminBodyFactory } from './AdminBodyFactory';
export * from './configurations';
export type { AdminProps } from './Admin';
export type { UnifiedAdminProps } from './UnifiedAdmin';
export type { AdminBodyFactoryProps } from './AdminBodyFactory';

// =============================================================================
// BACKWARD COMPATIBILITY WRAPPERS
// =============================================================================

import React from 'react';
import { AdminFactory } from './factory';

export interface SessionDebuggerProps {
	enabled?: boolean;
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
	session?: any;
	status?: string;
}

/**
 * SessionDebugger - Legacy component wrapper
 * @deprecated Use AdminFactory with kind="session-debugger" instead
 */
export const SessionDebugger: React.FC<SessionDebuggerProps> = ({
	enabled = false,
	position = 'top-left',
	...props
}) => {
	return (
		<AdminFactory
			kind='session-debugger'
			enabled={enabled}
			position={position}
			{...props}
		/>
	);
};

export default SessionDebugger;
