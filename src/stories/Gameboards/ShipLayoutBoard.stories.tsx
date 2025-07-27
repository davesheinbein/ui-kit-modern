import { ShipLayoutBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/ShipLayoutBoard',
	component: ShipLayoutBoard,
};

export const Basic = () => (
	<ShipLayoutBoard
		rooms={[{ id: 1, name: 'Bridge' }]}
		decks={[{ id: 1, name: 'Main Deck' }]}
	/>
);
