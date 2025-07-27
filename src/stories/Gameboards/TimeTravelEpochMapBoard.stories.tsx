import { TimeTravelEpochMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TimeTravelEpochMapBoard',
	component: TimeTravelEpochMapBoard,
};

export const Basic = () => (
	<TimeTravelEpochMapBoard
		epochs={[{ name: 'Epoch 1' }, { name: 'Epoch 2' }]}
		currentEpoch={0}
	/>
);
