import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Copy Link (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Copy link button using UnifiedButton with kind="copy-link". A specialized button that copies a URL to the clipboard with visual feedback.',
			},
		},
	},
	argTypes: {
		copyText: {
			control: 'text',
			description: 'The text/URL to be copied to clipboard',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		kind: {
			control: false,
			description:
				'Button kind (fixed to "copy-link" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'copy-link',
		copyText: 'https://example.com/shared-link',
	},
};

export const WithLongUrl: Story = {
	args: {
		kind: 'copy-link',
		copyText:
			'https://example.com/very-long-url-that-might-need-to-be-truncated',
	},
};

export const UsingFactory: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
		>
			{ButtonFactory.create('copy-link', {
				copyText: 'https://short.url',
			})}
			{ButtonFactory.create('copy-link', {
				copyText: 'https://example.com/very-long-url',
			})}
			{ButtonFactory.create('copy-link', {
				copyText: 'Custom text to copy',
				children: 'Copy Custom Text',
			})}
		</div>
	),
};
