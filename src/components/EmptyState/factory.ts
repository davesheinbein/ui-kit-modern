// src/components/EmptyState/EmptyStateFactory.ts
import React from 'react';
import {
	EmptyStateConfiguration,
	getEmptyStateConfig,
	EmptyStateKind,
} from './configurations';
import { EmptyStateProps } from './EmptyState';
import EmptyState from './EmptyState';

/**
 * Factory Empty State Factory
 * Creates configured empty state components from configuration objects
 */
export class EmptyStateFactory {
	static create(
		config: EmptyStateConfiguration &
			Partial<EmptyStateProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<EmptyStateProps>
		>((props, ref) =>
			React.createElement(EmptyState, {
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
	NoData: EmptyStateFactory.createFromKind('no-data'),
	NoResults: EmptyStateFactory.createFromKind('no-results'),
	NoSearchResults: EmptyStateFactory.createFromKind(
		'no-search-results'
	),
	EmptyTable:
		EmptyStateFactory.createFromKind('empty-table'),
	EmptyList: EmptyStateFactory.createFromKind('empty-list'),

	// User/Social empty states
	NoFriends: EmptyStateFactory.createFromKind('no-friends'),
	NoMessages:
		EmptyStateFactory.createFromKind('no-messages'),
	NoNotifications: EmptyStateFactory.createFromKind(
		'no-notifications'
	),
	NoActivity:
		EmptyStateFactory.createFromKind('no-activity'),
	EmptyProfile:
		EmptyStateFactory.createFromKind('empty-profile'),

	// Content empty states
	EmptyFolder:
		EmptyStateFactory.createFromKind('empty-folder'),
	EmptyCart: EmptyStateFactory.createFromKind('empty-cart'),

	// Error states
	PermissionDenied: EmptyStateFactory.createFromKind(
		'permission-denied'
	),
	NotFound: EmptyStateFactory.createFromKind('not-found'),
};
