import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Secondary (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Secondary button using UnifiedButton with kind="secondary". Shows outlined style with primary color border.',
			},
		},
	},
	argTypes: {
		children: {
			control: 'text',
			description:
				'The content to display inside the button',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'Button type attribute',
		},
		kind: {
			control: false,
			description:
				'Button kind (fixed to "secondary" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'secondary',
		children: 'Secondary Button',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'secondary',
		children: 'Disabled Button',
		disabled: true,
	},
};

export const WithLongText: Story = {
	args: {
		kind: 'secondary',
		children:
			'This is a very long button text to test wrapping',
	},
};

export const Submit: Story = {
	args: {
		kind: 'secondary',
		children: 'Submit Form',
		type: 'submit',
	},
};

export const UsingFactory: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				flexWrap: 'wrap',
			}}
		>
			{ButtonFactory.create('secondary', {
				children: 'Factory Secondary',
			})}
			{ButtonFactory.create('secondary', {
				children: 'Disabled Factory',
				disabled: true,
			})}
			{ButtonFactory.create('secondary', {
				children: 'With Icon',
				icon: '📝',
			})}
		</div>
	),
};
