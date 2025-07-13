import React from 'react';
import styles from '../checkbox.module.scss';

const NebulaCheckbox: React.FC<{
	id?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}> = ({
	id = 'nebula-checkbox',
	checked = false,
	onChange,
}) => (
	<label className={styles['nebula']}>
		<input
			id={id}
			type='checkbox'
			checked={checked}
			onChange={(e) => onChange?.(e.target.checked)}
			className={styles['checkboxInput']}
		/>
		<div className={styles['checkbox-wrapper']}>
			<div className={styles['checkmark']}></div>
			<div className={styles['nebula-glow']}></div>
			<div className={styles['sparkle-container']}></div>
		</div>
	</label>
);

export default NebulaCheckbox;
