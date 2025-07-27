import React from 'react';

export interface UnderwaterBaseMapBoardProps {
	baseData: any;
	zones: any[];
	[key: string]: any;
}

// Try to import dedicated SCSS module, fallback to empty object
let styles: any = {};
try {
	styles = require('./UnderwaterBaseMapBoard.module.scss');
} catch {}

const DEFAULT_BASE_RADIUS = 80;
const DEFAULT_ZONE_RADIUS = 32;

export const UnderwaterBaseMapBoard: React.FC<
	UnderwaterBaseMapBoardProps
> = ({
	baseData = {
		name: 'Atlantis',
		x: 200,
		y: 200,
		color: '#60a5fa',
	},
	zones = [],
	className = '',
	style = {},
	zoneRenderer,
	baseRenderer,
	...props
}) => {
	// SVG size
	const SVG_SIZE = 480;

	// Default base rendering
	const renderBase = () =>
		baseRenderer ?
			baseRenderer(baseData)
		:	<circle
				cx={baseData.x ?? SVG_SIZE / 2}
				cy={baseData.y ?? SVG_SIZE / 2}
				r={DEFAULT_BASE_RADIUS}
				fill={baseData.color ?? '#60a5fa'}
				stroke='#0ea5e9'
				strokeWidth={4}
				aria-label={baseData.name}
			/>;

	// Default zone rendering
	const renderZone = (zone: any, idx: number) =>
		zoneRenderer ?
			zoneRenderer(zone, idx)
		:	<circle
				key={zone.id ?? idx}
				cx={zone.x}
				cy={zone.y}
				r={zone.radius ?? DEFAULT_ZONE_RADIUS}
				fill={zone.color ?? '#38bdf8'}
				stroke='#0ea5e9'
				strokeWidth={2}
				aria-label={zone.name}
			/>;

	return (
		<div
			className={`${styles['underwater-base-map-board'] ?? ''} ${className}`.trim()}
			style={style}
			role='region'
			aria-label={baseData.name || 'Underwater Base Map'}
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				style={{ display: 'block', margin: '0 auto' }}
			>
				{/* Base */}
				{renderBase()}
				{/* Zones */}
				{zones.map(renderZone)}
				{/* Zone labels */}
				{zones.map((zone: any, idx: number) =>
					zone.name ?
						<text
							key={`label-${zone.id ?? idx}`}
							x={zone.x}
							y={
								zone.y +
								(zone.radius ?? DEFAULT_ZONE_RADIUS) +
								16
							}
							textAnchor='middle'
							fontSize={14}
							fill='#0ea5e9'
							aria-label={zone.name}
						>
							{zone.name}
						</text>
					:	null
				)}
			</svg>
		</div>
	);
};

export default UnderwaterBaseMapBoard;
