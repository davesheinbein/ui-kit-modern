import React from 'react';
import MysteryShuffleRevealBoard from '../../components/Gameboards/Sub/MysteryShuffleRevealBoard';

export default {
	title: 'Gameboards/MysteryShuffleRevealBoard',
	component: MysteryShuffleRevealBoard,
};

// Modern, visually rich demo data for a 4x3 grid of cards
const demoElements = [
	{ id: 1, label: '🍎', color: '#f87171' },
	{ id: 2, label: '🍌', color: '#fbbf24' },
	{ id: 3, label: '🍇', color: '#60a5fa' },
	{ id: 4, label: '🍉', color: '#34d399' },
	{ id: 5, label: '🍒', color: '#f472b6' },
	{ id: 6, label: '🍋', color: '#fde68a' },
	{ id: 7, label: '🍍', color: '#facc15' },
	{ id: 8, label: '🥝', color: '#a3e635' },
	{ id: 9, label: '🍑', color: '#fb7185' },
	{ id: 10, label: '🍏', color: '#4ade80' },
	{ id: 11, label: '🍓', color: '#f43f5e' },
	{ id: 12, label: '🍈', color: '#5eead4' },
];
const demoRevealed = Array(12).fill(false);

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
		<MysteryShuffleRevealBoard
			elements={demoElements}
			revealed={demoRevealed}
			rows={4}
			columns={3}
			cardRenderer={(card: any, revealed: boolean) => (
				<div
					style={{
						width: 64,
						height: 88,
						background: revealed ? card.color : '#e5e7eb',
						borderRadius: 10,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						fontSize: 32,
						boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
						color: revealed ? '#fff' : '#64748b',
						transition: 'background 0.2s, color 0.2s',
						cursor: 'pointer',
						border: '2px solid #fff',
					}}
				>
					{revealed ? card.label : '❓'}
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
			<span role='img' aria-label='shuffle'>
				🔀
			</span>{' '}
			<b>Mystery Shuffle Reveal Board</b> &mdash;
			Interactive, color-coded cards with emoji.
		</div>
	</div>
);
