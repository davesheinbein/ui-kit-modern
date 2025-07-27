import React from 'react';

export interface ConveyorPathBoardProps {
	segments: any[];
	autoMove: boolean;
	[key: string]: any;
}

const ConveyorPathBoard: React.FC<
	ConveyorPathBoardProps
> = ({
	segments = [],
	autoMove = false,
	activeIndex = 0,
	className = '',
	style = {},
	onSegmentClick,
	...props
}) => {
	// Example: Render segments as conveyor tiles with arrows
	// Each segment: { id, label, direction ('left'|'right'|'up'|'down'), color }
	return (
		<div
			className={`conveyor-path-board ${className}`}
			style={style}
			{...props}
		>
			<div
				style={{
					display: 'flex',
					gap: 8,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{segments.map((seg: any, idx: number) => (
					<div
						key={seg.id || idx}
						className={`conveyor-path-board__tile${autoMove && idx === activeIndex ? ' conveyor-path-board__tile--active' : ''}`}
						style={{
							background: seg.color || '#e0e0e0',
							border: '2px solid #888',
							borderRadius: 8,
							padding: '12px 20px',
							minWidth: 48,
							textAlign: 'center',
							position: 'relative',
							boxShadow:
								autoMove && idx === activeIndex ?
									'0 0 12px #ffd700'
								:	'none',
							cursor:
								onSegmentClick ? 'pointer' : 'default',
							transition: 'box-shadow 0.2s',
						}}
						onClick={() =>
							onSegmentClick && onSegmentClick(seg)
						}
					>
						<span
							style={{ fontWeight: 'bold', fontSize: 16 }}
						>
							{seg.label || idx + 1}
						</span>
						{/* Direction arrow */}
						<span
							style={{
								position: 'absolute',
								right: 6,
								top: '50%',
								transform: 'translateY(-50%)',
								fontSize: 18,
							}}
						>
							{seg.direction === 'right' && '→'}
							{seg.direction === 'left' && '←'}
							{seg.direction === 'up' && '↑'}
							{seg.direction === 'down' && '↓'}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ConveyorPathBoard;
