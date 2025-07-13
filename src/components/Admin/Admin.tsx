import * as React from 'react';
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
import InfoRow from './Sub/InfoRow';
import SessionDebugger from './Sub/SessionDebugger';
import PerformanceMonitor from './Sub/PerformanceMonitor';
import ErrorLogger from './Sub/ErrorLogger';
import DebugPanel from './Sub/DebugPanel';
import {
	generateClassNames,
	generateInlineStyles,
} from './Sub/adminUtils';

export interface AdminProps extends AdminConfiguration {
	children?: React.ReactNode;
}

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

	// ARIA attributes for accessibility
	const ariaProps: React.AriaAttributes &
		React.HTMLAttributes<HTMLElement> = {
		'role': 'region',
		'aria-label': title || kind.replace(/-/g, ' '),
		'aria-labelledby':
			showHeader && title ? `${kind}-header` : undefined,
		'aria-live':
			kind === 'error-logger' ? 'polite' : undefined,
		'aria-modal': kind === 'debug-panel' ? true : undefined,
		'tabIndex': 0, // Make region focusable
	};

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
				return (
					<SessionDebugger
						data={data as SessionDebuggerData}
						fields={fields}
					/>
				);
			case 'performance-monitor':
				return (
					<PerformanceMonitor
						data={data as PerformanceData}
						fields={fields}
					/>
				);
			case 'error-logger':
				return (
					<ErrorLogger data={data as ErrorLoggerData} />
				);
			case 'debug-panel':
				return <DebugPanel data={data as DebugPanelData} />;
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
			{...ariaProps}
			{...restProps}
		>
			{showHeader && title && (
				<div
					className={styles.panelHeaderTitle}
					id={`${kind}-header`}
				>
					{title}
					{closable && onClose && (
						<button
							onClick={onClose}
							className={styles.closeButton}
							aria-label='Close admin panel'
							aria-controls={kind + '-header'}
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
