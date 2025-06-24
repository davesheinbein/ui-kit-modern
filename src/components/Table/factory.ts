/**
 * TableFactory.ts - Ultra DRY Table Factory
 *
 * Provides ultra-compact ways to create table components with minimal code.
 * Follows the same pattern as factory for consistency.
 */

import React from 'react';
import Table, { TableProps } from './Table';
import {
	TableKind,
	getTableConfig,
} from './configurations';

// ========================================
// Factory Table Factory
// ========================================

export interface TableFactoryConfig {
	kind: TableKind;
	[key: string]: any;
}

/**
 * Factory Table Factory - creates table components with minimal code
 */
export const TableFactory = (
	config: TableFactoryConfig | TableKind
) => {
	const finalConfig =
		typeof config === 'string' ? { kind: config } : config;

	return (props: Partial<TableProps> = {}) => {
		const mergedProps = { ...finalConfig, ...props };
		return React.createElement(Table, mergedProps);
	};
};

// ========================================
// Ultra-Short Alias (T)
// ========================================

/**
 * Ultra-short alias for TableFactory
 * Usage: T('data-table')({ columns: [...], data: [...] })
 */
export const T = TableFactory;

// ========================================
// Pre-configured Table Presets
// ========================================

export const TablePresets = {
	// Basic Tables
	dataTable: TableFactory('data-table'),
	simpleTable: TableFactory('simple-table'),
	sortableTable: TableFactory('sortable-table'),
	filterableTable: TableFactory('filterable-table'),

	// Advanced Tables
	dataGrid: TableFactory('data-grid'),
	editableGrid: TableFactory('editable-grid'),
	selectableGrid: TableFactory('selectable-grid'),
	expandableGrid: TableFactory('expandable-grid'),

	// Loading States
	skeletonTable: TableFactory('skeleton-table'),
	loadingTable: TableFactory('loading-table'),

	// Specialized Tables
	pricingTable: TableFactory('pricing-table'),
	comparisonTable: TableFactory('comparison-table'),
	statsTable: TableFactory('stats-table'),
	leaderboardTable: TableFactory('leaderboard-table'),

	// Advanced Presets
	dashboardGrid: TableFactory({
		kind: 'data-grid',
		variant: 'modern',
		sortable: true,
		filterable: true,
		searchable: true,
		pagination: true,
		stickyHeader: true,
	}),

	adminTable: TableFactory({
		kind: 'data-grid',
		variant: 'bordered',
		sortable: true,
		filterable: true,
		selectable: true,
		selectionMode: 'multiple',
		editable: true,
		pagination: true,
	}),

	reportTable: TableFactory({
		kind: 'stats-table',
		variant: 'striped',
		sortable: true,
		filterable: true,
		searchable: true,
		zebraStripes: true,
		stickyHeader: true,
	}),

	quickList: TableFactory({
		kind: 'simple-table',
		variant: 'minimal',
		hoverEffects: true,
		clickableRows: true,
	}),

	gameLeaderboard: TableFactory({
		kind: 'leaderboard-table',
		variant: 'modern',
		sortable: true,
		searchable: true,
		pagination: {
			page: 1,
			pageSize: 10,
			total: 0,
			showSizeSelector: true,
			pageSizeOptions: [10, 25, 50, 100],
		},
	}),
};

export default TableFactory;
