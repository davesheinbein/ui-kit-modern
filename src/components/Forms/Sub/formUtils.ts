// Utility for handling value changes and merging values
export function updateFormValue(
	values: Record<string, any>,
	name: string,
	value: any
): Record<string, any> {
	return { ...values, [name]: value };
}
