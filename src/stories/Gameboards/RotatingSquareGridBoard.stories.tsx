import { RotatingSquareGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/RotatingSquareGridBoard',
	component: RotatingSquareGridBoard,
};

export const Basic = () => (
	<RotatingSquareGridBoard
		grid={[
			[1, 2],
			[3, 4],
		]}
		rotation={45}
	/>
);
