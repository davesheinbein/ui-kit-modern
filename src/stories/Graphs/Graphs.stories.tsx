import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Graphs, {
	GraphsProps,
} from '../../components/Graphs';

const meta: Meta<typeof Graphs> = {
	title: 'Graphs/Graph (Legacy Compatibility)',
	component: Graphs,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
## Legacy Graph Component (Backward Compatibility)

This is the original Graphs component, maintained for backward compatibility. 

**⚠️ For new development, please use the [Graph (DRY System)](?path=/docs/graphs-graph-dry-system--docs) instead.**

### Migration Guide:

\`\`\`tsx
// OLD: Legacy Graphs component  
<Graphs data={data} shape="bar" dataKey="score" labelKey="match" />

// NEW: DRY System
<UnifiedGraph kind="bar" data={data} dataKey="score" labelKey="match" />
// OR
{G.bar(data, { dataKey: 'score', labelKey: 'match' })}
\`\`\`

The legacy component is a thin wrapper around the new DRY system and will continue to work as expected.
				`,
			},
		},
	},
	argTypes: {
		shape: {
			control: 'select',
			options: [
				'bar',
				'horizontalBar',
				'pie',
				'line',
				'area',
				'radar',
				'composed',
			],
			description:
				'Chart shape (legacy prop - use "kind" in DRY system)',
		},
		dataKey: {
			control: 'text',
			description: 'Key for chart data values',
		},
		labelKey: {
			control: 'text',
			description: 'Key for chart labels',
		},
		title: {
			control: 'text',
			description: 'Chart title',
		},
		height: {
			control: {
				type: 'range',
				min: 80,
				max: 400,
				step: 20,
			},
			description: 'Chart height',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Graphs>;

const sampleData = [
	{ match: 'Game 1', score: 85 },
	{ match: 'Game 2', score: 92 },
	{ match: 'Game 3', score: 78 },
	{ match: 'Game 4', score: 96 },
	{ match: 'Game 5', score: 89 },
];

const pieData = [
	{ category: 'Connections', score: 40 },
	{ category: 'Red Herrings', score: 30 },
	{ category: 'Speed Bonus', score: 20 },
	{ category: 'Perfect Games', score: 10 },
];

export const Bar: Story = {
	args: {
		data: sampleData,
		shape: 'bar',
		dataKey: 'score',
		labelKey: 'match',
		title: 'Score History (Legacy)',
		height: 160,
	},
};

export const HorizontalBar: Story = {
	args: {
		data: sampleData,
		shape: 'horizontalBar',
		dataKey: 'score',
		labelKey: 'match',
		title: 'Horizontal Bar Chart (Legacy)',
		height: 180,
	},
};

export const Pie: Story = {
	args: {
		data: pieData,
		shape: 'pie',
		dataKey: 'score',
		labelKey: 'category',
		title: 'Performance Breakdown (Legacy)',
		height: 200,
	},
};

export const Line: Story = {
	args: {
		data: sampleData,
		shape: 'line',
		dataKey: 'score',
		labelKey: 'match',
		title: 'Progress Trend (Legacy)',
		height: 160,
	},
};

export const Area: Story = {
	args: {
		data: sampleData,
		shape: 'area',
		dataKey: 'score',
		labelKey: 'match',
		title: 'Score Area Chart (Legacy)',
		height: 160,
	},
};

export const Radar: Story = {
	args: {
		data: [
			{ skill: 'Speed', score: 85 },
			{ skill: 'Accuracy', score: 92 },
			{ skill: 'Strategy', score: 78 },
			{ skill: 'Pattern Recognition', score: 89 },
			{ skill: 'Focus', score: 76 },
		],
		shape: 'radar',
		dataKey: 'score',
		labelKey: 'skill',
		title: 'Skill Analysis (Legacy)',
		height: 200,
	},
};

export const Composed: Story = {
	args: {
		data: sampleData,
		shape: 'composed',
		dataKey: 'score',
		labelKey: 'match',
		title: 'Combined Chart (Legacy)',
		height: 180,
	},
};
