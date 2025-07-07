export function formatMetricValue(
	value: number,
	format?: string
) {
	switch (format) {
		case 'currency':
			return `$${value.toLocaleString()}`;
		case 'percentage':
			return `${value}%`;
		case 'duration':
			return `${value} ms`;
		default:
			return new Intl.NumberFormat().format(value);
	}
}
