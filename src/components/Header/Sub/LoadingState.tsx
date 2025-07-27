import React from 'react';
import styles from '../Header.module.scss';

export const LoadingState: React.FC<{
	testId?: string;
	role?: string;
	className?: string;
	style?: React.CSSProperties;
}> = ({ testId, role, className, style }) => (
	<header
		className={className}
		style={style}
		role={role}
		aria-label='Loading header'
		data-testid={testId}
	>
		<div className={styles.loadingState}>
			<span className={styles.loadingSpinner}>
				Loading...
			</span>
		</div>
	</header>
);
