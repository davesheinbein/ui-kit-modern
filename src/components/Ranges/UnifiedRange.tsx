import React, {
	forwardRef,
	useState,
	useCallback,
} from 'react';
import { RangeConfiguration } from './configurations';
import './Range.module.scss';

export interface UnifiedRangeProps {
	'configuration': RangeConfiguration;
	'value'?: number | number[];
	'defaultValue'?: number | number[];
	'onChange'?: (value: number | number[]) => void;
	'onChangeComplete'?: (value: number | number[]) => void;
	'label'?: string;
	'helpText'?: string;
	'error'?: string;
	'className'?: string;
	'disabled'?: boolean;
	'readOnly'?: boolean;
	'required'?: boolean;
	'min'?: number;
	'max'?: number;
	'step'?: number;
	'marks'?: Record<number, string> | boolean;
	'name'?: string;
	'id'?: string;
	'aria-label'?: string;
	'aria-describedby'?: string;
}

export const UnifiedRange = forwardRef<
	HTMLInputElement,
	UnifiedRangeProps
>(
	(
		{
			configuration,
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
		const [internalValue, setInternalValue] = useState<
			number | number[]
		>(
			value ??
				defaultValue ??
				(configuration.range ?
					[configuration.min, configuration.max / 2]
				:	configuration.min)
		);
		const [isDragging, setIsDragging] = useState(false);
		const [showTooltip, setShowTooltip] = useState(false);

		const currentValue = value ?? internalValue;
		const finalMin = min ?? configuration.min;
		const finalMax = max ?? configuration.max;
		const finalStep = step ?? configuration.step;

		const handleChange = useCallback(
			(newValue: number | number[]) => {
				setInternalValue(newValue);
				onChange?.(newValue);
			},
			[onChange]
		);

		const handleMouseDown = useCallback(() => {
			setIsDragging(true);
			if (configuration.showTooltip) {
				setShowTooltip(true);
			}
		}, [configuration.showTooltip]);

		const handleMouseUp = useCallback(() => {
			setIsDragging(false);
			setShowTooltip(false);
			onChangeComplete?.(currentValue);
		}, [onChangeComplete, currentValue]);

		const handleInputChange = (
			event: React.ChangeEvent<HTMLInputElement>
		) => {
			if (disabled || readOnly) return;

			const newValue = parseFloat(event.target.value);
			handleChange(newValue);
		};

		const getTrackStyle = () => {
			if (
				configuration.range &&
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
			if (!configuration.marks && !marks) return null;

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
				<div className='range-marks'>
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
							<div
								key={markValue}
								className='range-mark'
								style={{ left: `${percent}%` }}
							>
								<div className='range-mark-dot' />
								{configuration.showLabels && (
									<div className='range-mark-label'>
										{label}
									</div>
								)}
							</div>
						);
					})}
				</div>
			);
		};

		const renderTooltip = () => {
			if (!configuration.showTooltip && !showTooltip)
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
				<div
					className='range-tooltip'
					style={{ left: `${percent}%` }}
				>
					{Array.isArray(currentValue) ?
						`${currentValue[0]} - ${currentValue[1]}`
					:	currentValue}
				</div>
			);
		};

		const containerClasses = [
			'range-container',
			`range-${configuration.variant}`,
			`range-${configuration.size}`,
			`range-${configuration.style}`,
			`range-${configuration.orientation}`,
			configuration.state !== 'default' &&
				`range-${configuration.state}`,
			disabled && 'range-disabled',
			readOnly && 'range-readonly',
			isDragging && 'range-dragging',
			error && 'range-error',
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div className={containerClasses}>
				{label && (
					<label htmlFor={id} className='range-label'>
						{label}
						{required && (
							<span className='range-required'>*</span>
						)}
					</label>
				)}

				<div className='range-wrapper'>
					<div
						className='range-track'
						style={getTrackStyle()}
					>
						<input
							ref={ref}
							type='range'
							className='range-input'
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

						{configuration.range &&
							Array.isArray(currentValue) && (
								<input
									type='range'
									className='range-input range-input-high'
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
					</div>

					{renderMarks()}
					{renderTooltip()}

					{configuration.showValue && (
						<div className='range-value'>
							{Array.isArray(currentValue) ?
								`${currentValue[0]} - ${currentValue[1]}`
							:	currentValue}
						</div>
					)}
				</div>

				{helpText && !error && (
					<div className='range-help-text'>{helpText}</div>
				)}

				{error && (
					<div className='range-error-text'>{error}</div>
				)}
			</div>
		);
	}
);

UnifiedRange.displayName = 'UnifiedRange';
