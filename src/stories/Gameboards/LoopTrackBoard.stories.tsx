import { LoopTrackBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/LoopTrackBoard',
	component: LoopTrackBoard,
};

export const Basic = () => (
	<LoopTrackBoard
		track={[1, 2, 3, 4, 5]}
		loops={[[1, 5]]}
	/>
);
