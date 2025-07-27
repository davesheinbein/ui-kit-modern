import ModularHexTileBoard from '../../components/Gameboards/Sub/ModularHexTileBoard';

export default {
	title: 'Gameboards/ModularHexTileBoard',
	component: ModularHexTileBoard,
};

// Modern, visually rich demo data for a 5x5 hex grid
const demoHexTiles = Array.from({ length: 5 * 5 }).map(
	(_, i) => {
		const row = Math.floor(i / 5);
		const col = i % 5;
		return {
			id: `${row}-${col}`,
			row,
			col,
			label: String.fromCharCode(
				65 + ((row * 5 + col) % 26)
			),
			color: [
				'#fbbf24', // gold
				'#60a5fa', // blue
				'#34d399', // green
				'#f472b6', // pink
				'#f87171', // red
				'#a78bfa', // purple
			][(row + col) % 6],
		};
	}
);

export const Basic = () => (
	<div
		style={{
			maxWidth: 480,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<ModularHexTileBoard
			hexTiles={demoHexTiles}
			rows={5}
			cols={5}
			tileRenderer={(tile) => {
				// Add emoji for demo interactivity
				if (tile.row === 2 && tile.col === 2)
					return (
						<text
							x={tile.col * 80 + (tile.row % 2 ? 40 : 0)}
							y={tile.row * 34.64}
							textAnchor='middle'
							alignmentBaseline='middle'
							fontSize={22}
						>
							🐝
						</text>
					);
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
			<span role='img' aria-label='hex'>
				🔷
			</span>{' '}
			<b>Modular Hex Tile Board</b> &mdash; Modern,
			interactive hex grid with color-coded tiles and emoji.
		</div>
	</div>
);
