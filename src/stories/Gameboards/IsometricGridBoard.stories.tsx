import React from 'react';
import IsometricGridBoard from '../../components/Gameboards/Sub/IsometricGridBoard';

export default {
	title: 'Gameboards/IsometricGridBoard',
	component: IsometricGridBoard,
};

// Modern, visually rich demo data for a 4x4 isometric grid (2D array)
const demoCells = Array.from({ length: 4 }).map((_, row) =>
	Array.from({ length: 4 }).map((_, col) => ({
		label: String.fromCharCode(65 + row * 4 + col),
		color: [
			'#fbbf24', // gold
			'#60a5fa', // blue
			'#34d399', // green
			'#f472b6', // pink
		][(row + col) % 4],
		row,
		col,
	}))
);

export const Basic = () => (
	<div
		style={{
			maxWidth: 420,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<IsometricGridBoard
			cells={demoCells}
			rows={4}
			columns={4}
			cellRenderer={(cell: any) => (
				<div
					style={{
						width: 48,
						height: 48,
						background: cell.color,
						borderRadius: 8,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 600,
						fontSize: 18,
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
			<span role='img' aria-label='isometric'>
				🧊
			</span>{' '}
			<b>Isometric Grid Board</b> &mdash; Modern,
			color-coded, interactive isometric grid.
		</div>
	</div>
);
