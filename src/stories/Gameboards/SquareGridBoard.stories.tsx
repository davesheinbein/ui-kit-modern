import SquareGridBoard from '../../components/Gameboards/Sub/SquareGridBoard';

export default {
	title: 'Gameboards/SquareGridBoard',
	component: SquareGridBoard,
};

const sampleGrid = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0],
];

export const Basic = {
	args: {
		grid: sampleGrid,
	},
};
