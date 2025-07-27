import React from 'react';

export interface CardLandscapeGridBoardProps {
	cards: any[];
	[key: string]: any;
}

const CardLandscapeGridBoard: React.FC<
	CardLandscapeGridBoardProps
> = ({ cards, className = '', style = {}, ...props }) => {
	// Each card: { image, title, description }
	return (
		<div
			className={`card-landscape-grid-board ${className}`}
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(160px, 1fr))',
				gap: 16,
				padding: 16,
				...style,
			}}
			{...props}
		>
			{cards.map((card: any, idx: number) => (
				<div
					key={`card-${idx}`}
					className='card-tile'
					style={{
						background: '#fff',
						border: '1px solid #ccc',
						borderRadius: 12,
						boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: 12,
						minHeight: 180,
						transition: 'box-shadow 0.2s',
					}}
				>
					{card.image && (
						<img
							src={card.image}
							alt={card.title || `Card ${idx + 1}`}
							style={{
								width: '100%',
								height: 80,
								objectFit: 'cover',
								borderRadius: 8,
								marginBottom: 8,
							}}
						/>
					)}
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 16,
							marginBottom: 4,
						}}
					>
						{card.title || `Card ${idx + 1}`}
					</div>
					{card.description && (
						<div
							style={{
								fontSize: 13,
								color: '#555',
								textAlign: 'center',
							}}
						>
							{card.description}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default CardLandscapeGridBoard;
