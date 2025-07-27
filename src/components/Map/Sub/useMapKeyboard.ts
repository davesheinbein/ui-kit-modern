import { useCallback } from 'react';

/**
 * Keyboard event handler for Map accessibility and controls.
 */
export function useMapKeyboard(
	onKeyDown: (e: React.KeyboardEvent) => void
) {
	return useCallback(
		(e: React.KeyboardEvent) => {
			// Add custom keyboard logic here (e.g., shortcuts for overlays/controls)
			onKeyDown?.(e);
		},
		[onKeyDown]
	);
}
