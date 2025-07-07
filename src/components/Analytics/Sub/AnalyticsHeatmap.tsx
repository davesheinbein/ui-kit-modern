import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';

interface AnalyticsHeatmapProps {
	height?: number | string;
}

const AnalyticsHeatmap: React.FC<AnalyticsHeatmapProps> = ({
	height = 300,
}) => (
	<Wrapper
		className={styles.analytics__heatmap_container}
		style={{ height }}
	/>
);

export default AnalyticsHeatmap;
