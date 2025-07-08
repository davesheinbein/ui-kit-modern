import type { ButtonProps } from '../Button';
import type { ButtonConfiguration } from '../configurations';

export function getAriaLabel({
	label,
	config,
	displayText,
}: {
	label?: string;
	config: ButtonConfiguration;
	displayText: React.ReactNode;
}): string {
	return (
		label ||
		config.ariaLabel ||
		(typeof displayText === 'string' ? displayText : (
			'Button'
		))
	);
}

export function combineClassNames(
	...classes: (string | false | undefined)[]
): string {
	return classes.filter(Boolean).join(' ');
}
