import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	AdminFactory,
	AdminPresets,
} from '../../components/Admin';
import { reduxDecorator } from '../config/decorators';

const meta: Meta<typeof AdminFactory> = {
	title: 'Admin/Admin',
	component: AdminFactory,
	decorators: [reduxDecorator],
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified admin component system for debugging and development tools. Built using the DRY factory pattern for maximum flexibility and reusability.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'session-debugger',
				'performance-monitor',
				'error-logger',
				'debug-panel',
				'custom',
			],
			description: 'The type of admin component to render',
		},
		enabled: {
			control: 'boolean',
			description: 'Whether the admin component is visible',
		},
		position: {
			control: 'select',
			options: [
				'top-left',
				'top-right',
				'bottom-left',
				'bottom-right',
				'center',
			],
			description:
				'Position of the admin component on screen',
		},
		zIndex: {
			control: 'number',
			description: 'Z-index for stacking order',
		},
	},
};

export default meta;
type Story = StoryObj<typeof AdminFactory>;

export const SessionDebugger: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-left',
	},
};

export const SessionDebuggerDisabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
	},
};

export const SessionDebuggerTopRight: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-right',
	},
};

export const SessionDebuggerWithMockSession: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-left',
		session: {
			user: {
				id: '12345',
				email: 'test@example.com',
			},
		},
		status: 'authenticated',
	},
};

export const PerformanceMonitor: Story = {
	args: {
		kind: 'performance-monitor',
		enabled: true,
		position: 'top-right',
	},
};

export const ErrorLogger: Story = {
	args: {
		kind: 'error-logger',
		enabled: true,
		position: 'bottom-left',
	},
};

export const DebugPanel: Story = {
	args: {
		kind: 'debug-panel',
		enabled: true,
		position: 'center',
	},
};

export const AllPositions: Story = {
	render: () => (
		<>
			<AdminFactory
				kind='session-debugger'
				enabled={true}
				position='top-left'
			/>
			<AdminFactory
				kind='performance-monitor'
				enabled={true}
				position='top-right'
			/>
			<AdminFactory
				kind='error-logger'
				enabled={true}
				position='bottom-left'
			/>
			<AdminFactory
				kind='debug-panel'
				enabled={true}
				position='center'
			/>
		</>
	),
};

export const CustomContent: Story = {
	args: {
		kind: 'custom',
		enabled: true,
		position: 'center',
	},
	render: (args) => (
		<AdminFactory {...args}>
			<div>
				<h3
					style={{ margin: '0 0 10px 0', color: '#4ade80' }}
				>
					Custom Admin Tool
				</h3>
				<p style={{ margin: '0 0 8px 0' }}>
					This is a custom admin component.
				</p>
				<button
					style={{ padding: '4px 8px', fontSize: '10px' }}
				>
					Action Button
				</button>
			</div>
		</AdminFactory>
	),
};

// DRY System Examples using factory patterns
export const UsingPresets: Story = {
	render: () => (
		<div>
			{/* Using AdminPresets for quick setup */}
			{AdminPresets.SESSION_DEBUGGER()}
		</div>
	),
};

export const Disabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
	},
};
