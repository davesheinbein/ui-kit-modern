import { ZigZagTrackBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/ZigZagTrackBoard',
	component: ZigZagTrackBoard,
};

export const Basic = () => (
	<ZigZagTrackBoard
		turns={5}
		positions={[
			{ label: 'A', color: 'red' },
			{ label: 'B', color: 'blue' },
			{ label: 'C', color: 'green' },
			{ label: 'D', color: 'orange' },
			{ label: 'E', color: 'purple' },
		]}
	/>
);
