import ExpandingGridBoard from '../../components/Gameboards/Sub/ExpandingGridBoard';

export default {
	title: 'Gameboards/ExpandingGridBoard',
	component: ExpandingGridBoard,
};

// Provide a 2D array of strings for the grid prop (e.g., 3x3 grid)
export const Basic = () => (
	<ExpandingGridBoard
		grid={[
			['A', 'B', 'C'],
			['D', 'E', 'F'],
			['G', 'H', 'I'],
		]}
		addOnTiles={['X', 'Y']}
	/>
);
