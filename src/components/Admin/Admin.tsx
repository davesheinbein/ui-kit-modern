import React, {
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import { Wrapper } from '../Wrappers';
import {
	AdminKind,
	AdminConfiguration,
} from './configurations';
import {
	selectClientTime,
	selectPerformanceMetrics,
	selectErrors,
	setClientTime,
	setPerformanceMetrics,
	setErrors,
} from '../../store/slices/adminSlice';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store/hooks';
import styles from './Admin.module.scss';

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
	className?: string;
	componentId?: string;
	data?: any;
	[key: string]: any;
}

// Consolidated InfoRow component
const InfoRow: React.FC<{
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
	className = '',
	labelClassName = '',
	valueClassName = '',
}) => (
	<Wrapper
		className={className}
		style={{
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 4,
		}}
	>
		<span
			className={labelClassName}
			style={{ fontWeight: 600 }}
		>
			{label}
		</span>
		<span className={valueClassName}>
			{value}
			{unit ? ` ${unit}` : ''}
		</span>
	</Wrapper>
);

// --- Field configs for each admin kind ---
const adminFieldConfigs: Record<
	string,
	Array<{ label: string; key: string; unit?: string }>
> = {
	'session-debugger': [
		{ label: 'Session Status', key: 'status' },
		{ label: 'User ID', key: 'userId' },
		{ label: 'Email', key: 'email' },
		{ label: 'Session Exists', key: 'sessionExists' },
		{ label: 'Timestamp', key: 'timestamp' },
	],
	'performance-monitor': [
		{ label: 'Memory', key: 'memory', unit: 'MB' },
		{ label: 'FPS', key: 'fps' },
		{ label: 'Load Time', key: 'loadTime', unit: 'ms' },
	],
	// Add more as needed
};

// --- Update AdminBodyConfig type ---
interface AdminFieldConfig {
	label: string;
	key: string;
	unit?: string;
}
interface AdminBodyConfig {
	className: string;
	title?: string;
	updateInterval?: number;
	dataKey?: string;
	selector?: (state: any, componentId: string) => any;
	actionCreator?: any;
	fields?: AdminFieldConfig[];
	dataProcessor?: (stateData: any, props: any) => any;
	renderer?: (
		data: any,
		styles: any,
		props?: any,
		fields?: AdminFieldConfig[]
	) => React.ReactNode;
}

// --- Generic default renderer ---
function defaultAdminRenderer(
	data: any,
	fields: AdminFieldConfig[] = [],
	styles: any,
	props: any
) {
	return (
		<Wrapper>
			{fields.map((field) => (
				<InfoRow
					key={field.key}
					label={field.label}
					value={data[field.key] ?? ''}
					unit={field.unit}
				/>
			))}
		</Wrapper>
	);
}

// --- Refactored adminBodyConfigs ---
const adminBodyConfigs: Record<AdminKind, AdminBodyConfig> =
	{
		'session-debugger': {
			className: 'sessionDebugger',
			updateInterval: 1000,
			dataKey: 'time',
			selector: selectClientTime,
			actionCreator: setClientTime,
			fields: adminFieldConfigs['session-debugger'],
			dataProcessor: (stateData, props) => ({
				status: props.data?.status || 'unknown',
				userId: props.data?.userId || 'None',
				email: props.data?.email || 'None',
				sessionExists: props.data?.sessionExists || 'No',
				timestamp: props.data?.timestamp || '...',
			}),
			renderer: (data, styles, props, fields) =>
				defaultAdminRenderer(data, fields, styles, props),
		},
		'performance-monitor': {
			className: 'performanceMonitor',
			updateInterval: 2000,
			dataKey: 'performance',
			selector: selectPerformanceMetrics,
			actionCreator: setPerformanceMetrics,
			fields: adminFieldConfigs['performance-monitor'],
			dataProcessor: (stateData, props) => ({
				memory: props.data?.memory ?? 0,
				fps: props.data?.fps ?? 0,
				loadTime: props.data?.loadTime ?? 0,
			}),
			renderer: (data, styles, props, fields) =>
				defaultAdminRenderer(data, fields, styles, props),
		},
		'error-logger': {
			className: 'errorLogger',
			dataKey: 'errors',
			selector: selectErrors,
			actionCreator: setErrors,
			dataProcessor: (stateData, props) => ({
				errors: props.data?.errors || [],
			}),
			renderer: (data, styles, props) => (
				<Wrapper
					className={styles.errorLogger}
					style={{ maxHeight: 200, overflowY: 'auto' }}
				>
					{data.errors?.length ?
						data.errors.map((error: any, index: number) => (
							<div key={index} style={{ marginBottom: 6 }}>
								<span
									style={{
										color: '#f87171',
										fontWeight: 600,
									}}
								>
									{error.time}
								</span>
								<span style={{ marginLeft: 8 }}>
									{error.message}
								</span>
							</div>
						))
					:	<span style={{ color: '#aaa' }}>No errors</span>}
				</Wrapper>
			),
		},
		'debug-panel': {
			className: 'debugPanel',
			dataKey: 'environment',
			dataProcessor: (stateData, props) => ({
				...props.data,
			}),
			renderer: (data, styles, props) => (
				<Wrapper className={styles.debugPanel}>
					<div style={{ fontWeight: 600, marginBottom: 8 }}>
						Debug Panel
					</div>
					{data && Object.keys(data).length ?
						Object.entries(data).map(([key, value]) => (
							<InfoRow
								key={key}
								label={key}
								value={String(value)}
							/>
						))
					:	<span style={{ color: '#aaa' }}>
							No debug data
						</span>
					}
				</Wrapper>
			),
		},
		'custom': {
			className: 'custom',
			dataKey: 'environment',
			dataProcessor: (stateData, props) => ({}),
			renderer: (data, styles, props) =>
				props?.children || (
					<Wrapper>Custom admin component</Wrapper>
				),
		},
	};

const getZIndexClass = (zIndex?: number) => {
	if (!zIndex) return styles.adminZ9999;
	return styles[`adminZ${zIndex}`] || '';
};

const Admin: React.FC<AdminProps> = ({
	children,
	kind = 'custom',
	position = 'top-left',
	enabled = false,
	className = '',
	zIndex = 9999,
	componentId = 'default',
	data = {},
	...props
}) => {
	if (!enabled) return null;
	const config =
		adminBodyConfigs[kind] || adminBodyConfigs['custom'];
	const panelData =
		config.dataProcessor ?
			config.dataProcessor(null, { ...props, data })
		:	{};
	const panelClass = [
		styles.adminComponent,
		styles[config.className],
		styles[`admin-${position}`],
		getZIndexClass(zIndex),
		className,
	]
		.filter(Boolean)
		.join(' ');
	return (
		<Wrapper className={panelClass} style={{ zIndex }}>
			{config.renderer ?
				config.renderer(
					panelData,
					styles,
					{ ...props, data, children },
					config.fields
				)
			:	null}
		</Wrapper>
	);
};

export default Admin;
export type { AdminKind };
