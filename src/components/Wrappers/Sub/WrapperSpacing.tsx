import type { WrapperProps } from '../Wrapper';

export function getSpacingStyles(
	props: WrapperProps
): React.CSSProperties {
	const { p, padding, m, margin } = props;
	const style: React.CSSProperties = {};
	if (p !== undefined) style.padding = p;
	else if (padding !== undefined) style.padding = padding;
	if (m !== undefined) style.margin = m;
	else if (margin !== undefined) style.margin = margin;
	return style;
}
