import React from 'react';

export interface CarnivalParkBoardProps {
	attractions: any[];
	paths: any[];
	[key: string]: any;
}

const CarnivalParkBoard: React.FC<
	CarnivalParkBoardProps
> = ({
	attractions,
	paths,
	className = '',
	style = {},
	...props
}) => {
	// Each attraction: { id, label, x, y }
	// Each path: { from, to }
	// Use SVG for path lines if x/y provided, else flex layout
	const hasCoords =
		attractions.length > 0 &&
		typeof attractions[0] === 'object' &&
		'x' in attractions[0] &&
		'y' in attractions[0];

	return (
		<div
			className={`carnival-park-board ${className}`}
			style={{
				position: 'relative',
				minHeight: 320,
				minWidth: 320,
				background: '#f8f8e8',
				borderRadius: 16,
				boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
				...style,
			}}
			{...props}
		>
			{hasCoords && (
				<svg
					width='100%'
					height='100%'
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						zIndex: 0,
					}}
				>
					{paths.map((path: any, idx: number) => {
						const from = attractions.find(
							(a: any) => a.id === path.from
						);
						const to = attractions.find(
							(a: any) => a.id === path.to
						);
						if (!from || !to) return null;
						return (
							<line
								key={`path-${idx}`}
								x1={from.x}
								y1={from.y}
								x2={to.x}
								y2={to.y}
								stroke='#bdb76b'
								strokeWidth={4}
								opacity={0.7}
							/>
						);
					})}
				</svg>
			)}
			{attractions.map((attr: any, idx: number) => {
				const nodeStyle: React.CSSProperties =
					hasCoords ?
						{
							position: 'absolute',
							left:
								typeof attr.x === 'number' ?
									attr.x
								:	Number(attr.x),
							top:
								typeof attr.y === 'number' ?
									attr.y
								:	Number(attr.y),
							width: 56,
							height: 56,
							borderRadius: '50%',
							background: '#ffecb3',
							border: '2px solid #e57373',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 'bold',
							color: '#d84315',
							boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
							zIndex: 1,
						}
					:	{
							width: 56,
							height: 56,
							borderRadius: '50%',
							background: '#ffecb3',
							border: '2px solid #e57373',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 'bold',
							color: '#d84315',
							boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
							margin: 16,
							zIndex: 1,
						};
				return (
					<div
						key={`attr-${attr.id || idx}`}
						className='carnival-attraction'
						style={nodeStyle}
					>
						{attr.label || attr.id || `A${idx + 1}`}
					</div>
				);
			})}
			{!hasCoords && (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 16,
						marginTop: 32,
					}}
				>
					{paths.map((path: any, idx: number) => (
						<div
							key={`path-flex-${idx}`}
							className='carnival-path'
							style={{
								width: 32,
								height: 8,
								background: '#bdb76b',
								borderRadius: 4,
								opacity: 0.7,
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default CarnivalParkBoard;
