import { ToroidalGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/ToroidalGridBoard',
	component: ToroidalGridBoard,
};

export const Basic = () => (
	<ToroidalGridBoard
		grid={[
			[{}, {}, {}],
			[{}, {}, {}],
			[{}, {}, {}],
		]}
	/>
);
