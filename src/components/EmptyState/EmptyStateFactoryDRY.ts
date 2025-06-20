// src/components/EmptyState/EmptyStateFactoryDRY.ts
import React from 'react';
import {
	EmptyStateConfiguration,
	getEmptyStateConfig,
	EmptyStateKind,
} from './EmptyStateConfigurations';
import { UnifiedEmptyStateProps } from './UnifiedEmptyState';
import UnifiedEmptyState from './UnifiedEmptyState';

/**
 * Ultra-DRY Empty State Factory
 * Creates configured empty state components from configuration objects
 */
export class EmptyStateFactoryDRY {
	static create(
		config: EmptyStateConfiguration &
			Partial<UnifiedEmptyStateProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<UnifiedEmptyStateProps>
		>((props, ref) =>
			React.createElement(UnifiedEmptyState, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: EmptyStateKind) {
		const config = getEmptyStateConfig(kind);
		return this.create(config);
	}
}

// Pre-configured empty state components
export const EmptyStateComponents = {
	// Data empty states
	NoData: EmptyStateFactoryDRY.createFromKind('no-data'),
	NoResults:
		EmptyStateFactoryDRY.createFromKind('no-results'),
	NoSearchResults: EmptyStateFactoryDRY.createFromKind(
		'no-search-results'
	),
	EmptyTable:
		EmptyStateFactoryDRY.createFromKind('empty-table'),
	EmptyList:
		EmptyStateFactoryDRY.createFromKind('empty-list'),

	// User/Social empty states
	NoFriends:
		EmptyStateFactoryDRY.createFromKind('no-friends'),
	NoMessages:
		EmptyStateFactoryDRY.createFromKind('no-messages'),
	NoNotifications: EmptyStateFactoryDRY.createFromKind(
		'no-notifications'
	),
	NoActivity:
		EmptyStateFactoryDRY.createFromKind('no-activity'),
	EmptyProfile:
		EmptyStateFactoryDRY.createFromKind('empty-profile'),

	// Content empty states
	EmptyFolder:
		EmptyStateFactoryDRY.createFromKind('empty-folder'),
	EmptyCart:
		EmptyStateFactoryDRY.createFromKind('empty-cart'),

	// Error states
	PermissionDenied: EmptyStateFactoryDRY.createFromKind(
		'permission-denied'
	),
	NotFound:
		EmptyStateFactoryDRY.createFromKind('not-found'),
};
