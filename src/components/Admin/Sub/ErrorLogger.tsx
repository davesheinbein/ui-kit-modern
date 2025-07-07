import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import styles from '../admin.module.scss';
import type { ErrorLoggerData } from '../configurations';

const ErrorLogger: React.FC<{ data: ErrorLoggerData }> = ({
	data,
}) => (
	<Wrapper className={styles.errorLogger}>
		{data.errors?.length ?
			data.errors.map((error, index) => (
				<div key={index} className={styles.errorEntry}>
					<span className={styles.errorTime}>
						{error.time}
					</span>
					<span className={styles.errorMessage}>
						{error.message}
					</span>
				</div>
			))
		:	<span className={styles.noErrors}>No errors</span>}
	</Wrapper>
);

export default ErrorLogger;
