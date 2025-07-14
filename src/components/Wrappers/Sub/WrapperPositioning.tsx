import type { WrapperProps } from '../Wrapper';

export function getPositioningStyles(
	props: WrapperProps
): React.CSSProperties {
	const { position, top, right, bottom, left, zIndex } =
		props;
	const style: React.CSSProperties = {};
	if (position !== undefined) style.position = position;
	if (top !== undefined) style.top = top;
	if (right !== undefined) style.right = right;
	if (bottom !== undefined) style.bottom = bottom;
	if (left !== undefined) style.left = left;
	if (zIndex !== undefined) style.zIndex = zIndex;
	return style;
}
