import React from 'react';

export interface FogOfWarMapBoardProps {
	mapData: any;
	hiddenZones: any[];
	[key: string]: any;
}

import './ClueMansionMapBoard.module.scss'; // Example: swap for dedicated SCSS later

const FogOfWarMapBoard: React.FC<FogOfWarMapBoardProps> = ({
	mapData,
	hiddenZones = [],
	className = '',
	style = {},
	...props
}) => {
	// Assume mapData.regions: [{ id, name, shape, color }]
	// shape: SVG path string or array of points
	// hiddenZones: array of region ids
	const regions = mapData?.regions || [];

	return (
		<div
			className={`fog-of-war-map-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				viewBox={mapData?.viewBox || '0 0 400 300'}
				width='100%'
				height='100%'
				style={{ display: 'block' }}
			>
				{regions.map((region: any) => {
					const isHidden = hiddenZones.includes(region.id);
					return (
						<g key={region.id}>
							{/* Region shape */}
							{region.shape && (
								<path
									d={region.shape}
									fill={region.color || '#e0e0e0'}
									stroke='#333'
									strokeWidth={1}
									className='fog-of-war-map-board__region'
								/>
							)}
							{/* Overlay fog if hidden */}
							{isHidden && region.shape && (
								<path
									d={region.shape}
									fill='rgba(40,40,40,0.7)'
									className='fog-of-war-map-board__fog'
								/>
							)}
							{/* Region label (if not hidden) */}
							{!isHidden && region.label && (
								<text
									x={region.labelX || 0}
									y={region.labelY || 0}
									fontSize={14}
									fill='#222'
									className='fog-of-war-map-board__label'
									textAnchor='middle'
									dominantBaseline='middle'
								>
									{region.label}
								</text>
							)}
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default FogOfWarMapBoard;
