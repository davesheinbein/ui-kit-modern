import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';
import { formatMetricValue } from './analyticsUtils';
import type { AnalyticsMetric } from '../configurations';

interface AnalyticsMetricProps {
	metric: AnalyticsMetric;
}

const AnalyticsMetric: React.FC<AnalyticsMetricProps> = ({
	metric,
}) => (
	<Wrapper className={styles.analytics__metric_container}>
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
);

export default AnalyticsMetric;
