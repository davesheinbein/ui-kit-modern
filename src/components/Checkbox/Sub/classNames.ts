import styles from '../checkbox.module.scss';

export function getContainerClasses(
	config: any,
	effectiveSize: string,
	effectiveVariant: string,
	animated: boolean,
	className: string,
	disabled: boolean,
	fullWidth: boolean
) {
	return [
		styles.Checkbox,
		styles[config.className],
		styles[`size-${effectiveSize}`],
		effectiveVariant !== 'default' ?
			styles[`variant-${effectiveVariant}`]
		:	'',
		animated || config.behavior.animated ?
			styles.animated
		:	'',
		config.styling.rounded ? styles.rounded : '',
		config.styling.shadow ? styles.shadow : '',
		config.styling.bordered ? styles.bordered : '',
		disabled ? styles.disabled : '',
		fullWidth ? styles.fullWidth : '',
		className,
	]
		.filter(Boolean)
		.join(' ');
}

export function getInputClasses() {
	return [styles.checkboxInput].filter(Boolean).join(' ');
}
