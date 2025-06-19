import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Primary (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Primary button using UnifiedButton with kind="primary". Shows how the DRY system replaces individual button components.',
			},
		},
	},
	argTypes: {
		children: {
			control: 'text',
			description: 'The text to display inside the button',
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
				'Button kind (fixed to "primary" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'primary',
		children: 'Primary Button',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'primary',
		children: 'Disabled Primary',
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		kind: 'primary',
		children: 'Loading...',
		disabled: true,
	},
};

export const WithIcon: Story = {
	args: {
		kind: 'primary',
		children: 'Primary with Icon',
		icon: '✓',
	},
};

export const WithLongText: Story = {
	args: {
		kind: 'primary',
		children:
			'This is a very long button text to test wrapping',
	},
};

export const Submit: Story = {
	args: {
		kind: 'primary',
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
			{ButtonFactory.create('primary', {
				children: 'Factory Primary',
			})}
			{ButtonFactory.create('primary', {
				children: 'Disabled Factory',
				disabled: true,
			})}
			{ButtonFactory.create('primary', {
				children: 'With Icon',
				icon: '⭐',
			})}
		</div>
	),
};
