import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Range } from '../../components/Ranges/Range';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';
import { commonArgTypes } from '../config/argTypes';

const meta: Meta<typeof Range> = {
	title: 'Ranges/Range',
	component: Range,
	decorators: commonDecorators,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'range',
		label: 'Basic Range',
		value: 50,
		min: 0,
		max: 100,
	},
};

export const Slider: Story = {
	args: {
		kind: 'slider',
		label: 'Modern Slider',
		value: 25,
		min: 0,
		max: 100,
	},
};

export const DualRange: Story = {
	args: {
		kind: 'dual-range',
		label: 'Price Range',
		helpText: 'Select your price range',
		min: 0,
		max: 1000,
	},
};

export const SteppedRange: Story = {
	args: {
		kind: 'stepped-range',
		label: 'Rating',
		value: 50,
		min: 0,
		max: 100,
		step: 10,
	},
};

export const VolumeControl: Story = {
	args: {
		'kind': 'volume-control',
		'value': 75,
		'min': 0,
		'max': 100,
		'aria-label': 'Volume Control',
	},
};

export const BrightnessControl: Story = {
	args: {
		'kind': 'brightness-control',
		'value': 60,
		'min': 0,
		'max': 100,
		'aria-label': 'Brightness Control',
	},
};

export const TemperatureControl: Story = {
	args: {
		kind: 'temperature-control',
		label: 'Temperature',
		value: 22,
		min: -10,
		max: 40,
		helpText: 'Set your preferred temperature',
	},
};

export const ProgressSlider: Story = {
	args: {
		kind: 'progress-slider',
		label: 'Progress',
		value: 65,
		min: 0,
		max: 100,
		helpText: 'Current completion status',
	},
};

export const WithMarks: Story = {
	args: {
		kind: 'stepped-range',
		label: 'Quality Settings',
		value: 50,
		min: 0,
		max: 100,
		step: 25,
		marks: {
			0: 'Low',
			25: 'Medium',
			50: 'High',
			75: 'Ultra',
			100: 'Max',
		},
	},
};

export const WithError: Story = {
	args: {
		kind: 'range',
		label: 'Invalid Range',
		value: 150,
		min: 0,
		max: 100,
		error: 'Value must be between 0 and 100',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'slider',
		label: 'Disabled Slider',
		value: 30,
		min: 0,
		max: 100,
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		kind: 'progress-slider',
		label: 'Read Only Progress',
		value: 75,
		min: 0,
		max: 100,
		readOnly: true,
		helpText: 'This value cannot be changed',
	},
};

export const SmallSize: Story = {
	args: {
		'kind': 'volume-control',
		'value': 40,
		'min': 0,
		'max': 100,
		'configuration': { size: 'small' },
		'aria-label': 'Small Volume Control',
	},
};

export const LargeSize: Story = {
	args: {
		kind: 'slider',
		label: 'Large Slider',
		value: 70,
		min: 0,
		max: 100,
		configuration: { size: 'large' },
	},
};

export const AllRangeTypes: Story = {
	render: () => (
		<Wrapper
			direction='column'
			gap={12}
			w='100%'
			maxW={600}
		>
			<Range
				kind='range'
				label='Basic Range'
				value={50}
				min={0}
				max={100}
			/>
			<Range
				kind='slider'
				label='Modern Slider'
				value={25}
				min={0}
				max={100}
			/>
			<Range
				kind='stepped-range'
				label='Stepped Range'
				value={50}
				min={0}
				max={100}
				step={10}
			/>
			<Range
				kind='volume-control'
				aria-label='Volume Control'
				value={75}
				min={0}
				max={100}
			/>
			<Range
				kind='temperature-control'
				label='Temperature Control'
				value={22}
				min={-10}
				max={40}
			/>
			<Range
				kind='progress-slider'
				label='Progress Slider'
				value={65}
				min={0}
				max={100}
			/>
		</Wrapper>
	),
};

export const InteractivePlayground: Story = {
	render: (args) => (
		<Wrapper w='100%' maxW={500} p={8}>
			<Range {...args} />
			<Wrapper
				style={{
					marginTop: '2rem',
					padding: '1rem',
					background: '#f5f5f5',
					borderRadius: '8px',
				}}
			>
				<h4>Configuration:</h4>
				<pre style={{ fontSize: '12px', margin: 0 }}>
					{JSON.stringify(args, null, 2)}
				</pre>
			</Wrapper>
		</Wrapper>
	),
	args: {
		kind: 'slider',
		label: 'Interactive Range',
		value: 50,
		min: 0,
		max: 100,
		step: 1,
		helpText:
			'Try changing the controls to see different configurations',
	},
};
