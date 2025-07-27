import { RandomTerrainGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/RandomTerrainGridBoard',
	component: RandomTerrainGridBoard,
};

export const Basic = () => (
	<RandomTerrainGridBoard
		grid={[
			[{}, {}, {}],
			[{}, {}, {}],
			[{}, {}, {}],
		]}
		terrainTypes={['grass', 'water', 'mountain']}
	/>
);
