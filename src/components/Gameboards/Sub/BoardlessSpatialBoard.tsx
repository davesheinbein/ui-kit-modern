import React from 'react';

export interface BoardlessSpatialBoardProps {
	positions: any[];
	[key: string]: any;
}

const BoardlessSpatialBoard: React.FC<
	BoardlessSpatialBoardProps
> = ({
	positions,
	className = '',
	style = {},
	...props
}) => {
	// Each position is rendered as a node (circle/div)
	// Optionally support x/y coordinates for absolute layout, else flex wrap
	const hasCoords =
		positions.length > 0 &&
		typeof positions[0] === 'object' &&
		'x' in positions[0] &&
		'y' in positions[0];

	return (
		<div
			className={`boardless-spatial-board ${className}`}
			style={{
				position: 'relative',
				minHeight: 200,
				minWidth: 200,
				display: hasCoords ? 'block' : 'flex',
				flexWrap: hasCoords ? undefined : 'wrap',
				gap: 16,
				...style,
			}}
			{...props}
		>
			{positions.map((pos, idx) => {
				const label = pos.label || `P${idx + 1}`;
				const icon = pos.icon;
				const nodeStyle =
					hasCoords ?
						{
							position: 'absolute',
							left: pos.x,
							top: pos.y,
							width: 40,
							height: 40,
							borderRadius: '50%',
							background: '#e0e0e0',
							border: '2px solid #888',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 'bold',
							color: '#333',
							boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
							transition: 'box-shadow 0.2s',
						}
					:	{
							width: 40,
							height: 40,
							borderRadius: '50%',
							background: '#e0e0e0',
							border: '2px solid #888',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 'bold',
							color: '#333',
							margin: 8,
							boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
							transition: 'box-shadow 0.2s',
						};
				return (
					<div
						key={`pos-${idx}`}
						className='spatial-node'
						style={nodeStyle}
					>
						{icon ? icon : label}
					</div>
				);
			})}
		</div>
	);
};

export default BoardlessSpatialBoard;
