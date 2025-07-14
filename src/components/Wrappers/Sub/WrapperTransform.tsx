import type { WrapperProps } from '../Wrapper';

export function getTransformStyles(
	props: WrapperProps
): React.CSSProperties {
	const { transform, transition, boxSizing } = props;
	const style: React.CSSProperties = {};
	if (transform !== undefined) style.transform = transform;
	if (transition !== undefined)
		style.transition = transition;
	if (boxSizing !== undefined) style.boxSizing = boxSizing;
	return style;
}
