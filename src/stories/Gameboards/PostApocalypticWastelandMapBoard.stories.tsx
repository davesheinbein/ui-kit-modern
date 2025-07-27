import PostApocalypticWastelandMapBoard from '../../components/Gameboards/Sub/PostApocalypticWastelandMapBoard';

export default {
	title: 'Gameboards/PostApocalypticWastelandMapBoard',
	component: PostApocalypticWastelandMapBoard,
};

export const Basic = () => (
	<PostApocalypticWastelandMapBoard
		zones={[{ label: 'Zone 1' }, { label: 'Zone 2' }]}
		resources={[]}
	/>
);
