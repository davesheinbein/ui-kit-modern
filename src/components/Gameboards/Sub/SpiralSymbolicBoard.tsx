import React from 'react';
let styles: any = {};
try {
	styles = require('./SpiralSymbolicBoard.module.scss');
} catch {
	try {
		styles = require('./SpiralGridBoard.module.scss');
	} catch {
		styles = {};
	}
}

export interface SpiralSymbolicBoardProps {
	spiralPositions: any[];
	symbols: string[];
	[key: string]: any;
}

const SVG_SIZE = 480;
const SYMBOL_RADIUS = 24;
const LABEL_COLOR = '#111827';

const SpiralSymbolicBoard: React.FC<
	SpiralSymbolicBoardProps
> = ({
	spiralPositions = [],
	symbols = [],
	className = '',
	style = {},
	showLabels = true,
	symbolRenderer,
	...props
}) => {
	// If spiralPositions are not provided, generate them in a spiral
	function getSpiralPosition(
		index: number,
		total: number
	): { x: number; y: number } {
		const SPIRAL_TURNS = 2.5;
		const SPIRAL_SPACING = 32;
		const theta =
			(2 * Math.PI * SPIRAL_TURNS * index) /
			Math.max(1, total - 1);
		const r = SPIRAL_SPACING * (1 + index);
		const cx = SVG_SIZE / 2 + r * Math.cos(theta);
		const cy = SVG_SIZE / 2 + r * Math.sin(theta);
		return { x: cx, y: cy };
	}
	const positions =
		spiralPositions.length ? spiralPositions : (
			symbols.map((_, i) =>
				getSpiralPosition(i, symbols.length)
			)
		);

	return (
		<div
			className={[
				styles.spiralSymbolicBoard || '',
				className,
			]
				.join(' ')
				.trim()}
			style={style}
			role='group'
			aria-label='Spiral Symbolic Board'
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles.spiralSymbolicBoard__svg || ''}
				aria-hidden='false'
			>
				{/* Render symbols at spiral positions */}
				{positions.map((pos: any, i: number) => (
					<g key={pos.id || i}>
						<circle
							cx={pos.x}
							cy={pos.y}
							r={pos.radius || SYMBOL_RADIUS}
							fill={pos.color || '#f59e42'}
							stroke='#fff'
							strokeWidth={2}
							className={
								styles.spiralSymbolicBoard__symbol || ''
							}
							tabIndex={0}
							aria-label={symbols[i] || `Symbol ${i + 1}`}
						/>
						{symbolRenderer ?
							symbolRenderer(symbols[i], i, pos, positions)
						:	showLabels && (
								<text
									x={pos.x}
									y={
										pos.y +
										(pos.radius || SYMBOL_RADIUS) +
										18
									}
									textAnchor='middle'
									fontSize={16}
									fill={LABEL_COLOR}
									className={
										styles.spiralSymbolicBoard__label || ''
									}
									aria-hidden='true'
								>
									{symbols[i] || `Symbol ${i + 1}`}
								</text>
							)
						}
					</g>
				))}
			</svg>
		</div>
	);
};

export default SpiralSymbolicBoard;
