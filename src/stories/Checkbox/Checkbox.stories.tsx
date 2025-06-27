import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/Checkbox';
import { Wrapper } from '../../components/Wrappers';
import { ThemeProvider } from '../../components/Providers';
import { commonDecorators } from '../config/decorators';
import { StatefulCheckbox } from '../utils';

const meta: Meta<typeof Checkbox> = {
	title: 'Checkbox/Checkbox',
	component: Checkbox,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY checkbox component. Single component handles ALL checkbox types through the "kind" prop. ' +
					'Supports checkbox, toggle, and dark mode toggle variants with configuration-driven approach. ' +
					'Dark mode toggle integrates with ThemeProvider for seamless theme switching.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: ['checkbox', 'toggle', 'dark-mode-toggle'],
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
	render: (args) => <StatefulCheckbox {...args} />,
};

export const AllVariants: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Checkboxes</h3>
			<StatefulCheckbox kind='checkbox' label='Default' />
			<StatefulCheckbox
				kind='checkbox'
				label='Checked'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Disabled'
				disabled
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Disabled checked'
				disabled
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Success'
				variant='success'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Warning'
				variant='warning'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Danger'
				variant='danger'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Small'
				size='small'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Medium'
				size='medium'
				checked
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Large'
				size='large'
				checked
			/>
			<h3>Toggles</h3>
			<StatefulCheckbox kind='toggle' label='Toggle off' />
			<StatefulCheckbox
				kind='toggle'
				label='Toggle on'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Disabled toggle'
				disabled
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Success toggle'
				variant='success'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Warning toggle'
				variant='warning'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Danger toggle'
				variant='danger'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Small toggle'
				size='small'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Medium toggle'
				size='medium'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Large toggle'
				size='large'
				checked
			/>
			<h3>Dark Mode Toggle</h3>
			<ThemeProvider>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.75rem',
						marginBottom: '1.25rem', // add spacing below
					}}
				>
					<StatefulCheckbox
						kind='dark-mode-toggle'
						darkModeContext={true}
						size='large'
					/>
					<span>Dark Mode (default)</span>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.75rem',
						marginBottom: '1.25rem', // add spacing below
					}}
				>
					<StatefulCheckbox
						kind='flip-switch'
						darkModeContext={true}
						size='large'
					/>
					<span>Dark Mode (FlipSwitch)</span>
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '0.75rem',
						marginBottom: '1.25rem', // add spacing below
					}}
				>
					<StatefulCheckbox
						kind='Nebula'
						size='large'
					/>
					<span>Dark Mode (Nebula)</span>
				</div>
			</ThemeProvider>
		</Wrapper>
	),
};

export const ToggleVariants: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<StatefulCheckbox kind='toggle' label='Toggle off' />
			<StatefulCheckbox
				kind='toggle'
				label='Toggle on'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Disabled toggle'
				disabled
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Success toggle'
				variant='success'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Warning toggle'
				variant='warning'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Danger toggle'
				variant='danger'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Small toggle'
				size='small'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Medium toggle'
				size='medium'
				checked
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Large toggle'
				size='large'
				checked
			/>
		</Wrapper>
	),
};

export const ErrorAndHelperText: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<StatefulCheckbox
				kind='checkbox'
				label='Checkbox with error'
				error='This field is required'
			/>
			<StatefulCheckbox
				kind='checkbox'
				label='Checkbox with helper text'
				helperText='This is some helpful information'
			/>
			<StatefulCheckbox
				kind='toggle'
				label='Toggle with error'
				error='Please enable this option'
			/>
		</Wrapper>
	),
};

export const FormExample: Story = {
	render: () => (
		<Wrapper
			style={{
				maxWidth: '400px',
				padding: '2rem',
				border: '1px solid #e5e7eb',
				borderRadius: '8px',
			}}
		>
			<h3>Account Settings</h3>
			<Wrapper
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
				}}
			>
				<StatefulCheckbox
					kind='checkbox'
					label='I agree to the Terms and Conditions'
					helperText='Required to create an account'
				/>
				<StatefulCheckbox
					kind='checkbox'
					label='Subscribe to newsletter'
					helperText='Get updates about new features'
				/>
				<StatefulCheckbox
					kind='toggle'
					label='Enable notifications'
					checked
				/>
			</Wrapper>
		</Wrapper>
	),
};

export const DarkModeToggle: Story = {
	args: {
		kind: 'dark-mode-toggle',
		darkModeContext: true,
	},
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	render: (args) => <StatefulCheckbox {...args} />,
};
