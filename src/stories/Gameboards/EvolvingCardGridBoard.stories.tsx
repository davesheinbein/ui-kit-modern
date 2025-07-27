import EvolvingCardGridBoard from '../../components/Gameboards/Sub/EvolvingCardGridBoard';

export default {
	title: 'Gameboards/EvolvingCardGridBoard',
	component: EvolvingCardGridBoard,
};

export const Basic = () => (
	<EvolvingCardGridBoard
		cards={['Evolve1', 'Evolve2']}
		evolutionStates={[0, 1]}
	/>
);
