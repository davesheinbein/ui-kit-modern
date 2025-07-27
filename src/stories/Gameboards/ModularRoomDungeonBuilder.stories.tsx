import ModularRoomDungeonBuilder from '../../components/Gameboards/Sub/ModularRoomDungeonBuilder';

export default {
	title: 'Gameboards/ModularRoomDungeonBuilder',
	component: ModularRoomDungeonBuilder,
};

// Modern, visually rich demo data for a modular dungeon
const demoRooms = [
	{
		id: 'A',
		name: 'Entrance',
		x: 1,
		y: 1,
		width: 2,
		height: 2,
		color: '#fbbf24',
	},
	{
		id: 'B',
		name: 'Hall',
		x: 3,
		y: 1,
		width: 3,
		height: 1,
		color: '#60a5fa',
	},
	{
		id: 'C',
		name: 'Treasure',
		x: 6,
		y: 1,
		width: 2,
		height: 2,
		color: '#34d399',
	},
	{
		id: 'D',
		name: 'Boss',
		x: 3,
		y: 2,
		width: 2,
		height: 2,
		color: '#f472b6',
	},
];
const demoTiles = [
	{
		id: 'T1',
		type: 'Key',
		x: 2,
		y: 2,
		roomId: 'A',
		color: '#fde68a',
	},
	{
		id: 'T2',
		type: 'Potion',
		x: 4,
		y: 1,
		roomId: 'B',
		color: '#a78bfa',
	},
	{
		id: 'T3',
		type: 'Treasure',
		x: 7,
		y: 2,
		roomId: 'C',
		color: '#fcd34d',
	},
	{
		id: 'T4',
		type: 'Boss',
		x: 4,
		y: 3,
		roomId: 'D',
		color: '#f87171',
	},
];

export const Basic = () => (
	<div
		style={{
			maxWidth: 700,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<ModularRoomDungeonBuilder
			rooms={demoRooms}
			tiles={demoTiles}
			gridSize={48}
			showGrid={true}
			roomRenderer={(room) => (
				<span style={{ fontWeight: 700, fontSize: 16 }}>
					{room.name} 🏰
				</span>
			)}
			tileRenderer={(tile) => {
				if (tile.type === 'Treasure')
					return <span style={{ fontSize: 22 }}>💎</span>;
				if (tile.type === 'Boss')
					return <span style={{ fontSize: 22 }}>👹</span>;
				if (tile.type === 'Key')
					return <span style={{ fontSize: 22 }}>🗝️</span>;
				if (tile.type === 'Potion')
					return <span style={{ fontSize: 22 }}>🧪</span>;
				return null;
			}}
		/>
		<div
			style={{
				marginTop: 16,
				textAlign: 'center',
				color: '#64748b',
				fontSize: 15,
			}}
		>
			<span role='img' aria-label='dungeon'>
				🗝️
			</span>{' '}
			<b>Modular Room Dungeon Builder</b> &mdash; Modern,
			interactive dungeon with color-coded rooms and emoji
			tiles.
		</div>
	</div>
);
