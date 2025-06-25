/**
 * Grid Configuration System
 *
 * Defines all grid types, configurations, and presets for the DRY Grid system.
 * Similar to ButtonConfigurations but for grid components.
 */

// Basic grid types
export type GridVariant = 'grid' | 'pregame' | 'solved';

// Extended grid kinds for specific game modes and states
export type ExtendedGridKind =
	| 'grid'
	| 'pregame'
	| 'solved';

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
	grid: {
		variant: 'grid',
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

	pregame: {
		variant: 'pregame',
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
		className: 'pregame',
		cellClassName: 'pregame-cell',
		overlayComponents: ['lockout-overlay'],
	},

	solved: {
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
		className: 'solved',
	},
};

// Remove all legacy/unused kind arrays and presets
// If any grouping is needed, only include the new valid kinds:
export const GRID_KIND_GROUPS = {
	MAIN: ['grid', 'pregame', 'solved'] as ExtendedGridKind[],
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
