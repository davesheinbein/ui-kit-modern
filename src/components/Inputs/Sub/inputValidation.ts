import { InputProps } from '../Input';

export function validateInput(
	value: string,
	{
		required,
		minLength,
		maxLength,
		pattern,
		customValidation,
	}: Partial<InputProps>
) {
	if (required && !value) return 'This field is required.';
	if (minLength && value.length < minLength)
		return `Minimum length is ${minLength}.`;
	if (maxLength && value.length > maxLength)
		return `Maximum length is ${maxLength}.`;
	if (pattern && !new RegExp(pattern).test(value))
		return 'Invalid format.';
	if (customValidation) return customValidation(value);
	return undefined;
}
