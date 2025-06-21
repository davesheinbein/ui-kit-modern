import React, { forwardRef } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	PieChart,
	Pie,
	Cell,
	Legend,
	LineChart,
	Line,
	AreaChart,
	Area,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	ComposedChart,
	ScatterChart,
	Scatter,
	Treemap,
	FunnelChart,
	Funnel,
	LabelList,
} from 'recharts';
import {
	GRAPH_CONFIGURATIONS,
	ExtendedGraphKind,
	GraphConfiguration,
	createGraphConfig,
	getColorScheme,
} from './configurations';
import styles from './Graphs.module.scss';

// Re-export types for backward compatibility
export type GraphKind = ExtendedGraphKind;

export interface UnifiedGraphProps {
	kind: GraphKind;
	data: any[];

	// Data configuration
	dataKey?: string;
	labelKey?: string;
	valueKey?: string;
	nameKey?: string;

	// Styling overrides
	title?: string;
	colors?: string[];
	colorScheme?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'rainbow'
		| 'monochrome'
		| 'custom';
	className?: string;
	style?: React.CSSProperties;

	// Layout overrides
	width?: number | string;
	height?: number;
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};

	// Feature toggles
	showGrid?: boolean;
	showAxes?: boolean;
	showLegend?: boolean;
	showTooltip?: boolean;
	showLabels?: boolean;
	showValues?: boolean;

	// Animation
	animationDuration?: number;
	animationEnabled?: boolean;

	// Configuration override
	configuration?: Partial<GraphConfiguration>;

	// Event handlers
	onClick?: (data: any, index: number) => void;
	onHover?: (data: any, index: number) => void;

	// Accessibility
	ariaLabel?: string;
	ariaDescription?: string;
}

/**
 * Helper function to render axes based on configuration
 */
const renderAxes = (
	config: GraphConfiguration,
	labelKey: string,
	isVertical = false
) => {
	const axes = [];

	if (config.xAxis?.show !== false) {
		axes.push(
			isVertical ?
				<XAxis
					type='number'
					fontSize={config.xAxis?.fontSize || 12}
					tickLine={config.xAxis?.tickLine !== false}
					axisLine={config.xAxis?.axisLine !== false}
					key='x'
					label={config.xAxis?.label}
				/>
			:	<XAxis
					dataKey={labelKey}
					fontSize={config.xAxis?.fontSize || 12}
					tickLine={config.xAxis?.tickLine !== false}
					axisLine={config.xAxis?.axisLine !== false}
					key='x'
					label={config.xAxis?.label}
				/>
		);
	}

	if (config.yAxis?.show !== false) {
		axes.push(
			isVertical ?
				<YAxis
					dataKey={labelKey}
					type='category'
					fontSize={config.yAxis?.fontSize || 12}
					tickLine={config.yAxis?.tickLine !== false}
					axisLine={config.yAxis?.axisLine !== false}
					key='y'
					label={config.yAxis?.label}
				/>
			:	<YAxis
					fontSize={config.yAxis?.fontSize || 12}
					tickLine={config.yAxis?.tickLine !== false}
					axisLine={config.yAxis?.axisLine !== false}
					key='y'
					label={config.yAxis?.label}
				/>
		);
	}

	return axes;
};

/**
 * Helper function to render common chart elements
 */
const renderCommon = (config: GraphConfiguration) => {
	const elements = [];

	if (config.showGrid !== false) {
		elements.push(
			<CartesianGrid strokeDasharray='3 3' key='grid' />
		);
	}

	if (config.tooltip?.show !== false) {
		elements.push(<Tooltip key='tooltip' />);
	}

	if (config.legend?.show) {
		elements.push(
			<Legend
				key='legend'
				verticalAlign={config.legend.verticalAlign}
				layout={config.legend.layout}
				align={config.legend.align}
			/>
		);
	}

	return elements;
};

/**
 * Main UnifiedGraph component - handles all graph types through configuration
 */
const UnifiedGraph = forwardRef<
	HTMLDivElement,
	UnifiedGraphProps
>(
	(
		{
			kind,
			data,
			dataKey = 'value',
			labelKey = 'name',
			valueKey,
			nameKey,
			title,
			colors,
			colorScheme,
			className = '',
			style = {},
			width = '100%',
			height,
			margin,
			showGrid,
			showAxes,
			showLegend,
			showTooltip,
			showLabels,
			showValues,
			animationDuration,
			animationEnabled,
			configuration = {},
			onClick,
			onHover,
			ariaLabel,
			ariaDescription,
			...props
		},
		ref
	) => {
		// Get base configuration and apply overrides
		const config = createGraphConfig(kind, {
			...configuration,
			colors:
				colors ||
				(colorScheme ?
					getColorScheme(colorScheme)
				:	undefined),
			height: height || configuration.height,
			margin: margin || configuration.margin,
			showGrid:
				showGrid !== undefined ? showGrid : (
					configuration.showGrid
				),
			showAxes:
				showAxes !== undefined ? showAxes : (
					configuration.showAxes
				),
			legend:
				showLegend !== undefined ?
					{ ...configuration.legend, show: showLegend }
				:	configuration.legend,
			tooltip:
				showTooltip !== undefined ?
					{ ...configuration.tooltip, show: showTooltip }
				:	configuration.tooltip,
			showLabels:
				showLabels !== undefined ? showLabels : (
					configuration.showLabels
				),
			showValues:
				showValues !== undefined ? showValues : (
					configuration.showValues
				),
			animation: {
				...configuration.animation,
				enabled:
					animationEnabled !== undefined ?
						animationEnabled
					:	configuration.animation?.enabled,
				duration:
					animationDuration ||
					configuration.animation?.duration,
			},
		});

		// Use the provided keys or fall back to config defaults
		const finalDataKey = valueKey || dataKey;
		const finalLabelKey = nameKey || labelKey;

		// Determine final colors
		const finalColors =
			config.colors || getColorScheme('default');

		// Chart props
		const chartProps = {
			data,
			margin: config.margin || { left: -18, right: 8 },
		};

		// Container style
		const containerStyle = {
			width,
			height: (config.height || 140) + 40,
			margin: '1.2em 0 0.5em 0',
			...style,
		};

		/**
		 * Render the appropriate chart based on shape
		 */
		const renderChart = () => {
			switch (config.shape) {
				case 'bar':
					return (
						<BarChart
							{...chartProps}
							layout={
								kind.includes('horizontal') ? 'vertical' : (
									'horizontal'
								)
							}
						>
							{renderAxes(
								config,
								finalLabelKey,
								kind.includes('horizontal')
							)}
							{renderCommon(config)}
							<Bar
								dataKey={finalDataKey}
								fill={finalColors[0]}
								radius={config.barRadius}
								onClick={onClick}
								onMouseEnter={onHover}
							/>
						</BarChart>
					);

				case 'horizontalBar':
					return (
						<BarChart {...chartProps} layout='vertical'>
							{renderAxes(config, finalLabelKey, true)}
							{renderCommon(config)}
							<Bar
								dataKey={finalDataKey}
								fill={finalColors[0]}
								radius={config.barRadius}
								onClick={onClick}
								onMouseEnter={onHover}
							/>
						</BarChart>
					);

				case 'line':
					return (
						<LineChart {...chartProps}>
							{renderAxes(config, finalLabelKey)}
							{renderCommon(config)}
							<Line
								type={
									config.lineSmooth ? 'monotone' : 'linear'
								}
								dataKey={finalDataKey}
								stroke={finalColors[0]}
								strokeWidth={config.lineWidth || 2}
								dot={{ r: 3 }}
							/>
						</LineChart>
					);

				case 'area':
					return (
						<AreaChart {...chartProps}>
							{renderAxes(config, finalLabelKey)}
							{renderCommon(config)}
							<Area
								type={
									config.lineSmooth ? 'monotone' : 'linear'
								}
								dataKey={finalDataKey}
								stroke={finalColors[0]}
								fill={finalColors[1] || finalColors[0]}
								fillOpacity={config.areaOpacity || 0.5}
							/>
						</AreaChart>
					);

				case 'pie':
					return (
						<PieChart>
							<Pie
								data={data}
								dataKey={finalDataKey}
								nameKey={finalLabelKey}
								cx='50%'
								cy='50%'
								outerRadius={
									config.pieOuterRadius ||
									(config.height || 140) / 2 - 10
								}
								innerRadius={config.pieInnerRadius || 0}
								fill={finalColors[0]}
								label={config.showLabels}
								onClick={onClick}
								onMouseEnter={onHover}
							>
								{data.map((entry, idx) => (
									<Cell
										key={`cell-${idx}`}
										fill={
											finalColors[idx % finalColors.length]
										}
									/>
								))}
								{config.showValues && (
									<LabelList dataKey={finalDataKey} />
								)}
							</Pie>
							{config.tooltip?.show !== false && (
								<Tooltip />
							)}
							{config.legend?.show && <Legend />}
						</PieChart>
					);

				case 'radar':
					return (
						<RadarChart
							cx='50%'
							cy='50%'
							outerRadius={(config.height || 140) / 2 - 10}
							data={data}
						>
							<PolarGrid />
							<PolarAngleAxis dataKey={finalLabelKey} />
							<PolarRadiusAxis />
							<Radar
								name={finalDataKey}
								dataKey={finalDataKey}
								stroke={finalColors[0]}
								fill={finalColors[1] || finalColors[0]}
								fillOpacity={config.areaOpacity || 0.6}
							/>
							{config.legend?.show && <Legend />}
							{config.tooltip?.show !== false && (
								<Tooltip />
							)}
						</RadarChart>
					);

				case 'scatter':
					return (
						<ScatterChart {...chartProps}>
							{renderAxes(config, finalLabelKey)}
							{renderCommon(config)}
							<Scatter
								dataKey={finalDataKey}
								fill={finalColors[0]}
								onClick={onClick}
								onMouseEnter={onHover}
							/>
						</ScatterChart>
					);

				case 'composed':
					return (
						<ComposedChart {...chartProps}>
							{renderAxes(config, finalLabelKey)}
							{renderCommon(config)}
							<Bar
								dataKey={finalDataKey}
								fill={finalColors[0]}
								radius={config.barRadius}
							/>
							<Line
								type='monotone'
								dataKey={finalDataKey}
								stroke={finalColors[1] || finalColors[0]}
								strokeWidth={config.lineWidth || 2}
							/>
						</ComposedChart>
					);

				case 'treemap':
					return (
						<ResponsiveContainer width='100%' height='100%'>
							<Treemap
								data={data}
								dataKey={finalDataKey}
								stroke='#fff'
								fill={finalColors[0]}
							/>
						</ResponsiveContainer>
					);

				case 'funnel':
					return (
						<ResponsiveContainer width='100%' height='100%'>
							<FunnelChart>
								<Funnel
									dataKey={finalDataKey}
									data={data}
									isAnimationActive={
										config.animation?.enabled !== false
									}
								/>
								{config.tooltip?.show !== false && (
									<Tooltip />
								)}
								{config.legend?.show && <Legend />}
							</FunnelChart>
						</ResponsiveContainer>
					);

				default:
					return (
						<div>
							Unsupported chart type: {config.shape}
						</div>
					);
			}
		};

		return (
			<div
				ref={ref}
				className={`${styles.graphsContainer} ${config.className || ''} ${className}`.trim()}
				style={containerStyle}
				role='img'
				aria-label={ariaLabel || `${kind} chart`}
				aria-description={ariaDescription}
				{...props}
			>
				{title && (
					<h4 className={styles.graphsTitle}>{title}</h4>
				)}

				{/* Screen reader description */}
				<div className={styles.srOnly}>
					{ariaDescription ||
						`A ${kind} chart with ${data.length} data points`}
				</div>

				<ResponsiveContainer
					width='100%'
					height={config.height || 140}
				>
					{renderChart()}
				</ResponsiveContainer>
			</div>
		);
	}
);

UnifiedGraph.displayName = 'UnifiedGraph';

export default UnifiedGraph;
