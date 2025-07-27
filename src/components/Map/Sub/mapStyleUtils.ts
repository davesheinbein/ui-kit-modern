/**
 * Generates style object for map components based on theme, variant, and user overrides.
 * @param baseStyle The base style object for the component.
 * @param options Options for theme, variant, and user overrides.
 * @returns A merged style object.
 */
export function getMapStyles(
	baseStyle: React.CSSProperties = {},
	options?: {
		theme?: string | object;
		variant?: string;
		userStyle?: React.CSSProperties;
		isDark?: boolean;
		isActive?: boolean;
		isDisabled?: boolean;
		[key: string]: any;
	}
): React.CSSProperties {
	let style: React.CSSProperties = { ...baseStyle };
	if (options?.theme && typeof options.theme === 'object') {
		style = { ...style, ...options.theme };
	}
	if (options?.variant) {
		(style as any)['--map-variant'] = options.variant;
	}
	if (options?.isDark) {
		(style as any)['--map-theme'] = 'dark';
	}
	if (options?.isActive) {
		(style as any)['--map-active'] = '1';
	}
	if (options?.isDisabled) {
		(style as any)['--map-disabled'] = '1';
	}
	if (options?.userStyle) {
		style = { ...style, ...options.userStyle };
	}
	return style;
}
/**
 * Returns style object for the map container based on config, theme, and user overrides.
 * @param finalConfig Map configuration object (aspectRatio, borderRadius, theme, etc.)
 * @param theme Optional theme string or object.
 * @param overrides Optional user style overrides.
 */
export function getMapContainerStyle(
	finalConfig: any,
	theme?: string | object,
	overrides?: React.CSSProperties
): React.CSSProperties {
	return {
		aspectRatio: finalConfig.aspectRatio,
		borderRadius: finalConfig.borderRadius,
		width: '100%',
		height: '100%',
		...(theme && typeof theme === 'object' ? theme : {}),
		...(overrides || {}),
	};
}
