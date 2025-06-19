import React from 'react';
import UnifiedButton, {
	UnifiedButtonProps,
	ButtonKind,
} from './UnifiedButton';
import {
	BUTTON_CONFIGURATIONS,
	BUTTON_GROUPS,
	QUICK_BUTTONS,
	ButtonConfiguration,
} from './ButtonConfigurations';

/**
 * Button Factory - Creates buttons with minimal configuration
 * This is the most DRY way to create buttons in the entire system
 */
export class ButtonFactory {
	/**
	 * Create a button with a specific kind and minimal props
	 */
	static create(
		kind: ButtonKind,
		props: Partial<UnifiedButtonProps> = {}
	): React.ReactElement<UnifiedButtonProps> {
		return React.createElement(UnifiedButton, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple buttons from a group configuration
	 */
	static createGroup(
		groupConfig: Record<
			string,
			{
				kind: ButtonKind;
				props?: Partial<UnifiedButtonProps>;
			}
		>,
		sharedProps: Partial<UnifiedButtonProps> = {}
	): Record<
		string,
		React.ReactElement<UnifiedButtonProps>
	> {
		return Object.fromEntries(
			Object.entries(groupConfig).map(
				([key, { kind, props = {} }]) => [
					key,
					this.create(kind, { ...sharedProps, ...props }),
				]
			)
		);
	}

	/**
	 * Create predefined button groups (modal actions, form actions, etc.)
	 */
	static createModalActions(
		props: {
			onConfirm?: () => void;
			onCancel?: () => void;
			confirmText?: string;
			cancelText?: string;
		} = {}
	) {
		return {
			confirm: this.create('modal-confirm', {
				onClick: props.onConfirm,
				text: props.confirmText,
			}),
			cancel: this.create('modal-cancel', {
				onClick: props.onCancel,
				text: props.cancelText,
			}),
		};
	}

	static createFormActions(
		props: {
			onSubmit?: () => void;
			onReset?: () => void;
			onCancel?: () => void;
			submitText?: string;
			resetText?: string;
			cancelText?: string;
		} = {}
	) {
		return {
			submit: this.create('form-submit', {
				onClick: props.onSubmit,
				text: props.submitText,
			}),
			reset: this.create('form-reset', {
				onClick: props.onReset,
				text: props.resetText,
			}),
			cancel: this.create('modal-cancel', {
				onClick: props.onCancel,
				text: props.cancelText,
			}),
		};
	}

	/**
	 * Quick access to common buttons with smart defaults
	 */
	static save = (onClick?: () => void, text = 'Save') =>
		this.create('primary', { onClick, text });

	static cancel = (onClick?: () => void, text = 'Cancel') =>
		this.create('secondary', { onClick, text });

	static delete = (onClick?: () => void, text = 'Delete') =>
		this.create('danger', { onClick, text });

	static edit = (onClick?: () => void, text = 'Edit') =>
		this.create('ghost', { onClick, text, icon: '✏️' });

	static add = (onClick?: () => void, text = 'Add') =>
		this.create('success', { onClick, text, icon: '+' });

	static close = (onClick?: () => void) =>
		this.create('close', { onClick });

	static back = (onClick?: () => void, text = 'Back') =>
		this.create('go-back', { onClick, text });

	static copy = (copyText: string, text = 'Copy') =>
		this.create('copy-link', { copyText, text });

	static icon = (
		icon: React.ReactNode,
		onClick?: () => void,
		ariaLabel?: string
	) =>
		this.create('icon', {
			icon,
			onClick,
			label: ariaLabel,
		});
}

/**
 * Ultra-DRY Button shortcuts - for maximum convenience
 */
export const B = ButtonFactory; // Ultra-short alias

/**
 * Button presets with common patterns
 */
export const ButtonPresets = {
	// Confirmation dialogs
	confirmDialog: (
		onConfirm: () => void,
		onCancel: () => void
	) => ({
		confirm: B.create('danger', {
			onClick: onConfirm,
			text: 'Confirm',
		}),
		cancel: B.create('secondary', {
			onClick: onCancel,
			text: 'Cancel',
		}),
	}),

	// Delete confirmation
	deleteConfirmation: (
		onDelete: () => void,
		onCancel: () => void,
		itemName?: string
	) => ({
		delete: B.create('danger', {
			onClick: onDelete,
			text: itemName ? `Delete ${itemName}` : 'Delete',
		}),
		cancel: B.create('secondary', {
			onClick: onCancel,
			text: 'Cancel',
		}),
	}),

	// Save/cancel form
	saveForm: (onSave: () => void, onCancel: () => void) => ({
		save: B.save(onSave),
		cancel: B.cancel(onCancel),
	}),
};

export default ButtonFactory;
