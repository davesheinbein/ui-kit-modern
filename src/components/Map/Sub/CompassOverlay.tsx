import React, { useEffect, useRef, useState } from 'react';

/**
 * CompassOverlayProps
 * Highly configurable compass overlay for map orientation.
 * @prop position - Overlay position (e.g., 'top-left', 'top-right', etc.).
 * @prop visible - Show/hide overlay.
 * @prop theme - Theme override (light/dark/system).
 * @prop className - Custom class for overlay.
 * @prop style - Inline style for overlay.
 * @prop rotation - Map rotation in degrees (if supported).
 * @prop onClick - Click handler for interactivity.
 * @prop icon - Custom icon or SVG for the compass (slot-based).
 * @prop animationClass - Custom animation class for appearance/disappearance.
 * @prop onFocus - Focus event handler for accessibility.
 * @prop onBlur - Blur event handler for accessibility.
 * @prop onHover - Mouse over event handler for interactivity.
 * @prop children - Custom slot-based content to render inside the overlay.
 */
export type CompassOverlayPosition =
	| 'top-left'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-right';
export type CompassOverlayTheme =
	| 'light'
	| 'dark'
	| 'system';

export interface CompassOverlayProps {
	position?: CompassOverlayPosition;
	visible?: boolean;
	theme?: CompassOverlayTheme;
	className?: string;
	style?: React.CSSProperties;
	rotation?: number;
	onClick?: (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => void;
	icon?: React.ReactNode;
	animationClass?: string;
	onFocus?: React.FocusEventHandler<HTMLDivElement>;
	onBlur?: React.FocusEventHandler<HTMLDivElement>;
	onHover?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

const positionClassMap: Record<
	CompassOverlayPosition,
	string
> = {
	'top-left': 'map__compass-overlay',
	'top-right':
		'map__compass-overlay map__compass-overlay--top-right',
	'bottom-left':
		'map__compass-overlay map__compass-overlay--bottom-left',
	'bottom-right':
		'map__compass-overlay map__compass-overlay--bottom-right',
};

const CompassOverlay: React.FC<CompassOverlayProps> = ({
	position = 'top-left',
	visible = true,
	theme = 'system',
	className = '',
	style = {},
	rotation = 0,
	onClick,
	icon,
	animationClass = '',
	onFocus,
	onBlur,
	onHover,
	children,
}) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const [mounted, setMounted] = useState(false);

	// Mount animation
	useEffect(() => {
		if (visible) setMounted(true);
		else {
			const timeout = setTimeout(
				() => setMounted(false),
				300
			);
			return () => clearTimeout(timeout);
		}
	}, [visible]);

	// Theming: set CSS variables for light/dark/system
	useEffect(() => {
		if (!overlayRef.current) return;
		const el = overlayRef.current;
		let isDark = false;
		if (theme === 'dark') isDark = true;
		else if (theme === 'system') {
			isDark =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)')
					.matches;
		}
		el.style.setProperty(
			'--compass-bg',
			isDark ?
				'rgba(30,30,40,0.85)'
			:	'rgba(255,255,255,0.85)'
		);
		el.style.setProperty(
			'--compass-color',
			isDark ? '#fff' : '#222'
		);
		el.style.setProperty(
			'--compass-shadow',
			isDark ? '0 2px 8px #0008' : '0 2px 8px #0001'
		);
		el.style.setProperty(
			'--compass-focus',
			isDark ? '0 0 0 2px #fff8' : '0 0 0 2px #2224'
		);
	}, [theme, overlayRef.current]);

	// Keyboard accessibility: Enter/Space triggers onClick, ESC to blur
	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLDivElement>
	) => {
		if (onClick && (e.key === 'Enter' || e.key === ' ')) {
			onClick(e as any);
		}
		if (e.key === 'Escape') {
			(e.target as HTMLDivElement).blur();
		}
	};

	if (!mounted) return null;

	return (
		<div
			ref={overlayRef}
			className={[
				positionClassMap[position],
				animationClass,
				theme ? `theme-${theme}` : '',
				'map__compass-animated',
				visible ?
					'map__compass-overlay--visible'
				:	'map__compass-overlay--hidden',
				className,
			].join(' ')}
			style={{
				...style,
				transition: 'transform 0.3s, opacity 0.3s',
				transform: `rotate(${rotation}deg)`,
				opacity: visible ? 1 : 0,
				background: 'var(--compass-bg)',
				color: 'var(--compass-color)',
				boxShadow: 'var(--compass-shadow)',
				outline: 'none',
				cursor: onClick ? 'pointer' : 'default',
			}}
			tabIndex={onClick ? 0 : -1}
			aria-label='Map compass overlay'
			role='img'
			onClick={onClick}
			onKeyDown={handleKeyDown}
			data-theme={theme}
			onFocus={
				onFocus ||
				((e) =>
					(e.currentTarget.style.boxShadow =
						'var(--compass-focus)'))
			}
			onBlur={
				onBlur ||
				((e) =>
					(e.currentTarget.style.boxShadow =
						'var(--compass-shadow)'))
			}
			onMouseOver={onHover}
		>
			{/* Custom icon slot or default */}
			{icon ?
				<span
					aria-hidden='true'
					className='map__compass-icon'
				>
					{icon}
				</span>
			:	<span
					aria-hidden='true'
					style={{
						display: 'inline-block',
						fontWeight: 700,
					}}
				>
					🧭 Compass
				</span>
			}
			{rotation !== 0 && (
				<span
					className='map__compass-rotation'
					style={{
						marginLeft: 8,
						fontSize: '0.9em',
						opacity: 0.7,
					}}
				>
					{rotation}&deg;
				</span>
			)}
			{children && (
				<div
					className='map__compass-overlay-children'
					style={{ marginTop: 8 }}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default CompassOverlay;
