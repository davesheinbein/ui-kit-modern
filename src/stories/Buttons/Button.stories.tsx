import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Button,
	ButtonFactory,
	B,
} from '../../components/Button';
import type { ButtonProps } from '../../components/Button';

const meta: Meta<typeof Button> = {
	title: 'Buttons/Button',
	component: Button,
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
		word: {
			control: 'text',
			description: 'Word content (for word buttons)',
		},
		icon: {
			control: 'text',
			description: 'Icon to display (emoji or text)',
		},
		label: {
			control: 'text',
			description: 'Accessibility label for icon buttons',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Button size',
		},
		loading: {
			control: 'boolean',
			description: 'Show loading state',
		},
		fullWidth: {
			control: 'boolean',
			description: 'Take full width of container',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable button interactions',
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
		burnSuspect: {
			control: 'boolean',
			description: 'Burn suspect state (for word buttons)',
		},
		href: {
			control: 'text',
			description: 'Link URL (for link buttons)',
		},
		copyText: {
			control: 'text',
			description: 'Text to copy (for copy-link buttons)',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic button variants
export const Primary: Story = {
	args: {
		kind: 'primary',
		text: 'Primary Button',
	},
};

export const PrimaryWithIcon: Story = {
	args: {
		kind: 'primary',
		text: 'Primary with Icon',
		icon: '✓',
	},
	parameters: {
		docs: {
			description: {
				story: 'Primary button with an icon.',
			},
		},
	},
};

export const PrimaryLongText: Story = {
	args: {
		kind: 'primary',
		text: 'This is a very long button text to test wrapping and overflow behavior',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Primary button with long text to test text handling.',
			},
		},
	},
};

export const Secondary: Story = {
	args: {
		kind: 'secondary',
		text: 'Secondary Button',
	},
};

export const SecondaryWithIcon: Story = {
	args: {
		kind: 'secondary',
		text: 'Secondary with Icon',
		icon: '📝',
	},
	parameters: {
		docs: {
			description: {
				story: 'Secondary button with an icon.',
			},
		},
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

export const CloseButtonIconOnly: Story = {
	args: {
		kind: 'close-icon-only',
	},
	parameters: {
		docs: {
			description: {
				story: 'Close button with icon only (no text).',
			},
		},
	},
};

export const CopyLinkButton: Story = {
	args: {
		kind: 'copy-link',
		copyText: 'https://example.com',
		text: 'Copy Link',
	},
};

export const CopyLinkButtonLongUrl: Story = {
	args: {
		kind: 'copy-link',
		copyText:
			'https://example.com/very/long/url/path/that/might/overflow',
		text: 'Copy Very Long URL',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Copy link button with a very long URL to test text handling.',
			},
		},
	},
};

export const GoBackButton: Story = {
	args: {
		kind: 'go-back',
	},
};

export const GoBackButtonWithLabel: Story = {
	args: {
		kind: 'go-back',
		label: 'Return to previous page',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Go back button with custom accessibility label.',
			},
		},
	},
};

export const IconButtonCustom: Story = {
	args: {
		kind: 'icon',
		icon: '🎮',
		label: 'Gaming Settings',
	},
	parameters: {
		docs: {
			description: {
				story: 'Icon button with custom icon and label.',
			},
		},
	},
};

export const IconButtonVariations: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				flexWrap: 'wrap',
			}}
		>
			<Button kind='icon' icon='⚙️' label='Settings' />
			<Button kind='icon' icon='🔔' label='Notifications' />
			<Button kind='icon' icon='👤' label='Profile' />
			<Button kind='icon' icon='🏠' label='Home' />
			<Button kind='icon' icon='❤️' label='Favorites' />
			<Button kind='icon' icon='🔍' label='Search' />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Various icon button examples with different icons.',
			},
		},
	},
};

// Social/Toggle buttons
export const FriendsToggleDefault: Story = {
	args: {
		kind: 'friends-toggle',
		isAuthenticated: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Friends toggle button in unauthenticated state.',
			},
		},
	},
};

export const FriendsToggleAuthenticated: Story = {
	args: {
		kind: 'friends-toggle',
		isAuthenticated: true,
		imageUrl:
			'https://via.placeholder.com/36x36/2563eb/ffffff?text=JD',
		userName: 'John Doe',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Friends toggle button with authenticated user profile image.',
			},
		},
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

export const WordButtonLocked: Story = {
	args: {
		kind: 'word',
		text: 'LOCKED',
		isSelected: false,
		isLocked: true,
	},
};

export const WordButtonBurnSuspect: Story = {
	args: {
		kind: 'word',
		text: 'SUSPECT',
		isSelected: false,
		burnSuspect: true,
	},
};

export const WordButtonBurned: Story = {
	args: {
		kind: 'word',
		text: 'BURNED',
		isSelected: false,
		isBurned: true,
	},
};

export const WordButtonAllStates: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gap: '1rem',
				maxWidth: '600px',
			}}
		>
			<Button
				kind='word'
				text='Default'
				isSelected={false}
				isLocked={false}
				onClick={() => {}}
			/>
			<Button
				kind='word'
				text='Selected'
				isSelected={true}
				isLocked={false}
				onClick={() => {}}
			/>
			<Button
				kind='word'
				text='Locked'
				isSelected={false}
				isLocked={true}
				onClick={() => {}}
			/>
			<Button
				kind='word'
				text='Suspect'
				isSelected={false}
				isLocked={false}
				burnSuspect={true}
				onClick={() => {}}
			/>
			<Button
				kind='word'
				text='Burned'
				isSelected={false}
				isLocked={false}
				isBurned={true}
				onClick={() => {}}
			/>
			<Button
				kind='word'
				text='Sel+Susp'
				isSelected={true}
				isLocked={false}
				burnSuspect={true}
				onClick={() => {}}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All word button states in a grid layout for comparison.',
			},
		},
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

// Button Size Variations
export const ButtonSizes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				alignItems: 'center',
			}}
		>
			<Button kind='primary' text='Small' size='small' />
			<Button kind='primary' text='Medium' size='medium' />
			<Button kind='primary' text='Large' size='large' />
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Primary buttons in different sizes.',
			},
		},
	},
};

// Button States
export const ButtonStates: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '1rem',
				flexWrap: 'wrap',
			}}
		>
			<Button kind='primary' text='Normal' />
			<Button
				kind='primary'
				text='Loading'
				loading={true}
			/>
			<Button
				kind='primary'
				text='Disabled'
				disabled={true}
			/>
			<Button
				kind='primary'
				text='Full Width'
				fullWidth={true}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Primary buttons in different states.',
			},
		},
	},
};

// Link Button Variations
export const LinkButton: Story = {
	args: {
		kind: 'link',
		text: 'Link Button',
		href: 'https://example.com',
	},
};

export const LinkButtonExternal: Story = {
	args: {
		kind: 'link',
		text: 'External Link',
		href: 'https://github.com',
	},
	parameters: {
		docs: {
			description: {
				story: 'Link button that opens external URL.',
			},
		},
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
					<Button
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
					'Showcase of all available button kinds in the Button system.',
			},
		},
	},
};
