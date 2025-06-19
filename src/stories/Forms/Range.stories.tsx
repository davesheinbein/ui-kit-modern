import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Range (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'range',
				'volume-range',
				'brightness-range',
				'price-range',
				'age-range',
			],
			description:
				'Type of range using extended form field kinds',
		},
		value: {
			control: 'number',
			description: 'Range value',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the range',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof FormFieldFactory>;

export const Default: Story = {
	args: {
		kind: 'range',
	},
};

export const AllRangeTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='range' />
			<F kind='volume-range' />
			<F kind='brightness-range' />
			<F kind='price-range' />
			<F kind='age-range' />
		</div>
	),
};

export const WithStates: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='range' value={25} />
			<F kind='range' value={50} />
			<F kind='range' value={75} />
			<F kind='range' disabled />
			<F kind='volume-range' error='Invalid volume level' />
		</div>
	),
};

export const InteractiveRange: Story = {
	render: () => {
		const [values, setValues] = useState({
			volume: 50,
			brightness: 75,
			price: 100,
			age: 25,
		});

		const handleChange = (field: string, value: number) => {
			setValues((prev) => ({ ...prev, [field]: value }));
		};

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					maxWidth: '400px',
				}}
			>
				<F
					kind='volume-range'
					value={values.volume}
					onChange={(value: number) =>
						handleChange('volume', value)
					}
				/>
				<F
					kind='brightness-range'
					value={values.brightness}
					onChange={(value: number) =>
						handleChange('brightness', value)
					}
				/>
				<F
					kind='price-range'
					value={values.price}
					onChange={(value: number) =>
						handleChange('price', value)
					}
				/>
				<F
					kind='age-range'
					value={values.age}
					onChange={(value: number) =>
						handleChange('age', value)
					}
				/>
				<div
					style={{
						marginTop: '1rem',
						padding: '1rem',
						backgroundColor: '#f5f5f5',
						borderRadius: '4px',
					}}
				>
					<h4>Range Values:</h4>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</div>
			</div>
		);
	},
};

export const UltraShortSyntax: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<p>
				<strong>Ultra-short syntax using F alias:</strong>
			</p>
			<F kind='volume-range' />
			<F kind='brightness-range' />
			<F kind='price-range' />
		</div>
	),
};
