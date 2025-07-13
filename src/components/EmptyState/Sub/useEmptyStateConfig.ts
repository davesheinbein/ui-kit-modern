import { useMemo } from 'react';
import { getEmptyStateConfig } from '../configurations';
import type { EmptyStateProps } from '../EmptyState';

export function useEmptyStateConfig(
	kind: string,
	props: EmptyStateProps
) {
	const baseConfig = useMemo(
		() => getEmptyStateConfig(kind),
		[kind]
	);
	return baseConfig;
}
