import React from 'react';
import styles from '../Graphs.module.scss';

interface InteractiveLegendProps {
	series: { dataKey: string; name?: string }[];
	activeKeys: string[];
	onToggle: (key: string) => void;
	colorList: string[];
}

const InteractiveLegend: React.FC<
	InteractiveLegendProps
> = ({ series, activeKeys, onToggle, colorList }) => (
	<div className={styles.graphsInteractiveLegend}>
		{series.map((s, idx) => (
			<button
				key={s.dataKey}
				type='button'
				className={[
					styles.graphsLegendItem,
					activeKeys.includes(s.dataKey) ?
						styles.graphsLegendItemActive
					:	styles.graphsLegendItemInactive,
				]
					.filter(Boolean)
					.join(' ')}
				onClick={() => onToggle(s.dataKey)}
				style={{ color: colorList[idx % colorList.length] }}
			>
				<span
					className={styles.graphsLegendColor}
					style={{
						background: colorList[idx % colorList.length],
					}}
				/>
				{s.name || s.dataKey}
			</button>
		))}
	</div>
);

export default InteractiveLegend;
