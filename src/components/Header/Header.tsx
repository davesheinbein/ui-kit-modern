import React, { forwardRef, useState } from 'react';
import { Wrapper } from '../Wrappers';
import {
	HEADER_CONFIGURATIONS,
	ExtendedHeaderKind,
	HeaderConfiguration,
	TabConfiguration,
	ActionConfiguration,
} from './configurations';
import { Button } from '../Button';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.scss';

export type HeaderKind = ExtendedHeaderKind;

export interface HeaderAction extends ActionConfiguration {
	position?: 'left' | 'right';
}

// --- Flexible Slot-Based API Additions ---
export type HeaderLayout =
	| 'horizontal'
	| 'vertical'
	| 'split'
	| 'stacked'
	| 'bottom';
export type HeaderPosition = 'top' | 'bottom' | 'sidebar';
export interface HeaderSections {
	[key: string]: React.ReactNode;
}

export interface HeaderProps
	extends React.HTMLAttributes<HTMLDivElement> {
	kind?: HeaderKind;
	title?: string;
	subtitle?: string;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	tabs?: TabConfiguration[];
	currentTab?: string;
	onTabChange?: (tab: string) => void;
	actions?: HeaderAction[];
	sticky?: boolean;
	collapsible?: boolean;
	isCollapsed?: boolean;
	onToggleCollapse?: () => void;
	borderBottom?: boolean;
	background?:
		| 'transparent'
		| 'primary'
		| 'secondary'
		| 'custom';
	customBackgroundColor?: string;
	ariaLabel?: string;
	role?: string;
	className?: string;
	// --- Flexible slot-based API ---
	layout?: HeaderLayout;
	sections?: HeaderSections;
	position?: HeaderPosition;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
	(
		{
			kind = 'custom',
			title,
			subtitle,
			icon,
			children,
			tabs = [],
			currentTab,
			onTabChange,
			actions = [],
			sticky = false,
			collapsible = false,
			isCollapsed = false,
			onToggleCollapse,
			borderBottom,
			background,
			customBackgroundColor,
			className = '',
			ariaLabel,
			role = 'banner',
			// --- new flexible API ---
			layout,
			sections,
			position = 'top',
			...props
		},
		ref
	) => {
		// --- Mobile Sidebar State ---
		const [sidebarOpen, setSidebarOpen] = useState(false);

		// --- Flexible slot-based rendering ---
		if (sections) {
			const layoutClass =
				layout ? styles[`layout-${layout}`] : '';
			const positionClass =
				position ? styles[`position-${position}`] : '';

			// Detect HamburgerMenu slot and wrap with click handler
			const slots = Object.entries(sections).map(
				([slot, node]) => {
					if (
						slot.toLowerCase().includes('hamburger') ||
						(slot === 'actionsRight' &&
							React.isValidElement(node) &&
							(node as any).type?.name === 'HamburgerMenu')
					) {
						return (
							<div
								key={slot}
								className={[
									styles.headerSlot,
									styles[`headerSlot-${slot}`] || '',
								]
									.filter(Boolean)
									.join(' ')}
								onClick={() => setSidebarOpen(true)}
								style={{ cursor: 'pointer' }}
							>
								{node}
							</div>
						);
					}
					return (
						<div
							key={slot}
							className={[
								styles.headerSlot,
								styles[`headerSlot-${slot}`] || '',
							]
								.filter(Boolean)
								.join(' ')}
						>
							{node}
						</div>
					);
				}
			);

			// Mobile nav content for Sidebar (show nav/search/actions)
			const mobileNavContent = (
				<div style={{ padding: 24 }}>
					{sections.nav && (
						<div style={{ marginBottom: 16 }}>
							{sections.nav}
						</div>
					)}
					{sections.search && (
						<div style={{ marginBottom: 16 }}>
							{sections.search}
						</div>
					)}
					{sections.actionsRight && (
						<div>{sections.actionsRight}</div>
					)}
				</div>
			);

			return (
				<>
					<header
						{...props}
						ref={ref}
						className={[
							styles.header,
							layoutClass,
							positionClass,
							className,
							sticky ? styles.sticky : '',
							background ? styles[`bg-${background}`] : '',
							borderBottom ? styles.borderBottom : '',
						]
							.filter(Boolean)
							.join(' ')}
						role={role}
						aria-label={ariaLabel || title}
						style={{
							...props.style,
							...(customBackgroundColor && {
								backgroundColor: customBackgroundColor,
							}),
						}}
					>
						<Wrapper className={styles.headerInner}>
							{slots}
						</Wrapper>
						{children && (
							<Wrapper className={styles.headerChildren}>
								{children}
							</Wrapper>
						)}
					</header>
					{/* Mobile Sidebar for Hamburger */}
					<Sidebar
						kind='navigation'
						open={sidebarOpen}
						onClose={() => setSidebarOpen(false)}
						title={title || 'Menu'}
						header={null}
						hasOverlay
						showCloseButton
						role='dialog'
						ariaLabel='Mobile Navigation'
					>
						{mobileNavContent}
					</Sidebar>
				</>
			);
		}

		const config: HeaderConfiguration =
			HEADER_CONFIGURATIONS[kind] || {};

		const leftActions = actions.filter(
			(a) => a.position === 'left' || !a.position
		);
		const rightActions = actions.filter(
			(a) => a.position === 'right'
		);

		const headerClasses = [
			styles.header,
			config.className || '',
			className,
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

		const renderActions = (
			actionList: HeaderAction[],
			position: 'left' | 'right'
		) => {
			if (actionList.length === 0) return null;
			return (
				<Wrapper
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
								className={action.className || ''}
								aria-label={action.label}
								icon={action.icon}
							>
								{action.label && action.type === 'custom' ?
									action.label
								:	undefined}
							</Button>
						);
					})}
				</Wrapper>
			);
		};

		const renderTabs = () => {
			if (!config.showTabs || tabs.length === 0)
				return null;
			return (
				<Wrapper
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
				</Wrapper>
			);
		};

		const renderTitle = () => {
			if (!config.showTitle && !title && !subtitle)
				return null;
			return (
				<Wrapper className={styles.titleSection}>
					{icon && (
						<span className={styles.titleIcon}>{icon}</span>
					)}
					<Wrapper className={styles.titleContent}>
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
					</Wrapper>
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
				</Wrapper>
			);
		};

		const renderContent = () => {
			switch (config.layout) {
				case 'left-aligned':
				case 'center-aligned':
					return (
						<>
							{renderActions(leftActions, 'left')}
							<Wrapper
								className={
									config.layout === 'center-aligned' ?
										`${styles.content} ${styles.contentCentered}`
									:	styles.content
								}
							>
								{renderTitle()}
								{config.tabsPosition === 'below-title' &&
									renderTabs()}
							</Wrapper>
							{renderActions(rightActions, 'right')}
						</>
					);
				case 'space-between':
					return (
						<>
							<Wrapper className={styles.leftSection}>
								{renderActions(leftActions, 'left')}
								{renderTitle()}
							</Wrapper>
							{config.tabsPosition === 'beside-title' &&
								renderTabs()}
							<Wrapper className={styles.rightSection}>
								{renderActions(rightActions, 'right')}
							</Wrapper>
						</>
					);
				case 'custom':
				default:
					return (
						<>
							{renderActions(leftActions, 'left')}
							<Wrapper className={styles.content}>
								{renderTitle()}
								{config.tabsPosition === 'below-title' &&
									renderTabs()}
							</Wrapper>
							{renderActions(rightActions, 'right')}
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
				<Wrapper className={styles.headerInner}>
					{renderContent()}
					{config.tabsPosition === 'separate-row' &&
						renderTabs()}
				</Wrapper>
				{children && (
					<Wrapper className={styles.headerChildren}>
						{children}
					</Wrapper>
				)}
			</header>
		);
	}
);

Header.displayName = 'Header';

export { Header };
export default Header;
