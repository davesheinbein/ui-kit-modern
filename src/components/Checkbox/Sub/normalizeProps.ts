export function normalizeProps(
	labelPosition: any,
	config: any,
	size: any,
	variant: any
) {
	return {
		effectiveLabelPosition:
			labelPosition || config.labelPosition,
		effectiveSize: size || config.size,
		effectiveVariant: variant || config.variant,
	};
}
