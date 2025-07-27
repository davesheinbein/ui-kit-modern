import { PoliticalMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/PoliticalMapBoard',
	component: PoliticalMapBoard,
};

export const Basic = () => (
	<PoliticalMapBoard
		regions={[{ name: 'Region 1' }, { name: 'Region 2' }]}
		borders={[[0, 1]]}
	/>
);
