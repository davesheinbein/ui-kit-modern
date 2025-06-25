import React, {
	forwardRef,
	useEffect,
	useCallback,
} from 'react';
import { Wrapper } from '../Wrappers';
import classNames from 'classnames';
import {
	SWITCH_CONFIGURATIONS,
	ExtendedSwitchKind,
	SwitchProps,
	SwitchConfiguration,
} from './configurations';
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
	kind?: ExtendedSwitchKind;
	configuration?: Partial<SwitchConfiguration>;
	[key: string]: any;
}

export function createSwitch(
	props: SwitchProps & React.RefAttributes<HTMLDivElement>
) {
	const {
		kind,
		checked,
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
		...rest
	} = props;
	const baseConfig =
		SWITCH_CONFIGURATIONS[kind as ExtendedSwitchKind] ||
		SWITCH_CONFIGURATIONS.toggle;
	const finalConfig: SwitchConfiguration = {
		...baseConfig,
		...configuration,
	};
	if (disabled) finalConfig.state = 'disabled';
	if (error) finalConfig.state = 'error';
	if (required) finalConfig.required = true;
	return (
		<Switch
			checked={checked}
			defaultChecked={defaultChecked}
			onChange={onChange}
			label={label}
			onLabel={onLabel}
			offLabel={offLabel}
			helpText={helpText}
			error={error}
			className={className}
			disabled={disabled}
			required={required}
			name={name}
			id={id}
			configuration={finalConfig}
			{...rest}
		/>
	);
}

export const Switch = forwardRef<
	HTMLDivElement,
	SwitchProps
>(
	(
		{
			kind,
			configuration,
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

		let finalConfig = configuration as SwitchConfiguration;
		if (kind) {
			const baseConfig =
				SWITCH_CONFIGURATIONS[kind as ExtendedSwitchKind] ||
				SWITCH_CONFIGURATIONS.toggle;
			finalConfig = {
				...baseConfig,
				...configuration,
			};
		}

		const containerClasses = classNames(
			styles.switchContainer,
			styles[`variant-${finalConfig.variant}`],
			styles[`size-${finalConfig.size}`],
			styles[`style-${finalConfig.style}`],
			styles[`radius-${finalConfig.borderRadius}`],
			{
				[styles.checked]: currentChecked,
				[styles.disabled]:
					disabled || finalConfig.state === 'disabled',
				[styles.error]:
					error || finalConfig.state === 'error',
				[styles.animated]: finalConfig.animated,
			},
			finalConfig.customStyles?.container,
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
						{(required || finalConfig.required) && (
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
							animationDuration: `${finalConfig.animationDuration}ms`,
						}}
					/>
					<label
						htmlFor={id}
						className={styles.switchLabel}
					>
						<Wrapper className={styles.switchTrack}>
							<Wrapper className={styles.switchThumb} />
						</Wrapper>
						{finalConfig.showLabels &&
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
