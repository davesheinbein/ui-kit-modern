import { TicTacToeBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TicTacToeBoard',
	component: TicTacToeBoard,
};

export const Basic = () => (
	<TicTacToeBoard
		board={[
			['X', 'O', 'X'],
			['O', 'X', 'O'],
			['X', 'O', 'X'],
		]}
		onCellClick={() => {}}
	/>
);
