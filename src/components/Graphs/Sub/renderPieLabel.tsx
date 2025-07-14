import React from 'react';
import styles from '../Graphs.module.scss';

interface RenderPieLabelProps {
	cx: number;
	cy: number;
	midAngle: number;
	innerRadius: number;
	outerRadius: number;
	percent: number;
	index: number;
	name: string;
	value: number;
}

const renderPieLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	name,
	value,
}: RenderPieLabelProps) => {
	const RADIAN = Math.PI / 180;
	const radius =
		innerRadius + (outerRadius - innerRadius) * 0.6;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text
			x={x}
			y={y}
			fill='#222'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
			className={styles.graphsPieLabel}
		>
			{name}: {value}
		</text>
	);
};

export default renderPieLabel;
