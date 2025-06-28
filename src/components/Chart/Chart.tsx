import React, {
	useState,
	useMemo,
	memo,
	forwardRef,
} from 'react';
import type { ChartProps } from './configurations';
import { Wrapper } from '../Wrappers';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button';
import {
	ChartKind,
	ChartConfiguration,
	ChartDataSeries,
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
import {
	getSafe,
	getPrimaryValue,
	getPrimaryLabel,
	getPrimaryDelta,
	getPrimaryStatus,
	getLeaderboardEntries,
} from './chartHelpers';
import clsx from 'clsx';
import { Card, CardProps } from '../Card';

// SVG/Widget constants
const DEFAULT_GAUGE_RADIUS = 40;
const DEFAULT_GAUGE_WIDTH = 100;
const DEFAULT_GAUGE_HEIGHT = 60;
const DEFAULT_CIRCULAR_RADIUS = 24;
const DEFAULT_CIRCULAR_SIZE = 60;

const KpiWidget = ({
	dataSeries,
	styles,
	color,
	size = 'medium',
	variant = 'default',
	orientation = 'horizontal',
	...cardProps
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	return (
		<Card
			className={clsx(
				styles.kpiWidget,
				styles[`kpiWidget--${size}`],
				styles[`kpiWidget--${variant}`]
			)}
			variant={variant}
			size={size}
			orientation={orientation}
			style={
				{
					'--chart-accent': color,
					...cardProps.style,
				} as React.CSSProperties
			}
			role='group'
			aria-label={`KPI: ${label}`}
			{...cardProps}
		>
			<div className={styles.kpiValue}>{value}</div>
			<div className={styles.kpiLabel}>{label}</div>
		</Card>
	);
};

const ScorecardWidget = ({
	dataSeries,
	styles,
	scorecardIcon,
	color,
	size = 'medium',
	variant = 'default',
	orientation = 'horizontal',
	...cardProps
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	return (
		<Card
			className={clsx(
				styles.scorecardWidget,
				styles[`scorecardWidget--${size}`],
				styles[`scorecardWidget--${variant}`]
			)}
			variant={variant}
			size={size}
			orientation={orientation}
			style={
				{
					'--chart-accent': color,
					...cardProps.style,
				} as React.CSSProperties
			}
			role='group'
			aria-label={`Scorecard: ${label}`}
			{...cardProps}
		>
			{scorecardIcon && (
				<span className={styles.scorecardIcon}>
					{scorecardIcon}
				</span>
			)}
			<div className={styles.scorecardValue}>{value}</div>
			<div className={styles.scorecardLabel}>{label}</div>
		</Card>
	);
};

const ProgressWidget = ({
	dataSeries,
	styles,
	color,
	size = 'medium',
	variant = 'default',
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	const percent = Math.max(0, Math.min(100, value));
	return (
		<div
			className={clsx(
				styles.progressWidget,
				styles[`progressWidget--${size}`],
				styles[`progressWidget--${variant}`]
			)}
			role='group'
			aria-label={`Progress: ${label}`}
			style={
				{ '--chart-accent': color } as React.CSSProperties
			}
		>
			<div className={styles.progressLabel}>{label}</div>
			<div className={styles.progressBarContainer}>
				<div
					className={styles.progressBar}
					style={{ width: `${percent}%` }}
				/>
			</div>
			<div className={styles.progressValue}>{percent}%</div>
		</div>
	);
};

const GaugeWidget = ({
	dataSeries,
	styles,
	color,
	widgetSize,
	size = 'medium',
	variant = 'default',
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	const radius = DEFAULT_GAUGE_RADIUS;
	const circumference = 2 * Math.PI * radius;
	const percent = Math.max(0, Math.min(100, value));
	const width = widgetSize || DEFAULT_GAUGE_WIDTH;
	const height =
		widgetSize ? widgetSize * 0.6 : DEFAULT_GAUGE_HEIGHT;
	return (
		<div
			className={clsx(
				styles.gaugeWidget,
				styles[`gaugeWidget--${size}`],
				styles[`gaugeWidget--${variant}`]
			)}
			role='group'
			aria-label={`Gauge: ${label}`}
			style={
				{ '--chart-accent': color } as React.CSSProperties
			}
		>
			<svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				aria-label='Gauge'
			>
				<path
					d={`M10,${height - 10} A${radius},${radius} 0 0,1 ${width - 10},${height - 10}`}
					fill='none'
					stroke='var(--color-gray-200)'
					strokeWidth='8'
				/>
				<path
					d={`M10,${height - 10} A${radius},${radius} 0 0,1 ${width - 10},${height - 10}`}
					fill='none'
					stroke='var(--chart-accent)'
					strokeWidth='8'
					strokeDasharray={circumference / 2}
					strokeDashoffset={
						circumference / 2 -
						(circumference / 2) * (percent / 100)
					}
					strokeLinecap='round'
				/>
			</svg>
			<div className={styles.gaugeValue}>{percent}%</div>
			<div className={styles.gaugeLabel}>{label}</div>
		</div>
	);
};

const DeltaWidget = ({
	dataSeries,
	styles,
	color,
	deltaUpIcon,
	deltaDownIcon,
	size = 'medium',
	variant = 'default',
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const delta = getPrimaryDelta(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	const up = delta > 0;
	return (
		<div
			className={clsx(
				styles.deltaWidget,
				styles[`deltaWidget--${size}`],
				styles[`deltaWidget--${variant}`]
			)}
			role='group'
			aria-label={`Delta: ${label}`}
			style={
				{ '--chart-accent': color } as React.CSSProperties
			}
		>
			<div className={styles.deltaValue}>{value}</div>
			<div
				className={up ? styles.deltaUp : styles.deltaDown}
				aria-label={up ? 'Increase' : 'Decrease'}
			>
				{up ? (deltaUpIcon ?? '▲') : (deltaDownIcon ?? '▼')}{' '}
				{Math.abs(delta)}%
			</div>
			<div className={styles.deltaLabel}>{label}</div>
		</div>
	);
};

const CircularProgressWidget = ({
	dataSeries,
	styles,
	color,
	widgetSize,
	size = 'medium',
	variant = 'default',
}: any) => {
	const value = getPrimaryValue(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	const radius = DEFAULT_CIRCULAR_RADIUS;
	const circumference = 2 * Math.PI * radius;
	const percent = Math.max(0, Math.min(100, value));
	const sizeProp = widgetSize || DEFAULT_CIRCULAR_SIZE;
	return (
		<div
			className={clsx(
				styles.circularProgressWidget,
				styles[`circularProgressWidget--${size}`],
				styles[`circularProgressWidget--${variant}`]
			)}
			role='group'
			aria-label={`Circular Progress: ${label}`}
			style={
				{ '--chart-accent': color } as React.CSSProperties
			}
		>
			<svg
				width={sizeProp}
				height={sizeProp}
				viewBox={`0 0 ${sizeProp} ${sizeProp}`}
				aria-label='Circular Progress'
			>
				<circle
					cx={sizeProp / 2}
					cy={sizeProp / 2}
					r={radius}
					fill='none'
					stroke='var(--color-gray-200)'
					strokeWidth='8'
				/>
				<circle
					cx={sizeProp / 2}
					cy={sizeProp / 2}
					r={radius}
					fill='none'
					stroke='var(--chart-accent)'
					strokeWidth='8'
					strokeDasharray={circumference}
					strokeDashoffset={
						circumference * (1 - percent / 100)
					}
					strokeLinecap='round'
				/>
			</svg>
			<div className={styles.circularValue}>{percent}%</div>
			<div className={styles.circularLabel}>{label}</div>
		</div>
	);
};

const StatusWidget = ({
	dataSeries,
	styles,
	size = 'medium',
	variant = 'default',
}: any) => {
	const status = getPrimaryStatus(dataSeries);
	const label = getPrimaryLabel(dataSeries);
	return (
		<div
			className={clsx(
				styles.statusWidget,
				styles[`statusWidget--${size}`],
				styles[`statusWidget--${variant}`]
			)}
			role='status'
			aria-label={`Status: ${label}, ${status}`}
		>
			<span
				className={
					styles.statusIndicator +
					' ' +
					styles[`status-${status}`]
				}
				aria-label={status}
			/>
			<span className={styles.statusLabel}>{label}</span>
		</div>
	);
};

const LeaderboardWidget = ({
	dataSeries,
	styles,
	size = 'medium',
	variant = 'default',
}: any) => {
	const entries: Array<any> =
		getLeaderboardEntries(dataSeries);
	if (!entries.length)
		return (
			<div className={styles.leaderboardWidget}>
				No data
			</div>
		);
	return (
		<div
			className={clsx(
				styles.leaderboardWidget,
				styles[`leaderboardWidget--${size}`],
				styles[`leaderboardWidget--${variant}`]
			)}
			role='region'
			aria-label='Leaderboard'
		>
			<ul className={styles.leaderboardList} role='list'>
				{entries.map((entry: any, i: number) => (
					<li
						key={entry.id || i}
						className={styles.leaderboardItem}
						role='listitem'
						tabIndex={0}
						aria-label={`Rank ${i + 1}: ${entry.label || entry.name}, ${entry.value}`}
					>
						{entry.avatar && (
							<img
								src={entry.avatar}
								alt={entry.name || entry.label}
								className={styles.leaderboardAvatar}
							/>
						)}
						<span className={styles.leaderboardRank}>
							{i + 1}
						</span>
						<span className={styles.leaderboardLabel}>
							{entry.name || entry.label}
						</span>
						<span className={styles.leaderboardValue}>
							{entry.value}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

const widgetMap: Record<string, React.FC<any>> = {
	kpi: KpiWidget,
	scorecard: ScorecardWidget,
	progress: ProgressWidget,
	gauge: GaugeWidget,
	delta: DeltaWidget,
	circularProgress: CircularProgressWidget,
	status: StatusWidget,
	leaderboard: LeaderboardWidget,
};

// Legend rendering now uses Card and passes Card props
const ChartLegend = ({
	dataSeries = [],
	legendOrientation = 'horizontal',
	size = 'medium',
	variant = 'default',
	className = '',
	selectedSeries,
	onSelectSeries,
	showFilter = false,
	showSearch = false,
	...cardProps
}: any) => {
	// Filter state
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState('alpha');

	// Filtering logic
	const filteredSeries = useMemo(() => {
		let items = dataSeries;
		if (showSearch && search) {
			items = items.filter((item: any) =>
				item.label
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}
		if (showFilter) {
			if (sort === 'alpha') {
				items = [...items].sort((a: any, b: any) =>
					a.label.localeCompare(b.label)
				);
			} else if (sort === 'reverse-alpha') {
				items = [...items].sort((a: any, b: any) =>
					b.label.localeCompare(a.label)
				);
			} else if (sort === 'value-asc') {
				items = [...items].sort((a: any, b: any) => {
					const aVal = a.data?.[0]?.value ?? 0;
					const bVal = b.data?.[0]?.value ?? 0;
					return aVal - bVal;
				});
			} else if (sort === 'value-desc') {
				items = [...items].sort((a: any, b: any) => {
					const aVal = a.data?.[0]?.value ?? 0;
					const bVal = b.data?.[0]?.value ?? 0;
					return bVal - aVal;
				});
			}
		}
		return items;
	}, [dataSeries, search, sort, showSearch, showFilter]);

	return (
		<div className={className}>
			{(showSearch || showFilter) && (
				<div className={styles.filter}>
					{showSearch && (
						<>
							<label
								htmlFor='chart-filter-search'
								className='sr-only'
							>
								Search legend items
							</label>
							<input
								id='chart-filter-search'
								className={styles.filter__search}
								type='search'
								placeholder='Search...'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								aria-label='Search legend items'
							/>
						</>
					)}
					{showFilter && (
						<>
							<label
								htmlFor='chart-filter-sort'
								className='sr-only'
							>
								Sort legend items
							</label>
							<select
								id='chart-filter-sort'
								className={styles.filter__item}
								value={sort}
								onChange={(e) => setSort(e.target.value)}
								aria-label='Sort legend items'
							>
								<option value='alpha'>A-Z</option>
								<option value='reverse-alpha'>Z-A</option>
								<option value='value-asc'>Value Asc</option>
								<option value='value-desc'>
									Value Desc
								</option>
							</select>
						</>
					)}
				</div>
			)}
			<Card
				// ...existing Card props...
				{...cardProps}
				size={size}
				variant={variant}
				className={clsx(styles.legend, cardProps.className)}
			>
				<ul className={styles.legend__items}>
					{filteredSeries.map((series: any) => (
						<li
							key={series.id}
							className={clsx(
								styles.legend__item,
								selectedSeries === series.id &&
									styles['legend__item--selected']
							)}
							tabIndex={0}
							role='button'
							aria-pressed={selectedSeries === series.id}
							onClick={() =>
								onSelectSeries && onSelectSeries(series.id)
							}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									onSelectSeries &&
										onSelectSeries(series.id);
								}
							}}
						>
							<span
								className={styles.legend__marker}
								style={{ backgroundColor: series.color }}
								aria-hidden='true'
							/>
							<span className={styles.legend__label}>
								{series.label}
							</span>
							{/* Optionally show value/icon here */}
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
};

const Chart = forwardRef<HTMLDivElement, ChartProps>(
	(props, ref) => {
		const {
			showLegend = true,
			showFilter = false,
			showSearch = false,
			kind,
			chartId,
			children,
			className,
			dataSeries = [],
			variant = 'default',
			position,
			orientation,
			showIcons,
			showValues,
			interactive,
			followCursor,
			showArrow,
			multiValue,
			allowMultiSelect,
			showSelectAll,
			searchable,
			spacing = 'normal',
			size = 'medium',
			onSeriesToggle,
			onFilterChange,
			onTooltipShow,
			onTooltipHide,
			chartType = 'kpi',
			color,
			scorecardIcon,
			deltaUpIcon,
			deltaDownIcon,
			widgetSize,
			legendOrientation = 'horizontal',
			...restProps
		} = props;

		// Track selected series index for KPI/main widget
		const [selectedSeries, setSelectedSeries] = useState(0);
		const handleSelectSeries = (idx: number) =>
			setSelectedSeries(idx);
		const WidgetComponent =
			widgetMap[chartType] || KpiWidget;
		const widgetData =
			dataSeries && dataSeries.length > 0 ?
				[dataSeries[selectedSeries]]
			:	[];

		// Legend rendering
		const renderLegend = () => {
			if (!props.dataSeries || !props.dataSeries.length)
				return null;
			return (
				<ChartLegend
					dataSeries={props.dataSeries}
					legendOrientation={props.legendOrientation}
					size={props.size}
					variant={props.variant}
					{...props}
				/>
			);
		};

		return (
			<div
				ref={ref}
				className={clsx(
					'chart',
					`chart--${variant}`,
					`chart--${size}`,
					legendOrientation === 'vertical' &&
						'chart--legend-vertical',
					showFilter && 'chart--with-filters',
					className
				)}
				data-chart-type={chartType}
				{...restProps}
			>
				{WidgetComponent && (
					<WidgetComponent
						dataSeries={widgetData}
						styles={styles}
						color={color}
						scorecardIcon={scorecardIcon}
						deltaUpIcon={deltaUpIcon}
						deltaDownIcon={deltaDownIcon}
						widgetSize={size}
						size={size}
						variant={variant}
					/>
				)}
				{showLegend &&
					dataSeries &&
					dataSeries.length > 0 && (
						<ChartLegend
							dataSeries={dataSeries}
							legendOrientation={legendOrientation}
							size={size}
							variant={variant}
							selectedSeries={selectedSeries}
							onSelectSeries={handleSelectSeries}
							showFilter={showFilter}
							showSearch={showSearch}
							{...restProps}
						/>
					)}
				{children}
			</div>
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
