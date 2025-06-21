import React, {
	forwardRef,
	useEffect,
	useCallback,
} from 'react';
import classNames from 'classnames';
import { SwitchConfiguration } from './configurations';
import {
	useAppDispatch,
	useAppSelector,
} from '../../store';
import {
	setSwitchState,
	cleanupComponent,
	selectSwitchState,
} from '../../store/slices/uiSlice';
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
	componentId?: string; // For Redux state identification
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
			componentId,
			configuration,
			...props
		},
		ref
	) => {
		// Generate componentId if not provided
		const finalComponentId =
			componentId || `switch-${Date.now()}`;

		// Redux hooks
		const dispatch = useAppDispatch();
		const switchState = useAppSelector((state) => {
			const uiState = state.ui as any; // Cast to bypass type issues
			return selectSwitchState(finalComponentId)({
				ui: uiState,
			});
		});

		const isControlled = controlledChecked !== undefined;
		const currentChecked =
			isControlled ?
				controlledChecked
			:	(switchState?.checked ?? defaultChecked ?? false);

		// Initialize Redux state on mount
		useEffect(() => {
			dispatch(
				setSwitchState({
					switchId: finalComponentId,
					checked:
						defaultChecked ?? controlledChecked ?? false,
					disabled: disabled ?? false,
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(finalComponentId));
			};
		}, [
			dispatch,
			finalComponentId,
			defaultChecked,
			controlledChecked,
			disabled,
		]);

		// Update Redux when controlled checked changes
		useEffect(() => {
			if (isControlled && controlledChecked !== undefined) {
				dispatch(
					setSwitchState({
						switchId: finalComponentId,
						checked: controlledChecked,
						disabled: disabled ?? false,
					})
				);
			}
		}, [
			controlledChecked,
			isControlled,
			dispatch,
			finalComponentId,
			disabled,
		]);

		const handleToggle = useCallback(() => {
			if (disabled) return;

			const newChecked = !currentChecked;

			if (!isControlled) {
				dispatch(
					setSwitchState({
						switchId: finalComponentId,
						checked: newChecked,
						disabled: disabled ?? false,
					})
				);
			}

			// Call onChange callback
			if (onChange) {
				onChange(newChecked);
			}
		}, [
			disabled,
			currentChecked,
			isControlled,
			dispatch,
			finalComponentId,
			onChange,
		]);

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
