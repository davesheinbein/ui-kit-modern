import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';

interface AnalyticsFunnelProps {
	data?: any[];
}

const AnalyticsFunnel: React.FC<AnalyticsFunnelProps> = ({
	data = [],
}) => (
	<Wrapper className={styles.analytics__funnel_container}>
		{data.map((step: any, index: number) => (
			<Wrapper
				key={index}
				className={styles.analytics__funnel_step}
			>
				<div
					className={styles.analytics__funnel_step_content}
				>
					<span
						className={styles.analytics__funnel_step_label}
					>
						{step.label || `Step ${index + 1}`}
					</span>
					<span
						className={styles.analytics__funnel_step_value}
					>
						{step.value}
					</span>
					{step.rate !== undefined && (
						<span
							className={styles.analytics__funnel_step_rate}
						>
							{step.rate}%
						</span>
					)}
				</div>
			</Wrapper>
		))}
	</Wrapper>
);

export default AnalyticsFunnel;
