// Utility to normalize inputStyle to allowed values
export const allowedInputStyles = [
	'outlined',
	'filled',
	'plain',
] as const;
export type AllowedInputStyle =
	(typeof allowedInputStyles)[number];

export function getSafeInputStyle(
	inputStyle: any
): AllowedInputStyle {
	return allowedInputStyles.includes(inputStyle) ?
			inputStyle
		:	'outlined';
}
