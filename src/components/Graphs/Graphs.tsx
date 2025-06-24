import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Graphs.module.scss';
import type {
	GraphConfiguration,
	ExtendedGraphKind,
} from './configurations';
import { COLOR_SCHEMES } from './configurations';

// === RECHARTS IMPORTS ===
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
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

export type GraphShape =
	| 'bar'
	| 'horizontalBar'
	| 'pie'
	| 'line'
	| 'area'
	| 'radar'
	| 'composed';

/**
 * Primary Graph component - a wrapper around Graph for the most common use case
 * For more advanced graph types, use Graph with the 'kind' prop
 * @example
 * <Graphs data={data} />
 * <Graphs data={data} shape="pie" />
 * <Graphs data={data} kind="analytics-trend" />
 */
export interface GraphsProps
	extends Omit<GraphProps, 'kind'> {
	/** Graph shape - defaults to 'bar' */
	shape?: GraphShape;
	/** Graph kind - for advanced configurations */
	kind?: GraphProps['kind'];
}

const Graphs: React.FC<GraphsProps> = ({
	shape = 'bar',
	kind,
	...props
}) => {
	// Map legacy shape to kind if kind is not provided
	const finalKind = kind || (shape as GraphProps['kind']);

	return <Graph kind={finalKind} {...props} />;
};

/**
 * Main Graph component - handles all graph types through configuration
 */
const Graph = forwardRef<HTMLDivElement, GraphProps>(
	(props, ref) => {
		const {
			kind,
			data,
			dataKey = 'value',
			labelKey = 'name',
			title,
			colors,
			colorScheme = 'default',
			className = '',
			style,
			width = '100%',
			height = 200,
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
			...rest
		} = props;

		const colorList =
			colors ||
			COLOR_SCHEMES[colorScheme] ||
			COLOR_SCHEMES.default;

		let chart: React.ReactNode = null;

		switch (kind) {
			case 'bar':
			case 'bar-stacked':
			case 'bar-grouped':
				chart = (
					<BarChart
						data={data}
						width={
							typeof width === 'number' ? width : undefined
						}
						height={height}
						{...rest}
					>
						{showGrid && (
							<CartesianGrid strokeDasharray='3 3' />
						)}
						{showAxes && <XAxis dataKey={labelKey} />}
						{showAxes && <YAxis />}
						{showTooltip && <Tooltip />}
						{showLegend && <Legend />}
						<Bar dataKey={dataKey} fill={colorList[0]} />
					</BarChart>
				);
				break;
			case 'bar-horizontal':
			case 'bar-horizontal-stacked':
				chart = (
					<BarChart
						layout='vertical'
						data={data}
						width={
							typeof width === 'number' ? width : undefined
						}
						height={height}
						{...rest}
					>
						{showGrid && (
							<CartesianGrid strokeDasharray='3 3' />
						)}
						{showAxes && <XAxis type='number' />}
						{showAxes && (
							<YAxis dataKey={labelKey} type='category' />
						)}
						{showTooltip && <Tooltip />}
						{showLegend && <Legend />}
						<Bar dataKey={dataKey} fill={colorList[0]} />
					</BarChart>
				);
				break;
			case 'line':
			case 'line-smooth':
			case 'line-multi':
			case 'line-stepped':
				chart = (
					<LineChart
						data={data}
						width={
							typeof width === 'number' ? width : undefined
						}
						height={height}
						{...rest}
					>
						{showGrid && (
							<CartesianGrid strokeDasharray='3 3' />
						)}
						{showAxes && <XAxis dataKey={labelKey} />}
						{showAxes && <YAxis />}
						{showTooltip && <Tooltip />}
						{showLegend && <Legend />}
						<Line
							type='monotone'
							dataKey={dataKey}
							stroke={colorList[0]}
						/>
					</LineChart>
				);
				break;
			case 'area':
			case 'area-stacked':
			case 'area-smooth':
				chart = (
					<AreaChart
						data={data}
						width={
							typeof width === 'number' ? width : undefined
						}
						height={height}
						{...rest}
					>
						{showGrid && (
							<CartesianGrid strokeDasharray='3 3' />
						)}
						{showAxes && <XAxis dataKey={labelKey} />}
						{showAxes && <YAxis />}
						{showTooltip && <Tooltip />}
						{showLegend && <Legend />}
						<Area
							type='monotone'
							dataKey={dataKey}
							fill={colorList[0]}
							stroke={colorList[0]}
						/>
					</AreaChart>
				);
				break;
			case 'pie':
			case 'doughnut':
			case 'pie-with-labels':
				chart = (
					<PieChart
						width={typeof width === 'number' ? width : 320}
						height={height}
						{...rest}
					>
						<Pie
							data={data}
							dataKey={dataKey}
							nameKey={labelKey}
							cx='50%'
							cy='50%'
							outerRadius={height ? height / 2.5 : 80}
							innerRadius={
								kind === 'doughnut' ?
									height ?
										height / 4
									:	40
								:	0
							}
							fill={colorList[0]}
							label={showLabels}
						>
							{data.map((entry, idx) => (
								<Cell
									key={`cell-${idx}`}
									fill={colorList[idx % colorList.length]}
								/>
							))}
						</Pie>
						{showTooltip && <Tooltip />}
						{showLegend && <Legend />}
					</PieChart>
				);
				break;
			case 'radar':
				chart = (
					<RadarChart
						data={data}
						width={typeof width === 'number' ? width : 320}
						height={height}
						{...rest}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey={labelKey} />
						<PolarRadiusAxis />
						<Radar
							dataKey={dataKey}
							stroke={colorList[0]}
							fill={colorList[0]}
							fillOpacity={0.6}
						/>
						{showLegend && <Legend />}
						{showTooltip && <Tooltip />}
					</RadarChart>
				);
				break;
			case 'scatter':
				chart = (
					<ScatterChart
						width={typeof width === 'number' ? width : 320}
						height={height}
						{...rest}
					>
						<CartesianGrid />
						<XAxis dataKey={labelKey} name={labelKey} />
						<YAxis dataKey={dataKey} name={dataKey} />
						<Tooltip cursor={{ strokeDasharray: '3 3' }} />
						<Scatter data={data} fill={colorList[0]} />
					</ScatterChart>
				);
				break;
			case 'composed-bar-line':
				chart = (
					<ComposedChart
						data={data}
						width={
							typeof width === 'number' ? width : undefined
						}
						height={height}
						{...rest}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey={labelKey} />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey={dataKey} fill={colorList[0]} />
						<Line
							type='monotone'
							dataKey={dataKey}
							stroke={colorList[1] || colorList[0]}
						/>
					</ComposedChart>
				);
				break;
			// Add more chart types as needed
			default:
				chart = <div>Unsupported chart type: {kind}</div>;
		}

		return (
			<div
				className={`${styles.graphsContainer} ${className}`}
				style={style}
				ref={ref}
				aria-label={ariaLabel || title}
				aria-description={ariaDescription}
			>
				{title && (
					<div className={styles.graphsTitle}>{title}</div>
				)}
				<ResponsiveContainer width='100%' height={height}>
					{chart}
				</ResponsiveContainer>
			</div>
		);
	}
);

Graph.displayName = 'Graph';

// Re-export types for backward compatibility
export type GraphKind = ExtendedGraphKind;

export interface GraphProps {
	kind: GraphKind;
	data: any[];
	// ...existing props from GraphProps...
	dataKey?: string;
	labelKey?: string;
	valueKey?: string;
	nameKey?: string;
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
	width?: number | string;
	height?: number;
	margin?: {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
	showGrid?: boolean;
	showAxes?: boolean;
	showLegend?: boolean;
	showTooltip?: boolean;
	showLabels?: boolean;
	showValues?: boolean;
	animationDuration?: number;
	animationEnabled?: boolean;
	configuration?: Partial<GraphConfiguration>;
	onClick?: (data: any, index: number) => void;
	onHover?: (data: any, index: number) => void;
	ariaLabel?: string;
	ariaDescription?: string;
}

export default Graph;
export { Graph, Graphs };
