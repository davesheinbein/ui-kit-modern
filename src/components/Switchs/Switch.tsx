import React, {
	forwardRef,
	useEffect,
	useCallback,
} from 'react';
import { Wrapper } from '../Wrappers';
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

export interface SwitchProps {
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
	[key: string]: any;
}

export const Switch = forwardRef<
	HTMLDivElement,
	SwitchProps
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
		const finalComponentId =
			componentId || `switch-${Date.now()}`;
		const dispatch = useAppDispatch();
		const switchState = useAppSelector((state) => {
			const uiState = state.ui as any;
			return selectSwitchState(finalComponentId)({
				ui: uiState,
			});
		});
		const isControlled = controlledChecked !== undefined;
		const currentChecked =
			isControlled ?
				controlledChecked
			:	(switchState?.checked ?? defaultChecked ?? false);

		useEffect(() => {
			dispatch(
				setSwitchState({
					switchId: finalComponentId,
					checked:
						defaultChecked ?? controlledChecked ?? false,
					disabled: disabled ?? false,
				})
			);
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
			onChange?.(newChecked);
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
			<Wrapper
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{label && (
					<Wrapper className={styles.fieldLabel}>
						{label}
						{(required || configuration.required) && (
							<span className={styles.requiredMark}>*</span>
						)}
					</Wrapper>
				)}
				<Wrapper className={styles.switchWrapper}>
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
						<Wrapper className={styles.switchTrack}>
							<Wrapper className={styles.switchThumb} />
						</Wrapper>
						{configuration.showLabels &&
							(onLabel || offLabel) && (
								<Wrapper className={styles.switchLabels}>
									{currentChecked ? onLabel : offLabel}
								</Wrapper>
							)}
					</label>
				</Wrapper>
				{helpText && !error && (
					<Wrapper className={styles.helpText}>
						{helpText}
					</Wrapper>
				)}
				{error && (
					<Wrapper className={styles.errorText}>
						{error}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Switch.displayName = 'Switch';

export default Switch;
