import { WaffleGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/WaffleGridBoard',
	component: WaffleGridBoard,
};

export const Basic = () => (
	<WaffleGridBoard
		grid={[
			[{}, {}, {}],
			[{}, {}, {}],
			[{}, {}, {}],
		]}
	/>
);
