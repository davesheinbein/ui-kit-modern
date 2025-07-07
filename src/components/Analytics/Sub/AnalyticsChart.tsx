import React, { useState, useMemo } from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';
import Graph from '../../Graphs/Graphs';

interface AnalyticsChartProps {
	chartType?:
		| 'line'
		| 'bar'
		| 'pie'
		| 'donut'
		| 'area'
		| 'scatter'
		| 'heatmap'
		| string;
	data?: any[];
	colors?: string[];
	showLegend?: boolean;
	height?: number | string;
	dataKey?: string;
	labelKey?: string;
}

const PIE_CHART_TYPES = ['pie', 'donut', 'doughnut'];

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
	chartType = 'line',
	data = [],
	colors = [],
	showLegend = true,
	height = 300,
	dataKey = 'value',
	labelKey = 'name',
}) => {
	// Determine if this is a pie/donut chart
	const isPieChart = PIE_CHART_TYPES.includes(
		chartType.toLowerCase()
	);
	const chartHeight =
		isPieChart ?
			Math.max(Number(height) || 0, 320)
		:	height;

	// For multi-series charts: series keys
	const seriesKeys = useMemo(() => {
		if (!data || data.length === 0) return [];
		const ignore = ['name', 'label', 'category', 'x', 'y'];
		return Object.keys(data[0] || {}).filter(
			(k) => !ignore.includes(k)
		);
	}, [data]);

	// For pie/donut: slice keys (categories/labels)
	const sliceKeyField = useMemo(() => {
		if (!data || data.length === 0) return 'category';
		if ('category' in data[0]) return 'category';
		if ('label' in data[0]) return 'label';
		if ('name' in data[0]) return 'name';
		return 'category';
	}, [data]);

	const sliceKeys = useMemo(() => {
		if (!isPieChart || !data || data.length === 0)
			return [];
		return data.map((row) => row[sliceKeyField]);
	}, [data, isPieChart, sliceKeyField]);

	// State for toggling
	const [activeSeries, setActiveSeries] =
		useState<string[]>(seriesKeys);
	const [activeSlices, setActiveSlices] =
		useState<string[]>(sliceKeys);

	// Filtered data
	const filteredData = useMemo(() => {
		if (isPieChart) {
			if (activeSlices.length === 0) return [];
			return data.filter((row) =>
				activeSlices.includes(row[sliceKeyField])
			);
		} else {
			if (activeSeries.length === 0) return data;
			return data.map((row) => {
				const filtered: any = {};
				Object.keys(row).forEach((k) => {
					if (
						activeSeries.includes(k) ||
						[
							'name',
							'label',
							'category',
							'x',
							'y',
						].includes(k)
					) {
						filtered[k] = row[k];
					}
				});
				return filtered;
			});
		}
	}, [
		data,
		activeSeries,
		activeSlices,
		isPieChart,
		sliceKeyField,
	]);

	// Legend click handler
	const handleLegendClick = (key: string) => {
		if (isPieChart) {
			setActiveSlices((prev) =>
				prev.includes(key) ?
					prev.filter((k) => k !== key)
				:	[...prev, key]
			);
		} else {
			setActiveSeries((prev) =>
				prev.includes(key) ?
					prev.filter((k) => k !== key)
				:	[...prev, key]
			);
		}
	};

	// Legend labels
	const legendLabels = isPieChart ? sliceKeys : seriesKeys;

	return (
		<Wrapper
			className={styles.analytics__chart_container}
			style={{
				height: chartHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{showLegend && legendLabels.length > 0 && (
				<div className={styles.analytics__legend}>
					{legendLabels.map((key) => {
						const isActive =
							isPieChart ?
								activeSlices.includes(key)
							:	activeSeries.includes(key);
						return (
							<span
								key={key}
								className={
									isActive ?
										styles.analytics__legend_active
									:	styles.analytics__legend_inactive
								}
								onClick={() => handleLegendClick(key)}
								style={{
									cursor: 'pointer',
									marginRight: 12,
								}}
							>
								{key}
							</span>
						);
					})}
				</div>
			)}
			<Graph
				kind={chartType as any}
				data={filteredData}
				colors={colors}
				height={chartHeight}
				dataKey={dataKey}
				labelKey={labelKey}
			/>
		</Wrapper>
	);
};

export default AnalyticsChart;
