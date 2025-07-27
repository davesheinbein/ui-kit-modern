import { PushYourLuckPathBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/PushYourLuckPathBoard',
	component: PushYourLuckPathBoard,
};

export const Basic = () => (
	<PushYourLuckPathBoard
		segments={[
			{ label: 'A' },
			{ label: 'B' },
			{ label: 'C' },
		]}
		risks={[0.1, 0.5, 0.9]}
	/>
);
