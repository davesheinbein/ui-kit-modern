import React from 'react';
import styles from '../Graphs.module.scss';

interface CustomTooltipProps {
	active?: boolean;
	payload?: any[];
	label?: React.ReactNode;
	labelKey?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
	active,
	payload,
	label,
	labelKey,
}) => {
	if (!active || !payload || !payload.length) return null;
	return (
		<div className={styles.graphsCustomTooltip}>
			<div className={styles.graphsTooltipContent}>
				{labelKey && label && (
					<div className={styles.graphsTooltipTitle}>
						{labelKey}: <b>{label}</b>
					</div>
				)}
				{payload.map((entry, idx) => (
					<div
						key={idx}
						className={styles.graphsTooltipItem}
					>
						<span
							className={styles.graphsTooltipColor}
							style={{ background: entry.color }}
						/>
						{entry.name}: <b>{entry.value}</b>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomTooltip;
