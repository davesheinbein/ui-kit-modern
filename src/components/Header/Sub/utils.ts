import styles from '../Header.module.scss';

export function getHeaderClasses({
	layout,
	align,
	position,
	height,
	background,
	borderBottom,
	sticky,
	collapsed,
	collapsible,
	fullWidth,
	responsive,
	animated,
	hideOnMobile,
	hideOnTablet,
	hideOnDesktop,
	loading,
	error,
	colorScheme,
	theme,
	className,
}: any) {
	return [
		styles.header,
		styles[`layout-${layout}`],
		styles[`align-${align}`],
		styles[`position-${position}`],
		styles[`height-${height}`],
		styles[`background-${background}`],
		borderBottom && styles.borderBottom,
		sticky && styles.sticky,
		collapsed && styles.collapsed,
		collapsible && styles.collapsible,
		fullWidth && styles.fullWidth,
		responsive && styles.responsive,
		animated && styles.animated,
		hideOnMobile && styles.hideOnMobile,
		hideOnTablet && styles.hideOnTablet,
		hideOnDesktop && styles.hideOnDesktop,
		loading && styles.loading,
		error && styles.error,
		colorScheme && styles[`theme-${colorScheme}`],
		theme && styles[`variant-${theme}`],
		className,
	]
		.filter(Boolean)
		.join(' ');
}

export function getHeaderStyle({
	style,
	backgroundColor,
	borderColor,
	borderRadius,
	padding,
	maxWidth,
	animationDuration,
	animationEasing,
}: any) {
	return {
		...style,
		...(backgroundColor && { backgroundColor }),
		...(borderColor && { borderBottomColor: borderColor }),
		...(borderRadius && { borderRadius }),
		...(padding && { padding }),
		...(maxWidth && { maxWidth }),
		...(animationDuration && {
			transitionDuration: `${animationDuration}ms`,
		}),
		...(animationEasing && {
			transitionTimingFunction: animationEasing,
		}),
	};
}
