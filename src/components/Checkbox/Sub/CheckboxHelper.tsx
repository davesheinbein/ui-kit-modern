import React from 'react';
import { Wrapper } from '../../Wrappers';
import styles from '../checkbox.module.scss';

interface CheckboxHelperProps {
	error?: string;
	helperText?: string;
}

const CheckboxHelper: React.FC<CheckboxHelperProps> = ({
	error,
	helperText,
}) => (
	<>
		{error && (
			<Wrapper className={styles.errorText}>
				{error}
			</Wrapper>
		)}
		{helperText && (
			<Wrapper className={styles.helperText}>
				{helperText}
			</Wrapper>
		)}
	</>
);

export default CheckboxHelper;
