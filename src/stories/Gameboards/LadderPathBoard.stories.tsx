import React from 'react';
import { LadderPathBoard } from '../../components/Gameboards';

// Modern, visually rich demo data for rungs
const demoRungs = [
	{ label: 'Start', color: '#60a5fa', id: 'rung-1' },
	{ label: 'Step 1', color: '#fbbf24', id: 'rung-2' },
	{ label: 'Step 2', color: '#34d399', id: 'rung-3' },
	{ label: 'Step 3', color: '#f472b6', id: 'rung-4' },
	{ label: 'Step 4', color: '#a78bfa', id: 'rung-5' },
	{ label: 'Step 5', color: '#f87171', id: 'rung-6' },
	{ label: 'Finish', color: '#38bdf8', id: 'rung-7' },
];

export default {
	title: 'Gameboards/LadderPathBoard',
	component: LadderPathBoard,
};

export const Basic = () => (
	<div
		style={{
			maxWidth: 420,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
		}}
	>
		<LadderPathBoard
			rungs={demoRungs}
			ariaLabel='Professional Ladder Path Demo'
			style={{ margin: '0 auto', minHeight: 360 }}
		/>
		<div
			style={{
				marginTop: 24,
				textAlign: 'center',
				color: '#64748b',
				fontSize: 16,
			}}
		>
			<span role='img' aria-label='ladder'>
				🪜
			</span>{' '}
			<b>Modern Ladder Path</b> &mdash; Each rung is
			color-coded and labeled for clarity.
		</div>
	</div>
);
