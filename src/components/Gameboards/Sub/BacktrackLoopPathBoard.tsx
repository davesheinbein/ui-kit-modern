import React from 'react';

export interface BacktrackLoopPathBoardProps {
	positions: any[];
	loops: any[];
	[key: string]: any;
}

const BacktrackLoopPathBoard: React.FC<
	BacktrackLoopPathBoardProps
> = ({ positions, loops, ...props }) => {
	// Render backtrack loop path
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 18,
				padding: 18,
				background: '#f3f4f6',
				borderRadius: 10,
				boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
			}}
			{...props}
		>
			{positions?.map((pos, idx) => {
				const isLoop = loops?.some(
					(loop) => loop.index === idx
				);
				return (
					<div
						key={pos.id || idx}
						style={{
							background: isLoop ? '#f59e42' : '#e0e7ef',
							color: isLoop ? '#fff' : '#222',
							borderRadius: 8,
							minWidth: 60,
							minHeight: 60,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 600,
							fontSize: 16,
							boxShadow:
								isLoop ?
									'0 2px 8px rgba(245,158,66,0.12)'
								:	'0 2px 8px rgba(0,0,0,0.04)',
							position: 'relative',
						}}
					>
						{pos.name || `Step ${idx + 1}`}
						{isLoop && (
							<span
								style={{
									position: 'absolute',
									top: 6,
									right: 10,
									background: '#3b82f6',
									color: '#fff',
									borderRadius: 10,
									padding: '2px 8px',
									fontSize: 12,
									fontWeight: 700,
									boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
								}}
							>
								Loop
							</span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default BacktrackLoopPathBoard;
