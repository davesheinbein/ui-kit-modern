import { IsometricCubeGridBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/IsometricCubeGridBoard',
	component: IsometricCubeGridBoard,
};

export const Basic = () => (
	<IsometricCubeGridBoard cubes={Array(8).fill({})} />
);
