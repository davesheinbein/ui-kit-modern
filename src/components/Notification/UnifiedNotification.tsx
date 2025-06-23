import React, {
	forwardRef,
	memo,
	useEffect,
	useId,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../Button';
import {
	NotificationKind,
	NotificationConfiguration,
	NotificationAction,
	getNotificationConfig,
	getDefaultIcon,
} from './configurations';
import {
	setNotificationState,
	cleanupComponent,
	selectNotificationState,
} from '../../store/slices/uiSlice';
import type { RootState } from '../../store';
import styles from './Notification.module.scss';

export interface UnifiedNotificationProps {
	kind: NotificationKind;
	componentId?: string; // For Redux state identification
	children?: React.ReactNode;
	className?: string;

	// Content
	title?: string;
	message?: string | React.ReactNode;
	icon?: React.ReactNode | string;
	image?: string;

	// Configuration overrides
	variant?: NotificationConfiguration['variant'];
	severity?: NotificationConfiguration['severity'];
	position?: NotificationConfiguration['position'];

	// Behavior
	visible?: boolean;
	autoHide?: boolean;
	duration?: number;
	persistent?: boolean;
	dismissible?: boolean;
	pauseOnHover?: boolean;

	// Actions
	actions?: NotificationAction[];
	confirmText?: string;
	cancelText?: string;

	// Styling
	showIcon?: boolean;
	showCloseButton?: boolean;
	showProgress?: boolean;

	// Animation
	enterAnimation?: NotificationConfiguration['enterAnimation'];
	exitAnimation?: NotificationConfiguration['exitAnimation'];

	// Callbacks
	onShow?: () => void;
	onHide?: () => void;
	onClick?: () => void;
	onConfirm?: () => void;
	onCancel?: () => void;
	onAction?: (action: NotificationAction) => void;
}

// ========================================
// Main Component
// ========================================

const UnifiedNotification = forwardRef<
	HTMLDivElement,
	UnifiedNotificationProps
>((props, ref) => {
	const {
		kind,
		componentId,
		children,
		className,

		// Content
		title,
		message,
		icon,
		image,

		// Configuration overrides
		variant,
		severity,
		position,

		// Behavior
		visible = true,
		autoHide,
		duration,
		persistent,
		dismissible,
		pauseOnHover,

		// Actions
		actions,
		confirmText,
		cancelText,

		// Styling
		showIcon,
		showCloseButton,
		showProgress,

		// Animation
		enterAnimation,
		exitAnimation,

		// Callbacks
		onShow,
		onHide,
		onClick,
		onConfirm,
		onCancel,
		onAction,

		...restProps
	} = props;

	// ========================================
	// Configuration Resolution
	// ========================================

	const baseConfig = getNotificationConfig(kind);
	const config: NotificationConfiguration = {
		...baseConfig,
		title: title || baseConfig.title,
		message: message || baseConfig.message,
		variant: variant || baseConfig.variant,
		severity: severity || baseConfig.severity,
		position: position || baseConfig.position,
		autoHide:
			autoHide !== undefined ? autoHide : (
				baseConfig.autoHide
			),
		duration:
			duration !== undefined ? duration : (
				baseConfig.duration
			),
		persistent:
			persistent !== undefined ? persistent : (
				baseConfig.persistent
			),
		dismissible:
			dismissible !== undefined ? dismissible : (
				baseConfig.dismissible
			),
		pauseOnHover:
			pauseOnHover !== undefined ? pauseOnHover : (
				baseConfig.pauseOnHover
			),
		actions: actions || baseConfig.actions,
		confirmText: confirmText || baseConfig.confirmText,
		cancelText: cancelText || baseConfig.cancelText,
		showIcon:
			showIcon !== undefined ? showIcon : (
				baseConfig.showIcon
			),
		showCloseButton:
			showCloseButton !== undefined ? showCloseButton : (
				baseConfig.showCloseButton
			),
		showProgress:
			showProgress !== undefined ? showProgress : (
				baseConfig.showProgress
			),
		enterAnimation:
			enterAnimation || baseConfig.enterAnimation,
		exitAnimation:
			exitAnimation || baseConfig.exitAnimation,
	};

	// ========================================
	// Redux State Management
	// ========================================

	// Generate unique component ID for Redux state isolation
	const uniqueId = useId();
	const notificationComponentId =
		componentId || `notification-${uniqueId}`;

	const dispatch = useDispatch();

	// Initialize component state on mount
	useEffect(() => {
		dispatch(
			setNotificationState({
				notificationId: notificationComponentId,
				updates: {
					isVisible: visible,
					isPaused: false,
					progress: 100,
				},
			})
		);

		// Cleanup on unmount
		return () => {
			dispatch(cleanupComponent(notificationComponentId));
		};
	}, [dispatch, notificationComponentId, visible]);

	// Get state from Redux
	const notificationState = useSelector(
		selectNotificationState(notificationComponentId)
	);

	const isVisible = notificationState?.isVisible ?? visible;
	const isPaused = notificationState?.isPaused ?? false;
	const progress = notificationState?.progress ?? 100;

	// ========================================
	// Auto-hide Effect
	// ========================================

	useEffect(() => {
		if (!config.autoHide || !isVisible || isPaused) return;

		const timer = setTimeout(() => {
			handleHide();
		}, config.duration);

		return () => clearTimeout(timer);
	}, [
		config.autoHide,
		config.duration,
		isVisible,
		isPaused,
	]);

	// Progress bar effect
	useEffect(() => {
		if (
			!config.autoHide ||
			!config.showProgress ||
			!isVisible ||
			isPaused
		)
			return;

		const interval = setInterval(() => {
			dispatch(
				setNotificationState({
					notificationId: notificationComponentId,
					updates: {
						progress: Math.max(
							0,
							progress -
								100 / ((config.duration || 4000) / 100)
						),
					},
				})
			);
		}, 100);

		return () => clearInterval(interval);
	}, [
		config.autoHide,
		config.showProgress,
		config.duration,
		isVisible,
		isPaused,
	]);

	// ========================================
	// Event Handlers
	// ========================================

	const handleHide = () => {
		dispatch(
			setNotificationState({
				notificationId: notificationComponentId,
				updates: { isVisible: false },
			})
		);
		onHide?.();
	};

	const handleConfirm = () => {
		onConfirm?.();
		handleHide();
	};

	const handleCancel = () => {
		onCancel?.();
		handleHide();
	};

	const handleActionClick = (
		action: NotificationAction
	) => {
		action.onClick();
		onAction?.(action);
		if (action.variant !== 'text') {
			handleHide();
		}
	};

	// ========================================
	// CSS Classes
	// ========================================

	const notificationClasses = [
		styles.notification,
		styles[`notification--${config.kind}`],
		styles[`notification--${config.variant}`],
		styles[`notification--${config.severity}`],
		config.position &&
			styles[
				`notification--${config.position.replace('-', '_')}`
			],
		config.enterAnimation &&
			styles[
				`notification--enter-${config.enterAnimation}`
			],
		!isVisible &&
			config.exitAnimation &&
			styles[`notification--exit-${config.exitAnimation}`],
		!isVisible && styles['notification--hidden'],
		className,
	]
		.filter(Boolean)
		.join(' ');

	// ========================================
	// Render Functions
	// ========================================

	const renderIcon = () => {
		if (!config.showIcon) return null;

		const iconContent =
			icon ||
			(config.severity && getDefaultIcon(config.severity));

		return (
			<div className={styles.notification__icon}>
				{typeof iconContent === 'string' ?
					<span className={styles.notification__icon_text}>
						{iconContent}
					</span>
				:	iconContent}
			</div>
		);
	};

	const renderCloseButton = () => {
		if (!config.showCloseButton || !config.dismissible)
			return null;

		return (
			<Button
				kind='close'
				className={styles.notification__close}
				onClick={handleHide}
				aria-label='Close notification'
			/>
		);
	};

	const renderActions = () => {
		// Handle confirmation dialogs
		if (config.kind.includes('confirm')) {
			return (
				<div className={styles.notification__actions}>
					<Button
						kind='secondary'
						className={`${styles.notification__action} ${styles['notification__action--cancel']}`}
						onClick={handleCancel}
					>
						{config.cancelText}
					</Button>
					<Button
						kind='primary'
						className={`${styles.notification__action} ${styles['notification__action--confirm']}`}
						onClick={handleConfirm}
					>
						{config.confirmText}
					</Button>
				</div>
			);
		}

		// Handle custom actions
		if (!config.actions?.length) return null;

		return (
			<div className={styles.notification__actions}>
				{config.actions.map((action, index) => (
					<Button
						key={index}
						kind={
							action.variant === 'primary' ?
								'primary'
							:	'secondary'
						}
						className={`${styles.notification__action} ${
							action.variant ?
								styles[
									`notification__action--${action.variant}`
								]
							:	''
						}`}
						onClick={() => handleActionClick(action)}
						disabled={action.disabled}
					>
						{action.label}
					</Button>
				))}
			</div>
		);
	};

	const renderProgressBar = () => {
		if (!config.showProgress || !config.autoHide)
			return null;

		return (
			<div className={styles.notification__progress}>
				<div
					className={styles.notification__progress_bar}
					style={{ width: `${progress}%` }}
				/>
			</div>
		);
	};

	// ========================================
	// Early Return for Hidden
	// ========================================

	if (!isVisible && config.exitAnimation) {
		// Allow exit animation to complete
		setTimeout(() => {
			dispatch(
				setNotificationState({
					notificationId: notificationComponentId,
					updates: { isVisible: false },
				})
			);
		}, 300);
	}

	if (!isVisible && !config.exitAnimation) {
		return null;
	}

	// ========================================
	// Main Render
	// ========================================

	return (
		<div
			{...restProps}
			ref={ref}
			className={notificationClasses}
			onClick={onClick}
			onMouseEnter={() =>
				config.pauseOnHover &&
				dispatch(
					setNotificationState({
						notificationId: notificationComponentId,
						updates: { isPaused: true },
					})
				)
			}
			onMouseLeave={() =>
				config.pauseOnHover &&
				dispatch(
					setNotificationState({
						notificationId: notificationComponentId,
						updates: { isPaused: false },
					})
				)
			}
			role='alert'
			aria-live='polite'
		>
			{image && (
				<div className={styles.notification__image}>
					<img src={image} alt='' />
				</div>
			)}

			{renderIcon()}

			<div className={styles.notification__content}>
				{config.title && (
					<div className={styles.notification__title}>
						{config.title}
					</div>
				)}

				{config.message && (
					<div className={styles.notification__message}>
						{config.message}
					</div>
				)}

				{children && (
					<div className={styles.notification__children}>
						{children}
					</div>
				)}

				{renderActions()}
			</div>

			{renderCloseButton()}
			{renderProgressBar()}
		</div>
	);
});

// ========================================
// Export
// ========================================

UnifiedNotification.displayName = 'UnifiedNotification';

export default memo(UnifiedNotification);
