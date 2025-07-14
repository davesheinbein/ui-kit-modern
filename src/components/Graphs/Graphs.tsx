import React, { forwardRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import styles from './Graphs.module.scss';
import {
	COLOR_SCHEMES,
	ExtendedGraphKind,
} from './configurations';
import ChartGrid from './Sub/ChartGrid';
import ChartLegend from './Sub/ChartLegend';
import ChartTooltip from './Sub/ChartTooltip';
import CustomTooltip from './Sub/CustomTooltip';
import renderPieLabel from './Sub/renderPieLabel';
import RadarAxisTick from './Sub/RadarAxisTick';
import InteractiveLegend from './Sub/InteractiveLegend';
import GaugeChartRenderer from './Sub/GaugeChartRenderer';
import WaterfallChartRenderer from './Sub/WaterfallChartRenderer';
import BarChartRenderer from './Sub/BarChartRenderer';
import LineChartRenderer from './Sub/LineChartRenderer';
import AreaChartRenderer from './Sub/AreaChartRenderer';
import PieChartRenderer from './Sub/PieChartRenderer';
import RadarChartRenderer from './Sub/RadarChartRenderer';
import ScatterChartRenderer from './Sub/ScatterChartRenderer';
import ComposedChartRenderer from './Sub/ComposedChartRenderer';
import FunnelChartRenderer from './Sub/FunnelChartRenderer';
import TreemapChartRenderer from './Sub/TreemapChartRenderer';
import ErrorBarChartRenderer from './Sub/ErrorBarChartRenderer';
import ReferenceLineChartRenderer from './Sub/ReferenceLineChartRenderer';
import ReferenceAreaChartRenderer from './Sub/ReferenceAreaChartRenderer';
import BrushZoomChartRenderer from './Sub/BrushZoomChartRenderer';
import type {
	ChartSpecificConfig,
	GraphProps,
} from './Sub/types';
import UnsupportedChartKind from './Sub/UnsupportedChartKind';
import GraphsContainer from './Sub/GraphsContainer';
import { getRenderTooltip } from './Sub/getRenderTooltip';
import { getRenderLegend } from './Sub/getRenderLegend';
import { getRenderEmpty } from './Sub/getRenderEmpty';

// Fix colorScheme typing
const getColorScheme = (
	colorScheme: keyof typeof COLOR_SCHEMES
) =>
	Array.isArray(COLOR_SCHEMES[colorScheme]) ?
		[...COLOR_SCHEMES[colorScheme]]
	:	COLOR_SCHEMES.default;

/**
 * Props for the Graph component. All features and configuration are exposed via props.
 * @typedef {object} GraphProps
 * @property {ExtendedGraphKind} kind - Type of graph/chart to render. (required)
 * @property {any[]} data - Data array for the chart. (required)
 * @property {string} [dataKey='value'] - Key for y-axis or value.
 * @property {string} [labelKey='name'] - Key for x-axis or label.
 * @property {string} [title] - Chart title.
 * @property {string} [subtitle] - Chart subtitle.
 * @property {string} [xAxisLabel] - X-axis label.
 * @property {string} [yAxisLabel] - Y-axis label.
 * @property {string} [zAxisLabel] - Z-axis label (for 3D/scatter).
 * @property {string} [emptyLabel='No data available'] - Message when no data.
 * @property {string[]} [colors] - Custom color palette.
 * @property {string} [colorScheme='default'] - Named color scheme.
 * @property {string} [className=''] - Custom class for root.
 * @property {React.CSSProperties} [style] - Inline style for root.
 * @property {string|number} [width='100%'] - Chart width.
 * @property {string|number} [height=320] - Chart height.
 * @property {boolean} [showGrid=true] - Show grid lines.
 * @property {boolean} [showAxes=true] - Show axes.
 * @property {boolean} [showLegend=false] - Show legend.
 * @property {boolean} [showTooltip=true] - Show tooltip.
 * @property {boolean} [showLabels=false] - Show data labels.
 * @property {boolean} [showValues=false] - Show values on chart.
 * @property {number} [animationDuration=400] - Animation duration.
 * @property {boolean} [animationEnabled=true] - Enable animation.
 * @property {ChartSpecificConfig} [configuration] - Chart-specific config (props for Bar, Area, etc.).
 * @property {boolean} [showXAxis] - Show X axis (overrides showAxes).
 * @property {boolean} [showYAxis] - Show Y axis (overrides showAxes).
 * @property {boolean} [showZAxis] - Show Z axis (overrides showAxes).
 * @property {string[]|Record<string,string>} [legendLabels] - Custom legend labels.
 * @property {string} [ariaLabel] - ARIA label for accessibility.
 * @property {string} [ariaDescription] - ARIA description for accessibility.
 * @property {object} [margin] - Chart margin.
 * @property {string} [backgroundColor='transparent'] - Chart background.
 * @property {(props: any) => React.ReactNode} [tooltipRenderer] - Custom tooltip renderer.
 * @property {(props: any) => React.ReactNode} [legendRenderer] - Custom legend renderer.
 * @property {() => React.ReactNode} [emptyRenderer] - Custom empty state renderer.
 */

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
			zAxisLabel,
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
			showXAxis,
			showYAxis,
			showZAxis,
			legendLabels,
			ariaLabel,
			ariaDescription,
			margin,
			backgroundColor = 'transparent',
			tooltipRenderer,
			legendRenderer,
			emptyRenderer,
			...rest
		} = props;

		const colorList =
			Array.isArray(colors) ? [...colors]
			: (
				Array.isArray(
					COLOR_SCHEMES[
						colorScheme as keyof typeof COLOR_SCHEMES
					]
				)
			) ?
				Array.from(
					COLOR_SCHEMES[
						colorScheme as keyof typeof COLOR_SCHEMES
					]
				)
			:	Array.from(COLOR_SCHEMES.default);

		const minSize = 120;
		const defaultMargin = {
			top: 0,
			right: 34,
			bottom: 0,
			left: 0,
		};
		const wideMinWidth = 480;
		const usesXAxis = (kind: string) =>
			[
				'bar',
				'bar-stacked',
				'bar-grouped',
				'line',
				'line-smooth',
				'line-multi',
				'line-stepped',
				'area',
				'area-stacked',
				'area-smooth',
				'scatter',
				'composed-bar-line',
				'composed-line-area',
				'composed-multi',
				'waterfall',
				'heatmap',
				'boxplot',
				'error-bar',
				'reference-line',
				'reference-area',
				'brush-zoom',
				'treemap',
				'funnel',
			].includes(kind);

		const renderTooltip = getRenderTooltip(
			tooltipRenderer,
			labelKey
		);
		const renderLegend = getRenderLegend(legendRenderer);
		const renderEmpty = getRenderEmpty(
			emptyRenderer,
			emptyLabel
		);

		if (!data || data.length === 0) {
			return renderEmpty();
		}

		let chart = null;

		switch (kind) {
			case 'bar':
			case 'bar-stacked':
			case 'bar-grouped':
				chart = (
					<BarChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
						renderTooltip={renderTooltip}
						renderLegend={renderLegend}
					/>
				);
				break;
			case 'composed': // <-- Add this alias
			case 'composed-bar-line':
			case 'composed-line-area':
			case 'composed-multi':
				chart = (
					<ComposedChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
					/>
				);
				break;
			case 'line':
			case 'line-smooth':
			case 'line-multi':
			case 'line-stepped':
				chart = (
					<LineChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
						renderTooltip={renderTooltip}
						renderLegend={renderLegend}
					/>
				);
				break;
			case 'area':
			case 'area-stacked':
				chart = (
					<AreaChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
					/>
				);
				break;
			case 'pie':
			case 'doughnut':
			case 'pie-with-labels':
				chart = (
					<PieChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
						renderTooltip={renderTooltip}
						renderLegend={renderLegend}
						renderEmpty={renderEmpty}
					/>
				);
				break;
			case 'radar':
				chart = (
					<RadarChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
					/>
				);
				break;
			case 'scatter':
				chart = (
					<ScatterChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showGrid={showGrid}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						margin={margin}
						defaultMargin={defaultMargin}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
					/>
				);
				break;
			case 'funnel':
				chart = (
					<FunnelChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						showTooltip={showTooltip}
						showLegend={showLegend}
						legendLabels={legendLabels}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						configuration={configuration}
						labelKey={labelKey}
						showLabels={showLabels}
					/>
				);
				break;
			case 'treemap':
				chart = (
					<TreemapChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						minSize={minSize}
						wideMinWidth={wideMinWidth}
						usesXAxis={usesXAxis(kind)}
						animationEnabled={animationEnabled}
						animationDuration={animationDuration}
						configuration={configuration}
						showTooltip={showTooltip}
						labelKey={labelKey}
						showGrid={showGrid}
						margin={margin}
						defaultMargin={defaultMargin}
					/>
				);
				break;

			// Error bar chart
			case 'error-bar':
				chart = (
					<ErrorBarChartRenderer
						data={data}
						dataKey={dataKey}
						colorList={colorList}
						height={height}
						showGrid={showGrid}
						showTooltip={showTooltip}
						margin={margin || defaultMargin}
						labelKey={labelKey}
					/>
				);
				break;

			// Reference line chart
			case 'reference-line':
				chart = (
					<ReferenceLineChartRenderer
						data={data}
						dataKey={dataKey}
						labelKey={labelKey}
						colorList={colorList}
						height={height}
						showGrid={showGrid}
						showTooltip={showTooltip}
						margin={margin || defaultMargin}
					/>
				);
				break;
			case 'reference-area':
				chart = (
					<ReferenceAreaChartRenderer
						data={data}
						dataKey={dataKey}
						labelKey={labelKey}
						colorList={colorList}
						height={height}
						showGrid={showGrid}
						showTooltip={showTooltip}
						margin={margin || defaultMargin}
					/>
				);
				break;
			case 'brush-zoom':
				chart = (
					<BrushZoomChartRenderer
						data={data}
						dataKey={dataKey}
						labelKey={labelKey}
						colorList={colorList}
						height={height}
						showGrid={showGrid}
						showTooltip={showTooltip}
						margin={margin || defaultMargin}
					/>
				);
				break;

			case 'sunburst':
			case 'candlestick':
			case 'violin':
				// Placeholder for advanced chart types not natively supported by Recharts
				chart = (
					<UnsupportedChartKind kind={kind} comingSoon />
				);
				break;
			default:
				chart = <UnsupportedChartKind kind={kind} />;
		}

		return (
			<GraphsContainer
				title={title}
				subtitle={subtitle}
				width={width}
				height={height}
				colorScheme={colorScheme}
				className={className}
				style={style}
				backgroundColor={backgroundColor}
				ariaLabel={ariaLabel}
				ariaDescription={ariaDescription}
			>
				{chart}
			</GraphsContainer>
		);
	}
);

Graph.displayName = 'Graph';

export type GraphKind = ExtendedGraphKind;
export default Graph;
