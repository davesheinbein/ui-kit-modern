// Chart-related mock data
export const sampleChartData = [
	{ name: 'Game 1', score: 85 },
	{ name: 'Game 2', score: 92 },
	{ name: 'Game 3', score: 78 },
	{ name: 'Game 4', score: 96 },
	{ name: 'Game 5', score: 89 },
];
export const pieChartData = [
	{ name: 'Connections', score: 40 },
	{ name: 'Red Herrings', score: 30 },
	{ name: 'Speed Bonus', score: 20 },
	{ name: 'Perfect Games', score: 10 },
];
export const timeSeriesData = [
	{ date: '2024-01', value: 120 },
	{ date: '2024-02', value: 132 },
	{ date: '2024-03', value: 101 },
	{ date: '2024-04', value: 134 },
	{ date: '2024-05', value: 90 },
	{ date: '2024-06', value: 230 },
];
export const multiSeriesData = [
	{ month: 'Jan', wins: 12, losses: 8, draws: 3 },
	{ month: 'Feb', wins: 15, losses: 5, draws: 2 },
	{ month: 'Mar', wins: 10, losses: 12, draws: 5 },
	{ month: 'Apr', wins: 18, losses: 3, draws: 1 },
	{ month: 'May', wins: 14, losses: 7, draws: 4 },
];
export const scatterPlotData = [
	{ x: 10, y: 20, name: 'Point A' },
	{ x: 15, y: 35, name: 'Point B' },
	{ x: 20, y: 15, name: 'Point C' },
	{ x: 25, y: 40, name: 'Point D' },
	{ x: 30, y: 25, name: 'Point E' },
	{ x: 35, y: 50, name: 'Point F' },
	{ x: 40, y: 30, name: 'Point G' },
	{ x: 45, y: 45, name: 'Point H' },
];
export const gaugeData = [{ name: 'Progress', value: 75 }];
export const waterfallData = [
	{ name: 'Start', value: 100 },
	{ name: 'Increase', value: 20 },
	{ name: 'Decrease', value: -15 },
	{ name: 'Another Increase', value: 10 },
	{ name: 'Final', value: 115 },
];
export const heatmapData = [
	{ x: 1, y: 1, value: 10 },
	{ x: 1, y: 2, value: 20 },
	{ x: 1, y: 3, value: 15 },
	{ x: 2, y: 1, value: 25 },
	{ x: 2, y: 2, value: 30 },
	{ x: 2, y: 3, value: 35 },
	{ x: 3, y: 1, value: 12 },
	{ x: 3, y: 2, value: 18 },
	{ x: 3, y: 3, value: 22 },
];
export const boxplotData = [
	{
		category: 'A',
		min: 10,
		q1: 15,
		median: 20,
		q3: 25,
		max: 30,
	},
	{
		category: 'B',
		min: 12,
		q1: 18,
		median: 22,
		q3: 28,
		max: 35,
	},
	{
		category: 'C',
		min: 8,
		q1: 12,
		median: 18,
		q3: 22,
		max: 28,
	},
	{
		category: 'D',
		min: 15,
		q1: 20,
		median: 25,
		q3: 30,
		max: 38,
	},
];
export const errorBarData = [
	{ category: 'Q1', value: 100, error: 10 },
	{ category: 'Q2', value: 120, error: 15 },
	{ category: 'Q3', value: 110, error: 8 },
	{ category: 'Q4', value: 140, error: 12 },
];
export const referenceLineData = [
	{ month: 'Jan', sales: 45 },
	{ month: 'Feb', sales: 52 },
	{ month: 'Mar', sales: 48 },
	{ month: 'Apr', sales: 61 },
	{ month: 'May', sales: 55 },
	{ month: 'Jun', sales: 67 },
];
export const referenceAreaData = [
	{ date: '2024-01', value: 120 },
	{ date: '2024-02', value: 132 },
	{ date: '2024-03', value: 145 },
	{ date: '2024-04', value: 155 },
	{ date: '2024-05', value: 140 },
	{ date: '2024-06', value: 130 },
];
export const brushZoomData = [
	{ day: 1, visitors: 120 },
	{ day: 2, visitors: 132 },
	{ day: 3, visitors: 101 },
	{ day: 4, visitors: 134 },
	{ day: 5, visitors: 90 },
	{ day: 6, visitors: 230 },
	{ day: 7, visitors: 210 },
	{ day: 8, visitors: 180 },
	{ day: 9, visitors: 195 },
	{ day: 10, visitors: 165 },
	{ day: 11, visitors: 220 },
	{ day: 12, visitors: 240 },
	{ day: 13, visitors: 200 },
	{ day: 14, visitors: 190 },
	{ day: 15, visitors: 175 },
];
export const composedMultiData = [
	{
		month: 'Jan',
		sales: 100,
		sales_line: 110,
		sales_area: 90,
	},
	{
		month: 'Feb',
		sales: 120,
		sales_line: 125,
		sales_area: 115,
	},
	{
		month: 'Mar',
		sales: 110,
		sales_line: 105,
		sales_area: 100,
	},
	{
		month: 'Apr',
		sales: 140,
		sales_line: 135,
		sales_area: 130,
	},
	{
		month: 'May',
		sales: 130,
		sales_line: 140,
		sales_area: 125,
	},
];
export const treemapData = [
	{
		name: 'Frontend',
		size: 300,
		children: [
			{ name: 'React', size: 120 },
			{ name: 'Vue', size: 80 },
			{ name: 'Angular', size: 100 },
		],
	},
	{
		name: 'Backend',
		size: 250,
		children: [
			{ name: 'Node.js', size: 100 },
			{ name: 'Python', size: 90 },
			{ name: 'Java', size: 60 },
		],
	},
	{
		name: 'Database',
		size: 150,
		children: [
			{ name: 'MongoDB', size: 70 },
			{ name: 'PostgreSQL', size: 80 },
		],
	},
];
export const funnelData = [
	{ name: 'Visitors', value: 1000, fill: '#8884d8' },
	{ name: 'Leads', value: 300, fill: '#83a6ed' },
	{ name: 'Prospects', value: 150, fill: '#8dd1e1' },
	{ name: 'Customers', value: 50, fill: '#82ca9d' },
];
