import React, { useEffect, useCallback } from 'react';
import styles from './Overlay.module.scss';

export interface OverlayProps {
	'open': boolean;
	'onClick'?: () => void;
	'zIndex'?: number;
	'className'?: string;
	'style'?: React.CSSProperties;
	'children'?: React.ReactNode;
	'data-testid'?: string;
	/** Custom background color or gradient */
	'background'?: string;
	/** Blur effect (true for default, or number for px) */
	'blur'?: boolean | number;
	/** Transition duration in ms */
	'transitionDuration'?: number;
	/** Close on Escape key */
	'closeOnEsc'?: boolean;
	/** Close on overlay click (default: true) */
	'closeOnClick'?: boolean;
	/** Image overlay props */
	'imageSrc'?: string;
	'imageAlt'?: string;
	'imageWidth'?: string | number;
	'imageHeight'?: string | number;
	'imagePosition'?:
		| 'center'
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right';
	'imageStyle'?: React.CSSProperties;
	'imageFullScreen'?: boolean;
	/** How the image should be resized to fit its container */
	'imageObjectFit'?:
		| 'fill'
		| 'contain'
		| 'cover'
		| 'none'
		| 'scale-down';
	/** Aspect ratio for the image (e.g. '16/9', 1.5, etc). null disables. */
	'imageAspectRatio'?: string | number | null;
}

const Overlay: React.FC<OverlayProps> = ({
	open,
	onClick,
	zIndex = 1000,
	className = '',
	style = {},
	children,
	'data-testid': dataTestId,
	background,
	blur,
	transitionDuration,
	closeOnEsc = false,
	closeOnClick = true,
	imageSrc,
	imageAlt = '',
	imageWidth,
	imageHeight,
	imagePosition = 'center',
	imageStyle = {},
	imageFullScreen = false,
	imageObjectFit = 'cover',
	imageAspectRatio = null,
}) => {
	// Handle Escape key
	const handleEsc = useCallback(
		(e: KeyboardEvent) => {
			if (closeOnEsc && open && e.key === 'Escape') {
				onClick?.();
			}
		},
		[closeOnEsc, open, onClick]
	);

	useEffect(() => {
		if (closeOnEsc && open) {
			window.addEventListener('keydown', handleEsc);
			return () =>
				window.removeEventListener('keydown', handleEsc);
		}
	}, [closeOnEsc, open, handleEsc]);

	if (!open) return null;

	// Compose style
	const overlayStyle: React.CSSProperties = {
		zIndex,
		...(background ? { background } : {}),
		...(transitionDuration ?
			{ transition: `opacity ${transitionDuration}ms` }
		:	{}),
		...(blur ?
			{
				backdropFilter: `blur(${typeof blur === 'number' ? blur : 4}px)`,
			}
		:	{}),
		...style,
	};

	// Image positioning logic
	let imgPositionStyle: React.CSSProperties = {};
	if (imageFullScreen) {
		imgPositionStyle = {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			objectFit: imageObjectFit,
			...(imageAspectRatio ?
				{ aspectRatio: imageAspectRatio }
			:	{}),
			...imageStyle,
		};
	} else if (imageSrc) {
		const base: React.CSSProperties = {
			position: 'absolute',
			...(imageWidth ? { width: imageWidth } : {}),
			...(imageHeight ? { height: imageHeight } : {}),
			objectFit: imageObjectFit,
			...(imageAspectRatio ?
				{ aspectRatio: imageAspectRatio }
			:	{}),
			...imageStyle,
		};
		switch (imagePosition) {
			case 'top-left':
				imgPositionStyle = { ...base, top: 0, left: 0 };
				break;
			case 'top-right':
				imgPositionStyle = { ...base, top: 0, right: 0 };
				break;
			case 'bottom-left':
				imgPositionStyle = { ...base, bottom: 0, left: 0 };
				break;
			case 'bottom-right':
				imgPositionStyle = { ...base, bottom: 0, right: 0 };
				break;
			case 'center':
			default:
				imgPositionStyle = {
					...base,
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				};
				break;
		}
	}

	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement>
	) => {
		if (closeOnClick && e.target === e.currentTarget) {
			onClick?.();
		}
	};

	return (
		<div
			className={`${styles.overlay} ${className}`}
			style={overlayStyle}
			onClick={handleOverlayClick}
			data-testid={dataTestId || 'overlay'}
		>
			{imageSrc && (
				<img
					src={imageSrc}
					alt={imageAlt}
					style={imgPositionStyle}
					draggable={false}
				/>
			)}
			{children}
		</div>
	);
};

export default Overlay;
