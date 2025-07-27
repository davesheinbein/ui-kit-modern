
import { TriangularGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TriangularGridBoard',
	component: TriangularGridBoard,
};

export const Basic = () => (
	<TriangularGridBoard triangles={Array(9).fill({})} />
);
