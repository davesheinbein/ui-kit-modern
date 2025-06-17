import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../components/Modal';
import type { ModalProps } from '../../components/Modal/Modal';

const meta: Meta<typeof Modal> = {
	title: 'Modals/Modal',
	component: Modal,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A reusable modal component with overlay background and customizable content.',
			},
		},
	},
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether the modal is open/visible',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when the modal should be closed',
		},
		children: {
			control: false,
			description:
				'The content to display inside the modal',
		},
		className: {
			control: 'text',
			description:
				'Additional CSS classes for the modal overlay',
		},
		contentClassName: {
			control: 'text',
			description:
				'Additional CSS classes for the modal content',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
		children: (
			<div style={{ padding: '2rem' }}>Modal Content</div>
		),
	},
};

export const WithCustomContent: Story = {
	args: {
		open: true,
		onClose: () => {},
		children: (
			<div style={{ padding: '2rem', textAlign: 'center' }}>
				<h2>Custom Modal</h2>
				<p>
					This is a modal with custom content including text
					and buttons.
				</p>
				<button
					style={{
						marginTop: '1rem',
						padding: '0.5rem 1rem',
					}}
				>
					Action Button
				</button>
			</div>
		),
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		children: (
			<div style={{ padding: '2rem' }}>
				This modal is closed
			</div>
		),
	},
};
