import React, { forwardRef, memo } from 'react';
import {
	EmptyStateKind,
	EmptyStateConfiguration,
	EmptyStateAction,
	getEmptyStateConfig,
} from './configurations';
import styles from './EmptyState.module.scss';

export interface UnifiedEmptyStateProps {
	kind: EmptyStateKind;
	children?: React.ReactNode;
	className?: string;

	// Content overrides
	title?: string;
	description?: string;
	icon?: React.ReactNode | string;
	illustration?: string;

	// Configuration overrides
	variant?: EmptyStateConfiguration['variant'];
	size?: 'small' | 'medium' | 'large';
	centered?: boolean;
	fullHeight?: boolean;

	// Actions
	primaryAction?: EmptyStateAction;
	secondaryAction?: EmptyStateAction;
	actions?: EmptyStateAction[];

	// Features
	showIcon?: boolean;
	showIllustration?: boolean;
	allowCustomContent?: boolean;
}

const UnifiedEmptyState = forwardRef<
	HTMLDivElement,
	UnifiedEmptyStateProps
>((props, ref) => {
	const {
		kind,
		children,
		className,

		// Content overrides
		title,
		description,
		icon,
		illustration,

		// Configuration overrides
		variant,
		size,
		centered,
		fullHeight,

		// Actions
		primaryAction,
		secondaryAction,
		actions,

		// Features
		showIcon,
		showIllustration,
		allowCustomContent,

		...restProps
	} = props;

	// Configuration Resolution
	const baseConfig = getEmptyStateConfig(kind);
	const config: EmptyStateConfiguration = {
		...baseConfig,
		title: title || baseConfig.title,
		description: description || baseConfig.description,
		icon: icon || baseConfig.icon,
		illustration: illustration || baseConfig.illustration,
		variant: variant || baseConfig.variant,
		size: size || baseConfig.size,
		centered:
			centered !== undefined ? centered : (
				baseConfig.centered
			),
		fullHeight:
			fullHeight !== undefined ? fullHeight : (
				baseConfig.fullHeight
			),
		primaryAction:
			primaryAction || baseConfig.primaryAction,
		secondaryAction:
			secondaryAction || baseConfig.secondaryAction,
		actions: actions || baseConfig.actions,
		showIcon:
			showIcon !== undefined ? showIcon : (
				baseConfig.showIcon
			),
		showIllustration:
			showIllustration !== undefined ?
				showIllustration
			:	baseConfig.showIllustration,
		allowCustomContent:
			allowCustomContent !== undefined ?
				allowCustomContent
			:	baseConfig.allowCustomContent,
	};

	// CSS Classes
	const emptyStateClasses = [
		styles.empty_state,
		styles[`empty_state--${config.kind}`],
		styles[`empty_state--${config.variant}`],
		config.size && styles[`empty_state--${config.size}`],
		config.centered && styles['empty_state--centered'],
		config.fullHeight && styles['empty_state--full_height'],
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Render Functions
	const renderIcon = () => {
		if (!config.showIcon || !config.icon) return null;

		return (
			<div className={styles.empty_state__icon}>
				{typeof config.icon === 'string' ?
					<span className={styles.empty_state__icon_text}>
						{config.icon}
					</span>
				:	config.icon}
			</div>
		);
	};

	const renderIllustration = () => {
		if (!config.showIllustration || !config.illustration)
			return null;

		return (
			<div className={styles.empty_state__illustration}>
				<img
					src={config.illustration}
					alt=''
					className={styles.empty_state__illustration_image}
				/>
			</div>
		);
	};

	const renderAction = (
		action: EmptyStateAction,
		isPrimary = false
	) => (
		<button
			key={action.label}
			onClick={action.onClick}
			className={`${styles.empty_state__action} ${
				styles[
					`empty_state__action--${action.variant || (isPrimary ? 'primary' : 'secondary')}`
				]
			}`}
		>
			{action.icon && (
				<span className={styles.empty_state__action_icon}>
					{action.icon}
				</span>
			)}
			{action.label}
		</button>
	);

	const renderActions = () => {
		const allActions = [];

		if (config.primaryAction) {
			allActions.push({
				...config.primaryAction,
				isPrimary: true,
			});
		}

		if (config.secondaryAction) {
			allActions.push({
				...config.secondaryAction,
				isPrimary: false,
			});
		}

		if (config.actions) {
			allActions.push(
				...config.actions.map((action) => ({
					...action,
					isPrimary: false,
				}))
			);
		}

		if (allActions.length === 0) return null;

		return (
			<div className={styles.empty_state__actions}>
				{allActions.map((action, index) =>
					renderAction(action, action.isPrimary)
				)}
			</div>
		);
	};

	// Main Render
	return (
		<div
			{...restProps}
			ref={ref}
			className={emptyStateClasses}
			role='status'
			aria-live='polite'
		>
			{renderIllustration()}
			{renderIcon()}

			<div className={styles.empty_state__content}>
				{config.title && (
					<h3 className={styles.empty_state__title}>
						{config.title}
					</h3>
				)}

				{config.description && (
					<p className={styles.empty_state__description}>
						{config.description}
					</p>
				)}

				{config.allowCustomContent && children && (
					<div className={styles.empty_state__custom}>
						{children}
					</div>
				)}
			</div>

			{renderActions()}
		</div>
	);
});

UnifiedEmptyState.displayName = 'UnifiedEmptyState';
export default memo(UnifiedEmptyState);
