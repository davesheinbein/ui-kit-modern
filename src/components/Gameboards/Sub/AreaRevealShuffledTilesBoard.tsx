import React from 'react';

export interface AreaRevealShuffledTilesBoardProps {
	tiles: any[];
	revealed: boolean[];
	[key: string]: any;
}

const AreaRevealShuffledTilesBoard: React.FC<
	AreaRevealShuffledTilesBoardProps
> = ({ tiles, revealed, ...props }) => {
	// Render area reveals with shuffled tiles
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(5, 1fr)`,
				gap: 10,
				padding: 20,
				background: '#f8fafc',
				borderRadius: 10,
				boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
			}}
			{...props}
		>
			{tiles?.map((tile, idx) => {
				const isRevealed = revealed?.[idx];
				return (
					<div
						key={tile.id || idx}
						style={{
							background:
								isRevealed ? '#38bdf8' : '#e0e7ef',
							color: isRevealed ? '#fff' : '#bbb',
							borderRadius: 7,
							minHeight: 70,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontWeight: 600,
							fontSize: 15,
							boxShadow:
								isRevealed ?
									'0 2px 8px rgba(56,189,248,0.12)'
								:	'0 2px 8px rgba(0,0,0,0.04)',
							transition: 'background 0.2s',
							cursor: isRevealed ? 'default' : 'pointer',
							filter:
								isRevealed ? 'none' : (
									'brightness(0.92) blur(1px)'
								),
						}}
					>
						{isRevealed ?
							tile.name || `Tile ${idx + 1}`
						:	'❓'}
					</div>
				);
			})}
		</div>
	);
};

export default AreaRevealShuffledTilesBoard;
