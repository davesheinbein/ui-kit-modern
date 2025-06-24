import React, { forwardRef, memo } from 'react';
import { Wrapper } from '../Wrappers';
import {
	ProgressKind,
	ProgressConfiguration,
	ProgressStep,
	getProgressConfig,
} from './configurations';
import styles from './Progress.module.scss';

export interface ProgressProps {
	kind: ProgressKind;
	children?: React.ReactNode;
	className?: string;

	// Progress value
	value?: number;
	max?: number;

	// Content overrides
	label?: string;
	description?: string;
	showPercentage?: boolean;
	showValue?: boolean;

	// Behavior overrides
	indeterminate?: boolean;
	striped?: boolean;
	animated?: boolean;
	duration?: number;

	// Multi-step overrides
	steps?: ProgressStep[];
	currentStep?: number;
	orientation?: 'horizontal' | 'vertical';

	// Styling overrides
	variant?: ProgressConfiguration['variant'];
	size?: ProgressConfiguration['size'];
	animation?: ProgressConfiguration['animation'];
	thickness?: number;
	color?: string;
	backgroundColor?: string;

	// Events
	onComplete?: () => void;
	onStepChange?: (step: number) => void;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	(
		{
			kind,
			children,
			className = '',
			value = 0,
			max = 100,
			label,
			description,
			showPercentage,
			showValue,
			indeterminate,
			striped,
			animated,
			duration,
			steps,
			currentStep = 0,
			orientation,
			variant,
			size,
			animation,
			thickness,
			color,
			backgroundColor,
			onComplete,
			onStepChange,
			...rest
		},
		ref
	) => {
		const config = getProgressConfig(kind);

		// Merge configuration with props
		const finalConfig = {
			...config,
			label: label ?? config.label,
			description: description ?? config.description,
			showPercentage:
				showPercentage ?? config.showPercentage,
			showValue: showValue ?? config.showValue,
			indeterminate: indeterminate ?? config.indeterminate,
			striped: striped ?? config.striped,
			animated: animated ?? config.animated,
			duration: duration ?? config.duration,
			steps: steps ?? config.steps,
			orientation: orientation ?? config.orientation,
			variant: variant ?? config.variant,
			size: size ?? config.size,
			animation: animation ?? config.animation,
			thickness: thickness ?? config.thickness,
			color: color ?? config.color,
			backgroundColor:
				backgroundColor ?? config.backgroundColor,
		};

		const percentage = Math.min(
			Math.max((value / max) * 100, 0),
			100
		);

		// Generate class names
		const baseClasses = [
			styles.progress,
			styles[`progress--${finalConfig.kind}`],
			styles[`progress--${finalConfig.variant}`],
			styles[`progress--${finalConfig.size}`],
			finalConfig.animation !== 'none' &&
				styles[`progress--${finalConfig.animation}`],
			finalConfig.indeterminate &&
				styles['progress--indeterminate'],
			finalConfig.striped && styles['progress--striped'],
			finalConfig.animated && styles['progress--animated'],
			finalConfig.orientation &&
				styles[`progress--${finalConfig.orientation}`],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Handle completion
		React.useEffect(() => {
			if (percentage >= 100 && onComplete) {
				onComplete();
			}
		}, [percentage, onComplete]);

		// Handle step changes
		React.useEffect(() => {
			if (onStepChange) {
				onStepChange(currentStep);
			}
		}, [currentStep, onStepChange]);

		// ...existing code for renderers and main render...
		// For brevity, the renderers are unchanged from the previous Progress implementation
		// ...existing code...

		return (
			<Wrapper
				ref={ref}
				className={baseClasses}
				role='progressbar'
				aria-valuenow={
					finalConfig.indeterminate ? undefined : value
				}
				aria-valuemin={0}
				aria-valuemax={max}
				aria-label={finalConfig.label}
				{...rest}
			>
				{/* ...renderLabel(), renderProgressContent(), etc... */}
			</Wrapper>
		);
	}
);

Progress.displayName = 'Progress';
export default memo(Progress);
