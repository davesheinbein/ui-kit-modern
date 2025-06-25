import React from 'react';
import { Wrapper } from '../Wrappers';
import Header from './Header';
import {
	TabConfiguration,
	ActionConfiguration,
} from './configurations';

export { default as Header } from './Header';
export type {
	HeaderKind,
	HeaderProps,
	HeaderVariant,
} from './Header';

export * from './configurations';

// =============================================================================
// BACKWARD COMPATIBILITY WRAPPERS
// =============================================================================

export interface BrowseHeaderProps {
	title: string;
	tabs: { label: string; value: string }[];
	currentTab: string;
	setTab: (tab: string) => void;
	onBack: () => void;
}

/**
 * BrowseHeader - Legacy component using the new DRY Header system
 * @deprecated Use Header or Header with kind="browse-tabbed" instead
 */
export const BrowseHeader: React.FC<BrowseHeaderProps> = ({
	title,
	tabs,
	currentTab,
	setTab,
	onBack,
}) => {
	// Convert legacy tab format to new TabConfiguration format
	const convertedTabs: TabConfiguration[] = tabs.map(
		(tab) => ({
			label: tab.label,
			value: tab.value,
		})
	);

	// Convert legacy onBack to ActionConfiguration format
	const actions: ActionConfiguration[] = [
		{
			type: 'back',
			handler: onBack,
		},
	];

	return (
		<Header
			kind='browse-tabbed'
			title={title}
			tabs={convertedTabs}
			currentTab={currentTab}
			onTabChange={setTab}
			actions={actions}
		/>
	);
};
