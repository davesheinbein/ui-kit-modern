import { RadialHexGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/RadialHexGridBoard',
	component: RadialHexGridBoard,
};

export const Basic = () => (
	<RadialHexGridBoard
		layers={3}
		rings={3}
		hexes={[
			['A', 'B', 'C'],
			['D', 'E', 'F'],
			['G', 'H', 'I'],
		]}
	/>
);
