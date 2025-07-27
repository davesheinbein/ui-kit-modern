import React from 'react';

export interface PostApocalypticWastelandMapBoardProps {
	zones: any[];
	resources: any[];
	[key: string]: any;
}

import styles from './PostApocalypticWastelandMapBoard.module.scss';

const SVG_SIZE = 480;
const ZONE_RADIUS = 40;
const RESOURCE_RADIUS = 14;

function getZonePosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange zones in a rough circle
	const angle = (2 * Math.PI * index) / total;
	const cx =
		SVG_SIZE / 2 +
		Math.cos(angle) * (SVG_SIZE / 2 - ZONE_RADIUS * 2);
	const cy =
		SVG_SIZE / 2 +
		Math.sin(angle) * (SVG_SIZE / 2 - ZONE_RADIUS * 2);
	return { x: cx, y: cy };
}

function getResourcePosition(
	zone: { x: number; y: number },
	idx: number,
	total: number
): { x: number; y: number } {
	// Scatter resources around zone
	const angle = (2 * Math.PI * idx) / total;
	const r = ZONE_RADIUS + 32;
	return {
		x: zone.x + Math.cos(angle) * r,
		y: zone.y + Math.sin(angle) * r,
	};
}

const PostApocalypticWastelandMapBoard: React.FC<
	PostApocalypticWastelandMapBoardProps
> = ({
	zones = [],
	resources = [],
	className = '',
	style = {},
	...props
}) => {
	// Map zones to positions
	const zonePositions = zones.map(
		(zone: any, i: number) => ({
			...zone,
			...getZonePosition(i, zones.length),
		})
	);

	// Map resources to zones
	const resourcePositions = resources.map(
		(res: any, i: number) => {
			const zoneIdx = res.zoneIndex ?? 0;
			const zone = zonePositions[zoneIdx] || {
				x: SVG_SIZE / 2,
				y: SVG_SIZE / 2,
			};
			return {
				...res,
				...getResourcePosition(zone, i, resources.length),
			};
		}
	);

	return (
		<div
			className={`${styles['post-apocalyptic-wasteland-map-board'] || ''} ${className}`.trim()}
			style={style}
			role='region'
			aria-label='Post-apocalyptic wasteland map'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={
					styles[
						'post-apocalyptic-wasteland-map-board__svg'
					]
				}
				aria-hidden='true'
			>
				{/* Render zones */}
				{zonePositions.map((zone, i) => (
					<g key={i}>
						<circle
							cx={zone.x}
							cy={zone.y}
							r={ZONE_RADIUS}
							fill={zone.color || '#b0a16b'}
							stroke='#333'
							strokeWidth={3}
							className={
								styles[
									'post-apocalyptic-wasteland-map-board__zone'
								]
							}
						/>
						<text
							x={zone.x}
							y={zone.y}
							textAnchor='middle'
							dominantBaseline='middle'
							fontSize={18}
							fill='#222'
							className={
								styles[
									'post-apocalyptic-wasteland-map-board__zone-label'
								]
							}
						>
							{zone.label || `Zone ${i + 1}`}
						</text>
					</g>
				))}
				{/* Render resources */}
				{resourcePositions.map((res, i) => (
					<g key={i}>
						<circle
							cx={res.x}
							cy={res.y}
							r={RESOURCE_RADIUS}
							fill={res.color || '#c7e6a3'}
							stroke='#444'
							strokeWidth={2}
							className={
								styles[
									'post-apocalyptic-wasteland-map-board__resource'
								]
							}
						/>
						<text
							x={res.x}
							y={res.y}
							textAnchor='middle'
							dominantBaseline='middle'
							fontSize={12}
							fill='#333'
							className={
								styles[
									'post-apocalyptic-wasteland-map-board__resource-label'
								]
							}
						>
							{res.label || 'Resource'}
						</text>
					</g>
				))}
				{/* Optional: Render wasteland background */}
				<ellipse
					cx={SVG_SIZE / 2}
					cy={SVG_SIZE / 2}
					rx={SVG_SIZE / 2 - 12}
					ry={SVG_SIZE / 2 - 24}
					fill='#e2d7b1'
					opacity={0.18}
					className={
						styles[
							'post-apocalyptic-wasteland-map-board__background'
						]
					}
				/>
			</svg>
			{/* Accessible legend for screen readers */}
			<ul
				className={
					styles[
						'post-apocalyptic-wasteland-map-board__legend'
					]
				}
			>
				{zonePositions.map((zone, i) => (
					<li key={i}>
						<strong>{zone.label || `Zone ${i + 1}`}</strong>
						: {zone.description || 'No description'}
					</li>
				))}
				{resourcePositions.map((res, i) => (
					<li key={`res-${i}`}>
						{res.label || 'Resource'}:{' '}
						{res.description || 'No description'}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostApocalypticWastelandMapBoard;
