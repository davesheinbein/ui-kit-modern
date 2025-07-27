import React from 'react';
import {
	Board,
	SquareGridBoard,
	HexGridBoard,
	HorseTrackBoard,
	RectangularGridBoard,
} from '../../components/Gameboards';
import TriangularGridBoard from '../../components/Gameboards/Sub/TriangularGridBoard';
import CircularGridBoard from '../../components/Gameboards/Sub/CircularGridBoard';
// ...import other board types as needed
import UnderwaterBaseMapBoard from '../../components/Gameboards/Sub/UnderwaterBaseMapBoard';
import WordLetterGridBoard from '../../components/Gameboards/Sub/WordLetterGridBoard';
import type { WordLetterGridBoardProps } from '../../components/Gameboards/Sub/WordLetterGridBoard';
import '../../components/Gameboards/Sub/WordLetterGridBoard.module.scss';
import type { UnderwaterBaseMapBoardProps } from '../../components/Gameboards/Sub/UnderwaterBaseMapBoard';
import '../../components/Gameboards/Sub/UnderwaterBaseMapBoard.module.scss';
import WindingSnakePathBoard from '../../components/Gameboards/Sub/WindingSnakePathBoard';
import '../../components/Gameboards/Sub/WindingSnakePathBoard.module.scss';

import { Gameboards } from '../../components/Gameboards';

// CSF3 meta default export
export default {
	title: 'Gameboards/All',
	component: Gameboards,
	tags: ['autodocs'],
};

// Each config only includes the props for its board type
const BOARD_CONFIGS = [
	{
		boardType: 'square-grid',
		size: 3,
		cells: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
		className: 'squareGridBoard',
	},
	{
		boardType: 'square-grid',
		size: 4,
		cells: [
			'Alpha',
			'Bravo',
			'Charlie',
			'Delta',
			'Echo',
			'Foxtrot',
			'Golf',
			'Hotel',
			'India',
			'Juliet',
			'Kilo',
			'Lima',
			'Mike',
			'November',
			'Oscar',
			'Papa',
		],
		className: 'squareGridBoard',
	},
	{
		boardType: 'hex-grid',
		hexes: Array(19).fill({}),
		className: 'hexGridBoard',
	},
	{
		boardType: 'hex-grid',
		hexes: Array(7).fill({}),
		className: 'hexGridBoard',
	},
	{
		boardType: 'horse-track',
		lanes: 4,
		width: 800,
		height: 400,
		laneWidth: 15,
		trackPadding: 20,
		laneColors: [
			'#e0c68b',
			'#f5e6c8',
			'#d1b280',
			'#f8f3e1',
		],
		showLaneNumbers: true,
		showFinishLine: true,
		showStartLine: true,
		horses: [0.2, 0.5, 0.7, 0.9],
		theme: 'light',
	},
	{
		boardType: 'horse-track',
		lanes: 6,
		width: 1000,
		height: 500,
		laneWidth: 18,
		trackPadding: 30,
		laneColors: [
			'#e0c68b',
			'#f5e6c8',
			'#d1b280',
			'#f8f3e1',
			'#c8e6c9',
			'#b3e5fc',
		],
		showLaneNumbers: true,
		showFinishLine: true,
		showStartLine: true,
		horses: [0.1, 0.3, 0.5, 0.7, 0.8, 0.95],
		theme: 'dark',
	},
	{
		boardType: 'rectangular-grid',
		rows: 2,
		columns: 5,
		cells: [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
		],
		className: 'rectangularGridBoard',
	},
];

export const AllBoards = () => (
	<div
		style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}
	>
		{BOARD_CONFIGS.map((config, idx) => {
			switch (config.boardType) {
				case 'square-grid':
					return (
						<div
							key={idx}
							style={{
								flex: '1 1 400px',
								minWidth: 350,
								maxWidth: 500,
								margin: '1rem auto',
							}}
						>
							<SquareGridBoard
								size={config.size!}
								cells={config.cells!}
								className={config.className}
							/>
							<div
								style={{
									textAlign: 'center',
									marginTop: 8,
									fontSize: '1rem',
									color: '#64748b',
								}}
							>
								{config.boardType}
							</div>
						</div>
					);
				case 'hex-grid':
					return (
						<div
							key={idx}
							style={{
								flex: '1 1 400px',
								minWidth: 350,
								maxWidth: 500,
								margin: '1rem auto',
							}}
						>
							<HexGridBoard
								hexes={config.hexes!}
								className={config.className}
							/>
							<div
								style={{
									textAlign: 'center',
									marginTop: 8,
									fontSize: '1rem',
									color: '#64748b',
								}}
							>
								{config.boardType}
							</div>
						</div>
					);
				case 'horse-track':
					return (
						<div
							key={idx}
							style={{
								flex: '1 1 400px',
								minWidth: 350,
								maxWidth: 500,
								margin: '1rem auto',
							}}
						>
							<HorseTrackBoard
								lanes={config.lanes!}
								width={config.width!}
								height={config.height!}
								laneWidth={config.laneWidth!}
								trackPadding={config.trackPadding!}
								laneColors={config.laneColors!}
								showLaneNumbers={config.showLaneNumbers!}
								showFinishLine={config.showFinishLine!}
								showStartLine={config.showStartLine!}
								horses={config.horses!}
								theme={
									config.theme as 'light' | 'dark' | 'auto'
								}
							/>
							<div
								style={{
									textAlign: 'center',
									marginTop: 8,
									fontSize: '1rem',
									color: '#64748b',
								}}
							>
								{config.boardType}
							</div>
						</div>
					);
				case 'rectangular-grid':
					// Convert flat cells array to 2D array for RectangularGridBoard
					const rows = config.rows!;
					const columns = config.columns!;
					const flatCells = config.cells!;
					const cells2D = [];
					for (let i = 0; i < rows; i++) {
						cells2D.push(
							flatCells.slice(
								i * columns,
								(i + 1) * columns
							)
						);
					}
					return (
						<div
							key={idx}
							style={{
								flex: '1 1 400px',
								minWidth: 350,
								maxWidth: 500,
								margin: '1rem auto',
							}}
						>
							<RectangularGridBoard
								rows={rows}
								columns={columns}
								cells={cells2D}
								className={config.className}
							/>
							<div
								style={{
									textAlign: 'center',
									marginTop: 8,
									fontSize: '1rem',
									color: '#64748b',
								}}
							>
								{config.boardType}
							</div>
						</div>
					);
				default:
					return null;
			}
		})}
	</div>
);
