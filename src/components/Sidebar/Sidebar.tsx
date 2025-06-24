// Base Sidebar component - Backward compatibility wrapper
import React, {
	forwardRef,
	useEffect,
	useRef,
	useCallback,
} from 'react';
import { Wrapper } from '../Wrappers';
import {
	SIDEBAR_CONFIGURATIONS,
	ExtendedSidebarKind,
	SidebarConfiguration,
	createSidebarConfig,
} from './configurations';
import styles from './Sidebar.module.scss';
import { Button } from '../Button';

export type SidebarVariant =
	| 'friends'
	| 'settings'
	| 'chat'
	| 'notifications'
	| 'custom';

export interface BaseSidebarProps
	extends React.HTMLAttributes<HTMLDivElement> {
	variant?: SidebarVariant;
	position?: 'left' | 'right';
	size?: 'small' | 'medium' | 'large' | 'full';
	open?: boolean;
	onClose?: () => void;
}

export type SidebarKind = ExtendedSidebarKind;

export interface SidebarProps
	extends Omit<BaseSidebarProps, 'variant' | 'children'> {
	kind?: SidebarKind;
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	title?: string;
	header?: React.ReactNode;
	footer?: React.ReactNode;
	hasOverlay?: boolean;
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
	role?: string;
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
	[key: string]: any;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
	(
		{
			kind = 'friends',
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
		const config =
			SIDEBAR_CONFIGURATIONS[kind as ExtendedSidebarKind];
		const overlayRef = useRef<HTMLDivElement>(null);
		const sidebarRef = useRef<HTMLDivElement>(null);
		const previousActiveElement =
			useRef<HTMLElement | null>(null);
		const isAnimating = useRef(false);

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

		const handleCloseClick = useCallback(() => {
			onClose?.();
		}, [onClose]);

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

		const renderHeader = () => {
			if (header) return header;
			if (!title && !finalConfig.showCloseButton)
				return null;
			return (
				<Wrapper className={headerClasses}>
					{title && (
						<h2
							className={styles.sidebarTitle}
							id={ariaLabelledBy || `sidebar-title-${kind}`}
						>
							{title}
						</h2>
					)}
					{finalConfig.showCloseButton && (
						<Button
							kind='close'
							onClick={handleCloseClick}
							className={closeButtonClasses}
							aria-label={`Close ${finalConfig.ariaLabel || 'sidebar'}`}
						/>
					)}
				</Wrapper>
			);
		};

		const renderFooter = () => {
			if (!footer) return null;
			return (
				<Wrapper className={footerClasses}>
					{footer}
				</Wrapper>
			);
		};

		return (
			<>
				{/* Overlay */}
				{finalConfig.hasOverlay && (
					<Wrapper
						ref={overlayRef}
						className={overlayClasses}
						style={overlayStyle}
						onClick={handleOverlayClick}
						aria-hidden='true'
					/>
				)}
				{/* Sidebar */}
				<Wrapper
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
					<Wrapper className={contentClasses}>
						{children}
					</Wrapper>
					{renderFooter()}
					<Wrapper
						className={styles['sidebar-sr-only']}
						aria-live='polite'
						aria-atomic='true'
					>
						{open ?
							`${finalConfig.ariaLabel} opened`
						:	`${finalConfig.ariaLabel} closed`}
					</Wrapper>
				</Wrapper>
			</>
		);
	}
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;

export interface FriendsSidebarProps {
	open: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export const FriendsSidebar: React.FC<
	FriendsSidebarProps
> = ({ open, onClose, children }) => (
	<Sidebar kind='friends' open={open} onClose={onClose}>
		{children}
	</Sidebar>
);
