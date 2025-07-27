import { RoomTileBoardBuilder } from '../../components/Gameboards';

export default {
	title: 'Gameboards/RoomTileBoardBuilder',
	component: RoomTileBoardBuilder,
};

export const Basic = () => (
	<RoomTileBoardBuilder
		rooms={[{ id: 1, name: 'Room 1', tiles: [] }]}
	/>
);
