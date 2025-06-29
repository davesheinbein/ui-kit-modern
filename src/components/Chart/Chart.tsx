import React, {
	useMemo,
	useState,
	forwardRef,
} from 'react';
import clsx from 'clsx';
import { Card } from '../Card';
import {
	getPrimaryValue,
	getPrimaryLabel,
	getPrimaryDelta,
	getPrimaryStatus,
	getLeaderboardEntries,
} from './chartHelpers';
import {
	ChartKind,
	ChartType,
	ChartVariant,
	ChartDataSeries,
} from './configurations';
import { Wrapper } from '../Wrappers';
import { Dropdown } from '../Dropdown/Dropdown';
import { Button } from '../Button';
import styles from './chart.module.scss';
import Input from '../Inputs/Input';

function renderFields(
	fields: Array<{ className: string; value: any }>
) {
	return fields.map((f, i) => (
		<Wrapper
			key={i}
			className={f.className}
			style={{
				wordBreak: 'break-word',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			}}
		>
			{f.value}
		</Wrapper>
	));
}

// BaseWidget for Card + .widgetContent + fields
const BaseWidget = ({
	cardClass,
	fields,
	styles,
	variant,
	size,
	orientation,
	color,
	cardProps = {},
	ariaLabel,
	extraContent,
}: {
	cardClass: string;
	fields: Array<{ className: string; value: any }>;
	styles: any;
	variant: any;
	size: any;
	orientation?: any;
	color?: any;
	cardProps?: any;
	ariaLabel: string;
	extraContent?: React.ReactNode;
}) => (
	<Card
		className={clsx(cardClass, `card-size-${size}`)}
		variant={variant}
		size={size}
		orientation={orientation}
		style={{
			'--chart-accent': color,
			'minWidth': 0,
			'minHeight': 0,
			...(cardProps?.style || {}),
		}}
		role='group'
		aria-label={ariaLabel}
		{...cardProps}
	>
		<Wrapper className={styles.widgetContent}>
			{renderFields(fields)}
			{extraContent}
		</Wrapper>
	</Card>
);

// BaseWidgetWithSVG for SVG+content widgets
const BaseWidgetWithSVG = ({
	cardClass,
	svg,
	fields,
	styles,
	variant,
	size,
	orientation,
	color,
	cardProps = {},
	ariaLabel,
}: {
	cardClass: string;
	svg: React.ReactNode;
	fields: Array<{ className: string; value: any }>;
	styles: any;
	variant: any;
	size: any;
	orientation?: any;
	color?: any;
	cardProps?: any;
	ariaLabel: string;
}) => (
	<Card
		className={clsx(cardClass, `card-size-${size}`)}
		variant={variant}
		size={size}
		style={{
			'--chart-accent': color,
			'minWidth': 0,
			'minHeight': 0,
			...(cardProps?.style || {}),
		}}
		role='group'
		aria-label={ariaLabel}
		{...cardProps}
	>
		{svg}
		<Wrapper className={styles.widgetContent}>
			{renderFields(fields)}
		</Wrapper>
	</Card>
);

// Widget config map
const widgetConfig = {
	kpi: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.kpiWidget,
					styles[`kpiWidget--${size}`],
					styles[`kpiWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.kpiValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.kpiLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel={`KPI: ${getPrimaryLabel(dataSeries)}`}
			/>
		);
	},
	scorecard: (props: any) => {
		const {
			dataSeries,
			styles,
			scorecardIcon,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.scorecardWidget,
					styles[`scorecardWidget--${size}`],
					styles[`scorecardWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.scorecardValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.scorecardLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Scorecard Widget'
				extraContent={
					scorecardIcon ?
						<span className={styles.scorecardIcon}>
							{scorecardIcon}
						</span>
					:	undefined
				}
			/>
		);
	},
	progress: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.progressWidget,
					styles[`progressWidget--${size}`],
					styles[`progressWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.progressValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.progressLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Progress Widget'
			/>
		);
	},
	gauge: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.gaugeWidget,
					styles[`gaugeWidget--${size}`],
					styles[`gaugeWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.gaugeValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.gaugeLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Gauge Widget'
			/>
		);
	},
	delta: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		const delta = getPrimaryDelta(dataSeries);
		return (
			<BaseWidget
				cardClass={clsx(
					styles.deltaWidget,
					styles[`deltaWidget--${size}`],
					styles[`deltaWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.deltaValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.deltaLabel,
						value: getPrimaryLabel(dataSeries),
					},
					{ className: styles.deltaDelta, value: delta },
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Delta Widget'
			/>
		);
	},
	circularProgress: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		const value = getPrimaryValue(dataSeries);
		const label = getPrimaryLabel(dataSeries);
		const radius = 24;
		const stroke = 8;
		const normalizedRadius = radius - stroke / 2;
		const circumference = 2 * Math.PI * normalizedRadius;
		const percent = Math.max(0, Math.min(100, value));
		const offset =
			circumference - (percent / 100) * circumference;
		return (
			<BaseWidgetWithSVG
				cardClass={clsx(
					styles.circularProgressWidget,
					styles[`circularProgressWidget--${size}`],
					styles[`circularProgressWidget--${variant}`]
				)}
				svg={
					<svg
						width={radius * 2}
						height={radius * 2}
						viewBox={`0 0 ${radius * 2} ${radius * 2}`}
						aria-label='Circular Progress'
					>
						<circle
							cx={radius}
							cy={radius}
							r={normalizedRadius}
							fill='none'
							stroke='var(--color-gray-200)'
							strokeWidth={stroke}
						/>
						<circle
							cx={radius}
							cy={radius}
							r={normalizedRadius}
							fill='none'
							stroke='var(--chart-accent)'
							strokeWidth={stroke}
							strokeDasharray={circumference}
							strokeDashoffset={offset}
							strokeLinecap='round'
						/>
					</svg>
				}
				fields={[
					{
						className: styles.circularValue,
						value: value + '%',
					},
					{ className: styles.circularLabel, value: label },
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel={`Circular Progress: ${label}`}
			/>
		);
	},
	status: (props: any) => {
		const {
			dataSeries,
			styles,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		const status = getPrimaryStatus(dataSeries);
		return (
			<BaseWidget
				cardClass={clsx(
					styles.statusWidget,
					styles[`statusWidget--${size}`],
					styles[`statusWidget--${variant}`]
				)}
				fields={[
					{ className: styles.statusValue, value: status },
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				cardProps={cardProps}
				ariaLabel='Status Widget'
			/>
		);
	},
	leaderboard: (props: any) => {
		const {
			dataSeries,
			styles,
			size,
			variant,
			...cardProps
		} = props;
		const entries = getLeaderboardEntries(dataSeries);
		return (
			<Card
				className={clsx(
					styles.leaderboardWidget,
					styles[`leaderboardWidget--${size}`],
					styles[`leaderboardWidget--${variant}`],
					`card-size-${size}`
				)}
				variant={variant}
				size={size}
				style={{
					minWidth: 0,
					minHeight: 0,
					...(cardProps?.style || {}),
				}}
				role='group'
				aria-label='Leaderboard Widget'
				{...cardProps}
			>
				<ul
					className={styles.leaderboardList}
					style={{ minWidth: 0, minHeight: 0 }}
				>
					{entries.map((entry: any, i: number) => (
						<li
							key={i}
							className={styles.leaderboardEntry}
							style={{
								wordBreak: 'break-word',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
						>
							<span className={styles.leaderboardName}>
								{entry.name}
							</span>
							<span className={styles.leaderboardValue}>
								{entry.value}
							</span>
						</li>
					))}
				</ul>
			</Card>
		);
	},
};

// Single widget renderer (type-safe)
type WidgetType = keyof typeof widgetConfig;
function renderWidget(type: WidgetType, props: any) {
	return widgetConfig[type] ?
			widgetConfig[type](props)
		:	widgetConfig['kpi'](props);
}

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

	const legendClass = [
		styles.legend,
		legendOrientation === 'grid' ? styles.grid : '',
		className,
	]
		.filter(Boolean)
		.join(' ');

	const legendListClass = clsx(
		styles.legend,
		styles.legend__items,
		legendOrientation === 'grid' && styles.grid,
		legendOrientation === 'horizontal' && styles.horizontal,
		legendOrientation === 'vertical' && styles.vertical,
		`legend ${legendOrientation}` // Add raw class for SCSS targeting
	);

	return (
		<Wrapper
			className={styles.legend}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
			}}
		>
			{(showSearch || showFilter) && (
				<Wrapper
					className={styles.filter}
					style={{ marginBottom: 8 }}
				>
					{showSearch && (
						<>
							<label
								htmlFor='chart-filter-search'
								className='sr-only'
							>
								Search legend items
							</label>
							<Input
								kind='search'
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
							<Dropdown
								id='chart-filter-sort'
								className={styles.filter__item}
								value={sort}
								onChange={(
									e: React.ChangeEvent<HTMLSelectElement>
								) => setSort(e.target.value)}
								aria-label='Sort legend items'
								data={[
									{ label: 'A-Z', value: 'alpha' },
									{ label: 'Z-A', value: 'reverse-alpha' },
									{
										label: 'Value Asc',
										value: 'value-asc',
									},
									{
										label: 'Value Desc',
										value: 'value-desc',
									},
								]}
							/>
						</>
					)}
				</Wrapper>
			)}
			<Card
				className={clsx(
					styles.baseCard,
					cardProps.className,
					`card-size-${size}`
				)}
				{...cardProps}
				size={size}
				variant={variant}
				shape={
					legendOrientation === 'vertical' ? 'vertical-rect'
					:	cardProps.shape
				}
			>
				<ul
					className={legendListClass}
					style={
						legendOrientation === 'vertical' ?
							{ maxHeight: 240, overflowY: 'auto' }
						:	undefined
					}
				>
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
		</Wrapper>
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
		const widgetData =
			dataSeries && dataSeries.length > 0 ?
				[dataSeries[selectedSeries]]
			:	[];

		return (
			<Wrapper
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
				style={{
					backgroundColor: props.backgroundColor,
					borderColor: props.borderColor,
					borderWidth: props.borderWidth,
					borderRadius: props.borderRadius,
					boxShadow: props.boxShadow,
					padding: props.padding,
					margin: props.margin,
					width: props.width,
					height: props.height,
					minWidth: props.minWidth,
					minHeight: props.minHeight,
					maxWidth: props.maxWidth,
					maxHeight: props.maxHeight,
					fontSize: props.fontSize,
					fontFamily: props.fontFamily,
					color: props.color,
					...(props.style || {}),
				}}
				w={props.w}
				h={props.h}
				minW={props.minW}
				minH={props.minH}
				maxW={props.maxW}
				maxH={props.maxH}
				{...restProps}
			>
				{renderWidget(chartType as WidgetType, {
					dataSeries: widgetData,
					styles,
					color,
					scorecardIcon,
					deltaUpIcon,
					deltaDownIcon,
					widgetSize: size,
					size,
					variant,
					orientation,
					...restProps,
				})}
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
			</Wrapper>
		);
	}
);

Chart.displayName = 'Chart';
export default React.memo(Chart);

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
export interface ChartProps {
	/** Chart kind (legend, tooltip, controls, etc.) */
	kind?: ChartKind;
	/** Type of chart visualization */
	chartType?: ChartType;
	/** Array of data series for the chart */
	dataSeries?: ChartDataSeries[];
	/** Visual style or layout variant */
	variant?: ChartVariant;
	/** Size of the chart */
	size?: 'small' | 'medium' | 'large';
	/** Spacing between chart elements */
	spacing?: 'tight' | 'normal' | 'loose';
	/** Orientation of the chart */
	orientation?: 'horizontal' | 'vertical';
	/** Show/hide legend */
	showLegend?: boolean;
	/** Show/hide tooltip */
	showTooltip?: boolean;
	/** Show/hide controls */
	showControls?: boolean;
	/** Enable/disable interactivity */
	interactive?: boolean;
	/** Callback for series click */
	onSeriesClick?: (series: ChartDataSeries) => void;
	/** Callback for legend click */
	onLegendClick?: (series: ChartDataSeries) => void;
	/** Callback for filter changes */
	onFilterChange?: (filters: any[]) => void;
	/** Callback for export actions */
	onExport?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
	/** Additional CSS class names */
	className?: string;
	/** Inline style overrides */
	style?: React.CSSProperties;

	// --- Style-based props ---
	/** Chart background color */
	backgroundColor?: string;
	/** Chart border color */
	borderColor?: string;
	/** Chart border width */
	borderWidth?: number | string;
	/** Chart border radius */
	borderRadius?: number | string;
	/** Chart box shadow */
	boxShadow?: string;
	/** Chart padding */
	padding?: number | string;
	/** Chart margin */
	margin?: number | string;
	/** Chart width (CSS, e.g. '100%', '300px') */
	width?: number | string;
	/** Chart height (CSS, e.g. '100%', '200px') */
	height?: number | string;
	/** Chart min width */
	minWidth?: number | string;
	/** Chart min height */
	minHeight?: number | string;
	/** Chart max width */
	maxWidth?: number | string;
	/** Chart max height */
	maxHeight?: number | string;
	/** Short-form width (passed to Wrapper as w) */
	w?: string | number;
	/** Short-form height (passed to Wrapper as h) */
	h?: string | number;
	/** Short-form min width (passed to Wrapper as minW) */
	minW?: string | number;
	/** Short-form min height (passed to Wrapper as minH) */
	minH?: string | number;
	/** Short-form max width (passed to Wrapper as maxW) */
	maxW?: string | number;
	/** Short-form max height (passed to Wrapper as maxH) */
	maxH?: string | number;
	/** Chart font size */
	fontSize?: number | string;
	/** Chart font family */
	fontFamily?: string;
	/** Chart text color */
	color?: string;
	/** Legend position */
	legendPosition?: 'top' | 'bottom' | 'left' | 'right';

	/** All other native div props */
	[key: string]: any;
}
