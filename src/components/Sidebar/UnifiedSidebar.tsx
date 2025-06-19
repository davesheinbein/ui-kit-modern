import React, {
	forwardRef,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import {
	SIDEBAR_CONFIGURATIONS,
	ExtendedSidebarKind,
	SidebarConfiguration,
	createSidebarConfig,
} from './SidebarConfigurations';
import styles from './Sidebar.module.scss';

// Base sidebar variant types
export type SidebarVariant =
	| 'friends'
	| 'settings'
	| 'chat'
	| 'notifications'
	| 'custom';

// Base sidebar props interface
export interface BaseSidebarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	variant?: SidebarVariant;
	position?: 'left' | 'right';
	size?: 'small' | 'medium' | 'large' | 'full';
	open?: boolean;
	onClose?: () => void;
}

// Use the extended sidebar kinds from configurations
export type SidebarKind = ExtendedSidebarKind;

export interface UnifiedSidebarProps
	extends Omit<BaseSidebarProps, 'variant' | 'children'> {
	kind: SidebarKind;

	// State props
	open: boolean;
	onClose?: () => void;

	// Content props
	title?: string;
	children?: React.ReactNode;
	header?: React.ReactNode;
	footer?: React.ReactNode;

	// Behavior props
	hasOverlay?: boolean;
	showCloseButton?: boolean;
	closeButtonText?: string;
	closeButtonIcon?: React.ReactNode;
	closeOnOverlayClick?: boolean;
	closeOnEscape?: boolean;
	focusTrap?: boolean;
	returnFocus?: boolean;

	// Animation props
	animationDuration?: number;
	disableAnimation?: boolean;

	// Accessibility props
	ariaLabel?: string;
	ariaLabelledBy?: string;
	ariaDescribedBy?: string;
	role?: string;

	// Custom styling
	overlayClassName?: string;
	headerClassName?: string;
	contentClassName?: string;
	footerClassName?: string;
	closeButtonClassName?: string;

	// Event handlers
	onOpen?: () => void;
	onAnimationStart?: () => void;
	onAnimationEnd?: () => void;
	onOverlayClick?: () => void;
	onEscapeKey?: () => void;
}

const UnifiedSidebar = forwardRef<
	HTMLDivElement,
	UnifiedSidebarProps
>(
	(
		{
			kind,
			open,
			onClose,
			title,
			children,
			header,
			footer,
			hasOverlay,
			showCloseButton,
			closeButtonText,
			closeButtonIcon,
			closeOnOverlayClick = true,
			closeOnEscape = true,
			focusTrap = true,
			returnFocus = true,
			animationDuration,
			disableAnimation = false,
			ariaLabel,
			ariaLabelledBy,
			ariaDescribedBy,
			role = 'dialog',
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
			...rest
		},
		ref
	) => {
		const config = SIDEBAR_CONFIGURATIONS[kind];
		const overlayRef = useRef<HTMLDivElement>(null);
		const sidebarRef = useRef<HTMLDivElement>(null);
		const previousActiveElement =
			useRef<HTMLElement | null>(null);
		const isAnimating = useRef(false);

		// Merge configuration with props
		const finalConfig: SidebarConfiguration = {
			...config,
			hasOverlay: hasOverlay ?? config.hasOverlay,
			showCloseButton:
				showCloseButton ?? config.showCloseButton,
			closeButtonText:
				closeButtonText ?? config.closeButtonText,
			animationDuration:
				animationDuration ?? config.animationDuration,
		};

		// Handle escape key
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

		// Handle overlay click
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

		// Handle close button click
		const handleCloseClick = useCallback(() => {
			onClose?.();
		}, [onClose]);

		// Focus management
		useEffect(() => {
			if (open && focusTrap) {
				previousActiveElement.current =
					document.activeElement as HTMLElement;

				// Focus the sidebar after opening
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
				}, finalConfig.animationDuration || 0);
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
		}, [
			open,
			focusTrap,
			returnFocus,
			finalConfig.animationDuration,
		]);

		// Escape key listener
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

		// Animation handling
		useEffect(() => {
			if (open) {
				onOpen?.();
				onAnimationStart?.();

				if (
					!disableAnimation &&
					finalConfig.animationDuration
				) {
					isAnimating.current = true;
					setTimeout(() => {
						isAnimating.current = false;
						onAnimationEnd?.();
					}, finalConfig.animationDuration);
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
			finalConfig.animationDuration,
		]);

		// Prevent body scroll when sidebar is open and has overlay
		useEffect(() => {
			if (open && finalConfig.hasOverlay) {
				const originalOverflow =
					document.body.style.overflow;
				document.body.style.overflow = 'hidden';

				return () => {
					document.body.style.overflow = originalOverflow;
				};
			}
		}, [open, finalConfig.hasOverlay]);

		// Calculate classes
		const sidebarClasses = [
			finalConfig.className,
			open ? 'sidebar-open' : '',
			disableAnimation ? 'sidebar-no-animation' : '',
			className,
		]
			.filter(Boolean)
			.join(' ');

		const overlayClasses = [
			finalConfig.overlayClassName,
			open ? 'overlay-visible' : '',
			overlayClassName,
		]
			.filter(Boolean)
			.join(' ');

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
			finalConfig.position === 'left' ?
				styles.sidebarCloseBtnLeft
			:	styles.sidebarCloseBtn,
			closeButtonClassName,
		]
			.filter(Boolean)
			.join(' ');

		// Custom styles
		const sidebarStyle: React.CSSProperties = {
			...style,
			zIndex: finalConfig.zIndex,
			minWidth: finalConfig.minWidth,
			maxWidth: finalConfig.maxWidth,
			height: finalConfig.height,
			transitionDuration:
				disableAnimation ? '0s' : (
					`${finalConfig.animationDuration}ms`
				),
		};

		const overlayStyle: React.CSSProperties = {
			zIndex:
				finalConfig.zIndex ?
					finalConfig.zIndex - 1
				:	undefined,
			transitionDuration:
				disableAnimation ? '0s' : (
					`${finalConfig.animationDuration}ms`
				),
		};

		// Render header
		const renderHeader = () => {
			if (header) return header;
			if (!title && !finalConfig.showCloseButton)
				return null;

			return (
				<div className={headerClasses}>
					{title && (
						<h2
							className={styles.sidebarTitle}
							id={ariaLabelledBy || `sidebar-title-${kind}`}
						>
							{title}
						</h2>
					)}
					{finalConfig.showCloseButton && (
						<button
							type='button'
							className={closeButtonClasses}
							onClick={handleCloseClick}
							aria-label={`Close ${finalConfig.ariaLabel || 'sidebar'}`}
						>
							{closeButtonIcon ||
								finalConfig.closeButtonText ||
								'Close'}
						</button>
					)}
				</div>
			);
		};

		// Render footer
		const renderFooter = () => {
			if (!footer) return null;

			return <div className={footerClasses}>{footer}</div>;
		};

		return (
			<>
				{/* Overlay */}
				{finalConfig.hasOverlay && (
					<div
						ref={overlayRef}
						className={overlayClasses}
						style={overlayStyle}
						onClick={handleOverlayClick}
						aria-hidden='true'
					/>
				)}

				{/* Sidebar */}
				<div
					ref={sidebarRef}
					className={sidebarClasses}
					style={sidebarStyle}
					role={role}
					aria-label={ariaLabel || finalConfig.ariaLabel}
					aria-labelledby={
						ariaLabelledBy ||
						(title ? `sidebar-title-${kind}` : undefined)
					}
					aria-describedby={ariaDescribedBy}
					aria-modal={finalConfig.hasOverlay}
					tabIndex={focusTrap ? -1 : undefined}
					{...rest}
				>
					{renderHeader()}

					<div className={contentClasses}>{children}</div>

					{renderFooter()}

					{/* Screen reader announcement */}
					<div
						className={styles['sidebar-sr-only']}
						aria-live='polite'
						aria-atomic='true'
					>
						{open ?
							`${finalConfig.ariaLabel} opened`
						:	`${finalConfig.ariaLabel} closed`}
					</div>
				</div>
			</>
		);
	}
);

UnifiedSidebar.displayName = 'UnifiedSidebar';

export default UnifiedSidebar;
