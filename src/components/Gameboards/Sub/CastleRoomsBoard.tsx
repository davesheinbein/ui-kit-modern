import React from 'react';

export interface CastleRoomsBoardProps {
	rooms: any[];
	floors: any[];
	[key: string]: any;
}

const CastleRoomsBoard: React.FC<CastleRoomsBoardProps> = ({
	rooms,
	floors,
	className = '',
	style = {},
	...props
}) => {
	// Each floor: { id, label, roomIds: [] }
	// Each room: { id, label, type, status }
	// Render floors as rows, rooms as nodes
	return (
		<div
			className={`castle-rooms-board ${className}`}
			style={{
				minHeight: 320,
				minWidth: 320,
				background: '#f4f0e6',
				borderRadius: 16,
				boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
				padding: 24,
				...style,
			}}
			{...props}
		>
			{floors.map((floor: any, floorIdx: number) => (
				<div
					key={`floor-${floor.id || floorIdx}`}
					className='castle-floor'
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 32,
						gap: 24,
					}}
				>
					<div
						className='castle-floor-label'
						style={{
							minWidth: 80,
							fontWeight: 'bold',
							color: '#6d4c41',
							fontSize: 18,
						}}
					>
						{floor.label || `Floor ${floorIdx + 1}`}
					</div>
					{floor.roomIds.map(
						(roomId: any, roomIdx: number) => {
							const room = rooms.find(
								(r: any) => r.id === roomId
							);
							if (!room) return null;
							return (
								<div
									key={`room-${room.id || roomIdx}`}
									className='castle-room'
									style={{
										width: 64,
										height: 64,
										borderRadius: 12,
										background:
											room.status === 'locked' ?
												'#bdbdbd'
											:	'#ffe0b2',
										border: '2px solid #8d6e63',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										fontWeight: 'bold',
										color: '#4e342e',
										boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
										position: 'relative',
									}}
								>
									{room.label ||
										room.id ||
										`R${roomIdx + 1}`}
									{room.type && (
										<span
											style={{
												position: 'absolute',
												bottom: 4,
												right: 6,
												fontSize: 12,
												color: '#6d4c41',
												opacity: 0.7,
											}}
										>
											{room.type}
										</span>
									)}
								</div>
							);
						}
					)}
				</div>
			))}
		</div>
	);
};

export default CastleRoomsBoard;
