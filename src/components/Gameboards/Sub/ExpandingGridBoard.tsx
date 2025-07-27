import React from 'react';
import './ExpandingGridBoard.module.scss';

export interface ExpandingGridBoardProps {
	grid: any[];
	addOnTiles: any[];
	[key: string]: any;
}

const ExpandingGridBoard: React.FC<
	ExpandingGridBoardProps
> = ({
	grid = [],
	addOnTiles = [],
	className = '',
	style = {},
	...props
}) => {
	// Render main grid (assume 2D array)
	const mainGrid = grid.map((rowArr, rowIdx) => (
		<div
			key={rowIdx}
			className='expanding-grid-board__row'
			style={{ display: 'flex' }}
		>
			{rowArr.map((cell, colIdx) => (
				<div
					key={colIdx}
					className='expanding-grid-board__cell'
					style={{
						width: 40,
						height: 40,
						border: '1px solid #ccc',
						borderRadius: 6,
						margin: 2,
						background: '#f8fafc',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					{cell}
				</div>
			))}
		</div>
	));
	// Render add-on tiles below
	const addOns =
		addOnTiles.length > 0 ?
			<div
				className='expanding-grid-board__addons'
				style={{ marginTop: 12, display: 'flex', gap: 8 }}
			>
				{addOnTiles.map((tile, idx) => (
					<div
						key={idx}
						className='expanding-grid-board__addon-tile'
						style={{
							width: 40,
							height: 40,
							border: '2px dashed #888',
							borderRadius: 6,
							background: '#e0f7fa',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						{tile}
					</div>
				))}
			</div>
		:	null;
	return (
		<div
			className={`expanding-grid-board ${className}`}
			style={{ padding: 8, ...style }}
			{...props}
		>
			<div className='expanding-grid-board__grid'>
				{mainGrid}
			</div>
			{addOns}
		</div>
	);
};

export default ExpandingGridBoard;
