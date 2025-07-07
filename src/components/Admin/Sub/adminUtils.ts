import styles from '../admin.module.scss';
import type {
	AdminKind,
	AdminPosition,
	AdminTheme,
	AdminSize,
	AdminOpacity,
} from '../configurations';
import * as React from 'react';

export const generateClassNames = (
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
	if (theme === 'light') classes.push(styles.lightTheme);
	if (theme === 'dark') classes.push(styles.darkTheme);
	if (size === 'compact') classes.push(styles.compact);
	if (size === 'expanded') classes.push(styles.expanded);
	if (opacity === 'translucent')
		classes.push(styles.translucent);
	if (opacity === 'opaque') classes.push(styles.opaque);
	if (kind === 'session-debugger')
		classes.push(styles.sessionDebugger);
	if (kind === 'performance-monitor')
		classes.push(styles.performanceMonitor);
	if (kind === 'error-logger')
		classes.push(styles.errorLogger);
	if (kind === 'debug-panel')
		classes.push(styles.debugPanel);
	if (className) classes.push(className);
	return classes.filter(Boolean).join(' ');
};

export const generateInlineStyles = (
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
