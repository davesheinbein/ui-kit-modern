/**
 * Grid Configuration System
 *
 * Defines all grid types, configurations, and presets for the DRY Grid system.
 * Similar to ButtonConfigurations but for grid components.
 */

// Basic grid types
export type GridVariant =
	| 'basic'
	| 'game'
	| 'preview'
	| 'locked'
	| 'solved'
	| 'custom';

// Extended grid kinds for specific game modes and states
export type ExtendedGridKind =
	| 'basic'
	| 'game'
	| 'preview'
	| 'locked'
	| 'vs-grid'
	| 'pregame-lockout'
	| 'solved-groups'
	| 'word-grid'
	| 'custom';

// Grid layout configuration
export interface GridLayout {
	rows: number;
	cols: number;
	gap?: number;
	maxWidth?: number;
	minHeight?: number;
}

// Grid styling configuration
export interface GridStyling {
	background?: string;
	borderRadius?: number;
	boxShadow?: string;
	padding?: number;
}

// Grid behavior configuration
export interface GridBehavior {
	interactive?: boolean;
	preview?: boolean;
	locked?: boolean;
	multiSelect?: boolean;
	vsMode?: boolean;
}

// Main grid configuration interface
export interface GridConfiguration {
	variant: GridVariant;
	layout: GridLayout;
	styling: GridStyling;
	behavior: GridBehavior;
	className?: string;
	cellClassName?: string;
	overlayComponents?: string[];
	[key: string]: any;
}

// Grid configurations for each kind
export const GRID_CONFIGURATIONS: Record<
	ExtendedGridKind,
	GridConfiguration
> = {
	'basic': {
		variant: 'basic',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: true,
			preview: false,
			locked: false,
			multiSelect: true,
			vsMode: false,
		},
	},

	'game': {
		variant: 'game',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: true,
			preview: false,
			locked: false,
			multiSelect: true,
			vsMode: false,
		},
		className: 'game-grid',
	},

	'preview': {
		variant: 'preview',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: false,
			preview: true,
			locked: false,
			multiSelect: false,
			vsMode: false,
		},
		className: 'preview-grid',
	},

	'locked': {
		variant: 'locked',
		layout: {
			rows: 4,
			cols: 4,
			gap: 8,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#f8fafc',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: false,
			preview: false,
			locked: true,
			multiSelect: false,
			vsMode: false,
		},
		className: 'locked-grid',
		cellClassName: 'locked-cell',
	},

	'vs-grid': {
		variant: 'game',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: true,
			preview: false,
			locked: false,
			multiSelect: true,
			vsMode: true,
		},
		className: 'vs-grid',
		overlayComponents: ['opponent-overlay', 'solved-badge'],
	},

	'pregame-lockout': {
		variant: 'locked',
		layout: {
			rows: 4,
			cols: 4,
			gap: 8,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#f8fafc',
			borderRadius: 12,
			boxShadow: '0 2px 8px 0 #e2e8f040',
			padding: 8,
		},
		behavior: {
			interactive: false,
			preview: true,
			locked: true,
			multiSelect: false,
			vsMode: false,
		},
		className: 'pregame-lockout',
		cellClassName: 'pregame-cell-lockout',
		overlayComponents: ['lockout-overlay'],
	},

	'solved-groups': {
		variant: 'solved',
		layout: {
			rows: 1,
			cols: 1,
			gap: 18,
			maxWidth: 600,
		},
		styling: {
			background: 'transparent',
			borderRadius: 0,
			padding: 0,
		},
		behavior: {
			interactive: false,
			preview: false,
			locked: false,
			multiSelect: false,
			vsMode: false,
		},
		className: 'solved-groups-display',
	},

	'word-grid': {
		variant: 'game',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
			maxWidth: 480,
			minHeight: 320,
		},
		styling: {
			background: '#fff',
			borderRadius: 16,
			boxShadow: '0 2px 16px 0 #e3eaff33',
			padding: 12,
		},
		behavior: {
			interactive: true,
			preview: false,
			locked: false,
			multiSelect: true,
			vsMode: false,
		},
		className: 'word-grid',
	},

	'custom': {
		variant: 'custom',
		layout: {
			rows: 4,
			cols: 4,
			gap: 12,
		},
		styling: {},
		behavior: {
			interactive: true,
		},
		className: 'custom-grid',
	},
};

// Grid groups for easier categorization
export const GRID_GROUPS = {
	BASIC: [
		'basic',
		'game',
		'preview',
		'locked',
	] as ExtendedGridKind[],
	VS_MODE: ['vs-grid'] as ExtendedGridKind[],
	SPECIAL: [
		'pregame-lockout',
		'solved-groups',
		'word-grid',
	] as ExtendedGridKind[],
	CUSTOM: ['custom'] as ExtendedGridKind[],
};

// Grid presets for common configurations
export const GRID_PRESETS = {
	STANDARD_GAME: {
		kind: 'game' as ExtendedGridKind,
		layout: { rows: 4, cols: 4 },
		words: [],
		selected: [],
		locked: [],
	},
	VS_MATCH: {
		kind: 'vs-grid' as ExtendedGridKind,
		layout: { rows: 4, cols: 4 },
		words: [],
		selected: [],
		locked: [],
		opponentSelected: [],
		vsMode: true,
	},
	PREVIEW_GRID: {
		kind: 'preview' as ExtendedGridKind,
		layout: { rows: 4, cols: 4 },
		words: [],
		preview: true,
		interactive: false,
	},
	LOCKED_PREGAME: {
		kind: 'pregame-lockout' as ExtendedGridKind,
		layout: { rows: 4, cols: 4 },
		words: [],
		locked: true,
		interactive: false,
	},
};

// Helper function to create grid configuration
export const createGridConfig = (
	baseKind: ExtendedGridKind,
	overrides: Partial<GridConfiguration> = {}
): GridConfiguration => {
	const baseConfig = GRID_CONFIGURATIONS[baseKind];
	return {
		...baseConfig,
		...overrides,
		layout: { ...baseConfig.layout, ...overrides.layout },
		styling: {
			...baseConfig.styling,
			...overrides.styling,
		},
		behavior: {
			...baseConfig.behavior,
			...overrides.behavior,
		},
	};
};

// Grid validation helper
export const validateGrid = (
	config: GridConfiguration
): boolean => {
	return !!(
		config.variant &&
		config.layout &&
		config.layout.rows > 0 &&
		config.layout.cols > 0
	);
};
