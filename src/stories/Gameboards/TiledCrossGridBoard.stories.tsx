import { TiledCrossGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TiledCrossGridBoard',
	component: TiledCrossGridBoard,
};

export const Basic = () => (
	<TiledCrossGridBoard
		grid={[
			['A', 'B', 'C'],
			['D', 'E', 'F'],
			['G', 'H', 'I'],
		]}
	/>
);
