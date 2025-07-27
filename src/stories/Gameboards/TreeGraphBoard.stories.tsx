import { TreeGraphBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TreeGraphBoard',
	component: TreeGraphBoard,
};

export const Basic = () => (
	<TreeGraphBoard
		nodes={[{ id: 1 }, { id: 2 }]}
		edges={[[1, 2]]}
	/>
);
