import React from 'react';
import {
	ChartKind,
	ChartType,
	ChartVariant,
	ChartDataSeries,
} from '../configurations';

export interface ChartProps {
	kind?: ChartKind;
	chartType?: ChartType;
	dataSeries?: ChartDataSeries[];
	variant?: ChartVariant;
	size?: 'small' | 'medium' | 'large';
	spacing?: 'tight' | 'normal' | 'loose';
	orientation?: 'horizontal' | 'vertical';
	showLegend?: boolean;
	showTooltip?: boolean;
	showControls?: boolean;
	interactive?: boolean;
	onSeriesClick?: (series: ChartDataSeries) => void;
	onLegendClick?: (series: ChartDataSeries) => void;
	onFilterChange?: (filters: any[]) => void;
	onExport?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
	className?: string;
	style?: React.CSSProperties;
	backgroundColor?: string;
	borderColor?: string;
	borderWidth?: number | string;
	borderRadius?: number | string;
	boxShadow?: string;
	padding?: number | string;
	margin?: number | string;
	width?: number | string;
	height?: number | string;
	minWidth?: number | string;
	minHeight?: number | string;
	maxWidth?: number | string;
	maxHeight?: number | string;
	w?: string | number;
	h?: string | number;
	minW?: string | number;
	minH?: string | number;
	maxW?: string | number;
	maxH?: string | number;
	fontSize?: number | string;
	fontFamily?: string;
	color?: string;
	legendPosition?: 'top' | 'bottom' | 'left' | 'right';
	[key: string]: any;
}
