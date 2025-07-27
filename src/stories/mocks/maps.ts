// Demo map data for FogOfWarMapBoard
export const demoMapData = {
	viewBox: '0 0 400 300',
	regions: [
		{
			id: 1,
			label: 'North',
			labelX: 200,
			labelY: 60,
			shape:
				'M100,50 Q200,10 300,50 Q350,100 200,120 Q50,100 100,50 Z',
			color: '#a7f3d0',
		},
		{
			id: 2,
			label: 'South',
			labelX: 200,
			labelY: 240,
			shape:
				'M100,250 Q200,290 300,250 Q350,200 200,180 Q50,200 100,250 Z',
			color: '#fca5a5',
		},
	],
};

export const demoHiddenZones = [2];
