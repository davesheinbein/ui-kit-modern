import { StarPatternBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/StarPatternBoard',
	component: StarPatternBoard,
};

export const Basic = () => (
	<StarPatternBoard
		points={[
			{ x: 100, y: 200 },
			{ x: 200, y: 100 },
			{ x: 300, y: 200 },
			{ x: 200, y: 300 },
			{ x: 150, y: 250 },
		]}
		pattern={[1, 2, 3, 4, 5]}
		connections={[
			{ from: 0, to: 1 },
			{ from: 1, to: 2 },
			{ from: 2, to: 3 },
			{ from: 3, to: 4 },
			{ from: 4, to: 0 },
		]}
	/>
);
