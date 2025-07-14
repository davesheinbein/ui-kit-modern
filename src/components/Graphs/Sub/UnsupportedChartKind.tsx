import React from 'react';
import styles from '../graphs.module.scss';

interface UnsupportedChartKindProps {
	kind: string;
	comingSoon?: boolean;
	message?: string;
}

const UnsupportedChartKind: React.FC<
	UnsupportedChartKindProps
> = ({ kind, comingSoon = false, message }) => (
	<div className={styles.graphs__unsupportedKind}>
		{comingSoon ?
			<>
				<b>{kind}</b> chart type coming soon!
				<br />
				<small>
					{message ||
						'This chart type requires additional libraries.'}
				</small>
			</>
		:	<>
				Unsupported graph kind: <b>{kind}</b>
			</>
		}
	</div>
);

export default UnsupportedChartKind;
