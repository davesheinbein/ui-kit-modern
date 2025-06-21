/**
 * AdminBodyFactory - Creates the actual admin component content based on admin kind
 * This is the DRY equivalent of the individual admin components
 */

import React, { useEffect, useState } from 'react';
import styles from './Admin.module.scss';
import type { AdminKind } from './configurations';

export interface AdminBodyFactoryProps {
	kind: AdminKind;
	[key: string]: any;
}

/**
 * SessionDebugger content component
 */
const SessionDebuggerBody: React.FC<any> = (props) => {
	const [clientTime, setClientTime] = useState<
		string | null
	>(null);

	useEffect(() => {
		const updateTime = () => {
			setClientTime(new Date().toLocaleTimeString());
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

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
	const [performance, setPerformance] = useState({
		memory: 0,
		fps: 0,
		loadTime: 0,
	});

	useEffect(() => {
		const updatePerformance = () => {
			const memoryInfo = (window.performance as any)
				?.memory;
			setPerformance({
				memory:
					memoryInfo ?
						Math.round(
							memoryInfo.usedJSHeapSize / 1024 / 1024
						)
					:	0,
				fps: Math.round(Math.random() * 60 + 30), // Mock FPS
				loadTime: Math.round(window.performance.now()),
			});
		};

		updatePerformance();
		const interval = setInterval(updatePerformance, 2000);

		return () => clearInterval(interval);
	}, []);

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
	const [errors, setErrors] = useState<
		Array<{ time: string; message: string }>
	>([]);

	useEffect(() => {
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
		setErrors(mockErrors);
	}, []);

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
const AdminBodyFactory: React.FC<AdminBodyFactoryProps> = ({
	kind,
	...props
}) => {
	switch (kind) {
		case 'session-debugger':
			return <SessionDebuggerBody {...props} />;
		case 'performance-monitor':
			return <PerformanceMonitorBody {...props} />;
		case 'error-logger':
			return <ErrorLoggerBody {...props} />;
		case 'debug-panel':
			return <DebugPanelBody {...props} />;
		case 'custom':
			return (
				props.children || <div>Custom admin component</div>
			);
		default:
			return <div>Unknown admin component: {kind}</div>;
	}
};

export default AdminBodyFactory;
