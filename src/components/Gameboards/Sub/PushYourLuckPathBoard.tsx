import React from 'react';

export interface PushYourLuckPathBoardProps {
	segments: any[];
	risks: any[];
	[key: string]: any;
}

import styles from './PushYourLuckPathBoard.module.scss';

const SVG_SIZE = 480;
const PATH_RADIUS = 160;
const NODE_RADIUS = 18;
const RISK_RADIUS = 12;

function getPathPosition(
	index: number,
	total: number
): { x: number; y: number } {
	// Arrange path nodes in a spiral
	const angle =
		(2 * Math.PI * index) / total + index * 0.18;
	const r = PATH_RADIUS + index * 8;
	return {
		x: SVG_SIZE / 2 + Math.cos(angle) * r,
		y: SVG_SIZE / 2 + Math.sin(angle) * r,
	};
}

const PushYourLuckPathBoard: React.FC<
	PushYourLuckPathBoardProps
> = ({
	segments = [],
	risks = [],
	className = '',
	style = {},
	...props
}) => {
	// Map segments to positions
	const positions = segments.map((seg: any, i: number) => ({
		...seg,
		...getPathPosition(i, segments.length),
	}));

	// Map risks to positions
	const riskPositions = risks.map(
		(risk: any, i: number) => {
			const segIdx = risk.segmentIndex ?? i;
			const seg = positions[segIdx] || {
				x: SVG_SIZE / 2,
				y: SVG_SIZE / 2,
			};
			return {
				...risk,
				x: seg.x,
				y: seg.y,
			};
		}
	);

	return (
		<div
			className={`${styles['push-your-luck-path-board'] || ''} ${className}`.trim()}
			style={style}
			role='region'
			aria-label='Push-your-luck path board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles['push-your-luck-path-board__svg']}
				aria-hidden='true'
			>
				{/* Render path segments as lines */}
				{positions.map((pos, i) =>
					i > 0 ?
						<line
							key={`line-${i}`}
							x1={positions[i - 1].x}
							y1={positions[i - 1].y}
							x2={pos.x}
							y2={pos.y}
							stroke='#888'
							strokeWidth={4}
							className={
								styles['push-your-luck-path-board__segment']
							}
						/>
					:	null
				)}
				{/* Render nodes */}
				{positions.map((pos, i) => (
					<g key={`node-${i}`}>
						<circle
							cx={pos.x}
							cy={pos.y}
							r={NODE_RADIUS}
							fill={pos.color || '#fbbf24'}
							stroke='#333'
							strokeWidth={3}
							className={
								styles['push-your-luck-path-board__node']
							}
						/>
						<text
							x={pos.x}
							y={pos.y}
							textAnchor='middle'
							dominantBaseline='middle'
							fontSize={16}
							fill='#222'
							className={
								styles[
									'push-your-luck-path-board__node-label'
								]
							}
						>
							{pos.label || `Step ${i + 1}`}
						</text>
					</g>
				))}
				{/* Render risk markers */}
				{riskPositions.map((risk, i) => (
					<g key={`risk-${i}`}>
						<circle
							cx={risk.x}
							cy={risk.y}
							r={RISK_RADIUS}
							fill={risk.color || '#e67e7e'}
							stroke='#be185d'
							strokeWidth={2}
							className={
								styles['push-your-luck-path-board__risk']
							}
							opacity={0.8}
						/>
						<text
							x={risk.x}
							y={risk.y + RISK_RADIUS + 14}
							textAnchor='middle'
							fontSize={13}
							fill='#be185d'
							className={
								styles[
									'push-your-luck-path-board__risk-label'
								]
							}
						>
							{risk.label || 'Risk'}
						</text>
					</g>
				))}
				{/* Optional: Render background */}
				<ellipse
					cx={SVG_SIZE / 2}
					cy={SVG_SIZE / 2}
					rx={SVG_SIZE / 2 - 12}
					ry={SVG_SIZE / 2 - 24}
					fill='#fef3c7'
					opacity={0.14}
					className={
						styles['push-your-luck-path-board__background']
					}
				/>
			</svg>
			{/* Accessible legend for screen readers */}
			<ul
				className={
					styles['push-your-luck-path-board__legend']
				}
			>
				{positions.map((pos, i) => (
					<li key={i}>
						<strong>{pos.label || `Step ${i + 1}`}</strong>:{' '}
						{pos.description || 'No description'}
					</li>
				))}
				{riskPositions.map((risk, i) => (
					<li key={`risk-${i}`}>
						{risk.label || 'Risk'}:{' '}
						{risk.description || 'No description'}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PushYourLuckPathBoard;
