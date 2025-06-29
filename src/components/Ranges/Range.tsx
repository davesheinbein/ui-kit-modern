import React, {
	forwardRef,
	useCallback,
	useEffect,
} from 'react';
import { Wrapper } from '../Wrappers';
import { useSelector, useDispatch } from 'react-redux';
import { RANGE_CONFIGURATIONS } from './configurations';
import type { RangeConfiguration } from './configurations';
import './Range.module.scss';
import {
	setRangeState,
	selectRangeState,
	cleanupComponent,
} from '../../store/slices/uiSlice';
import Input from '../Inputs/Input';

export interface RangeProps {
	'value': number;
	'onChange': (value: number) => void;
	'min'?: number;
	'max'?: number;
	'step'?: number;
	'variant'?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'custom';
	'size'?: 'small' | 'medium' | 'large';
	'className'?: string;
	'style'?: React.CSSProperties;
	'aria-label'?: string;
	[key: string]: any;
}

export const Range = forwardRef<
	HTMLInputElement,
	RangeProps
>(
	(
		{
			variant = 'default',
			size = 'medium',
			style = 'default',
			configuration,
			componentId = `range-${Date.now()}-${Math.random()}`,
			value,
			defaultValue,
			onChange,
			onChangeComplete,
			label,
			helpText,
			error,
			className = '',
			disabled = false,
			readOnly = false,
			required = false,
			min,
			max,
			step,
			marks,
			name,
			id,
			'aria-label': ariaLabel,
			'aria-describedby': ariaDescribedby,
			...props
		},
		ref
	) => {
		const dispatch = useDispatch();
		const rangeState = useSelector(
			selectRangeState(componentId)
		);

		const baseConfig = RANGE_CONFIGURATIONS.range;
		const finalConfig: RangeConfiguration = {
			...baseConfig,
			variant,
			size,
			style,
			...configuration,
		};

		const initialValue =
			value ??
			defaultValue ??
			(finalConfig.range ?
				[finalConfig.min, finalConfig.max / 2]
			:	finalConfig.min);

		const internalValue = rangeState?.value ?? initialValue;
		const isDragging = rangeState?.isDragging || false;
		const showTooltip = rangeState?.showTooltip || false;

		// Initialize Redux state
		useEffect(() => {
			if (!rangeState) {
				dispatch(
					setRangeState({
						rangeId: componentId,
						updates: {
							value: initialValue,
							isDragging: false,
							showTooltip: false,
						},
					})
				);
			}

			return () => {
				dispatch(cleanupComponent(componentId));
			};
		}, [dispatch, componentId, rangeState, initialValue]);

		const currentValue = value ?? internalValue;
		const finalMin = min ?? finalConfig.min;
		const finalMax = max ?? finalConfig.max;
		const finalStep = step ?? finalConfig.step;

		const handleChange = useCallback(
			(newValue: number | number[]) => {
				dispatch(
					setRangeState({
						rangeId: componentId,
						updates: { value: newValue },
					})
				);
				onChange?.(newValue);
			},
			[onChange, dispatch, componentId]
		);

		const handleMouseDown = useCallback(() => {
			dispatch(
				setRangeState({
					rangeId: componentId,
					updates: { isDragging: true },
				})
			);
			if (finalConfig.showTooltip) {
				dispatch(
					setRangeState({
						rangeId: componentId,
						updates: { showTooltip: true },
					})
				);
			}
		}, [finalConfig.showTooltip, dispatch, componentId]);

		const handleMouseUp = useCallback(() => {
			dispatch(
				setRangeState({
					rangeId: componentId,
					updates: {
						isDragging: false,
						showTooltip: false,
					},
				})
			);
			onChangeComplete?.(currentValue);
		}, [
			onChangeComplete,
			currentValue,
			dispatch,
			componentId,
		]);

		const handleInputChange = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			if (disabled || readOnly) return;

			const newValue = parseFloat(event.target.value);
			handleChange(newValue);
		};

		const getTrackStyle = () => {
			if (
				finalConfig.range &&
				Array.isArray(currentValue)
			) {
				const [low, high] = currentValue;
				const lowPercent =
					((low - finalMin) / (finalMax - finalMin)) * 100;
				const highPercent =
					((high - finalMin) / (finalMax - finalMin)) * 100;
				return {
					background: `linear-gradient(to right, 
						var(--range-track-color) ${lowPercent}%, 
						var(--range-active-color) ${lowPercent}%, 
						var(--range-active-color) ${highPercent}%, 
						var(--range-track-color) ${highPercent}%)`,
				};
			} else {
				const percent =
					((Number(currentValue) - finalMin) /
						(finalMax - finalMin)) *
					100;
				return {
					background: `linear-gradient(to right, 
						var(--range-active-color) ${percent}%, 
						var(--range-track-color) ${percent}%)`,
				};
			}
		};

		const renderMarks = () => {
			if (!finalConfig.marks && !marks) return null;

			const markValues =
				marks === true ?
					Array.from(
						{
							length:
								Math.floor(
									(finalMax - finalMin) / finalStep
								) + 1,
						},
						(_, i) => finalMin + i * finalStep
					)
				: typeof marks === 'object' ?
					Object.keys(marks).map(Number)
				:	[];

			return (
				<Wrapper className='range-marks'>
					{markValues.map((markValue) => {
						const percent =
							((markValue - finalMin) /
								(finalMax - finalMin)) *
							100;
						const label =
							typeof marks === 'object' ?
								marks[markValue]
							:	markValue.toString();

						return (
							<Wrapper
								key={markValue}
								className='range-mark'
								style={{ left: `${percent}%` }}
							>
								<Wrapper className='range-mark-dot' />
								{finalConfig.showLabels && (
									<Wrapper className='range-mark-label'>
										{label}
									</Wrapper>
								)}
							</Wrapper>
						);
					})}
				</Wrapper>
			);
		};

		const renderTooltip = () => {
			if (!finalConfig.showTooltip && !showTooltip)
				return null;

			const percent =
				Array.isArray(currentValue) ?
					((currentValue[1] - finalMin) /
						(finalMax - finalMin)) *
					100
				:	((Number(currentValue) - finalMin) /
						(finalMax - finalMin)) *
					100;

			return (
				<Wrapper
					className='range-tooltip'
					style={{ left: `${percent}%` }}
				>
					{Array.isArray(currentValue) ?
						`${currentValue[0]} - ${currentValue[1]}`
					:	currentValue}
				</Wrapper>
			);
		};

		const containerClasses = [
			'range-container',
			`range-${finalConfig.variant}`,
			`range-${finalConfig.size}`,
			`range-${finalConfig.style}`,
			`range-${finalConfig.orientation}`,
			finalConfig.state !== 'default' &&
				`range-${finalConfig.state}`,
			disabled && 'range-disabled',
			readOnly && 'range-readonly',
			isDragging && 'range-dragging',
			error && 'range-error',
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<Wrapper className={containerClasses}>
				{label && (
					<label htmlFor={id} className='range-label'>
						{label}
						{required && (
							<span className='range-required'>*</span>
						)}
					</label>
				)}

				<Wrapper className='range-wrapper'>
					<Wrapper
						className='range-track'
						style={getTrackStyle()}
					>
						<Input
							ref={ref}
							type='range'
							className='range-input'
							kind='number'
							value={
								Array.isArray(currentValue) ?
									currentValue[0]
								:	currentValue
							}
							onChange={handleInputChange}
							onMouseDown={handleMouseDown}
							onMouseUp={handleMouseUp}
							min={finalMin}
							max={finalMax}
							step={finalStep}
							disabled={disabled}
							readOnly={readOnly}
							required={required}
							name={name}
							id={id}
							aria-label={ariaLabel || label}
							aria-describedby={ariaDescribedby}
							{...props}
						/>

						{finalConfig.range &&
							Array.isArray(currentValue) && (
								<Input
									type='range'
									className='range-input range-input-high'
									kind='number'
									value={currentValue[1]}
									onChange={(e) => {
										const newHigh = parseFloat(
											e.target.value
										);
										handleChange([
											currentValue[0],
											newHigh,
										]);
									}}
									onMouseDown={handleMouseDown}
									onMouseUp={handleMouseUp}
									min={finalMin}
									max={finalMax}
									step={finalStep}
									disabled={disabled}
									readOnly={readOnly}
								/>
							)}
					</Wrapper>

					{renderMarks()}
					{renderTooltip()}

					{finalConfig.showValue && (
						<Wrapper className='range-value'>
							{Array.isArray(currentValue) ?
								`${currentValue[0]} - ${currentValue[1]}`
							:	currentValue}
						</Wrapper>
					)}
				</Wrapper>

				{helpText && !error && (
					<Wrapper className='range-help-text'>
						{helpText}
					</Wrapper>
				)}

				{error && (
					<Wrapper className='range-error-text'>
						{error}
					</Wrapper>
				)}
			</Wrapper>
		);
	}
);

Range.displayName = 'Range';

// TODO: Replace all native <input type="range"> usages with <Range {...props} /> from Range.tsx.

export default Range;
