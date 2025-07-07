import React from 'react';
import styles from '../Card.module.scss';
import { Wrapper } from '../../Wrappers';

interface AdditionalStat {
	label: string;
	value: string | number;
}

interface StatsCardContentProps {
	statValue?: string | number;
	statLabel?: string;
	additionalStats?: AdditionalStat[];
}

const StatsCardContent: React.FC<StatsCardContentProps> = ({
	statValue,
	statLabel,
	additionalStats,
}) => {
	return (
		<Wrapper
			className={styles['stats-card']}
			style={{
				minHeight: 180,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{statValue && (
				<Wrapper className={styles['stats-card__value']}>
					{statValue}
				</Wrapper>
			)}
			{statLabel && (
				<Wrapper className={styles['stats-card__label']}>
					{statLabel}
				</Wrapper>
			)}
			{additionalStats && additionalStats.length > 0 && (
				<ul
					className={styles['stats-card__additional']}
					style={{ marginTop: 16, width: '100%' }}
				>
					{additionalStats.map((stat, i) => (
						<li
							key={i}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '2px 0',
							}}
						>
							<span style={{ opacity: 0.7 }}>
								{stat.label}
							</span>
							<span style={{ fontWeight: 500 }}>
								{stat.value}
							</span>
						</li>
					))}
				</ul>
			)}
		</Wrapper>
	);
};

export default StatsCardContent;
