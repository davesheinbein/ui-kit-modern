import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';
import type { AnalyticsFilter } from '../configurations';

interface AnalyticsControlsProps {
	showControls?: boolean;
	filterable?: boolean;
	filters?: AnalyticsFilter[];
	onFilter?: (filters: AnalyticsFilter[]) => void;
}

const AnalyticsControls: React.FC<
	AnalyticsControlsProps
> = ({ showControls, filterable, filters, onFilter }) => {
	if (!showControls) return null;
	return (
		<Wrapper className={styles.analytics__controls}>
			{filterable && (
				<div className={styles.analytics__controls_group}>
					<span
						className={styles.analytics__controls_label}
					>
						Filters:
					</span>
					{/* Render filter controls here */}
				</div>
			)}
		</Wrapper>
	);
};

export default AnalyticsControls;
