import React from 'react';

export interface ClueMansionMapBoardProps {
	rooms: any[];
	passages: any[];
	[key: string]: any;
}

const ClueMansionMapBoard: React.FC<
	ClueMansionMapBoardProps
> = ({
	rooms = [],
	passages = [],
	className = '',
	style = {},
	renderRoom,
	renderPassage,
	...props
}) => {
	// Render rooms as nodes and passages as lines (SVG)
	const width = 480;
	const height = 320;
	return (
		<div
			className={`clue-mansion-map-board ${className}`.trim()}
			style={style}
			{...props}
		>
			<svg
				width={width}
				height={height}
				style={{
					width: '100%',
					height: 'auto',
					display: 'block',
				}}
			>
				{/* Passages as lines */}
				{passages.map((passage, idx) => {
					const roomA = rooms.find(
						(r) => r.id === passage.from
					);
					const roomB = rooms.find(
						(r) => r.id === passage.to
					);
					if (!roomA || !roomB) return null;
					return renderPassage ?
							renderPassage(passage, roomA, roomB, idx)
						:	<line
								key={idx}
								x1={roomA.x}
								y1={roomA.y}
								x2={roomB.x}
								y2={roomB.y}
								stroke='#888'
								strokeWidth={3}
								opacity={0.7}
							/>;
				})}
				{/* Rooms as nodes */}
				{rooms.map((room, idx) =>
					renderRoom ?
						renderRoom(room, idx)
					:	<g key={room.id || idx}>
							<circle
								cx={room.x}
								cy={room.y}
								r={22}
								fill='#fbbf24'
								stroke='#444'
								strokeWidth={2}
								opacity={0.95}
							/>
							<text
								x={room.x}
								y={room.y + 5}
								textAnchor='middle'
								fontSize={14}
								fontWeight='bold'
								fill='#222'
							>
								{room.label || `Room ${idx + 1}`}
							</text>
						</g>
				)}
			</svg>
		</div>
	);
};

export default ClueMansionMapBoard;
