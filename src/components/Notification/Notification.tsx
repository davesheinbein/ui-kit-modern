import React, { forwardRef, useEffect, memo } from 'react';
import styles from './Notification.module.scss';
import { Wrapper } from '../Wrappers';
import {
	NotificationKind,
	NotificationConfiguration,
	NotificationAction,
	getNotificationConfig,
	getDefaultIcon,
} from './configurations';

// =============================================================================
// NOTIFICATION PROPS
// =============================================================================

export interface NotificationProps {
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

// =============================================================================
// MAIN  NOTIFICATION COMPONENT
// =============================================================================

const Notification = forwardRef<
	HTMLDivElement,
	NotificationProps
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
	// Redux State Management (stubbed for consolidation)
	// ========================================
	// In a real implementation, use Redux hooks for state management.
	// For consolidation, we will use local state for visibility and progress.
	const [isVisible, setIsVisible] = React.useState(visible);
	const [isPaused, setIsPaused] = React.useState(false);
	const [progress, setProgress] = React.useState(100);

	// Auto-hide effect
	React.useEffect(() => {
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
	React.useEffect(() => {
		if (
			!config.autoHide ||
			!config.showProgress ||
			!isVisible ||
			isPaused
		)
			return;
		const interval = setInterval(() => {
			setProgress((prev) =>
				Math.max(
					0,
					prev - 100 / ((config.duration || 4000) / 100)
				)
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
		setIsVisible(false);
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
			<Wrapper className={styles.notification__icon}>
				{typeof iconContent === 'string' ?
					<span className={styles.notification__icon_text}>
						{iconContent}
					</span>
				:	iconContent}
			</Wrapper>
		);
	};
	const renderCloseButton = () => {
		if (!config.showCloseButton || !config.dismissible)
			return null;
		return (
			<button
				className={styles.notification__close}
				onClick={handleHide}
				aria-label='Close notification'
			>
				×
			</button>
		);
	};
	const renderActions = () => {
		// Handle confirmation dialogs
		if (config.kind.includes('confirm')) {
			return (
				<Wrapper className={styles.notification__actions}>
					<button
						className={
							styles['notification__action'] +
							' ' +
							styles['notification__action--confirm']
						}
						onClick={handleConfirm}
					>
						{config.confirmText || 'Confirm'}
					</button>
					<button
						className={
							styles['notification__action'] +
							' ' +
							styles['notification__action--cancel']
						}
						onClick={handleCancel}
					>
						{config.cancelText || 'Cancel'}
					</button>
				</Wrapper>
			);
		}
		// Handle custom actions
		if (!config.actions?.length) return null;
		return (
			<Wrapper className={styles.notification__actions}>
				{config.actions.map((action, index) => (
					<button
						key={index}
						className={
							styles['notification__action'] +
							(action.variant ?
								' ' +
								styles[
									`notification__action--${action.variant}`
								]
							:	'')
						}
						onClick={() => handleActionClick(action)}
						disabled={action.disabled}
					>
						{action.label}
					</button>
				))}
			</Wrapper>
		);
	};
	const renderProgressBar = () => {
		if (!config.showProgress || !config.autoHide)
			return null;
		return (
			<Wrapper className={styles.notification__progress}>
				<Wrapper
					className={styles.notification__progress_bar}
					style={{ width: `${progress}%` }}
				/>
			</Wrapper>
		);
	};

	// ========================================
	// Early Return for Hidden
	// ========================================
	if (!isVisible && config.exitAnimation) {
		setTimeout(() => {
			setIsVisible(false);
		}, 300);
	}
	if (!isVisible && !config.exitAnimation) {
		return null;
	}

	// ========================================
	// Main Render
	// ========================================
	return (
		<Wrapper
			{...restProps}
			ref={ref}
			className={notificationClasses}
			onClick={onClick}
			onMouseEnter={() =>
				config.pauseOnHover && setIsPaused(true)
			}
			onMouseLeave={() =>
				config.pauseOnHover && setIsPaused(false)
			}
			role='alert'
			aria-live='polite'
		>
			{image && (
				<Wrapper className={styles.notification__image}>
					<img src={image} alt='' />
				</Wrapper>
			)}
			{renderIcon()}
			<Wrapper className={styles.notification__content}>
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
			</Wrapper>
			{renderCloseButton()}
			{renderProgressBar()}
		</Wrapper>
	);
});

Notification.displayName = 'Notification';

// ===================== PRESET HELPERS (formerly factory) =====================

// Example: You can add static helpers if you want to keep preset convenience
(Notification as any).Presets = {
	toast: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='toast' {...props} />
	),
	toastSuccess: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='toast-success' {...props} />,
	toastError: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='toast-error' {...props} />
	),
	toastWarning: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='toast-warning' {...props} />,
	toastInfo: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='toast-info' {...props} />
	),
	snackbar: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='snackbar' {...props} />
	),
	snackbarAction: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='snackbar-action' {...props} />,
	snackbarPersistent: (
		props: Partial<NotificationProps> = {}
	) => (
		<Notification kind='snackbar-persistent' {...props} />
	),
	alert: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='alert' {...props} />
	),
	alertSuccess: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='alert-success' {...props} />,
	alertError: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='alert-error' {...props} />
	),
	alertWarning: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='alert-warning' {...props} />,
	alertInfo: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='alert-info' {...props} />
	),
	banner: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='banner' {...props} />
	),
	bannerAnnouncement: (
		props: Partial<NotificationProps> = {}
	) => (
		<Notification kind='banner-announcement' {...props} />
	),
	bannerPromotion: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='banner-promotion' {...props} />,
	bannerUpdate: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='banner-update' {...props} />,
	confirmDialog: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='confirm-dialog' {...props} />,
	confirmDelete: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='confirm-delete' {...props} />,
	confirmAction: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='confirm-action' {...props} />,
	confirmNavigation: (
		props: Partial<NotificationProps> = {}
	) => (
		<Notification kind='confirm-navigation' {...props} />
	),
	achievementToast: (
		props: Partial<NotificationProps> = {}
	) => <Notification kind='achievement-toast' {...props} />,
	gameAlert: (props: Partial<NotificationProps> = {}) => (
		<Notification kind='game-alert' {...props} />
	),
	matchNotification: (
		props: Partial<NotificationProps> = {}
	) => (
		<Notification kind='match-notification' {...props} />
	),
	socialNotification: (
		props: Partial<NotificationProps> = {}
	) => (
		<Notification kind='social-notification' {...props} />
	),
};

export default memo(Notification);
