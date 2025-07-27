import { TunnelAlternatePathBoard } from '../../components/Gameboards';

export default {
	title: 'Gameboards/TunnelAlternatePathBoard',
	component: TunnelAlternatePathBoard,
};

export const Basic = () => (
	<TunnelAlternatePathBoard
		paths={[
			[1, 2],
			[2, 3],
		]}
		tunnels={[[1, 3]]}
	/>
);
