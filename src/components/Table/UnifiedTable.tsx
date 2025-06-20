import React, {
	forwardRef,
	memo,
	useState,
	useEffect,
	useMemo,
} from 'react';
import {
	TableKind,
	TableConfiguration,
	TableColumn,
	TableRow,
	TableSorting,
	TableFilter,
	getTableConfig,
	TABLE_CONFIGURATIONS,
} from './TableConfigurations';
import styles from './Table.module.scss';

// ========================================
// Props Interfaces
// ========================================

export interface UnifiedTableProps {
	kind: TableKind;
	children?: React.ReactNode;
	className?: string;

	// Table-specific props
	columns?: TableColumn[];
	data?: TableRow[];
	keyField?: string;

	// Override configuration
	variant?: TableConfiguration['variant'];
	layout?: TableConfiguration['layout'];
	sortable?: boolean;
	filterable?: boolean;
	selectable?: boolean;
	expandable?: boolean;
	editable?: boolean;

	// Sorting
	defaultSort?: TableSorting;
	multiSort?: boolean;
	onSort?: (sorting: TableSorting) => void;

	// Filtering
	defaultFilters?: TableFilter[];
	searchable?: boolean;
	searchPlaceholder?: string;
	onFilter?: (filters: TableFilter[]) => void;

	// Pagination
	pagination?: TableConfiguration['pagination'];

	// Selection
	selectionMode?: 'single' | 'multiple' | 'none';
	selectedRows?: (string | number)[];
	onSelect?: (selectedRows: (string | number)[]) => void;

	// Expansion
	expandableRows?: boolean;
	defaultExpanded?: (string | number)[];
	onExpand?: (
		rowId: string | number,
		expanded: boolean
	) => void;

	// Loading states
	loading?: boolean;
	loadingRows?: number;

	// Styling
	height?: string | number;
	maxHeight?: string | number;
	minHeight?: string | number;
	stickyHeader?: boolean;
	zebraStripes?: boolean;
	borderStyle?: 'none' | 'horizontal' | 'vertical' | 'all';

	// Behavior
	clickableRows?: boolean;
	hoverEffects?: boolean;
	onRowClick?: (row: TableRow, index: number) => void;
	onRowDoubleClick?: (row: TableRow, index: number) => void;
	onCellEdit?: (
		rowId: string | number,
		column: string,
		value: any
	) => void;

	// Custom styling
	headerClassName?: string;
	bodyClassName?: string;
	rowClassName?:
		| string
		| ((row: TableRow, index: number) => string);
	cellClassName?:
		| string
		| ((
				value: any,
				row: TableRow,
				column: TableColumn
		  ) => string);
}

// ========================================
// Main Component
// ========================================

const UnifiedTable = forwardRef<
	HTMLTableElement,
	UnifiedTableProps
>((props, ref) => {
	const {
		kind,
		children,
		className,
		columns: propColumns,
		data: propData,
		keyField = 'id',

		// Configuration overrides
		variant,
		layout,
		sortable,
		filterable,
		selectable,
		expandable,
		editable,

		// Sorting
		defaultSort,
		multiSort,
		onSort,

		// Filtering
		defaultFilters,
		searchable,
		searchPlaceholder,
		onFilter,

		// Pagination
		pagination,

		// Selection
		selectionMode,
		selectedRows: propSelectedRows,
		onSelect,

		// Expansion
		expandableRows,
		defaultExpanded,
		onExpand,

		// Loading
		loading,
		loadingRows,

		// Styling
		height,
		maxHeight,
		minHeight,
		stickyHeader,
		zebraStripes,
		borderStyle,

		// Behavior
		clickableRows,
		hoverEffects,
		onRowClick,
		onRowDoubleClick,
		onCellEdit,

		// Custom styling
		headerClassName,
		bodyClassName,
		rowClassName,
		cellClassName,

		...restProps
	} = props;

	// ========================================
	// Configuration Resolution
	// ========================================

	const baseConfig = getTableConfig(kind);
	const config: TableConfiguration = {
		...baseConfig,
		variant: variant || baseConfig.variant,
		layout: layout || baseConfig.layout,
		sortable:
			sortable !== undefined ? sortable : (
				baseConfig.sortable
			),
		filterable:
			filterable !== undefined ? filterable : (
				baseConfig.filterable
			),
		selectable:
			selectable !== undefined ? selectable : (
				baseConfig.selectable
			),
		expandable:
			expandable !== undefined ? expandable : (
				baseConfig.expandable
			),
		editable:
			editable !== undefined ? editable : (
				baseConfig.editable
			),
		multiSort:
			multiSort !== undefined ? multiSort : (
				baseConfig.multiSort
			),
		searchable:
			searchable !== undefined ? searchable : (
				baseConfig.searchable
			),
		pagination:
			pagination !== undefined ? pagination : (
				baseConfig.pagination
			),
		selectionMode:
			selectionMode || baseConfig.selectionMode,
		expandableRows:
			expandableRows !== undefined ? expandableRows : (
				baseConfig.expandableRows
			),
		loading:
			loading !== undefined ? loading : baseConfig.loading,
		loadingRows: loadingRows || baseConfig.loadingRows,
		stickyHeader:
			stickyHeader !== undefined ? stickyHeader : (
				baseConfig.stickyHeader
			),
		zebraStripes:
			zebraStripes !== undefined ? zebraStripes : (
				baseConfig.zebraStripes
			),
		borderStyle: borderStyle || baseConfig.borderStyle,
		clickableRows:
			clickableRows !== undefined ? clickableRows : (
				baseConfig.clickableRows
			),
		hoverEffects:
			hoverEffects !== undefined ? hoverEffects : (
				baseConfig.hoverEffects
			),
	};

	// ========================================
	// State Management
	// ========================================

	const [currentSort, setCurrentSort] =
		useState<TableSorting>(
			defaultSort || { column: '', direction: 'none' }
		);
	const [currentFilters, setCurrentFilters] = useState<
		TableFilter[]
	>(defaultFilters || []);
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedRows, setSelectedRows] = useState<
		(string | number)[]
	>(propSelectedRows || []);
	const [expandedRows, setExpandedRows] = useState<
		(string | number)[]
	>(defaultExpanded || []);
	const [editingCell, setEditingCell] = useState<{
		rowId: string | number;
		column: string;
	} | null>(null);

	// ========================================
	// Data Processing
	// ========================================

	const columns = propColumns || [];
	const rawData = propData || [];

	// Generate skeleton data for loading states
	const skeletonData = useMemo(() => {
		if (!config.loading) return [];

		const skeletonRows = Array.from(
			{ length: config.loadingRows || 5 },
			(_, index) => {
				const row: TableRow = { id: `skeleton-${index}` };
				columns.forEach((col) => {
					row[col.key] = '...';
				});
				return row;
			}
		);

		return skeletonRows;
	}, [config.loading, config.loadingRows, columns]);

	// Use skeleton data when loading, otherwise use real data
	const workingData =
		config.loading ? skeletonData : rawData;

	// Apply search filter
	const searchedData = useMemo(() => {
		if (!config.searchable || !searchTerm.trim())
			return workingData;

		return workingData.filter((row) => {
			return columns.some((col) => {
				const value = row[col.key];
				return String(value)
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
		});
	}, [workingData, searchTerm, columns, config.searchable]);

	// Apply filters
	const filteredData = useMemo(() => {
		if (currentFilters.length === 0) return searchedData;

		return searchedData.filter((row) => {
			return currentFilters.every((filter) => {
				const value = row[filter.column];
				switch (filter.operator || 'equals') {
					case 'equals':
						return value === filter.value;
					case 'contains':
						return String(value)
							.toLowerCase()
							.includes(String(filter.value).toLowerCase());
					case 'startsWith':
						return String(value)
							.toLowerCase()
							.startsWith(
								String(filter.value).toLowerCase()
							);
					case 'endsWith':
						return String(value)
							.toLowerCase()
							.endsWith(String(filter.value).toLowerCase());
					case 'greaterThan':
						return Number(value) > Number(filter.value);
					case 'lessThan':
						return Number(value) < Number(filter.value);
					default:
						return true;
				}
			});
		});
	}, [searchedData, currentFilters]);

	// Apply sorting
	const sortedData = useMemo(() => {
		if (
			!config.sortable ||
			currentSort.direction === 'none'
		) {
			return filteredData;
		}

		return [...filteredData].sort((a, b) => {
			const aValue = a[currentSort.column];
			const bValue = b[currentSort.column];

			let comparison = 0;
			if (aValue < bValue) comparison = -1;
			else if (aValue > bValue) comparison = 1;

			return currentSort.direction === 'desc' ?
					-comparison
				:	comparison;
		});
	}, [filteredData, currentSort, config.sortable]);

	// ========================================
	// Event Handlers
	// ========================================

	const handleSort = (column: string) => {
		if (!config.sortable) return;

		let newDirection: 'asc' | 'desc' | 'none' = 'asc';
		if (currentSort.column === column) {
			newDirection =
				currentSort.direction === 'asc' ? 'desc'
				: currentSort.direction === 'desc' ? 'none'
				: 'asc';
		}

		const newSort = { column, direction: newDirection };
		setCurrentSort(newSort);
		onSort?.(newSort);
	};

	const handleRowSelection = (
		rowId: string | number,
		selected: boolean
	) => {
		if (!config.selectable) return;

		let newSelection: (string | number)[];

		if (config.selectionMode === 'single') {
			newSelection = selected ? [rowId] : [];
		} else {
			newSelection =
				selected ?
					[...selectedRows, rowId]
				:	selectedRows.filter((id) => id !== rowId);
		}

		setSelectedRows(newSelection);
		onSelect?.(newSelection);
	};

	const handleRowExpansion = (rowId: string | number) => {
		if (!config.expandable) return;

		const isExpanded = expandedRows.includes(rowId);
		const newExpanded =
			isExpanded ?
				expandedRows.filter((id) => id !== rowId)
			:	[...expandedRows, rowId];

		setExpandedRows(newExpanded);
		onExpand?.(rowId, !isExpanded);
	};

	const handleCellEdit = (
		rowId: string | number,
		column: string,
		value: any
	) => {
		onCellEdit?.(rowId, column, value);
		setEditingCell(null);
	};

	// ========================================
	// CSS Classes
	// ========================================

	const tableClasses = [
		styles.table,
		styles[`table--${config.kind}`],
		styles[`table--${config.variant}`],
		styles[`table--${config.layout}`],
		config.stickyHeader && styles['table--sticky-header'],
		config.zebraStripes && styles['table--striped'],
		config.hoverEffects && styles['table--hover'],
		config.clickableRows && styles['table--clickable'],
		config.loading && styles['table--loading'],
		config.borderStyle &&
			styles[`table--border-${config.borderStyle}`],
		className,
	]
		.filter(Boolean)
		.join(' ');

	const headerClasses = [
		styles.table__header,
		headerClassName,
	]
		.filter(Boolean)
		.join(' ');

	const bodyClasses = [styles.table__body, bodyClassName]
		.filter(Boolean)
		.join(' ');

	// ========================================
	// Render Functions
	// ========================================

	const renderTableHeader = () => (
		<thead className={headerClasses}>
			<tr className={styles.table__header_row}>
				{config.selectable && (
					<th className={styles.table__header_cell}>
						<input
							type='checkbox'
							onChange={(e) => {
								const allIds = sortedData.map(
									(row) => row[keyField]
								);
								const newSelection =
									e.target.checked ? allIds : [];
								setSelectedRows(newSelection);
								onSelect?.(newSelection);
							}}
							checked={
								selectedRows.length === sortedData.length &&
								sortedData.length > 0
							}
							ref={(input) => {
								if (input) {
									input.indeterminate =
										selectedRows.length > 0 &&
										selectedRows.length < sortedData.length;
								}
							}}
						/>
					</th>
				)}
				{config.expandable && (
					<th className={styles.table__header_cell}></th>
				)}
				{columns.map((column) => (
					<th
						key={column.key}
						className={`${styles.table__header_cell} ${
							column.sortable !== false && config.sortable ?
								styles['table__header_cell--sortable']
							:	''
						}`}
						style={{
							width: column.width,
							minWidth: column.minWidth,
							maxWidth: column.maxWidth,
							textAlign: column.align || 'left',
						}}
						onClick={() =>
							column.sortable !== false &&
							handleSort(column.key)
						}
					>
						<span className={styles.table__header_content}>
							{column.label}
							{config.sortable &&
								column.sortable !== false && (
									<span
										className={styles.table__sort_indicator}
									>
										{currentSort.column === column.key &&
											(currentSort.direction === 'asc' ? '↑'
											: currentSort.direction === 'desc' ?
												'↓'
											:	'')}
									</span>
								)}
						</span>
					</th>
				))}
			</tr>
		</thead>
	);

	const renderTableRow = (row: TableRow, index: number) => {
		const rowId = row[keyField];
		const isSelected = selectedRows.includes(rowId);
		const isExpanded = expandedRows.includes(rowId);

		const computedRowClassName =
			typeof rowClassName === 'function' ?
				rowClassName(row, index)
			:	rowClassName;

		const rowClasses = [
			styles.table__row,
			isSelected && styles['table__row--selected'],
			isExpanded && styles['table__row--expanded'],
			config.loading && styles['table__row--skeleton'],
			computedRowClassName,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<tr
				key={rowId}
				className={rowClasses}
				onClick={() => {
					if (config.clickableRows) {
						onRowClick?.(row, index);
					}
				}}
				onDoubleClick={() => onRowDoubleClick?.(row, index)}
			>
				{config.selectable && (
					<td className={styles.table__cell}>
						<input
							type={
								config.selectionMode === 'single' ?
									'radio'
								:	'checkbox'
							}
							checked={isSelected}
							onChange={(e) =>
								handleRowSelection(rowId, e.target.checked)
							}
						/>
					</td>
				)}
				{config.expandable && (
					<td className={styles.table__cell}>
						<button
							className={styles.table__expand_button}
							onClick={(e) => {
								e.stopPropagation();
								handleRowExpansion(rowId);
							}}
						>
							{isExpanded ? '−' : '+'}
						</button>
					</td>
				)}
				{columns.map((column) => {
					const cellValue = row[column.key];
					const isEditing =
						editingCell?.rowId === rowId &&
						editingCell?.column === column.key;

					const computedCellClassName =
						typeof cellClassName === 'function' ?
							cellClassName(cellValue, row, column)
						:	cellClassName;

					const cellClasses = [
						styles.table__cell,
						config.loading &&
							styles['table__cell--skeleton'],
						computedCellClassName,
					]
						.filter(Boolean)
						.join(' ');

					return (
						<td
							key={column.key}
							className={cellClasses}
							style={{
								textAlign: column.align || 'left',
							}}
							onDoubleClick={() => {
								if (config.editable) {
									setEditingCell({
										rowId,
										column: column.key,
									});
								}
							}}
						>
							{isEditing ?
								<input
									type='text'
									defaultValue={cellValue}
									onBlur={(e) =>
										handleCellEdit(
											rowId,
											column.key,
											e.target.value
										)
									}
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											handleCellEdit(
												rowId,
												column.key,
												e.currentTarget.value
											);
										} else if (e.key === 'Escape') {
											setEditingCell(null);
										}
									}}
									autoFocus
								/>
							: column.cellRenderer ?
								column.cellRenderer(cellValue, row, column)
							: column.format ?
								column.format(cellValue)
							: config.loading ?
								<div className={styles.skeleton_content} />
							:	cellValue}
						</td>
					);
				})}
			</tr>
		);
	};

	const renderSearchBar = () => {
		if (!config.searchable) return null;

		return (
			<div className={styles.table__search}>
				<input
					type='text'
					placeholder={
						searchPlaceholder ||
						config.searchPlaceholder ||
						'Search...'
					}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className={styles.table__search_input}
				/>
			</div>
		);
	};

	// ========================================
	// Main Render
	// ========================================

	const tableStyle = {
		height,
		maxHeight,
		minHeight,
	};

	return (
		<div className={styles.table_container}>
			{renderSearchBar()}

			<div
				className={styles.table_wrapper}
				style={tableStyle}
			>
				<table
					{...restProps}
					ref={ref}
					className={tableClasses}
				>
					{renderTableHeader()}
					<tbody className={bodyClasses}>
						{sortedData.map((row, index) =>
							renderTableRow(row, index)
						)}
						{sortedData.length === 0 && !config.loading && (
							<tr className={styles.table__empty_row}>
								<td
									colSpan={
										columns.length +
										(config.selectable ? 1 : 0) +
										(config.expandable ? 1 : 0)
									}
									className={styles.table__empty_cell}
								>
									No data available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			{children}
		</div>
	);
});

// ========================================
// Export
// ========================================

UnifiedTable.displayName = 'UnifiedTable';

export default memo(UnifiedTable);
