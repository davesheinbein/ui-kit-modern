import { TimeTrackBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TimeTrackBoard',
	component: TimeTrackBoard,
};

export const Basic = () => (
	<TimeTrackBoard trackLength={10} currentTime={5} />
);
