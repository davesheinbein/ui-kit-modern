export type AdminKind =
	| 'session-debugger'
	| 'performance-monitor'
	| 'error-logger'
	| 'debug-panel'
	| 'custom';

export interface AdminConfiguration {
	kind: AdminKind;
	enabled?: boolean;
	position?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'center';
	className?: string;
	style?: React.CSSProperties;
	zIndex?: number;
}

/**
 * Pre-configured admin component configurations
 */
export const ADMIN_CONFIGURATIONS: Record<
	AdminKind,
	Partial<AdminConfiguration>
> = {
	'session-debugger': {
		position: 'top-left',
		enabled: false,
		zIndex: 9999,
	},
	'performance-monitor': {
		position: 'top-right',
		enabled: false,
		zIndex: 9998,
	},
	'error-logger': {
		position: 'bottom-left',
		enabled: false,
		zIndex: 9997,
	},
	'debug-panel': {
		position: 'center',
		enabled: false,
		zIndex: 9996,
	},
	'custom': {
		enabled: false,
	},
};
