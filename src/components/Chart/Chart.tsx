import React, { forwardRef, memo, useEffect } from 'react';
import { Wrapper } from '../Wrappers';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import {
	ChartKind,
	ChartConfiguration,
	ChartDataSeries,
	getChartConfig,
} from './configurations';
import {
	initializeChart,
	setChartSelectedSeries,
	setChartSearchTerm,
	toggleChartSeries,
	selectAllChartSeries,
	cleanupChart,
	selectChartSelectedSeries,
	selectChartSearchTerm,
} from '../../store/slices/uiSlice';
import { RootState } from '../../store';
import styles from './chart.module.scss';

export interface ChartProps {
	kind: ChartKind;
	chartId: string; // Unique identifier for this chart instance
	children?: React.ReactNode;
	className?: string;

	// Data
	dataSeries?: ChartDataSeries[];

	// Configuration overrides
	variant?: ChartConfiguration['variant'];
	position?: ChartConfiguration['position'];
	orientation?: 'horizontal' | 'vertical';

	// Features
	showIcons?: boolean;
	showValues?: boolean;
	interactive?: boolean;
	followCursor?: boolean;
	showArrow?: boolean;
	multiValue?: boolean;
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

const Chart = forwardRef<HTMLDivElement, ChartProps>(
	(props, ref) => {
		const {
			kind,
			chartId,
			children,
			className,
			dataSeries = [],

			// Configuration overrides
			variant,
			position,
			orientation,

			// Features
			showIcons,
			showValues,
			interactive,
			followCursor,
			showArrow,
			multiValue,
			allowMultiSelect,
			showSelectAll,
			searchable,

			// Styling
			spacing,
			size,

			// Callbacks
			onSeriesToggle,
			onFilterChange,
			onTooltipShow,
			onTooltipHide,

			...restProps
		} = props;

		// Configuration Resolution
		const baseConfig = getChartConfig(kind);
		const config: ChartConfiguration = {
			...baseConfig,
			variant: variant || baseConfig.variant,
			position: position || baseConfig.position,
			orientation: orientation || baseConfig.orientation,
			showIcons:
				showIcons !== undefined ? showIcons : (
					baseConfig.showIcons
				),
			showValues:
				showValues !== undefined ? showValues : (
					baseConfig.showValues
				),
			interactive:
				interactive !== undefined ? interactive : (
					baseConfig.interactive
				),
			followCursor:
				followCursor !== undefined ? followCursor : (
					baseConfig.followCursor
				),
			showArrow:
				showArrow !== undefined ? showArrow : (
					baseConfig.showArrow
				),
			multiValue:
				multiValue !== undefined ? multiValue : (
					baseConfig.multiValue
				),
			allowMultiSelect:
				allowMultiSelect !== undefined ?
					allowMultiSelect
				:	baseConfig.allowMultiSelect,
			showSelectAll:
				showSelectAll !== undefined ? showSelectAll : (
					baseConfig.showSelectAll
				),
			searchable:
				searchable !== undefined ? searchable : (
					baseConfig.searchable
				),
			spacing: spacing || baseConfig.spacing,
			size: size || baseConfig.size,
		};

		// Redux hooks
		const dispatch = useDispatch();
		const selectedSeries = useSelector(
			selectChartSelectedSeries(chartId)
		);
		const searchTerm = useSelector(
			selectChartSearchTerm(chartId)
		);

		// Initialize chart state on mount
		useEffect(() => {
			const initialSelectedSeries = dataSeries
				.filter((s) => s.visible)
				.map((s) => s.id);
			dispatch(
				initializeChart({
					chartId,
					selectedSeries: initialSelectedSeries,
					isInteractive: config.interactive,
					allowMultiSelect: config.allowMultiSelect,
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupChart(chartId));
			};
		}, [chartId, dispatch]); // Note: config and dataSeries are derived from props, so we don't include them as dependencies

		// Event Handlers
		const handleSeriesToggle = (seriesId: string) => {
			if (!config.interactive) return;

			const series = dataSeries.find(
				(s) => s.id === seriesId
			);
			if (!series) return;

			const newVisible = !series.visible;
			series.visible = newVisible;

			if (config.allowMultiSelect) {
				dispatch(toggleChartSeries({ chartId, seriesId }));
				const newSelected =
					newVisible ?
						[...selectedSeries, seriesId]
					:	selectedSeries.filter(
							(id: string) => id !== seriesId
						);
				onFilterChange?.(newSelected);
			} else {
				dispatch(
					setChartSelectedSeries({
						chartId,
						selectedSeries: [seriesId],
					})
				);
				onFilterChange?.([seriesId]);
			}

			onSeriesToggle?.(seriesId, newVisible);
		};

		const handleSelectAll = () => {
			const allVisible = dataSeries.every((s) => s.visible);
			dataSeries.forEach((s) => (s.visible = !allVisible));
			const newSelected =
				allVisible ? [] : dataSeries.map((s) => s.id);
			dispatch(
				selectAllChartSeries({
					chartId,
					allSeriesIds: dataSeries.map((s) => s.id),
				})
			);
			onFilterChange?.(newSelected);
		};

		// CSS Classes
		const chartClasses = [
			styles.chart,
			styles[`chart--${config.kind}`],
			styles[`chart--${config.variant}`],
			styles[`chart--${config.position}`],
			config.orientation &&
				styles[`chart--${config.orientation}`],
			config.spacing &&
				styles[`chart--spacing-${config.spacing}`],
			config.size && styles[`chart--size-${config.size}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Render Functions
		const renderLegendItem = (series: ChartDataSeries) => (
			<Wrapper
				key={series.id}
				className={`${styles.legend__item} ${
					series.visible ?
						styles['legend__item--active']
					:	''
				}`}
				onClick={() => handleSeriesToggle(series.id)}
			>
				{config.showIcons && (
					<Wrapper
						className={styles.legend__icon}
						style={{ backgroundColor: series.color }}
					>
						{series.icon}
					</Wrapper>
				)}
				<span className={styles.legend__label}>
					{series.label}
				</span>
				{config.showValues && series.data && (
					<span className={styles.legend__value}>
						{series.data.length}
					</span>
				)}
			</Wrapper>
		);

		const renderFilterControls = () => {
			if (!config.kind.includes('filter')) return null;

			const filteredSeries =
				config.searchable && searchTerm ?
					dataSeries.filter((s) =>
						s.label
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					)
				:	dataSeries;

			return (
				<Wrapper className={styles.filter}>
					{config.searchable && (
						<input
							type='text'
							placeholder='Search...'
							value={searchTerm}
							onChange={(e) =>
								dispatch(
									setChartSearchTerm({
										chartId,
										searchTerm: e.target.value,
									})
								)
							}
							className={styles.filter__search}
						/>
					)}

					{config.showSelectAll && (
						<Button
							kind='secondary'
							onClick={handleSelectAll}
							className={styles.filter__select_all}
						>
							{dataSeries.every((s) => s.visible) ?
								'Deselect All'
							:	'Select All'}
						</Button>
					)}

					<Wrapper className={styles.filter__items}>
						{filteredSeries.map((series) => (
							<label
								key={series.id}
								className={styles.filter__item}
							>
								<input
									type={
										config.allowMultiSelect ? 'checkbox' : (
											'radio'
										)
									}
									checked={series.visible}
									onChange={() =>
										handleSeriesToggle(series.id)
									}
								/>
								<span style={{ color: series.color }}>
									{series.label}
								</span>
							</label>
						))}
					</Wrapper>
				</Wrapper>
			);
		};

		const renderTooltip = () => {
			if (!config.kind.includes('tooltip')) return null;

			return (
				<Wrapper className={styles.tooltip}>
					{config.showArrow && (
						<Wrapper className={styles.tooltip__arrow} />
					)}
					<Wrapper className={styles.tooltip__content}>
						{children || 'Tooltip content'}
					</Wrapper>
				</Wrapper>
			);
		};

		const renderChartControls = () => {
			if (
				!config.kind.includes('controls') &&
				!config.kind.includes('zoom')
			)
				return null;

			return (
				<Wrapper className={styles.controls}>
					{config.kind.includes('zoom') && (
						<>
							<Button
								kind='secondary'
								className={styles.controls__button}
							>
								+
							</Button>
							<Button
								kind='secondary'
								className={styles.controls__button}
							>
								-
							</Button>
							<Button
								kind='secondary'
								className={styles.controls__button}
							>
								Reset
							</Button>
						</>
					)}
					{config.kind.includes('time-range') && (
						<select className={styles.controls__select}>
							<option>Last 7 days</option>
							<option>Last 30 days</option>
							<option>Last 90 days</option>
						</select>
					)}
				</Wrapper>
			);
		};

		// Main Render
		return (
			<Wrapper
				{...restProps}
				ref={ref}
				className={chartClasses}
			>
				{config.kind.includes('legend') && (
					<Wrapper className={styles.legend}>
						{dataSeries.map(renderLegendItem)}
					</Wrapper>
				)}

				{renderFilterControls()}
				{renderTooltip()}
				{renderChartControls()}

				{children}
			</Wrapper>
		);
	}
);

Chart.displayName = 'Chart';
export default memo(Chart);

export function createChart(
	kind: ChartKind,
	props: Omit<ChartProps, 'kind'> = {}
): React.ReactElement<ChartProps> {
	return <Chart kind={kind} {...props} />;
}

// Quick access helpers for common chart kinds (formerly ChartPresets)
export const LegendChart = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='chart-legend' {...props} />;
export const LegendHorizontal = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='legend-horizontal' {...props} />;
export const LegendVertical = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='legend-vertical' {...props} />;
export const LegendGrid = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='legend-grid' {...props} />;
export const LegendMinimal = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='legend-minimal' {...props} />;
export const TooltipChart = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='chart-tooltip' {...props} />;
export const TooltipSimple = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='tooltip-simple' {...props} />;
export const TooltipDetailed = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='tooltip-detailed' {...props} />;
export const TooltipCustom = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='tooltip-custom' {...props} />;
export const FilterControls = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='chart-filter-controls' {...props} />;
export const FilterCheckboxes = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='filter-checkboxes' {...props} />;
export const FilterButtons = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='filter-buttons' {...props} />;
export const FilterDropdown = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='filter-dropdown' {...props} />;
export const FilterMultiSelect = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='filter-multi-select' {...props} />;
export const ChartControls = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='chart-controls' {...props} />;
export const ZoomControls = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='zoom-controls' {...props} />;
export const TimeRangeSelector = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='time-range-selector' {...props} />;
export const DataSeriesToggle = (
	props: Omit<ChartProps, 'kind'>
) => <Chart kind='data-series-toggle' {...props} />;

// Advanced presets
export const DashboardLegend = (
	props: Omit<ChartProps, 'kind'>
) => (
	<Chart
		kind='legend-grid'
		variant='modern'
		showIcons
		showValues
		interactive
		{...props}
	/>
);
export const GameStatsFilter = (
	props: Omit<ChartProps, 'kind'>
) => (
	<Chart
		kind='filter-buttons'
		variant='game-style'
		allowMultiSelect
		spacing='tight'
		{...props}
	/>
);
