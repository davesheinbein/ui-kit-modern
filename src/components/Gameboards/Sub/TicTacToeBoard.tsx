import React from 'react';
let styles: any = {};
try {
	styles = require('./SquareGridBoard.scss');
} catch {
	try {
		styles = {};
	} catch {
		styles = {};
	}
}

export interface TicTacToeBoardProps {
	board?: string[][];
	onCellClick?: (index: number) => void;
	[key: string]: any;
}

const TicTacToeBoard: React.FC<TicTacToeBoardProps> = ({
	board = [
		['', '', ''],
		['', '', ''],
		['', '', ''],
	],
	onCellClick,
	className = '',
	style = {},
	...props
}) => {
	// Render 3x3 grid for Tic-tac-toe
	const renderCell = (cell: string, idx: number) => (
		<button
			key={idx}
			type='button'
			className={
				styles?.ticTacToeCell || 'tic-tac-toe-board__cell'
			}
			aria-label={`Cell ${idx + 1}: ${cell || 'empty'}`}
			onClick={() => onCellClick?.(idx)}
			disabled={!!cell}
			tabIndex={0}
			style={{
				width: 64,
				height: 64,
				fontSize: '2rem',
				cursor: cell ? 'not-allowed' : 'pointer',
				...style,
			}}
			{...props}
		>
			{cell}
		</button>
	);

	return (
		<div
			className={`${styles?.ticTacToeBoard || 'tic-tac-toe-board'} ${className}`.trim()}
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gap: 4,
				maxWidth: 200,
				margin: '0 auto',
				...style,
			}}
			role='grid'
			aria-label='Tic-tac-toe board'
		>
			{board.map((row, r) =>
				row.map((cell, c) => renderCell(cell, r * 3 + c))
			)}
		</div>
	);
};

export default TicTacToeBoard;
