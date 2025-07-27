import React from 'react';

export interface InfinityLoopBoardProps {
	loopData: any;
	[key: string]: any;
}

import './InfinityLoopBoard.module.scss';

const InfinityLoopBoard: React.FC<
	InfinityLoopBoardProps
> = ({
	loopData = {},
	mobius = false,
	className = '',
	style = {},
	...props
}) => {
	// SVG path for infinity symbol
	const infinityPath =
		'M 50,100 C 50,50 150,50 150,100 C 150,150 50,150 50,100 M 150,100 C 150,50 250,50 250,100 C 250,150 150,150 150,100';
	// SVG path for Mobius strip (simple twist)
	const mobiusPath =
		'M 50,100 Q 100,50 150,100 Q 200,150 250,100 Q 200,50 150,100 Q 100,150 50,100';
	const path = mobius ? mobiusPath : infinityPath;

	// Example: loopData.nodes = [{label, color, x, y}], loopData.edges = [[fromIdx, toIdx]]
	const nodes = loopData.nodes || [];
	const edges = loopData.edges || [];

	return (
		<div
			className={`infinity-loop-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				viewBox='0 0 300 200'
				width={300}
				height={200}
				className='infinity-loop-board__svg'
			>
				<path
					d={path}
					fill='none'
					stroke='#6366f1'
					strokeWidth={6}
				/>
				{/* Render nodes if present */}
				{nodes.map((node: any, idx: number) => (
					<circle
						key={idx}
						cx={node.x}
						cy={node.y}
						r={14}
						fill={node.color || '#fbbf24'}
						stroke='#334155'
						strokeWidth={2}
					/>
				))}
				{/* Render node labels */}
				{nodes.map((node: any, idx: number) => (
					<text
						key={'label-' + idx}
						x={node.x}
						y={node.y + 5}
						textAnchor='middle'
						fontSize={14}
						fill='#334155'
					>
						{node.label}
					</text>
				))}
				{/* Render edges if present */}
				{edges.map((edge: any, idx: number) => {
					const from = nodes[edge[0]];
					const to = nodes[edge[1]];
					if (!from || !to) return null;
					return (
						<line
							key={'edge-' + idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke='#64748b'
							strokeWidth={3}
							strokeDasharray='6 4'
						/>
					);
				})}
			</svg>
			<div className='infinity-loop-board__info'>
				{mobius ?
					<span className='infinity-loop-board__label'>
						Mobius Strip Variant
					</span>
				:	<span className='infinity-loop-board__label'>
						Infinity Loop
					</span>
				}
				{nodes.length === 0 && (
					<span className='infinity-loop-board__empty'>
						No nodes
					</span>
				)}
			</div>
		</div>
	);
};

export default InfinityLoopBoard;
