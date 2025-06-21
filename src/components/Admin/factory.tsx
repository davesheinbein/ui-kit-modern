/**
 * AdminFactory - DRY admin factory system
 *
 * This factory provides a simplified API for creating admin components using the configuration system,
 * similar to ButtonFactory but for admin tools.
 */

import React from 'react';
import UnifiedAdmin from './UnifiedAdmin';
import type { UnifiedAdminProps } from './UnifiedAdmin';
import type {
	AdminKind,
	AdminConfiguration,
} from './configurations';

// Factory function for creating admin components
export const AdminFactory: React.FC<UnifiedAdminProps> = ({
	kind,
	...props
}) => {
	return <UnifiedAdmin kind={kind} {...props} />;
};

AdminFactory.displayName = 'AdminFactory';

/**
 * Ultra-DRY Admin shortcuts - for maximum convenience
 */
export const A = AdminFactory; // Ultra-short alias

/**
 * Admin presets with common patterns
 */
export const AdminPresets = {
	/**
	 * Session debugger in top-left corner
	 */
	SESSION_DEBUGGER: (
		props: Partial<AdminConfiguration> = {}
	) => (
		<AdminFactory
			kind='session-debugger'
			enabled={true}
			position='top-left'
			{...props}
		/>
	),

	/**
	 * Performance monitor in top-right corner
	 */
	PERFORMANCE_MONITOR: (
		props: Partial<AdminConfiguration> = {}
	) => (
		<AdminFactory
			kind='performance-monitor'
			enabled={true}
			position='top-right'
			{...props}
		/>
	),

	/**
	 * Error logger in bottom-left corner
	 */
	ERROR_LOGGER: (
		props: Partial<AdminConfiguration> = {}
	) => (
		<AdminFactory
			kind='error-logger'
			enabled={true}
			position='bottom-left'
			{...props}
		/>
	),

	/**
	 * Full debug panel in center
	 */
	DEBUG_PANEL: (
		props: Partial<AdminConfiguration> = {}
	) => (
		<AdminFactory
			kind='debug-panel'
			enabled={true}
			position='center'
			{...props}
		/>
	),
};

/**
 * Convenience function for creating admin components
 */
export const createAdmin = (
	kind: AdminKind,
	config: Partial<AdminConfiguration> = {}
) => {
	return <AdminFactory kind={kind} {...config} />;
};

export default AdminFactory;
