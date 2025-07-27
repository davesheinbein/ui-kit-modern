import React from 'react';

export interface TableauLayoutBoardProps {
	cards?: Array<{ label: string; color?: string }>;
	rows?: number;
	columns?: number;
	className?: string;
	style?: React.CSSProperties;
}

const DEFAULT_CARD_WIDTH = 96;
const DEFAULT_CARD_HEIGHT = 140;

const TableauLayoutBoard: React.FC<
	TableauLayoutBoardProps
> = ({
	cards = [],
	rows = 2,
	columns = 4,
	className = '',
	style = {},
}) => {
	const total = rows * columns;
	const gridCards = [...cards];
	while (gridCards.length < total) {
		gridCards.push({ label: '', color: '#e5e7eb' });
	}
	return (
		<div
			className={className}
			style={{
				display: 'grid',
				gridTemplateRows: `repeat(${rows}, ${DEFAULT_CARD_HEIGHT}px)`,
				gridTemplateColumns: `repeat(${columns}, ${DEFAULT_CARD_WIDTH}px)`,
				gap: 12,
				...style,
			}}
		>
			{gridCards.slice(0, total).map((card, idx) => (
				<div
					key={idx}
					style={{
						background: card.color || '#fff',
						border: '1px solid #d1d5db',
						borderRadius: 8,
						width: DEFAULT_CARD_WIDTH,
						height: DEFAULT_CARD_HEIGHT,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 18,
					}}
				>
					{card.label}
				</div>
			))}
		</div>
	);
};

export default TableauLayoutBoard;
