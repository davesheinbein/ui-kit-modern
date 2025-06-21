import React, { forwardRef } from 'react';
import {
	BUTTON_CONFIGURATIONS,
	ExtendedButtonKind,
	ButtonConfiguration,
	createButtonConfig,
} from './configurations';
import styles from './Button.module.scss';

// Base button variant types
export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'success'
	| 'warning'
	| 'ghost'
	| 'link'
	| 'custom';

// Base button props interface
export interface BaseButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: 'small' | 'medium' | 'large';
	loading?: boolean;
	fullWidth?: boolean;
}

// Use the extended button kinds from configurations
export type ButtonKind = ExtendedButtonKind;

export interface UnifiedButtonProps
	extends Omit<BaseButtonProps, 'variant' | 'children'> {
	kind: ButtonKind;

	// Content props
	icon?: React.ReactNode;
	word?: string; // For word buttons
	text?: string; // Generic text content
	children?: React.ReactNode; // Make children optional

	// Behavior props
	href?: string; // For link buttons
	copyText?: string; // For copy-link buttons
	isSelected?: boolean; // For toggle/word buttons
	isActive?: boolean; // For toggle buttons
	isLocked?: boolean; // For word buttons
	burnSuspect?: boolean; // For word buttons
	isBurned?: boolean; // For word buttons

	// Friends toggle specific props
	imageUrl?: string; // For friends toggle button
	userName?: string; // For friends toggle button
	isAuthenticated?: boolean; // For friends toggle button

	// Accessibility
	label?: string; // Override aria-label

	// Enhanced customization - allows complete override of configuration
	overrideConfig?: Partial<ButtonConfiguration>;
	customVariant?: ButtonVariant; // For backward compatibility
	customClassName?: string; // Additional custom styling
}

const UnifiedButton = forwardRef<
	HTMLButtonElement,
	UnifiedButtonProps
>(
	(
		{
			kind,
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
			className = '',
			onClick,
			overrideConfig = {},
			customVariant,
			customClassName = '',
			...props
		},
		ref
	) => {
		// Get base configuration and apply overrides
		const config: ButtonConfiguration = {
			...BUTTON_CONFIGURATIONS[kind],
			...overrideConfig,
			// Support legacy customVariant prop
			...(customVariant && { variant: customVariant }),
		};

		// Determine content with priority: explicit props > config defaults
		const displayIcon = icon || config.icon;

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

		const displayText =
			text ||
			word ||
			children ||
			label ||
			config.defaultText;
		const ariaLabel =
			label ||
			config.ariaLabel ||
			(typeof displayText === 'string' ? displayText : (
				'Button'
			));

		// Build comprehensive className with proper styling
		const combinedClassName = [
			styles.baseButton, // Base button styles
			styles[`button-${config.variant}`], // Variant styles (button-primary, button-secondary, etc.)
			styles[`button-${config.size}`], // Size styles (button-small, button-medium, button-large)
			className,
			config.className,
			customClassName,
			isSelected && styles.selected,
			isActive && styles.active,
			isLocked && styles.locked,
			burnSuspect && styles.burnSuspect,
			isBurned && styles.burned,
		]
			.filter(Boolean)
			.join(' ');

		// Handle specialized behaviors with configuration-driven approach
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
					{displayIcon &&
						config.iconPosition !== 'right' && (
							<span className={styles.leftIcon}>
								{displayIcon}
							</span>
						)}
					{config.iconPosition !== 'only' &&
						displayText && <span>{displayText}</span>}
					{displayIcon &&
						config.iconPosition === 'right' && (
							<span className={styles.rightIcon}>
								{displayIcon}
							</span>
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
					disabled={isLocked}
					{...props}
				>
					{kind === 'friends-toggle' ?
						friendsToggleContent
					:	displayIcon}
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
				disabled={isLocked}
				{...props}
			>
				{config.iconPosition === 'left' && displayIcon && (
					<span className={styles.leftIcon}>
						{displayIcon}
					</span>
				)}
				{displayText && <span>{displayText}</span>}
				{config.iconPosition === 'right' && displayIcon && (
					<span className={styles.rightIcon}>
						{displayIcon}
					</span>
				)}
			</button>
		);
	}
);

UnifiedButton.displayName = 'UnifiedButton';

export default UnifiedButton;
