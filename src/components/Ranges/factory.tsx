import React, { forwardRef } from 'react';
import {
	RANGE_CONFIGURATIONS,
	ExtendedRangeKind,
	RangeConfiguration,
	RangeFactoryProps,
} from './configurations';
import { UnifiedRange } from './UnifiedRange';

export const RangeFactory = forwardRef<
	HTMLInputElement,
	RangeFactoryProps
>(
	(
		{
			kind,
			value,
			defaultValue,
			onChange,
			onChangeComplete,
			label,
			placeholder,
			helpText,
			error,
			className,
			disabled,
			readOnly,
			required,
			min,
			max,
			step,
			marks,
			name,
			id,
			'aria-label': ariaLabel,
			'aria-describedby': ariaDescribedby,
			configuration,
			...props
		},
		ref
	) => {
		const baseConfig =
			RANGE_CONFIGURATIONS[kind] ||
			RANGE_CONFIGURATIONS.range;
		const finalConfig: RangeConfiguration = {
			...baseConfig,
			...configuration,
		};

		return (
			<UnifiedRange
				ref={ref}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onChangeComplete={onChangeComplete}
				label={label}
				helpText={helpText}
				error={error}
				className={className}
				disabled={disabled}
				readOnly={readOnly}
				required={required}
				min={min}
				max={max}
				step={step}
				marks={marks}
				name={name}
				id={id}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedby}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

RangeFactory.displayName = 'RangeFactory';

export default RangeFactory;

export type {
	RangeFactoryProps,
	ExtendedRangeKind as RangeKind,
	RangeConfiguration,
} from './configurations';
