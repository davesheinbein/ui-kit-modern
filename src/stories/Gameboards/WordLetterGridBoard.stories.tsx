import { WordLetterGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/WordLetterGridBoard',
	component: WordLetterGridBoard,
};

export const Basic = () => (
	<WordLetterGridBoard
		tiles={[{ label: 'A' }, { label: 'B' }, { label: 'C' }]}
	/>
);
