import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import Tabs from './Tabs';
import Actions from './Actions';
import MobileMenuButton from './MobileMenuButton';
import {
	HeaderProps,
	HeaderNavigationPosition,
	HeaderNavigationLayout,
	HeaderSearchPosition,
	HeaderTabsPosition,
	HeaderTabsAlign,
	HeaderActionsAlign,
	HeaderMobileLayout,
} from './types';

const DEFAULT_NAV_POSITION = HeaderNavigationPosition.Left;
const DEFAULT_NAV_LAYOUT =
	HeaderNavigationLayout.Horizontal;
const DEFAULT_SEARCH_POSITION = HeaderSearchPosition.Right;
const DEFAULT_TABS_POSITION = HeaderTabsPosition.Below;
const DEFAULT_TABS_ALIGN = HeaderTabsAlign.Left;
const DEFAULT_ACTIONS_ALIGN = HeaderActionsAlign.Right;
const DEFAULT_MOBILE_LAYOUT = HeaderMobileLayout.Hamburger;

/**
 * Orchestrates which header sections to render and in what order, based on props.
 */
export const SectionOrchestrator: React.FC<HeaderProps> = (
	props
) => {
	const {
		navigation = [],
		navigationPosition = DEFAULT_NAV_POSITION,
		navigationLayout = DEFAULT_NAV_LAYOUT,
		onNavigationClick,
		activeNavigationId,
		search,
		searchPosition = DEFAULT_SEARCH_POSITION,
		searchFullWidthMobile = false,
		tabs = [],
		activeTabId,
		onTabChange,
		tabsPosition = DEFAULT_TABS_POSITION,
		tabsAlign = DEFAULT_TABS_ALIGN,
		actions = [],
		primaryAction,
		secondaryActions = [],
		actionsAlign = DEFAULT_ACTIONS_ALIGN,
		mobileLayout = DEFAULT_MOBILE_LAYOUT,
		mobileMenuOpen = false,
		setMobileMenuOpen,
		onMobileMenuToggle,
		testId,
		...rest
	} = props;

	const sections: React.ReactNode[] = [];

	if (navigation && navigation.length > 0) {
		sections.push(
			<Navigation
				key='navigation'
				navigation={navigation}
				navigationPosition={navigationPosition}
				navigationLayout={navigationLayout}
				onNavigationClick={onNavigationClick}
				activeNavigationId={activeNavigationId}
				testId={testId}
			/>
		);
	}
	if (search) {
		sections.push(
			<Search
				key='search'
				search={search}
				searchPosition={searchPosition}
				searchFullWidthMobile={!!searchFullWidthMobile}
				testId={testId}
			/>
		);
	}
	if (tabs && tabs.length > 0) {
		sections.push(
			<Tabs
				key='tabs'
				tabs={tabs}
				activeTabId={activeTabId}
				onTabChange={onTabChange}
				tabsPosition={tabsPosition}
				tabsAlign={tabsAlign}
				testId={testId}
			/>
		);
	}
	if (
		actions.length > 0 ||
		primaryAction ||
		(secondaryActions && secondaryActions.length > 0)
	) {
		sections.push(
			<Actions
				key='actions'
				primaryAction={primaryAction}
				actions={actions}
				secondaryActions={secondaryActions}
				actionsAlign={actionsAlign}
				testId={testId}
			/>
		);
	}
	sections.push(
		<MobileMenuButton
			key='mobileMenuButton'
			mobileLayout={mobileLayout}
			mobileMenuOpen={!!mobileMenuOpen}
			setMobileMenuOpen={setMobileMenuOpen}
			onMobileMenuToggle={onMobileMenuToggle}
			testId={testId}
		/>
	);

	return <>{sections}</>;
};
