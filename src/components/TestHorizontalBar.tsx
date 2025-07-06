import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ match: 'Game 1', score: 85 },
	{ match: 'Game 2', score: 92 },
	{ match: 'Game 3', score: 78 },
	{ match: 'Game 4', score: 96 },
	{ match: 'Game 5', score: 89 },
];

export const TestHorizontalBar = () => (
	<div style={{ width: '100%', height: '400px' }}>
		<h2>Test Horizontal Bar Chart</h2>
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart
				layout='horizontal'
				data={data}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis type='number' />
				<YAxis dataKey='match' type='category' />
				<Tooltip />
				<Bar dataKey='score' fill='#8884d8' />
			</BarChart>
		</ResponsiveContainer>
	</div>
);

export default TestHorizontalBar;
