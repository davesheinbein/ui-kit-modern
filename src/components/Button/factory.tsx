import React from 'react';
import { Wrapper } from '../Wrappers';
import Button, { ButtonProps, ButtonKind } from './Button';
import {
	BUTTON_CONFIGURATIONS,
	BUTTON_GROUPS,
	QUICK_BUTTONS,
	ButtonConfiguration,
} from './configurations';

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
		props: Partial<ButtonProps> = {}
	): React.ReactElement<ButtonProps> {
		return React.createElement(Button, {
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
				props?: Partial<ButtonProps>;
			}
		>,
		sharedProps: Partial<ButtonProps> = {}
	): Record<string, React.ReactElement<ButtonProps>> {
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
 * Button presets with common patterns
 */
export const ButtonPresets = {
	// Confirmation dialogs
	confirmDialog: (
		onConfirm: () => void,
		onCancel: () => void
	) => ({
		confirm: ButtonFactory.create('danger', {
			onClick: onConfirm,
			text: 'Confirm',
		}),
		cancel: ButtonFactory.create('secondary', {
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
		delete: ButtonFactory.create('danger', {
			onClick: onDelete,
			text: itemName ? `Delete ${itemName}` : 'Delete',
		}),
		cancel: ButtonFactory.create('secondary', {
			onClick: onCancel,
			text: 'Cancel',
		}),
	}),

	// Save/cancel form
	saveForm: (onSave: () => void, onCancel: () => void) => ({
		save: ButtonFactory.save(onSave),
		cancel: ButtonFactory.cancel(onCancel),
	}),
};

export default ButtonFactory;
