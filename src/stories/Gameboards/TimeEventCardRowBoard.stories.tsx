import { TimeEventCardRowBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TimeEventCardRowBoard',
	component: TimeEventCardRowBoard,
};

export const Basic = () => (
	<TimeEventCardRowBoard
		events={['Event 1', 'Event 2', 'Event 3']}
	/>
);
