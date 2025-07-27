/**
 * Generates class names for map components based on theme, variant, and user overrides.
 * @param baseClass The base class name for the component.
 * @param options Options for theme, variant, and user overrides.
 * @returns A string of class names.
 */
import styles from '../Map.module.scss';

/**
 * Returns class names for the map container based on config, theme, and user overrides.
 * Supports responsive, dark mode, and accessibility classes via CSS variables and data attributes.
 * @param finalConfig Map configuration object (kind, variant, size, interactive, theme, etc.)
 * @param className Additional class names.
 * @param theme Optional theme string or object.
 * @param overrides Optional user class overrides.
 * @returns Combined className string for the map container.
 */
export function getMapClassNames(
	finalConfig: {
		kind?: string;
		variant?: string;
		size?: string;
		interactive?: boolean;
		theme?: string | object;
		[key: string]: any;
	},
	className: string = '',
	theme?: string | object,
	overrides?: Record<string, string>
): string {
	const themeClass =
		typeof theme === 'string' ?
			styles[`map--theme-${theme}`]
		:	'';
	const darkModeClass =
		finalConfig.theme === 'dark' ? styles['map--dark'] : '';
	const responsiveClass = styles['map--responsive'];
	const accessibilityClass =
		finalConfig.accessible ? styles['map--accessible'] : '';
	const overrideClasses =
		overrides ? Object.values(overrides).join(' ') : '';
	return [
		styles.map,
		styles[`map--${finalConfig.kind}`],
		styles[`map--${finalConfig.variant}`],
		styles[`map--${finalConfig.size}`],
		finalConfig.interactive && styles['map--interactive'],
		themeClass,
		darkModeClass,
		responsiveClass,
		accessibilityClass,
		overrideClasses,
		className,
	]
		.filter(Boolean)
		.join(' ');
}
