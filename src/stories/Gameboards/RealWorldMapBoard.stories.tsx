import { RealWorldMapBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/RealWorldMapBoard',
	component: RealWorldMapBoard,
};

export const Basic = () => (
	<RealWorldMapBoard
		regions={[
			{ id: 'us', name: 'USA' },
			{ id: 'ca', name: 'Canada' },
		]}
		mapData={{ name: 'Americas', type: 'continent' }}
	/>
);
