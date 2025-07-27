import HiddenTileFlipBoard from '../../components/Gameboards/Sub/HiddenTileFlipBoard';

export default {
	title: 'Gameboards/HiddenTileFlipBoard',
	component: HiddenTileFlipBoard,
};

export const Basic = () => (
	<HiddenTileFlipBoard
		grid={Array(9).fill('')}
		hiddenTiles={[2, 5]}
	/>
);
