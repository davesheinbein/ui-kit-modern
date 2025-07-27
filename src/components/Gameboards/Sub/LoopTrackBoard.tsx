import React from 'react';
import styles from './LoopTrackBoard.module.scss';

export interface LoopTrackBoardProps {
	positions: Array<{
		label?: string;
		color?: string;
		id?: string;
		[key: string]: any;
	}>;
	className?: string;
	style?: React.CSSProperties;
	renderNode?: (node: any, idx: number) => React.ReactNode;
	ariaLabel?: string;
	loopRadius?: number;
	nodeRadius?: number;
	[key: string]: any;
}

const DEFAULT_LOOP_RADIUS = 120;
const DEFAULT_NODE_RADIUS = 18;

const LoopTrackBoard: React.FC<LoopTrackBoardProps> = ({
	positions = [],
	className = '',
	style = {},
	renderNode,
	ariaLabel = 'Loop Track Board',
	loopRadius = DEFAULT_LOOP_RADIUS,
	nodeRadius = DEFAULT_NODE_RADIUS,
	...props
}) => {
	// Calculate node positions in a circle
	const center = {
		x: loopRadius + nodeRadius + 16,
		y: loopRadius + nodeRadius + 16,
	};
	const total = positions.length;
	const svgSize = 2 * (loopRadius + nodeRadius + 16);

	return (
		<div
			className={`${styles.loopTrackBoard || 'loop-track-board'} ${className}`}
			style={style}
			role='group'
			aria-label={ariaLabel}
			{...props}
		>
			<svg
				width={svgSize}
				height={svgSize}
				className={
					styles.loopTrackBoard__svg ||
					'loop-track-board__svg'
				}
				aria-hidden='true'
			>
				{/* Draw loop circle */}
				<circle
					cx={center.x}
					cy={center.y}
					r={loopRadius}
					fill='none'
					stroke='#b6c2d6'
					strokeWidth={4}
				/>
				{/* Draw nodes */}
				{positions.map((node, idx) => {
					const angle = (2 * Math.PI * idx) / total;
					const x = center.x + loopRadius * Math.cos(angle);
					const y = center.y + loopRadius * Math.sin(angle);
					return (
						<g key={node.id || idx}>
							<circle
								cx={x}
								cy={y}
								r={nodeRadius}
								fill={node.color || '#e0e7ef'}
								stroke='#334155'
								strokeWidth={2}
							/>
							<text
								x={x}
								y={y + 5}
								textAnchor='middle'
								fontSize={14}
								fontWeight={600}
								fill='#222'
							>
								{node.label || idx + 1}
							</text>
						</g>
					);
				})}
			</svg>
			<div
				className={
					styles.loopTrackBoard__labels ||
					'loop-track-board__labels'
				}
			>
				{positions.map((node, idx) => (
					<div
						key={node.id || idx}
						className={
							styles.loopTrackBoard__nodeLabel ||
							'loop-track-board__node-label'
						}
						aria-label={node.label || `Node ${idx + 1}`}
					>
						{renderNode ?
							renderNode(node, idx)
						:	node.label || `Node ${idx + 1}`}
					</div>
				))}
			</div>
		</div>
	);
};

export default LoopTrackBoard;
