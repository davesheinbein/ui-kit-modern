import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/Checkbox';
import { Wrapper } from '../../components/Wrappers';
import { ThemePaletteProvider } from '../../components/Providers';

const meta: Meta<typeof Checkbox> = {
	title: 'Checkbox/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY checkbox component. Single component handles ALL checkbox types through the "kind" prop. ' +
					'Supports checkbox, toggle, switch, and dark mode toggle variants with configuration-driven approach. ' +
					'Dark mode toggle integrates with ThemePaletteProvider for seamless theme switching.',
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
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Basic Checkboxes</h3>
			<Checkbox kind='checkbox' label='Default checkbox' />
			<Checkbox
				kind='checkbox'
				label='Checked checkbox'
				checked
			/>
			<Checkbox
				kind='checkbox'
				label='Disabled checkbox'
				disabled
			/>
			<Checkbox
				kind='checkbox'
				label='Disabled checked'
				disabled
				checked
			/>

			<h3>Color Variants</h3>
			<Checkbox
				kind='checkbox'
				label='Success'
				variant='success'
				checked
			/>
			<Checkbox
				kind='checkbox'
				label='Warning'
				variant='warning'
				checked
			/>
			<Checkbox
				kind='checkbox'
				label='Danger'
				variant='danger'
				checked
			/>

			<h3>Sizes</h3>
			<Checkbox
				kind='checkbox'
				label='Small'
				size='small'
				checked
			/>
			<Checkbox
				kind='checkbox'
				label='Medium'
				size='medium'
				checked
			/>
			<Checkbox
				kind='checkbox'
				label='Large'
				size='large'
				checked
			/>
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
			<h3>Toggle Checkboxes</h3>
			<Checkbox kind='toggle' label='Toggle off' />
			<Checkbox kind='toggle' label='Toggle on' checked />
			<Checkbox
				kind='toggle'
				label='Toggle disabled'
				disabled
			/>

			<h3>Toggle Colors</h3>
			<Checkbox
				kind='toggle'
				label='Success toggle'
				variant='success'
				checked
			/>
			<Checkbox
				kind='toggle'
				label='Warning toggle'
				variant='warning'
				checked
			/>
			<Checkbox
				kind='toggle'
				label='Danger toggle'
				variant='danger'
				checked
			/>

			<h3>Toggle Sizes</h3>
			<Checkbox
				kind='toggle'
				label='Small toggle'
				size='small'
				checked
			/>
			<Checkbox
				kind='toggle'
				label='Medium toggle'
				size='medium'
				checked
			/>
			<Checkbox
				kind='toggle'
				label='Large toggle'
				size='large'
				checked
			/>
		</Wrapper>
	),
};

export const SwitchVariants: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h3>Switch Checkboxes</h3>
			<Checkbox kind='switch' label='Switch off' />
			<Checkbox kind='switch' label='Switch on' checked />
			<Checkbox
				kind='switch'
				label='Switch disabled'
				disabled
			/>

			<h3>Switch Colors</h3>
			<Checkbox
				kind='switch'
				label='Success switch'
				variant='success'
				checked
			/>
			<Checkbox
				kind='switch'
				label='Warning switch'
				variant='warning'
				checked
			/>
			<Checkbox
				kind='switch'
				label='Danger switch'
				variant='danger'
				checked
			/>

			<h3>Switch Sizes</h3>
			<Checkbox
				kind='switch'
				label='Small switch'
				size='small'
				checked
			/>
			<Checkbox
				kind='switch'
				label='Medium switch'
				size='medium'
				checked
			/>
			<Checkbox
				kind='switch'
				label='Large switch'
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
			<Checkbox
				kind='checkbox'
				label='Checkbox with error'
				error='This field is required'
			/>
			<Checkbox
				kind='checkbox'
				label='Checkbox with helper text'
				helperText='This is some helpful information'
			/>
			<Checkbox
				kind='toggle'
				label='Toggle with error'
				error='Please enable this option'
			/>
			<Checkbox
				kind='switch'
				label='Switch with helper text'
				helperText='This controls a system setting'
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
				<Checkbox
					kind='checkbox'
					label='I agree to the Terms and Conditions'
					helperText='Required to create an account'
				/>
				<Checkbox
					kind='checkbox'
					label='Subscribe to newsletter'
					helperText='Get updates about new features'
				/>
				<Checkbox
					kind='toggle'
					label='Enable notifications'
					checked
				/>
				<Checkbox
					kind='switch'
					label='Two-factor authentication'
					variant='success'
					helperText='Recommended for account security'
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
			<ThemePaletteProvider>
				<Story />
			</ThemePaletteProvider>
		),
	],
};

export const DarkModeToggleSizes: Story = {
	render: () => (
		<ThemePaletteProvider>
			<Wrapper
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '2rem',
				}}
			>
				<Wrapper style={{ textAlign: 'center' }}>
					<p>Small</p>
					<Checkbox
						kind='dark-mode-toggle'
						size='small'
						darkModeContext={true}
					/>
				</Wrapper>
				<Wrapper style={{ textAlign: 'center' }}>
					<p>Medium</p>
					<Checkbox
						kind='dark-mode-toggle'
						size='medium'
						darkModeContext={true}
					/>
				</Wrapper>
				<Wrapper style={{ textAlign: 'center' }}>
					<p>Large</p>
					<Checkbox
						kind='dark-mode-toggle'
						size='large'
						darkModeContext={true}
					/>
				</Wrapper>
			</Wrapper>
		</ThemePaletteProvider>
	),
};

export const DarkModeToggleInContainer: Story = {
	render: () => (
		<ThemePaletteProvider>
			<Wrapper
				style={{
					padding: '2rem',
					background: '#f5f5f5',
					borderRadius: '8px',
				}}
			>
				<h3>Theme Settings</h3>
				<p>Toggle between light and dark mode:</p>
				<Checkbox
					kind='dark-mode-toggle'
					darkModeContext={true}
				/>
			</Wrapper>
		</ThemePaletteProvider>
	),
};

export const CheckboxSettingsPanel: Story = {
	render: () => (
		<ThemePaletteProvider>
			<Wrapper
				style={{
					maxWidth: '400px',
					padding: '2rem',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					backgroundColor: 'white',
				}}
			>
				<h3>User Preferences</h3>
				<Wrapper
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
					}}
				>
					<Wrapper
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Wrapper>
							<strong>Dark Mode</strong>
							<p
								style={{
									margin: '4px 0 0 0',
									fontSize: '14px',
									color: '#6b7280',
								}}
							>
								Switch between light and dark themes
							</p>
						</Wrapper>
						<Checkbox
							kind='dark-mode-toggle'
							darkModeContext={true}
						/>
					</Wrapper>
					<hr
						style={{
							margin: 0,
							border: 'none',
							borderTop: '1px solid #e5e7eb',
						}}
					/>
					<Wrapper
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Wrapper>
							<strong>Notifications</strong>
							<p
								style={{
									margin: '4px 0 0 0',
									fontSize: '14px',
									color: '#6b7280',
								}}
							>
								Receive updates and alerts
							</p>
						</Wrapper>
						<Checkbox kind='switch' size='medium' checked />
					</Wrapper>
					<Wrapper
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Wrapper>
							<strong>Auto-save</strong>
							<p
								style={{
									margin: '4px 0 0 0',
									fontSize: '14px',
									color: '#6b7280',
								}}
							>
								Automatically save your progress
							</p>
						</Wrapper>
						<Checkbox
							kind='toggle'
							variant='success'
							checked
						/>
					</Wrapper>
				</Wrapper>
			</Wrapper>
		</ThemePaletteProvider>
	),
};

export const AllCheckboxTypes: Story = {
	render: () => (
		<ThemePaletteProvider>
			<Wrapper
				style={{
					display: 'grid',
					gap: '2rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					padding: '1rem',
				}}
			>
				<Wrapper>
					<h4 style={{ marginBottom: '1rem' }}>
						Standard Checkbox
					</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}
					>
						<Checkbox
							kind='checkbox'
							label='Basic checkbox'
							checked
						/>
						<Checkbox
							kind='checkbox'
							label='With error'
							error='This field is required'
						/>
						<Checkbox
							kind='checkbox'
							label='Success variant'
							variant='success'
							checked
						/>
					</Wrapper>
				</Wrapper>

				<Wrapper>
					<h4 style={{ marginBottom: '1rem' }}>
						Toggle Switch
					</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}
					>
						<Checkbox
							kind='toggle'
							label='Toggle control'
							checked
						/>
						<Checkbox
							kind='toggle'
							label='Warning toggle'
							variant='warning'
							checked
						/>
						<Checkbox
							kind='toggle'
							label='Large toggle'
							size='large'
							checked
						/>
					</Wrapper>
				</Wrapper>

				<Wrapper>
					<h4 style={{ marginBottom: '1rem' }}>Switch</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}
					>
						<Checkbox
							kind='switch'
							label='Switch control'
							checked
						/>
						<Checkbox
							kind='switch'
							label='Success switch'
							variant='success'
							checked
						/>
						<Checkbox
							kind='switch'
							label='Small switch'
							size='small'
							checked
						/>
					</Wrapper>
				</Wrapper>

				<Wrapper>
					<h4 style={{ marginBottom: '1rem' }}>
						Dark Mode Toggle
					</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5rem',
						}}
					>
						<Checkbox
							kind='dark-mode-toggle'
							darkModeContext={true}
						/>
						<Checkbox
							kind='dark-mode-toggle'
							size='large'
							darkModeContext={true}
						/>
						<Wrapper
							style={{
								fontSize: '0.9rem',
								color: '#666',
								marginTop: '0.5rem',
							}}
						>
							Integrated with ThemePaletteProvider
						</Wrapper>
					</Wrapper>
				</Wrapper>
			</Wrapper>
		</ThemePaletteProvider>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Comprehensive showcase of all checkbox types supported by the checkbox system.',
			},
		},
	},
};
