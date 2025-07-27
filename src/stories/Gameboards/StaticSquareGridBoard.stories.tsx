import { StaticSquareGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/StaticSquareGridBoard',
	component: StaticSquareGridBoard,
};

export const Basic = () => (
	<StaticSquareGridBoard
		grid={[
			[1, 2],
			[3, 4],
		]}
	/>
);
