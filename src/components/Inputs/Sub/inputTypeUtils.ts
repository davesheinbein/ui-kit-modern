// Utility for type-specific input props and classes
import styles from '../input.module.scss';

export function getTypeSpecificProps(
	kind: string,
	min?: number,
	max?: number
) {
	const typeSpecificProps: Record<string, any> = {};
	let kindClass = '';

	if (kind === 'email') {
		typeSpecificProps.inputMode = 'email';
		typeSpecificProps.pattern = '[^@\s]+@[^@\s]+\.[^@\s]+';
		kindClass = styles['input--email'];
	} else if (kind === 'password') {
		typeSpecificProps.inputMode = 'text';
		kindClass = styles['input--password'];
	} else if (kind === 'number') {
		typeSpecificProps.inputMode = 'decimal';
		typeSpecificProps.type = 'number';
		if (typeof min !== 'undefined')
			typeSpecificProps.min = min;
		if (typeof max !== 'undefined')
			typeSpecificProps.max = max;
		kindClass = styles['input--number'];
	} else if (kind === 'search') {
		typeSpecificProps.inputMode = 'search';
		kindClass = styles['input--search'];
	} else {
		typeSpecificProps.inputMode = 'text';
		kindClass = styles['input--text'];
	}

	return { typeSpecificProps, kindClass };
}
