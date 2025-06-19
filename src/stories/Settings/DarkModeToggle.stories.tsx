import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxFactory } from '../../components/Checkbox';
import { ThemePaletteProvider } from '../../components/Providers';

const meta: Meta<typeof CheckboxFactory> = {
	title: 'Settings/Dark Mode Toggle',
	component: CheckboxFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A dark mode toggle button that switches between light and dark mode themes. Built using the unified checkbox system with ThemePaletteProvider context integration.',
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemePaletteProvider>
				<Story />
			</ThemePaletteProvider>
		),
	],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Size of the dark mode toggle',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the toggle is disabled',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'dark-mode-toggle',
		darkModeContext: true,
	},
};

export const AllSizes: Story = {
	render: () => (
		<ThemePaletteProvider>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '2rem',
				}}
			>
				<div style={{ textAlign: 'center' }}>
					<p>Small</p>
					<CheckboxFactory
						kind='dark-mode-toggle'
						size='small'
						darkModeContext={true}
					/>
				</div>
				<div style={{ textAlign: 'center' }}>
					<p>Medium</p>
					<CheckboxFactory
						kind='dark-mode-toggle'
						size='medium'
						darkModeContext={true}
					/>
				</div>
				<div style={{ textAlign: 'center' }}>
					<p>Large</p>
					<CheckboxFactory
						kind='dark-mode-toggle'
						size='large'
						darkModeContext={true}
					/>
				</div>
			</div>
		</ThemePaletteProvider>
	),
};

export const InContainer: Story = {
	render: () => (
		<ThemePaletteProvider>
			<div
				style={{
					padding: '2rem',
					background: '#f5f5f5',
					borderRadius: '8px',
				}}
			>
				<h3>Theme Settings</h3>
				<p>Toggle between light and dark mode:</p>
				<CheckboxFactory
					kind='dark-mode-toggle'
					darkModeContext={true}
				/>
			</div>
		</ThemePaletteProvider>
	),
};

export const SettingsPanel: Story = {
	render: () => (
		<ThemePaletteProvider>
			<div
				style={{
					maxWidth: '400px',
					padding: '2rem',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					backgroundColor: 'white',
				}}
			>
				<h3>User Preferences</h3>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
					}}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div>
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
						</div>
						<CheckboxFactory
							kind='dark-mode-toggle'
							darkModeContext={true}
						/>
					</div>
					<hr
						style={{
							margin: 0,
							border: 'none',
							borderTop: '1px solid #e5e7eb',
						}}
					/>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div>
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
						</div>
						<CheckboxFactory
							kind='switch'
							size='medium'
							checked
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div>
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
						</div>
						<CheckboxFactory
							kind='toggle'
							variant='success'
							checked
						/>
					</div>
				</div>
			</div>
		</ThemePaletteProvider>
	),
};
