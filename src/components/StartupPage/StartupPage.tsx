import React from 'react';
import styles from './StartupPage.module.scss';

export interface StartupPageProps {
	onStartDaily: () => void;
	onStartCustom: () => void;
	onBrowseCustom: () => void;
	onShare?: () => void;
}

const StartupPage: React.FC<StartupPageProps> = ({
	onStartDaily,
	onStartCustom,
	onBrowseCustom,
	onShare,
}) => (
	<div className={styles.startupPageContainer}>
		<h1 className={styles.gridRoyaleTitle}>Grid Royale</h1>
		<div className={styles.startupHeaderRow}>
			<button onClick={onStartDaily}>Start Daily</button>
			<button onClick={onStartCustom}>Start Custom</button>
			<button onClick={onBrowseCustom}>
				Browse Custom
			</button>
			{onShare && <button onClick={onShare}>Share</button>}
		</div>
	</div>
);

export default StartupPage;
