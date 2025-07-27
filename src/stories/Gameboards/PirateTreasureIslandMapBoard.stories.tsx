import React from 'react';
import PirateTreasureIslandMapBoard from '../../components/Gameboards/Sub/PirateTreasureIslandMapBoard';

export default {
	title: 'Gameboards/PirateTreasureIslandMapBoard',
	component: PirateTreasureIslandMapBoard,
};

// Modern, visually rich demo data for a pirate treasure island map
const demoIslands = [
	{ name: 'Skull Island', color: '#fbbf24', icon: '💀' },
	{ name: 'Emerald Key', color: '#34d399', icon: '🗝️' },
	{ name: 'Ruby Cove', color: '#f87171', icon: '💎' },
	{ name: 'Parrot Point', color: '#60a5fa', icon: '🦜' },
	{ name: 'Treasure Atoll', color: '#fde68a', icon: '🪙' },
];
const demoTreasures = [
	{ island: 0, label: 'Gold', icon: '🪙' },
	{ island: 2, label: 'Emerald', icon: '💚' },
	{ island: 4, label: 'Ruby', icon: '❤️' },
];

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
		<PirateTreasureIslandMapBoard
			islands={demoIslands}
			treasures={demoTreasures}
			islandRenderer={(island: any) => (
				<div
					style={{
						width: 56,
						height: 56,
						background: island.color,
						borderRadius: '50%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontWeight: 700,
						fontSize: 28,
						color: '#fff',
						boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
						border: '3px solid #fff',
						userSelect: 'none',
					}}
					title={island.name}
				>
					<span style={{ marginRight: 4 }}>
						{island.icon}
					</span>
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
			<span role='img' aria-label='treasure'>
				🏝️
			</span>{' '}
			<b>Pirate Treasure Island Map Board</b> &mdash;
			Modern, interactive, color-coded islands with emoji.
		</div>
	</div>
);
