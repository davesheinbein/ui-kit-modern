import React from 'react';
import styles from '../Header.module.scss';

export const ErrorState: React.FC<{
	error: string;
	testId?: string;
	role?: string;
	className?: string;
	style?: React.CSSProperties;
}> = ({ error, testId, role, className, style }) => (
	<header
		className={className}
		style={style}
		role={role}
		aria-label='Header error'
		data-testid={testId}
	>
		<div className={styles.errorState}>
			<span className={styles.errorMessage}>{error}</span>
		</div>
	</header>
);
