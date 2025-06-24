import React, {
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import { Wrapper } from '../Wrappers';
import Admin from './Admin';
import type { AdminProps } from './Admin';
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

// Generic hook for admin component initialization and state management
const useAdminComponent = (
	componentId: string,
	kind: AdminKind,
	config: AdminBodyConfig
) => {
	const dispatch = useAppDispatch();

	// Initialize component state - only once per componentId
	useEffect(() => {
		dispatch(initializeComponentState({ componentId }));
	}, [dispatch, componentId]);

	// Memoized update function to prevent infinite loops
	const updateFunction = useCallback(() => {
		if (!config.actionCreator || !config.dataKey) return;

		try {
			const generatedData =
				dataGenerators[config.dataKey]();
			// Ultra-simplified dispatching with ternary operators and dynamic payload
			const payload = {
				componentId,
				[config.dataKey === 'time' ? 'time'
				: config.dataKey === 'performance' ? 'metrics'
				: 'errors']: generatedData,
			};
			dispatch(config.actionCreator(payload));
		} catch (error) {
			console.warn(
				`Admin component ${kind} data generation failed:`,
				error
			);
		}
	}, [
		dispatch,
		componentId,
		config.actionCreator,
		config.dataKey,
		kind,
	]);

	// Set up interval for updates with additional safeguards
	useEffect(() => {
		if (
			!config.actionCreator ||
			!config.updateInterval ||
			config.updateInterval < 100
		) {
			return; // Prevent intervals shorter than 100ms to avoid performance issues
		}

		updateFunction(); // Run immediately
		const interval = setInterval(
			updateFunction,
			config.updateInterval
		);
		return () => clearInterval(interval);
	}, [
		updateFunction,
		config.actionCreator,
		config.updateInterval,
	]);

	return { dispatch };
};

// Data generators for mock/real data
const dataGenerators = {
	time: () => new Date().toLocaleTimeString(),

	performance: () => {
		const memoryInfo = (window.performance as any)?.memory;
		return {
			memory:
				memoryInfo ?
					Math.round(
						memoryInfo.usedJSHeapSize / 1024 / 1024
					)
				:	0,
			fps: Math.round(Math.random() * 60 + 30), // Mock FPS
			loadTime: Math.round(window.performance.now()),
		};
	},

	errors: () => [
		{
			time: new Date().toLocaleTimeString(),
			message: 'Network timeout',
		},
		{
			time: new Date().toLocaleTimeString(),
			message: 'Invalid API response',
		},
	],

	environment: () => ({
		nodeEnv:
			typeof window !== 'undefined' ? 'browser' : (
				'development'
			),
		userAgent:
			typeof navigator !== 'undefined' ?
				`${navigator.userAgent.substring(0, 50)}...`
			:	'N/A',
		componentsRendered: Math.floor(Math.random() * 100),
		activeListeners: Math.floor(Math.random() * 20),
	}),
};

// Generic row renderer for debug information with better props handling
const DebugRow: React.FC<{
	label: string;
	value: string | number;
	className?: string;
}> = ({ label, value, className }) => (
	<Wrapper className={className || styles.debugRow}>
		<strong>{label}:</strong> {value}
	</Wrapper>
);

// Generic metric row renderer with enhanced props
const MetricRow: React.FC<{
	label: string;
	value: string | number;
	unit?: string;
	className?: string;
	labelClassName?: string;
	valueClassName?: string;
}> = ({
	label,
	value,
	unit = '',
	className,
	labelClassName,
	valueClassName,
}) => (
	<Wrapper className={className || styles.metricRow}>
		<span className={labelClassName || styles.metricLabel}>
			{label}:
		</span>
		<span className={valueClassName || styles.metricValue}>
			{value}
			{unit ? ` ${unit}` : ''}
		</span>
	</Wrapper>
);

// Configuration-driven body components for ultimate DRY approach
interface AdminBodyConfig {
	className: string;
	title?: string;
	updateInterval?: number;
	dataKey: keyof typeof dataGenerators;
	selector?: (state: any, componentId: string) => any;
	actionCreator?: any;
	dataProcessor: (stateData: any, props: any) => any; // New: process data before rendering
	renderer: (
		data: any,
		styles: any,
		props?: any
	) => React.ReactNode;
}

const adminBodyConfigs: Record<AdminKind, AdminBodyConfig> =
	{
		'session-debugger': {
			className: 'sessionDebugger',
			updateInterval: 1000,
			dataKey: 'time',
			selector: selectClientTime,
			actionCreator: setClientTime,
			dataProcessor: (stateData, props) => ({
				debugData: [
					{
						label: 'Session Status',
						value: props.status || 'unknown',
					},
					{
						label: 'User ID',
						value: props.session?.user?.id || 'None',
					},
					{
						label: 'Email',
						value: props.session?.user?.email || 'None',
					},
					{
						label: 'Session Exists',
						value: props.session ? 'Yes' : 'No',
					},
					{ label: 'Timestamp', value: stateData || '...' },
				],
			}),
			renderer: (data, styles, props) => (
				<Wrapper className={styles.sessionDebugger}>
					{data.debugData?.map(
						(item: any, index: number) => (
							<DebugRow
								key={index}
								label={item.label}
								value={item.value}
								className={props?.rowClassName}
							/>
						)
					) || <Wrapper>No debug data available</Wrapper>}
				</Wrapper>
			),
		},
		'performance-monitor': {
			className: 'performanceMonitor',
			updateInterval: 2000,
			dataKey: 'performance',
			selector: selectPerformanceMetrics,
			actionCreator: setPerformanceMetrics,
			dataProcessor: (stateData) => ({
				metricsData: [
					{
						label: 'Memory',
						value: stateData?.memory ?? 0,
						unit: 'MB',
					},
					{
						label: 'FPS',
						value: stateData?.fps ?? 0,
						unit: '',
					},
					{
						label: 'Load Time',
						value: stateData?.loadTime ?? 0,
						unit: 'ms',
					},
				],
			}),
			renderer: (data, styles, props) => (
				<Wrapper className={styles.performanceMonitor}>
					{data.metricsData?.map(
						(metric: any, index: number) => (
							<MetricRow
								key={index}
								label={metric.label}
								value={metric.value}
								unit={metric.unit}
								className={props?.metricClassName}
								labelClassName={props?.metricLabelClassName}
								valueClassName={props?.metricValueClassName}
							/>
						)
					) || (
						<Wrapper>No performance data available</Wrapper>
					)}
				</Wrapper>
			),
		},
		'error-logger': {
			className: 'errorLogger',
			dataKey: 'errors',
			selector: selectErrors,
			actionCreator: setErrors,
			dataProcessor: (stateData) => ({
				errors: stateData || [],
			}),
			renderer: (data, styles, props) => (
				<Wrapper className={styles.errorLogger}>
					<Wrapper
						style={{
							marginBottom: '8px',
							fontWeight: 'bold',
						}}
					>
						{props?.title || 'Error Log'}
					</Wrapper>
					{data.errors?.length ?
						data.errors.map((error: any, index: number) => (
							<Wrapper
								key={index}
								className={styles.errorEntry}
							>
								<Wrapper className={styles.errorTime}>
									{error.time}
								</Wrapper>
								<Wrapper className={styles.errorMessage}>
									{error.message}
								</Wrapper>
							</Wrapper>
						))
					:	<Wrapper>No errors logged</Wrapper>}
				</Wrapper>
			),
		},
		'debug-panel': {
			className: 'debugPanel',
			dataKey: 'environment',
			dataProcessor: () => dataGenerators.environment(),
			renderer: (data, styles, props) => (
				<Wrapper className={styles.debugPanel}>
					<Wrapper className={styles.panelHeader}>
						<h3>{props?.title || 'Debug Panel'}</h3>
					</Wrapper>
					<Wrapper className={styles.panelSection}>
						<Wrapper className={styles.sectionTitle}>
							{props?.environmentTitle || 'Environment'}
						</Wrapper>
						<Wrapper>
							Node Env: {data?.nodeEnv || 'Unknown'}
						</Wrapper>
						<Wrapper>
							User Agent: {data?.userAgent || 'N/A'}
						</Wrapper>
					</Wrapper>
					<Wrapper className={styles.panelSection}>
						<Wrapper className={styles.sectionTitle}>
							{props?.appStateTitle || 'Application State'}
						</Wrapper>
						<Wrapper>
							Components Rendered:{' '}
							{data?.componentsRendered || 0}
						</Wrapper>
						<Wrapper>
							Active Listeners: {data?.activeListeners || 0}
						</Wrapper>
					</Wrapper>
				</Wrapper>
			),
		},
		'custom': {
			className: 'custom',
			dataKey: 'environment',
			dataProcessor: () => ({}),
			renderer: (data, styles, props) =>
				props?.children || (
					<Wrapper>Custom admin component</Wrapper>
				),
		},
	};

// Simplified generic admin body component
const GenericAdminBody: React.FC<{
	kind: AdminKind;
	[key: string]: any;
}> = ({ kind, ...props }) => {
	const config = adminBodyConfigs[kind];
	if (!config)
		return (
			<Wrapper>Unknown admin component: {kind}</Wrapper>
		);

	const componentId =
		props.componentId || `${kind}-default`;
	const stateData =
		config.selector ?
			useAppSelector((state) =>
				config.selector!(state, componentId)
			)
		:	null;

	// Use the simplified hook that handles updates internally
	useAdminComponent(componentId, kind, config);

	// Use the config's data processor - much cleaner!
	const renderData = useMemo(
		() => config.dataProcessor(stateData, props),
		[config, stateData, props.session, props.status]
	);

	return config.renderer(renderData, styles, props);
};

// Consolidated factory function - merged AdminBodyFactory into AdminFactory
export const AdminFactory: React.FC<
	AdminProps & { [key: string]: any }
> = ({ kind, children, componentId, ...props }) => {
	// Separate admin props from body props using destructuring with defaults
	const {
		enabled = false,
		position = 'top-left',
		className = '',
		style,
		zIndex = 9999,
		...bodyProps
	} = props;

	const adminProps = {
		kind,
		enabled,
		position,
		className,
		style,
		zIndex,
	};
	const finalComponentId =
		componentId || `${kind}-${Date.now()}`;

	return (
		<Admin {...adminProps}>
			{children ||
				(kind === 'custom' ?
					bodyProps.children || (
						<Wrapper>Custom admin component</Wrapper>
					)
				:	<GenericAdminBody
						kind={kind}
						componentId={finalComponentId}
						{...bodyProps}
					/>)}
		</Admin>
	);
};

AdminFactory.displayName = 'AdminFactory';

/**
 * Ultra-DRY Admin shortcuts - for maximum convenience
 */
export const A = AdminFactory; // Ultra-short alias

/**
 * Simplified admin utilities with consolidated helper functions and enhanced ternary operators
 */
export const AdminUtils = {
	// Create any admin type with minimal config
	create: (kind: AdminKind, props: any = {}) => (
		<AdminFactory kind={kind} enabled={true} {...props} />
	),

	// Batch create multiple admin components with enhanced filtering
	createMultiple: (
		configs: Array<{
			kind: AdminKind;
			props?: any;
			enabled?: boolean;
		}>
	) => (
		<>
			{configs
				.filter((config) => config.enabled !== false)
				.map((config, index) => (
					<AdminFactory
						key={
							config.props?.key || `${config.kind}-${index}`
						}
						kind={config.kind}
						enabled={config.enabled ?? true}
						{...config.props}
					/>
				))}
		</>
	),

	// Consolidated utility functions with enhanced ternary operators
	getConfig: (kind: AdminKind) =>
		adminBodyConfigs[kind] || null,
	generators: dataGenerators,
	DebugRow,
	MetricRow,
	GenericAdminBody,
	isValidKind: (kind: string): kind is AdminKind =>
		Object.keys(adminBodyConfigs).includes(kind),
	getDefaultPosition: (kind: AdminKind) =>
		({
			'session-debugger': 'top-left',
			'performance-monitor': 'top-right',
			'error-logger': 'bottom-left',
			'debug-panel': 'center',
			'custom': 'top-left',
		})[kind] || 'top-left',
	shouldAutoEnable: (kind: AdminKind, isDev = false) =>
		isDev || kind === 'error-logger',
};

// Ultra-consolidated preset creation helper
const createPreset =
	(kind: AdminKind) =>
	(props: Partial<AdminConfiguration> = {}) =>
		AdminUtils.create(kind, {
			position:
				props.position ||
				AdminUtils.getDefaultPosition(kind),
			...props,
		});

/**
 * Simplified admin presets using ultra-consolidated helpers
 */
export const AdminPresets = {
	SESSION_DEBUGGER: createPreset('session-debugger'),
	PERFORMANCE_MONITOR: createPreset('performance-monitor'),
	ERROR_LOGGER: createPreset('error-logger'),
	DEBUG_PANEL: createPreset('debug-panel'),

	// Multi-component presets with consolidated logic using object mapping
	ALL: (
		props: Partial<AdminConfiguration> & {
			includePerfMonitor?: boolean;
			includeErrorLogger?: boolean;
			includeSessionDebugger?: boolean;
		} = {}
	) => {
		const {
			includePerfMonitor = true,
			includeErrorLogger = true,
			includeSessionDebugger = true,
			...baseProps
		} = props;

		const componentMap = {
			'session-debugger': includeSessionDebugger,
			'performance-monitor': includePerfMonitor,
			'error-logger': includeErrorLogger,
		};

		const components = Object.entries(componentMap)
			.filter(([_, include]) => include)
			.map(([kind]) => ({
				kind: kind as AdminKind,
				props: {
					position: AdminUtils.getDefaultPosition(
						kind as AdminKind
					),
					...baseProps,
				},
			}));

		return AdminUtils.createMultiple(components);
	},

	DEV_SUITE: (
		props: Partial<AdminConfiguration> & {
			includeDebugPanel?: boolean;
			development?: boolean;
		} = {}
	) => {
		const {
			includeDebugPanel = true,
			development = process.env.NODE_ENV === 'development',
			...baseProps
		} = props;

		if (!development) return null;

		const componentMap = {
			'session-debugger': true,
			'performance-monitor': true,
			'error-logger': true,
			'debug-panel': includeDebugPanel,
		};

		const components = Object.entries(componentMap)
			.filter(([_, include]) => include)
			.map(([kind]) => ({
				kind: kind as AdminKind,
				props: {
					position: AdminUtils.getDefaultPosition(
						kind as AdminKind
					),
					...baseProps,
				},
			}));

		return AdminUtils.createMultiple(components);
	},

	MINIMAL: (props: Partial<AdminConfiguration> = {}) =>
		AdminUtils.createMultiple([
			{
				kind: 'performance-monitor',
				props: { position: 'top-right', ...props },
			},
			{
				kind: 'error-logger',
				props: { position: 'bottom-left', ...props },
			},
		]),
};

/**
 * Convenience function for creating admin components with enhanced prop handling
 */
export const createAdmin = (
	kind: AdminKind,
	config: Partial<AdminConfiguration> = {}
) => AdminUtils.create(kind, config);

// Enhanced legacy SessionDebugger interface for backward compatibility
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
	className?: string;
	style?: React.CSSProperties;
	rowClassName?: string;
	title?: string;
}

/**
 * SessionDebugger - Legacy component wrapper with enhanced props
 * @deprecated Use AdminFactory with kind="session-debugger" instead
 */
export const SessionDebugger: React.FC<
	SessionDebuggerProps
> = ({
	enabled = false,
	position = 'top-left',
	...props
}) => (
	<AdminFactory
		kind='session-debugger'
		enabled={enabled}
		position={position}
		{...props}
	/>
);

// Export the generic body and utilities for advanced use cases
export {
	GenericAdminBody,
	adminBodyConfigs,
	dataGenerators,
	DebugRow,
	MetricRow,
	useAdminComponent,
};

export default AdminFactory;
