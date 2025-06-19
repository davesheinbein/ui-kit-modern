import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
	B,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/UnifiedButton',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY button component. Single component handles ALL button types through the "kind" prop. Supports 30+ button kinds with configuration-driven approach.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'danger',
				'success',
				'warning',
				'ghost',
				'link',
				'icon',
				'close',
				'word',
				'copy-link',
				'go-back',
				'friends-toggle',
				'dark-mode-toggle',
				'notification-close',
				'toast-action',
				'feedback-action',
				'customization-item',
				'vs-quick-chat',
				'vs-status-emote',
				'pregame-ready',
				'purchase-buy',
				'purchase-gift',
				'modal-confirm',
				'modal-cancel',
				'form-submit',
				'form-reset',
				'nav-back',
				'nav-forward',
				'custom',
			],
			description:
				'Button kind - determines styling and behavior',
		},
		text: {
			control: 'text',
			description: 'Button text content',
		},
		icon: {
			control: 'text',
			description: 'Icon to display (emoji or text)',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		isSelected: {
			control: 'boolean',
			description:
				'Selected state (for word/toggle buttons)',
		},
		isActive: {
			control: 'boolean',
			description: 'Active state (for toggle buttons)',
		},
		isLocked: {
			control: 'boolean',
			description: 'Locked/disabled state',
		},
		href: {
			control: 'text',
			description: 'Link URL (for link buttons)',
		},
		copyText: {
			control: 'text',
			description: 'Text to copy (for copy-link buttons)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

// Basic button variants
export const Primary: Story = {
	args: {
		kind: 'primary',
		text: 'Primary Button',
	},
};

export const Secondary: Story = {
	args: {
		kind: 'secondary',
		text: 'Secondary Button',
	},
};

export const Danger: Story = {
	args: {
		kind: 'danger',
		text: 'Danger Button',
	},
};

export const Success: Story = {
	args: {
		kind: 'success',
		text: 'Success Button',
	},
};

export const Warning: Story = {
	args: {
		kind: 'warning',
		text: 'Warning Button',
	},
};

export const Ghost: Story = {
	args: {
		kind: 'ghost',
		text: 'Ghost Button',
	},
};

// Specialized UI buttons
export const IconButton: Story = {
	args: {
		kind: 'icon',
		icon: '⚙️',
		label: 'Settings',
	},
};

export const CloseButton: Story = {
	args: {
		kind: 'close',
	},
};

export const CopyLinkButton: Story = {
	args: {
		kind: 'copy-link',
		copyText: 'https://example.com',
		text: 'Copy Link',
	},
};

export const GoBackButton: Story = {
	args: {
		kind: 'go-back',
	},
};

// Game-specific buttons
export const WordButton: Story = {
	args: {
		kind: 'word',
		text: 'HELLO',
		isSelected: false,
	},
};

export const WordButtonSelected: Story = {
	args: {
		kind: 'word',
		text: 'WORLD',
		isSelected: true,
	},
};

export const VSQuickChat: Story = {
	args: {
		kind: 'vs-quick-chat',
		text: 'Good luck!',
	},
};

export const PregameReady: Story = {
	args: {
		kind: 'pregame-ready',
	},
};

// Commerce buttons
export const PurchaseBuy: Story = {
	args: {
		kind: 'purchase-buy',
		text: 'Buy $9.99',
	},
};

export const PurchaseGift: Story = {
	args: {
		kind: 'purchase-gift',
		text: 'Buy as Gift',
	},
};

// Modal buttons
export const ModalConfirm: Story = {
	args: {
		kind: 'modal-confirm',
	},
};

export const ModalCancel: Story = {
	args: {
		kind: 'modal-cancel',
	},
};

// Form buttons
export const FormSubmit: Story = {
	args: {
		kind: 'form-submit',
	},
};

export const FormReset: Story = {
	args: {
		kind: 'form-reset',
	},
};

// Demonstrate button factory usage
export const FactoryExample: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				flexWrap: 'wrap',
			}}
		>
			{ButtonFactory.create('primary', {
				text: 'Factory Primary',
			})}
			{ButtonFactory.create('icon', {
				icon: '🔥',
				label: 'Fire',
			})}
			{B.save(() => console.log('Saved!'))}
			{B.delete(() => console.log('Deleted!'))}
			{B.copy('https://example.com', 'Copy URL')}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Examples using ButtonFactory and ultra-DRY shortcuts (B.*).',
			},
		},
	},
};

// Demonstrate button groups
export const ButtonGroups: Story = {
	render: () => {
		const modalActions = ButtonFactory.createModalActions({
			onConfirm: () => console.log('Confirmed!'),
			onCancel: () => console.log('Cancelled!'),
			confirmText: 'Delete Account',
			cancelText: 'Keep Account',
		});

		const formActions = ButtonFactory.createFormActions({
			onSubmit: () => console.log('Submitted!'),
			onReset: () => console.log('Reset!'),
			onCancel: () => console.log('Cancelled!'),
		});

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
				}}
			>
				<div>
					<h4>Modal Actions Group</h4>
					<div style={{ display: 'flex', gap: '1rem' }}>
						{modalActions.confirm}
						{modalActions.cancel}
					</div>
				</div>
				<div>
					<h4>Form Actions Group</h4>
					<div style={{ display: 'flex', gap: '1rem' }}>
						{formActions.submit}
						{formActions.reset}
						{formActions.cancel}
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Pre-configured button groups for common UI patterns.',
			},
		},
	},
};

// Show all available button kinds
export const AllButtonKinds: Story = {
	render: () => {
		const buttonKinds = [
			'primary',
			'secondary',
			'danger',
			'success',
			'warning',
			'ghost',
			'icon',
			'close',
			'copy-link',
			'go-back',
			'friends-toggle',
			'word',
			'vs-quick-chat',
			'pregame-ready',
			'purchase-buy',
			'modal-confirm',
			'form-submit',
		];

		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(150px, 1fr))',
					gap: '1rem',
				}}
			>
				{buttonKinds.map((kind) => (
					<UnifiedButton
						key={kind}
						kind={kind as any}
						text={kind.replace('-', ' ')}
						onClick={() => console.log(`${kind} clicked!`)}
						{...(kind === 'icon' && {
							icon: '⭐',
							label: 'Star',
						})}
						{...(kind === 'copy-link' && {
							copyText: 'https://example.com',
						})}
						{...(kind === 'word' && { text: 'WORD' })}
					/>
				))}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Showcase of all available button kinds in the UnifiedButton system.',
			},
		},
	},
};
