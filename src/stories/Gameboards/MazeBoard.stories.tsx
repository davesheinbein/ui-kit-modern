import React from 'react';
import MazeBoard from '../../components/Gameboards/Sub/MazeBoard';

// Modern demo maze: 0 = path, 1 = wall
const demoMaze = [
	[1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1],
];

export default {
	title: 'Gameboards/MazeBoard',
	component: MazeBoard,
};

export const Basic = () => (
	<div
		style={{
			maxWidth: 320,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<MazeBoard
			maze={demoMaze}
			cellRenderer={(
				cell: number,
				row: number,
				col: number
			) => {
				if (cell === 1) return '';
				if (row === 1 && col === 1) return '🚶'; // Start
				if (row === 5 && col === 5) return '🏁'; // End
				return '';
			}}
		/>
		<div
			style={{
				marginTop: 16,
				textAlign: 'center',
				color: '#64748b',
				fontSize: 15,
			}}
		>
			<span role='img' aria-label='maze'>
				🧩
			</span>{' '}
			<b>Maze Board</b> &mdash; Modern, interactive maze
			with start and finish.
		</div>
	</div>
);
