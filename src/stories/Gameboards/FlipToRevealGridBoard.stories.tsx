import FlipToRevealGridBoard from '../../components/Gameboards/Sub/FlipToRevealGridBoard';

export default {
	title: 'Gameboards/FlipToRevealGridBoard',
	component: FlipToRevealGridBoard,
};

export const Basic = () => (
	<FlipToRevealGridBoard
		rows={3}
		columns={3}
		flipped={[
			[false, true, false],
			[false, false, false],
			[true, false, true],
		]}
		onFlip={() => {}}
	/>
);
