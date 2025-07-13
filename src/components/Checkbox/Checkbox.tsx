import React, {
	useContext,
	forwardRef,
	useRef,
} from 'react';
import { Wrapper } from '../Wrappers';
import { CHECKBOX_CONFIGURATIONS } from './configurations';
import { ThemePaletteContext } from '../Providers';
import styles from './checkbox.module.scss';
import ThemeSwitch from './Sub/ThemeSwitch';
import FlipSwitch from './Sub/FlipSwitch';
import NebulaCheckbox from './Sub/NebulaCheckbox';
import { handleRipple } from './Sub/utils';
import { CheckboxProps } from './Sub/types';
import CheckboxIcon from './Sub/CheckboxIcon';
import CheckboxLabel from './Sub/CheckboxLabel';
import CheckboxHelper from './Sub/CheckboxHelper';
import { useDarkModeCheckbox } from './Sub/useDarkModeCheckbox';
import {
	getContainerClasses,
	getInputClasses,
} from './Sub/classNames';
import { normalizeProps } from './Sub/normalizeProps';

const Checkbox = forwardRef<
	HTMLInputElement,
	CheckboxProps
>(
	(
		{
			kind = 'checkbox',
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
		const config = {
			...CHECKBOX_CONFIGURATIONS[kind],
			...configuration,
		};

		const themePaletteContext = useContext(
			ThemePaletteContext
		);
		const { finalChecked, finalOnChange } =
			useDarkModeCheckbox(
				checked,
				onChange,
				kind,
				darkModeContext
			);

		const {
			effectiveLabelPosition,
			effectiveSize,
			effectiveVariant,
		} = normalizeProps(
			labelPosition,
			config,
			size,
			variant
		);

		const containerClasses = getContainerClasses(
			config,
			effectiveSize,
			effectiveVariant,
			animated,
			className,
			disabled,
			fullWidth
		);
		const inputClasses = getInputClasses();

		const labelRef = useRef<HTMLLabelElement>(null);
		const onRipple = (
			e: React.MouseEvent<HTMLInputElement>
		) => handleRipple(e, labelRef, styles.ripple);

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
				<label className={containerClasses} ref={labelRef}>
					{effectiveLabelPosition === 'left' && (
						<CheckboxLabel
							label={label}
							disabled={disabled}
						/>
					)}
					<input
						ref={ref}
						type='checkbox'
						className={inputClasses}
						checked={finalChecked}
						onChange={finalOnChange}
						disabled={disabled}
						{...props}
						onClick={onRipple}
					/>
					<CheckboxIcon
						icon={config.icon}
						checked={!!finalChecked}
					/>
					{effectiveLabelPosition === 'right' && (
						<CheckboxLabel
							label={label}
							disabled={disabled}
						/>
					)}
				</label>
				<CheckboxHelper
					error={error}
					helperText={helperText}
				/>
			</Wrapper>
		);
	}
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
export default Checkbox;

// TODO: Replace all native <input type="checkbox"> usages with <Checkbox {...props} /> from Checkbox.tsx.
// Replace all native <input>, <select>, <option> with custom components as per the rules above.
