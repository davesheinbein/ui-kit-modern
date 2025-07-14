import type { WrapperProps } from '../Wrapper';

export function getOverflowStyles(
	props: WrapperProps
): React.CSSProperties {
	const { overflow, overflowX, overflowY } = props;
	const style: React.CSSProperties = {};
	if (overflow !== undefined) style.overflow = overflow;
	if (overflowX !== undefined) style.overflowX = overflowX;
	if (overflowY !== undefined) style.overflowY = overflowY;
	return style;
}
