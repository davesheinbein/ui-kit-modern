import React, { useState, useMemo } from 'react';
import { Table } from '../../components/Table';
import { Filters } from '../../components/Filters';
import { Searchbar } from '../../components/Searchbars';
import {
	sampleTableColumns,
	sampleTableData,
	leaderboardTableColumns,
	leaderboardTableData,
	mockFriends,
} from '../mocks';
import { commonDecorators } from '../config/decorators';
import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../../components/Wrappers';
import type {
	TableProps,
	TableColumn,
} from '../../components/Table';

const pricingColumns: TableColumn[] = [
	{ key: 'feature', label: 'Feature' },
	{ key: 'basic', label: 'Basic', align: 'center' },
	{ key: 'pro', label: 'Pro', align: 'center' },
	{
		key: 'enterprise',
		label: 'Enterprise',
		align: 'center',
	},
];

const pricingData = [
	{
		id: 1,
		feature: 'Daily Puzzles',
		basic: '✓',
		pro: '✓',
		enterprise: '✓',
	},
	{
		id: 2,
		feature: 'Custom Themes',
		basic: '✗',
		pro: '✓',
		enterprise: '✓',
	},
	{
		id: 3,
		feature: 'Multiplayer',
		basic: '✗',
		pro: '✓',
		enterprise: '✓',
	},
	{
		id: 4,
		feature: 'Analytics',
		basic: '✗',
		pro: '✗',
		enterprise: '✓',
	},
	{
		id: 5,
		feature: 'API Access',
		basic: '✗',
		pro: '✗',
		enterprise: '✓',
	},
];

// leaderboardTableColumns from mocks may have align: string, but TableColumn expects 'center' | 'left' | 'right' | undefined
// Patch the columns to cast align as the correct type
const fixedLeaderboardTableColumns: TableColumn[] =
	leaderboardTableColumns.map((col) =>
		(
			col.align &&
			(col.align === 'center' ||
				col.align === 'left' ||
				col.align === 'right')
		) ?
			{
				...col,
				align: col.align as 'center' | 'left' | 'right',
			}
		:	{ ...col, align: undefined }
	);

const meta: Meta<typeof Table> = {
	title: 'Tables/Table',
	component: Table,
	decorators: commonDecorators,
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'data-table',
				'leaderboard-table',
				'pricing-table',
			],
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'striped',
				'bordered',
				'compact',
				'spacious',
				'modern',
				'glass',
			],
		},
		layout: {
			control: 'select',
			options: ['auto', 'fixed', 'responsive'],
		},
		sortable: { control: 'boolean' },
		filterable: { control: 'boolean' },
		selectable: { control: 'boolean' },
		editable: { control: 'boolean' },
		showColumnFilter: { control: 'boolean' },
	},
};
export default meta;
type Story = StoryObj<typeof Table>;

// DRY Template
const Template = (args: TableProps) => <Table {...args} />;

// Consolidated Variants Story
export const Variants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 32,
			}}
		>
			<div>
				<h4>Default</h4>
				<Table
					kind='data-table'
					columns={sampleTableColumns}
					data={sampleTableData}
					variant='default'
					layout='auto'
				/>
			</div>
			<div>
				<h4>Sortable</h4>
				<Table
					kind='data-table'
					columns={sampleTableColumns}
					data={sampleTableData}
					variant='default'
					layout='auto'
					sortable
				/>
			</div>
			<div>
				<h4>Filterable</h4>
				<Table
					kind='data-table'
					columns={sampleTableColumns}
					data={sampleTableData}
					variant='default'
					layout='auto'
					filterable
					showColumnFilter
				/>
			</div>
			<div>
				<h4>Striped</h4>
				<Table
					kind='data-table'
					columns={sampleTableColumns}
					data={sampleTableData}
					variant='striped'
					layout='auto'
				/>
			</div>
			<div>
				<h4>Bordered</h4>
				<Table
					kind='data-table'
					columns={sampleTableColumns}
					data={sampleTableData}
					variant='bordered'
					layout='auto'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Common table variants (default, sortable, filterable, striped, bordered) shown together for comparison.',
			},
		},
	},
};

// Playground (interactive)
export const Playground: Story = {
	render: Template,
	args: {
		kind: 'data-table',
		columns: sampleTableColumns,
		data: sampleTableData,
		variant: 'default',
		layout: 'auto',
		sortable: false,
		filterable: false,
		selectable: false,
		editable: false,
		showColumnFilter: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Fully interactive table. Use controls to change props.',
			},
		},
	},
};

// Special Tables
export const LeaderboardTable: Story = {
	render: () => (
		<Table
			kind='leaderboard-table'
			columns={fixedLeaderboardTableColumns}
			data={leaderboardTableData}
			variant='modern'
			layout='auto'
			sortable
			showColumnFilter
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Leaderboard table with ranking, player, and win rate.',
			},
		},
	},
};

export const PricingTable: Story = {
	render: () => (
		<Table
			kind='pricing-table'
			columns={pricingColumns}
			data={pricingData}
			variant='glass'
			layout='auto'
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Pricing comparison table for product tiers.',
			},
		},
	},
};

// ========================================
// Interactive Stories
// ========================================

export const WithInteractions: Story = {
	args: {
		kind: 'data-grid',
		columns: sampleTableColumns,
		data: sampleTableData,
		variant: 'modern',
		sortable: true,
		filterable: true,
		searchable: true,
		selectable: true,
		selectionMode: 'multiple',
		editable: true,
		clickableRows: true,
		hoverEffects: true,
		onRowClick: (row, index) => {
			console.log('Row clicked:', row, index);
		},
		onSort: (sorting) => {
			console.log('Sort changed:', sorting);
		},
		onSelect: (selectedRows) => {
			console.log('Selection changed:', selectedRows);
		},
		onCellEdit: (rowId, column, value) => {
			console.log('Cell edited:', rowId, column, value);
		},
	},
};

export const ResponsiveTable: Story = {
	args: {
		kind: 'data-table',
		columns: sampleTableColumns,
		data: sampleTableData,
		layout: 'responsive',
		variant: 'modern',
		sortable: true,
		searchable: true,
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile1',
		},
	},
};

const filterConfig = [
	{
		key: 'status',
		label: 'Status',
		options: [
			{ label: 'Active', value: 'active' },
			{ label: 'Inactive', value: 'inactive' },
			{ label: 'Pending', value: 'pending' },
		],
		mode: 'single' as const,
		placeholder: 'Filter by status',
	},
];

export const FilterAndSearch = () => {
	// Example columns for the table
	const columns = [
		{ key: 'name', label: 'Name', filterable: true },
		{ key: 'status', label: 'Status', filterable: true },
		{ key: 'lastSeen', label: 'Last Seen' },
	];

	const [search, setSearch] = React.useState('');
	const [filters, setFilters] = React.useState({
		status: '',
	});

	// Dynamically get unique status options from the data
	const statusOptions = React.useMemo(() => {
		const all = mockFriends.map((row) => row.status);
		return Array.from(new Set(all));
	}, []);

	// Filter and search logic
	const filteredData = React.useMemo(() => {
		let data = mockFriends;
		if (filters.status) {
			data = data.filter(
				(row) => row.status === filters.status
			);
		}
		if (search) {
			const s = search.toLowerCase();
			data = data.filter(
				(row) =>
					row.name.toLowerCase().includes(s) ||
					row.status.toLowerCase().includes(s) ||
					(row.lastSeen &&
						row.lastSeen.toLowerCase().includes(s))
			);
		}
		return data;
	}, [search, filters]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
			}}
		>
			<div
				style={{
					display: 'flex',
					gap: 16,
					alignItems: 'center',
				}}
			>
				<Searchbar
					value={search}
					onChange={(value) => setSearch(value)}
					placeholder='Search friends...'
					debounce={200}
					clearable
					style={{ minWidth: 240 }}
				/>
				{/* Dynamic status filter */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
					}}
				>
					<label>Status</label>
					<select
						value={filters.status}
						onChange={(e) =>
							setFilters({
								...filters,
								status: e.target.value,
							})
						}
					>
						<option value=''>All statuses</option>
						{statusOptions.map((opt) => (
							<option key={opt} value={opt as string}>
								{opt.charAt(0).toUpperCase() + opt.slice(1)}
							</option>
						))}
					</select>
				</div>
			</div>
			<div style={{ minWidth: 400 }}>
				<Table
					kind='filterable-table'
					columns={columns}
					data={filteredData}
					filterable
					searchable
					variant='modern'
					layout='auto'
					showColumnFilter
				/>
			</div>
		</div>
	);
};

// Example usage in a story
export const FilteredTable: Story = {
	render: () => {
		const [filters, setFilters] = useState<
			Record<string, string | string[]>
		>({ status: 'active' });
		const [search, setSearch] = useState('');
		const filteredData = useMemo(() => {
			return mockFriends.filter((row) => {
				const statusMatch =
					!filters.status || row.status === filters.status;
				const searchMatch =
					!search ||
					row.name
						.toLowerCase()
						.includes(search.toLowerCase()) ||
					row.status
						.toLowerCase()
						.includes(search.toLowerCase());
				return statusMatch && searchMatch;
			});
		}, [filters, search]);
		return (
			<div style={{ maxWidth: 600 }}>
				<Filters
					filters={filterConfig}
					value={filters}
					onChange={(value) => setFilters(value)}
				/>
				<Searchbar
					value={search}
					onChange={setSearch}
					placeholder='Search by name or status'
					clearable
				/>
				<Table
					kind='filterable-table'
					columns={[
						{
							key: 'name',
							label: 'Name',
							filterable: true,
						},
						{
							key: 'status',
							label: 'Status',
							filterable: true,
						},
						{ key: 'lastSeen', label: 'Last Seen' },
					]}
					data={filteredData}
					filterable
					searchable
					zebraStripes
					variant='default'
					showColumnFilter
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Table with integrated Filter and Searchbar. Filter by status and search by any field.',
			},
		},
	},
};
