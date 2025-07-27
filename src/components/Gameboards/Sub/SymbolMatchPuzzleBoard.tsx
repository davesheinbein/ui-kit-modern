import React from 'react';
let styles: any = {};
try {
	styles = require('./SymbolMatchPuzzleBoard.module.scss');
} catch {
	try {
		styles = require('./SquareGridBoard.scss');
	} catch {
		styles = {};
	}
}

export interface SymbolMatchPuzzleBoardProps {
	symbols: Array<{
		label: string;
		x?: number;
		y?: number;
		color?: string;
	}>;
	matches: Array<{
		from: number;
		to: number;
		color?: string;
	}>;
	gridSize?: number;
	nodeRadius?: number;
	showLabels?: boolean;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SVG_SIZE = 420;
const DEFAULT_GRID_SIZE = 4;
const DEFAULT_NODE_RADIUS = 24;

const SymbolMatchPuzzleBoard: React.FC<
	SymbolMatchPuzzleBoardProps
> = ({
	symbols = [],
	matches = [],
	gridSize = DEFAULT_GRID_SIZE,
	nodeRadius = DEFAULT_NODE_RADIUS,
	showLabels = true,
	className = '',
	style = {},
	...props
}) => {
	// Calculate positions if not provided
	const getSymbolPos = (sym: any, i: number) => {
		if (
			typeof sym.x === 'number' &&
			typeof sym.y === 'number'
		)
			return sym;
		// Place symbols in grid
		const col = i % gridSize;
		const row = Math.floor(i / gridSize);
		const padding = nodeRadius * 2 + 12;
		return {
			x:
				padding +
				(col * (SVG_SIZE - 2 * padding)) / (gridSize - 1),
			y:
				padding +
				(row * (SVG_SIZE - 2 * padding)) / (gridSize - 1),
			label: sym.label,
			color: sym.color,
		};
	};

	const renderedSymbols = symbols.map(getSymbolPos);

	return (
		<div
			className={`${styles.symbolMatchPuzzleBoard || ''} ${className}`.trim()}
			style={style}
			role='group'
			aria-label='Symbol Match Puzzle Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.symbolMatchPuzzleBoard__svg || ''}
				aria-hidden='false'
			>
				{/* Matches as lines */}
				{matches.map((match, idx) => {
					const from = renderedSymbols[match.from];
					const to = renderedSymbols[match.to];
					if (!from || !to) return null;
					return (
						<line
							key={idx}
							x1={from.x}
							y1={from.y}
							x2={to.x}
							y2={to.y}
							stroke={match.color || '#f59e42'}
							strokeWidth={4}
							className={
								styles.symbolMatchPuzzleBoard__match || ''
							}
							aria-label={`Match from ${from.label || match.from} to ${to.label || match.to}`}
						/>
					);
				})}
				{/* Symbols as nodes */}
				{renderedSymbols.map((sym, i) => (
					<g key={i}>
						<circle
							cx={sym.x}
							cy={sym.y}
							r={nodeRadius}
							fill={sym.color || '#2563eb'}
							className={
								styles.symbolMatchPuzzleBoard__node || ''
							}
							aria-label={sym.label || `Symbol ${i + 1}`}
							tabIndex={0}
						/>
						{showLabels && (
							<text
								x={sym.x}
								y={sym.y + nodeRadius + 18}
								textAnchor='middle'
								fontSize={18}
								fill='#111827'
								className={
									styles.symbolMatchPuzzleBoard__label || ''
								}
								aria-hidden='true'
							>
								{sym.label || i + 1}
							</text>
						)}
					</g>
				))}
			</svg>
		</div>
	);
};

export default SymbolMatchPuzzleBoard;
