import * as React from 'react';

export type AdminKind =
	| 'session-debugger'
	| 'performance-monitor'
	| 'error-logger'
	| 'debug-panel'
	| 'custom';

export type AdminPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right'
	| 'center';

export type AdminTheme = 'light' | 'dark' | 'auto';
export type AdminSize = 'compact' | 'default' | 'expanded';
export type AdminOpacity = 'translucent' | 'opaque';

export interface AdminFieldConfig {
	label: string;
	key: string;
	unit?: string;
	formatter?: (value: any) => string;
}

export interface SessionDebuggerData {
	status?: string;
	userId?: string;
	email?: string;
	sessionExists?: string;
	timestamp?: string;
}

export interface PerformanceData {
	memory?: number;
	fps?: number;
	loadTime?: number;
}

export interface ErrorLogEntry {
	time: string;
	message: string;
}

export interface ErrorLoggerData {
	errors?: ErrorLogEntry[];
}

export interface DebugPanelData {
	[key: string]: any;
}

export type AdminData =
	| SessionDebuggerData
	| PerformanceData
	| ErrorLoggerData
	| DebugPanelData;

export interface AdminConfiguration {
	kind: AdminKind;
	enabled?: boolean;
	position?: AdminPosition;
	className?: string;
	style?: React.CSSProperties;
	zIndex?: number;
	theme?: AdminTheme;
	size?: AdminSize;
	opacity?: AdminOpacity;
	title?: string;
	showHeader?: boolean;
	fields?: AdminFieldConfig[];
	data?: AdminData;
	updateInterval?: number;
	maxHeight?: number | string;
	maxWidth?: number | string;
	minWidth?: number | string;
	customRenderer?: (
		data: any,
		config: AdminConfiguration
	) => React.ReactNode;
	onDataUpdate?: (data: any) => void;
	onClick?: () => void;
	onClose?: () => void;
	closable?: boolean;
	draggable?: boolean;
	resizable?: boolean;
}

/**
 * Default field configurations for each admin kind
 * These are defaults that can be overridden via props
 */
export const DEFAULT_ADMIN_FIELDS: Record<
	AdminKind,
	AdminFieldConfig[]
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
	'error-logger': [],
	'debug-panel': [],
	'custom': [],
};

/**
 * Default configurations for admin components
 * All defaults can be overridden via props
 */
export const DEFAULT_ADMIN_CONFIG: Partial<AdminConfiguration> =
	{
		enabled: false,
		position: 'top-left',
		theme: 'dark',
		size: 'default',
		opacity: 'translucent',
		zIndex: 9999,
		showHeader: true,
		closable: false,
		draggable: false,
		resizable: false,
		updateInterval: 1000,
	};
