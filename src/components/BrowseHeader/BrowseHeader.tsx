import React from 'react';
import { GoBackButton } from '../GoBackButton';
import styles from './BrowseHeader.module.scss';

export interface BrowseHeaderProps {
	title: string;
	tabs: { label: string; value: string }[];
	currentTab: string;
	setTab: (tab: string) => void;
	onBack: () => void;
}

const BrowseHeader: React.FC<BrowseHeaderProps> = ({
	title,
	tabs,
	currentTab,
	setTab,
	onBack,
}) => (
	<div className={styles.browsePuzzlesHeader}>
		<GoBackButton
			onClick={onBack}
			className={styles.backIconBtn}
		/>
		<div
			className={styles.browsePuzzlesHeaderTitle}
			style={{ flex: 1 }}
		>
			<h1 className={styles.gridRoyaleTitle}>{title}</h1>
			<div className={styles.browsePuzzlesTabs}>
				{tabs.map((tab) => (
					<button
						key={tab.value}
						onClick={() => setTab(tab.value)}
						className={
							currentTab === tab.value ? styles.active : ''
						}
					>
						{tab.label}
					</button>
				))}
			</div>
		</div>
	</div>
);

export default BrowseHeader;
