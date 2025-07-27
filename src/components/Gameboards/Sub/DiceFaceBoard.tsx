import React from 'react';

export interface DiceFaceBoardProps {
	faces: number[];
	[key: string]: any;
}

const DiceFaceBoard: React.FC<DiceFaceBoardProps> = ({
	faces,
	className = '',
	style = {},
	size = 64,
	...props
}) => {
	// Render each face as a dice SVG with pips
	// faces: array of numbers (1-6 or more)
	const getPipPositions = (value: number) => {
		// Standard pip positions for 1-6
		const center = { x: 32, y: 32 };
		const positions = [
			[{ x: 32, y: 32 }], // 1
			[
				{ x: 16, y: 16 },
				{ x: 48, y: 48 },
			], // 2
			[
				{ x: 16, y: 16 },
				{ x: 32, y: 32 },
				{ x: 48, y: 48 },
			], // 3
			[
				{ x: 16, y: 16 },
				{ x: 48, y: 16 },
				{ x: 16, y: 48 },
				{ x: 48, y: 48 },
			], // 4
			[
				{ x: 16, y: 16 },
				{ x: 48, y: 16 },
				{ x: 32, y: 32 },
				{ x: 16, y: 48 },
				{ x: 48, y: 48 },
			], // 5
			[
				{ x: 16, y: 16 },
				{ x: 48, y: 16 },
				{ x: 16, y: 32 },
				{ x: 48, y: 32 },
				{ x: 16, y: 48 },
				{ x: 48, y: 48 },
			], // 6
		];
		return positions[value - 1] || [center];
	};
	return (
		<div
			className={`dice-face-board ${className}`}
			style={{
				display: 'flex',
				gap: 16,
				alignItems: 'center',
				justifyContent: 'center',
				...style,
			}}
			{...props}
		>
			{faces.map((face, idx) => (
				<svg
					key={idx}
					width={size}
					height={size}
					viewBox='0 0 64 64'
					style={{
						borderRadius: 12,
						background: '#fff',
						boxShadow: '0 2px 8px #bbb',
						border: '2px solid #888',
					}}
				>
					<rect
						x={4}
						y={4}
						width={56}
						height={56}
						rx={12}
						fill='#fff'
						stroke='#888'
						strokeWidth={2}
					/>
					{getPipPositions(face).map((pip, i) => (
						<circle
							key={i}
							cx={pip.x}
							cy={pip.y}
							r={5}
							fill='#222'
						/>
					))}
				</svg>
			))}
		</div>
	);
};

export default DiceFaceBoard;
