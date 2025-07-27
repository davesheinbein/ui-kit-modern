import { SlidingGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/SlidingGridBoard',
	component: SlidingGridBoard,
};

export const Basic = () => (
	<SlidingGridBoard
		grid={[
			[1, 2],
			[3, 4],
		]}
		slidingTiles={[
			{ row: 0, col: 1 },
			{ row: 1, col: 0 },
		]}
	/>
);
