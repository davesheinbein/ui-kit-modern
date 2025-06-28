/**
 * ChartConfigurations.ts - DRY Chart Configuration System
 */

import { ReactNode } from 'react';
import type { CardProps } from '../Card/Card';

export type ChartKind =
	// Legends
	| 'chart-legend'
	| 'legend-horizontal'
	| 'legend-vertical'
	| 'legend-grid'
	| 'legend-minimal'

	// Tooltips
	| 'chart-tooltip'
	| 'tooltip-simple'
	| 'tooltip-detailed'
	| 'tooltip-custom'

	// Filter Controls
	| 'chart-filter-controls'
	| 'filter-checkboxes'
	| 'filter-buttons'
	| 'filter-dropdown'
	| 'filter-multi-select'

	// Chart Controls
	| 'chart-controls'
	| 'zoom-controls'
	| 'time-range-selector'
	| 'data-series-toggle';

export type ChartVariant =
	| 'default'
	| 'minimal'
	| 'modern'
	| 'compact'
	| 'glass'
	| 'game-style';

export type ChartPosition =
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'overlay'
	| 'floating';

export type ChartType =
	| 'kpi'
	| 'scorecard'
	| 'progress'
	| 'gauge';

export type ChartDataSeries = {
	id: string;
	label: string;
	color: string;
	visible: boolean;
	data?: any[];
	icon?: ReactNode;
};

export interface ChartConfiguration {
	kind: ChartKind;
	variant?: ChartVariant;
	position?: ChartPosition;

	// Data
	dataSeries?: ChartDataSeries[];

	// Dashboard widget chart type (bar, pie, donut, KPI, etc.)
	/**
	 * The type of chart visualization to render for dashboard widgets.
	 * Supported: 'kpi', 'scorecard', 'progress', 'gauge'.
	 * This is distinct from advanced data visualizations (see Graph).
	 */
	chartType?: ChartType;

	// Legend specific
	showIcons?: boolean;
	showValues?: boolean;
	interactive?: boolean;
	orientation?: 'horizontal' | 'vertical';

	// Tooltip specific
	followCursor?: boolean;
	showArrow?: boolean;
	multiValue?: boolean;

	// Filter specific
	allowMultiSelect?: boolean;
	showSelectAll?: boolean;
	searchable?: boolean;

	// Styling
	spacing?: 'tight' | 'normal' | 'loose';
	size?: 'small' | 'medium' | 'large';

	// Callbacks
	onSeriesToggle?: (
		seriesId: string,
		visible: boolean
	) => void;
	onFilterChange?: (filters: string[]) => void;
	onTooltipShow?: (data: any) => void;
	onTooltipHide?: () => void;
}

/**
 * Chart is intended for dashboard widgets, metrics, and business analytics (bar, pie, donut, KPI, etc.)
 * with built-in legends, filters, and tooltips. Use the chartType property to specify the visualization.
 * For advanced data visualizations (relationships, time series, scatter, radar, network, etc.), use Graph.
 */

export const CHART_CONFIGURATIONS: Record<
	ChartKind,
	ChartConfiguration
> = {
	// Legends
	'chart-legend': {
		kind: 'chart-legend',
		variant: 'default',
		position: 'bottom',
		orientation: 'horizontal',
		showIcons: true,
		showValues: false,
		interactive: true,
		spacing: 'normal',
		size: 'medium',
	},

	'legend-horizontal': {
		kind: 'legend-horizontal',
		variant: 'default',
		position: 'bottom',
		orientation: 'horizontal',
		showIcons: true,
		showValues: false,
		interactive: true,
		spacing: 'normal',
	},

	'legend-vertical': {
		kind: 'legend-vertical',
		variant: 'default',
		position: 'right',
		orientation: 'vertical',
		showIcons: true,
		showValues: true,
		interactive: true,
		spacing: 'normal',
	},

	'legend-grid': {
		kind: 'legend-grid',
		variant: 'modern',
		position: 'bottom',
		orientation: 'horizontal',
		showIcons: true,
		showValues: true,
		interactive: true,
		spacing: 'loose',
	},

	'legend-minimal': {
		kind: 'legend-minimal',
		variant: 'minimal',
		position: 'bottom',
		orientation: 'horizontal',
		showIcons: false,
		showValues: false,
		interactive: true,
		spacing: 'tight',
		size: 'small',
	},

	// Tooltips
	'chart-tooltip': {
		kind: 'chart-tooltip',
		variant: 'default',
		position: 'floating',
		followCursor: true,
		showArrow: true,
		multiValue: false,
	},

	'tooltip-simple': {
		kind: 'tooltip-simple',
		variant: 'minimal',
		position: 'floating',
		followCursor: true,
		showArrow: false,
		multiValue: false,
	},

	'tooltip-detailed': {
		kind: 'tooltip-detailed',
		variant: 'modern',
		position: 'floating',
		followCursor: false,
		showArrow: true,
		multiValue: true,
	},

	'tooltip-custom': {
		kind: 'tooltip-custom',
		variant: 'glass',
		position: 'floating',
		followCursor: true,
		showArrow: true,
		multiValue: true,
	},

	// Filter Controls
	'chart-filter-controls': {
		kind: 'chart-filter-controls',
		variant: 'default',
		position: 'top',
		allowMultiSelect: true,
		showSelectAll: true,
		searchable: false,
		spacing: 'normal',
	},

	'filter-checkboxes': {
		kind: 'filter-checkboxes',
		variant: 'default',
		position: 'top',
		allowMultiSelect: true,
		showSelectAll: true,
		searchable: false,
		orientation: 'vertical',
	},

	'filter-buttons': {
		kind: 'filter-buttons',
		variant: 'modern',
		position: 'top',
		allowMultiSelect: true,
		showSelectAll: false,
		searchable: false,
		orientation: 'horizontal',
		spacing: 'tight',
	},

	'filter-dropdown': {
		kind: 'filter-dropdown',
		variant: 'default',
		position: 'top',
		allowMultiSelect: false,
		showSelectAll: false,
		searchable: true,
	},

	'filter-multi-select': {
		kind: 'filter-multi-select',
		variant: 'modern',
		position: 'top',
		allowMultiSelect: true,
		showSelectAll: true,
		searchable: true,
	},

	// Chart Controls
	'chart-controls': {
		kind: 'chart-controls',
		variant: 'default',
		position: 'top',
		spacing: 'normal',
		size: 'medium',
	},

	'zoom-controls': {
		kind: 'zoom-controls',
		variant: 'compact',
		position: 'overlay',
		spacing: 'tight',
		size: 'small',
	},

	'time-range-selector': {
		kind: 'time-range-selector',
		variant: 'modern',
		position: 'top',
		spacing: 'normal',
		size: 'medium',
	},

	'data-series-toggle': {
		kind: 'data-series-toggle',
		variant: 'default',
		position: 'top',
		allowMultiSelect: true,
		showSelectAll: true,
		orientation: 'horizontal',
		spacing: 'normal',
	},
};

export const getChartConfig = (
	kind: ChartKind
): ChartConfiguration => {
	return (
		CHART_CONFIGURATIONS[kind] ||
		CHART_CONFIGURATIONS['chart-legend']
	);
};

// ChartProps: All CardProps, plus chart-specific fields, omitting Card's variant/size to avoid conflicts
export interface ChartProps
	extends Omit<
		CardProps,
		'variant' | 'size' | 'padding' | 'kind'
	> {
	// CardProps (except variant/size/padding/kind) are available
	// Chart-specific props:
	chartKind?: ChartKind;
	chartVariant?: ChartVariant; // for chart-specific visual style, not Card's variant
	chartType?: ChartType;
	dataSeries?: ChartDataSeries[];
	showIcons?: boolean;
	showValues?: boolean;
	interactive?: boolean;
	orientation?: 'horizontal' | 'vertical';
	followCursor?: boolean;
	showArrow?: boolean;
	multiValue?: boolean;
	allowMultiSelect?: boolean;
	showSelectAll?: boolean;
	searchable?: boolean;
	spacing?: 'tight' | 'normal' | 'loose';
	onSeriesToggle?: (
		seriesId: string,
		visible: boolean
	) => void;
	onFilterChange?: (filters: string[]) => void;
	onTooltipShow?: (data: any) => void;
	onTooltipHide?: () => void;
	showLegend?: boolean;
	// For Card layout, use Card's 'variant', 'size', 'padding', 'kind' props directly
	[key: string]: any;
}
