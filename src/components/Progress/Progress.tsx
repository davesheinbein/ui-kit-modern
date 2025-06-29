import React, { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './progress.module.scss';
import {
	getProgressConfig,
	ProgressKind,
	ProgressSize,
	ProgressVariant,
	ProgressAnimation,
	ProgressStep,
	ProgressConfiguration,
} from './configurations';

export interface ProgressProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind?: ProgressKind;
	value?: number; // 0-100
	steps?: ProgressStep[];
	size?: ProgressSize;
	variant?: ProgressVariant;
	animation?: ProgressAnimation;
	label?: string;
	description?: string;
	showPercentage?: boolean;
	showValue?: boolean;
	indeterminate?: boolean;
	striped?: boolean;
	animated?: boolean;
	thickness?: number;
	orientation?: 'horizontal' | 'vertical';
	className?: string;
	color?: string;
	backgroundColor?: string;
	// ...other ProgressConfiguration props
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
	(
		{
			kind = 'linear-progress',
			value = 0,
			steps,
			size,
			variant,
			animation,
			label,
			description,
			showPercentage,
			showValue,
			indeterminate,
			striped,
			animated,
			thickness,
			orientation,
			className,
			color,
			backgroundColor,
			...rest
		},
		ref
	) => {
		const config = getProgressConfig(kind);

		// Merge props with config defaults
		const merged = {
			...config,
			steps: steps ?? config.steps,
			size: size ?? config.size,
			variant: variant ?? config.variant,
			animation: animation ?? config.animation,
			label: label ?? config.label,
			description: description ?? config.description,
			showPercentage:
				showPercentage ?? config.showPercentage,
			showValue: showValue ?? config.showValue,
			indeterminate: indeterminate ?? config.indeterminate,
			striped: striped ?? config.striped,
			animated: animated ?? config.animated,
			thickness: thickness ?? config.thickness,
			orientation: orientation ?? config.orientation,
			color: color ?? config.color,
			backgroundColor:
				backgroundColor ?? config.backgroundColor,
			className: className ?? config.className,
		};

		const {
			steps: mergedSteps,
			size: mergedSize,
			variant: mergedVariant,
			animation: mergedAnimation,
			label: mergedLabel,
			description: mergedDescription,
			showPercentage: mergedShowPercentage,
			showValue: mergedShowValue,
			indeterminate: mergedIndeterminate,
			striped: mergedStriped,
			animated: mergedAnimated,
			thickness: mergedThickness,
			orientation: mergedOrientation,
			color: mergedColor,
			backgroundColor: mergedBackgroundColor,
			className: mergedClassName,
		} = merged;

		const percent = Math.max(0, Math.min(100, value ?? 0));

		// Classnames
		const rootClass = clsx(
			styles.progress,
			styles[`progress--${mergedSize}`],
			styles[`progress--${mergedVariant}`],
			{
				[styles['progress--indeterminate']]:
					mergedIndeterminate,
				[styles['progress--striped']]: mergedStriped,
				[styles['progress--animated']]: mergedAnimated,
				[styles['progress--vertical']]:
					mergedOrientation === 'vertical',
			},
			mergedClassName
		);

		// Renderers for each kind
		function renderLinear() {
			return (
				<div
					className={styles.progress__track}
					style={{
						height: mergedThickness,
						backgroundColor: mergedBackgroundColor,
					}}
				>
					<div
						className={styles.progress__fill}
						style={{
							width:
								mergedIndeterminate ? '100%' : (
									`${percent}%`
								),
							backgroundColor: mergedColor,
						}}
					/>
				</div>
			);
		}

		function renderCircular() {
			const sizePx =
				mergedSize === 'xs' ? 24
				: mergedSize === 'sm' ? 32
				: mergedSize === 'lg' ? 64
				: mergedSize === 'xl' ? 80
				: 48;
			const stroke = mergedThickness ?? 4;
			const radius = (sizePx - stroke) / 2;
			const circ = 2 * Math.PI * radius;
			const offset =
				mergedIndeterminate ?
					circ * 0.7
				:	circ - (percent / 100) * circ;
			return (
				<div
					className={styles.progress__circular}
					style={{ width: sizePx, height: sizePx }}
				>
					<svg width={sizePx} height={sizePx}>
						<circle
							cx={sizePx / 2}
							cy={sizePx / 2}
							r={radius}
							stroke={mergedBackgroundColor || '#f3f4f6'}
							strokeWidth={stroke}
							fill='none'
						/>
						<circle
							cx={sizePx / 2}
							cy={sizePx / 2}
							r={radius}
							stroke={mergedColor || '#3b82f6'}
							strokeWidth={stroke}
							fill='none'
							strokeDasharray={circ}
							strokeDashoffset={offset}
							style={{
								transition: 'stroke-dashoffset 0.3s ease',
							}}
						/>
					</svg>
					{mergedShowPercentage && !mergedIndeterminate && (
						<span className={styles.progress__percentage}>
							{percent}%
						</span>
					)}
				</div>
			);
		}

		function renderSpinner() {
			return (
				<div className={styles.progress__spinner}>
					<div
						className={styles.progress__spinner_circle}
					/>
				</div>
			);
		}

		function renderDots() {
			return (
				<div className={styles.progress__dots}>
					<div className={styles.progress__dot} />
					<div className={styles.progress__dot} />
					<div className={styles.progress__dot} />
				</div>
			);
		}

		function renderSkeleton() {
			return (
				<div className={styles.progress__skeleton}>
					<div className={styles.progress__skeleton_line} />
					<div className={styles.progress__skeleton_line} />
					<div className={styles.progress__skeleton_line} />
				</div>
			);
		}

		function renderSteps() {
			const stepsArr =
				mergedSteps && mergedSteps.length > 0 ?
					mergedSteps
				:	[];
			return (
				<div className={styles.progress__steps}>
					{stepsArr.map((step, idx) => {
						const statusClass =
							step.status === 'completed' ?
								styles['progress__step--completed']
							: step.status === 'active' ?
								styles['progress__step--active']
							: step.status === 'error' ?
								styles['progress__step--error']
							:	'';
						return (
							<div
								key={step.id}
								className={clsx(
									styles.progress__step,
									statusClass
								)}
							>
								<div
									className={styles.progress__step_marker}
								>
									{step.icon || idx + 1}
								</div>
								<div
									className={styles.progress__step_content}
								>
									<div
										className={styles.progress__step_label}
									>
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
						);
					})}
				</div>
			);
		}

		function renderContent() {
			if (
				kind === 'linear-progress' ||
				kind === 'upload-progress' ||
				kind === 'download-progress' ||
				kind === 'sync-progress' ||
				kind === 'level-progress' ||
				kind === 'achievement-progress' ||
				kind === 'completion-progress' ||
				kind === 'health-bar' ||
				kind === 'experience-bar' ||
				kind === 'installation-progress' ||
				kind === 'backup-progress' ||
				kind === 'processing-progress' ||
				kind === 'battery-indicator'
			) {
				return renderLinear();
			}
			if (
				kind === 'circular-progress' ||
				kind === 'radial-progress'
			) {
				return renderCircular();
			}
			if (kind === 'loading-spinner') {
				return renderSpinner();
			}
			if (
				kind === 'dots-loader' ||
				kind === 'pulse-loader' ||
				kind === 'bounce-loader'
			) {
				return renderDots();
			}
			if (kind === 'skeleton-loader') {
				return renderSkeleton();
			}
			if (
				kind === 'step-progress' ||
				kind === 'multi-step'
			) {
				return renderSteps();
			}
			return null;
		}

		return (
			<div ref={ref} className={rootClass} {...rest}>
				{(mergedLabel ||
					mergedShowValue ||
					mergedShowPercentage) && (
					<div className={styles.progress__header}>
						{mergedLabel && (
							<span className={styles.progress__label}>
								{mergedLabel}
							</span>
						)}
						{mergedShowValue && !mergedIndeterminate && (
							<span className={styles.progress__value}>
								{value}
							</span>
						)}
						{mergedShowPercentage &&
							!mergedIndeterminate && (
								<span className={styles.progress__value}>
									{percent}%
								</span>
							)}
					</div>
				)}
				{mergedDescription && (
					<div className={styles.progress__description}>
						{mergedDescription}
					</div>
				)}
				<div className={styles.progress__content}>
					{renderContent()}
				</div>
			</div>
		);
	}
);

Progress.displayName = 'Progress';
export default Progress;
