import { TeleportationZoneGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TeleportationZoneGridBoard',
	component: TeleportationZoneGridBoard,
};

export const Basic = () => (
	<TeleportationZoneGridBoard
		grid={[
			[{}, {}, {}, {}],
			[{}, {}, {}, {}],
			[{}, {}, {}, {}],
			[{}, {}, {}, {}],
		]}
		teleportZones={[
			{ row: 0, col: 3 },
			{ row: 2, col: 0 },
		]}
	/>
);
