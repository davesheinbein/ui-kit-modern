import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../../components/Wrappers';
import {
	Table,
	createTable,
	TablePresets,
} from '../../components/Table';

const meta: Meta<typeof Table> = {
	title: 'Tables/Table',
	component: Table,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'data-table',
				'simple-table',
				'sortable-table',
				'filterable-table',
				'data-grid',
				'editable-grid',
				'selectable-grid',
				'expandable-grid',
				'skeleton-table',
				'loading-table',
				'pricing-table',
				'comparison-table',
				'stats-table',
				'leaderboard-table',
			],
			description: 'Table component type',
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
			description: 'Table visual variant',
		},
		layout: {
			control: 'select',
			options: ['fixed', 'auto', 'responsive'],
			description: 'Table layout behavior',
		},
		columns: {
			control: 'object',
			description: 'Table columns configuration',
		},
		data: {
			control: 'object',
			description: 'Table data array',
		},
		sortable: {
			control: 'boolean',
			description: 'Enable column sorting',
		},
		filterable: {
			control: 'boolean',
			description: 'Enable data filtering',
		},
		selectable: {
			control: 'boolean',
			description: 'Enable row selection',
		},
		editable: {
			control: 'boolean',
			description: 'Enable inline editing',
		},
		expandable: {
			control: 'boolean',
			description: 'Enable row expansion',
		},
		pagination: {
			control: 'object',
			description: 'Pagination configuration object',
		},
		stickyHeader: {
			control: 'boolean',
			description: 'Sticky table header',
		},
		loading: {
			control: 'boolean',
			description: 'Loading state',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleColumns = [
	{ key: 'name', label: 'Name', sortable: true },
	{ key: 'email', label: 'Email', sortable: true },
	{ key: 'role', label: 'Role', sortable: true },
	{ key: 'status', label: 'Status', sortable: true },
	{
		key: 'lastLogin',
		label: 'Last Login',
		sortable: true,
		type: 'date' as const,
	},
];

const sampleData = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@example.com',
		role: 'Admin',
		status: 'Active',
		lastLogin: '2024-01-15',
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane@example.com',
		role: 'User',
		status: 'Active',
		lastLogin: '2024-01-14',
	},
	{
		id: 3,
		name: 'Bob Johnson',
		email: 'bob@example.com',
		role: 'Moderator',
		status: 'Inactive',
		lastLogin: '2024-01-10',
	},
	{
		id: 4,
		name: 'Alice Wilson',
		email: 'alice@example.com',
		role: 'User',
		status: 'Active',
		lastLogin: '2024-01-16',
	},
	{
		id: 5,
		name: 'Charlie Brown',
		email: 'charlie@example.com',
		role: 'User',
		status: 'Pending',
		lastLogin: '2024-01-12',
	},
];

const gameLeaderboardColumns = [
	{
		key: 'rank',
		label: '#',
		width: '60px',
		align: 'center' as const,
	},
	{ key: 'player', label: 'Player', sortable: true },
	{
		key: 'score',
		label: 'Score',
		sortable: true,
		type: 'number' as const,
		align: 'right' as const,
	},
	{
		key: 'games',
		label: 'Games',
		sortable: true,
		type: 'number' as const,
		align: 'center' as const,
	},
	{
		key: 'winRate',
		label: 'Win Rate',
		sortable: true,
		align: 'center' as const,
	},
];

const leaderboardData = [
	{
		id: 1,
		rank: 1,
		player: 'GridMaster',
		score: 15420,
		games: 87,
		winRate: '94.3%',
	},
	{
		id: 2,
		rank: 2,
		player: 'PuzzleKing',
		score: 14850,
		games: 92,
		winRate: '91.2%',
	},
	{
		id: 3,
		rank: 3,
		player: 'WordWizard',
		score: 14200,
		games: 78,
		winRate: '89.7%',
	},
	{
		id: 4,
		rank: 4,
		player: 'QuickSolver',
		score: 13980,
		games: 95,
		winRate: '87.4%',
	},
	{
		id: 5,
		rank: 5,
		player: 'BrainAce',
		score: 13750,
		games: 83,
		winRate: '86.1%',
	},
];

const pricingColumns = [
	{ key: 'feature', label: 'Feature' },
	{
		key: 'basic',
		label: 'Basic',
		align: 'center' as const,
	},
	{ key: 'pro', label: 'Pro', align: 'center' as const },
	{
		key: 'enterprise',
		label: 'Enterprise',
		align: 'center' as const,
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

// ========================================
// Basic Table Stories
// ========================================

export const Default: Story = {
	args: {
		kind: 'data-table',
		columns: sampleColumns,
		data: sampleData,
	},
};

export const DataTable: Story = {
	args: {
		kind: 'data-table',
		columns: sampleColumns,
		data: sampleData,
		variant: 'default',
		sortable: true,
		hoverEffects: true,
	},
};

export const SimpleTable: Story = {
	args: {
		kind: 'simple-table',
		columns: sampleColumns,
		data: sampleData,
		variant: 'minimal',
	},
};

export const SortableTable: Story = {
	args: {
		kind: 'sortable-table',
		columns: sampleColumns,
		data: sampleData,
		defaultSort: { column: 'name', direction: 'asc' },
	},
};

export const FilterableTable: Story = {
	args: {
		kind: 'filterable-table',
		columns: sampleColumns,
		data: sampleData,
		searchable: true,
		searchPlaceholder: 'Search users...',
	},
};

export const DataGrid: Story = {
	args: {
		kind: 'data-grid',
		columns: sampleColumns,
		data: sampleData,
		variant: 'modern',
		selectable: true,
		selectionMode: 'multiple',
		pagination: {
			page: 1,
			pageSize: 3,
			total: sampleData.length,
			showSizeSelector: true,
		},
	},
};

export const SelectableGrid: Story = {
	args: {
		kind: 'selectable-grid',
		columns: sampleColumns,
		data: sampleData,
		variant: 'striped',
		selectable: true,
		selectionMode: 'multiple',
	},
};

export const EditableGrid: Story = {
	args: {
		kind: 'editable-grid',
		columns: sampleColumns,
		data: sampleData,
		variant: 'bordered',
		editable: true,
		selectable: true,
		selectionMode: 'single',
	},
};

export const SkeletonTable: Story = {
	args: {
		kind: 'skeleton-table',
		columns: sampleColumns,
		loading: true,
		loadingRows: 5,
	},
};

// ========================================
// Specialized Table Stories
// ========================================

export const GameLeaderboard: Story = {
	args: {
		kind: 'leaderboard-table',
		columns: gameLeaderboardColumns,
		data: leaderboardData,
		variant: 'modern',
		sortable: true,
		searchable: true,
		searchPlaceholder: 'Search players...',
	},
};

export const PricingTable: Story = {
	args: {
		kind: 'pricing-table',
		columns: pricingColumns,
		data: pricingData,
		variant: 'modern',
		layout: 'fixed',
	},
};

export const ComparisonTable: Story = {
	args: {
		kind: 'comparison-table',
		columns: pricingColumns,
		data: pricingData,
		variant: 'bordered',
		stickyHeader: true,
	},
};

export const StatsTable: Story = {
	args: {
		kind: 'stats-table',
		columns: [
			{ key: 'metric', label: 'Metric' },
			{
				key: 'current',
				label: 'Current',
				type: 'number',
				align: 'right',
			},
			{
				key: 'previous',
				label: 'Previous',
				type: 'number',
				align: 'right',
			},
			{ key: 'change', label: 'Change', align: 'center' },
		],
		data: [
			{
				id: 1,
				metric: 'Daily Users',
				current: 1234,
				previous: 1180,
				change: '+4.6%',
			},
			{
				id: 2,
				metric: 'Games Played',
				current: 5678,
				previous: 5420,
				change: '+4.8%',
			},
			{
				id: 3,
				metric: 'Avg. Session',
				current: '12:34',
				previous: '11:58',
				change: '+5.0%',
			},
			{
				id: 4,
				metric: 'Completion Rate',
				current: '87.2%',
				previous: '85.1%',
				change: '+2.5%',
			},
		],
		variant: 'compact',
		zebraStripes: true,
	},
};

// ========================================
// Variant Stories
// ========================================

export const AllVariants: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<Wrapper>
				<h3>Default</h3>
				<Table
					kind='data-table'
					columns={sampleColumns.slice(0, 3)}
					data={sampleData.slice(0, 3)}
					variant='default'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Minimal</h3>
				<Table
					kind='data-table'
					columns={sampleColumns.slice(0, 3)}
					data={sampleData.slice(0, 3)}
					variant='minimal'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Striped</h3>
				<Table
					kind='data-table'
					columns={sampleColumns.slice(0, 3)}
					data={sampleData.slice(0, 3)}
					variant='striped'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Bordered</h3>
				<Table
					kind='data-table'
					columns={sampleColumns.slice(0, 3)}
					data={sampleData.slice(0, 3)}
					variant='bordered'
				/>
			</Wrapper>
			<Wrapper>
				<h3>Modern</h3>
				<Table
					kind='data-table'
					columns={sampleColumns.slice(0, 3)}
					data={sampleData.slice(0, 3)}
					variant='modern'
				/>
			</Wrapper>
		</Wrapper>
	),
};

// ========================================
// Factory Pattern Stories
// ========================================

export const FactoryBasic: Story = {
	render: () => {
		const DataTableComponent = createTable('data-table');
		return (
			<DataTableComponent
				columns={sampleColumns}
				data={sampleData}
				variant='striped'
			/>
		);
	},
};

export const FactoryShorthand: Story = {
	render: () => {
		const GridComponent = createTable('data-grid');
		return (
			<GridComponent
				columns={sampleColumns}
				data={sampleData}
				selectable={true}
				selectionMode='multiple'
			/>
		);
	},
};

export const FactoryPresets: Story = {
	render: () => {
		const DashboardGrid = TablePresets.dashboardGrid;
		return (
			<DashboardGrid
				columns={sampleColumns}
				data={sampleData}
			/>
		);
	},
};

export const FactoryGameLeaderboard: Story = {
	render: () => {
		const LeaderboardTable = TablePresets.gameLeaderboard;
		return (
			<LeaderboardTable
				columns={gameLeaderboardColumns}
				data={leaderboardData}
			/>
		);
	},
};

export const FactoryAdminTable: Story = {
	render: () => {
		const AdminTable = TablePresets.adminTable;
		return (
			<AdminTable
				columns={sampleColumns}
				data={sampleData}
			/>
		);
	},
};

// ========================================
// Interactive Stories
// ========================================

export const WithInteractions: Story = {
	args: {
		kind: 'data-grid',
		columns: sampleColumns,
		data: sampleData,
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
		columns: sampleColumns,
		data: sampleData,
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
