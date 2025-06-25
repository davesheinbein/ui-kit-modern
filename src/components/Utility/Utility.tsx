import React, {
	forwardRef,
	memo,
	useEffect,
	useRef,
	useId,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from '../Wrappers';
import {
	setComponentState,
	cleanupComponent,
	selectComponentState,
} from '../../store/slices/uiSlice';
import { Button } from '../Button';
import styles from './Utility.module.scss';
import {
	UtilityKind,
	UtilitySize,
	UtilityVariant,
	UtilityPlacement,
	UtilityAction,
	UtilityConfiguration,
	getUtilityConfig,
} from './configurations';

export interface UtilityProps {
	kind: UtilityKind;
	children?: React.ReactNode;
	className?: string;
	componentId?: string;

	// Content overrides
	label?: string;
	description?: string;
	icon?: React.ReactNode;

	// Behavior overrides
	placement?: UtilityConfiguration['placement'];
	trigger?: UtilityConfiguration['trigger'];
	delay?: number;
	dismissible?: boolean;
	interactive?: boolean;

	// State overrides
	active?: boolean;
	disabled?: boolean;
	loading?: boolean;

	// Rating/Stepper specific
	value?: number;
	maxValue?: number;
	currentStep?: number;
	totalSteps?: number;

	// Actions overrides
	actions?: UtilityAction[];

	// Styling overrides
	variant?: UtilityConfiguration['variant'];
	size?: UtilityConfiguration['size'];
	color?: string;
	backgroundColor?: string;
	borderRadius?: string;

	// Events
	onClick?: () => void;
	onDismiss?: () => void;
	onValueChange?: (value: number) => void;
	onStepChange?: (step: number) => void;
}

const Utility = forwardRef<HTMLDivElement, UtilityProps>(
	(
		{
			kind = 'tooltip',
			children,
			className = '',
			componentId,
			label,
			description,
			icon,
			placement,
			trigger,
			delay,
			dismissible,
			interactive,
			active,
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
			...rest
		},
		ref
	) => {
		const config = getUtilityConfig(kind);

		// Generate unique component ID for Redux state isolation
		const uniqueId = useId();
		const utilityComponentId =
			componentId || `utility-${uniqueId}`;

		// Redux state management
		const dispatch = useDispatch();

		// Initialize component state on mount
		useEffect(() => {
			dispatch(
				setComponentState({
					componentId: utilityComponentId,
					updates: {
						isLoading: false,
						isVisible: false,
						isExpanded: false,
						isDragging: false,
						isHovered: false,
						isFocused: false,
						error: null,
						data: null,
					},
				})
			);

			// Cleanup on unmount
			return () => {
				dispatch(cleanupComponent(utilityComponentId));
			};
		}, [dispatch, utilityComponentId]);

		// Get state from Redux
		const componentState =
			useSelector(
				selectComponentState(utilityComponentId)
			) || {};

		const isVisible = componentState?.isVisible || false;
		const isHovered = componentState?.isHovered || false;

		// Handle hover timeout locally (since it's ephemeral)
		const hoverTimeoutRef = useRef<ReturnType<
			typeof setTimeout
		> | null>(null);
		const containerRef = useRef<HTMLDivElement>(null);

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
					dispatch(
						setComponentState({
							componentId: utilityComponentId,
							updates: { isVisible: true },
						})
					);
				}, finalConfig.delay || 0);
				hoverTimeoutRef.current = timeout;
			}
		};

		const handleMouseLeave = () => {
			if (finalConfig.trigger === 'hover') {
				if (hoverTimeoutRef.current)
					clearTimeout(hoverTimeoutRef.current);
				dispatch(
					setComponentState({
						componentId: utilityComponentId,
						updates: { isVisible: false },
					})
				);
			}
		};

		const handleClick = () => {
			if (finalConfig.trigger === 'click') {
				dispatch(
					setComponentState({
						componentId: utilityComponentId,
						updates: { isVisible: !isVisible },
					})
				);
			}
			onClick?.();
		};

		const handleDismiss = () => {
			dispatch(
				setComponentState({
					componentId: utilityComponentId,
					updates: { isVisible: false },
				})
			);
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

				case kind === 'stepper' || kind === 'wizard-steps':
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

// ===================== STATIC HELPERS AND PRESETS (formerly factory) =====================

// DRY helper to create a Utility component with a config object
export function createUtility(
	config: UtilityConfiguration & Partial<UtilityProps>
) {
	return React.forwardRef<
		HTMLDivElement,
		Partial<UtilityProps>
	>((props, ref) => (
		<Utility ref={ref} {...config} {...props} />
	));
}

// DRY helper to create a Utility component from a kind
export function createUtilityFromKind(kind: UtilityKind) {
	const config = getUtilityConfig(kind);
	return createUtility(config);
}

// Pre-configured utility components (static helpers)
export const UtilityComponents = {
	Tooltip: createUtilityFromKind('tooltip'),
	Popover: createUtilityFromKind('popover'),
	DropdownMenu: createUtilityFromKind('dropdown-menu'),
	ContextMenu: createUtilityFromKind('context-menu'),
	ModalOverlay: createUtilityFromKind('modal-overlay'),
	Divider: createUtilityFromKind('divider'),
	Separator: createUtilityFromKind('separator'),
	Spacer: createUtilityFromKind('spacer'),
	SectionBreak: createUtilityFromKind('section-break'),
	Tag: createUtilityFromKind('tag'),
	Chip: createUtilityFromKind('chip'),
	Badge: createUtilityFromKind('badge'),
	Label: createUtilityFromKind('label'),
	Pill: createUtilityFromKind('pill'),
	StatusIndicator: createUtilityFromKind(
		'status-indicator'
	),
	Stepper: createUtilityFromKind('stepper'),
	Breadcrumb: createUtilityFromKind('breadcrumb'),
	Pagination: createUtilityFromKind('pagination'),
	WizardSteps: createUtilityFromKind('wizard-steps'),
	RatingStars: createUtilityFromKind('rating-stars'),
	RatingHearts: createUtilityFromKind('rating-hearts'),
	ThumbsRating: createUtilityFromKind('thumbs-rating'),
	NumericRating: createUtilityFromKind('numeric-rating'),
	FeedbackScale: createUtilityFromKind('feedback-scale'),
	Container: createUtilityFromKind('container'),
	GridItem: createUtilityFromKind('grid-item'),
	FlexItem: createUtilityFromKind('flex-item'),
	Stack: createUtilityFromKind('stack'),
	InlineStack: createUtilityFromKind('inline-stack'),
};

// Export types for external usage
export type {
	UtilityKind,
	UtilitySize,
	UtilityVariant,
	UtilityPlacement,
	UtilityAction,
	UtilityConfiguration,
};
