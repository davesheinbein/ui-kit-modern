/**
 * ChartFactory.ts - Ultra DRY Chart Factory
 */

import React from 'react';
import UnifiedChart, {
	UnifiedChartProps,
} from './UnifiedChart';
import { ChartKind } from './configurations';

export interface ChartFactoryConfig {
	kind: ChartKind;
	[key: string]: any;
}

export const ChartFactory = (
	config: ChartFactoryConfig | ChartKind
) => {
	const finalConfig =
		typeof config === 'string' ? { kind: config } : config;
	return (props: Partial<UnifiedChartProps> = {}) => {
		const mergedProps = { ...finalConfig, ...props };
		return React.createElement(UnifiedChart, mergedProps);
	};
};

export const CF = ChartFactory;

export const ChartPresets = {
	// Legends
	legend: ChartFactory('chart-legend'),
	legendHorizontal: ChartFactory('legend-horizontal'),
	legendVertical: ChartFactory('legend-vertical'),
	legendGrid: ChartFactory('legend-grid'),
	legendMinimal: ChartFactory('legend-minimal'),

	// Tooltips
	tooltip: ChartFactory('chart-tooltip'),
	tooltipSimple: ChartFactory('tooltip-simple'),
	tooltipDetailed: ChartFactory('tooltip-detailed'),
	tooltipCustom: ChartFactory('tooltip-custom'),

	// Filters
	filterControls: ChartFactory('chart-filter-controls'),
	filterCheckboxes: ChartFactory('filter-checkboxes'),
	filterButtons: ChartFactory('filter-buttons'),
	filterDropdown: ChartFactory('filter-dropdown'),
	filterMultiSelect: ChartFactory('filter-multi-select'),

	// Controls
	chartControls: ChartFactory('chart-controls'),
	zoomControls: ChartFactory('zoom-controls'),
	timeRangeSelector: ChartFactory('time-range-selector'),
	dataSeriesToggle: ChartFactory('data-series-toggle'),

	// Advanced Presets
	dashboardLegend: ChartFactory({
		kind: 'legend-grid',
		variant: 'modern',
		showIcons: true,
		showValues: true,
		interactive: true,
	}),

	gameStatsFilter: ChartFactory({
		kind: 'filter-buttons',
		variant: 'game-style',
		allowMultiSelect: true,
		spacing: 'tight',
	}),
};

export default ChartFactory;
