import { TeleportingGridTilesBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TeleportingGridTilesBoard',
	component: TeleportingGridTilesBoard,
};

export const Basic = () => (
	<TeleportingGridTilesBoard
		rows={4}
		columns={4}
		teleportMap={{
			r0c1: 'r2c2', // tile at row 0, col 1 teleports to row 2, col 2
			r3c0: 'r1c3', // tile at row 3, col 0 teleports to row 1, col 3
		}}
		onTileTeleport={(from, to) =>
			alert(`Teleport from ${from} to ${to}`)
		}
	/>
);
