import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Textarea (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'textarea',
				'comment',
				'description',
				'message',
				'bio',
				'feedback',
			],
			description:
				'Type of textarea using extended form field kinds',
		},
		value: {
			control: 'text',
			description: 'Textarea value',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the textarea',
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
		kind: 'textarea',
	},
};

export const AllTextareaTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='textarea' />
			<F kind='comment' />
			<F kind='description' />
			<F kind='message' />
			<F kind='bio' />
			<F kind='feedback' />
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
			<F kind='textarea' />
			<F kind='textarea' disabled />
			<F kind='comment' error='Comment is required' />
		</div>
	),
};

export const InteractiveTextarea: Story = {
	render: () => {
		const [values, setValues] = useState({
			comment: '',
			description: '',
			message: '',
			bio: '',
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
					kind='comment'
					value={values.comment}
					onChange={(value: string) =>
						handleChange('comment', value)
					}
				/>
				<F
					kind='description'
					value={values.description}
					onChange={(value: string) =>
						handleChange('description', value)
					}
				/>
				<F
					kind='message'
					value={values.message}
					onChange={(value: string) =>
						handleChange('message', value)
					}
				/>
				<F
					kind='bio'
					value={values.bio}
					onChange={(value: string) =>
						handleChange('bio', value)
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
					<h4>Textarea Values:</h4>
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
			<F kind='comment' />
			<F kind='description' />
			<F kind='message' />
		</div>
	),
};
