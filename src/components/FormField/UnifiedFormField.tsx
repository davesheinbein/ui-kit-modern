import React, { forwardRef } from 'react';
import FormField from './FormField';
import FormFieldBodyFactory from './FormFieldBodyFactory';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormFieldKind,
	FormFieldConfiguration,
} from './FormFieldConfigurations';

export type FieldKind =
	| 'input'
	| 'textarea'
	| 'select'
	| 'checkbox'
	| 'radio'
	| 'radio-group'
	| 'switch'
	| 'range';

export interface UnifiedFormFieldProps {
	kind: FieldKind;
	label?: string;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
	className?: string;
	value?: any;
	onChange?: (value: any, event?: any) => void;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	configuration?: FormFieldConfiguration;
	[key: string]: any;
}

// Union type for all possible props based on kind
export type FormFieldProps = UnifiedFormFieldProps;

const UnifiedFormField = forwardRef<any, FormFieldProps>(
	(
		{
			kind,
			label,
			error,
			helperText,
			fullWidth,
			className,
			configuration,
			...props
		},
		ref
	) => {
		// Get default configuration if not provided
		const config =
			configuration ||
			FORM_FIELD_CONFIGURATIONS[
				'text' as ExtendedFormFieldKind
			];

		return (
			<FormField
				label={label || config?.label}
				error={error}
				helperText={helperText || config?.helperText}
				fullWidth={fullWidth}
				className={className}
				required={props.required}
			>
				<FormFieldBodyFactory
					ref={ref}
					kind={kind}
					configuration={config}
					{...props}
				/>
			</FormField>
		);
	}
);

UnifiedFormField.displayName = 'UnifiedFormField';

export default UnifiedFormField;
