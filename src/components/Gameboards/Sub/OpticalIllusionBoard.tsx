import React, { useEffect, useRef, useState } from 'react';

// Canonical illusion keys and alternate spellings
const ILLUSION_TYPE_MAP: Record<string, string> = {
	'zollner': 'zollner',
	'zoellner': 'zollner',
	'zöllner': 'zollner',
	'hermann-grid': 'hermann-grid',
	'grid': 'hermann-grid',
	'spiral': 'spiral',
	'checkerboard': 'checkerboard',
	'cafe-wall': 'cafe-wall',
	'café-wall': 'cafe-wall',
	'checker-shadow': 'checker-shadow',
	'poggendorff': 'poggendorff',
	'muller-lyer': 'muller-lyer',
	'hering': 'hering',
	'kanizsa-triangle': 'kanizsa-triangle',
	'kanizsa': 'kanizsa-triangle',
	'white': 'white',
	'wundt': 'wundt',
	'jastrow': 'jastrow',
	'delboeuf': 'delboeuf',
	'titchener': 'titchener',
	'parallel-lines': 'parallel-lines',
};

export interface OpticalIllusionBoardProps {
	illusionType?: string;
	type?: string; // alias for storybook/demo
	animate?: boolean;
	animationSpeed?: number; // ms per frame or cycle
	onClick?: (
		e: React.MouseEvent<
			HTMLDivElement | SVGElement,
			MouseEvent
		>
	) => void;
	width?: number;
	height?: number;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const OpticalIllusionBoard: React.FC<
	OpticalIllusionBoardProps
> = ({
	illusionType,
	type,
	className = '',
	style = {},
	animate = false,
	animationSpeed = 1000,
	onClick,
	width = 320,
	height = 320,
	...props
}) => {
	// Animation state (for movement, pulsing, etc.)
	const [animValue, setAnimValue] = useState<number>(0);
	const animRef = useRef<number>();
	useEffect(() => {
		if (!animate) return;
		let running = true;
		const tick = () => {
			setAnimValue((v: number) => v + 1);
			if (running) {
				animRef.current = window.setTimeout(
					tick,
					animationSpeed
				);
			}
		};
		animRef.current = window.setTimeout(
			tick,
			animationSpeed
		);
		return () => {
			running = false;
			if (animRef.current)
				window.clearTimeout(animRef.current);
		};
	}, [animate, animationSpeed]);

	let illusionContent: React.ReactNode = null;
	// Normalize illusionType for alternate keys, support both 'illusionType' and 'type' props
	const rawType = (
		illusionType ??
		type ??
		''
	).toLowerCase();
	const canonicalType =
		ILLUSION_TYPE_MAP[rawType] || rawType;
	switch (canonicalType) {
		case 'poggendorff':
			// Poggendorff illusion: diagonal line interrupted by a rectangle
			illusionContent = (
				<svg
					width={width}
					height={height}
					className='optical-illusion-board__svg'
					onClick={onClick}
					style={{
						cursor: onClick ? 'pointer' : undefined,
					}}
				>
					{/* Diagonal line left */}
					<line
						x1={40}
						y1={height - 40}
						x2={width / 2 - 40}
						y2={40}
						stroke='#222'
						strokeWidth={5}
					/>
					{/* Diagonal line right */}
					<line
						x1={width / 2 + 40}
						y1={height - 40}
						x2={width - 40}
						y2={40}
						stroke='#222'
						strokeWidth={5}
					/>
					{/* Interrupting rectangle */}
					<rect
						x={width / 2 - 40}
						y={40}
						width={80}
						height={height - 80}
						fill='#fff'
						stroke='#bbb'
						strokeWidth={3}
					/>
					{/* Parallel vertical lines for context */}
					<line
						x1={width / 2 - 40}
						y1={40}
						x2={width / 2 - 40}
						y2={height - 40}
						stroke='#bbb'
						strokeWidth={2}
					/>
					<line
						x1={width / 2 + 40}
						y1={40}
						x2={width / 2 + 40}
						y2={height - 40}
						stroke='#bbb'
						strokeWidth={2}
					/>
				</svg>
			);
			break;
		case 'grid':
		case 'hermann-grid':
			// Hermann grid illusion (add subtle pulse animation)
			illusionContent = (
				<svg
					width={width}
					height={height}
					className='optical-illusion-board__svg'
					onClick={onClick}
					style={{
						cursor: onClick ? 'pointer' : undefined,
					}}
				>
					{[...Array(8)].map((_, i) => (
						<rect
							key={`v${i}`}
							x={i * 40}
							y={0}
							width={
								8 +
								(animate ?
									Math.abs(Math.sin(animValue / 10)) * 8
								:	0)
							}
							height={320}
							fill='#222'
						/>
					))}
					{[...Array(8)].map((_, i) => (
						<rect
							key={`h${i}`}
							x={0}
							y={i * 40}
							width={320}
							height={
								8 +
								(animate ?
									Math.abs(Math.cos(animValue / 10)) * 8
								:	0)
							}
							fill='#222'
						/>
					))}
				</svg>
			);
			break;
		case 'spiral':
			// Fraser spiral illusion
			illusionContent = (
				<svg
					width={320}
					height={320}
					className='optical-illusion-board__svg'
				>
					{[...Array(20)].map((_, i) => {
						const r = 120 + i * 4;
						const angle = i * 18;
						return (
							<ellipse
								key={i}
								cx={160}
								cy={160}
								rx={r}
								ry={r / 2}
								fill='none'
								stroke={i % 2 === 0 ? '#222' : '#eee'}
								strokeWidth={3}
								transform={`rotate(${angle} 160 160)`}
							/>
						);
					})}
				</svg>
			);
			break;
		case 'checkerboard':
			// Checkerboard illusion
			illusionContent = (
				<svg
					width={320}
					height={320}
					className='optical-illusion-board__svg'
				>
					{[...Array(8)].map((_, row) =>
						[...Array(8)].map((_, col) => (
							<rect
								key={`${row}-${col}`}
								x={col * 40}
								y={row * 40}
								width={40}
								height={40}
								fill={
									(row + col) % 2 === 0 ? '#fff' : '#222'
								}
							/>
						))
					)}
				</svg>
			);
			break;
		case 'cafe-wall':
		case 'café-wall':
			// Cafe wall illusion
			illusionContent = (
				<svg
					width={320}
					height={320}
					className='optical-illusion-board__svg'
					onClick={onClick}
					style={{
						cursor: onClick ? 'pointer' : undefined,
					}}
				>
					{[...Array(8)].map((_, row) =>
						[...Array(8)].map((_, col) => (
							<rect
								key={`${row}-${col}`}
								x={
									col * 40 +
									(row % 2 === 0 ? 0
									: animate ? (20 + (animValue % 40)) % 40
									: 20)
								}
								y={row * 40}
								width={40}
								height={40}
								fill={col % 2 === 0 ? '#fff' : '#222'}
							/>
						))
					)}
				</svg>
			);
			break;
		case 'checker-shadow':
			// Checker shadow illusion (simplified Adelson's checker shadow)
			illusionContent = (
				<svg
					width={320}
					height={200}
					className='optical-illusion-board__svg'
				>
					{[...Array(8)].map((_, row) =>
						[...Array(8)].map((_, col) => (
							<rect
								key={`${row}-${col}`}
								x={col * 32}
								y={row * 24}
								width={32}
								height={24}
								fill={
									(row + col) % 2 === 0 ? '#bbb' : '#222'
								}
							/>
						))
					)}
					{/* Shadow */}
					<ellipse
						cx={160}
						cy={96}
						rx={80}
						ry={40}
						fill='#888'
						fillOpacity={0.4}
					/>
					{/* Highlighted "same color" squares */}
					<rect
						x={32 * 2}
						y={24 * 3}
						width={32}
						height={24}
						fill='#bbb'
						stroke='#0af'
						strokeWidth={2}
					/>
					<rect
						x={32 * 5}
						y={24 * 5}
						width={32}
						height={24}
						fill='#bbb'
						stroke='#0af'
						strokeWidth={2}
					/>
				</svg>
			);
			break;
		case 'zollner':
			// Zöllner illusion: parallel lines crossed by short lines at an angle, animated
			illusionContent = (
				<svg
					width={width}
					height={height}
					className='optical-illusion-board__svg'
					onClick={onClick}
					style={{
						cursor: onClick ? 'pointer' : undefined,
					}}
				>
					{/* Long parallel lines */}
					{[...Array(6)].map((_, i) => (
						<line
							key={i}
							x1={40 + i * 40}
							y1={20}
							x2={80 + i * 40}
							y2={180}
							stroke='#222'
							strokeWidth={4}
						/>
					))}
					{/* Short crossing lines, animated */}
					{[...Array(6)].map((_, i) => (
						<g
							key={i}
							transform={`rotate(${
								animate ?
									(animValue * 2 * (i % 2 === 0 ? 1 : -1)) %
									360
								: i % 2 === 0 ? 45
								: -45
							},${60 + i * 40},${40})`}
						>
							<line
								x1={60 + i * 40}
								y1={40}
								x2={80 + i * 40}
								y2={0}
								stroke='#f87171'
								strokeWidth={2}
							/>
						</g>
					))}
					{[...Array(6)].map((_, i) => (
						<g
							key={i}
							transform={`rotate(${
								animate ?
									(animValue * 2 * (i % 2 === 0 ? -1 : 1)) %
									360
								: i % 2 === 0 ? -45
								: 45
							},${80 + i * 40},${160})`}
						>
							<line
								x1={80 + i * 40}
								y1={160}
								x2={100 + i * 40}
								y2={200}
								stroke='#60a5fa'
								strokeWidth={2}
							/>
						</g>
					))}
				</svg>
			);
			break;
		case 'muller-lyer':
			// Müller-Lyer illusion
			illusionContent = (
				<svg
					width={320}
					height={120}
					className='optical-illusion-board__svg'
				>
					{/* Top line with outward fins */}
					<line
						x1={40}
						y1={40}
						x2={280}
						y2={40}
						stroke='#222'
						strokeWidth={4}
					/>
					<line
						x1={40}
						y1={40}
						x2={60}
						y2={20}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={40}
						y1={40}
						x2={60}
						y2={60}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={280}
						y1={40}
						x2={260}
						y2={20}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={280}
						y1={40}
						x2={260}
						y2={60}
						stroke='#222'
						strokeWidth={3}
					/>
					{/* Bottom line with inward fins */}
					<line
						x1={40}
						y1={80}
						x2={280}
						y2={80}
						stroke='#222'
						strokeWidth={4}
					/>
					<line
						x1={40}
						y1={80}
						x2={60}
						y2={60}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={40}
						y1={80}
						x2={60}
						y2={100}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={280}
						y1={80}
						x2={260}
						y2={60}
						stroke='#222'
						strokeWidth={3}
					/>
					<line
						x1={280}
						y1={80}
						x2={260}
						y2={100}
						stroke='#222'
						strokeWidth={3}
					/>
				</svg>
			);
			break;
		case 'hering':
			// Hering illusion
			illusionContent = (
				<svg
					width={320}
					height={200}
					className='optical-illusion-board__svg'
				>
					{[...Array(20)].map((_, i) => (
						<line
							key={i}
							x1={160}
							y1={0}
							x2={160 + 160 * Math.cos((i * Math.PI) / 19)}
							y2={200}
							stroke='#bbb'
							strokeWidth={2}
						/>
					))}
					<line
						x1={60}
						y1={40}
						x2={260}
						y2={60}
						stroke='#222'
						strokeWidth={5}
					/>
					<line
						x1={60}
						y1={160}
						x2={260}
						y2={140}
						stroke='#222'
						strokeWidth={5}
					/>
				</svg>
			);
			break;
		case 'kanizsa-triangle':
			// Kanizsa triangle illusion
			illusionContent = (
				<svg
					width={320}
					height={320}
					className='optical-illusion-board__svg'
				>
					{/* Pacman circles */}
					<path
						d='M160,60 A50,50 0 1,1 110,146 L160,120 Z'
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					<path
						d='M80,220 A50,50 0 1,1 146,270 L120,220 Z'
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					<path
						d='M240,220 A50,50 0 1,1 174,270 L200,220 Z'
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					{/* Implied triangle */}
					<polygon
						points='160,100 110,220 210,220'
						fill='none'
						stroke='#222'
						strokeWidth={4}
					/>
				</svg>
			);
			break;
		case 'white':
			// White illusion
			illusionContent = (
				<svg
					width={320}
					height={120}
					className='optical-illusion-board__svg'
				>
					{[...Array(6)].map((_, i) => (
						<rect
							key={i}
							x={i * 50}
							y={0}
							width={25}
							height={120}
							fill={i % 2 === 0 ? '#fff' : '#222'}
						/>
					))}
					{[...Array(5)].map((_, i) => (
						<rect
							key={i}
							x={12 + i * 50}
							y={30}
							width={25}
							height={60}
							fill='#bbb'
						/>
					))}
				</svg>
			);
			break;
		case 'wundt':
			// Wundt illusion
			illusionContent = (
				<svg
					width={320}
					height={200}
					className='optical-illusion-board__svg'
				>
					{[...Array(10)].map((_, i) => (
						<path
							key={i}
							d={`M${20 + i * 30},180 Q160,${40 + i * 8} ${300 - i * 30},180`}
							stroke='#bbb'
							strokeWidth={2}
							fill='none'
						/>
					))}
					<line
						x1={60}
						y1={60}
						x2={260}
						y2={60}
						stroke='#222'
						strokeWidth={5}
					/>
					<line
						x1={60}
						y1={140}
						x2={260}
						y2={140}
						stroke='#222'
						strokeWidth={5}
					/>
				</svg>
			);
			break;
		case 'jastrow':
			// Jastrow illusion
			illusionContent = (
				<svg
					width={320}
					height={120}
					className='optical-illusion-board__svg'
				>
					<path
						d='M40,100 Q160,20 280,100 Q160,60 40,100'
						fill='#bbb'
						stroke='#222'
						strokeWidth={3}
					/>
					<path
						d='M60,80 Q160,40 260,80 Q160,60 60,80'
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
				</svg>
			);
			break;
		case 'delboeuf':
			// Delboeuf illusion
			illusionContent = (
				<svg
					width={320}
					height={160}
					className='optical-illusion-board__svg'
				>
					{/* Left: small outer circle */}
					<circle
						cx={100}
						cy={80}
						r={28}
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					<circle
						cx={100}
						cy={80}
						r={48}
						fill='none'
						stroke='#bbb'
						strokeWidth={3}
					/>
					{/* Right: large outer circle */}
					<circle
						cx={220}
						cy={80}
						r={28}
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					<circle
						cx={220}
						cy={80}
						r={68}
						fill='none'
						stroke='#bbb'
						strokeWidth={3}
					/>
				</svg>
			);
			break;
		case 'titchener':
			// Titchener (Ebbinghaus variant) illusion
			illusionContent = (
				<svg
					width={320}
					height={160}
					className='optical-illusion-board__svg'
				>
					{/* Center circles */}
					<circle
						cx={90}
						cy={80}
						r={20}
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					<circle
						cx={230}
						cy={80}
						r={20}
						fill='#fff'
						stroke='#222'
						strokeWidth={3}
					/>
					{/* Surrounding circles */}
					{[...Array(8)].map((_, i) => (
						<circle
							key={i}
							cx={90 + 36 * Math.cos((i * Math.PI * 2) / 8)}
							cy={80 + 36 * Math.sin((i * Math.PI * 2) / 8)}
							r={10}
							fill='#bbb'
						/>
					))}
					{[...Array(8)].map((_, i) => (
						<circle
							key={i}
							cx={
								230 + 60 * Math.cos((i * Math.PI * 2) / 8)
							}
							cy={80 + 60 * Math.sin((i * Math.PI * 2) / 8)}
							r={20}
							fill='#bbb'
						/>
					))}
				</svg>
			);
			break;
		case 'parallel-lines':
			// Parallel lines illusion
			illusionContent = (
				<svg
					width={320}
					height={160}
					className='optical-illusion-board__svg'
				>
					{[...Array(8)].map((_, i) => (
						<line
							key={i}
							x1={40}
							y1={30 + i * 16}
							x2={280}
							y2={30 + i * 16}
							stroke='#222'
							strokeWidth={3}
						/>
					))}
					{[...Array(7)].map((_, i) => (
						<rect
							key={i}
							x={60 + i * 24}
							y={30}
							width={12}
							height={112}
							fill={i % 2 === 0 ? '#bbb' : '#fff'}
						/>
					))}
				</svg>
			);
			break;
		default: {
			// Friendly fallback for unknown illusion types
			const validTypes = Object.keys(ILLUSION_TYPE_MAP);
			illusionContent = (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						color: '#b91c1c',
						fontSize: 18,
						minHeight: 200,
						padding: 24,
						textAlign: 'center',
						background: '#fffbe9',
						border: '1px solid #fbbf24',
						borderRadius: 8,
					}}
				>
					<svg
						width='64'
						height='64'
						viewBox='0 0 64 64'
						style={{ marginBottom: 12 }}
					>
						<circle
							cx='32'
							cy='32'
							r='30'
							fill='#f3f4f6'
							stroke='#bbb'
							strokeWidth='2'
						/>
						<text
							x='32'
							y='40'
							textAnchor='middle'
							fontSize='36'
							fill='#bbb'
							fontFamily='sans-serif'
						>
							?
						</text>
					</svg>
					<div style={{ marginBottom: 8 }}>
						<strong>Unknown illusion type:</strong>{' '}
						<code>{illusionType ?? type}</code>
					</div>
					<div>
						Try one of:
						<br />
						<code style={{ fontSize: 13 }}>
							{validTypes.join(' ')}
						</code>
					</div>
				</div>
			);
		}
	}

	return (
		<div
			className={`optical-illusion-board ${className}`.trim()}
			style={style}
			onClick={onClick}
			role={onClick ? 'button' : undefined}
			tabIndex={onClick ? 0 : undefined}
			aria-label={illusionType ?? type}
			{...props}
		>
			{illusionContent}
		</div>
	);
};

export default OpticalIllusionBoard;
