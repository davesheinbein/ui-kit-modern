import React from 'react';
import NonSquareGridBoard from '../../components/Gameboards/Sub/NonSquareGridBoard';

export default {
	title: 'Gameboards/NonSquareGridBoard',
	component: NonSquareGridBoard,
};

// Modern, visually rich demo data for a 4x6 non-square grid
const demoGrid = [
	[
		{ label: 'A', color: '#fbbf24' },
		{ label: 'B', color: '#60a5fa' },
		{ label: 'C', color: '#34d399' },
		{ label: 'D', color: '#f472b6' },
		{ label: 'E', color: '#f87171' },
		{ label: 'F', color: '#a78bfa' },
	],
	[
		{ label: 'G', color: '#fbbf24' },
		{ label: 'H', color: '#60a5fa' },
		{ label: 'I', color: '#34d399' },
		{ label: 'J', color: '#f472b6' },
		{ label: 'K', color: '#f87171' },
		{ label: 'L', color: '#a78bfa' },
	],
	[
		{ label: 'M', color: '#fbbf24' },
		{ label: 'N', color: '#60a5fa' },
		{ label: 'O', color: '#34d399' },
		{ label: 'P', color: '#f472b6' },
		{ label: 'Q', color: '#f87171' },
		{ label: 'R', color: '#a78bfa' },
	],
	[
		{ label: 'S', color: '#fbbf24' },
		{ label: 'T', color: '#60a5fa' },
		{ label: 'U', color: '#34d399' },
		{ label: 'V', color: '#f472b6' },
		{ label: 'W', color: '#f87171' },
		{ label: 'X', color: '#a78bfa' },
	],
];

export const Basic = () => (
	<div
		style={{
			maxWidth: 520,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		{/* Replace with correct props for NonSquareGridBoard if grid is not supported */}
		<NonSquareGridBoard
			shape='trapezoid'
			cells={demoGrid.flat()}
			cellRenderer={(cell: any, idx: number) => (
				<div
					style={{
						width: 56,
						height: 56,
						background: cell.color,
						borderRadius: 8,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 600,
						fontSize: 20,
						color: '#fff',
						boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
						border: '2px solid #fff',
						userSelect: 'none',
					}}
				>
					{cell.label}
				</div>
			)}
		/>
		<div
			style={{
				marginTop: 16,
				textAlign: 'center',
				color: '#64748b',
				fontSize: 15,
			}}
		>
			<span role='img' aria-label='grid'>
				🔢
			</span>{' '}
			<b>Non-Square Grid Board</b> &mdash; Modern,
			color-coded, interactive grid.
		</div>
	</div>
);
