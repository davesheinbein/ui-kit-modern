import React, { forwardRef, memo } from 'react';
import {
	ProgressKind,
	ProgressConfiguration,
	ProgressStep,
	getProgressConfig,
} from './configurations';
import styles from './Progress.module.scss';

export interface UnifiedProgressProps {
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

const UnifiedProgress = forwardRef<
	HTMLDivElement,
	UnifiedProgressProps
>(
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

		// Render different progress types
		const renderSpinner = () => (
			<div className={styles.progress__spinner}>
				<div
					className={styles.progress__spinner_circle}
				></div>
			</div>
		);

		const renderDotsLoader = () => (
			<div className={styles.progress__dots}>
				<span className={styles.progress__dot}></span>
				<span className={styles.progress__dot}></span>
				<span className={styles.progress__dot}></span>
			</div>
		);

		const renderLinearProgress = () => (
			<div className={styles.progress__track}>
				<div
					className={styles.progress__fill}
					style={{
						width:
							finalConfig.indeterminate ? '30%' : (
								`${percentage}%`
							),
						height:
							finalConfig.thickness ?
								`${finalConfig.thickness}px`
							:	undefined,
						backgroundColor: finalConfig.color,
						animationDuration:
							finalConfig.duration ?
								`${finalConfig.duration}ms`
							:	undefined,
					}}
				></div>
			</div>
		);

		const renderCircularProgress = () => {
			const radius = 45;
			const circumference = 2 * Math.PI * radius;
			const strokeDashoffset =
				finalConfig.indeterminate ? 0 : (
					circumference - (percentage / 100) * circumference
				);

			return (
				<div className={styles.progress__circular}>
					<svg
						width='100'
						height='100'
						viewBox='0 0 100 100'
					>
						<circle
							cx='50'
							cy='50'
							r={radius}
							fill='none'
							stroke={
								finalConfig.backgroundColor ||
								'var(--color-background-secondary)'
							}
							strokeWidth={finalConfig.thickness}
						/>
						<circle
							cx='50'
							cy='50'
							r={radius}
							fill='none'
							stroke={
								finalConfig.color || 'var(--color-primary)'
							}
							strokeWidth={finalConfig.thickness}
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							strokeLinecap='round'
							className={
								finalConfig.indeterminate ?
									styles.progress__circular_indeterminate
								:	''
							}
						/>
					</svg>
					{finalConfig.showPercentage && (
						<div className={styles.progress__percentage}>
							{Math.round(percentage)}%
						</div>
					)}
				</div>
			);
		};

		const renderStepProgress = () => (
			<div className={styles.progress__steps}>
				{finalConfig.steps?.map((step, index) => (
					<div
						key={step.id}
						className={[
							styles.progress__step,
							index <= currentStep &&
								styles['progress__step--completed'],
							index === currentStep &&
								styles['progress__step--active'],
							step.status === 'error' &&
								styles['progress__step--error'],
						]
							.filter(Boolean)
							.join(' ')}
					>
						<div className={styles.progress__step_marker}>
							{step.icon || index + 1}
						</div>
						<div className={styles.progress__step_content}>
							<div className={styles.progress__step_label}>
								{step.label}
							</div>
							{step.description && (
								<div
									className={
										styles.progress__step_description
									}
								>
									{step.description}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		);

		const renderSkeletonLoader = () => (
			<div className={styles.progress__skeleton}>
				<div
					className={styles.progress__skeleton_line}
				></div>
				<div
					className={styles.progress__skeleton_line}
				></div>
				<div
					className={styles.progress__skeleton_line}
				></div>
			</div>
		);

		const renderProgressContent = () => {
			switch (finalConfig.kind) {
				case 'loading-spinner':
					return renderSpinner();
				case 'dots-loader':
				case 'bounce-loader':
				case 'pulse-loader':
					return renderDotsLoader();
				case 'circular-progress':
				case 'radial-progress':
					return renderCircularProgress();
				case 'step-progress':
				case 'multi-step':
					return renderStepProgress();
				case 'skeleton-loader':
					return renderSkeletonLoader();
				default:
					return renderLinearProgress();
			}
		};

		const renderLabel = () => {
			if (
				!finalConfig.label &&
				!finalConfig.description &&
				!finalConfig.showPercentage &&
				!finalConfig.showValue
			) {
				return null;
			}

			return (
				<div className={styles.progress__header}>
					{finalConfig.label && (
						<div className={styles.progress__label}>
							{finalConfig.label}
						</div>
					)}

					{(finalConfig.showPercentage ||
						finalConfig.showValue) && (
						<div className={styles.progress__value}>
							{finalConfig.showPercentage &&
								`${Math.round(percentage)}%`}
							{finalConfig.showValue &&
								` (${value}/${max})`}
						</div>
					)}
				</div>
			);
		};

		return (
			<div
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
				{renderLabel()}

				<div className={styles.progress__content}>
					{renderProgressContent()}
				</div>

				{finalConfig.description && (
					<div className={styles.progress__description}>
						{finalConfig.description}
					</div>
				)}

				{children && (
					<div className={styles.progress__custom}>
						{children}
					</div>
				)}
			</div>
		);
	}
);

UnifiedProgress.displayName = 'UnifiedProgress';
export default memo(UnifiedProgress);
