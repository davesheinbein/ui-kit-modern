import ModularRegionalMapBoard from '../../components/Gameboards/Sub/ModularRegionalMapBoard';

export default {
	title: 'Gameboards/ModularRegionalMapBoard',
	component: ModularRegionalMapBoard,
};

// Modern, visually rich demo data for 3 regions with color-coded tiles
const demoRegions = [
	{ id: 1, name: 'North', color: '#60a5fa' },
	{ id: 2, name: 'South', color: '#fbbf24' },
	{ id: 3, name: 'East', color: '#34d399' },
];
const demoTiles = [
	{ id: 'A', regionId: 1, label: 'A', color: '#bae6fd' },
	{ id: 'B', regionId: 1, label: 'B', color: '#93c5fd' },
	{ id: 'C', regionId: 2, label: 'C', color: '#fde68a' },
	{ id: 'D', regionId: 2, label: 'D', color: '#fcd34d' },
	{ id: 'E', regionId: 3, label: 'E', color: '#bbf7d0' },
	{ id: 'F', regionId: 3, label: 'F', color: '#6ee7b7' },
];

export const Basic = () => (
	<div
		style={{
			maxWidth: 700,
			margin: '2rem auto',
			background: '#f3f4f6',
			borderRadius: 16,
			boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
			padding: 24,
		}}
	>
		<ModularRegionalMapBoard
			regions={demoRegions}
			tiles={demoTiles}
			regionRenderer={(region) => (
				<span
					style={{
						fontWeight: 700,
						fontSize: 18,
						letterSpacing: 1,
					}}
				>
					{region.name} 🌎
				</span>
			)}
			tileRenderer={(tile) => {
				if (tile.label === 'C')
					return <span style={{ fontSize: 22 }}>⭐</span>;
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
			<span role='img' aria-label='map'>
				🗺️
			</span>{' '}
			<b>Modular Regional Map Board</b> &mdash; Modern,
			interactive regions with color-coded tiles and emoji.
		</div>
	</div>
);
