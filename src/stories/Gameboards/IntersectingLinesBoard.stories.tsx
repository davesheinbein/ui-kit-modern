import { IntersectingLinesBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/IntersectingLinesBoard',
	component: IntersectingLinesBoard,
};

export const Basic = () => (
	<IntersectingLinesBoard
		lines={[
			[0, 1],
			[1, 2],
		]}
		points={3}
	/>
);
