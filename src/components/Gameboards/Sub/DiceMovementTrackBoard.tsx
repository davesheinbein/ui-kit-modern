import React from 'react';

export interface DiceMovementTrackBoardProps {
	positions: any[];
	diceValues: number[];
	[key: string]: any;
}

const DiceMovementTrackBoard: React.FC<
	DiceMovementTrackBoardProps
> = ({
	positions = [],
	diceValues = [],
	activeIndex = 0,
	className = '',
	style = {},
	onPositionClick,
	...props
}) => {
	// Render positions as a linear track, show dice values
	// Each position: { id, label, color }
	return (
		<div
			className={`dice-movement-track-board ${className}`}
			style={{
				display: 'flex',
				gap: 12,
				alignItems: 'center',
				justifyContent: 'center',
				...style,
			}}
			{...props}
		>
			{positions.map((pos: any, idx: number) => (
				<div
					key={pos.id || idx}
					className={`dice-movement-track-board__cell${activeIndex === idx ? ' dice-movement-track-board__cell--active' : ''}`}
					style={{
						background: pos.color || '#f0f0f0',
						border: '2px solid #888',
						borderRadius: 8,
						padding: '10px 16px',
						minWidth: 48,
						textAlign: 'center',
						position: 'relative',
						boxShadow:
							activeIndex === idx ?
								'0 0 10px #ffd700'
							:	'none',
						cursor: onPositionClick ? 'pointer' : 'default',
						transition: 'box-shadow 0.2s',
					}}
					onClick={() =>
						onPositionClick && onPositionClick(pos)
					}
				>
					<span
						style={{ fontWeight: 'bold', fontSize: 15 }}
					>
						{pos.label || idx + 1}
					</span>
					{/* Dice value at this position */}
					{diceValues[idx] !== undefined && (
						<span
							style={{
								position: 'absolute',
								bottom: 4,
								right: 8,
								fontSize: 18,
								color: '#222',
								background: '#fff',
								borderRadius: 6,
								padding: '2px 6px',
								border: '1px solid #bbb',
								boxShadow: '0 1px 4px #eee',
							}}
						>
							🎲 {diceValues[idx]}
						</span>
					)}
				</div>
			))}
		</div>
	);
};

export default DiceMovementTrackBoard;
