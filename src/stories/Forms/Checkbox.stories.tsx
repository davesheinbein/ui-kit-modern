import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxFactory } from '../../components/Checkbox';

const meta: Meta<typeof CheckboxFactory> = {
	title: 'Forms/Checkbox (DRY System)',
	component: CheckboxFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified checkbox system supporting multiple variants: checkbox, toggle, switch, and dark mode toggle. Built with the DRY factory pattern for maximum reusability.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'checkbox',
				'toggle',
				'switch',
				'dark-mode-toggle',
			],
			description: 'The type of checkbox to render',
		},
		label: {
			control: 'text',
			description: 'Label text for the checkbox',
		},
		labelPosition: {
			control: 'select',
			options: ['left', 'right', 'none'],
			description:
				'Position of the label relative to checkbox',
		},
		checked: {
			control: 'boolean',
			description: 'Whether the checkbox is checked',
		},
		defaultChecked: {
			control: 'boolean',
			description: 'Default checked state',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size of the checkbox',
		},
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'danger'],
			description: 'Color variant of the checkbox',
		},
		animated: {
			control: 'boolean',
			description:
				'Whether to animate checkbox transitions',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the checkbox is disabled',
		},
		readOnly: {
			control: 'boolean',
			description: 'Whether the checkbox is readonly',
		},
		required: {
			control: 'boolean',
			description: 'Whether the checkbox is required',
		},
		fullWidth: {
			control: 'boolean',
			description: 'Whether checkbox takes full width',
		},
		name: {
			control: 'text',
			description: 'Name attribute for form submission',
		},
		value: {
			control: 'text',
			description: 'Value attribute for form submission',
		},
		id: {
			control: 'text',
			description: 'Unique identifier for the checkbox',
		},
		helperText: {
			control: 'text',
			description: 'Helper text displayed below checkbox',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		darkModeContext: {
			control: 'boolean',
			description: 'Dark mode context for dark-mode-toggle',
			if: { arg: 'kind', eq: 'dark-mode-toggle' },
		},
		onChange: {
			action: 'checkboxChanged',
			description:
				'Function called when checkbox state changes',
		},
		onFocus: {
			action: 'checkboxFocused',
			description:
				'Function called when checkbox is focused',
		},
		onBlur: {
			action: 'checkboxBlurred',
			description:
				'Function called when checkbox loses focus',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		style: {
			control: 'object',
			description: 'Inline styles for the checkbox',
		},
		configuration: {
			control: 'object',
			description: 'Override configuration object',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'checkbox',
		label: 'Default Checkbox',
		checked: false,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Basic Checkboxes</h3>
			<CheckboxFactory
				kind='checkbox'
				label='Default checkbox'
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Checked checkbox'
				checked
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Disabled checkbox'
				disabled
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Disabled checked'
				disabled
				checked
			/>

			<h3>Color Variants</h3>
			<CheckboxFactory
				kind='checkbox'
				label='Success'
				variant='success'
				checked
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Warning'
				variant='warning'
				checked
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Danger'
				variant='danger'
				checked
			/>

			<h3>Sizes</h3>
			<CheckboxFactory
				kind='checkbox'
				label='Small'
				size='small'
				checked
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Medium'
				size='medium'
				checked
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Large'
				size='large'
				checked
			/>
		</div>
	),
};

export const ToggleVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Toggle Checkboxes</h3>
			<CheckboxFactory kind='toggle' label='Toggle off' />
			<CheckboxFactory
				kind='toggle'
				label='Toggle on'
				checked
			/>
			<CheckboxFactory
				kind='toggle'
				label='Toggle disabled'
				disabled
			/>

			<h3>Toggle Colors</h3>
			<CheckboxFactory
				kind='toggle'
				label='Success toggle'
				variant='success'
				checked
			/>
			<CheckboxFactory
				kind='toggle'
				label='Warning toggle'
				variant='warning'
				checked
			/>
			<CheckboxFactory
				kind='toggle'
				label='Danger toggle'
				variant='danger'
				checked
			/>

			<h3>Toggle Sizes</h3>
			<CheckboxFactory
				kind='toggle'
				label='Small toggle'
				size='small'
				checked
			/>
			<CheckboxFactory
				kind='toggle'
				label='Medium toggle'
				size='medium'
				checked
			/>
			<CheckboxFactory
				kind='toggle'
				label='Large toggle'
				size='large'
				checked
			/>
		</div>
	),
};

export const SwitchVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Switch Checkboxes</h3>
			<CheckboxFactory kind='switch' label='Switch off' />
			<CheckboxFactory
				kind='switch'
				label='Switch on'
				checked
			/>
			<CheckboxFactory
				kind='switch'
				label='Switch disabled'
				disabled
			/>

			<h3>Switch Colors</h3>
			<CheckboxFactory
				kind='switch'
				label='Success switch'
				variant='success'
				checked
			/>
			<CheckboxFactory
				kind='switch'
				label='Warning switch'
				variant='warning'
				checked
			/>
			<CheckboxFactory
				kind='switch'
				label='Danger switch'
				variant='danger'
				checked
			/>

			<h3>Switch Sizes</h3>
			<CheckboxFactory
				kind='switch'
				label='Small switch'
				size='small'
				checked
			/>
			<CheckboxFactory
				kind='switch'
				label='Medium switch'
				size='medium'
				checked
			/>
			<CheckboxFactory
				kind='switch'
				label='Large switch'
				size='large'
				checked
			/>
		</div>
	),
};

export const ErrorAndHelperText: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<CheckboxFactory
				kind='checkbox'
				label='Checkbox with error'
				error='This field is required'
			/>
			<CheckboxFactory
				kind='checkbox'
				label='Checkbox with helper text'
				helperText='This is some helpful information'
			/>
			<CheckboxFactory
				kind='toggle'
				label='Toggle with error'
				error='Please enable this option'
			/>
			<CheckboxFactory
				kind='switch'
				label='Switch with helper text'
				helperText='This controls a system setting'
			/>
		</div>
	),
};

export const FormExample: Story = {
	render: () => (
		<div
			style={{
				maxWidth: '400px',
				padding: '2rem',
				border: '1px solid #e5e7eb',
				borderRadius: '8px',
			}}
		>
			<h3>Account Settings</h3>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<CheckboxFactory
					kind='checkbox'
					label='I agree to the Terms and Conditions'
					helperText='Required to create an account'
				/>
				<CheckboxFactory
					kind='checkbox'
					label='Subscribe to newsletter'
					helperText='Get updates about new features'
				/>
				<CheckboxFactory
					kind='toggle'
					label='Enable notifications'
					checked
				/>
				<CheckboxFactory
					kind='switch'
					label='Two-factor authentication'
					variant='success'
					helperText='Recommended for account security'
				/>
			</div>
		</div>
	),
};
