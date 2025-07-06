import React from 'react';
import { Admin } from '../../components/Admin';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Admin> = {
	title: 'Admin/Admin',
	component: Admin,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Admin component system for debugging and development tools. DRY admin system.',
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
			table: {
				type: { summary: 'AdminKind' },
				defaultValue: { summary: 'custom' },
			},
		},
		enabled: {
			control: 'boolean',
			description: 'Whether the admin component is visible',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
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
			table: {
				type: { summary: 'AdminPosition' },
				defaultValue: { summary: 'top-left' },
			},
		},
		theme: {
			control: 'select',
			options: ['light', 'dark', 'auto'],
			description: 'Visual theme of the admin component',
			table: {
				type: { summary: 'AdminTheme' },
				defaultValue: { summary: 'dark' },
			},
		},
		size: {
			control: 'select',
			options: ['compact', 'default', 'expanded'],
			description: 'Size variant of the admin component',
			table: {
				type: { summary: 'AdminSize' },
				defaultValue: { summary: 'default' },
			},
		},
		opacity: {
			control: 'select',
			options: ['translucent', 'opaque'],
			description:
				'Background opacity of the admin component',
			table: {
				type: { summary: 'AdminOpacity' },
				defaultValue: { summary: 'translucent' },
			},
		},
		title: {
			control: 'text',
			description:
				'Title to display in the header (if showHeader is true)',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'undefined' },
			},
		},
		showHeader: {
			control: 'boolean',
			description: 'Whether to show the component header',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		closable: {
			control: 'boolean',
			description:
				'Whether to show a close button in the header',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		zIndex: {
			control: 'number',
			description: 'Z-index for stacking order',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '9999' },
			},
		},
		maxHeight: {
			control: 'text',
			description:
				'Maximum height (number in px or string with units)',
			table: {
				type: { summary: 'number | string' },
				defaultValue: { summary: 'undefined' },
			},
		},
		maxWidth: {
			control: 'text',
			description:
				'Maximum width (number in px or string with units)',
			table: {
				type: { summary: 'number | string' },
				defaultValue: { summary: 'undefined' },
			},
		},
		className: {
			control: 'text',
			description: 'Additional CSS class names',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'undefined' },
			},
		},
		data: {
			control: 'object',
			description:
				'Data object to display in the admin component',
			table: {
				type: { summary: 'AdminData' },
				defaultValue: { summary: '{}' },
			},
		},
		fields: {
			control: 'object',
			description: 'Custom field configuration for display',
			table: {
				type: { summary: 'AdminFieldConfig[]' },
				defaultValue: {
					summary: 'Default fields per kind',
				},
			},
		},
		children: {
			control: 'text',
			description:
				'Custom content to render (overrides default renderers)',
			table: {
				type: { summary: 'ReactNode' },
				defaultValue: { summary: 'undefined' },
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Admin>;

// Alphabetized stories
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
			<Wrapper
				p={16}
				radius={10}
				bg='#f0fdf4'
				shadow='0 2px 8px rgba(0,0,0,0.04)'
			>
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

export const DebugPanel: Story = {
	args: {
		kind: 'debug-panel',
		enabled: true,
		position: 'center',
		data: {
			nodeEnv: 'production',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
			componentsRendered: 42,
			activeListeners: 7,
		},
	},
};

export const Disabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
	},
};

export const ErrorLogger: Story = {
	args: {
		kind: 'error-logger',
		enabled: true,
		position: 'bottom-left',
		data: {
			errors: [
				{ time: '12:34:56', message: 'Network timeout' },
				{
					time: '12:35:01',
					message: 'Invalid API response',
				},
			],
		},
	},
};

export const PerformanceMonitor: Story = {
	name: 'Performance Monitor',
	args: {
		kind: 'performance-monitor',
		enabled: true,
		position: 'top-right',
		componentId: 'stable-perf-monitor',
		data: {
			memory: 256,
			fps: 59,
			loadTime: 987,
		},
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

export const SessionDebugger: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-left',
		data: {
			status: 'authenticated',
			userId: '12345',
			email: 'test@example.com',
			sessionExists: 'Yes',
			timestamp: '12:34:56',
		},
	},
};

export const SessionDebuggerDisabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
		data: {
			status: 'guest',
			userId: 'N/A',
			email: 'N/A',
			sessionExists: 'No',
			timestamp: '12:00:00',
		},
	},
};

export const SessionDebuggerTopRight: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-right',
		data: {
			status: 'authenticated',
			userId: '67890',
			email: 'another@example.com',
			sessionExists: 'Yes',
			timestamp: '13:45:00',
		},
	},
};

export const SessionDebuggerWithMockSession: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-left',
		data: {
			status: 'authenticated',
			userId: '12345',
			email: 'test@example.com',
			sessionExists: 'Yes',
			timestamp: '12:34:56',
		},
	},
};
