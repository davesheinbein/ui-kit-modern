import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedInput,
	InputFactory,
	INPUT_CONFIGURATIONS,
	INPUT_GROUPS,
} from '../../components/Inputs';
import { reduxDecorator } from '../config/decorators';

const meta: Meta<typeof UnifiedInput> = {
	title: 'Inputs/Input',
	component: UnifiedInput,
	decorators: [reduxDecorator],
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A comprehensive input component system supporting text, email, password, search, and other input types with extensive customization options.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: Object.keys(INPUT_CONFIGURATIONS),
			description: 'The type of input to render',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size variant of the input',
		},
		style: {
			control: 'select',
			options: [
				'outlined',
				'filled',
				'underlined',
				'ghost',
			],
			description: 'Visual style of the input',
		},
		state: {
			control: 'select',
			options: [
				'default',
				'focus',
				'error',
				'success',
				'disabled',
			],
			description: 'State of the input',
		},
		variant: {
			control: 'select',
			options: [
				'text',
				'email',
				'password',
				'number',
				'search',
				'url',
				'tel',
			],
			description: 'HTML input type',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		label: {
			control: 'text',
			description: 'Label text',
		},
		helperText: {
			control: 'text',
			description: 'Helper text shown below input',
		},
		required: {
			control: 'boolean',
			description: 'Whether the input is required',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		clearable: {
			control: 'boolean',
			description:
				'Whether to show clear button when input has value',
		},
		showPasswordToggle: {
			control: 'boolean',
			description:
				'Whether to show password visibility toggle (password inputs only)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedInput>;

// ========================================
// Basic Input Examples
// ========================================

export const Default: Story = {
	args: {
		kind: 'text',
		placeholder: 'Enter text...',
		label: 'Text Input',
	},
};

export const Email: Story = {
	args: {
		kind: 'email',
		placeholder: 'Enter your email...',
		label: 'Email Address',
	},
};

export const Password: Story = {
	args: {
		kind: 'password',
		placeholder: 'Enter password...',
		label: 'Password',
		showPasswordToggle: true,
	},
};

export const Search: Story = {
	args: {
		kind: 'search',
		placeholder: 'Search...',
		clearable: true,
	},
};

export const Number: Story = {
	args: {
		kind: 'number',
		placeholder: 'Enter number...',
		label: 'Number Input',
	},
};

// ========================================
// Size Variants
// ========================================

export const Sizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput
				kind='text'
				size='small'
				placeholder='Small input'
				label='Small'
			/>
			<UnifiedInput
				kind='text'
				size='medium'
				placeholder='Medium input'
				label='Medium'
			/>
			<UnifiedInput
				kind='text'
				size='large'
				placeholder='Large input'
				label='Large'
			/>
		</div>
	),
};

// ========================================
// Style Variants
// ========================================

export const Styles: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput
				kind='text'
				style='outlined'
				placeholder='Outlined input'
				label='Outlined'
			/>
			<UnifiedInput
				kind='text'
				style='filled'
				placeholder='Filled input'
				label='Filled'
			/>
			<UnifiedInput
				kind='text'
				style='underlined'
				placeholder='Underlined input'
				label='Underlined'
			/>
			<UnifiedInput
				kind='text'
				style='ghost'
				placeholder='Ghost input'
				label='Ghost'
			/>
		</div>
	),
};

// ========================================
// State Variants
// ========================================

export const States: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput
				kind='text'
				state='default'
				placeholder='Default state'
				label='Default'
				helperText='This is helper text'
			/>
			<UnifiedInput
				kind='text'
				state='error'
				placeholder='Error state'
				label='Error'
				errorText='This field has an error'
			/>
			<UnifiedInput
				kind='text'
				state='success'
				placeholder='Success state'
				label='Success'
				successText='This field is valid'
			/>
			<UnifiedInput
				kind='text'
				state='disabled'
				disabled
				placeholder='Disabled state'
				label='Disabled'
				value='Disabled input'
			/>
		</div>
	),
};

// ========================================
// Specialized Input Types
// ========================================

export const SpecializedInputs: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput kind='username' label='Username' />
			<UnifiedInput
				kind='login-email'
				label='Login Email'
			/>
			<UnifiedInput
				kind='confirmation-password'
				label='Confirm Password'
			/>
			<UnifiedInput
				kind='search-filter'
				placeholder='Filter results...'
			/>
		</div>
	),
};

// ========================================
// Factory Examples
// ========================================

export const FactoryExamples: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Using InputFactory</h3>
			{InputFactory.text({
				label: 'Factory Text Input',
				placeholder: 'Created with InputFactory.text()',
			})}
			{InputFactory.email({
				label: 'Factory Email Input',
				placeholder: 'Created with InputFactory.email()',
			})}
			{InputFactory.password({
				label: 'Factory Password Input',
				placeholder: 'Created with InputFactory.password()',
			})}
			{InputFactory.search({
				placeholder: 'Created with InputFactory.search()',
			})}
		</div>
	),
};

// ========================================
// Input Groups Showcase
// ========================================

export const InputGroups: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			{Object.entries(INPUT_GROUPS).map(
				([groupName, inputTypes]) => (
					<div key={groupName}>
						<h3
							style={{
								marginBottom: '1rem',
								textTransform: 'capitalize',
							}}
						>
							{groupName} Inputs
						</h3>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: '1rem',
							}}
						>
							{inputTypes.map((inputType) => (
								<UnifiedInput
									key={inputType}
									kind={inputType}
									label={`${inputType.charAt(0).toUpperCase() + inputType.slice(1)} Input`}
									placeholder={`Enter ${inputType}...`}
								/>
							))}
						</div>
					</div>
				)
			)}
		</div>
	),
};

// ========================================
// Interactive Examples
// ========================================

export const WithIcons: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput
				kind='search'
				icon='🔍'
				placeholder='Search with icon...'
				clearable
			/>
			<UnifiedInput
				kind='email'
				icon='📧'
				placeholder='Email with icon...'
				label='Email Address'
			/>
			<UnifiedInput
				kind='url'
				icon='🌐'
				placeholder='Website URL...'
				label='Website'
			/>
		</div>
	),
};

export const WithPrefixSuffix: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<UnifiedInput
				kind='url'
				prefix='https://'
				placeholder='example.com'
				label='Website URL'
			/>
			<UnifiedInput
				kind='text'
				suffix='.com'
				placeholder='domain'
				label='Domain Name'
			/>
			<UnifiedInput
				kind='number'
				prefix='$'
				suffix='USD'
				placeholder='0.00'
				label='Price'
			/>
		</div>
	),
};

export const FormExample: Story = {
	render: () => (
		<form
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				maxWidth: '400px',
			}}
		>
			<h3>Registration Form</h3>
			{InputFactory.text({
				label: 'Full Name',
				placeholder: 'Enter your full name',
				required: true,
			})}
			{InputFactory.loginEmail({
				label: 'Email Address',
				required: true,
			})}
			{InputFactory.username({
				label: 'Username',
				required: true,
				helperText: 'Must be 3-20 characters long',
			})}
			{InputFactory.password({
				label: 'Password',
				required: true,
				helperText: 'Must be at least 8 characters',
			})}
			{InputFactory.confirmationPassword({
				required: true,
			})}
			<button
				type='submit'
				style={{
					padding: '12px',
					background: '#007bff',
					color: 'white',
					border: 'none',
					borderRadius: '4px',
					cursor: 'pointer',
				}}
			>
				Create Account
			</button>
		</form>
	),
};
