import React from 'react';
import styles from '../Graphs.module.scss';

interface RadarAxisTickProps {
	payload: { value: string };
	x: number;
	y: number;
	textAnchor: string;
	index: number;
	cx: number;
	cy: number;
}

const RadarAxisTick: React.FC<RadarAxisTickProps> = (
	props
) => {
	const { payload, x, y, textAnchor } = props;
	const label = payload && payload.value;
	const isLeft = label === 'Perfect Games';
	const isRight = label === 'Red Herrings';
	if (!isLeft && !isRight) {
		return (
			<g transform={`translate(${x},${y})`}>
				<text
					textAnchor={textAnchor}
					className={styles.graphs__radarAxisTick}
				>
					{label}
				</text>
			</g>
		);
	}
	const angle =
		isLeft ? -90
		: isRight ? 90
		: 0;
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				textAnchor='middle'
				className={styles.graphs__radarAxisTick}
				transform={`rotate(${angle})`}
			>
				{label}
			</text>
		</g>
	);
};

export default RadarAxisTick;
