// Common argument types for Storybook controls

export const commonArgTypes = {
	variant: {
		control: 'select',
		options: [
			'default',
			'primary',
			'secondary',
			'danger',
			'success',
			'warning',
		],
		description: 'Component variant/style',
	},
	size: {
		control: 'select',
		options: ['small', 'medium', 'large'],
		description: 'Component size',
	},
	disabled: {
		control: 'boolean',
		description: 'Disable the component',
	},
	loading: {
		control: 'boolean',
		description: 'Show loading state',
	},
	className: {
		control: 'text',
		description: 'Additional CSS classes',
	},
	children: {
		control: 'text',
		description: 'Content to display',
	},
};

export const buttonArgTypes = {
	...commonArgTypes,
	onClick: { action: 'clicked' },
	type: {
		control: 'select',
		options: ['button', 'submit', 'reset'],
		description: 'Button type',
	},
};

export const modalArgTypes = {
	open: {
		control: 'boolean',
		description: 'Whether the modal is open',
	},
	onClose: { action: 'closed' },
	title: {
		control: 'text',
		description: 'Modal title',
	},
	size: {
		control: 'select',
		options: ['small', 'medium', 'large', 'fullscreen'],
		description: 'Modal size',
	},
};

export const cardArgTypes = {
	...commonArgTypes,
	elevation: {
		control: 'select',
		options: ['none', 'low', 'medium', 'high'],
		description: 'Card elevation/shadow',
	},
	interactive: {
		control: 'boolean',
		description: 'Whether the card is interactive',
	},
};

export const chartArgTypes = {
	data: {
		control: 'object',
		description: 'Chart data array',
	},
	title: {
		control: 'text',
		description: 'Chart title',
	},
	colorScheme: {
		control: 'select',
		options: [
			'default',
			'primary',
			'secondary',
			'rainbow',
			'monochrome',
		],
		description: 'Color scheme',
	},
	height: {
		control: 'number',
		description: 'Chart height in pixels',
	},
	showLegend: {
		control: 'boolean',
		description: 'Show chart legend',
	},
	showGrid: {
		control: 'boolean',
		description: 'Show grid lines',
	},
};
