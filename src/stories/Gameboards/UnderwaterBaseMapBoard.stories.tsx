import { UnderwaterBaseMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/UnderwaterBaseMapBoard',
	component: UnderwaterBaseMapBoard,
};

export const Basic = () => (
	<UnderwaterBaseMapBoard
		zones={[{ name: 'Zone 1' }, { name: 'Zone 2' }]}
		creatures={[{ name: 'Octopus' }, { name: 'Shark' }]}
	/>
);
