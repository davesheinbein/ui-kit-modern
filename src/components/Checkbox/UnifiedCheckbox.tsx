import React, { useContext, forwardRef } from 'react';
import {
	CheckboxConfiguration,
	ExtendedCheckboxKind,
	CHECKBOX_CONFIGURATIONS,
} from './CheckboxConfigurations';
import { ThemePaletteContext } from '../Providers';
import styles from './Checkbox.module.scss';

// Re-export types for convenience
export type CheckboxKind = ExtendedCheckboxKind;

// Base checkbox props interface
export interface BaseCheckboxProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		'size'
	> {
	label?: string;
	labelPosition?: 'left' | 'right' | 'none';
	size?: 'small' | 'medium' | 'large';
	variant?: 'default' | 'success' | 'warning' | 'danger';
	animated?: boolean;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
}

// Unified checkbox props
export interface UnifiedCheckboxProps
	extends BaseCheckboxProps {
	kind: CheckboxKind;
	configuration?: Partial<CheckboxConfiguration>;
	// Special props for specific checkbox types
	darkModeContext?: boolean; // For dark-mode-toggle
}

const UnifiedCheckbox = forwardRef<
	HTMLInputElement,
	UnifiedCheckboxProps
>(
	(
		{
			kind,
			configuration,
			label,
			labelPosition,
			size,
			variant,
			animated = true,
			error,
			helperText,
			fullWidth = false,
			darkModeContext = false,
			className = '',
			checked,
			onChange,
			disabled = false,
			...props
		},
		ref
	) => {
		// Get configuration for this checkbox kind
		const config = {
			...CHECKBOX_CONFIGURATIONS[kind],
			...configuration,
		};

		// Handle dark mode toggle special case
		const themePaletteContext = useContext(
			ThemePaletteContext
		);
		let finalChecked = checked;
		let finalOnChange = onChange;

		if (
			kind === 'dark-mode-toggle' &&
			darkModeContext &&
			themePaletteContext
		) {
			finalChecked = themePaletteContext.darkMode;
			finalOnChange = () =>
				themePaletteContext.setDarkMode(
					!themePaletteContext.darkMode
				);
		}

		// Determine label position
		const effectiveLabelPosition =
			labelPosition || config.labelPosition;
		const effectiveSize = size || config.size;
		const effectiveVariant = variant || config.variant;

		// Build container classes
		const containerClasses = [
			styles.unifiedCheckbox,
			styles[config.className],
			styles[`size-${effectiveSize}`],
			effectiveVariant !== 'default' ?
				styles[`variant-${effectiveVariant}`]
			:	'',
			animated || config.behavior.animated ?
				styles.animated
			:	'',
			config.styling.rounded ? styles.rounded : '',
			config.styling.shadow ? styles.shadow : '',
			config.styling.bordered ? styles.bordered : '',
			disabled ? styles.disabled : '',
			fullWidth ? styles.fullWidth : '',
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Build input classes
		const inputClasses = [styles.checkboxInput]
			.filter(Boolean)
			.join(' ');

		// Get icon for special checkbox types
		const getIcon = () => {
			if (config.icon) {
				return finalChecked ?
						config.icon.checked
					:	config.icon.unchecked;
			}
			return null;
		};

		// For dark mode toggle, we need special handling
		if (kind === 'dark-mode-toggle') {
			return (
				<label className={containerClasses}>
					<input
						ref={ref}
						type='checkbox'
						className={inputClasses}
						checked={finalChecked}
						onChange={finalOnChange}
						disabled={disabled}
						data-icon={getIcon()}
						aria-label={
							finalChecked ?
								'Switch to light mode'
							:	'Switch to dark mode'
						}
						{...props}
					/>
					{error && (
						<div className={styles.errorText}>{error}</div>
					)}
					{helperText && (
						<div className={styles.helperText}>
							{helperText}
						</div>
					)}
				</label>
			);
		}

		// Standard checkbox rendering
		const labelElement =
			label && effectiveLabelPosition !== 'none' ?
				<span
					className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ''}`}
				>
					{label}
				</span>
			:	null;

		return (
			<div className={fullWidth ? styles.fullWidth : ''}>
				<label className={containerClasses}>
					{effectiveLabelPosition === 'left' &&
						labelElement}
					<input
						ref={ref}
						type='checkbox'
						className={inputClasses}
						checked={finalChecked}
						onChange={finalOnChange}
						disabled={disabled}
						{...props}
					/>
					{effectiveLabelPosition === 'right' &&
						labelElement}
				</label>
				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
				{helperText && (
					<div className={styles.helperText}>
						{helperText}
					</div>
				)}
			</div>
		);
	}
);

UnifiedCheckbox.displayName = 'UnifiedCheckbox';

export default UnifiedCheckbox;
