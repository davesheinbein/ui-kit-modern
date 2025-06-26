import React from 'react';
import { Grid } from '../../components/Grid';
import type { Meta, StoryObj } from '@storybook/react';
import { commonDecorators } from '../config/decorators';
import {
	gridWords3x3,
	gridWords4x4,
	gridWords5x5,
} from '../mocks';

const defaultGridStyle = {
	backgroundColor: '#F8F6F0',
	borderRadius: 12,
	padding: 12,
	boxShadow: '0 2px 8px 0 #e2e8f040',
};

const meta: Meta<typeof Grid> = {
	title: 'Grid/Grid',
	component: Grid,
	decorators: commonDecorators,
	tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Grid>;

// === GRID STORIES ===
export const Grid3x3: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='grid'
			words={gridWords3x3}
			gridSize={{ rows: 3, cols: 3 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
			preview={false}
		/>
	),
	args: {},
};
Grid3x3.storyName = 'Grid 3x3';

export const Grid4x4: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='grid'
			words={gridWords4x4}
			gridSize={{ rows: 4, cols: 4 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
			preview={false}
		/>
	),
	args: {},
};
Grid4x4.storyName = 'Grid 4x4';

export const Grid5x5: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='grid'
			words={gridWords5x5}
			gridSize={{ rows: 5, cols: 5 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
			preview={false}
		/>
	),
	args: {},
};
Grid5x5.storyName = 'Grid 5x5';

// === PREGAME STORIES ===
export const Pregame3x3: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='pregame'
			words={gridWords3x3}
			isLocked
			gridSize={{ rows: 3, cols: 3 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
		/>
	),
	args: {},
};
Pregame3x3.storyName = 'Pregame 3x3';

export const Pregame4x4: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='pregame'
			words={gridWords4x4}
			isLocked
			gridSize={{ rows: 4, cols: 4 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
		/>
	),
	args: {},
};
Pregame4x4.storyName = 'Pregame 4x4';

export const Pregame5x5: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='pregame'
			words={gridWords5x5}
			isLocked
			gridSize={{ rows: 5, cols: 5 }}
			style={{ ...defaultGridStyle, ...args.style }}
			cellClassName='custom-cell'
		/>
	),
	args: {},
};
Pregame5x5.storyName = 'Pregame 5x5';

// === SOLVED STORIES ===
export const Solved3x3: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='solved'
			pendingSolvedGroups={[
				{ groupIdx: 0, words: gridWords3x3.slice(0, 3) },
				{ groupIdx: 1, words: gridWords3x3.slice(3, 6) },
				{ groupIdx: 2, words: gridWords3x3.slice(6, 9) },
			]}
			activePuzzle={{ groupLabels: ['A', 'B', 'C'] }}
			gridSize={{ rows: 3, cols: 3 }}
			style={{ ...defaultGridStyle, ...args.style }}
		/>
	),
	args: {},
};
Solved3x3.storyName = 'Solved 3x3';

export const Solved4x4: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='solved'
			pendingSolvedGroups={[
				{ groupIdx: 0, words: gridWords4x4.slice(0, 4) },
				{ groupIdx: 1, words: gridWords4x4.slice(4, 8) },
				{ groupIdx: 2, words: gridWords4x4.slice(8, 12) },
				{ groupIdx: 3, words: gridWords4x4.slice(12, 16) },
			]}
			activePuzzle={{ groupLabels: ['A', 'B', 'C', 'D'] }}
			gridSize={{ rows: 4, cols: 4 }}
			style={{ ...defaultGridStyle, ...args.style }}
		/>
	),
	args: {},
};
Solved4x4.storyName = 'Solved 4x4';

export const Solved5x5: Story = {
	render: (args) => (
		<Grid
			{...args}
			kind='solved'
			pendingSolvedGroups={[
				{ groupIdx: 0, words: gridWords5x5.slice(0, 5) },
				{ groupIdx: 1, words: gridWords5x5.slice(5, 10) },
				{ groupIdx: 2, words: gridWords5x5.slice(10, 15) },
				{ groupIdx: 3, words: gridWords5x5.slice(15, 20) },
				{ groupIdx: 4, words: gridWords5x5.slice(20, 25) },
			]}
			activePuzzle={{
				groupLabels: ['A', 'B', 'C', 'D', 'E'],
			}}
			gridSize={{ rows: 5, cols: 5 }}
			style={{ ...defaultGridStyle, ...args.style }}
		/>
	),
	args: {},
};
Solved5x5.storyName = 'Solved 5x5';
