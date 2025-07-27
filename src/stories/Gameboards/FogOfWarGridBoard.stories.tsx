import FogOfWarGridBoard from '../../components/Gameboards/Sub/FogOfWarGridBoard';

export default {
	title: 'Gameboards/FogOfWarGridBoard',
	component: FogOfWarGridBoard,
};

// Provide a 4x4 grid of strings for the grid prop
export const Basic = () => (
	<FogOfWarGridBoard
		grid={[
			['A1', 'A2', 'A3', 'A4'],
			['B1', 'B2', 'B3', 'B4'],
			['C1', 'C2', 'C3', 'C4'],
			['D1', 'D2', 'D3', 'D4'],
		]}
		fogCells={[4, 8, 12]}
	/>
);
