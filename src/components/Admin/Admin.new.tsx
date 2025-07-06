import React from 'react';
import { Wrapper } from '../Wrappers';
import type {
	AdminKind,
	AdminConfiguration,
	AdminFieldConfig,
	SessionDebuggerData,
	PerformanceData,
	ErrorLoggerData,
	DebugPanelData,
	AdminPosition,
	AdminTheme,
	AdminSize,
	AdminOpacity,
} from './configurations';
import {
	DEFAULT_ADMIN_FIELDS,
	DEFAULT_ADMIN_CONFIG,
} from './configurations';
import styles from './admin.module.scss';

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
}

const InfoRow: React.FC<{
	label: string;
	value: string | number;
	unit?: string;
	className?: string;
	labelClassName?: string;
	valueClassName?: string;
	formatter?: (value: any) => string;
}> = ({
	label,
	value,
	unit = '',
	className = '',
	labelClassName = '',
	valueClassName = '',
	formatter,
}) => {
	const formattedValue =
		formatter ? formatter(value) : value;

	return (
		<Wrapper
			className={[styles['admin__info-row'], className]
				.filter(Boolean)
				.join(' ')}
		>
			<span
				className={[
					styles['admin__info-label'],
					labelClassName,
				]
					.filter(Boolean)
					.join(' ')}
			>
				{label}
			</span>
			<span className={valueClassName}>
				{formattedValue}
				{unit ? ` ${unit}` : ''}
			</span>
		</Wrapper>
	);
};

/**
 * Default renderers for each admin kind
 * These can be overridden via the customRenderer prop
 */
const renderSessionDebugger = (
	data: SessionDebuggerData,
	fields: AdminFieldConfig[]
) => (
	<Wrapper>
		{fields.map((field) => (
			<InfoRow
				key={field.key}
				label={field.label}
				value={(data as any)[field.key] ?? ''}
				unit={field.unit}
				formatter={field.formatter}
			/>
		))}
	</Wrapper>
);

const renderPerformanceMonitor = (
	data: PerformanceData,
	fields: AdminFieldConfig[]
) => (
	<Wrapper>
		{fields.map((field) => (
			<InfoRow
				key={field.key}
				label={field.label}
				value={(data as any)[field.key] ?? 0}
				unit={field.unit}
				formatter={field.formatter}
			/>
		))}
	</Wrapper>
);

const renderErrorLogger = (data: ErrorLoggerData) => (
	<Wrapper className={styles.errorLogger}>
		{data.errors?.length ?
			data.errors.map((error, index) => (
				<div key={index} className={styles.errorEntry}>
					<span className={styles.errorTime}>
						{error.time}
					</span>
					<span className={styles.errorMessage}>
						{error.message}
					</span>
				</div>
			))
		:	<span className={styles.noErrors}>No errors</span>}
	</Wrapper>
);

const renderDebugPanel = (data: DebugPanelData) => (
	<Wrapper className={styles.debugPanel}>
		<div className={styles.panelHeaderTitle}>
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
		:	<span className={styles.noDebugData}>
				No debug data
			</span>
		}
	</Wrapper>
);

/**
 * Generate CSS classes based on props
 */
const generateClassNames = (
	kind: AdminKind,
	position: AdminPosition,
	theme?: AdminTheme,
	size?: AdminSize,
	opacity?: AdminOpacity,
	className?: string
): string => {
	const classes = [
		styles.adminComponent,
		styles[`admin-${position}`],
	];

	// Theme classes
	if (theme === 'light') classes.push(styles.lightTheme);
	if (theme === 'dark') classes.push(styles.darkTheme);

	// Size classes
	if (size === 'compact') classes.push(styles.compact);
	if (size === 'expanded') classes.push(styles.expanded);

	// Opacity classes
	if (opacity === 'translucent')
		classes.push(styles.translucent);
	if (opacity === 'opaque') classes.push(styles.opaque);

	// Kind-specific classes
	if (kind === 'session-debugger')
		classes.push(styles.sessionDebugger);
	if (kind === 'performance-monitor')
		classes.push(styles.performanceMonitor);
	if (kind === 'error-logger')
		classes.push(styles.errorLogger);
	if (kind === 'debug-panel')
		classes.push(styles.debugPanel);

	// Custom className
	if (className) classes.push(className);

	return classes.filter(Boolean).join(' ');
};

/**
 * Generate inline styles based on props
 */
const generateInlineStyles = (
	zIndex?: number,
	maxHeight?: number | string,
	maxWidth?: number | string,
	minWidth?: number | string,
	style?: React.CSSProperties
): React.CSSProperties => {
	const inlineStyles: React.CSSProperties = { ...style };

	if (zIndex !== undefined) inlineStyles.zIndex = zIndex;
	if (maxHeight !== undefined)
		inlineStyles.maxHeight = maxHeight;
	if (maxWidth !== undefined)
		inlineStyles.maxWidth = maxWidth;
	if (minWidth !== undefined)
		inlineStyles.minWidth = minWidth;

	return inlineStyles;
};

const Admin: React.FC<AdminProps> = (props) => {
	// Merge with defaults
	const {
		kind = 'custom',
		enabled = DEFAULT_ADMIN_CONFIG.enabled!,
		position = DEFAULT_ADMIN_CONFIG.position!,
		theme = DEFAULT_ADMIN_CONFIG.theme!,
		size = DEFAULT_ADMIN_CONFIG.size!,
		opacity = DEFAULT_ADMIN_CONFIG.opacity!,
		zIndex = DEFAULT_ADMIN_CONFIG.zIndex!,
		showHeader = DEFAULT_ADMIN_CONFIG.showHeader!,
		closable = DEFAULT_ADMIN_CONFIG.closable!,
		title,
		fields = DEFAULT_ADMIN_FIELDS[kind] || [],
		data = {},
		maxHeight,
		maxWidth,
		minWidth,
		className,
		style,
		customRenderer,
		onDataUpdate,
		onClick,
		onClose,
		children,
		...restProps
	} = props;

	// Early return if disabled
	if (!enabled) return null;

	// Generate styles and classes
	const panelClass = generateClassNames(
		kind,
		position,
		theme,
		size,
		opacity,
		className
	);
	const inlineStyles = generateInlineStyles(
		zIndex,
		maxHeight,
		maxWidth,
		minWidth,
		style
	);

	// Render content based on kind and customRenderer
	const renderContent = () => {
		if (customRenderer) {
			return customRenderer(data, props);
		}

		if (children) {
			return children;
		}

		switch (kind) {
			case 'session-debugger':
				return renderSessionDebugger(
					data as SessionDebuggerData,
					fields
				);
			case 'performance-monitor':
				return renderPerformanceMonitor(
					data as PerformanceData,
					fields
				);
			case 'error-logger':
				return renderErrorLogger(data as ErrorLoggerData);
			case 'debug-panel':
				return renderDebugPanel(data as DebugPanelData);
			case 'custom':
			default:
				return <Wrapper>Custom admin component</Wrapper>;
		}
	};

	return (
		<Wrapper
			className={panelClass}
			style={inlineStyles}
			onClick={onClick}
			{...restProps}
		>
			{showHeader && title && (
				<div className={styles.panelHeaderTitle}>
					{title}
					{closable && onClose && (
						<button
							onClick={onClose}
							className={styles.closeButton}
							aria-label='Close'
						>
							×
						</button>
					)}
				</div>
			)}
			{renderContent()}
		</Wrapper>
	);
};

export default Admin;
export type { AdminKind };
