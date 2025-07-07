import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import InfoRow from './InfoRow';
import styles from '../admin.module.scss';
import type { DebugPanelData } from '../configurations';

const DebugPanel: React.FC<{ data: DebugPanelData }> = ({
	data,
}) => (
	<Wrapper className={styles.debugPanel}>
		<div className={styles.panelHeaderTitle}>
			Debug Panel
		</div>
		{data && Object.keys(data).length ?
			Object.entries(data).map(([key, value]) => (
				<InfoRow
					key={key}
					label={key}
					value={String(value)}
				/>
			))
		:	<span className={styles.noDebugData}>
				No debug data
			</span>
		}
	</Wrapper>
);

export default DebugPanel;
