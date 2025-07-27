import React from 'react';

export interface ContinentControlMapBoardProps {
	continents: any[];
	controlZones: any[];
	[key: string]: any;
}

const ContinentControlMapBoard: React.FC<
	ContinentControlMapBoardProps
> = ({
	continents = [],
	controlZones = [],
	className = '',
	style = {},
	onZoneClick,
	...props
}) => {
	// Example: Render continents as SVG regions, control zones highlighted
	// Each continent: { id, name, color, path (SVG), zones: [{ id, name, controlledBy, color }] }
	return (
		<div
			className={`continent-control-map-board ${className}`}
			style={style}
			{...props}
		>
			<svg width='600' height='400' viewBox='0 0 600 400'>
				{continents.map((continent: any) => (
					<g key={continent.id}>
						{/* Render continent shape */}
						<path
							d={continent.path}
							fill={continent.color || '#e0e0e0'}
							stroke='#888'
							strokeWidth={2}
							opacity={0.7}
						/>
						{/* Render control zones */}
						{continent.zones?.map((zone: any) => (
							<circle
								key={zone.id}
								cx={zone.cx}
								cy={zone.cy}
								r={18}
								fill={
									zone.controlledBy ?
										zone.color || '#ffd700'
									:	'#fff'
								}
								stroke='#333'
								strokeWidth={2}
								opacity={zone.controlledBy ? 0.9 : 0.6}
								style={{
									cursor:
										onZoneClick ? 'pointer' : 'default',
								}}
								onClick={() =>
									onZoneClick && onZoneClick(zone)
								}
							/>
						))}
						{/* Continent label */}
						<text
							x={continent.labelX}
							y={continent.labelY}
							fontSize={18}
							fontWeight='bold'
							fill='#222'
							textAnchor='middle'
							opacity={0.8}
						>
							{continent.name}
						</text>
					</g>
				))}
			</svg>
		</div>
	);
};

export default ContinentControlMapBoard;
