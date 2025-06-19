import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Radio (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'radio',
				'radio-group',
				'gender-radio',
				'subscription-radio',
				'payment-radio',
			],
			description:
				'Type of radio using extended form field kinds',
		},
		value: {
			control: 'text',
			description: 'Selected value',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the radio',
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
		kind: 'radio',
	},
};

export const RadioGroup: Story = {
	args: {
		kind: 'radio-group',
	},
};

export const AllRadioTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='gender-radio' />
			<F kind='subscription-radio' />
			<F kind='payment-radio' />
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
			<F kind='radio' checked={false} />
			<F kind='radio' checked={true} />
			<F kind='radio' disabled />
			<F
				kind='gender-radio'
				error='Please select a gender'
			/>
		</div>
	),
};

export const InteractiveRadio: Story = {
	render: () => {
		const [values, setValues] = useState({
			gender: '',
			subscription: '',
			payment: '',
		});

		const handleChange = (field: string, value: string) => {
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
					kind='gender-radio'
					value={values.gender}
					onChange={(value: string) =>
						handleChange('gender', value)
					}
				/>
				<F
					kind='subscription-radio'
					value={values.subscription}
					onChange={(value: string) =>
						handleChange('subscription', value)
					}
				/>
				<F
					kind='payment-radio'
					value={values.payment}
					onChange={(value: string) =>
						handleChange('payment', value)
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
					<h4>Radio Values:</h4>
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
			<F kind='gender-radio' />
			<F kind='subscription-radio' />
			<F kind='payment-radio' />
		</div>
	),
};
