import DynamicSquareGridBoard from '../../components/Gameboards/Sub/DynamicSquareGridBoard';

export default {
	title: 'Gameboards/DynamicSquareGridBoard',
	component: DynamicSquareGridBoard,
};

export const Basic = () => (
	<DynamicSquareGridBoard
		size={3}
		cells={[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]}
	/>
);
