import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Icon (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Icon button using UnifiedButton with kind="icon". Displays an icon with optional label for accessibility.',
			},
		},
	},
	argTypes: {
		'icon': {
			control: false,
			description: 'The icon element to display',
		},
		'aria-label': {
			control: 'text',
			description: 'Accessibility label for the button',
		},
		'disabled': {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		'onClick': {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		'className': {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		'type': {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			description: 'Button type attribute',
		},
		'kind': {
			control: false,
			description:
				'Button kind (fixed to "icon" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		'kind': 'icon',
		'icon': <span>🔔</span>,
		'aria-label': 'Notify',
	},
};

export const Disabled: Story = {
	args: {
		'kind': 'icon',
		'icon': <span>🔔</span>,
		'aria-label': 'Notify',
		'disabled': true,
	},
};

export const WithoutLabel: Story = {
	args: {
		kind: 'icon',
		icon: <span>⚙️</span>,
	},
};

export const WithSVGIcon: Story = {
	args: {
		'kind': 'icon',
		'icon': (
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='currentColor'
			>
				<path d='M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.5 6L7 10.5 4.5 8 5.91 6.59 7 7.68l3.59-3.59L12 5.5z' />
			</svg>
		),
		'aria-label': 'Success',
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
			{ButtonFactory.create('icon', {
				'icon': '⭐',
				'aria-label': 'Star',
			})}
			{ButtonFactory.create('icon', {
				'icon': '❤️',
				'aria-label': 'Heart',
				'disabled': true,
			})}
			{ButtonFactory.create('icon', {
				'icon': '🔍',
				'aria-label': 'Search',
			})}
		</div>
	),
};
