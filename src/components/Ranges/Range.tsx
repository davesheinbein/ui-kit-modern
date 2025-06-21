import React, { forwardRef } from 'react';
import { UnifiedRange } from './UnifiedRange';
import { RANGE_CONFIGURATIONS } from './configurations';
import type { RangeFactoryProps } from './configurations';

export interface RangeProps
	extends Omit<RangeFactoryProps, 'kind'> {
	variant?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger';
	size?: 'small' | 'medium' | 'large';
	style?:
		| 'default'
		| 'modern'
		| 'minimal'
		| 'rounded'
		| 'flat';
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
			...props
		},
		ref
	) => {
		const baseConfig = RANGE_CONFIGURATIONS.range;
		const finalConfig = {
			...baseConfig,
			variant,
			size,
			style,
			...configuration,
		};

		return (
			<UnifiedRange
				ref={ref}
				configuration={finalConfig}
				{...props}
			/>
		);
	}
);

Range.displayName = 'Range';
