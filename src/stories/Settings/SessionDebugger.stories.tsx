import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SessionDebugger } from '../../components/SessionDebugger';
import type { SessionDebuggerProps } from '../../components/SessionDebugger/SessionDebugger';

const meta: Meta<typeof SessionDebugger> = {
	title: 'Settings/SessionDebugger',
	component: SessionDebugger,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A debugging component that shows session information like client time and other debug data.',
			},
		},
	},
	argTypes: {
		enabled: {
			control: 'boolean',
			description:
				'Whether the debugger is enabled and visible',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SessionDebugger>;

export const Default: Story = {
	args: {
		enabled: true,
	},
};

export const Disabled: Story = {
	args: {
		enabled: false,
	},
};
