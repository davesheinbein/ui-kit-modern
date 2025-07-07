import React, {
	forwardRef,
	memo,
	useState,
	useRef,
	useCallback,
	useEffect,
	useId,
} from 'react';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';
import {
	getUtilityConfig,
	type UtilityKind,
	type UtilitySize,
	type UtilityVariant,
	type UtilityPlacement,
	type UtilityConfiguration,
} from './configurations';
import styles from './Utility.module.scss';

// ==========================================
// Comprehensive Utility Props Interface
// ==========================================

export interface UtilityAction {
	id?: string;
	label: string;
	onClick?: () => void;
	icon?: React.ReactNode;
	disabled?: boolean;
	variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}

export interface UtilityProps
	extends React.HTMLAttributes<HTMLDivElement> {
	// === CORE PROPS ===
	/** Type of utility component */
	kind?: UtilityKind;

	/** Content */
	children?: React.ReactNode;
	/** Label text */
	label?: string;
	/** Description text */
	description?: string;
	/** Icon element */
	icon?: React.ReactNode;

	// === LAYOUT PROPS ===
	/** Size variant */
	size?: UtilitySize;
	/** Visual variant */
	variant?: UtilityVariant;
	/** Placement/position */
	placement?: UtilityPlacement;

	// === BEHAVIOR PROPS ===
	/** Show/hide trigger */
	trigger?: 'hover' | 'click' | 'focus' | 'manual';
	/** Delay before showing (ms) */
	delay?: number;
	/** Is dismissible */
	dismissible?: boolean;
	/** Is interactive */
	interactive?: boolean;
	/** Is active/open */
	active?: boolean;
	/** Visible state */
	visible?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Loading state */
	loading?: boolean;

	// === RATING PROPS ===
	/** Current rating value */
	value?: number;
	/** Maximum rating value */
	maxValue?: number;
	/** Allow half ratings */
	allowHalf?: boolean;
	/** Read-only rating */
	readOnly?: boolean;

	// === STEPPER PROPS ===
	/** Current step */
	currentStep?: number;
	/** Total steps */
	totalSteps?: number;
	/** Step labels */
	stepLabels?: string[];
	/** Completed steps */
	completedSteps?: number[];

	// === STYLING PROPS ===
	/** Text color */
	color?: string;
	/** Background color */
	backgroundColor?: string;
	/** Border radius */
	borderRadius?: string | number;
	/** Custom CSS classes */
	className?: string;
	/** Custom styles */
	style?: React.CSSProperties;

	// === ACTION PROPS ===
	/** Action buttons */
	actions?: UtilityAction[];
	/** Show close button */
	showCloseButton?: boolean;

	// === EVENT PROPS ===
	/** Click handler */
	onClick?: () => void;
	/** Dismiss handler */
	onDismiss?: () => void;
	/** Value change handler (for ratings) */
	onValueChange?: (value: number) => void;
	/** Step change handler */
	onStepChange?: (step: number) => void;
	/** Visibility change handler */
	onVisibilityChange?: (visible: boolean) => void;

	// === ACCESSIBILITY PROPS ===
	/** ARIA label */
	ariaLabel?: string;
	/** ARIA described by */
	ariaDescribedBy?: string;
	/** Role override */
	role?: string;

	// === RESPONSIVE PROPS ===
	/** Hide on mobile */
	hideOnMobile?: boolean;
	/** Hide on tablet */
	hideOnTablet?: boolean;
	/** Hide on desktop */
	hideOnDesktop?: boolean;

	// === TEST PROPS ===
	/** Test ID */
	testId?: string;
}

const Utility = forwardRef<HTMLDivElement, UtilityProps>(
	(
		{
			kind = 'tooltip',
			children,
			className = '',
			label,
			description,
			icon,
			placement,
			trigger = 'hover',
			delay = 0,
			dismissible,
			interactive,
			active,
			visible,
			disabled,
			loading,
			value = 0,
			maxValue = 5,
			currentStep = 0,
			totalSteps = 3,
			actions,
			variant,
			size,
			color,
			backgroundColor,
			borderRadius,
			onClick,
			onDismiss,
			onValueChange,
			onStepChange,
			onVisibilityChange,
			...rest
		},
		ref
	) => {
		const config = getUtilityConfig(kind);

		// Local state management (replacing Redux)
		const [isVisible, setIsVisible] = useState(
			visible ?? active ?? false
		);
		const [isHovered, setIsHovered] = useState(false);

		// Handle hover timeout locally
		const hoverTimeoutRef = useRef<ReturnType<
			typeof setTimeout
		> | null>(null);
		const containerRef = useRef<HTMLDivElement>(null);

		// Update visibility when prop changes
		useEffect(() => {
			if (visible !== undefined) {
				setIsVisible(visible);
			}
		}, [visible]);

		// Merge configuration with props
		const finalConfig = {
			...config,
			label: label ?? config.label,
			description: description ?? config.description,
			icon: icon ?? config.icon,
			placement: placement ?? config.placement,
			trigger: trigger ?? config.trigger,
			delay: delay ?? config.delay,
			dismissible: dismissible ?? config.dismissible,
			interactive: interactive ?? config.interactive,
			active: active ?? config.active,
			disabled: disabled ?? config.disabled,
			loading: loading ?? config.loading,
			actions: actions ?? config.actions,
			variant: variant ?? config.variant,
			size: size ?? config.size,
			color: color ?? config.color,
			backgroundColor:
				backgroundColor ?? config.backgroundColor,
			borderRadius: borderRadius ?? config.borderRadius,
		};

		// Generate class names
		const baseClasses = [
			styles.utility,
			styles[`utility--${finalConfig.kind}`],
			styles[`utility--${finalConfig.variant}`],
			styles[`utility--${finalConfig.size}`],
			finalConfig.placement &&
				styles[`utility--${finalConfig.placement}`],
			finalConfig.active && styles['utility--active'],
			finalConfig.disabled && styles['utility--disabled'],
			finalConfig.loading && styles['utility--loading'],
			finalConfig.interactive &&
				styles['utility--interactive'],
			finalConfig.dismissible &&
				styles['utility--dismissible'],
			isVisible && styles['utility--visible'],
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Handle tooltip/popover visibility
		const handleMouseEnter = () => {
			if (finalConfig.trigger === 'hover') {
				if (hoverTimeoutRef.current)
					clearTimeout(hoverTimeoutRef.current);
				const timeout = setTimeout(() => {
					setIsVisible(true);
					onVisibilityChange?.(true);
				}, finalConfig.delay || 0);
				hoverTimeoutRef.current = timeout;
			}
			setIsHovered(true);
		};

		const handleMouseLeave = () => {
			if (finalConfig.trigger === 'hover') {
				if (hoverTimeoutRef.current)
					clearTimeout(hoverTimeoutRef.current);
				setIsVisible(false);
				onVisibilityChange?.(false);
			}
			setIsHovered(false);
		};

		const handleClick = () => {
			if (finalConfig.trigger === 'click') {
				const newVisible = !isVisible;
				setIsVisible(newVisible);
				onVisibilityChange?.(newVisible);
			}
			onClick?.();
		};

		const handleDismiss = () => {
			setIsVisible(false);
			onVisibilityChange?.(false);
			onDismiss?.();
		};

		// Handle rating changes
		const handleRatingClick = (newValue: number) => {
			if (!finalConfig.interactive || finalConfig.disabled)
				return;
			onValueChange?.(newValue);
		};

		// Handle step changes
		const handleStepClick = (step: number) => {
			if (!finalConfig.interactive || finalConfig.disabled)
				return;
			onStepChange?.(step);
		};

		// Render tooltip/popover content
		const renderOverlayContent = () => {
			if (kind === 'tooltip') {
				return (
					<Wrapper className={styles.utility__tooltip}>
						{finalConfig.label}
					</Wrapper>
				);
			}

			if (kind === 'popover') {
				return (
					<Wrapper className={styles.utility__popover}>
						{finalConfig.label && (
							<Wrapper
								className={styles.utility__popover_title}
							>
								{finalConfig.label}
							</Wrapper>
						)}
						{finalConfig.description && (
							<Wrapper
								className={styles.utility__popover_content}
							>
								{finalConfig.description}
							</Wrapper>
						)}
						{children}
					</Wrapper>
				);
			}

			return children;
		};

		// Render tag/chip content
		const renderTagContent = () => (
			<>
				{finalConfig.icon && (
					<span className={styles.utility__icon}>
						{finalConfig.icon}
					</span>
				)}
				<span className={styles.utility__label}>
					{finalConfig.label || children}
				</span>
				{finalConfig.dismissible && (
					<Button
						kind='danger'
						className={styles.utility__dismiss}
						onClick={handleDismiss}
						aria-label='Dismiss'
					>
						×
					</Button>
				)}
			</>
		);

		// Render rating stars
		const renderStars = () => {
			const stars = [];
			for (let i = 1; i <= maxValue; i++) {
				stars.push(
					<Button
						key={i}
						kind='ghost'
						className={[
							styles.utility__star,
							i <= value && styles['utility__star--filled'],
						]
							.filter(Boolean)
							.join(' ')}
						onClick={() => handleRatingClick(i)}
						disabled={finalConfig.disabled}
						aria-label={`Rate ${i} stars`}
					>
						{kind === 'rating-hearts' ?
							'♥'
						: kind === 'thumbs-rating' ?
							'👍'
						:	'★'}
					</Button>
				);
			}
			return stars;
		};

		// Render stepper
		const renderStepper = () => {
			const steps = [];
			for (let i = 0; i < totalSteps; i++) {
				steps.push(
					<Wrapper
						key={i}
						className={[
							styles.utility__step,
							i <= currentStep &&
								styles['utility__step--completed'],
							i === currentStep &&
								styles['utility__step--active'],
						]
							.filter(Boolean)
							.join(' ')}
						onClick={() => handleStepClick(i)}
					>
						<Wrapper
							className={styles.utility__step_marker}
						></Wrapper>
						{i < totalSteps - 1 && (
							<Wrapper
								className={styles.utility__step_connector}
							></Wrapper>
						)}
					</Wrapper>
				);
			}
			return steps;
		};

		// Render divider
		const renderDivider = () => (
			<>
				{finalConfig.label && (
					<span className={styles.utility__divider_label}>
						{finalConfig.label}
					</span>
				)}
			</>
		);

		// Render content based on kind
		const renderContent = () => {
			switch (true) {
				case kind === 'tooltip' || kind === 'popover':
					return renderOverlayContent();

				case kind.includes('tag') ||
					kind.includes('chip') ||
					kind.includes('badge') ||
					kind.includes('pill'):
					return renderTagContent();

				case kind.includes('rating'):
					return (
						<Wrapper className={styles.utility__rating}>
							{renderStars()}
						</Wrapper>
					);

				case kind === 'stepper':
				case kind === 'wizard-steps':
					return (
						<Wrapper className={styles.utility__stepper}>
							{renderStepper()}
						</Wrapper>
					);

				case kind.includes('divider') ||
					kind.includes('separator'):
					return renderDivider();

				case kind.includes('spacer'):
					return null;

				default:
					return (
						<>
							{finalConfig.icon && (
								<span className={styles.utility__icon}>
									{finalConfig.icon}
								</span>
							)}
							{finalConfig.label && (
								<span className={styles.utility__label}>
									{finalConfig.label}
								</span>
							)}
							{children}
						</>
					);
			}
		};

		const containerStyle: React.CSSProperties = {
			color: finalConfig.color,
			backgroundColor: finalConfig.backgroundColor,
			borderRadius: finalConfig.borderRadius,
		};

		return (
			<Wrapper
				ref={ref}
				className={baseClasses}
				style={containerStyle}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
				role={
					finalConfig.interactive ? 'button' : undefined
				}
				tabIndex={finalConfig.interactive ? 0 : undefined}
				aria-disabled={finalConfig.disabled}
				{...rest}
			>
				{renderContent()}
			</Wrapper>
		);
	}
);

Utility.displayName = 'Utility';
export default memo(Utility);

// Export types for external usage
export type {
	UtilityKind,
	UtilitySize,
	UtilityVariant,
	UtilityPlacement,
	UtilityConfiguration,
};
