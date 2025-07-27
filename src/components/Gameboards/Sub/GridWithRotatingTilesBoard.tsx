import React from 'react';

export interface GridWithRotatingTilesBoardProps {
	rows: number;
	columns: number;
	tileRotations: number[][];
	onTileRotate?: (row: number, col: number) => void;
	className?: string;
	style?: React.CSSProperties;
}

const GridWithRotatingTilesBoard: React.FC<
	GridWithRotatingTilesBoardProps
> = ({
	rows,
	columns,
	tileRotations,
	onTileRotate,
	className = '',
	style = {},
}) => {
	return (
		<div
			className={`gridWithRotatingTilesBoard ${className}`.trim()}
			style={style}
		>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: `repeat(${rows}, 1fr)`,
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
				}}
			>
				{tileRotations.map((row, rowIdx) =>
					row.map((rotation, colIdx) => (
						<div
							key={`${rowIdx}-${colIdx}`}
							className='gridWithRotatingTilesBoard__tile'
							onClick={() => onTileRotate?.(rowIdx, colIdx)}
							style={{
								border: '1px solid #e5e7eb',
								minHeight: 48,
								minWidth: 48,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								cursor: 'pointer',
								background: '#f3f4f6',
								transition: 'transform 0.3s',
								transform: `rotate(${rotation}deg)`,
							}}
						>
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
							>
								<rect
									x='4'
									y='4'
									width='24'
									height='24'
									rx='6'
									fill='#fff'
									stroke='#d1d5db'
									strokeWidth='2'
								/>
								<circle
									cx='16'
									cy='16'
									r='6'
									fill='#60a5fa'
								/>
								<line
									x1='16'
									y1='16'
									x2='16'
									y2='6'
									stroke='#2563eb'
									strokeWidth='2'
								/>
								<text
									x='16'
									y='30'
									fontSize='10'
									textAnchor='middle'
									fill='#6b7280'
								>
									{rotation}°
								</text>
							</svg>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default GridWithRotatingTilesBoard;
