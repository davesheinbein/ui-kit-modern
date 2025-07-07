import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';

interface AnalyticsFooterProps {
	showFooter?: boolean;
	lastUpdated?: Date | null;
}

const AnalyticsFooter: React.FC<AnalyticsFooterProps> = ({
	showFooter,
	lastUpdated,
}) => {
	if (!showFooter) return null;
	return (
		<Wrapper className={styles.analytics__footer}>
			<div>
				Last updated:{' '}
				{lastUpdated ? lastUpdated.toLocaleString() : 'N/A'}
			</div>
		</Wrapper>
	);
};

export default AnalyticsFooter;
