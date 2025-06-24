import React, {
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import styles from './Admin.module.scss';
import { Wrapper } from '../Wrappers';
import type {
	AdminConfiguration,
	AdminKind,
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

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
	className?: string;
	[key: string]: any;
}

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
			fps: Math.round(Math.random() * 60 + 30),
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

const DebugRow: React.FC<{
	label: string;
	value: string | number;
	className?: string;
}> = ({ label, value, className }) => (
	<Wrapper className={className || styles.debugRow}>
		<strong>{label}:</strong> {value}
	</Wrapper>
);
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

interface AdminBodyConfig {
	className: string;
	title?: string;
	updateInterval?: number;
	dataKey: keyof typeof dataGenerators;
	selector?: (state: any, componentId: string) => any;
	actionCreator?: any;
	dataProcessor: (stateData: any, props: any) => any;
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

const useAdminComponent = (
	componentId: string,
	kind: AdminKind,
	config: AdminBodyConfig
) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(initializeComponentState({ componentId }));
	}, [dispatch, componentId]);
	const updateFunction = useCallback(() => {
		if (!config.actionCreator || !config.dataKey) return;
		try {
			const generatedData =
				dataGenerators[config.dataKey]();
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
	useEffect(() => {
		if (
			!config.actionCreator ||
			!config.updateInterval ||
			config.updateInterval < 100
		) {
			return;
		}
		updateFunction();
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

const getZIndexClass = (zIndex?: number) => {
	if (!zIndex) return '';
	return styles[`adminZ${zIndex}`] || '';
};

const Admin: React.FC<AdminProps> = ({
	children,
	kind = 'custom',
	position = 'top-left',
	enabled = false,
	className = '',
	zIndex = 9999,
	componentId,
	...props
}) => {
	if (!enabled) return null;
	const positionClass = `admin-${position}`;
	const zIndexClass = getZIndexClass(zIndex);
	const combinedClassName = [
		styles.adminComponent,
		styles[positionClass],
		zIndexClass,
		className,
	]
		.filter(Boolean)
		.join(' ');

	const config = adminBodyConfigs[kind as AdminKind];
	const finalComponentId = componentId || `${kind}-default`;
	const stateData =
		config && config.selector ?
			useAppSelector((state) =>
				config.selector!(state, finalComponentId)
			)
		:	null;
	if (config && config.actionCreator) {
		useAdminComponent(
			finalComponentId,
			kind as AdminKind,
			config
		);
	}
	const renderData =
		config ?
			useMemo(
				() => config.dataProcessor(stateData, props),
				[config, stateData, props.session, props.status]
			)
		:	null;

	return (
		<Wrapper className={combinedClassName} {...props}>
			{config ?
				config.renderer(renderData, styles, props)
			:	children}
		</Wrapper>
	);
};

export default Admin;
export type { AdminKind };
