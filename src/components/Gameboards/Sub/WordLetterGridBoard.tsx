import React from 'react';

export interface WordLetterGridBoardProps {
	letters?: string[];
	tiles?: { label: string }[];
	words?: string[];
	className?: string;
	style?: React.CSSProperties;
	cellRenderer?: (
		cell: string,
		row: number,
		col: number
	) => React.ReactNode;
	wordRenderer?: (
		word: string,
		idx: number
	) => React.ReactNode;
	[key: string]: any;
}

// Try to import dedicated SCSS module, fallback to empty object
let styles: any = {};
try {
	styles = require('./WordLetterGridBoard.module.scss');
} catch {}

const DEFAULT_GRID_SIZE = 5;

const WordLetterGridBoard: React.FC<
	WordLetterGridBoardProps
> = ({
	letters,
	tiles,
	words = [],
	className = '',
	style = {},
	cellRenderer,
	wordRenderer,
	...props
}) => {
	// Support both 'tiles' (array of objects with label) and 'letters' (array of strings)
	let letterArr: string[] = [];
	if (Array.isArray(tiles) && tiles.length > 0) {
		letterArr = tiles.map((t) => t.label ?? '');
	} else if (Array.isArray(letters) && letters.length > 0) {
		letterArr = letters;
	} else {
		// Default: 9 letters A-I
		letterArr = Array.from({ length: 9 }, (_, i) =>
			String.fromCharCode(65 + i)
		);
	}
	// Calculate grid size
	const gridSize = Math.max(
		DEFAULT_GRID_SIZE,
		Math.ceil(Math.sqrt(letterArr.length))
	);
	// Fill grid with letters
	const grid: string[][] = [];
	for (let r = 0; r < gridSize; r++) {
		grid[r] = [];
		for (let c = 0; c < gridSize; c++) {
			grid[r][c] = letterArr[r * gridSize + c] || '';
		}
	}

	return (
		<div
			className={`${styles['word-letter-grid-board'] ?? 'word-letter-grid-board'} ${className}`.trim()}
			style={style}
			role='grid'
			aria-label='Word/Letter Grid Board'
			{...props}
		>
			<div
				className={
					styles['word-letter-grid-board__grid'] ??
					'word-letter-grid-board__grid'
				}
			>
				{grid.map((row, rIdx) => (
					<div
						key={rIdx}
						className={
							styles['word-letter-grid-board__row'] ??
							'word-letter-grid-board__row'
						}
						role='row'
					>
						{row.map((cell, cIdx) => (
							<div
								key={cIdx}
								className={
									styles['word-letter-grid-board__cell'] ??
									'word-letter-grid-board__cell'
								}
								role='gridcell'
								aria-label={cell}
							>
								{cellRenderer ?
									cellRenderer(cell, rIdx, cIdx)
								:	cell}
							</div>
						))}
					</div>
				))}
			</div>
			{/* Render words below grid */}
			{words.length > 0 && (
				<div
					className={
						styles['word-letter-grid-board__words'] ??
						'word-letter-grid-board__words'
					}
				>
					{words.map((word, idx) => (
						<div
							key={idx}
							className={
								styles['word-letter-grid-board__word'] ??
								'word-letter-grid-board__word'
							}
							aria-label={word}
						>
							{wordRenderer ?
								wordRenderer(word, idx)
							:	word}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default WordLetterGridBoard;
