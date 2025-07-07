import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';
import { formatMetricValue } from './analyticsUtils';
import type { AnalyticsMetric } from '../configurations';
import AnalyticsChart from './AnalyticsChart';

interface AnalyticsDashboardProps {
	metrics: AnalyticsMetric[];
	onMetricClick?: (metric: AnalyticsMetric) => void;
	data?: any[];
	chartType?: string;
	colors?: string[];
	showLegend?: boolean;
	chartHeight?: number | string;
	dataKey?: string;
	labelKey?: string;
}

const AnalyticsDashboard: React.FC<
	AnalyticsDashboardProps
> = ({
	metrics,
	onMetricClick,
	data,
	chartType,
	colors = [],
	showLegend = true,
	chartHeight = 300,
	dataKey = 'value',
	labelKey = 'name',
}) => (
	<>
		<Wrapper className={styles.analytics__dashboard_grid}>
			{metrics.map((metric, index) => (
				<Wrapper
					key={metric.id || index}
					className={styles.analytics__metric_container}
					onClick={() => onMetricClick?.(metric)}
				>
					<div className={styles.analytics__metric_value}>
						{formatMetricValue(metric.value, metric.format)}
					</div>
					<div className={styles.analytics__metric_label}>
						{metric.name}
					</div>
					{metric.change !== undefined && (
						<div
							className={
								styles.analytics__metric_change +
								' ' +
								(metric.change > 0 ?
									styles[
										'analytics__metric_change--positive'
									]
								: metric.change < 0 ?
									styles[
										'analytics__metric_change--negative'
									]
								:	styles[
										'analytics__metric_change--neutral'
									])
							}
						>
							{metric.change > 0 ? '+' : ''}
							{metric.change}%
						</div>
					)}
				</Wrapper>
			))}
		</Wrapper>
		{/* Render chart if data and chartType are provided */}
		{data && chartType && data.length > 0 && (
			<AnalyticsChart
				chartType={chartType}
				data={data}
				colors={colors}
				showLegend={showLegend}
				height={chartHeight}
				dataKey={dataKey}
				labelKey={labelKey}
			/>
		)}
	</>
);

export default AnalyticsDashboard;
