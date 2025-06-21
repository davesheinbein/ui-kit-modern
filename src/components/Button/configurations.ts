import { ReactNode } from 'react';
import styles from './Button.module.scss';

// Button variant types
export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'ghost'
	| 'link'
	| 'custom';

// Enhanced button configuration interface
export interface ButtonConfiguration {
	variant: ButtonVariant;
	size?: 'small' | 'medium' | 'large';
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right' | 'only';
	defaultText?: string;
	ariaLabel?: string;
	className?: string;
	behavior?:
		| 'button'
		| 'link'
		| 'toggle'
		| 'copy'
		| 'close';
	clickHandler?: (
		originalClick?: React.MouseEvent<HTMLButtonElement>
	) => void;
}

// Comprehensive button kind definitions - extends the existing ones
export type ExtendedButtonKind =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'ghost'
	| 'link'
	| 'icon'
	| 'close'
	| 'close-icon-only'
	| 'word'
	| 'copy-link'
	| 'go-back'
	| 'friends-toggle'
	| 'dark-mode-toggle'
	| 'notification-close'
	| 'toast-action'
	| 'feedback-action'
	| 'customization-item'
	| 'vs-quick-chat'
	| 'vs-status-emote'
	| 'pregame-ready'
	| 'purchase-buy'
	| 'purchase-gift'
	| 'modal-confirm'
	| 'modal-cancel'
	| 'form-submit'
	| 'form-reset'
	| 'nav-back'
	| 'nav-forward'
	| 'custom';

// Predefined configurations for maximum DRYness
export const BUTTON_CONFIGURATIONS: Record<
	ExtendedButtonKind,
	ButtonConfiguration
> = {
	// Basic variants
	'primary': {
		variant: 'primary',
		size: 'medium',
		behavior: 'button',
		className: styles.primaryBtn,
	},
	'secondary': {
		variant: 'secondary',
		size: 'medium',
		behavior: 'button',
		className: styles.secondaryBtn,
	},
	'danger': {
		variant: 'danger',
		size: 'medium',
		behavior: 'button',
	},
	'success': {
		variant: 'success',
		size: 'medium',
		behavior: 'button',
	},
	'warning': {
		variant: 'warning',
		size: 'medium',
		behavior: 'button',
	},
	'ghost': {
		variant: 'ghost',
		size: 'medium',
		behavior: 'button',
	},
	'link': {
		variant: 'link',
		size: 'medium',
		behavior: 'link',
	},

	// Specialized UI buttons
	'icon': {
		variant: 'ghost',
		size: 'small',
		iconPosition: 'only',
		behavior: 'button',
		ariaLabel: 'Icon button',
		className: styles.iconBtn,
	},
	'close': {
		variant: 'danger',
		size: 'small',
		icon: '✕',
		iconPosition: 'left',
		defaultText: 'Close',
		behavior: 'close',
		ariaLabel: 'Close',
		className: styles['close-button'],
	},
	'close-icon-only': {
		variant: 'danger',
		size: 'small',
		icon: '✕',
		iconPosition: 'only',
		behavior: 'close',
		ariaLabel: 'Close',
		className: styles['close-button'],
	},
	'word': {
		variant: 'secondary',
		size: 'medium',
		behavior: 'toggle',
		className: styles['word-button'],
	},
	'copy-link': {
		variant: 'ghost',
		size: 'medium',
		icon: '📋',
		iconPosition: 'left',
		defaultText: 'Copy Link',
		behavior: 'copy',
		ariaLabel: 'Copy link',
		className: styles['copy-link'],
	},
	'go-back': {
		variant: 'ghost',
		size: 'medium',
		icon: '←',
		iconPosition: 'left',
		defaultText: 'Back',
		behavior: 'button',
		ariaLabel: 'Go back',
		className: styles['go-back'],
	},
	'friends-toggle': {
		variant: 'ghost',
		size: 'medium',
		iconPosition: 'only',
		behavior: 'toggle',
		ariaLabel: 'Open friends sidebar',
		className: 'friends-toggle-btn',
	},

	// App-specific buttons
	'dark-mode-toggle': {
		variant: 'ghost',
		size: 'small',
		icon: '🌙',
		iconPosition: 'only',
		behavior: 'toggle',
		ariaLabel: 'Toggle dark mode',
	},
	'notification-close': {
		variant: 'ghost',
		size: 'small',
		icon: '✕',
		iconPosition: 'only',
		behavior: 'close',
		ariaLabel: 'Close notification',
	},
	'toast-action': {
		variant: 'ghost',
		size: 'small',
		behavior: 'button',
		className: 'toast-action',
	},
	'feedback-action': {
		variant: 'primary',
		size: 'small',
		behavior: 'button',
		className: 'feedback-action',
	},
	'customization-item': {
		variant: 'secondary',
		size: 'medium',
		behavior: 'toggle',
		className: 'customization-item',
	},

	// Game-specific buttons
	'vs-quick-chat': {
		variant: 'ghost',
		size: 'small',
		behavior: 'button',
		className: 'vs-quick-chat-btn',
	},
	'vs-status-emote': {
		variant: 'ghost',
		size: 'small',
		behavior: 'button',
		ariaLabel: 'Send emote',
		className: 'vs-emote-btn',
	},
	'pregame-ready': {
		variant: 'success',
		size: 'large',
		defaultText: 'Ready',
		behavior: 'button',
	},

	// Purchase/Commerce buttons
	'purchase-buy': {
		variant: 'primary',
		size: 'medium',
		defaultText: 'Buy',
		behavior: 'button',
	},
	'purchase-gift': {
		variant: 'secondary',
		size: 'medium',
		defaultText: 'Gift',
		behavior: 'button',
	},

	// Modal buttons
	'modal-confirm': {
		variant: 'primary',
		size: 'medium',
		defaultText: 'Confirm',
		behavior: 'button',
	},
	'modal-cancel': {
		variant: 'secondary',
		size: 'medium',
		defaultText: 'Cancel',
		behavior: 'button',
	},

	// Form buttons
	'form-submit': {
		variant: 'primary',
		size: 'medium',
		defaultText: 'Submit',
		behavior: 'button',
	},
	'form-reset': {
		variant: 'secondary',
		size: 'medium',
		defaultText: 'Reset',
		behavior: 'button',
	},

	// Navigation buttons
	'nav-back': {
		variant: 'ghost',
		size: 'medium',
		icon: '←',
		iconPosition: 'only',
		behavior: 'button',
		ariaLabel: 'Go back',
		className: styles['nav-back'],
	},
	'nav-forward': {
		variant: 'ghost',
		size: 'medium',
		icon: '→',
		iconPosition: 'right',
		defaultText: 'Next',
		behavior: 'button',
	},

	// Custom fallback
	'custom': {
		variant: 'primary',
		size: 'medium',
		behavior: 'button',
	},
};

// Helper functions for creating common button configurations
export const createButtonConfig = (
	baseKind: ExtendedButtonKind,
	overrides: Partial<ButtonConfiguration>
): ButtonConfiguration => ({
	...BUTTON_CONFIGURATIONS[baseKind],
	...overrides,
});

// Common button groups for UI patterns
export const BUTTON_GROUPS = {
	// Modal actions
	modalActions: {
		confirm: 'modal-confirm' as ExtendedButtonKind,
		cancel: 'modal-cancel' as ExtendedButtonKind,
	},

	// Form actions
	formActions: {
		submit: 'form-submit' as ExtendedButtonKind,
		reset: 'form-reset' as ExtendedButtonKind,
		cancel: 'modal-cancel' as ExtendedButtonKind,
	},

	// Purchase actions
	purchaseActions: {
		buy: 'purchase-buy' as ExtendedButtonKind,
		gift: 'purchase-gift' as ExtendedButtonKind,
	},

	// Navigation actions
	navigationActions: {
		back: 'nav-back' as ExtendedButtonKind,
		forward: 'nav-forward' as ExtendedButtonKind,
		close: 'close' as ExtendedButtonKind,
	},

	// Game actions
	gameActions: {
		ready: 'pregame-ready' as ExtendedButtonKind,
		emote: 'vs-status-emote' as ExtendedButtonKind,
		quickChat: 'vs-quick-chat' as ExtendedButtonKind,
	},

	// Common UI actions
	uiActions: {
		copy: 'copy-link' as ExtendedButtonKind,
		close: 'close' as ExtendedButtonKind,
	},

	// Friends/Social UI actions
	socialActions: {
		friendsToggle: 'friends-toggle' as ExtendedButtonKind,
		darkModeToggle:
			'dark-mode-toggle' as ExtendedButtonKind,
	},
};

// Quick access to commonly used button configurations
export const QUICK_BUTTONS = {
	saveButton: () =>
		createButtonConfig('primary', { defaultText: 'Save' }),
	cancelButton: () =>
		createButtonConfig('secondary', {
			defaultText: 'Cancel',
		}),
	deleteButton: () =>
		createButtonConfig('danger', { defaultText: 'Delete' }),
	editButton: () =>
		createButtonConfig('ghost', {
			icon: '✏️',
			defaultText: 'Edit',
		}),
	addButton: () =>
		createButtonConfig('success', {
			icon: '+',
			defaultText: 'Add',
		}),
	shareButton: () =>
		createButtonConfig('ghost', {
			icon: '🔗',
			defaultText: 'Share',
		}),
	settingsButton: () =>
		createButtonConfig('ghost', {
			icon: '⚙️',
			ariaLabel: 'Settings',
		}),
	helpButton: () =>
		createButtonConfig('ghost', {
			icon: '?',
			ariaLabel: 'Help',
		}),
	refreshButton: () =>
		createButtonConfig('ghost', {
			icon: '🔄',
			ariaLabel: 'Refresh',
		}),
	downloadButton: () =>
		createButtonConfig('primary', {
			icon: '⬇️',
			defaultText: 'Download',
		}),
};

export default BUTTON_CONFIGURATIONS;
