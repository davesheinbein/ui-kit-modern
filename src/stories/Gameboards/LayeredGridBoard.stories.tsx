import React from 'react';
import { LayeredGridBoard } from '../../components/Gameboards';

// Demo data: 2 layers, each 3x3
const layer1 = [
	{ label: 'A1' },
	{ label: 'A2' },
	{ label: 'A3' },
	{ label: 'B1' },
	{ label: 'B2' },
	{ label: 'B3' },
	{ label: 'C1' },
	{ label: 'C2' },
	{ label: 'C3' },
];
const layer2 = [
	{ label: '1' },
	{ label: '2' },
	{ label: '3' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
];

export default {
	title: 'Gameboards/LayeredGridBoard',
	component: LayeredGridBoard,
};

export const Basic = () => (
	<div
		style={{
			maxWidth: 220,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<LayeredGridBoard layers={[layer1, layer2]} />
		<div
			style={{
				marginTop: 16,
				textAlign: 'center',
				color: '#64748b',
				fontSize: 15,
			}}
		>
			<span role='img' aria-label='layers'>
				🟦
			</span>{' '}
			<b>Layered Grid</b> &mdash; Multiple overlays for
			advanced board games.
		</div>
	</div>
);
