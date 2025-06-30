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

export interface NotificationProps {
	kind: NotificationKind;
	componentId?: string;
	children?: React.ReactNode;
	className?: string;

	title?: string;
	message?: string | React.ReactNode;
	icon?: React.ReactNode | string;
	image?: string;

	variant?: NotificationConfiguration['variant'];
	severity?: NotificationConfiguration['severity'];
	position?: NotificationConfiguration['position'];

	visible?: boolean;
	autoHide?: boolean;
	duration?: number;
	persistent?: boolean;
	dismissible?: boolean;
	pauseOnHover?: boolean;

	actions?: NotificationAction[];
	confirmText?: string;
	cancelText?: string;

	showIcon?: boolean;
	showCloseButton?: boolean;
	showProgress?: boolean;

	enterAnimation?: NotificationConfiguration['enterAnimation'];
	exitAnimation?: NotificationConfiguration['exitAnimation'];

	onShow?: () => void;
	onHide?: () => void;
	onClick?: () => void;
	onConfirm?: () => void;
	onCancel?: () => void;
	onAction?: (action: NotificationAction) => void;

	/** Placement for persistent notifications (fixed, global, inline, center) */
	placement?: 'fixed' | 'global' | 'inline' | 'center';
}

const Notification = forwardRef<
	HTMLDivElement,
	NotificationProps
>((props, ref) => {
	const {
		kind,
		componentId,
		children,
		className,

		title,
		message,
		icon,
		image,

		variant,
		severity,
		position,

		visible = true,
		autoHide,
		duration,
		persistent,
		dismissible,
		pauseOnHover,

		actions,
		confirmText,
		cancelText,

		showIcon,
		showCloseButton,
		showProgress,

		enterAnimation,
		exitAnimation,

		onShow,
		onHide,
		onClick,
		onConfirm,
		onCancel,
		onAction,
		placement,
		...restProps
	} = props;

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

	const [isVisible, setIsVisible] = React.useState(visible);
	const [isPaused, setIsPaused] = React.useState(false);
	const [progress, setProgress] = React.useState(100);

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

	const notificationClasses = [
		styles.notification,
		styles[`notification--${config.kind}`],
		styles[`notification--${config.variant}`],
		styles[`notification--${config.severity}`],
		config.position &&
			styles[
				`notification--${config.position.replace('-', '_')}`
			],
		placement && styles[`notification--${placement}`],
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

	if (!isVisible && config.exitAnimation) {
		setTimeout(() => {
			setIsVisible(false);
		}, 300);
	}
	if (!isVisible && !config.exitAnimation) {
		return null;
	}

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

export default memo(Notification);
