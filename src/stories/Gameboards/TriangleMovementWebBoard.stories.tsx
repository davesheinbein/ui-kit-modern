import { TriangleMovementWebBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TriangleMovementWebBoard',
	component: TriangleMovementWebBoard,
};

export const Basic = () => (
	<TriangleMovementWebBoard
		nodes={[{ id: 1 }, { id: 2 }, { id: 3 }]}
		edges={[
			[1, 2],
			[2, 3],
			[3, 1],
		]}
	/>
);
