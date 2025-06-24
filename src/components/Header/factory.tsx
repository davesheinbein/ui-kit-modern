import React from 'react';
import { Wrapper } from '../Wrappers';
import Header, { HeaderProps, HeaderKind } from './Header';
import {
	HEADER_CONFIGURATIONS,
	HEADER_GROUPS,
	QUICK_HEADERS,
	HeaderConfiguration,
	TabConfiguration,
	ActionConfiguration,
} from './configurations';

/**
 * Header Factory - Creates headers with minimal configuration
 * This is the most DRY way to create headers in the entire system
 */
export class HeaderFactory {
	/**
	 * Create a header with a specific kind and minimal props
	 */
	static create(
		kind: HeaderKind,
		props: Partial<HeaderProps> = {}
	): React.ReactElement<HeaderProps> {
		return React.createElement(Header, {
			kind,
			...props,
		});
	}

	/**
	 * Create multiple headers from a group configuration
	 */
	static createGroup(
		groupConfig: Record<
			string,
			{
				kind: HeaderKind;
				props?: Partial<HeaderProps>;
			}
		>,
		sharedProps: Partial<HeaderProps> = {}
	): Record<string, React.ReactElement<HeaderProps>> {
		return Object.fromEntries(
			Object.entries(groupConfig).map(
				([key, { kind, props = {} }]) => [
					key,
					HeaderFactory.create(kind, {
						...sharedProps,
						...props,
					}),
				]
			)
		);
	}

	/**
	 * Get configuration for a specific header kind
	 */
	static getConfig(kind: HeaderKind): HeaderConfiguration {
		return HEADER_CONFIGURATIONS[kind];
	}

	/**
	 * Create a header with custom configuration overrides
	 */
	static createWithOverrides(
		kind: HeaderKind,
		overrides: Partial<HeaderConfiguration>,
		props: Partial<HeaderProps> = {}
	): React.ReactElement<HeaderProps> {
		return HeaderFactory.create(kind, {
			...props,
			overrideConfig: overrides,
		});
	}

	/**
	 * Quick header creation methods
	 */
	static modal(
		title: string,
		onClose: () => void,
		props: Partial<HeaderProps> = {}
	) {
		return HeaderFactory.create('modal', {
			title,
			actions: [{ type: 'close', handler: onClose }],
			...props,
		});
	}

	static browse(
		title: string,
		onBack: () => void,
		props: Partial<HeaderProps> = {}
	) {
		return HeaderFactory.create('browse', {
			title,
			actions: [{ type: 'back', handler: onBack }],
			...props,
		});
	}

	static browseWithTabs(
		title: string,
		tabs: TabConfiguration[],
		currentTab: string,
		onTabChange: (tab: string) => void,
		onBack: () => void,
		props: Partial<HeaderProps> = {}
	) {
		return HeaderFactory.create('browse-tabbed', {
			title,
			tabs,
			currentTab,
			onTabChange,
			actions: [{ type: 'back', handler: onBack }],
			...props,
		});
	}

	static page(
		title: string,
		props: Partial<HeaderProps> = {}
	) {
		return HeaderFactory.create('page', {
			title,
			...props,
		});
	}

	static dashboard(
		title: string,
		actions: ActionConfiguration[] = [],
		props: Partial<HeaderProps> = {}
	) {
		return HeaderFactory.create('dashboard', {
			title,
			rightActions: actions,
			...props,
		});
	}
}

/**
 * Header presets with common patterns
 */
export const HeaderPresets = {
	// Modal headers
	MODAL_WITH_CLOSE: (title: string, onClose: () => void) =>
		HeaderFactory.modal(title, onClose),

	MODAL_CLOSE_ONLY: (onClose: () => void) =>
		HeaderFactory.create('modal-close-only', {
			actions: [{ type: 'close', handler: onClose }],
		}),

	// Browse headers
	BROWSE_SIMPLE: (title: string, onBack: () => void) =>
		HeaderFactory.browse(title, onBack),

	BROWSE_WITH_TABS: (
		title: string,
		tabs: TabConfiguration[],
		currentTab: string,
		onTabChange: (tab: string) => void,
		onBack: () => void
	) =>
		HeaderFactory.browseWithTabs(
			title,
			tabs,
			currentTab,
			onTabChange,
			onBack
		),

	// Page headers
	PAGE_TITLE: (title: string) => HeaderFactory.page(title),

	PAGE_WITH_BACK: (title: string, onBack: () => void) =>
		HeaderFactory.create('page-with-nav', {
			title,
			leftActions: [{ type: 'back', handler: onBack }],
		}),

	// Dashboard headers
	DASHBOARD_BASIC: (title: string) =>
		HeaderFactory.dashboard(title),

	DASHBOARD_WITH_MENU: (
		title: string,
		onMenuClick: () => void
	) =>
		HeaderFactory.dashboard(title, [
			{ type: 'menu', handler: onMenuClick, label: 'Menu' },
		]),

	// Settings headers
	SETTINGS: (title: string, onBack: () => void) =>
		HeaderFactory.create('settings-header', {
			title,
			leftActions: [{ type: 'back', handler: onBack }],
		}),

	SETTINGS_WITH_TABS: (
		title: string,
		tabs: TabConfiguration[],
		currentTab: string,
		onTabChange: (tab: string) => void,
		onBack: () => void
	) =>
		HeaderFactory.create('settings-header', {
			title,
			tabs,
			currentTab,
			onTabChange,
			leftActions: [{ type: 'back', handler: onBack }],
		}),

	// Game headers
	GAME: (
		title: string,
		leftActions: ActionConfiguration[] = [],
		rightActions: ActionConfiguration[] = []
	) =>
		HeaderFactory.create('game-header', {
			title,
			leftActions,
			rightActions,
		}),

	// Profile headers
	PROFILE: (
		title: string,
		rightActions: ActionConfiguration[] = []
	) =>
		HeaderFactory.create('profile-header', {
			title,
			rightActions,
		}),
} as const;

/**
 * Utility function to create a header with the factory pattern
 */
export const createHeader = HeaderFactory.create;

export default HeaderFactory;
