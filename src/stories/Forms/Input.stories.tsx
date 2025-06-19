import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Input (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'input',
				'email-input',
				'password-input',
				'search-input',
				'number-input',
				'tel-input',
				'url-input',
				'date-input',
				'time-input',
				'datetime-local-input',
				'username-input',
				'first-name-input',
				'last-name-input',
				'verification-code-input',
				'credit-card-input',
				'cvv-input',
				'zip-code-input',
				'address-input',
				'city-input',
				'state-input',
				'country-input',
				'company-input',
				'job-title-input',
				'website-input',
				'social-handle-input',
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof FormFieldFactory>;

export const Default: Story = {
	args: {
		kind: 'input',
	},
};

export const WithValue: Story = {
	args: {
		kind: 'input',
		value: 'Sample input text',
	},
};

export const WithPlaceholder: Story = {
	args: {
		kind: 'input',
		placeholder: 'Enter text here...',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'input',
		disabled: true,
		value: 'Disabled input',
	},
};

export const WithLabel: Story = {
	args: {
		kind: 'input',
		label: 'Full Name',
		placeholder: 'Enter your full name',
	},
};

export const EmailInput: Story = {
	args: {
		kind: 'email-input',
		label: 'Email Address',
		placeholder: 'Enter your email',
	},
};

export const PasswordInput: Story = {
	args: {
		kind: 'password-input',
		label: 'Password',
		placeholder: 'Enter your password',
	},
};

export const SearchInput: Story = {
	args: {
		kind: 'search-input',
		placeholder: 'Search...',
	},
};

export const NumberInput: Story = {
	args: {
		kind: 'number-input',
		label: 'Age',
		placeholder: 'Enter your age',
	},
};

export const AllInputTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				minWidth: '300px',
			}}
		>
			<F
				kind='input'
				label='Basic Input'
				placeholder='Enter text'
			/>
			<F
				kind='email-input'
				label='Email'
				placeholder='Enter your email'
			/>
			<F
				kind='password-input'
				label='Password'
				placeholder='Enter your password'
			/>
			<F kind='search-input' placeholder='Search...' />
			<F
				kind='number-input'
				label='Age'
				placeholder='Enter your age'
			/>
			<F
				kind='tel-input'
				label='Phone'
				placeholder='Enter phone number'
			/>
			<F
				kind='url-input'
				label='Website'
				placeholder='Enter URL'
			/>
			<F kind='date-input' label='Birth Date' />
			<F kind='time-input' label='Time' />
			<F kind='datetime-local-input' label='Date & Time' />
		</div>
	),
};

export const Interactive: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ minWidth: '300px' }}>
				<F
					kind='input'
					label='Interactive Input'
					placeholder='Type something...'
					value={value}
					onChange={(
						e: React.ChangeEvent<HTMLInputElement>
					) => setValue(e.target.value)}
				/>
				<p style={{ marginTop: '1rem', color: '#666' }}>
					Current value: {value || '(empty)'}
				</p>
			</div>
		);
	},
};

export const ValidationStates: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				minWidth: '300px',
			}}
		>
			<F
				kind='input'
				label='Valid Input'
				value='Valid text'
				className='valid'
			/>
			<F
				kind='input'
				label='Invalid Input'
				value='Invalid text'
				className='invalid'
			/>
			<F
				kind='input'
				label='Required Input'
				placeholder='This field is required'
				required
			/>
			<F
				kind='input'
				label='Disabled Input'
				value='Cannot edit this'
				disabled
			/>
		</div>
	),
};
