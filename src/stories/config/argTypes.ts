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

export const gridArgTypes = {
	// Core Grid Props
	kind: {
		control: { type: 'select' as const },
		options: ['grid', 'pregame', 'solved'],
		description:
			'Grid variant that determines layout and behavior',
		table: {
			type: { summary: "'grid' | 'pregame' | 'solved'" },
			defaultValue: { summary: 'grid' },
		},
	},
	words: {
		control: { type: 'object' as const },
		description:
			'Array of words/items to display in grid cells',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	gridSize: {
		control: { type: 'object' as const },
		description: 'Grid dimensions (rows x cols)',
		table: {
			type: { summary: '{ rows: number; cols: number }' },
			defaultValue: { summary: '{ rows: 4, cols: 4 }' },
		},
	},

	// Interactive Props
	selected: {
		control: { type: 'object' as const },
		description: 'Array of currently selected words',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	locked: {
		control: { type: 'object' as const },
		description: 'Array of locked/disabled words',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	wildcards: {
		control: { type: 'object' as const },
		description:
			'Array of wildcard words with special styling',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	onSelect: {
		action: 'word-selected',
		description: 'Callback when a word is selected',
		table: {
			type: { summary: '(word: string) => void' },
		},
	},

	// State Props
	isLocked: {
		control: { type: 'boolean' as const },
		description:
			'Whether the entire grid is locked/disabled',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},
	preview: {
		control: { type: 'boolean' as const },
		description: 'Preview mode - disables interactions',
		table: {
			type: { summary: 'boolean' },
			defaultValue: { summary: 'false' },
		},
	},

	// VS Mode Props
	opponentSelected: {
		control: { type: 'object' as const },
		description:
			'Array of words selected by opponent (VS mode)',
		table: {
			type: { summary: 'string[]' },
			defaultValue: { summary: '[]' },
		},
	},
	playerId: {
		control: { type: 'text' as const },
		description: 'Current player ID for VS mode',
		table: {
			type: { summary: 'string' },
		},
	},
	opponentId: {
		control: { type: 'text' as const },
		description: 'Opponent player ID for VS mode',
		table: {
			type: { summary: 'string' },
		},
	},
	playerColor: {
		control: { type: 'color' as const },
		description: 'Color for current player selections',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '#2563eb' },
		},
	},
	opponentColor: {
		control: { type: 'color' as const },
		description: 'Color for opponent selections',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '#ef4444' },
		},
	},
	botDifficulty: {
		control: { type: 'select' as const },
		options: ['easy', 'medium', 'hard'],
		description: 'Bot difficulty level for VS bot mode',
		table: {
			type: { summary: 'string' },
		},
	},

	// Solved Mode Props
	solvedBy: {
		control: { type: 'object' as const },
		description: 'Record of which player solved each word',
		table: {
			type: { summary: 'Record<string, string[]>' },
			defaultValue: { summary: '{}' },
		},
	},
	pendingSolvedGroups: {
		control: { type: 'object' as const },
		description:
			'Array of solved groups to display (solved mode)',
		table: {
			type: {
				summary: '{ groupIdx: number; words: string[] }[]',
			},
			defaultValue: { summary: '[]' },
		},
	},
	activePuzzle: {
		control: { type: 'object' as const },
		description: 'Puzzle metadata including group labels',
		table: {
			type: { summary: '{ groupLabels?: string[] }' },
		},
	},
	categoryDirection: {
		control: { type: 'select' as const },
		options: ['row', 'column'],
		description: 'Direction to layout solved categories',
		table: {
			type: { summary: "'row' | 'column'" },
			defaultValue: { summary: 'column' },
		},
	},

	// Styling Props
	className: {
		control: { type: 'text' as const },
		description:
			'Additional CSS classes for grid container',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	cellClassName: {
		control: { type: 'text' as const },
		description: 'Additional CSS classes for grid cells',
		table: {
			type: { summary: 'string' },
			defaultValue: { summary: '' },
		},
	},
	style: {
		control: { type: 'object' as const },
		description: 'Inline styles for grid container',
		table: {
			type: { summary: 'React.CSSProperties' },
		},
	},
} as const;
