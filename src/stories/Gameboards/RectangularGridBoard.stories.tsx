import RectangularGridBoard from '../../components/Gameboards/Sub/RectangularGridBoard';

export default {
	title: 'Gameboards/RectangularGridBoard',
	component: RectangularGridBoard,
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
