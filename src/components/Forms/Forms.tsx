import React, { forwardRef } from 'react';
import { Wrapper } from '../Wrappers';
import styles from './Forms.module.scss';
import FieldWrapper from './Sub/FieldWrapper';
import { updateFormValue } from './Sub/formUtils';
import type { FormsProps } from './Sub/types';

const Forms = forwardRef<any, FormsProps>(
	(
		{
			fields,
			values = {},
			onChange,
			onSubmit,
			error,
			helperText,
			fullWidth,
			className,
			children,
			...props
		},
		ref
	) => {
		const handleFieldChange = (
			name: string,
			value: any
		) => {
			const newValues = updateFormValue(
				values,
				name,
				value
			);
			onChange?.(newValues);
		};

		return (
			<form ref={ref} className={className} {...props}>
				{fields.map((field) => (
					<FieldWrapper
						key={field.name}
						field={field}
						value={values[field.name]}
						onFieldChange={handleFieldChange}
					/>
				))}
				{error && (
					<div className={styles.errorText}>{error}</div>
				)}
				{helperText && (
					<div className={styles.helperText}>
						{helperText}
					</div>
				)}
				{children}
			</form>
		);
	}
);
Forms.displayName = 'Forms';

export default Forms;
export { Forms };
