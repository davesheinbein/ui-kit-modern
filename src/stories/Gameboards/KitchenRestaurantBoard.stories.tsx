import React from 'react';
import { KitchenRestaurantBoard } from '../../components/Gameboards';

const demoStations = [
	{
		id: 'prep',
		label: 'Prep',
		type: 'prep',
		color: '#fde68a',
	},
	{
		id: 'cook',
		label: 'Cook',
		type: 'cook',
		color: '#fca5a5',
	},
	{
		id: 'plating',
		label: 'Plating',
		type: 'plating',
		color: '#a7f3d0',
	},
	{
		id: 'dish',
		label: 'Dish',
		type: 'dish',
		color: '#c7d2fe',
	},
];
const demoTables = [
	{
		id: 't1',
		label: 'Table 1',
		seats: 4,
		color: '#bae6fd',
	},
	{
		id: 't2',
		label: 'Table 2',
		seats: 2,
		color: '#fbcfe8',
	},
	{
		id: 't3',
		label: 'Table 3',
		seats: 6,
		color: '#bbf7d0',
	},
	{
		id: 't4',
		label: 'Table 4',
		seats: 4,
		color: '#fef08a',
	},
	{
		id: 't5',
		label: 'Table 5',
		seats: 2,
		color: '#fca5a5',
	},
];

export default {
	title: 'Gameboards/KitchenRestaurantBoard',
	component: KitchenRestaurantBoard,
};

export const Basic = () => (
	<div style={{ maxWidth: 520, margin: '2rem auto' }}>
		<KitchenRestaurantBoard
			stations={demoStations}
			tables={demoTables}
			layout='hybrid'
			showLabels
		/>
		<div
			style={{
				marginTop: 24,
				textAlign: 'center',
				color: '#888',
			}}
		>
			<span role='img' aria-label='kitchen'>
				👨‍🍳
			</span>{' '}
			Modern kitchen and restaurant layout with stations and
			tables
		</div>
	</div>
);
