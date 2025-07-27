import React from 'react';
import { HorseTrackBoard } from '../../components/Gameboards';
import type { HorseTrackBoardProps } from '../../components/Gameboards/Sub/HorseTrackBoard';

export default {
	title: 'Gameboards/HorseTrackBoard',
	component: HorseTrackBoard,
	tags: ['autodocs'],
};

const defaultArgs = {
	lanes: 4,
	width: 800,
	height: 400,
	laneWidth: 15,
	trackPadding: 20,
	laneColors: ['#e0c68b', '#f5e6c8', '#d1b280', '#f8f3e1'],
	showLaneNumbers: true,
	showFinishLine: true,
	showStartLine: true,
	horses: [0.2, 0.5, 0.7, 0.9],
	theme: 'light',
};

export const Default = (args: HorseTrackBoardProps) => (
	<HorseTrackBoard {...args} />
);
Default.args = { ...defaultArgs };

export const DarkTheme = (args: HorseTrackBoardProps) => (
	<HorseTrackBoard {...args} theme='dark' />
);
DarkTheme.args = { ...defaultArgs, theme: 'dark' };

export const CustomLanes = (args: HorseTrackBoardProps) => (
	<HorseTrackBoard
		{...args}
		lanes={6}
		laneColors={[
			'#e0c68b',
			'#f5e6c8',
			'#d1b280',
			'#f8f3e1',
			'#bada55',
			'#ff69b4',
		]}
	/>
);
CustomLanes.args = { ...defaultArgs, lanes: 6 };
