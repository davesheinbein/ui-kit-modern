import React, {
	forwardRef,
	useState,
	useEffect,
} from 'react';
import classNames from 'classnames';
import { SwitchConfiguration } from './configurations';
import styles from './Switch.module.scss';

export interface UnifiedSwitchProps {
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	label?: string;
	onLabel?: string;
	offLabel?: string;
	helpText?: string;
	error?: string;
	className?: string;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	id?: string;
	configuration: SwitchConfiguration;
}

export const UnifiedSwitch = forwardRef<
	HTMLDivElement,
	UnifiedSwitchProps
>(
	(
		{
			checked: controlledChecked,
			defaultChecked,
			onChange,
			label,
			onLabel,
			offLabel,
			helpText,
			error,
			className,
			disabled,
			required,
			name,
			id,
			configuration,
			...props
		},
		ref
	) => {
		const [internalChecked, setInternalChecked] =
			useState<boolean>(
				controlledChecked || defaultChecked || false
			);

		const isControlled = controlledChecked !== undefined;
		const currentChecked =
			isControlled ? controlledChecked : internalChecked;

		useEffect(() => {
			if (isControlled) {
				setInternalChecked(controlledChecked);
			}
		}, [controlledChecked, isControlled]);

		const handleToggle = () => {
			if (disabled) return;

			const newChecked = !currentChecked;

			if (!isControlled) {
				setInternalChecked(newChecked);
			}

			onChange?.(newChecked);
		};

		const containerClasses = classNames(
			styles.switchContainer,
			styles[`variant-${configuration.variant}`],
			styles[`size-${configuration.size}`],
			styles[`style-${configuration.style}`],
			styles[`radius-${configuration.borderRadius}`],
			{
				[styles.checked]: currentChecked,
				[styles.disabled]:
					disabled || configuration.state === 'disabled',
				[styles.error]:
					error || configuration.state === 'error',
				[styles.animated]: configuration.animated,
			},
			configuration.customStyles?.container,
			className
		);

		return (
			<div
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{label && (
					<div className={styles.fieldLabel}>
						{label}
						{(required || configuration.required) && (
							<span className={styles.requiredMark}>*</span>
						)}
					</div>
				)}

				<div className={styles.switchWrapper}>
					<input
						type='checkbox'
						id={id}
						name={name}
						checked={currentChecked}
						onChange={handleToggle}
						disabled={disabled}
						className={styles.switchInput}
						style={{
							animationDuration: `${configuration.animationDuration}ms`,
						}}
					/>
					<label
						htmlFor={id}
						className={styles.switchLabel}
					>
						<div className={styles.switchTrack}>
							<div className={styles.switchThumb} />
						</div>

						{configuration.showLabels &&
							(onLabel || offLabel) && (
								<div className={styles.switchLabels}>
									{currentChecked ? onLabel : offLabel}
								</div>
							)}
					</label>
				</div>

				{helpText && !error && (
					<div className={styles.helpText}>{helpText}</div>
				)}

				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
			</div>
		);
	}
);

UnifiedSwitch.displayName = 'UnifiedSwitch';

export default UnifiedSwitch;
