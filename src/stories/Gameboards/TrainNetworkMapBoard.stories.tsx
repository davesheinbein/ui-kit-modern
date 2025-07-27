import { TrainNetworkMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TrainNetworkMapBoard',
	component: TrainNetworkMapBoard,
};

export const Basic = () => (
	<TrainNetworkMapBoard
		stations={[{ name: 'A' }, { name: 'B' }]}
		lines={[['A', 'B']]}
	/>
);
