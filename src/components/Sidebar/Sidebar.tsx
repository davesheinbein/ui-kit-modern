/**
 * Sidebar Component (Ultra-DRY, Prop-Driven)
 *
 * A sidebar is a secondary navigation or content panel typically positioned to the left or right of a web interface. Its primary role is to provide quick access to supporting content, navigation links, filters, user account controls, or actions without interrupting the main page experience.
 *
 * ## Usage (DRY Pattern)
 *
 * All sidebar creation should use this single component API:
 *
 *   <Sidebar open={...} onClose={...} position="left|right" size="small|medium|large|full" variant="permanent|collapsible|drawer|overlay|push|floating|tabbed|multi-level|icon-only|profile|filter|settings|search|activity|quick-actions|favorites|media|vertical-tabs|contextual" ...otherProps />
 *
 * - 'open' and 'onClose' are required props for interactive sidebars.
 * - Use 'variant', 'position', 'size', and custom children to achieve any sidebar layout.
 * - All previous factory/preset/helper/kind logic is removed for maximum clarity and simplicity.
 *
 * ## Sidebar Types (via props)
 * - Permanent: variant="permanent" open position="left"
 * - Collapsible: variant="collapsible" open={isOpen} ...
 * - Drawer: variant="drawer" open={isOpen} ...
 * - Overlay: variant="overlay" open={isOpen} ...
 * - Push: variant="push" open={isOpen} ...
 * - Floating: variant="floating" open={isOpen} ...
 * - Contextual: variant="contextual" ...
 * - Tabbed: variant="tabbed" ...
 * - Multi-Level: variant="multi-level" ...
 * - Icon-Only: variant="icon-only" ...
 * - Right-Aligned: position="right" ...
 * - Profile, Filter, Settings, Search, Activity, Quick Actions, Favorites, Media, Vertical Tabs: use corresponding variant
 *
 * For mobile, use open/close state and position/size to control drawer behavior. For desktop, use permanent/collapsible variants and size/position as needed.
 */

import React, {
	forwardRef,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import styles from './Sidebar.module.scss';

export type SidebarVariant =
	| 'permanent'
	| 'collapsible'
	| 'drawer'
	| 'overlay'
	| 'push'
	| 'floating'
	| 'tabbed'
	| 'multi-level'
	| 'icon-only'
	| 'profile'
	| 'filter'
	| 'settings'
	| 'search'
	| 'activity'
	| 'quick-actions'
	| 'favorites'
	| 'media'
	| 'vertical-tabs'
	| 'contextual'
	| 'custom';

export interface SidebarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose: () => void;
	position?: 'left' | 'right';
	size?: 'small' | 'medium' | 'large' | 'full';
	variant?: SidebarVariant;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	showCloseButton?: boolean;
	closeButtonText?: string;
	closeButtonIcon?: React.ReactNode;
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
	focusTrap?: boolean;
	returnFocus?: boolean;
	animationDuration?: number;
	disableAnimation?: boolean;
	ariaLabel?: string;
	ariaLabelledBy?: string;
	ariaDescribedBy?: string;
	overlayClassName?: string;
	headerClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	closeButtonClassName?: string;
	onOpen?: () => void;
	onAnimationStart?: () => void;
	onAnimationEnd?: () => void;
	onOverlayClick?: () => void;
	onEscapeKey?: () => void;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
	(
		{
			open,
			onClose,
			position = 'left',
			size = 'medium',
			variant = 'permanent',
			header,
			footer,
			showCloseButton,
			closeButtonText = 'Close sidebar',
			closeButtonIcon,
			closeOnOverlayClick = true,
			closeOnEscape = true,
			focusTrap = true,
			returnFocus = true,
			animationDuration = 250,
			disableAnimation = false,
			ariaLabel,
			ariaLabelledBy,
			ariaDescribedBy,
			overlayClassName,
			headerClassName,
			contentClassName,
			footerClassName,
			closeButtonClassName,
			onOpen,
			onAnimationStart,
			onAnimationEnd,
			onOverlayClick,
			onEscapeKey,
			className,
			style,
			children,
			...rest
		},
		ref
	) => {
		// Overlay logic
		const overlayRef = useRef<HTMLDivElement>(null);
		const sidebarRef = useRef<HTMLDivElement>(null);
		const previousActiveElement =
			useRef<HTMLElement | null>(null);
		const isAnimating = useRef(false);

		// Handle Escape key
		const handleEscapeKey = useCallback(
			(event: KeyboardEvent) => {
				if (
					event.key === 'Escape' &&
					open &&
					closeOnEscape
				) {
					event.preventDefault();
					onEscapeKey?.();
					onClose?.();
				}
			},
			[open, closeOnEscape, onClose, onEscapeKey]
		);

		// Overlay click
		const handleOverlayClick = useCallback(
			(event: React.MouseEvent<HTMLDivElement>) => {
				if (
					event.target === overlayRef.current &&
					closeOnOverlayClick
				) {
					onOverlayClick?.();
					onClose?.();
				}
			},
			[closeOnOverlayClick, onClose, onOverlayClick]
		);

		// Focus trap
		useEffect(() => {
			if (open && focusTrap) {
				previousActiveElement.current =
					document.activeElement as HTMLElement;
				setTimeout(() => {
					const firstFocusable =
						sidebarRef.current?.querySelector(
							'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
						) as HTMLElement;
					if (firstFocusable) {
						firstFocusable.focus();
					} else {
						sidebarRef.current?.focus();
					}
				}, animationDuration || 0);
			}
			return () => {
				if (
					!open &&
					returnFocus &&
					previousActiveElement.current
				) {
					previousActiveElement.current.focus();
				}
			};
		}, [open, focusTrap, returnFocus, animationDuration]);

		// Escape key event
		useEffect(() => {
			if (open) {
				document.addEventListener(
					'keydown',
					handleEscapeKey
				);
				return () => {
					document.removeEventListener(
						'keydown',
						handleEscapeKey
					);
				};
			}
		}, [open, handleEscapeKey]);

		// Animation events
		useEffect(() => {
			if (open) {
				onOpen?.();
				onAnimationStart?.();
				if (!disableAnimation && animationDuration) {
					isAnimating.current = true;
					setTimeout(() => {
						isAnimating.current = false;
						onAnimationEnd?.();
					}, animationDuration);
				} else {
					onAnimationEnd?.();
				}
			}
		}, [
			open,
			onOpen,
			onAnimationStart,
			onAnimationEnd,
			disableAnimation,
			animationDuration,
		]);

		// Prevent background scroll when overlay is open
		useEffect(() => {
			if (
				open &&
				(variant === 'overlay' ||
					variant === 'drawer' ||
					variant === 'push' ||
					variant === 'floating')
			) {
				const originalOverflow =
					document.body.style.overflow;
				document.body.style.overflow = 'hidden';
				return () => {
					document.body.style.overflow = originalOverflow;
				};
			}
		}, [open, variant]);

		// Sidebar classes
		const sidebarClasses = [
			styles.baseSidebar,
			styles[`sidebar-${position}`],
			styles[`sidebar-size-${size}`],
			styles[`sidebar-variant-${variant}`],
			open ? styles['sidebar-open'] : '',
			disableAnimation ?
				styles['sidebar-no-animation']
			:	'',
			className,
		]
			.filter(Boolean)
			.join(' ');

		// Overlay classes
		const overlayClasses = [
			styles.sidebarOverlay,
			overlayClassName,
			open ? styles['overlay-visible'] : '',
		]
			.filter(Boolean)
			.join(' ');

		// Header, content, footer classes
		const headerClasses = [
			styles.sidebarHeader,
			headerClassName,
		]
			.filter(Boolean)
			.join(' ');
		const contentClasses = [
			styles.sidebarContent,
			contentClassName,
		]
			.filter(Boolean)
			.join(' ');
		const footerClasses = [
			styles.sidebarFooter,
			footerClassName,
		]
			.filter(Boolean)
			.join(' ');
		const closeButtonClasses = [
			styles.sidebarCloseBtn,
			closeButtonClassName,
		]
			.filter(Boolean)
			.join(' ');

		// Sidebar style
		const sidebarStyle: React.CSSProperties = {
			...style,
			transitionDuration:
				disableAnimation ? '0s' : `${animationDuration}ms`,
		};

		// Overlay style
		const overlayStyle: React.CSSProperties = {
			transitionDuration:
				disableAnimation ? '0s' : `${animationDuration}ms`,
		};

		// Hide close button by default for permanent sidebars
		const computedShowCloseButton =
			typeof showCloseButton === 'boolean' ? showCloseButton
			:	variant !== 'permanent';

		// Render header
		const sidebarHeader =
			header !== undefined ?
				<div className={headerClasses}>{header}</div>
			:	null;

		// Render close button
		const closeBtn =
			computedShowCloseButton ?
				<button
					type='button'
					className={closeButtonClasses}
					onClick={onClose}
					aria-label={closeButtonText}
				>
					{closeButtonIcon || '×'}
				</button>
			:	null;

		// Overlay rendering for overlay/drawer/push/floating
		const shouldShowOverlay =
			open &&
			(variant === 'overlay' ||
				variant === 'drawer' ||
				variant === 'push' ||
				variant === 'floating');

		return (
			<>
				{shouldShowOverlay && (
					<div
						ref={overlayRef}
						className={overlayClasses}
						style={overlayStyle}
						onClick={handleOverlayClick}
						aria-hidden='true'
					/>
				)}
				<div
					ref={ref || sidebarRef}
					className={sidebarClasses}
					style={sidebarStyle}
					role='complementary'
					aria-label={ariaLabel}
					aria-labelledby={ariaLabelledBy}
					aria-describedby={ariaDescribedBy}
					tabIndex={-1}
					{...rest}
				>
					{sidebarHeader}
					{closeBtn}
					<div className={contentClasses}>{children}</div>
					{footer && (
						<div className={footerClasses}>{footer}</div>
					)}
				</div>
			</>
		);
	}
);

export default Sidebar;
