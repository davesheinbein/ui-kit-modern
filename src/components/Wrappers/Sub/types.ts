import React from 'react';

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
