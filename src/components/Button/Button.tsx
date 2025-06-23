import React, { forwardRef } from 'react';
import {
	BUTTON_CONFIGURATIONS,
	ExtendedButtonKind,
	ButtonConfiguration,
} from './configurations';
import styles from './Button.module.scss';

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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			kind = 'primary',
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
			...props
		},
		ref
	) => {
		// Get configuration for this button kind
		const config: ButtonConfiguration = BUTTON_CONFIGURATIONS[kind];

		// Determine content with priority: explicit props > config defaults
		const displayIcon = icon || config.icon;
		const displayText = text || word || children || config.defaultText;

		// Handle friends toggle button special rendering
		let friendsToggleContent = null;
		if (kind === 'friends-toggle') {
			if (isAuthenticated && imageUrl) {
				friendsToggleContent = (
					<img
						src={imageUrl}
						alt={userName || 'Profile'}
						style={{
							width: 36,
							height: 36,
							borderRadius: '50%',
							objectFit: 'cover',
							border: '2px solid #38bdf8',
						}}
					/>
				);
			} else {
				friendsToggleContent = (
					<span className='friends-toggle-icon'>
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
		const ariaLabel = label || config.ariaLabel || 
			(typeof displayText === 'string' ? displayText : 'Button');

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
		const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
			switch (config.behavior) {
				case 'copy':
					if (copyText) {
						navigator.clipboard.writeText(copyText).catch(console.error);
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
					{displayIcon && config.iconPosition !== 'right' && (
						<span className={styles.leftIcon}>{displayIcon}</span>
					)}
					{config.iconPosition !== 'only' && displayText && (
						<span>{displayText}</span>
					)}
					{displayIcon && config.iconPosition === 'right' && (
						<span className={styles.rightIcon}>{displayIcon}</span>
					)}
				</a>
			);
		}

		// Handle icon-only buttons
		if (config.iconPosition === 'only') {
			return (
				<button
					ref={ref}
					className={combinedClassName}
					onClick={handleClick}
					aria-label={ariaLabel}
					disabled={isLocked || loading}
					{...props}
				>
					{kind === 'friends-toggle' ? friendsToggleContent : displayIcon}
				</button>
			);
		}

		// Handle standard buttons with text and optional icons
		return (
			<button
				ref={ref}
				className={combinedClassName}
				onClick={handleClick}
				aria-label={ariaLabel}
				disabled={isLocked || loading}
				{...props}
			>
				{config.iconPosition === 'left' && displayIcon && (
					<span className={styles.leftIcon}>{displayIcon}</span>
				)}
				{displayText && <span>{displayText}</span>}
				{config.iconPosition === 'right' && displayIcon && (
					<span className={styles.rightIcon}>{displayIcon}</span>
				)}
			</button>
		);
	}
);

Button.displayName = 'Button';

export default Button;
