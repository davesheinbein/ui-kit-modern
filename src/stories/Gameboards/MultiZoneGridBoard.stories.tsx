import { MultiZoneGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/MultiZoneGridBoard',
	component: MultiZoneGridBoard,
};

export const Basic = () => (
	<MultiZoneGridBoard
		grid={[
			['A', 'B', 'C', 'D'],
			['E', 'F', 'G', 'H'],
			['I', 'J', 'K', 'L'],
			['M', 'N', 'O', 'P'],
		]}
		zones={[
			[0, 1, 2],
			[3, 4, 5],
		]}
		movementTypes={['walk', 'fly']}
	/>
);
