import React from 'react';

// Try to import dedicated SCSS module, fallback to empty object
let styles: any = {};
try {
	styles = require('./ZooLayoutBoard.module.scss');
} catch {}

export interface ZooEnclosure {
	id: string;
	name: string;
	x: number;
	y: number;
	width: number;
	height: number;
	color?: string;
}
export interface ZooAnimal {
	id: string;
	name: string;
	enclosureId: string;
	icon?: string;
	color?: string;
}
export interface ZooLayoutBoardProps {
	enclosures: ZooEnclosure[];
	animals: ZooAnimal[];
	enclosureRenderer?: (
		enclosure: ZooEnclosure,
		idx: number
	) => React.ReactNode;
	animalRenderer?: (
		animal: ZooAnimal,
		idx: number,
		enclosure: ZooEnclosure
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const SVG_SIZE = 480;

const ZooLayoutBoard: React.FC<ZooLayoutBoardProps> = ({
	enclosures = [],
	animals = [],
	enclosureRenderer,
	animalRenderer,
	className = '',
	style = {},
	...props
}) => {
	const ariaLabel = 'Zoo layout board';
	return (
		<div
			className={`${styles?.zooLayoutBoard ?? ''} ${className}`.trim()}
			style={style}
			role='img'
			aria-label={ariaLabel}
			{...props}
		>
			<svg
				width={SVG_SIZE}
				height={SVG_SIZE}
				viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
				className={styles?.zooLayoutBoard__svg}
			>
				{/* Render enclosures */}
				{enclosures.map((enc, idx) =>
					enclosureRenderer ?
						enclosureRenderer(enc, idx)
					:	<g key={enc.id}>
							<rect
								x={enc.x}
								y={enc.y}
								width={enc.width}
								height={enc.height}
								fill={enc.color || '#fbbf24'}
								stroke='#22223b'
								strokeWidth={3}
								rx={18}
								aria-label={enc.name}
							/>
							<text
								x={enc.x + enc.width / 2}
								y={enc.y + 24}
								textAnchor='middle'
								fontSize={16}
								fill='#22223b'
								fontWeight={700}
							>
								{enc.name}
							</text>
						</g>
				)}
				{/* Render animals in enclosures */}
				{animals.map((animal, idx) => {
					const enc = enclosures.find(
						(e) => e.id === animal.enclosureId
					);
					if (!enc) return null;
					// Place animal randomly within enclosure (for demo)
					const ax =
						enc.x +
						enc.width / 2 +
						30 *
							Math.cos(
								(idx * 2 * Math.PI) / animals.length
							);
					const ay =
						enc.y +
						enc.height / 2 +
						30 *
							Math.sin(
								(idx * 2 * Math.PI) / animals.length
							);
					if (animalRenderer)
						return animalRenderer(animal, idx, enc);
					return (
						<g key={animal.id}>
							<circle
								cx={ax}
								cy={ay}
								r={14}
								fill={animal.color || '#60a5fa'}
								stroke='#22223b'
								strokeWidth={2}
								aria-label={animal.name}
							/>
							<text
								x={ax}
								y={ay + 5}
								textAnchor='middle'
								fontSize={14}
								fill='#22223b'
								fontWeight={600}
							>
								{animal.icon || '🐾'}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
};

export function generateSampleZooData() {
	// Utility: generate sample enclosures and animals for visual variety
	const enclosures: ZooEnclosure[] = [
		{
			id: 'lion',
			name: 'Lion Den',
			x: 40,
			y: 40,
			width: 140,
			height: 120,
			color: '#fbbf24',
		},
		{
			id: 'penguin',
			name: 'Penguin Pool',
			x: 220,
			y: 60,
			width: 120,
			height: 100,
			color: '#60a5fa',
		},
		{
			id: 'giraffe',
			name: 'Giraffe House',
			x: 80,
			y: 200,
			width: 180,
			height: 120,
			color: '#a3e635',
		},
		{
			id: 'reptile',
			name: 'Reptile House',
			x: 300,
			y: 200,
			width: 120,
			height: 120,
			color: '#f472b6',
		},
	];
	const animals: ZooAnimal[] = [
		{
			id: 'leo',
			name: 'Leo',
			enclosureId: 'lion',
			icon: '🦁',
			color: '#f59e42',
		},
		{
			id: 'nala',
			name: 'Nala',
			enclosureId: 'lion',
			icon: '🦁',
			color: '#fbbf24',
		},
		{
			id: 'pingu',
			name: 'Pingu',
			enclosureId: 'penguin',
			icon: '🐧',
			color: '#60a5fa',
		},
		{
			id: 'tux',
			name: 'Tux',
			enclosureId: 'penguin',
			icon: '🐧',
			color: '#38bdf8',
		},
		{
			id: 'geoff',
			name: 'Geoff',
			enclosureId: 'giraffe',
			icon: '🦒',
			color: '#a3e635',
		},
		{
			id: 'lizzy',
			name: 'Lizzy',
			enclosureId: 'reptile',
			icon: '🦎',
			color: '#f472b6',
		},
	];
	return { enclosures, animals };
}

export default ZooLayoutBoard;
