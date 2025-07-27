import React, { useState } from 'react';
import HiddenZonesRandomRevealBoard from '../../components/Gameboards/Sub/HiddenZonesRandomRevealBoard';
import {
	demoZones,
	demoRevealed,
} from '../mocks/hiddenZones';

const zoneIcons: Record<string, string> = {
	Treasure: '💰',
	Trap: '⚠️',
	Potion: '🧪',
	Monster: '👾',
	Key: '🗝️',
	Map: '🗺️',
	Gem: '💎',
	Scroll: '📜',
	Sword: '🗡️',
};

export default {
	title: 'Gameboards/HiddenZonesRandomRevealBoard',
	component: HiddenZonesRandomRevealBoard,
};

// CSF3-compliant Basic story for Storybook compatibility
export const Basic = () => {
	const [revealed, setRevealed] = useState([
		...demoRevealed,
	]);

	const handleReveal = (idx: number) => {
		setRevealed((prev) => {
			if (prev[idx]) return prev;
			const next = [...prev];
			next[idx] = true;
			return next;
		});
	};

	const zones: string[] = demoZones;

	return (
		<div style={{ maxWidth: 400, margin: '2rem auto' }}>
			<HiddenZonesRandomRevealBoard
				zones={zones.map(
					(z: string) => zoneIcons[z] + ' ' + z
				)}
				revealed={revealed}
				onReveal={handleReveal}
				gridSize={3}
			/>
			<div
				style={{
					marginTop: 24,
					textAlign: 'center',
					color: '#888',
				}}
			>
				Click a tile to reveal its hidden zone!
			</div>
		</div>
	);
};
