// Utility functions for EmptyState
import type {
	EmptyStateKind,
	EmptyStateConfiguration,
} from '../configurations';

export function getConfig(
	kind: EmptyStateKind,
	getEmptyStateConfig: (
		kind: EmptyStateKind
	) => EmptyStateConfiguration
) {
	return getEmptyStateConfig(kind);
}
