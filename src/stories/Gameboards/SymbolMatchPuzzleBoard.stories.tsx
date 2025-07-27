import { SymbolMatchPuzzleBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/SymbolMatchPuzzleBoard',
	component: SymbolMatchPuzzleBoard,
};

export const Basic = () => (
	<SymbolMatchPuzzleBoard
		symbols={['X', 'O', 'Y']}
		grid={[
			[{}, {}, {}],
			[{}, {}, {}],
			[{}, {}, {}],
		]}
	/>
);
