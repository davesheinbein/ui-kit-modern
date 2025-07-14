import React from 'react';
import styles from '../graphs.module.scss';

export function getRenderEmpty(
	emptyRenderer: any,
	emptyLabel: string
) {
	return emptyRenderer ? emptyRenderer : (
			() => (
				<div className={styles.graphsEmpty}>
					{emptyLabel}
				</div>
			)
		);
}
