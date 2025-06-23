import React, { forwardRef } from 'react';
import {
	HEADER_CONFIGURATIONS,
	ExtendedHeaderKind,
	HeaderConfiguration,
	TabConfiguration,
	ActionConfiguration,
	createHeaderConfig,
} from './configurations';
import { Button } from '../Button';
import styles from './Header.module.scss';

// Base header variant types
export type HeaderVariant =
	| 'browse'
	| 'dashboard'
	| 'modal'
	| 'page'
	| 'sidebar'
	| 'navigation'
	| 'simple'
	| 'custom';

// Base header props interface
export interface BaseHeaderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	variant?: HeaderVariant;
	layout?:
		| 'left-aligned'
		| 'center-aligned'
		| 'space-between'
		| 'custom';
	padding?: 'none' | 'small' | 'medium' | 'large';
}

// Use the extended header kinds from configurations
export type HeaderKind = ExtendedHeaderKind;

export interface HeaderProps
	extends Omit<BaseHeaderProps, 'variant' | 'children'> {
	kind: HeaderKind;

	// Content props
	title?: string;
	subtitle?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;

	// Tab props
	tabs?: TabConfiguration[];
	currentTab?: string;
	onTabChange?: (tab: string) => void;

	// Action props
	actions?: ActionConfiguration[];
	leftActions?: ActionConfiguration[];
	rightActions?: ActionConfiguration[];

	// Behavior props
	sticky?: boolean;
	collapsible?: boolean;
	isCollapsed?: boolean;
	onToggleCollapse?: () => void;

	// Styling props
	borderBottom?: boolean;
	background?:
		| 'transparent'
		| 'primary'
		| 'secondary'
		| 'custom';
	customBackgroundColor?: string;

	// Enhanced customization - allows complete override of configuration
	overrideConfig?: Partial<HeaderConfiguration>;
	customClassName?: string;

	// Accessibility
	ariaLabel?: string;
	role?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{
			kind,
			title,
			subtitle,
			icon,
			children,
			tabs = [],
			currentTab,
			onTabChange,
			actions = [],
			leftActions = [],
			rightActions = [],
			sticky = false,
			collapsible = false,
			isCollapsed = false,
			onToggleCollapse,
			borderBottom,
			background,
			customBackgroundColor,
			className = '',
			overrideConfig = {},
			customClassName = '',
			ariaLabel,
			role = 'banner',
			...props
		},
		ref
	) => {
		// Get base configuration and apply overrides
		const config: HeaderConfiguration = {
			...HEADER_CONFIGURATIONS[kind],
			...overrideConfig,
		};

		// Merge all actions based on configuration
		const allActions = [
			...((
				config.actionsPosition === 'left' ||
				config.actionsPosition === 'both'
			) ?
				leftActions
			:	[]),
			...actions,
			...((
				config.actionsPosition === 'right' ||
				config.actionsPosition === 'both'
			) ?
				rightActions
			:	[]),
		];

		// Build className
		const headerClasses = [
			styles.header,
			config.className || '',
			className,
			customClassName,
			config.layout ?
				styles[`layout-${config.layout}`]
			:	'',
			config.padding ?
				styles[`padding-${config.padding}`]
			:	'',
			config.background ?
				styles[`bg-${config.background}`]
			:	'',
			borderBottom !== undefined ?
				borderBottom ? styles.borderBottom
				:	''
			: config.borderBottom ? styles.borderBottom
			: '',
			sticky !== undefined ?
				sticky ? styles.sticky
				:	''
			: config.sticky ? styles.sticky
			: '',
			collapsible ? styles.collapsible : '',
			isCollapsed ? styles.collapsed : '',
			config.responsive ? styles.responsive : '',
		]
			.filter(Boolean)
			.join(' ');

		// Render action buttons
		const renderActions = (
			actionList: ActionConfiguration[],
			position: 'left' | 'right'
		) => {
			if (actionList.length === 0) return null;

			return (
				<div
					className={`${styles.actions} ${styles[`actions-${position}`]}`}
				>
					{actionList.map((action, index) => {
						let buttonKind: string;
						switch (action.type) {
							case 'back':
								buttonKind = 'go-back';
								break;
							case 'close':
								buttonKind = 'close';
								break;
							case 'menu':
								buttonKind = 'icon';
								break;
							default:
								buttonKind = 'icon';
						}

						return (
							<Button
								key={index}
								kind={buttonKind as any}
								onClick={action.handler}
								className={`${styles.actionButton} ${action.className || ''}`}
								aria-label={action.label}
								icon={action.icon}
							>
								{action.label && action.type === 'custom' ?
									action.label
								:	undefined}
							</Button>
						);
					})}
				</div>
			);
		};

		// Render tabs
		const renderTabs = () => {
			if (!config.showTabs || tabs.length === 0)
				return null;

			return (
				<div
					className={`${styles.tabs} ${styles[`tabs-${config.tabsPosition}`]} ${styles[`tabs-align-${config.tabsAlign}`]}`}
				>
					{tabs.map((tab) => (
						<Button
							key={tab.value}
							kind='ghost'
							onClick={() => onTabChange?.(tab.value)}
							className={`${styles.tab} ${currentTab === tab.value ? styles.tabActive : ''}`}
							disabled={tab.disabled}
							aria-selected={currentTab === tab.value}
							role='tab'
						>
							{tab.icon && (
								<span className={styles.tabIcon}>
									{tab.icon}
								</span>
							)}
							<span className={styles.tabLabel}>
								{tab.label}
							</span>
							{tab.badge && (
								<span className={styles.tabBadge}>
									{tab.badge}
								</span>
							)}
						</Button>
					))}
				</div>
			);
		};

		// Render title section
		const renderTitle = () => {
			if (!config.showTitle && !title && !subtitle)
				return null;

			return (
				<div className={styles.titleSection}>
					{icon && (
						<span className={styles.titleIcon}>{icon}</span>
					)}
					<div className={styles.titleContent}>
						{title && (
							<h1
								className={`${styles.title} ${styles[`title-${config.titleSize}`]} ${styles[`title-${config.titleWeight}`]}`}
							>
								{title}
							</h1>
						)}
						{subtitle && (
							<p className={styles.subtitle}>{subtitle}</p>
						)}
					</div>
					{collapsible && (
						<Button
							kind='icon'
							onClick={onToggleCollapse}
							className={styles.collapseButton}
							aria-label={
								isCollapsed ? 'Expand header' : (
									'Collapse header'
								)
							}
							icon={isCollapsed ? '▼' : '▲'}
						/>
					)}
				</div>
			);
		};

		// Handle different layouts
		const renderContent = () => {
			const leftActionsToRender =
				(
					config.actionsPosition === 'left' ||
					config.actionsPosition === 'both'
				) ?
					[
						...leftActions,
						...(config.actionsPosition === 'left' ?
							actions
						:	[]),
					]
				:	[];

			const rightActionsToRender =
				(
					config.actionsPosition === 'right' ||
					config.actionsPosition === 'both'
				) ?
					[
						...(config.actionsPosition === 'right' ?
							actions
						:	[]),
						...rightActions,
					]
				:	[];

			switch (config.layout) {
				case 'left-aligned':
					return (
						<>
							{renderActions(leftActionsToRender, 'left')}
							<div className={styles.content}>
								{renderTitle()}
								{config.tabsPosition === 'below-title' &&
									renderTabs()}
							</div>
							{renderActions(rightActionsToRender, 'right')}
						</>
					);

				case 'center-aligned':
					return (
						<>
							{renderActions(leftActionsToRender, 'left')}
							<div
								className={`${styles.content} ${styles.contentCentered}`}
							>
								{renderTitle()}
								{config.tabsPosition === 'below-title' &&
									renderTabs()}
							</div>
							{renderActions(rightActionsToRender, 'right')}
						</>
					);

				case 'space-between':
					return (
						<>
							<div className={styles.leftSection}>
								{renderActions(leftActionsToRender, 'left')}
								{renderTitle()}
							</div>
							{config.tabsPosition === 'beside-title' &&
								renderTabs()}
							<div className={styles.rightSection}>
								{renderActions(
									rightActionsToRender,
									'right'
								)}
							</div>
						</>
					);

				case 'custom':
				default:
					return (
						<>
							{renderActions(leftActionsToRender, 'left')}
							<div className={styles.content}>
								{renderTitle()}
								{config.tabsPosition === 'below-title' &&
									renderTabs()}
							</div>
							{renderActions(rightActionsToRender, 'right')}
						</>
					);
			}
		};

		return (
			<header
				{...props}
				ref={ref}
				className={headerClasses}
				role={role}
				aria-label={ariaLabel || title}
				style={{
					...props.style,
					...(customBackgroundColor && {
						backgroundColor: customBackgroundColor,
					}),
				}}
			>
				<div className={styles.headerInner}>
					{renderContent()}
					{config.tabsPosition === 'separate-row' &&
						renderTabs()}
				</div>
				{children && (
					<div className={styles.headerChildren}>
						{children}
					</div>
				)}
			</header>
		);
	}
);

Header.displayName = 'Header';

export default Header;
