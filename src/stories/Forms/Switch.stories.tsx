import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	FormFieldFactory,
	F,
} from '../../components/FormField';
import type { FormFieldFactoryProps } from '../../components/FormField';

const meta: Meta<typeof FormFieldFactory> = {
	title: 'Forms/Switch (Forms)',
	component: FormFieldFactory,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'switch',
				'notification-switch',
				'privacy-switch',
				'theme-switch',
				'marketing-switch',
			],
			description:
				'Type of switch using extended form field kinds',
		},
		checked: {
			control: 'boolean',
			description: 'Switch state',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the switch',
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
		kind: 'switch',
	},
};

export const Checked: Story = {
	args: {
		kind: 'switch',
		checked: true,
	},
};

export const AllSwitchTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<F kind='switch' />
			<F kind='notification-switch' />
			<F kind='privacy-switch' />
			<F kind='theme-switch' />
			<F kind='marketing-switch' />
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
			<F kind='switch' checked={false} />
			<F kind='switch' checked={true} />
			<F kind='switch' disabled />
			<F kind='switch' checked disabled />
			<F
				kind='notification-switch'
				error='Notification settings required'
			/>
		</div>
	),
};

export const InteractiveSwitch: Story = {
	render: () => {
		const [values, setValues] = useState({
			notifications: false,
			privacy: true,
			theme: false,
			marketing: false,
		});

		const handleChange = (
			field: string,
			value: boolean
		) => {
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
					kind='notification-switch'
					checked={values.notifications}
					onChange={(value: boolean) =>
						handleChange('notifications', value)
					}
				/>
				<F
					kind='privacy-switch'
					checked={values.privacy}
					onChange={(value: boolean) =>
						handleChange('privacy', value)
					}
				/>
				<F
					kind='theme-switch'
					checked={values.theme}
					onChange={(value: boolean) =>
						handleChange('theme', value)
					}
				/>
				<F
					kind='marketing-switch'
					checked={values.marketing}
					onChange={(value: boolean) =>
						handleChange('marketing', value)
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
					<h4>Switch Values:</h4>
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
			<F kind='notification-switch' />
			<F kind='privacy-switch' />
			<F kind='theme-switch' />
		</div>
	),
};
