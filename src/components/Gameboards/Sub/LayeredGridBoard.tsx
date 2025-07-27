import React from 'react';
import styles from './LayeredGridBoard.module.scss';

export interface LayeredGridBoardProps {
	layers: Array<
		Array<{ label?: string; color?: string; value?: any }>
	>;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const GRID_SIZE = 3;

const LayeredGridBoard: React.FC<LayeredGridBoardProps> = ({
	layers = [],
	className = '',
	style = {},
	...props
}) => {
	// Render each layer as a grid overlay
	return (
		<div
			className={`${styles['layered-grid-board'] || 'layered-grid-board'} ${className}`}
			style={style}
			{...props}
		>
			{layers.map((layer, layerIdx) => (
				<div
					key={layerIdx}
					className={
						styles['layered-grid-layer'] ||
						'layered-grid-layer'
					}
					style={{
						zIndex: layerIdx + 1,
						opacity: 1 - layerIdx * 0.15,
					}}
				>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: `repeat(${GRID_SIZE}, 40px)`,
							gridTemplateRows: `repeat(${GRID_SIZE}, 40px)`,
							gap: 6,
						}}
					>
						{layer.map((cell, i) => (
							<div
								key={i}
								className={
									`${styles['layered-grid-cell'] || 'layered-grid-cell'} ` +
									`${styles[`layered-grid-cell--layer${layerIdx}`] || `layered-grid-cell--layer${layerIdx}`}`
								}
								title={cell.label || ''}
							>
								{cell.label || ''}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default LayeredGridBoard;
