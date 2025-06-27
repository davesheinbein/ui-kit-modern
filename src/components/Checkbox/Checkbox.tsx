import React, { useContext, forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import {
	CheckboxConfiguration,
	ExtendedCheckboxKind,
	CHECKBOX_CONFIGURATIONS,
} from './configurations';
import { ThemePaletteContext } from '../Providers';
import styles from './checkbox.module.scss';
import Icons from '../Icons/Icons';
import { FlipSwitch as ExternalFlipSwitch } from '../FlipSwitch/FlipSwitch';
import { Nebula as ExternalNebula } from '../Nebula/Nebula';

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

// Main checkbox props interface
export interface CheckboxProps extends BaseCheckboxProps {
	kind?: CheckboxKind; // Optional for backward compatibility
	configuration?: Partial<CheckboxConfiguration>;
	// Special props for specific checkbox types
	darkModeContext?: boolean; // For dark-mode-toggle
}

const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps
>(
	(
		{
			kind = 'checkbox', // Default to 'checkbox' for backward compatibility
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
			// Check if the theme context has dark mode properties
			const hasDarkMode = 'darkMode' in themePaletteContext;
			if (hasDarkMode) {
				finalChecked = (themePaletteContext as any)
					.darkMode;
				finalOnChange = () =>
					(themePaletteContext as any).setDarkMode(
						!(themePaletteContext as any).darkMode
					);
			}
		}

		// Determine label position
		const effectiveLabelPosition =
			labelPosition || config.labelPosition;
		const effectiveSize = size || config.size;
		const effectiveVariant = variant || config.variant;

		// Build container classes
		const containerClasses = [
			styles.Checkbox,
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

		// ThemeSwitch: visually rich dark mode toggle (inline, no separate file)
		const themeSwitchStyles = `
		.switch { font-size: 17px; position: relative; display: inline-block; width: 4em; height: 2.2em; border-radius: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
		.switch input { opacity: 0; width: 0; height: 0; }
		.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #2a2a2a; transition: 0.4s; border-radius: 30px; overflow: hidden; }
		.slider:before { position: absolute; content: ''; height: 1.2em; width: 1.2em; border-radius: 20px; left: 0.5em; bottom: 0.5em; transition: 0.4s; transition-timing-function: cubic-bezier(0.81,-0.04,0.38,1.5); box-shadow: inset 8px -4px 0px 0px #fff; }
		.switch input:checked + .slider { background-color: #00a6ff; }
		.switch input:checked + .slider:before { transform: translateX(1.8em); box-shadow: inset 15px -4px 0px 15px #ffcf48; }
		.switch input:checked + .slider .star { opacity: 0; }
		.switch input:checked + .slider .cloud { opacity: 1; }
		.star { background-color: #fff; border-radius: 50%; position: absolute; width: 5px; height: 5px; transition: all 0.4s; }
		.star.star_1 { left: 2.5em; top: 0.5em; }
		.star.star_2 { left: 2.2em; top: 1.2em; }
		.star.star_3 { left: 3em; top: 0.9em; }
		.cloud { width: 3.5em; position: absolute; bottom: -1.4em; left: -1.1em; opacity: 0; transition: all 0.4s; }
		`;

		const ThemeSwitch: React.FC<{
			id?: string;
			checked?: boolean;
			onChange?: (checked: boolean) => void;
		}> = ({
			id = 'theme-switch',
			checked = false,
			onChange,
		}) => {
			React.useEffect(() => {
				if (
					!document.getElementById(
						'theme-switch-inline-style'
					)
				) {
					const style = document.createElement('style');
					style.id = 'theme-switch-inline-style';
					style.innerHTML = themeSwitchStyles;
					document.head.appendChild(style);
				}
			}, []);
			return (
				<label className='switch'>
					<input
						id={id}
						type='checkbox'
						checked={checked}
						onChange={(e) => onChange?.(e.target.checked)}
					/>
					<span className='slider'>
						<div className='star star_1'></div>
						<div className='star star_2'></div>
						<div className='star star_3'></div>
						<svg
							viewBox='0 0 16 16'
							className='cloud_1 cloud'
						>
							<path
								transform='matrix(.77976 0 0 .78395-299.99-418.63)'
								fill='#fff'
								d='m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925'
							></path>
						</svg>
					</span>
				</label>
			);
		};

		// FlipSwitch: use external FlipSwitch component for 'flip-switch' kind
		const FlipSwitch: React.FC<{
			id?: string;
			checked?: boolean;
			onChange?: (checked: boolean) => void;
		}> = ({
			id = 'flip-switch',
			checked = false,
			onChange,
		}) => (
			<ExternalFlipSwitch
				id={id}
				checked={checked}
				onChange={onChange}
			/>
		);

		// NebulaCheckbox: use external Nebula component for 'Nebula' kind
		const NebulaCheckbox: React.FC<{
			id?: string;
			checked?: boolean;
			onChange?: (checked: boolean) => void;
		}> = ({
			id = 'nebula-checkbox',
			checked = false,
			onChange,
		}) => (
			<ExternalNebula id={id} checked={checked} onChange={onChange} />
		);

		// For dark mode toggle, we need special handling
		if (kind === 'dark-mode-toggle') {
			return (
				<ThemeSwitch
					id={props.id || 'theme-switch'}
					checked={!!finalChecked}
					onChange={(checked) =>
						finalOnChange &&
						finalOnChange({
							...({
								target: { checked },
							} as React.ChangeEvent<HTMLInputElement>),
						})
					}
				/>
			);
		}
		if (kind === 'flip-switch') {
			return (
				<FlipSwitch
					id={props.id || 'flip-switch'}
					checked={!!finalChecked}
					onChange={(checked) =>
						finalOnChange &&
						finalOnChange({
							...({
								target: { checked },
							} as React.ChangeEvent<HTMLInputElement>),
						})
					}
				/>
			);
		}
		if (kind === 'Nebula') {
			return (
				<NebulaCheckbox
					id={props.id || 'nebula-checkbox'}
					checked={!!finalChecked}
					onChange={(checked) =>
						finalOnChange &&
						finalOnChange({
							...({
								target: { checked },
							} as React.ChangeEvent<HTMLInputElement>),
						})
					}
				/>
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
			<Wrapper
				className={fullWidth ? styles.fullWidth : ''}
			>
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
					<Wrapper className={styles.errorText}>
						{error}
					</Wrapper>
				)}
				{helperText && (
					<Wrapper className={styles.helperText}>
						{helperText}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export default Checkbox;
