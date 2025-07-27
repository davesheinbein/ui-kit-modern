import FogOfWarMapBoard from '../../components/Gameboards/Sub/FogOfWarMapBoard';
import {
	demoMapData,
	demoHiddenZones,
} from '../mocks/maps';

export default {
	title: 'Gameboards/FogOfWarMapBoard',
	component: FogOfWarMapBoard,
};

export const Basic = {
	args: {
		mapData: demoMapData,
		hiddenZones: demoHiddenZones,
	},
};
