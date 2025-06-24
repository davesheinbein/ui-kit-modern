import React from 'react';
import { Wrapper } from '../../components/Wrappers';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Button } from '../../components/Button';
import { Admin } from '../../components/Admin';

// Redux Provider decorator for all Admin stories
const withReduxProvider = (Story: React.ComponentType) => (
	<Provider store={store}>
		<Story />
	</Provider>
);

const meta: Meta<typeof Admin> = {
	title: 'Admin/Admin',
	component: Admin,
	decorators: [withReduxProvider],
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Admin component system for debugging and development tools. Unified DRY admin system.',
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
type Story = StoryObj<typeof Admin>;

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
	name: 'Performance Monitor',
	args: {
		kind: 'performance-monitor',
		enabled: true,
		position: 'top-right',
		componentId: 'stable-perf-monitor', // Fixed componentId to prevent re-initialization
	},
	parameters: {
		docs: {
			description: {
				story:
					'Performance monitor with a stable componentId to ensure predictable behavior.',
			},
		},
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
			<Admin
				kind='session-debugger'
				enabled={true}
				position='top-left'
			/>
			<Admin
				kind='performance-monitor'
				enabled={true}
				position='top-right'
			/>
			<Admin
				kind='error-logger'
				enabled={true}
				position='bottom-left'
			/>
			<Admin
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
		<Admin {...args}>
			<Wrapper>
				<h3
					style={{ margin: '0 0 10px 0', color: '#4ade80' }}
				>
					Custom Admin Tool
				</h3>
				<p style={{ margin: '0 0 8px 0' }}>
					This is a custom admin component.
				</p>
				<Button
					kind='secondary'
					style={{ padding: '4px 8px', fontSize: '10px' }}
				>
					Action Button
				</Button>
			</Wrapper>
		</Admin>
	),
};

export const Disabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
	},
};
