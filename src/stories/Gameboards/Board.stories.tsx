import Board from '../../components/Gameboards/Sub/Board';

export default {
	title: 'Gameboards/Board',
	component: Board,
};

export const Basic = () => (
	<Board
		boardType='square-grid'
		boardProps={{
			size: 3,
			cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
		}}
	/>
);
