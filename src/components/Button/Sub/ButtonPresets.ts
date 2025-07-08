import type { ButtonKind, ButtonProps } from '../Button';
import React from 'react';

export function createButton(
	kind: ButtonKind,
	props: Partial<ButtonProps> = {}
): React.ReactElement<ButtonProps> {
	const { default: Button } = require('../Button');
	return React.createElement(Button, {
		kind,
		...props,
	});
}

export function createButtonGroup(
	groupConfig: Record<
		string,
		{ kind: ButtonKind; props?: Partial<ButtonProps> }
	>,
	sharedProps: Partial<ButtonProps> = {}
): Record<string, React.ReactElement<ButtonProps>> {
	return Object.fromEntries(
		Object.entries(groupConfig).map(
			([key, { kind, props = {} }]) => [
				key,
				createButton(kind, { ...sharedProps, ...props }),
			]
		)
	);
}

export const saveButton = (
	onClick?: () => void,
	text = 'Save'
) => createButton('primary', { onClick, text });
export const cancelButton = (
	onClick?: () => void,
	text = 'Cancel'
) => createButton('secondary', { onClick, text });
export const deleteButton = (
	onClick?: () => void,
	text = 'Delete'
) => createButton('danger', { onClick, text });
export const editButton = (
	onClick?: () => void,
	text = 'Edit'
) => createButton('ghost', { onClick, text, icon: '✏️' });
export const addButton = (
	onClick?: () => void,
	text = 'Add'
) => createButton('success', { onClick, text, icon: '+' });
export const closeButton = (onClick?: () => void) =>
	createButton('close', { onClick });
export const backButton = (
	onClick?: () => void,
	text = 'Back'
) => createButton('go-back', { onClick, text });
export const copyButton = (
	copyText: string,
	text = 'Copy'
) => createButton('copy-link', { copyText, text });
export const iconButton = (
	icon: React.ReactNode,
	onClick?: () => void,
	ariaLabel?: string
) =>
	createButton('icon', { icon, onClick, label: ariaLabel });

// Preset groups for dialogs and forms
export const confirmDialogButtons = (
	onConfirm: () => void,
	onCancel: () => void
) => ({
	confirm: createButton('danger', {
		onClick: onConfirm,
		text: 'Confirm',
	}),
	cancel: createButton('secondary', {
		onClick: onCancel,
		text: 'Cancel',
	}),
});
export const deleteConfirmationButtons = (
	onDelete: () => void,
	onCancel: () => void,
	itemName?: string
) => ({
	delete: createButton('danger', {
		onClick: onDelete,
		text: itemName ? `Delete ${itemName}` : 'Delete',
	}),
	cancel: createButton('secondary', {
		onClick: onCancel,
		text: 'Cancel',
	}),
});
export const saveFormButtons = (
	onSave: () => void,
	onCancel: () => void
) => ({
	save: saveButton(onSave),
	cancel: cancelButton(onCancel),
});
