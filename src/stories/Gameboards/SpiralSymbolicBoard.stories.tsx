import { SpiralSymbolicBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/SpiralSymbolicBoard',
	component: SpiralSymbolicBoard,
};

export const Basic = () => (
	<SpiralSymbolicBoard symbols={['A', 'B', 'C']} />
);
