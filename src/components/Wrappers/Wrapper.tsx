import React, { forwardRef } from 'react';

export interface WrapperProps
	extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
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
	/** Padding */
	p?: string | number;
	/** Margin */
	m?: string | number;
	/** Border (CSS shorthand) */
	border?: string;
	/** Border radius */
	radius?: string | number;
	/** Width */
	w?: string | number;
	/** Height */
	h?: string | number;
	/** Min width */
	minW?: string | number;
	/** Min height */
	minH?: string | number;
	/** Max width */
	maxW?: string | number;
	/** Max height */
	maxH?: string | number;
	/** Background color */
	bg?: string;
	/** Box shadow */
	shadow?: string;
	/**
	 * Additional style
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
			p,
			m,
			border,
			radius,
			w,
			h,
			minW,
			minH,
			maxW,
			maxH,
			bg,
			shadow,
			style,
			className = '',
			...rest
		},
		ref
	) => {
		const isFlex = layout === 'flex';
		const isGrid = layout === 'grid';

		const baseStyle: React.CSSProperties = {
			// Layout
			display: layout,
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
			...(p !== undefined ? { padding: p } : {}),
			...(m !== undefined ? { margin: m } : {}),
			// Border
			...(border !== undefined ? { border } : {}),
			...(radius !== undefined ?
				{ borderRadius: radius }
			:	{}),
			// Sizing
			...(w !== undefined ? { width: w } : {}),
			...(h !== undefined ? { height: h } : {}),
			...(minW !== undefined ? { minWidth: minW } : {}),
			...(minH !== undefined ? { minHeight: minH } : {}),
			...(maxW !== undefined ? { maxWidth: maxW } : {}),
			...(maxH !== undefined ? { maxHeight: maxH } : {}),
			// Background
			...(bg !== undefined ? { background: bg } : {}),
			// Shadow
			...(shadow !== undefined ?
				{ boxShadow: shadow }
			:	{}),
			// Custom style
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
