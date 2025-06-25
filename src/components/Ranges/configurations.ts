/**
 * Range Configuration System
 * Defines all range/slider types and their configurations in a DRY manner
 */

export type RangeVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'custom';

export type RangeSize = 'small' | 'medium' | 'large';

export type RangeState =
	| 'default'
	| 'hover'
	| 'active'
	| 'disabled'
	| 'readonly';

export type ExtendedRangeKind =
	| 'range'
	| 'slider'
	| 'dual-range'
	| 'stepped-range'
	| 'color-picker'
	| 'volume-control'
	| 'brightness-control'
	| 'progress-slider'
	| 'temperature-control'
	| 'custom';

export type RangeStyle =
	| 'default'
	| 'modern'
	| 'minimal'
	| 'rounded'
	| 'flat';

export interface RangeConfiguration {
	variant: RangeVariant;
	size: RangeSize;
	state: RangeState;
	style: RangeStyle;
	showLabels: boolean;
	showTicks: boolean;
	showTooltip: boolean;
	showValue: boolean;
	orientation: 'horizontal' | 'vertical';
	step: number;
	min: number;
	max: number;
	marks?: boolean;
	range?: boolean; // For dual-range sliders
	customStyles?: {
		track?: string;
		thumb?: string;
		fill?: string;
		labels?: string;
		tooltip?: string;
	};
}

export interface RangeProps {
	'kind': ExtendedRangeKind;
	'value'?: number | number[];
	'defaultValue'?: number | number[];
	'onChange'?: (value: number | number[]) => void;
	'onChangeComplete'?: (value: number | number[]) => void;
	'label'?: string;
	'placeholder'?: string;
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
	'configuration'?: Partial<RangeConfiguration>;
}

export const RANGE_CONFIGURATIONS: Record<
	ExtendedRangeKind,
	RangeConfiguration
> = {
	'range': {
		variant: 'default',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: true,
		showTicks: false,
		showTooltip: false,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
	'slider': {
		variant: 'primary',
		size: 'medium',
		state: 'default',
		style: 'modern',
		showLabels: true,
		showTicks: false,
		showTooltip: true,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
	'dual-range': {
		variant: 'primary',
		size: 'medium',
		state: 'default',
		style: 'modern',
		showLabels: true,
		showTicks: false,
		showTooltip: true,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: true,
	},
	'stepped-range': {
		variant: 'secondary',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: true,
		showTicks: true,
		showTooltip: false,
		showValue: true,
		orientation: 'horizontal',
		step: 10,
		min: 0,
		max: 100,
		marks: true,
		range: false,
	},
	'color-picker': {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'flat',
		showLabels: false,
		showTicks: false,
		showTooltip: true,
		showValue: false,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 360,
		marks: false,
		range: false,
	},
	'volume-control': {
		variant: 'primary',
		size: 'small',
		state: 'default',
		style: 'minimal',
		showLabels: false,
		showTicks: false,
		showTooltip: true,
		showValue: false,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
	'brightness-control': {
		variant: 'secondary',
		size: 'small',
		state: 'default',
		style: 'minimal',
		showLabels: false,
		showTicks: false,
		showTooltip: true,
		showValue: false,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
	'progress-slider': {
		variant: 'success',
		size: 'medium',
		state: 'default',
		style: 'rounded',
		showLabels: true,
		showTicks: false,
		showTooltip: false,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
	'temperature-control': {
		variant: 'warning',
		size: 'medium',
		state: 'default',
		style: 'rounded',
		showLabels: true,
		showTicks: true,
		showTooltip: true,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: -10,
		max: 40,
		marks: true,
		range: false,
	},
	'custom': {
		variant: 'custom',
		size: 'medium',
		state: 'default',
		style: 'default',
		showLabels: true,
		showTicks: false,
		showTooltip: false,
		showValue: true,
		orientation: 'horizontal',
		step: 1,
		min: 0,
		max: 100,
		marks: false,
		range: false,
	},
};
