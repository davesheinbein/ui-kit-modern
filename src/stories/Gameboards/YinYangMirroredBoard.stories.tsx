import { YinYangMirroredBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/YinYangMirroredBoard',
	component: YinYangMirroredBoard,
};

export const Basic = () => (
	<YinYangMirroredBoard
		zones={[
			{ label: 'Yin', color: 'black', id: 'yin' },
			{ label: 'Yang', color: 'white', id: 'yang' },
		]}
		mirrored={true}
	/>
);
