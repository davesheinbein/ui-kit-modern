/**
 * AdminFactory - DRY admin factory system
 *
 * This factory provides a simplified API for creating admin components using the configuration system,
 * similar to ButtonFactory but for admin tools.
 */

import React, { useEffect } from 'react';
import UnifiedAdmin from './UnifiedAdmin';
import type { UnifiedAdminProps } from './UnifiedAdmin';
import type {
	AdminKind,
	AdminConfiguration,
} from './configurations';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	initializeComponentState,
	setClientTime,
	setPerformanceMetrics,
	setErrors,
	selectClientTime,
	selectPerformanceMetrics,
	selectErrors,
} from '../../store/slices/adminSlice';
import styles from './Admin.module.scss';

// Body factory interfaces and props
export interface AdminBodyFactoryProps {
	kind: AdminKind;
	componentId?: string; // For identifying this instance in Redux
	[key: string]: any;
}

/**
 * SessionDebugger content component
 */
const SessionDebuggerBody: React.FC<any> = (props) => {
	const dispatch = useAppDispatch();
	const componentId =
		props.componentId || 'session-debugger-default';
	const clientTime = useAppSelector((state) =>
		selectClientTime(state, componentId)
	);

	useEffect(() => {
		// Initialize component state in Redux
		dispatch(initializeComponentState({ componentId }));

		const updateTime = () => {
			const time = new Date().toLocaleTimeString();
			dispatch(setClientTime({ componentId, time }));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, [dispatch, componentId]);

	// You must provide your own session context or hook in your app
	const session: any = props.session || undefined;
	const status = props.status || 'unknown';

	return (
		<div className={styles.sessionDebugger}>
			<div className={styles.debugRow}>
				<strong>Session Status:</strong> {status}
			</div>
			<div className={styles.debugRow}>
				<strong>User ID:</strong>{' '}
				{session?.user ? (session.user as any).id : 'None'}
			</div>
			<div className={styles.debugRow}>
				<strong>Email:</strong>{' '}
				{session?.user?.email || 'None'}
			</div>
			<div className={styles.debugRow}>
				<strong>Session Exists:</strong>{' '}
				{session ? 'Yes' : 'No'}
			</div>
			<div className={styles.debugRow}>
				<strong>Timestamp:</strong> {clientTime || '...'}
			</div>
		</div>
	);
};

/**
 * PerformanceMonitor content component
 */
const PerformanceMonitorBody: React.FC<any> = (props) => {
	const dispatch = useAppDispatch();
	const componentId =
		props.componentId || 'performance-monitor-default';
	const performance = useAppSelector((state) =>
		selectPerformanceMetrics(state, componentId)
	);

	useEffect(() => {
		// Initialize component state in Redux
		dispatch(initializeComponentState({ componentId }));

		const updatePerformance = () => {
			const memoryInfo = (window.performance as any)
				?.memory;
			const metrics = {
				memory:
					memoryInfo ?
						Math.round(
							memoryInfo.usedJSHeapSize / 1024 / 1024
						)
					:	0,
				fps: Math.round(Math.random() * 60 + 30), // Mock FPS
				loadTime: Math.round(window.performance.now()),
			};
			dispatch(
				setPerformanceMetrics({ componentId, metrics })
			);
		};

		updatePerformance();
		const interval = setInterval(updatePerformance, 2000);

		return () => clearInterval(interval);
	}, [dispatch, componentId]);

	return (
		<div className={styles.performanceMonitor}>
			<div className={styles.metricRow}>
				<span className={styles.metricLabel}>Memory:</span>{' '}
				<span className={styles.metricValue}>
					{performance.memory} MB
				</span>
			</div>
			<div className={styles.metricRow}>
				<span className={styles.metricLabel}>FPS:</span>{' '}
				<span className={styles.metricValue}>
					{performance.fps}
				</span>
			</div>
			<div className={styles.metricRow}>
				<span className={styles.metricLabel}>
					Load Time:
				</span>{' '}
				<span className={styles.metricValue}>
					{performance.loadTime} ms
				</span>
			</div>
		</div>
	);
};

/**
 * ErrorLogger content component
 */
const ErrorLoggerBody: React.FC<any> = (props) => {
	const dispatch = useAppDispatch();
	const componentId =
		props.componentId || 'error-logger-default';
	const errors = useAppSelector((state) =>
		selectErrors(state, componentId)
	);

	useEffect(() => {
		// Initialize component state in Redux
		dispatch(initializeComponentState({ componentId }));

		const mockErrors = [
			{
				time: new Date().toLocaleTimeString(),
				message: 'Network timeout',
			},
			{
				time: new Date().toLocaleTimeString(),
				message: 'Invalid API response',
			},
		];
		dispatch(
			setErrors({ componentId, errors: mockErrors })
		);
	}, [dispatch, componentId]);

	return (
		<div className={styles.errorLogger}>
			<div
				style={{ marginBottom: '8px', fontWeight: 'bold' }}
			>
				Error Log
			</div>
			{errors.map((error, index) => (
				<div key={index} className={styles.errorEntry}>
					<div className={styles.errorTime}>
						{error.time}
					</div>
					<div className={styles.errorMessage}>
						{error.message}
					</div>
				</div>
			))}
		</div>
	);
};

/**
 * DebugPanel content component
 */
const DebugPanelBody: React.FC<any> = (props) => {
	return (
		<div className={styles.debugPanel}>
			<div className={styles.panelHeader}>
				<h3>Debug Panel</h3>
			</div>
			<div className={styles.panelSection}>
				<div className={styles.sectionTitle}>
					Environment
				</div>
				<div>
					Node Env:{' '}
					{typeof window !== 'undefined' ?
						'browser'
					:	'development'}
				</div>
				<div>
					User Agent:{' '}
					{typeof navigator !== 'undefined' ?
						navigator.userAgent.substring(0, 50) + '...'
					:	'N/A'}
				</div>
			</div>
			<div className={styles.panelSection}>
				<div className={styles.sectionTitle}>
					Application State
				</div>
				<div>
					Components Rendered:{' '}
					{Math.floor(Math.random() * 100)}
				</div>
				<div>
					Active Listeners: {Math.floor(Math.random() * 20)}
				</div>
			</div>
		</div>
	);
};

/**
 * Factory component that renders the appropriate admin body based on kind
 */
export const AdminBodyFactory: React.FC<
	AdminBodyFactoryProps
> = ({ kind, componentId, ...props }) => {
	// Generate a default componentId if none provided
	const finalComponentId =
		componentId || `${kind}-${Date.now()}`;

	switch (kind) {
		case 'session-debugger':
			return (
				<SessionDebuggerBody
					componentId={finalComponentId}
					{...props}
				/>
			);
		case 'performance-monitor':
			return (
				<PerformanceMonitorBody
					componentId={finalComponentId}
					{...props}
				/>
			);
		case 'error-logger':
			return (
				<ErrorLoggerBody
					componentId={finalComponentId}
					{...props}
				/>
			);
		case 'debug-panel':
			return (
				<DebugPanelBody
					componentId={finalComponentId}
					{...props}
				/>
			);
		case 'custom':
			return (
				props.children || <div>Custom admin component</div>
			);
		default:
			return <div>Unknown admin component: {kind}</div>;
	}
};

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

// Legacy SessionDebugger interface for backward compatibility
export interface SessionDebuggerProps {
	enabled?: boolean;
	position?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'center';
	session?: any;
	status?: string;
}

/**
 * SessionDebugger - Legacy component wrapper
 * @deprecated Use AdminFactory with kind="session-debugger" instead
 */
export const SessionDebugger: React.FC<
	SessionDebuggerProps
> = ({
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

export default AdminFactory;
