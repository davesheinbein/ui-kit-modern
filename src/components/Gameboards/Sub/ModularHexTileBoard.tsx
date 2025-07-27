import React from 'react';
import clsx from 'clsx';
import styles from './ModularHexTileBoard.module.scss';

export interface ModularHexTileBoardProps {
	hexTiles: Array<{
		id: string | number;
		row: number;
		col: number;
		label?: string;
		color?: string;
		[key: string]: any;
	}>;
	rows?: number;
	cols?: number;
	tileRenderer?: (tile: any) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const HEX_SIZE = 40;
const HEX_HEIGHT = Math.sqrt(3) * HEX_SIZE;
const HEX_WIDTH = 2 * HEX_SIZE;
const HEX_VERT_SPACING = HEX_HEIGHT * 0.75;

function getHexPosition(row: number, col: number) {
	// Staggered rows
	const x = col * HEX_WIDTH + (row % 2 ? HEX_SIZE : 0);
	const y = row * HEX_VERT_SPACING;
	return { x, y };
}

const ModularHexTileBoard: React.FC<
	ModularHexTileBoardProps
> = ({
	hexTiles = [],
	rows = 5,
	cols = 5,
	tileRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Defensive: handle empty tiles
	if (!Array.isArray(hexTiles) || hexTiles.length === 0) {
		return (
			<div
				className={clsx(
					styles['modular-hex-tile-board'],
					className
				)}
				style={style}
			>
				No hex tiles
			</div>
		);
	}

	// Board SVG size
	const width = cols * HEX_WIDTH + HEX_SIZE;
	const height = rows * HEX_VERT_SPACING + HEX_HEIGHT;

	return (
		<div
			className={clsx(
				styles['modular-hex-tile-board'],
				className
			)}
			style={style}
			role='grid'
			aria-label='Modular Hex Tile Board'
			{...props}
		>
			<svg
				width={width}
				height={height}
				className={styles['modular-hex-tile-board__svg']}
			>
				{hexTiles.map((tile) => {
					const {
						row,
						col,
						id,
						label,
						color = '#e0e7ef',
					} = tile;
					const { x, y } = getHexPosition(row, col);
					// Hex points
					const points = Array.from({ length: 6 })
						.map((_, i) => {
							const angle = (Math.PI / 3) * i;
							return [
								x + HEX_SIZE * Math.cos(angle),
								y + HEX_SIZE * Math.sin(angle),
							].join(',');
						})
						.join(' ');
					return (
						<g
							key={id}
							className={
								styles['modular-hex-tile-board__tile']
							}
						>
							<polygon
								points={points}
								fill={color}
								stroke='#22223b'
								strokeWidth={2}
								tabIndex={0}
								aria-label={label || `Hex ${id}`}
							/>
							{label && (
								<text
									x={x}
									y={y}
									textAnchor='middle'
									alignmentBaseline='middle'
									fontSize={16}
									fill='#22223b'
								>
									{label}
								</text>
							)}
							{tileRenderer && tileRenderer(tile)}
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export default ModularHexTileBoard;
