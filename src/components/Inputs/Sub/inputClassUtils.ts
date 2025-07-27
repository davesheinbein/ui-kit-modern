import { InputProps } from '../Input';
import styles from '../Input.module.scss';

export function getInputClassNames({
	size = 'medium',
	state = 'default',
	style: inputStyle = 'outlined',
	inputClassName = '',
	className = '',
}: Partial<InputProps>) {
	return [
		styles.input,
		styles[
			`input${inputStyle.charAt(0).toUpperCase() + inputStyle.slice(1)}`
		],
		styles[
			`input${size.charAt(0).toUpperCase() + size.slice(1)}`
		],
		styles[
			`input${state.charAt(0).toUpperCase() + state.slice(1)}`
		],
		inputClassName,
		className,
	]
		.filter(Boolean)
		.join(' ');
}

export function getContainerClassNames({
	containerClassName = '',
	disabled = false,
}: Partial<InputProps>) {
	return [
		styles.inputContainer,
		disabled && styles.inputDisabled,
		containerClassName,
	]
		.filter(Boolean)
		.join(' ');
}
