import React, { forwardRef } from 'react';
import styles from './FormField.module.scss';

export interface FormFieldProps {
	children: React.ReactNode;
	className?: string;
	label?: string;
	error?: string;
	helperText?: string;
	required?: boolean;
	fullWidth?: boolean;
}

/**
 * Base FormField component - provides consistent styling and layout
 * Use this as the foundation for all form field types
 * Similar to the Modal base component
 */
const FormField = forwardRef<
	HTMLDivElement,
	FormFieldProps
>(
	(
		{
			children,
			className = '',
			label,
			error,
			helperText,
			required = false,
			fullWidth = false,
			...props
		},
		ref
	) => {
		const fieldWrapperClass = [
			styles.fieldWrapper,
			fullWidth && styles.fullWidth,
			error && styles.hasError,
			className,
		]
			.filter(Boolean)
			.join(' ');

		return (
			<div
				ref={ref}
				className={fieldWrapperClass}
				{...props}
			>
				{label && (
					<label className={styles.label}>
						{label}
						{required && (
							<span className={styles.required}>*</span>
						)}
					</label>
				)}
				<div className={styles.fieldContainer}>
					{children}
				</div>
				{error && (
					<span className={styles.errorText}>{error}</span>
				)}
				{helperText && !error && (
					<span className={styles.helperText}>
						{helperText}
					</span>
				)}
			</div>
		);
	}
);

FormField.displayName = 'FormField';

export default FormField;
