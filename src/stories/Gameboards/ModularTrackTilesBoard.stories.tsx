import { ModularTrackTilesBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/ModularTrackTilesBoard',
	component: ModularTrackTilesBoard,
};

export const Basic = () => (
	<ModularTrackTilesBoard
		tiles={[{ label: 'Track1' }, { label: 'Track2' }]}
	/>
);
