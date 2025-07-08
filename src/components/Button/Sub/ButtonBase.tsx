import React, { forwardRef } from 'react';
import styles from '../button.module.scss';
import type { ExtendedButtonKind } from '../configurations';
import {
	BUTTON_CONFIGURATIONS,
	ButtonConfiguration,
} from '../configurations';
import { ButtonContent } from './ButtonContent';
import { resolveDisplayIcon } from './ButtonIcon';
import {
	getAriaLabel,
	combineClassNames,
} from './ButtonHelpers';

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

const ButtonBase = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
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
		const iconPosition =
			iconPositionProp || config.iconPosition || 'left';
		const finalContentType =
			iconPosition === 'only' ? 'icon' : contentType;
		const displayIcon = resolveDisplayIcon(
			icon,
			config.icon,
			size
		);
		const displayText =
			text || word || children || config.defaultText;

		// Friends toggle special rendering
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

		const ariaLabel = getAriaLabel({
			label,
			config,
			displayText,
		});
		const combinedClassName = combineClassNames(
			styles.baseButton,
			styles[`button-${config.variant}`],
			styles[`button-${size || config.size || 'medium'}`],
			className,
			config.className,
			isSelected && styles.selected,
			isActive && styles.active,
			isLocked && styles.locked,
			burnSuspect && styles.burnSuspect,
			isBurned && styles.burned,
			loading && styles.loading,
			fullWidth && styles.fullWidth
		);

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
					break;
				case 'toggle':
					break;
				case 'link':
					if (href) {
						window.location.href = href;
						return;
					}
					break;
			}
			if (config.clickHandler) {
				config.clickHandler(event);
			}
			onClick?.(event);
		};

		if (config.behavior === 'link' && href) {
			return (
				<a
					href={href}
					className={`${styles.linkButton} ${combinedClassName}`.trim()}
					ref={ref as any}
					aria-label={ariaLabel}
					{...(props as any)}
				>
					<ButtonContent
						finalContentType={finalContentType}
						iconPosition={iconPosition}
						displayIcon={displayIcon}
						displayText={displayText}
					/>
				</a>
			);
		}

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
				:	<ButtonContent
						finalContentType={finalContentType}
						iconPosition={iconPosition}
						displayIcon={displayIcon}
						displayText={displayText}
					/>
				}
			</button>
		);
	}
);

ButtonBase.displayName = 'ButtonBase';
export default ButtonBase;
