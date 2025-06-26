import React, {
	forwardRef,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import styles from './Sidebar.module.scss';

// Utility for className composition (DRY)
function cn(
	...args: (string | undefined | false | null)[]
) {
	return args.filter(Boolean).join(' ');
}

export type SidebarVariant =
	| 'classic'
	| 'icon-only'
	| 'collapsible'
	| 'persistent-right'
	| 'horizontal'
	| 'sticky'
	| 'profile'
	| 'action-button'
	| 'mega'
	| 'badges'
	| 'search'
	| 'theme-switcher'
	| 'contextual'
	| 'progress'
	| 'widgets'
	| 'footer-links'
	| 'floating'
	| 'split-nav'
	| 'mobile-slideout'
	| 'social-links'
	| 'custom';

export interface SidebarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
	onClose: () => void;
	position?: 'left' | 'right';
	size?: 'small' | 'medium' | 'large' | 'full';
	variant?: SidebarVariant;
	collapsible?: boolean;
	collapsed?: boolean;
	iconOnly?: boolean;
	sticky?: boolean;
	horizontal?: boolean;
	profile?: React.ReactNode;
	actionButton?: React.ReactNode;
	badges?: React.ReactNode;
	search?: React.ReactNode;
	themeSwitcher?: React.ReactNode;
	progress?: React.ReactNode;
	widgets?: React.ReactNode;
	footerLinks?: React.ReactNode;
	floating?: boolean;
	splitNav?: React.ReactNode;
	socialLinks?: React.ReactNode;
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
			position = 'right',
			size = 'medium',
			variant = 'classic',
			collapsible = false,
			collapsed = false,
			iconOnly = false,
			sticky = false,
			horizontal = false,
			profile,
			actionButton,
			badges,
			search,
			themeSwitcher,
			progress,
			widgets,
			footerLinks,
			floating = false,
			splitNav,
			socialLinks,
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
		// Overlay and focus logic
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
				[
					'overlay',
					'drawer',
					'push',
					'floating',
					'mobile-slideout',
					'floating',
				].includes(variant)
			) {
				const originalOverflow =
					document.body.style.overflow;
				document.body.style.overflow = 'hidden';
				return () => {
					document.body.style.overflow = originalOverflow;
				};
			}
		}, [open, variant]);

		// Sidebar classes (prop-driven, DRY)
		const sidebarClasses = cn(
			styles.baseSidebar,
			position === 'left' && styles['sidebar-left'],
			size && styles[`sidebar-${size}`],
			open && styles['sidebar-open'],
			collapsible && styles['sidebar-collapsible'],
			collapsed && styles['sidebar-collapsed'],
			iconOnly && styles['sidebar-icon-only'],
			sticky && styles['sidebar-sticky'],
			horizontal && styles['sidebar-horizontal'],
			floating && styles['sidebar-floating'],
			variant === 'mega' && styles['sidebar-mega'],
			className
		);

		// Overlay classes
		const overlayClasses = cn(
			styles.sidebarOverlay,
			overlayClassName,
			open && styles['overlay-visible']
		);

		// Header, content, footer, close button classes
		const headerClasses = cn(
			styles.sidebarHeader,
			headerClassName
		);
		const contentClasses = cn(
			styles.sidebarContent,
			contentClassName
		);
		const footerClasses = cn(
			styles.sidebarFooter,
			footerClassName
		);
		const closeButtonClasses = cn(
			styles.sidebarCloseBtn,
			closeButtonClassName
		);

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

		// Hide close button by default for classic/persistent sidebars
		const computedShowCloseButton =
			typeof showCloseButton === 'boolean' ? showCloseButton
			:	![
					'classic',
					'persistent-right',
					'sticky',
					'horizontal',
				].includes(variant);

		// Render header (profile, search, themeSwitcher, badges, etc)
		const sidebarHeader =
			(
				header !== undefined ||
				profile ||
				search ||
				themeSwitcher ||
				badges
			) ?
				<div className={headerClasses}>
					{profile && (
						<div className={styles.sidebarProfile}>
							{profile}
						</div>
					)}
					{header}
					{search && (
						<div className={styles.sidebarSearch}>
							{search}
						</div>
					)}
					{themeSwitcher && (
						<div className={styles.sidebarTheme}>
							{themeSwitcher}
						</div>
					)}
					{badges && (
						<div className={styles.sidebarBadges}>
							{badges}
						</div>
					)}
				</div>
			:	null;

		// Render action button (top right)
		const actionBtn =
			actionButton ?
				<div className={styles.sidebarActionBtn}>
					{actionButton}
				</div>
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

		// Overlay rendering for overlay/drawer/push/floating/mobile-slideout
		const shouldShowOverlay =
			open &&
			[
				'overlay',
				'drawer',
				'push',
				'floating',
				'mobile-slideout',
			].includes(variant);

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
					{actionBtn}
					{closeBtn}
					{/* Split nav (for split navigation + CTA) */}
					{splitNav && (
						<div className={styles.sidebarSplitNav}>
							{splitNav}
						</div>
					)}
					{/* Progress indicators */}
					{progress && (
						<div className={styles.sidebarProgress}>
							{progress}
						</div>
					)}
					{/* Embedded widgets */}
					{widgets && (
						<div className={styles.sidebarWidgets}>
							{widgets}
						</div>
					)}
					{/* Main content */}
					<div className={contentClasses}>{children}</div>
					{/* Footer links */}
					{footerLinks && (
						<div className={styles.sidebarFooterLinks}>
							{footerLinks}
						</div>
					)}
					{/* Social/external links */}
					{socialLinks && (
						<div className={styles.sidebarSocialLinks}>
							{socialLinks}
						</div>
					)}
					{/* Footer */}
					{footer && (
						<div className={footerClasses}>{footer}</div>
					)}
				</div>
			</>
		);
	}
);

export default Sidebar;
