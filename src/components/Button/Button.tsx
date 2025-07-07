import React, { forwardRef } from 'react';
import {
	BUTTON_CONFIGURATIONS,
	ExtendedButtonKind,
	ButtonConfiguration,
} from './configurations';
import styles from './button.module.scss';
import { Icons } from '../Icons';

/**
 * Button - Single entry point for all button types in the UI kit
 * Use the 'kind' prop to specify which button variant you want
 *
 * @example
 * // Basic buttons
 * <Button>Click me</Button>                    // defaults to 'primary'
 * <Button kind="secondary">Secondary</Button>
 * <Button kind="danger">Delete</Button>
 *
 * // Icon buttons
 * <Button kind="icon" icon="🔥" label="Fire" />
 * <Button kind="close" onClick={onClose} />
 *
 * // Specialized buttons
 * <Button kind="word" text="HELLO" isSelected={true} />
 * <Button kind="copy-link" copyText="https://example.com" />
 * <Button kind="friends-toggle" imageUrl={userAvatar} />
 */

export type ButtonKind = ExtendedButtonKind;

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button kind - determines styling and behavior (defaults to 'primary') */
	kind?: ButtonKind;

	// Content props
	icon?: React.ReactNode;
	word?: string; // For word buttons
	text?: string; // Generic text content
	children?: React.ReactNode;

	// Behavior props
	href?: string; // For link buttons
	copyText?: string; // For copy-link buttons
	isSelected?: boolean; // For toggle/word buttons
	isActive?: boolean; // For toggle buttons
	isLocked?: boolean; // For word buttons
	burnSuspect?: boolean; // For word buttons
	isBurned?: boolean; // For word buttons

	// Friends toggle specific props
	imageUrl?: string;
	userName?: string;
	isAuthenticated?: boolean;

	// Accessibility
	label?: string; // Override aria-label
	size?: 'small' | 'medium' | 'large';
	loading?: boolean;
	fullWidth?: boolean;

	/**
	 * Button content type: 'text' (default), 'icon' (icon only), 'textIcon' (icon + text)
	 * Controls layout, independent of kind (style)
	 */
	contentType?: 'text' | 'icon' | 'textIcon';
	iconPosition?: 'left' | 'right' | 'top' | 'bottom'; // 'only' is now contentType='icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			kind = 'primary',
			contentType = 'text',
			icon,
			word,
			text,
			children,
			href,
			copyText,
			isSelected = false,
			isActive = false,
			isLocked = false,
			burnSuspect = false,
			isBurned = false,
			imageUrl,
			userName,
			isAuthenticated = false,
			label,
			size,
			loading = false,
			fullWidth = false,
			className = '',
			onClick,
			iconPosition: iconPositionProp,
			...props
		},
		ref
	) => {
		const config: ButtonConfiguration =
			BUTTON_CONFIGURATIONS[kind];

		// Determine icon position: prop > config > default ('left')
		const iconPosition =
			iconPositionProp || config.iconPosition || 'left';

		// Auto-adjust contentType for icon-only buttons
		const finalContentType =
			iconPosition === 'only' ? 'icon' : contentType;

		// Determine content with priority: explicit props > config defaults
		let displayIcon = icon || config.icon;
		if (typeof displayIcon === 'string') {
			const validIconNames = [
				'check',
				'close',
				'settings',
				'user',
				'home',
				'star',
				'search',
				'heart',
				'bell',
				'arrow-left',
				'arrow-right',
				'copy',
				'warning',
				'success',
				'danger',
			];
			if (validIconNames.includes(displayIcon)) {
				displayIcon = (
					<Icons
						name={
							displayIcon as import('../Icons').IconName
						}
						size={
							size === 'small' ? 16
							: size === 'large' ?
								28
							:	20
						}
					/>
				);
			}
		}
		const displayText =
			text || word || children || config.defaultText;

		// Handle friends toggle button special rendering
		let friendsToggleContent = null;
		if (kind === 'friends-toggle') {
			if (isAuthenticated && imageUrl) {
				friendsToggleContent = (
					<img
						src={imageUrl}
						alt={userName || 'Profile'}
						className={styles['friends-toggle__image']}
					/>
				);
			} else {
				friendsToggleContent = (
					<span className={styles['friends-toggle-icon']}>
						<svg
							width='28'
							height='28'
							viewBox='0 0 24 24'
							fill='none'
							stroke='#2563eb'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<circle cx='9' cy='7' r='4' />
							<path d='M17 11v-1a4 4 0 0 0-4-4' />
							<path d='M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2' />
						</svg>
					</span>
				);
			}
		}

		// Build aria-label
		const ariaLabel =
			label ||
			config.ariaLabel ||
			(typeof displayText === 'string' ? displayText : (
				'Button'
			));

		// Build comprehensive className
		const combinedClassName = [
			styles.baseButton, // Base button styles
			styles[`button-${config.variant}`], // Variant styles
			styles[`button-${size || config.size || 'medium'}`], // Size styles
			className,
			config.className,
			isSelected && styles.selected,
			isActive && styles.active,
			isLocked && styles.locked,
			burnSuspect && styles.burnSuspect,
			isBurned && styles.burned,
			loading && styles.loading,
			fullWidth && styles.fullWidth,
		]
			.filter(Boolean)
			.join(' ');

		// Handle specialized behaviors
		const handleClick = (
			event: React.MouseEvent<HTMLButtonElement>
		) => {
			switch (config.behavior) {
				case 'copy':
					if (copyText) {
						navigator.clipboard
							.writeText(copyText)
							.catch(console.error);
					}
					break;
				case 'close':
					// Close behavior handled by parent
					break;
				case 'toggle':
					// Toggle behavior handled by parent
					break;
				case 'link':
					if (href) {
						window.location.href = href;
						return;
					}
					break;
			}

			// Apply configuration click handler if provided
			if (config.clickHandler) {
				config.clickHandler(event);
			}

			// Call the original onClick
			onClick?.(event);
		};

		// Content layout based on contentType
		const renderContent = () => {
			if (finalContentType === 'icon') {
				return displayIcon;
			}
			if (finalContentType === 'textIcon') {
				if (
					(iconPosition === 'top' ||
						iconPosition === 'bottom') &&
					displayIcon
				) {
					return (
						<span
							className={
								iconPosition === 'top' ?
									styles['button__icon-text--top']
								:	styles['button__icon-text--bottom']
							}
						>
							<span>{displayIcon}</span>
							{displayText && <span>{displayText}</span>}
						</span>
					);
				}
				return (
					<>
						{iconPosition === 'left' && displayIcon && (
							<span className={styles.leftIcon}>
								{displayIcon}
							</span>
						)}
						{displayText && <span>{displayText}</span>}
						{iconPosition === 'right' && displayIcon && (
							<span className={styles.rightIcon}>
								{displayIcon}
							</span>
						)}
					</>
				);
			}
			// finalContentType === 'text' (default)
			return displayText;
		};

		// Handle link buttons with href
		if (config.behavior === 'link' && href) {
			return (
				<a
					href={href}
					className={`${styles.linkButton} ${combinedClassName}`.trim()}
					ref={ref as any}
					aria-label={ariaLabel}
					{...(props as any)}
				>
					{renderContent()}
				</a>
			);
		}

		// Handle icon-only buttons
		if (finalContentType === 'icon') {
			return (
				<button
					ref={ref}
					className={combinedClassName}
					onClick={handleClick}
					aria-label={ariaLabel}
					disabled={isLocked || loading}
					{...props}
				>
					{kind === 'friends-toggle' ?
						friendsToggleContent
					:	displayIcon}
				</button>
			);
		}

		// Standard button
		return (
			<button
				ref={ref}
				className={combinedClassName}
				onClick={handleClick}
				aria-label={ariaLabel}
				disabled={isLocked || loading}
				{...props}
			>
				{kind === 'friends-toggle' ?
					friendsToggleContent
				:	renderContent()}
			</button>
		);
	}
);

Button.displayName = 'Button';

export function createButton(
	kind: ButtonKind,
	props: Partial<ButtonProps> = {}
): React.ReactElement<ButtonProps> {
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

export default Button;
