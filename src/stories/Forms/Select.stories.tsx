import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Select (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'select',
				'country-select',
				'language-select',
				'timezone-select',
				'currency-select',
			],
			description:
				'Type of select using extended form field kinds',
		},
		value: {
			control: 'text',
			description: 'Selected value',
		},
		defaultValue: {
			control: 'text',
			description: 'Default selected value',
		},
		options: {
			control: 'object',
			description: 'Array of select options',
		},
		label: {
			control: 'text',
			description: 'Label for the select field',
		},
		placeholder: {
			control: 'text',
			description:
				'Placeholder text when no option is selected',
		},
		multiple: {
			control: 'boolean',
			description: 'Allow multiple selections',
		},
		searchable: {
			control: 'boolean',
			description:
				'Whether select is searchable/filterable',
		},
		clearable: {
			control: 'boolean',
			description: 'Whether selected value can be cleared',
		},
		required: {
			control: 'boolean',
			description: 'Whether selection is required',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the select',
		},
		loading: {
			control: 'boolean',
			description: 'Whether select is in loading state',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		helperText: {
			control: 'text',
			description: 'Helper text below select',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size of the select field',
		},
		variant: {
			control: 'select',
			options: ['default', 'outlined', 'filled'],
			description: 'Visual variant of the select',
		},
		maxMenuHeight: {
			control: {
				type: 'range',
				min: 100,
				max: 400,
				step: 20,
			},
			description: 'Maximum height of dropdown menu',
		},
		onChange: {
			action: 'selectionChanged',
			description: 'Function called when selection changes',
		},
		onFocus: {
			action: 'selectFocused',
			description: 'Function called when select is focused',
		},
		onBlur: {
			action: 'selectBlurred',
			description:
				'Function called when select loses focus',
		},
		onSearchChange: {
			action: 'searchChanged',
			description:
				'Function called when search input changes',
		},
	},
};

export default meta;
type Story = StoryObj<typeof FormFieldFactory>;

export const Default: Story = {
	args: {
		kind: 'select',
	},
};

export const AllSelectTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='select' />
			<F kind='country-select' />
			<F kind='language-select' />
			<F kind='timezone-select' />
			<F kind='currency-select' />
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
			<F kind='select' />
			<F kind='select' disabled />
			<F
				kind='country-select'
				error='Please select a country'
			/>
		</div>
	),
};

export const InteractiveSelect: Story = {
	render: () => {
		const [values, setValues] = useState({
			country: '',
			language: '',
			timezone: '',
			currency: '',
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
					kind='country-select'
					value={values.country}
					onChange={(value: string) =>
						handleChange('country', value)
					}
				/>
				<F
					kind='language-select'
					value={values.language}
					onChange={(value: string) =>
						handleChange('language', value)
					}
				/>
				<F
					kind='timezone-select'
					value={values.timezone}
					onChange={(value: string) =>
						handleChange('timezone', value)
					}
				/>
				<F
					kind='currency-select'
					value={values.currency}
					onChange={(value: string) =>
						handleChange('currency', value)
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
					<h4>Select Values:</h4>
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
			<F kind='country-select' />
			<F kind='language-select' />
			<F kind='timezone-select' />
		</div>
	),
};
