import React from 'react';
import styles from '../checkbox.module.scss';

const FlipSwitch: React.FC<{
	id?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}> = ({
	id = 'flip-switch',
	checked = false,
	onChange,
}) => (
	<label className={styles['flip-switch']}>
		<input
			id={id}
			className={styles['flip-switch__input']}
			type='checkbox'
			checked={checked}
			onChange={(e) => onChange?.(e.target.checked)}
		/>
		<span className={styles['flip-switch__toggle']}>
			<span className={styles['flip-switch__left']}>
				off
			</span>
			<span className={styles['flip-switch__right']}>
				on
			</span>
		</span>
	</label>
);

export default FlipSwitch;
