import { IslandHoppingMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/IslandHoppingMapBoard',
	component: IslandHoppingMapBoard,
};

export const Basic = () => (
	<IslandHoppingMapBoard
		islands={[{ name: 'Island 1' }, { name: 'Island 2' }]}
		routes={[[0, 1]]}
	/>
);
