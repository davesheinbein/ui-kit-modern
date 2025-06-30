import React, { forwardRef, useEffect, useId } from 'react';
import { Wrapper } from '../Wrappers';
import { Card } from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
	RadioConfiguration,
	ExtendedRadioKind,
	RADIO_CONFIGURATIONS,
} from './configurations';
import {
	setRadioState,
	cleanupComponent,
	selectRadioState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import styles from './Radio.module.scss';
export interface RadioOption {
	value: string;
	label: string;
	meta?: {
		description?: string;
		icon?: React.ReactNode;
		image?: string;
		color?: string;
		imageShape?: 'circle' | 'rounded' | 'square';
	};
	disabled?: boolean;
	className?: string;
}

export interface RadioProps {
	kind?: ExtendedRadioKind;
	name: string;
	options: RadioOption[];
	selected?: string;
	onChange?: (value: string) => void;
	label?: string;
	footerText?: string;
	footerType?: 'help' | 'error';
	className?: string;
	disabled?: boolean;
	required?: boolean;
	configuration?: Partial<
		RadioConfiguration & {
			labelPosition?: 'left' | 'right';
		}
	>;
}
export const Radio = forwardRef<HTMLDivElement, RadioProps>(
	(
		{
			name,
			options,
			selected,
			onChange,
			label,
			footerText,
			footerType = 'help',
			className,
			disabled,
			required,
			kind = 'standard',
			configuration = {},
			...props
		},
		ref
	) => {
		const uniqueId = useId();
		const radioComponentId = `radio-${uniqueId}`;

		const dispatch = useDispatch();

		useEffect(() => {
			dispatch(
				setRadioState({
					radioId: radioComponentId,
					updates: {
						internalValue: selected,
					},
				})
			);

			return () => {
				dispatch(cleanupComponent(radioComponentId));
			};
		}, [dispatch, radioComponentId, selected]);

		const radioState = useSelector(
			selectRadioState(radioComponentId)
		);

		const internalValue = radioState?.internalValue;

		const isControlled = selected !== undefined;
		const currentValue =
			isControlled ? selected : internalValue;

		useEffect(() => {
			if (isControlled) {
				dispatch(
					setRadioState({
						radioId: radioComponentId,
						updates: { internalValue: selected },
					})
				);
			}
		}, [
			selected,
			isControlled,
			dispatch,
			radioComponentId,
		]);

		const handleChange = (optionValue: string) => {
			if (disabled) return;

			const newValue =
				(
					configuration.allowDeselect &&
					currentValue === optionValue
				) ?
					undefined
				:	optionValue;

			if (!isControlled) {
				dispatch(
					setRadioState({
						radioId: radioComponentId,
						updates: { internalValue: newValue },
					})
				);
			}

			onChange?.(newValue || '');
		};

		const containerClasses = classNames(
			styles.radioContainer,
			styles[`variant-${configuration.variant}`],
			styles[`size-${configuration.size}`],
			styles[`style-${configuration.style}`],
			styles[`alignment-${configuration.alignment}`],
			styles[`spacing-${configuration.borderRadius}`],
			styles[`radius-${configuration.borderRadius}`],
			{
				[styles.disabled]:
					disabled || configuration.state === 'disabled',
				[styles.error]: footerType === 'error',
				[styles.required]:
					required || configuration.required,
			},
			configuration.customStyles?.container,
			className
		);

		const renderOption = (
			option: RadioOption,
			index: number
		) => {
			const isCardVariant =
				kind === 'card-selection' || kind === 'image-radio';

			// For plan-selector, always use Wrapper, not Card
			const OptionWrapper = isCardVariant ? Card : Wrapper;
			const optionWrapperProps =
				isCardVariant ?
					{
						className: styles.radioOption,
						variant: 'outlined' as const,
						size: 'medium' as const,
					}
				:	{ className: styles.radioOption };

			const isSelected = currentValue === option.value;
			const isDisabled = disabled || option.disabled;

			const optionClasses = classNames(
				styles.radioOption,
				styles[`variant-${configuration.variant}`],
				styles[`size-${configuration.size}`],
				styles[`style-${configuration.style}`],
				styles[`alignment-${configuration.alignment}`],
				styles[`spacing-${configuration.spacing}`],
				styles[`radius-${configuration.borderRadius}`],
				{
					[styles.selected]: isSelected,
					[styles.disabled]: isDisabled,
					[styles.hasIcon]: !!option.meta?.icon,
					[styles.hasImage]: !!option.meta?.image,
					[styles.hasDescription]:
						!!option.meta?.description &&
						configuration.showDescriptions,
				},
				configuration.customStyles?.option,
				option.className
			);

			const inputClasses = classNames(
				styles.radioInput,
				configuration.customStyles?.input
			);

			const labelClasses = classNames(
				styles.radioLabel,
				configuration.customStyles?.label
			);

			const descriptionClasses = classNames(
				styles.radioDescription,
				configuration.customStyles?.description
			);

			// Render all meta fields: icon, image, color, description
			const metaContent = (
				<>
					{option.meta?.icon && (
						<span className={styles.optionIcon}>
							{option.meta.icon}
						</span>
					)}
					{option.meta?.image && (
						<span
							className={classNames(styles.optionImage, {
								[styles['image--circle']]:
									option.meta.imageShape === 'circle',
								[styles['image--rounded']]:
									option.meta.imageShape === 'rounded',
								[styles['image--square']]:
									option.meta.imageShape === 'square',
							})}
						>
							<img
								src={option.meta?.image}
								alt={option.label}
							/>
						</span>
					)}
					{option.meta?.color && (
						<span
							style={{
								display: 'inline-block',
								width: 16,
								height: 16,
								borderRadius: '50%',
								background: option.meta.color,
								marginRight: 8,
								border: '1px solid #ccc',
								verticalAlign: 'middle',
							}}
							title={option.meta.color}
						/>
					)}
				</>
			);

			return (
				<OptionWrapper
					key={option.value}
					{...optionWrapperProps}
				>
					{configuration.labelPosition === 'left' && (
						<label
							htmlFor={`${name}-${option.value}`}
							className={labelClasses}
						>
							{configuration.showLabels && (
								<span className={styles.optionText}>
									{option.label}
								</span>
							)}
							{metaContent}
						</label>
					)}
					<input
						type='radio'
						id={`${name}-${option.value}`}
						name={name}
						value={option.value}
						checked={isSelected}
						disabled={isDisabled}
						onChange={() => handleChange(option.value)}
						className={inputClasses}
					/>
					{configuration.labelPosition !== 'left' && (
						<label
							htmlFor={`${name}-${option.value}`}
							className={labelClasses}
						>
							{metaContent}
							{configuration.showLabels && (
								<span className={styles.optionText}>
									{option.label}
								</span>
							)}
						</label>
					)}
					{option.meta?.description &&
						configuration.showDescriptions && (
							<span className={descriptionClasses}>
								{option.meta.description}
							</span>
						)}
				</OptionWrapper>
			);
		};

		const renderCustomOption = (
			option: RadioOption,
			index: number
		) => {
			const isSelected = currentValue === option.value;
			const isDisabled = disabled || option.disabled;
			return (
				<label
					key={option.value}
					className={classNames(
						styles.label,
						option.className
					)}
					style={{
						opacity: isDisabled ? 0.6 : 1,
						cursor: isDisabled ? 'not-allowed' : 'pointer',
					}}
				>
					{configuration.labelPosition === 'left' && (
						<span className={styles.text}>
							{option.label}
						</span>
					)}
					<input
						type='radio'
						name={name}
						value={option.value}
						checked={isSelected}
						disabled={isDisabled}
						onChange={() => handleChange(option.value)}
						className={classNames(
							styles.input,
							styles[`radio-input-${name}`]
						)}
					/>
					<div
						className={styles.circle}
						style={{
							borderColor: option.meta?.color || '#888',
							boxShadow:
								isSelected && option.meta?.color ?
									`0 0 0.5rem ${option.meta.color}80`
								:	undefined,
							backgroundColor:
								isSelected && option.meta?.color ?
									option.meta.color
								:	'transparent',
						}}
					/>
					{configuration.labelPosition !== 'left' && (
						<span className={styles.text}>
							{option.label}
						</span>
					)}
				</label>
			);
		};

		// Special rendering for size-selector
		if (kind === 'size-selector') {
			const sizeMap: Record<string, number> = {
				xs: 18,
				small: 24,
				s: 24,
				medium: 32,
				m: 32,
				large: 40,
				l: 40,
				xl: 48,
			};
			return (
				<Wrapper
					ref={ref}
					className={containerClasses}
					{...props}
				>
					{label && (
						<Wrapper className={styles.fieldLabel}>
							{label}
							{required && (
								<span className={styles.requiredMark}>
									*
								</span>
							)}
						</Wrapper>
					)}

					<Wrapper className={styles.optionsContainer}>
						{options.map((option, index) => {
							const visualSize =
								sizeMap[option.value] || 32;
							const isSelected =
								currentValue === option.value;
							const isDisabled =
								disabled || option.disabled;
							const label =
								option.label || option.value.toUpperCase();
							const inputClasses = classNames(
								styles.radioInput,
								configuration.customStyles?.input
							);
							const descriptionClasses = classNames(
								styles.radioDescription,
								configuration.customStyles?.description
							);
							const optionClasses = classNames(
								styles.radioOption,
								styles['sizeSelectorOption'],
								{
									[styles.selected]: isSelected,
									[styles.disabled]: isDisabled,
									[styles.hasIcon]: !!option.meta?.icon,
									[styles.hasImage]: !!option.meta?.image,
									[styles.hasDescription]:
										!!option.meta?.description &&
										configuration.showDescriptions,
								},
								configuration.customStyles?.option,
								option.className
							);
							return (
								<Wrapper
									key={option.value}
									className={optionClasses}
									center
									gap={8}
									p={12}
									style={{
										cursor:
											isDisabled ? 'not-allowed' : (
												'pointer'
											),
										opacity: isDisabled ? 0.5 : 1,
										height: 'fit-content',
									}}
									title={
										option.meta?.description ||
										option.label ||
										option.value
									}
								>
									<input
										type='radio'
										name={name}
										value={option.value}
										checked={isSelected}
										disabled={isDisabled}
										className={inputClasses}
										onChange={() =>
											!isDisabled &&
											onChange?.(option.value)
										}
										aria-label={
											option.label || option.value
										}
										style={{ display: 'none' }}
									/>
									<div
										className={classNames(
											styles['sizeCircle'],
											{
												[styles.selected]: isSelected,
												[styles.disabled]: isDisabled,
											}
										)}
										style={{
											width: visualSize,
											height: visualSize,
											borderRadius: '50%',
											background:
												isSelected ?
													'var(--color-primary, #2563eb)'
												:	'#e5e7eb',
											border:
												isSelected ?
													'2px solid var(--color-primary, #2563eb)'
												:	'1px solid #cbd5e1',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											transition: 'all 0.2s',
										}}
										aria-hidden='true'
									>
										{/* Prefer icon, then image, then label */}
										{option.meta?.icon ?
											<span
												style={{
													fontSize: Math.max(
														visualSize * 0.6,
														16
													),
													color:
														isSelected ? '#fff' : '#334155',
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
												}}
											>
												{option.meta.icon}
											</span>
										: option.meta?.image ?
											<img
												src={option.meta.image}
												alt={option.label || option.value}
												style={{
													width: visualSize * 0.7,
													height: visualSize * 0.7,
													objectFit: 'contain',
													borderRadius: '50%',
												}}
											/>
										:	<span
												style={{
													fontSize: Math.max(
														visualSize * 0.5,
														12
													),
													fontWeight: 600,
													color:
														isSelected ? '#fff' : '#334155',
												}}
											>
												{option.label ||
													option.value.toUpperCase()}
											</span>
										}
									</div>
									{option.meta?.description && (
										<span
											className={descriptionClasses}
											style={{
												fontSize: 12,
												color: '#64748b',
											}}
										>
											{option.meta.description}
										</span>
									)}
								</Wrapper>
							);
						})}
					</Wrapper>

					{footerText && (
						<Wrapper
							className={
								footerType === 'error' ?
									styles.errorText
								:	styles.helpText
							}
						>
							{footerText}
						</Wrapper>
					)}
				</Wrapper>
			);
		}

		return (
			<Wrapper
				ref={ref}
				className={containerClasses}
				{...props}
			>
				{label && (
					<Wrapper className={styles.fieldLabel}>
						{label}
						{required && (
							<span className={styles.requiredMark}>*</span>
						)}
					</Wrapper>
				)}

				<Wrapper className={styles.optionsContainer}>
					{(
						kind === 'custom' ||
						configuration.variant === 'custom'
					) ?
						options.map(renderCustomOption)
					:	options.map(renderOption)}
				</Wrapper>

				{footerText && (
					<Wrapper
						className={
							footerType === 'error' ?
								styles.errorText
							:	styles.helpText
						}
					>
						{footerText}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Radio.displayName = 'Radio';
export default Radio;

export type { ExtendedRadioKind as RadioKind };
