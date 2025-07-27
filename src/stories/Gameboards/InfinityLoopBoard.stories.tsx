import { InfinityLoopBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/InfinityLoopBoard',
	component: InfinityLoopBoard,
};

export const Basic = () => (
	<InfinityLoopBoard loops={2} points={10} />
);
