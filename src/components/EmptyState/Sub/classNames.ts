export function getEmptyStateClassNames({
	variant,
	size,
	centered,
	fullHeight,
	className = '',
}: {
	variant?: string;
	size?: string;
	centered?: boolean;
	fullHeight?: boolean;
	className?: string;
}) {
	const classes = [
		'empty_state',
		variant && `empty_state--${variant}`,
		size && `empty_state--${size}`,
		centered && 'empty_state--centered',
		fullHeight && 'empty_state--full',
		className,
	];
	return classes.filter(Boolean).join(' ');
}
