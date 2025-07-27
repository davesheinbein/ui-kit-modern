import { useMemo } from 'react';

/**
 * Returns overlays/controls ordered by their 'order' prop.
 */
export function useOrderedOverlays<
	T extends { order?: number },
>(items: T[]): T[] {
	return useMemo(
		() =>
			items
				.slice()
				.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
		[items]
	);
}
