import React from 'react';
import styles from '../Forms.module.scss';
import type { FormsFieldConfig } from './types';
import FieldRenderer from './FieldRenderer';
import FieldLabel from './FieldLabel';
import FieldError from './FieldError';
import FieldHelper from './FieldHelper';

interface FieldWrapperProps {
	field: FormsFieldConfig;
	value: any;
	onFieldChange: (name: string, value: any) => void;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
	field,
	value,
	onFieldChange,
}) => {
	const { name, label, required, helperText, error } =
		field;
	return (
		<div
			className={
				styles.fieldWrapper +
				(error ? ' ' + styles.hasError : '')
			}
		>
			<FieldLabel
				name={name}
				label={label}
				required={required}
			/>
			<div className={styles.fieldContainer}>
				<FieldRenderer
					field={field}
					value={value}
					onFieldChange={onFieldChange}
				/>
			</div>
			<FieldError error={error} />
			<FieldHelper helperText={helperText} />
		</div>
	);
};

export default FieldWrapper;
