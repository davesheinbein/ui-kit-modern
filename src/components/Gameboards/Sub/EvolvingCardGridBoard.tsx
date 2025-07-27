import React from 'react';
import './EvolvingCardGridBoard.module.scss';

export interface EvolvingCardGridBoardProps {
	cards: any[];
	evolutionStates: any[];
	[key: string]: any;
}

const EvolvingCardGridBoard: React.FC<
	EvolvingCardGridBoardProps
> = ({
	cards = [],
	evolutionStates = [],
	className = '',
	style = {},
	...props
}) => {
	// Render 3x3 grid
	const size = 3;
	const grid = [];
	for (let row = 0; row < size; row++) {
		const rowCells = [];
		for (let col = 0; col < size; col++) {
			const idx = row * size + col;
			const card = cards[idx] ?? '';
			const evolution = evolutionStates[idx] ?? 0;
			rowCells.push(
				<div
					key={col}
					className='evolving-card-grid-board__cell'
					style={{
						width: 64,
						height: 96,
						border: '1px solid #ccc',
						borderRadius: 8,
						margin: 4,
						background: `rgba(0,128,255,${0.2 + evolution * 0.2})`,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div style={{ fontWeight: 'bold', fontSize: 18 }}>
						{card}
					</div>
					<div
						style={{
							fontSize: 12,
							color: '#666',
							marginTop: 4,
						}}
					>
						Evolution: {evolution}
					</div>
				</div>
			);
		}
		grid.push(
			<div
				key={row}
				className='evolving-card-grid-board__row'
				style={{ display: 'flex' }}
			>
				{rowCells}
			</div>
		);
	}
	return (
		<div
			className={`evolving-card-grid-board ${className}`}
			style={{ padding: 8, ...style }}
			{...props}
		>
			<div className='evolving-card-grid-board__grid'>
				{grid}
			</div>
		</div>
	);
};

export default EvolvingCardGridBoard;
