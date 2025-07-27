import { WindingSnakePathBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/WindingSnakePathBoard',
	component: WindingSnakePathBoard,
};

export const Basic = () => (
	<WindingSnakePathBoard
		path={[1, 2, 3, 4, 5]}
		snakes={[{ start: 2, end: 4 }]}
	/>
);
