import { StackedLayersGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/StackedLayersGridBoard',
	component: StackedLayersGridBoard,
};

export const Basic = () => (
	<StackedLayersGridBoard
		layers={[Array(9).fill({}), Array(9).fill({})]}
	/>
);
