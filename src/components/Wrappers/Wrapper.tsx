import React, { forwardRef } from 'react';

export interface WrapperProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;

	// === LAYOUT PROPS ===
	/**
	 * Layout mode: 'flex', 'grid', or undefined (block)
	 */
	layout?: 'flex' | 'grid';
	/**
	 * Direction for flex/grid: 'row' | 'column'
	 */
	direction?: 'row' | 'column';
	/**
	 * Center content horizontally and vertically
	 */
	center?: boolean;
	/**
	 * Gap between children
	 */
	gap?: string | number;
	/**
	 * Number of columns for grid layout
	 */
	columns?: number | string;
	/**
	 * Number of rows for grid layout
	 */
	rows?: number | string;

	// === SPACING PROPS ===
	/** Padding */
	p?: string | number;
	/** Padding (alternative name for consistency) */
	padding?: string | number;
	/** Margin */
	m?: string | number;
	/** Margin (alternative name for consistency) */
	margin?: string | number;

	// === BORDER PROPS ===
	/** Border (CSS shorthand) */
	border?: string;
	/** Border radius */
	radius?: string | number;
	/** Border radius (alternative name for consistency) */
	borderRadius?: string | number;

	// === SIZING PROPS ===
	/** Width */
	w?: string | number;
	/** Width (alternative name for consistency) */
	width?: string | number;
	/** Height */
	h?: string | number;
	/** Height (alternative name for consistency) */
	height?: string | number;
	/** Min width */
	minW?: string | number;
	/** Min width (alternative name for consistency) */
	minWidth?: string | number;
	/** Min height */
	minH?: string | number;
	/** Min height (alternative name for consistency) */
	minHeight?: string | number;
	/** Max width */
	maxW?: string | number;
	/** Max width (alternative name for consistency) */
	maxWidth?: string | number;
	/** Max height */
	maxH?: string | number;
	/** Max height (alternative name for consistency) */
	maxHeight?: string | number;

	// === APPEARANCE PROPS ===
	/** Background color */
	bg?: string;
	/** Background (alternative name for consistency) */
	background?: string;
	/** Box shadow */
	shadow?: string;
	/** Box shadow (alternative name for consistency) */
	boxShadow?: string;

	// === POSITIONING PROPS ===
	/** CSS position property */
	position?:
		| 'static'
		| 'relative'
		| 'absolute'
		| 'fixed'
		| 'sticky';
	/** CSS top property */
	top?: string | number;
	/** CSS right property */
	right?: string | number;
	/** CSS bottom property */
	bottom?: string | number;
	/** CSS left property */
	left?: string | number;
	/** CSS z-index property */
	zIndex?: number;

	// === OVERFLOW PROPS ===
	/** CSS overflow property */
	overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
	/** CSS overflow-x property */
	overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
	/** CSS overflow-y property */
	overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';

	// === DISPLAY PROPS ===
	/** CSS display property - extends layout for more options */
	display?:
		| 'block'
		| 'inline'
		| 'inline-block'
		| 'flex'
		| 'inline-flex'
		| 'grid'
		| 'inline-grid'
		| 'none'
		| 'contents';

	// === TRANSFORM & TRANSITION PROPS ===
	/** CSS transform property */
	transform?: string;
	/** CSS transition property */
	transition?: string;

	// === BOX MODEL PROPS ===
	/** CSS box-sizing property */
	boxSizing?: 'border-box' | 'content-box';

	/**
	 * Additional style (merged last for overrides)
	 */
	style?: React.CSSProperties;
	className?: string;
}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
	(
		{
			children,
			layout,
			direction,
			center,
			gap,
			columns,
			rows,
			// Spacing (support both abbreviated and full names)
			p,
			padding,
			m,
			margin,
			// Border
			border,
			radius,
			borderRadius,
			// Sizing (support both abbreviated and full names)
			w,
			width,
			h,
			height,
			minW,
			minWidth,
			minH,
			minHeight,
			maxW,
			maxWidth,
			maxH,
			maxHeight,
			// Appearance (support both abbreviated and full names)
			bg,
			background,
			shadow,
			boxShadow,
			// Positioning
			position,
			top,
			right,
			bottom,
			left,
			zIndex,
			// Overflow
			overflow,
			overflowX,
			overflowY,
			// Display
			display,
			// Transform & Transition
			transform,
			transition,
			// Box Model
			boxSizing,
			style,
			className = '',
			...rest
		},
		ref
	) => {
		// Determine effective display value
		const effectiveDisplay = display || layout || 'block';
		const isFlex =
			effectiveDisplay === 'flex' ||
			effectiveDisplay === 'inline-flex';
		const isGrid =
			effectiveDisplay === 'grid' ||
			effectiveDisplay === 'inline-grid';

		// Resolve prop aliases (full names take precedence)
		const finalPadding =
			padding !== undefined ? padding : p;
		const finalMargin = margin !== undefined ? margin : m;
		const finalWidth = width !== undefined ? width : w;
		const finalHeight = height !== undefined ? height : h;
		const finalMinWidth =
			minWidth !== undefined ? minWidth : minW;
		const finalMinHeight =
			minHeight !== undefined ? minHeight : minH;
		const finalMaxWidth =
			maxWidth !== undefined ? maxWidth : maxW;
		const finalMaxHeight =
			maxHeight !== undefined ? maxHeight : maxH;
		const finalBackground =
			background !== undefined ? background : bg;
		const finalBoxShadow =
			boxShadow !== undefined ? boxShadow : shadow;
		const finalBorderRadius =
			borderRadius !== undefined ? borderRadius : radius;

		const baseStyle: React.CSSProperties = {
			// Display & Layout
			display: effectiveDisplay,

			// Flex/grid direction
			...(direction && isFlex ?
				{ flexDirection: direction }
			:	{}),
			...(direction && isGrid ?
				{
					gridAutoFlow:
						direction === 'row' ? 'row' : 'column',
				}
			:	{}),

			// Grid columns/rows
			...(isGrid && columns ?
				{
					gridTemplateColumns:
						typeof columns === 'number' ?
							`repeat(${columns}, 1fr)`
						:	columns,
				}
			:	{}),
			...(isGrid && rows ?
				{
					gridTemplateRows:
						typeof rows === 'number' ?
							`repeat(${rows}, 1fr)`
						:	rows,
				}
			:	{}),

			// Gap
			...(gap !== undefined ? { gap } : {}),

			// Centering
			...(center && isFlex ?
				{ justifyContent: 'center', alignItems: 'center' }
			:	{}),
			...(center && isGrid ?
				{ justifyItems: 'center', alignItems: 'center' }
			:	{}),

			// Spacing
			...(finalPadding !== undefined ?
				{ padding: finalPadding }
			:	{}),
			...(finalMargin !== undefined ?
				{ margin: finalMargin }
			:	{}),

			// Border
			...(border !== undefined ? { border } : {}),
			...(finalBorderRadius !== undefined ?
				{ borderRadius: finalBorderRadius }
			:	{}),

			// Sizing
			...(finalWidth !== undefined ?
				{ width: finalWidth }
			:	{}),
			...(finalHeight !== undefined ?
				{ height: finalHeight }
			:	{}),
			...(finalMinWidth !== undefined ?
				{ minWidth: finalMinWidth }
			:	{}),
			...(finalMinHeight !== undefined ?
				{ minHeight: finalMinHeight }
			:	{}),
			...(finalMaxWidth !== undefined ?
				{ maxWidth: finalMaxWidth }
			:	{}),
			...(finalMaxHeight !== undefined ?
				{ maxHeight: finalMaxHeight }
			:	{}),

			// Appearance
			...(finalBackground !== undefined ?
				{ background: finalBackground }
			:	{}),
			...(finalBoxShadow !== undefined ?
				{ boxShadow: finalBoxShadow }
			:	{}),

			// Positioning
			...(position !== undefined ? { position } : {}),
			...(top !== undefined ? { top } : {}),
			...(right !== undefined ? { right } : {}),
			...(bottom !== undefined ? { bottom } : {}),
			...(left !== undefined ? { left } : {}),
			...(zIndex !== undefined ? { zIndex } : {}),

			// Overflow
			...(overflow !== undefined ? { overflow } : {}),
			...(overflowX !== undefined ? { overflowX } : {}),
			...(overflowY !== undefined ? { overflowY } : {}),

			// Transform & Transition
			...(transform !== undefined ? { transform } : {}),
			...(transition !== undefined ? { transition } : {}),

			// Box Model
			...(boxSizing !== undefined ? { boxSizing } : {}),

			// Custom style (merged last for overrides)
			...style,
		};

		return (
			<div
				ref={ref}
				style={baseStyle}
				className={className}
				{...rest}
			>
				{children}
			</div>
		);
	}
);

Wrapper.displayName = 'Wrapper';
export default Wrapper;
