import BlockedTerrainGridBoard from '../../components/Gameboards/Sub/BlockedTerrainGridBoard';

export default {
	title: 'Gameboards/BlockedTerrainGridBoard',
	component: BlockedTerrainGridBoard,
};

export const Basic = {
	args: {
		grid: [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		blockedCells: [1, 4, 7],
	},
};
