import ModularSquareTileGridBoard from '../../components/Gameboards/Sub/ModularSquareTileGridBoard';

export default {
	title: 'Gameboards/ModularSquareTileGridBoard',
	component: ModularSquareTileGridBoard,
};

// Modern, visually rich demo data for a 6x6 grid
const demoTiles = Array.from({ length: 12 }).map((_, i) => {
	const x = i % 6;
	const y = Math.floor(i / 6);
	return {
		id: `${x}-${y}`,
		x,
		y,
		label: String.fromCharCode(65 + i),
		color: [
			'#fbbf24', // gold
			'#60a5fa', // blue
			'#34d399', // green
			'#f472b6', // pink
			'#f87171', // red
			'#a78bfa', // purple
		][i % 6],
	};
});

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
		<ModularSquareTileGridBoard
			tiles={demoTiles}
			rows={2}
			columns={6}
			gridSize={48}
			showGrid={true}
			tileRenderer={(tile) => {
				if (tile.label === 'C')
					return <span style={{ fontSize: 22 }}>⭐</span>;
				if (tile.label === 'F')
					return <span style={{ fontSize: 22 }}>🎲</span>;
				return null;
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
			<span role='img' aria-label='grid'>
				🟦
			</span>{' '}
			<b>Modular Square Tile Grid Board</b> &mdash; Modern,
			interactive grid with color-coded tiles and emoji.
		</div>
	</div>
);
