import React from 'react';

export interface FantasyMapBoardProps {
	regions: any[];
	mapData?: any;
	[key: string]: any;
}

const FantasyMapBoard: React.FC<FantasyMapBoardProps> = ({
	regions = [],
	mapData,
	className = '',
	style = {},
	...props
}) => {
	// Render fantasy map as SVG polygons for each region
	return (
		<div
			className={`fantasy-map-board ${className}`}
			style={style}
			{...props}
		>
			<svg width='100%' height='320' viewBox='0 0 600 320'>
				{regions.map((region, idx) => (
					<polygon
						key={idx}
						points={region.points}
						fill={region.color || '#bada55'}
						stroke='#333'
						strokeWidth={2}
						opacity={0.8}
					/>
				))}
				{/* Optionally overlay mapData (e.g. rivers, mountains) */}
				{mapData?.overlays?.map((overlay, idx) => (
					<polyline
						key={`overlay-${idx}`}
						points={overlay.points}
						stroke={overlay.color || '#0077ff'}
						strokeWidth={3}
						fill='none'
						opacity={0.6}
					/>
				))}
			</svg>
			<div className='fantasy-map-board__labels'>
				{regions.map((region, idx) => (
					<div
						key={`label-${idx}`}
						style={{
							position: 'absolute',
							left: region.labelX,
							top: region.labelY,
							color: region.labelColor || '#222',
						}}
					>
						{region.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default FantasyMapBoard;
