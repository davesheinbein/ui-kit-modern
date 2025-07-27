import { PlanetMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/PlanetMapBoard',
	component: PlanetMapBoard,
};

export const Basic = () => (
	<PlanetMapBoard
		planets={[{ name: 'Earth' }, { name: 'Mars' }]}
		orbits={2}
	/>
);
