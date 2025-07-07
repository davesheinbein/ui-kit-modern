import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';
import { formatMetricValue } from './analyticsUtils';
import type { AnalyticsMetric } from '../configurations';

interface AnalyticsRealtimeProps {
	metrics: AnalyticsMetric[];
	realtime?: boolean;
	onMetricClick?: (metric: AnalyticsMetric) => void;
}

const AnalyticsRealtime: React.FC<
	AnalyticsRealtimeProps
> = ({ metrics, realtime, onMetricClick }) => (
	<Wrapper className={styles.analytics__dashboard_grid}>
		{realtime && (
			<Wrapper
				className={styles.analytics__metric_container}
			>
				Realtime data streaming...
			</Wrapper>
		)}
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
								styles['analytics__metric_change--positive']
							: metric.change < 0 ?
								styles['analytics__metric_change--negative']
							:	styles['analytics__metric_change--neutral'])
						}
					>
						{metric.change > 0 ? '+' : ''}
						{metric.change}%
					</div>
				)}
			</Wrapper>
		))}
	</Wrapper>
);

export default AnalyticsRealtime;
