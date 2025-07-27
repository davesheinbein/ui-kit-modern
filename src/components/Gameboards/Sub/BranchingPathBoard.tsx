import React from 'react';

export interface BranchingPathBoardProps {
	branches: any[];
	[key: string]: any;
}

const BranchingPathBoard: React.FC<
	BranchingPathBoardProps
> = ({
	branches,
	className = '',
	style = {},
	...props
}) => {
	// Each branch is an array of nodes: [{id, label, isBranchPoint, isEndPoint}]
	// Render as a vertical list with branch points visually indicated
	return (
		<div
			className={`branching-path-board ${className}`}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 16,
				...style,
			}}
			{...props}
		>
			{branches.map((branch, branchIdx) => (
				<div
					key={`branch-${branchIdx}`}
					className='branch-row'
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 8,
					}}
				>
					{branch.map((node: any, nodeIdx: number) => {
						const isBranchPoint = node.isBranchPoint;
						const isEndPoint = node.isEndPoint;
						return (
							<div
								key={`node-${branchIdx}-${nodeIdx}`}
								className={`branch-node${isBranchPoint ? ' branch-point' : ''}${isEndPoint ? ' end-point' : ''}`}
								style={{
									width: 32,
									height: 32,
									borderRadius: '50%',
									background:
										isBranchPoint ? '#ffd700'
										: isEndPoint ? '#4caf50'
										: '#e0e0e0',
									border: '2px solid #888',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontWeight: 'bold',
									color: '#333',
									boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
									transition: 'box-shadow 0.2s',
								}}
							>
								{node.label || node.id || nodeIdx + 1}
							</div>
						);
					})}
				</div>
			))}
		</div>
	);
};

export default BranchingPathBoard;
