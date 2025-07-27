import React from 'react';
import './EscalatingCostPathBoard.module.scss';

export interface EscalatingCostPathBoardProps {
	segments: any[];
	costs: number[];
	[key: string]: any;
}

const EscalatingCostPathBoard: React.FC<
	EscalatingCostPathBoardProps
> = ({
	segments = [],
	costs = [],
	className = '',
	style = {},
	...props
}) => {
	// Render segments as a horizontal path, each with its cost
	return (
		<div
			className={`escalating-cost-path-board ${className}`}
			style={{ display: 'flex', gap: 8, ...style }}
			{...props}
		>
			{segments.map((segment, idx) => (
				<div
					key={idx}
					className='escalating-cost-path-board__segment'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div
						className='escalating-cost-path-board__tile'
						style={{
							width: 40,
							height: 40,
							background: '#f8fafc',
							border: '1px solid #ccc',
							borderRadius: 8,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{segment}
					</div>
					<div
						className='escalating-cost-path-board__cost'
						style={{
							marginTop: 4,
							color: `hsl(${120 - Math.min(costs[idx] * 10, 120)}, 70%, 40%)`,
							fontWeight: 'bold',
						}}
					>
						{costs[idx]}
					</div>
				</div>
			))}
		</div>
	);
};

export default EscalatingCostPathBoard;
