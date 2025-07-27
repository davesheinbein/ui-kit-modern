import React from 'react';
export interface StackedLayersGridBoardProps {
	layers: any[];
	activeLayer?: number;
	className?: string;
	style?: React.CSSProperties;
}

const StackedLayersGridBoard: React.FC<
	StackedLayersGridBoardProps
> = ({
	layers = [],
	activeLayer = 0,
	className = '',
	style = {},
	...props
}) => {
	return (
		<div
			className={`stacked-layers-grid-board ${className}`}
			style={style}
			{...props}
		>
			{/* Minimal stub for StackedLayersGridBoard */}
			<pre>{JSON.stringify(layers)}</pre>
		</div>
	);
};

export default StackedLayersGridBoard;
