import HexGridBoard from '../../components/Gameboards/Sub/HexGridBoard';

export default {
	title: 'Gameboards/HexGridBoard',
	component: HexGridBoard,
};

const sampleHexGrid = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0],
];

export const Basic = {
	args: {
		hexes: sampleHexGrid,
	},
};
