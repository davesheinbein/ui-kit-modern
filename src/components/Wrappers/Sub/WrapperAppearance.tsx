import type { WrapperProps } from '../Wrapper';

export function getAppearanceStyles(
	props: WrapperProps
): React.CSSProperties {
	const {
		border,
		radius,
		borderRadius,
		bg,
		background,
		shadow,
		boxShadow,
		width,
		w,
		height,
		h,
		minWidth,
		minW,
		minHeight,
		minH,
		maxWidth,
		maxW,
		maxHeight,
		maxH,
	} = props;
	const style: React.CSSProperties = {};
	if (border !== undefined) style.border = border;
	if (radius !== undefined) style.borderRadius = radius;
	else if (borderRadius !== undefined)
		style.borderRadius = borderRadius;
	if (bg !== undefined) style.background = bg;
	else if (background !== undefined)
		style.background = background;
	if (shadow !== undefined) style.boxShadow = shadow;
	else if (boxShadow !== undefined)
		style.boxShadow = boxShadow;
	if (width !== undefined) style.width = width;
	else if (w !== undefined) style.width = w;
	if (height !== undefined) style.height = height;
	else if (h !== undefined) style.height = h;
	if (minWidth !== undefined) style.minWidth = minWidth;
	else if (minW !== undefined) style.minWidth = minW;
	if (minHeight !== undefined) style.minHeight = minHeight;
	else if (minH !== undefined) style.minHeight = minH;
	if (maxWidth !== undefined) style.maxWidth = maxWidth;
	else if (maxW !== undefined) style.maxWidth = maxW;
	if (maxHeight !== undefined) style.maxHeight = maxHeight;
	else if (maxH !== undefined) style.maxHeight = maxH;
	return style;
}
