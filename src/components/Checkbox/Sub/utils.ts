// Checkbox utility/helper functions
// (Move any utility functions from Checkbox.tsx here)

// Get icon for checked/unchecked state
export function getIcon(config: any, checked: boolean) {
	if (config.icon) {
		return checked ?
				config.icon.checked
			:	config.icon.unchecked;
	}
	return null;
}

// Ripple logic for main Checkbox
export function handleRipple(
	e: React.MouseEvent<HTMLInputElement>,
	labelRef: React.RefObject<HTMLLabelElement>,
	rippleClass: string
) {
	// Import triggerRipple from utils/animationsHelpers in Checkbox.tsx
	const {
		triggerRipple,
	} = require('../../../utils/animationsHelpers');
	triggerRipple(e, labelRef, rippleClass);
}
