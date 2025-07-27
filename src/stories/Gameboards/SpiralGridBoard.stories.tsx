import { SpiralGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/SpiralGridBoard',
	component: SpiralGridBoard,
};

export const Basic = () => (
	<SpiralGridBoard cells={Array(12).fill({})} />
);
