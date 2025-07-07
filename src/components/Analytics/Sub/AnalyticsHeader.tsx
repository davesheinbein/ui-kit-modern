import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';

interface AnalyticsHeaderProps {
	title?: string;
	subtitle?: string;
	refreshable?: boolean;
	exportable?: boolean;
	isRefreshing?: boolean;
	onRefresh?: () => void;
	onExport?: (
		format: 'csv' | 'json' | 'pdf' | 'png'
	) => void;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({
	title,
	subtitle,
	refreshable,
	exportable,
	isRefreshing,
	onRefresh,
	onExport,
}) => {
	if (!title && !subtitle && !refreshable && !exportable)
		return null;
	return (
		<Wrapper className={styles.analytics__header}>
			<div>
				{title && (
					<h3 className={styles.analytics__header_title}>
						{title}
					</h3>
				)}
				{subtitle && (
					<div
						className={styles.analytics__header_subtitle}
					>
						{subtitle}
					</div>
				)}
			</div>
			<div className={styles.analytics__header_actions}>
				{refreshable && (
					<button
						onClick={onRefresh}
						disabled={isRefreshing}
					>
						{isRefreshing ? 'Refreshing...' : 'Refresh'}
					</button>
				)}
				{exportable && (
					<button
						onClick={() => onExport && onExport('csv')}
					>
						Export CSV
					</button>
				)}
			</div>
		</Wrapper>
	);
};

export default AnalyticsHeader;
