import React from 'react';
import { Button } from '../../Button';
import styles from '../Header.module.scss';
import type {
	HeaderTab,
	HeaderTabsPosition,
	HeaderTabsAlign,
} from './types';

interface TabsProps {
	tabs: HeaderTab[];
	activeTabId?: string;
	onTabChange?: (tab: HeaderTab) => void;
	tabsPosition: HeaderTabsPosition;
	tabsAlign: HeaderTabsAlign;
	testId?: string;
}

const Tabs: React.FC<TabsProps> = ({
	tabs,
	activeTabId,
	onTabChange,
	tabsPosition,
	tabsAlign,
	testId,
}) => {
	if (!tabs.length) return null;

	return (
		<div
			className={[
				styles.tabs,
				styles[`tabs-position-${tabsPosition}`],
				styles[`tabs-align-${tabsAlign}`],
			]
				.filter(Boolean)
				.join(' ')}
			role='tablist'
			aria-label='Tab navigation'
			data-testid={`${testId}-tabs`}
		>
			{tabs.map((tab) => (
				<Button
					key={tab.id}
					kind={
						tab.active || activeTabId === tab.id ?
							'primary'
						:	'ghost'
					}
					size='medium'
					onClick={() => onTabChange?.(tab)}
					href={tab.href}
					disabled={tab.disabled}
					className={[
						styles.tab,
						(tab.active || activeTabId === tab.id) &&
							styles.tabActive,
					]
						.filter(Boolean)
						.join(' ')}
					label={tab.label}
					icon={tab.icon}
					role='tab'
					aria-selected={
						tab.active || activeTabId === tab.id
					}
					data-testid={`${testId}-tab-${tab.id}`}
				>
					{tab.label}
					{tab.badge && (
						<span className={styles.tabBadge}>
							{tab.badge}
						</span>
					)}
				</Button>
			))}
		</div>
	);
};

export default Tabs;
