import React from 'react';

export interface RealWorldMapBoardProps {
	regions: any[];
	mapData?: any;
	[key: string]: any;
}

import styles from './RealWorldMapBoard.module.scss';

const DEFAULT_WIDTH = 480;
const DEFAULT_HEIGHT = 320;

const RealWorldMapBoard: React.FC<
	RealWorldMapBoardProps
> = ({
	regions = [],
	mapData = {},
	className = '',
	style = {},
	regionRenderer,
	...props
}) => {
	// Fallback: simple SVG territory layout
	const width = style.width || DEFAULT_WIDTH;
	const height = style.height || DEFAULT_HEIGHT;

	// Simple circular territory layout for demo
	const regionCount = regions.length;
	const centerX = width / 2;
	const centerY = height / 2;
	const radius = Math.min(width, height) / 2.5;

	const getRegionPosition = (idx: number) => {
		const angle =
			(2 * Math.PI * idx) / Math.max(regionCount, 1);
		return {
			x: centerX + radius * Math.cos(angle),
			y: centerY + radius * Math.sin(angle),
		};
	};

	return (
		<div
			className={`${styles.realWorldMapBoard || ''} ${className}`.trim()}
			style={{
				width,
				height,
				position: 'relative',
				...style,
			}}
			role='region'
			aria-label='Real World Map Board'
			{...props}
		>
			<svg
				width={width}
				height={height}
				style={{
					display: 'block',
					width: '100%',
					height: '100%',
				}}
			>
				{/* Base map background */}
				<rect
					x={0}
					y={0}
					width={width}
					height={height}
					fill='#e0e7ef'
					rx={24}
				/>
				{/* Render regions as circles */}
				{regions.map((region, idx) => {
					const { x, y } = getRegionPosition(idx);
					const color =
						region.color ||
						`hsl(${(idx * 360) / Math.max(regionCount, 1)}, 60%, 70%)`;
					return (
						<g key={region.id || idx}>
							<circle
								cx={x}
								cy={y}
								r={36}
								fill={color}
								stroke='#64748b'
								strokeWidth={2}
								className={styles.region}
								aria-label={
									region.name || `Region ${idx + 1}`
								}
								tabIndex={0}
							/>
							<text
								x={x}
								y={y}
								textAnchor='middle'
								alignmentBaseline='middle'
								fontSize={16}
								fontWeight={600}
								fill='#22223b'
								pointerEvents='none'
							>
								{regionRenderer ?
									regionRenderer(region, idx)
								:	region.name || `Region ${idx + 1}`}
							</text>
						</g>
					);
				})}
			</svg>
			{/* Optionally render mapData summary */}
			{mapData && mapData.name && (
				<div
					className={styles.mapLabel}
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						bottom: 8,
						textAlign: 'center',
						fontWeight: 500,
						fontSize: 18,
						color: '#22223b',
					}}
				>
					{mapData.name}
				</div>
			)}
		</div>
	);
};

export default RealWorldMapBoard;
