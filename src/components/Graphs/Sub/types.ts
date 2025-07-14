import type { ExtendedGraphKind } from '../configurations';

// Allow advanced chart-specific props in configuration
export type ChartSpecificConfig = {
	barProps?: Record<string, any>;
	areaProps?: Record<string, any>;
	pieProps?: Record<string, any>;
	radarProps?: Record<string, any>;
	scatterProps?: Record<string, any>;
	treemapProps?: Record<string, any>;
	funnelProps?: Record<string, any>;
	series?: Array<{
		dataKey: string;
		name?: string;
		props?: Record<string, any>;
	}>;
	lineKey?: string;
};

/**
 * Props for the Graph component. All features and configuration are exposed via props.
 */
export interface GraphProps {
	/** Type of graph/chart to render. */
	kind: ExtendedGraphKind;
	/** Data array for the chart. */
	data: any[];
	/** Key for y-axis or value. @default 'value' */
	dataKey?: string;
	/** Key for x-axis or label. @default 'name' */
	labelKey?: string;
	/** Chart title. */
	title?: string;
	/** Chart subtitle. */
	subtitle?: string;
	/** X-axis label. */
	xAxisLabel?: string;
	/** Y-axis label. */
	yAxisLabel?: string;
	/** Z-axis label (for 3D/scatter). */
	zAxisLabel?: string;
	/** Message when no data. @default 'No data available' */
	emptyLabel?: string;
	/** Custom color palette. */
	colors?: string[];
	/** Named color scheme. @default 'default' */
	colorScheme?: string;
	/** Custom class for root. @default '' */
	className?: string;
	/** Inline style for root. */
	style?: React.CSSProperties;
	/** Chart width. @default '100%' */
	width?: string | number;
	/** Chart height. @default 320 */
	height?: string | number;
	/** Show grid lines. @default true */
	showGrid?: boolean;
	/** Show axes. @default true */
	showAxes?: boolean;
	/** Show legend. @default false */
	showLegend?: boolean;
	/** Show tooltip. @default true */
	showTooltip?: boolean;
	/** Show data labels. @default false */
	showLabels?: boolean;
	/** Show values on chart. @default false */
	showValues?: boolean;
	/** Animation duration. @default 400 */
	animationDuration?: number;
	/** Enable animation. @default true */
	animationEnabled?: boolean;
	/** Chart-specific config (props for Bar, Area, etc.). */
	configuration?: ChartSpecificConfig;
	/** Show X axis (overrides showAxes). */
	showXAxis?: boolean;
	/** Show Y axis (overrides showAxes). */
	showYAxis?: boolean;
	/** Show Z axis (overrides showAxes). */
	showZAxis?: boolean;
	/** Custom legend labels. */
	legendLabels?: string[] | Record<string, string>;
	/** ARIA label for accessibility. */
	ariaLabel?: string;
	/** ARIA description for accessibility. */
	ariaDescription?: string;
	/** Chart margin. */
	margin?: object;
	/** Chart background. @default 'transparent' */
	backgroundColor?: string;
	/** Custom tooltip renderer. */
	tooltipRenderer?: (props: any) => React.ReactNode;
	/** Custom legend renderer. */
	legendRenderer?: (props: any) => React.ReactNode;
	/** Custom empty state renderer. */
	emptyRenderer?: () => React.ReactNode;
	[key: string]: any;
}
