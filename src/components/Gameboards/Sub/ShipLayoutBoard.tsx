import React from 'react';
let styles: any = {};
try {
	styles = require('./ShipLayoutBoard.module.scss');
} catch {
	styles = {};
}

export interface ShipLayoutBoardProps {
	rooms: Array<{
		id: string | number;
		name?: string;
		deck?: string | number;
		[key: string]: any;
	}>;
	decks: Array<{
		id: string | number;
		name?: string;
		[key: string]: any;
	}>;
	deckRenderer?: (
		deck: any,
		idx: number
	) => React.ReactNode;
	roomRenderer?: (
		room: any,
		deckIdx: number,
		roomIdx: number
	) => React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	[key: string]: any;
}

const ShipLayoutBoard: React.FC<ShipLayoutBoardProps> = ({
	rooms = [],
	decks = [],
	deckRenderer,
	roomRenderer,
	className = '',
	style = {},
	...props
}) => {
	// Group rooms by deck
	const roomsByDeck: Record<string | number, any[]> = {};
	rooms.forEach((room) => {
		const deckId = room.deck ?? 'main';
		if (!roomsByDeck[deckId]) roomsByDeck[deckId] = [];
		roomsByDeck[deckId].push(room);
	});

	return (
		<div
			className={[styles.shipLayoutBoard, className]
				.filter(Boolean)
				.join(' ')}
			style={style}
			role='table'
			aria-label='Ship Layout Board'
			{...props}
		>
			{decks.length === 0 ?
				<div className={styles.deckRow} aria-disabled>
					No decks available
				</div>
			:	decks.map((deck, deckIdx) => (
					<div
						key={deck.id || deckIdx}
						className={styles.deckRow}
						role='row'
						aria-label={deck.name || `Deck ${deckIdx + 1}`}
					>
						{deckRenderer ?
							deckRenderer(deck, deckIdx)
						:	<div className={styles.deckLabel}>
								<strong>
									{deck.name || `Deck ${deckIdx + 1}`}
								</strong>
							</div>
						}
						<div className={styles.roomRow}>
							{(roomsByDeck[deck.id] || []).length === 0 ?
								<div
									className={styles.roomCell}
									aria-disabled
								>
									No rooms
								</div>
							:	roomsByDeck[deck.id].map((room, roomIdx) =>
									roomRenderer ?
										roomRenderer(room, deckIdx, roomIdx)
									:	<div
											key={room.id || roomIdx}
											className={styles.roomCell}
											role='cell'
											aria-label={
												room.name || `Room ${roomIdx + 1}`
											}
										>
											{room.name || 'Room'}
										</div>
								)
							}
						</div>
					</div>
				))
			}
		</div>
	);
};

export default ShipLayoutBoard;
