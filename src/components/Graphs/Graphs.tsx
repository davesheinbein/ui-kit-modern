import React, { forwardRef, useState } from 'react';
import {
	BarChart,
	Bar,
	LineChart,
	Line,
	AreaChart,
	Area,
	PieChart,
	Pie,
	Cell,
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ScatterChart,
	Scatter,
	ComposedChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip as RechartsTooltip,
	Legend as RechartsLegend,
	ResponsiveContainer,
} from 'recharts';
import styles from './Graphs.module.scss';
import {
	COLOR_SCHEMES,
	ExtendedGraphKind,
	GraphConfiguration,
} from './configurations';

// === DRY HELPERS ===
const ChartGrid = ({ showGrid }: { showGrid?: boolean }) =>
	showGrid ? <CartesianGrid strokeDasharray='3 3' /> : null;
const ChartLegend = ({
	showLegend,
}: {
	showLegend?: boolean;
}) => (showLegend ? <RechartsLegend /> : null);
const ChartTooltip = ({
	showTooltip,
}: {
	showTooltip?: boolean;
}) => (showTooltip ? <RechartsTooltip /> : null);
const ChartXAxis = ({
	showAxes,
	dataKey,
	type,
}: {
	showAxes?: boolean;
	dataKey?: string;
	type?: 'number' | 'category';
}) =>
	showAxes ? <XAxis dataKey={dataKey} type={type} /> : null;
const ChartYAxis = ({
	showAxes,
	type,
}: {
	showAxes?: boolean;
	type?: 'number' | 'category';
}) => (showAxes ? <YAxis type={type} /> : null);

// --- Custom Tooltip Component ---
const CustomTooltip = ({
	active,
	payload,
	label,
	labelKey,
}: any) => {
	if (!active || !payload || !payload.length) return null;
	return (
		<div className={styles.graphsCustomTooltip}>
			<div className={styles.graphsTooltipContent}>
				{labelKey && label && (
					<div className={styles.graphsTooltipTitle}>
						{labelKey}: <b>{label}</b>
					</div>
				)}
				{payload.map((entry: any, idx: number) => (
					<div
						key={idx}
						className={styles.graphsTooltipItem}
					>
						<span
							className={styles.graphsTooltipColor}
							style={{ background: entry.color }}
						/>
						{entry.name}: <b>{entry.value}</b>
					</div>
				))}
			</div>
		</div>
	);
};

// --- Custom Pie Label Renderer ---
const renderPieLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
	name,
	value,
}: any) => {
	const RADIAN = Math.PI / 180;
	const radius =
		innerRadius + (outerRadius - innerRadius) * 0.6;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text
			x={x}
			y={y}
			fill='#222'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
			className={styles.graphsPieLabel}
		>
			{name}: {value}
		</text>
	);
};

// --- Custom Radar Axis Tick Renderer ---
const RadarAxisTick = (props: any) => {
	const { payload, x, y, textAnchor, index, cx, cy } =
		props;
	const label = payload && payload.value;
	// Only rotate for these two labels
	const isLeft = label === 'Perfect Games';
	const isRight = label === 'Red Herrings';
	if (!isLeft && !isRight) {
		return (
			<g transform={`translate(${x},${y})`}>
				<text
					textAnchor={textAnchor}
					className={styles.graphs__radarAxisTick}
				>
					{label}
				</text>
			</g>
		);
	}
	// Calculate angle so bottom faces center
	const angle = (() => {
		if (isLeft) return -90; // left side, rotate up
		if (isRight) return 90; // right side, rotate down
		return 0;
	})();
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				textAnchor='middle'
				className={styles.graphs__radarAxisTick}
				transform={`rotate(${angle})`}
			>
				{label}
			</text>
		</g>
	);
};

// Allow advanced chart-specific props in configuration
type ChartSpecificConfig = {
	barProps?: Record<string, any>;
	areaProps?: Record<string, any>;
	pieProps?: Record<string, any>;
	radarProps?: Record<string, any>;
	scatterProps?: Record<string, any>;
	series?: Array<{
		dataKey: string;
		name?: string;
		props?: Record<string, any>;
	}>;
	lineKey?: string;
};

/**
 * Props for the Graph component. All features and configuration are exposed via props.
 *
 * @property kind - Graph kind (e.g., 'bar', 'line', 'pie', etc.)
 * @property data - Array of data points for the graph
 * @property dataKey - Key for the primary data value
 * @property labelKey - Key for the label value
 * @property title - Title for the graph
 * @property subtitle - Subtitle for the graph
 * @property xAxisLabel - Label for the X axis
 * @property yAxisLabel - Label for the Y axis
 * @property label - Consolidated label for legend and tooltip
 * @property emptyLabel - Label to show when data is empty
 * @property colors - Array of colors for the graph
 * @property colorScheme - Named color scheme
 * @property className - Additional CSS class names
 * @property style - Inline style overrides
 * @property width - Width of the graph
 * @property height - Height of the graph
 * @property margin - Margin for the graph container
 * @property showGrid - Show/hide grid lines
 * @property showAxes - Show/hide axes
 * @property showLegend - Show/hide legend
 * @property showTooltip - Show/hide tooltip
 * @property animation - Animation configuration
 * @property onDataPointClick - Callback for data point click
 * @property onLegendClick - Callback for legend click
 * @property onExport - Callback for export actions
 * @property ...rest - All other native div props
 */
export interface GraphProps {
	/** Graph kind (bar, line, pie, etc.) */
	kind: ExtendedGraphKind;
	/** Array of data points for the graph */
	data: any[];
	/** Key for the primary data value */
	dataKey?: string;
	/** Key for the label value */
	labelKey?: string;
	/** Title for the graph */
	title?: string;
	/** Subtitle for the graph */
	subtitle?: string;
	/** Label for the X axis */
	xAxisLabel?: string;
	/** Label for the Y axis */
	yAxisLabel?: string;
	/** Consolidated label for legend and tooltip */
	label?: string;
	/** Label to show when data is empty */
	emptyLabel?: string;
	/** Array of colors for the graph */
	colors?: string[];
	/** Named color scheme */
	colorScheme?: keyof typeof COLOR_SCHEMES;
	/** Additional CSS class names */
	className?: string;
	/** Inline style overrides */
	style?: React.CSSProperties;
	/** Width of the graph */
	width?: number | string;
	/** Height of the graph */
	height?: number;
	/** Margin for the graph container */
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
	/** Show/hide grid lines */
	showGrid?: boolean;
	/** Show/hide axes */
	showAxes?: boolean;
	/** Show/hide legend */
	showLegend?: boolean;
	/** Show/hide tooltip */
	showTooltip?: boolean;
	/** Animation configuration */
	animation?: {
		duration?: number;
		easing?: string;
	};
	/** Callback for data point click */
	onDataPointClick?: (data: any) => void;
	/** Callback for legend click */
	onLegendClick?: (item: any) => void;
	/** Callback for export actions */
	onExport?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
	/** All other native div props */
	[key: string]: any;
}

// Fix colorScheme typing
const getColorScheme = (
	colorScheme: keyof typeof COLOR_SCHEMES
) =>
	Array.isArray(COLOR_SCHEMES[colorScheme]) ?
		[...COLOR_SCHEMES[colorScheme]]
	:	[];

const Graph = forwardRef<HTMLDivElement, GraphProps>(
	(props, ref) => {
		const {
			kind,
			data,
			dataKey = 'value',
			labelKey = 'name',
			title,
			subtitle,
			xAxisLabel,
			yAxisLabel,
			label, // Use consolidated label
			emptyLabel = 'No data available',
			colors,
			colorScheme = 'default',
			className = '',
			style,
			width = '100%',
			height = 320,
			showGrid = true,
			showAxes = true,
			showLegend = false,
			showTooltip = true,
			showLabels = false,
			showValues = false,
			animationDuration = 400,
			animationEnabled = true,
			configuration = {},
			onClick,
			onHover,
			ariaLabel,
			ariaDescription,
			margin,
			backgroundColor = 'transparent',
			...rest
		} = props;

		const colorList =
			Array.isArray(colors) ?
				[...colors]
			:	getColorScheme(colorScheme);

		const defaultMargin = {
			top: 24,
			right: 24,
			bottom: 24,
			left: 24,
		};
		const minSize = 120;

		let chart = null;

		if (!data || data.length === 0) {
			chart = (
				<div className={styles.graphs__emptyLabel}>
					{emptyLabel}
				</div>
			);
		} else {
			switch (kind) {
				case 'bar':
				case 'bar-stacked':
				case 'bar-grouped':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<BarChart
								data={data}
								margin={margin || defaultMargin}
							>
								<ChartGrid showGrid={showGrid} />
								{xAxisLabel ?
									<XAxis
										dataKey={labelKey}
										type='category'
										label={{
											value: xAxisLabel,
											position: 'insideBottom',
											offset: -5,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartXAxis
										showAxes={showAxes}
										dataKey={labelKey}
										type='category'
									/>
								}
								{yAxisLabel ?
									<YAxis
										type='number'
										label={{
											value: yAxisLabel,
											angle: -90,
											position: 'insideLeft',
											offset: 10,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartYAxis
										showAxes={showAxes}
										type='number'
									/>
								}
								<ChartTooltip showTooltip={false} />
								{showTooltip && (
									<RechartsTooltip
										content={(props) => (
											<CustomTooltip
												{...props}
												labelKey={labelKey}
											/>
										)}
									/>
								)}
								<ChartLegend showLegend={showLegend} />
								<Bar
									dataKey={dataKey}
									fill={colorList[0]}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
									{...configuration?.barProps}
								>
									{data.map((entry: any, idx: number) => (
										<Cell
											key={`cell-${idx}`}
											fill={
												colorList[idx % colorList.length]
											}
										/>
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
					);
					break;
				case 'line':
				case 'line-smooth':
				case 'line-multi':
				case 'line-stepped':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<LineChart
								data={data}
								margin={margin || defaultMargin}
							>
								<ChartGrid showGrid={showGrid} />
								{xAxisLabel ?
									<XAxis
										dataKey={labelKey}
										type='category'
										label={{
											value: xAxisLabel,
											position: 'insideBottom',
											offset: -5,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartXAxis
										showAxes={showAxes}
										dataKey={labelKey}
										type='category'
									/>
								}
								{yAxisLabel ?
									<YAxis
										type='number'
										label={{
											value: yAxisLabel,
											angle: -90,
											position: 'insideLeft',
											offset: 10,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartYAxis
										showAxes={showAxes}
										type='number'
									/>
								}
								<ChartTooltip showTooltip={false} />
								{showTooltip && (
									<RechartsTooltip
										content={(props) => (
											<CustomTooltip
												{...props}
												labelKey={labelKey}
											/>
										)}
									/>
								)}
								<ChartLegend showLegend={showLegend} />
								{configuration?.series ?
									configuration.series.map(
										(series: any, idx: number) => (
											<Line
												key={series.dataKey}
												type={
													kind === 'line-smooth' ?
														'monotone'
													: kind === 'line-stepped' ?
														'step'
													:	'linear'
												}
												dataKey={series.dataKey}
												stroke={
													colorList[idx % colorList.length]
												}
												strokeWidth={2}
												dot={showLabels}
												animationDuration={
													animationEnabled ?
														animationDuration
													:	0
												}
												{...series.props}
											/>
										)
									)
								:	<Line
										type={
											kind === 'line-smooth' ? 'monotone'
											: kind === 'line-stepped' ?
												'step'
											:	'linear'
										}
										dataKey={dataKey}
										stroke={colorList[0]}
										strokeWidth={2}
										dot={showLabels}
										animationDuration={
											animationEnabled ?
												animationDuration
											:	0
										}
									/>
								}
							</LineChart>
						</ResponsiveContainer>
					);
					break;
				case 'area':
				case 'area-stacked':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<AreaChart
								data={data}
								margin={margin || defaultMargin}
							>
								<ChartGrid showGrid={showGrid} />
								{xAxisLabel ?
									<XAxis
										dataKey={labelKey}
										type='category'
										label={{
											value: xAxisLabel,
											position: 'insideBottom',
											offset: -5,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartXAxis
										showAxes={showAxes}
										dataKey={labelKey}
										type='category'
									/>
								}
								{yAxisLabel ?
									<YAxis
										type='number'
										label={{
											value: yAxisLabel,
											angle: -90,
											position: 'insideLeft',
											offset: 10,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartYAxis
										showAxes={showAxes}
										type='number'
									/>
								}
								<ChartTooltip showTooltip={false} />
								{showTooltip && (
									<RechartsTooltip
										content={(props) => (
											<CustomTooltip
												{...props}
												labelKey={labelKey}
											/>
										)}
									/>
								)}
								<ChartLegend showLegend={showLegend} />
								<Area
									type='monotone'
									dataKey={dataKey}
									stroke={colorList[0]}
									fill={colorList[0]}
									fillOpacity={0.18}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
									{...configuration?.areaProps}
								/>
							</AreaChart>
						</ResponsiveContainer>
					);
					break;
				case 'pie':
				case 'doughnut':
				case 'pie-with-labels':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<PieChart>
								<Pie
									data={data}
									dataKey={dataKey}
									nameKey={labelKey}
									cx='50%'
									cy='50%'
									outerRadius={
										kind === 'doughnut' ? '70%' : '90%'
									}
									innerRadius={
										kind === 'doughnut' ? '50%' : 0
									}
									label={
										showLabels ? renderPieLabel : false
									}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
									{...configuration?.pieProps}
								>
									{data.map((entry, idx) => (
										<Cell
											key={`cell-${idx}`}
											fill={
												colorList[idx % colorList.length]
											}
										/>
									))}
								</Pie>
								{showTooltip && (
									<RechartsTooltip
										content={(props) => (
											<CustomTooltip
												{...props}
												labelKey={labelKey}
											/>
										)}
										isAnimationActive={false}
									/>
								)}
								<ChartLegend showLegend={showLegend} />
							</PieChart>
						</ResponsiveContainer>
					);
					break;
				case 'radar':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={360} // Increased minWidth for radar
						>
							<RadarChart
								data={data}
								cx='50%'
								cy='50%'
								outerRadius='80%'
								margin={margin || defaultMargin}
							>
								<PolarGrid />
								<PolarAngleAxis
									dataKey={labelKey}
									tick={RadarAxisTick}
								/>
								<PolarRadiusAxis />
								<Radar
									name={title || ''}
									dataKey={dataKey}
									stroke={colorList[0]}
									fill={colorList[0]}
									fillOpacity={0.18}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
									{...configuration?.radarProps}
								/>
								<ChartTooltip showTooltip={showTooltip} />
								<ChartLegend showLegend={showLegend} />
							</RadarChart>
						</ResponsiveContainer>
					);
					break;
				case 'scatter':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<ScatterChart
								margin={margin || defaultMargin}
							>
								<ChartGrid showGrid={showGrid} />
								{xAxisLabel ?
									<XAxis
										dataKey={labelKey}
										type='category'
										label={{
											value: xAxisLabel,
											position: 'insideBottom',
											offset: -5,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartXAxis
										showAxes={showAxes}
										dataKey={labelKey}
										type='category'
									/>
								}
								{yAxisLabel ?
									<YAxis
										type='number'
										label={{
											value: yAxisLabel,
											angle: -90,
											position: 'insideLeft',
											offset: 10,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartYAxis
										showAxes={showAxes}
										type='number'
									/>
								}
								<ChartTooltip showTooltip={showTooltip} />
								<ChartLegend showLegend={showLegend} />
								<Scatter
									data={data}
									fill={colorList[0]}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
									{...configuration?.scatterProps}
								/>
							</ScatterChart>
						</ResponsiveContainer>
					);
					break;
				case 'composed-bar-line':
					chart = (
						<ResponsiveContainer
							width='100%'
							height={height || 320}
							minHeight={minSize}
							minWidth={minSize}
						>
							<ComposedChart
								data={data}
								margin={margin || defaultMargin}
							>
								<ChartGrid showGrid={showGrid} />
								{xAxisLabel ?
									<XAxis
										dataKey={labelKey}
										type='category'
										label={{
											value: xAxisLabel,
											position: 'insideBottom',
											offset: -5,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartXAxis
										showAxes={showAxes}
										dataKey={labelKey}
										type='category'
									/>
								}
								{yAxisLabel ?
									<YAxis
										type='number'
										label={{
											value: yAxisLabel,
											angle: -90,
											position: 'insideLeft',
											offset: 10,
											className: styles.graphsAxisLabel,
										}}
									/>
								:	<ChartYAxis
										showAxes={showAxes}
										type='number'
									/>
								}
								<ChartTooltip showTooltip={showTooltip} />
								<ChartLegend showLegend={showLegend} />
								<Bar
									dataKey={dataKey}
									fill={colorList[0]}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
								/>
								<Line
									type='monotone'
									dataKey={
										configuration?.lineKey || dataKey
									}
									stroke={colorList[1] || colorList[0]}
									strokeWidth={2}
									dot={showLabels}
									animationDuration={
										animationEnabled ? animationDuration : 0
									}
								/>
							</ComposedChart>
						</ResponsiveContainer>
					);
					break;
				default:
					chart = (
						<div className={styles.graphs__unsupportedKind}>
							Unsupported graph kind: <b>{kind}</b>
						</div>
					);
			}
		}

		return (
			<div
				ref={ref}
				className={[
					styles.graphsContainer,
					styles[`graphsContainer--${colorScheme}`],
					className,
				]
					.filter(Boolean)
					.join(' ')}
				style={{
					...style,
					background: backgroundColor || style?.background,
				}}
				aria-label={ariaLabel || title}
				aria-description={ariaDescription}
			>
				{title && (
					<div className={styles.graphsTitle}>{title}</div>
				)}
				{subtitle && (
					<div className={styles.graphsSubtitle}>
						{subtitle}
					</div>
				)}
				{label && (
					<div className={styles.graphsLegendLabel}>
						{label}
					</div>
				)}
				<div
					className={styles.graphsChartWrapper}
					style={{
						width:
							typeof width === 'number' ?
								`${width}px`
							:	width,
						height: height ? `${height}px` : undefined,
					}}
				>
					{chart}
				</div>
			</div>
		);
	}
);

Graph.displayName = 'Graph';

// --- Interactive Legend for Multi-Series ---
const InteractiveLegend = ({
	series,
	activeKeys,
	onToggle,
	colorList,
}: {
	series: { dataKey: string; name?: string }[];
	activeKeys: string[];
	onToggle: (key: string) => void;
	colorList: string[];
}) => (
	<div className={styles.graphsInteractiveLegend}>
		{series.map((s, idx) => (
			<button
				key={s.dataKey}
				type='button'
				className={[
					styles.graphsLegendItem,
					activeKeys.includes(s.dataKey) ?
						styles.graphsLegendItemActive
					:	styles.graphsLegendItemInactive,
				]
					.filter(Boolean)
					.join(' ')}
				onClick={() => onToggle(s.dataKey)}
				style={{ color: colorList[idx % colorList.length] }}
			>
				<span
					className={styles.graphsLegendColor}
					style={{
						background: colorList[idx % colorList.length],
					}}
				/>
				{s.name || s.dataKey}
			</button>
		))}
	</div>
);

export type GraphKind = ExtendedGraphKind;
export default Graph;
