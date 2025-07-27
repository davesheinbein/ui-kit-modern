import React from 'react';

export interface FuturisticCityMapBoardProps {
	districts: any[];
	buildings: any[];
	[key: string]: any;
}

import './FuturisticCityMapBoard.module.scss'; // Example: swap for dedicated SCSS later

const FuturisticCityMapBoard: React.FC<
	FuturisticCityMapBoardProps
> = ({
	districts = [],
	buildings = [],
	className = '',
	style = {},
	...props
}) => {
	// districts: [{ id, shape (SVG path or points), color, label }]
	// buildings: [{ id, x, y, type, color, label }]
	const width = 400;
	const height = 300;
	return (
		<div
			className={`futuristic-city-map-board ${className}`.trim()}
			style={{ width, height, ...style }}
			{...props}
		>
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width={width}
				height={height}
			>
				{/* Render districts */}
				{districts.map((district: any, idx: number) => (
					<g key={district.id || idx}>
						{district.shape && (
							<path
								d={district.shape}
								fill={district.color || '#b3cde0'}
								stroke='#333'
								strokeWidth={2}
								className='futuristic-city-map-board__district'
								opacity={0.85}
							/>
						)}
						{district.label && (
							<text
								x={district.labelX || 200}
								y={district.labelY || 40 + idx * 40}
								fontSize={16}
								fill='#222'
								className='futuristic-city-map-board__district-label'
								textAnchor='middle'
								dominantBaseline='middle'
							>
								{district.label}
							</text>
						)}
					</g>
				))}
				{/* Render buildings */}
				{buildings.map((building: any, idx: number) => (
					<g key={building.id || idx}>
						<circle
							cx={building.x}
							cy={building.y}
							r={building.size || 12}
							fill={building.color || '#ffb703'}
							stroke='#333'
							strokeWidth={1}
							className='futuristic-city-map-board__building'
							opacity={0.95}
						/>
						{building.label && (
							<text
								x={building.x}
								y={building.y - (building.size || 12) - 6}
								fontSize={12}
								fill='#222'
								className='futuristic-city-map-board__building-label'
								textAnchor='middle'
								dominantBaseline='middle'
							>
								{building.label}
							</text>
						)}
					</g>
				))}
			</svg>
			{districts.length === 0 && buildings.length === 0 && (
				<div className='futuristic-city-map-board__empty'>
					No districts or buildings to display.
				</div>
			)}
		</div>
	);
};

export default FuturisticCityMapBoard;
