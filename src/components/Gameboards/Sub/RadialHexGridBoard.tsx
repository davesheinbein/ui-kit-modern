import React from 'react';

// Minimal stub for hexCenter: returns a center point for each hex
function hexCenter(
	layer: number,
	idx: number,
	size: number
): [number, number] {
	// Simple radial layout: place hexes in a circle per layer
	const angle =
		(2 * Math.PI * idx) / Math.max(1, layer * 6);
	const radius = layer * size * 1.5;
	const cx = 150 + radius * Math.cos(angle);
	const cy = 150 + radius * Math.sin(angle);
	return [cx, cy];
}

export interface RadialHexGridBoardProps {
	layers: number;
	hexes?: any[][];
	cellRenderer?: (
		hex: any,
		layer: number,
		idx: number
	) => React.ReactNode;
	/**
	 * Props for RadialHexGridBoard component.
	 * @property rings - Number of concentric rings
	 * @property center - Optional center hex data
	 * @property hexData - Optional array of hex data for each ring
	 * @property className - Optional className for styling
	 * @property style - Optional style for wrapper
	 */
	rings: number;
	center?: any;
	hexData?: any[][];
	className?: string;
	style?: React.CSSProperties;
}

/**
 * Renders a radial hex grid (hexes in concentric layers)
 */
const RadialHexGridBoard: React.FC<
	RadialHexGridBoardProps
> = ({
	layers,
	hexes = [],
	cellRenderer = (hex) => hex,
	className = '',
	style = {},
	...props
}) => {
	const hexSize = 20;
	return (
		<svg
			className={`radial-hex-grid-board ${className}`.trim()}
			style={style}
			width={300}
			height={300}
			viewBox='0 0 300 300'
			{...props}
		>
			{hexes.map((layerArr, layerIdx) =>
				layerArr.map((hex, hexIdx) => {
					const [cx, cy] = hexCenter(
						layerIdx + 1,
						hexIdx,
						hexSize
					);
					const points = Array.from(
						{ length: 6 },
						(_, i) => {
							const angle = (Math.PI / 3) * i;
							return `${cx + hexSize * Math.cos(angle)},${cy + hexSize * Math.sin(angle)}`;
						}
					).join(' ');
					return (
						<g key={`layer${layerIdx}-hex${hexIdx}`}>
							<polygon
								points={points}
								fill='#f3f4f6'
								stroke='#d1d5db'
							/>
							<text
								x={cx}
								y={cy}
								fontSize='10'
								textAnchor='middle'
								alignmentBaseline='middle'
								fill='#6b7280'
							>
								{cellRenderer(hex, layerIdx, hexIdx)}
							</text>
						</g>
					);
				})
			)}
		</svg>
	);
};

export default RadialHexGridBoard;
