import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AdminFactory } from '../../components/Admin';

const meta: Meta<typeof AdminFactory> = {
	title: 'Admin/SessionDebugger (DRY System)',
	component: AdminFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A debugging component that shows session information like client time and other debug data. Built using the unified Admin DRY system.',
			},
		},
	},
	argTypes: {
		enabled: {
			control: 'boolean',
			description:
				'Whether the debugger is enabled and visible',
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
			description: 'Position of the session debugger',
		},
	},
};

export default meta;
type Story = StoryObj<typeof AdminFactory>;

export const Default: Story = {
	args: {
		kind: 'session-debugger',
		enabled: true,
		position: 'top-left',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'session-debugger',
		enabled: false,
		position: 'top-left',
	},
};

export const DifferentPositions: Story = {
	render: () => (
		<>
			<AdminFactory
				kind='session-debugger'
				enabled={true}
				position='top-right'
			/>
		</>
	),
};

export const WithMockSession: Story = {
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
