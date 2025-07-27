import React from 'react';
let styles: any = {};
try {
	styles = require('./HexGridBoard.module.scss');
} catch {
	try {
		styles = require('./ModularHexTileBoard.module.scss');
	} catch {
		styles = {};
	}
}

export interface HexGridBoardProps {
	hexes: any[];
	cellRenderer?: (hex: any, idx: number) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const HEX_SIZE = 32;
function hexPoints(cx: number, cy: number, size: number) {
	return Array.from({ length: 6 }, (_, i) => {
		const angle = (Math.PI / 3) * i;
		return `${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`;
	}).join(' ');
}

const HexGridBoard: React.FC<HexGridBoardProps> = ({
	hexes = [],
	cellRenderer = (hex, idx) => hex,
	className = '',
	style = {},
	...props
}) => {
	const rowHeight = HEX_SIZE * 0.85;
	const colWidth = HEX_SIZE * 1.0;
	return (
		<svg
			className={`${styles?.hexGridBoard || 'hex-grid-board'} ${className}`.trim()}
			style={{
				background: '#f8fafc',
				borderRadius: 8,
				boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
				...style,
			}}
			width={hexes[0]?.length * colWidth + HEX_SIZE}
			height={hexes.length * rowHeight + HEX_SIZE}
			viewBox={`0 0 ${hexes[0]?.length * colWidth + HEX_SIZE} ${hexes.length * rowHeight + HEX_SIZE}`}
			role='grid'
			aria-label='Hex grid board'
			{...props}
		>
			{hexes.map((row: any[], rowIdx: number) =>
				row.map((hex: any, colIdx: number) => {
					const cx =
						colIdx * colWidth +
						(rowIdx % 2 ? colWidth / 2 : 0) +
						HEX_SIZE / 2;
					const cy = rowIdx * rowHeight + HEX_SIZE / 2;
					return (
						<g key={`hex-${rowIdx}-${colIdx}`}>
							<polygon
								points={hexPoints(cx, cy, HEX_SIZE / 2)}
								className={
									styles?.hexGridCell ||
									'hex-grid-board__cell'
								}
								fill='#f3f4f6'
								stroke='#d1d5db'
								aria-label={`Hex cell ${rowIdx * row.length + colIdx + 1}`}
								tabIndex={0}
							/>
							<text
								x={cx}
								y={cy}
								fontSize='14'
								textAnchor='middle'
								alignmentBaseline='middle'
								fill='#374151'
							>
								{cellRenderer(
									hex,
									rowIdx * row.length + colIdx
								)}
							</text>
						</g>
					);
				})
			)}
		</svg>
	);
};

export default HexGridBoard;
