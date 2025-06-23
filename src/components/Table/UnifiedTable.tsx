import React, {
	forwardRef,
	memo,
	useEffect,
	useMemo,
	useId,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	TableKind,
	TableConfiguration,
	TableColumn,
	TableRow,
	TableSorting,
	TableFilter,
	getTableConfig,
	TABLE_CONFIGURATIONS,
} from './configurations';
import {
	initializeComponentState,
	setSorting,
	setFilters,
	setSearchTerm,
	setSelectedRows,
	setExpandedRows,
	setEditingCell,
	removeComponentState,
	selectTableSorting,
	selectTableFilters,
	selectTableSearchTerm,
	selectTableSelectedRows,
	selectTableExpandedRows,
	selectTableEditingCell,
} from '../../store/slices/tableSlice';
import type { RootState } from '../../store';
import { Button } from '../Button';
import styles from './Table.module.scss';

export interface UnifiedTableProps {
	kind: TableKind;
	children?: React.ReactNode;
	className?: string;
	componentId?: string;

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

const UnifiedTable = forwardRef<
	HTMLTableElement,
	UnifiedTableProps
>((props, ref) => {
	const {
		kind,
		children,
		className,
		componentId,
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

	const baseConfig = getTableConfig(kind);

	// Helper to merge optional props with base config
	const mergeConfigValue = <T,>(
		propValue: T | undefined,
		configValue: T
	): T =>
		propValue !== undefined ? propValue : configValue;

	const config: TableConfiguration = {
		...baseConfig,
		variant: variant || baseConfig.variant,
		layout: layout || baseConfig.layout,
		sortable: mergeConfigValue(
			sortable,
			baseConfig.sortable
		),
		filterable: mergeConfigValue(
			filterable,
			baseConfig.filterable
		),
		selectable: mergeConfigValue(
			selectable,
			baseConfig.selectable
		),
		expandable: mergeConfigValue(
			expandable,
			baseConfig.expandable
		),
		editable: mergeConfigValue(
			editable,
			baseConfig.editable
		),
		multiSort: mergeConfigValue(
			multiSort,
			baseConfig.multiSort
		),
		searchable: mergeConfigValue(
			searchable,
			baseConfig.searchable
		),
		pagination: mergeConfigValue(
			pagination,
			baseConfig.pagination
		),
		selectionMode:
			selectionMode || baseConfig.selectionMode,
		expandableRows: mergeConfigValue(
			expandableRows,
			baseConfig.expandableRows
		),
		loading: mergeConfigValue(loading, baseConfig.loading),
		loadingRows: loadingRows || baseConfig.loadingRows,
		stickyHeader: mergeConfigValue(
			stickyHeader,
			baseConfig.stickyHeader
		),
		zebraStripes: mergeConfigValue(
			zebraStripes,
			baseConfig.zebraStripes
		),
		borderStyle: borderStyle || baseConfig.borderStyle,
		clickableRows: mergeConfigValue(
			clickableRows,
			baseConfig.clickableRows
		),
		hoverEffects: mergeConfigValue(
			hoverEffects,
			baseConfig.hoverEffects
		),
	};

	// Generate unique component ID for Redux state isolation
	const uniqueId = useId();
	const tableComponentId =
		componentId || `table-${uniqueId}`;

	// Redux state management
	const dispatch = useDispatch();

	// Initialize Redux state on mount
	useEffect(() => {
		dispatch(
			initializeComponentState({
				componentId: tableComponentId,
				initialState: {
					sorting:
						(
							defaultSort &&
							defaultSort.direction !== 'none'
						) ?
							{
								column: defaultSort.column,
								direction: defaultSort.direction as
									| 'asc'
									| 'desc',
							}
						:	{ column: '', direction: 'asc' },
					filters:
						defaultFilters ?
							defaultFilters.reduce(
								(acc, filter) => {
									acc[filter.column] = filter.value;
									return acc;
								},
								{} as Record<string, any>
							)
						:	{},
					searchTerm: '',
					selectedRows: new Set(propSelectedRows || []),
					expandedRows: new Set(defaultExpanded || []),
					editingCell: null,
				},
			})
		);

		// Cleanup on unmount
		return () => {
			dispatch(
				removeComponentState({
					componentId: tableComponentId,
				})
			);
		};
	}, [
		dispatch,
		tableComponentId,
		defaultSort,
		defaultFilters,
		propSelectedRows,
		defaultExpanded,
	]);

	// Get state from Redux
	const currentSort = useSelector((state: RootState) =>
		selectTableSorting(state, tableComponentId)
	);
	const currentFilters = useSelector((state: RootState) =>
		selectTableFilters(state, tableComponentId)
	);
	const searchTerm = useSelector((state: RootState) =>
		selectTableSearchTerm(state, tableComponentId)
	);
	const selectedRowsSet = useSelector((state: RootState) =>
		selectTableSelectedRows(state, tableComponentId)
	);
	const expandedRowsSet = useSelector((state: RootState) =>
		selectTableExpandedRows(state, tableComponentId)
	);
	const editingCell = useSelector((state: RootState) =>
		selectTableEditingCell(state, tableComponentId)
	);

	// Convert Sets to arrays for compatibility
	const selectedRows = Array.from(selectedRowsSet);
	const expandedRows = Array.from(expandedRowsSet);

	// Convert filters object to array format for compatibility
	const currentFiltersArray: TableFilter[] = Object.entries(
		currentFilters
	).map(([column, value]) => ({
		column,
		value,
		operator: 'equals' as const,
	}));

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
			return currentFiltersArray.every(
				(filter: TableFilter) => {
					const value = row[filter.column];
					switch (filter.operator || 'equals') {
						case 'equals':
							return value === filter.value;
						case 'contains':
							return String(value)
								.toLowerCase()
								.includes(
									String(filter.value).toLowerCase()
								);
						case 'startsWith':
							return String(value)
								.toLowerCase()
								.startsWith(
									String(filter.value).toLowerCase()
								);
						case 'endsWith':
							return String(value)
								.toLowerCase()
								.endsWith(
									String(filter.value).toLowerCase()
								);
						case 'greaterThan':
							return Number(value) > Number(filter.value);
						case 'lessThan':
							return Number(value) < Number(filter.value);
						default:
							return true;
					}
				}
			);
		});
	}, [searchedData, currentFiltersArray]);

	// Apply sorting
	const sortedData = useMemo(() => {
		if (!config.sortable || !currentSort.column) {
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

		// For Redux, we handle "none" direction by resetting to empty column
		const reduxSort =
			newDirection === 'none' ?
				{ column: '', direction: 'asc' as const }
			:	{
					column,
					direction: newDirection as 'asc' | 'desc',
				};

		dispatch(
			setSorting({
				componentId: tableComponentId,
				sorting: reduxSort,
			})
		);
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
				:	selectedRows.filter(
						(id: string | number) => id !== rowId
					);
		}

		dispatch(
			setSelectedRows({
				componentId: tableComponentId,
				selectedRows: newSelection,
			})
		);
		onSelect?.(newSelection);
	};

	const handleRowExpansion = (rowId: string | number) => {
		if (!config.expandable) return;

		const isExpanded = expandedRows.includes(rowId);
		const newExpanded =
			isExpanded ?
				expandedRows.filter(
					(id: string | number) => id !== rowId
				)
			:	[...expandedRows, rowId];

		dispatch(
			setExpandedRows({
				componentId: tableComponentId,
				expandedRows: newExpanded,
			})
		);
		onExpand?.(rowId, !isExpanded);
	};

	const handleCellEdit = (
		rowId: string | number,
		column: string,
		value: any
	) => {
		onCellEdit?.(rowId, column, value);
		dispatch(
			setEditingCell({
				componentId: tableComponentId,
				editingCell: null,
			})
		);
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
								dispatch(
									setSelectedRows({
										componentId: tableComponentId,
										selectedRows: newSelection,
									})
								);
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
						<Button
							kind='ghost'
							className={styles.table__expand_button}
							onClick={(e) => {
								e.stopPropagation();
								handleRowExpansion(rowId);
							}}
						>
							{isExpanded ? '−' : '+'}
						</Button>
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
									dispatch(
										setEditingCell({
											componentId: tableComponentId,
											editingCell: {
												rowId,
												column: column.key,
											},
										})
									);
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
											dispatch(
												setEditingCell({
													componentId: tableComponentId,
													editingCell: null,
												})
											);
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
					onChange={(e) =>
						dispatch(
							setSearchTerm({
								componentId: tableComponentId,
								searchTerm: e.target.value,
							})
						)
					}
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
