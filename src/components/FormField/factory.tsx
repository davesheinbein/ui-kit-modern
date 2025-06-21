import React, { forwardRef } from 'react';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormFieldKind,
	FormFieldConfiguration,
	createFormFieldConfig,
} from './configurations';
import {
	default as UnifiedFormField,
	FieldKind,
	FormFieldProps,
} from './UnifiedFormField';

// Ultra-short alias for rapid form field creation
export interface FormFieldFactoryProps {
	kind: ExtendedFormFieldKind;
	value?: any;
	onChange?: (value: any, event?: any) => void;
	error?: string;
	overrideConfig?: Partial<FormFieldConfiguration>;
	[key: string]: any; // Allow additional props to be passed through
}

/**
 * FormFieldFactory - Ultra-DRY form field creation using configurations
 *
 * Usage examples:
 * <FormFieldFactory kind="email" />
 * <FormFieldFactory kind="password" />
 * <FormFieldFactory kind="username" />
 * <FormFieldFactory kind="comment" />
 * <FormFieldFactory kind="terms-checkbox" />
 */
export const FormFieldFactory = forwardRef<
	any,
	FormFieldFactoryProps
>(
	(
		{
			kind,
			value,
			onChange,
			error,
			overrideConfig,
			...props
		},
		ref
	) => {
		const config =
			overrideConfig ?
				createFormFieldConfig(kind, overrideConfig)
			:	FORM_FIELD_CONFIGURATIONS[
					kind as ExtendedFormFieldKind
				];

		// Map extended kinds to basic field kinds
		const getFieldKind = (
			extendedKind: ExtendedFormFieldKind
		): FieldKind => {
			const componentMap: Record<string, FieldKind> = {
				'input': 'input',
				'textarea': 'textarea',
				'select': 'select',
				'checkbox': 'checkbox',
				'radio': 'radio',
				'radio-group': 'radio-group',
				'switch': 'switch',
				'range': 'range',
			};
			return componentMap[config.component] || 'input';
		};

		// Build unified field props
		const unifiedProps: any = {
			ref,
			kind: getFieldKind(kind),
			value,
			onChange,
			error,
			label: config.label,
			placeholder: config.placeholder,
			helperText: config.helperText,
			variant:
				config.variant === 'standard' ?
					'outlined'
				:	config.variant, // Fix variant incompatibility
			size: config.size,
			color: config.color,
			fullWidth: config.fullWidth,
			className: config.className,
			...props, // Props can override config
		};

		// Handle input type for input fields
		if (config.component === 'input') {
			unifiedProps.type =
				kind.includes('-') ? kind.split('-')[0] : kind;
		}

		return <UnifiedFormField {...unifiedProps} />;
	}
);

FormFieldFactory.displayName = 'FormFieldFactory';

// Ultra-short alias for maximum DRYness - just like 'B' for buttons
export const F = FormFieldFactory;

// Form field presets for common combinations
export const FormFieldPresets = {
	// Quick form creators
	loginForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<F
			key='password'
			kind='password'
			value={values.password}
			onChange={(v: any) => onChange('password', v)}
			error={errors.password}
		/>,
	],

	signupForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='firstName'
			kind='first-name'
			value={values.firstName}
			onChange={(v: any) => onChange('firstName', v)}
			error={errors.firstName}
		/>,
		<F
			key='lastName'
			kind='last-name'
			value={values.lastName}
			onChange={(v: any) => onChange('lastName', v)}
			error={errors.lastName}
		/>,
		<F
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<F
			key='password'
			kind='password'
			value={values.password}
			onChange={(v: any) => onChange('password', v)}
			error={errors.password}
		/>,
		<F
			key='terms'
			kind='terms-checkbox'
			value={values.terms}
			onChange={(v: any) => onChange('terms', v)}
			error={errors.terms}
		/>,
	],

	contactForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='name'
			kind='full-name'
			value={values.name}
			onChange={(v: any) => onChange('name', v)}
			error={errors.name}
		/>,
		<F
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<F
			key='phone'
			kind='phone'
			value={values.phone}
			onChange={(v: any) => onChange('phone', v)}
			error={errors.phone}
		/>,
		<F
			key='message'
			kind='message'
			value={values.message}
			onChange={(v: any) => onChange('message', v)}
			error={errors.message}
		/>,
	],

	addressForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='address'
			kind='address'
			value={values.address}
			onChange={(v: any) => onChange('address', v)}
			error={errors.address}
		/>,
		<F
			key='city'
			kind='city'
			value={values.city}
			onChange={(v: any) => onChange('city', v)}
			error={errors.city}
		/>,
		<F
			key='state'
			kind='state'
			value={values.state}
			onChange={(v: any) => onChange('state', v)}
			error={errors.state}
		/>,
		<F
			key='zip'
			kind='zip'
			value={values.zip}
			onChange={(v: any) => onChange('zip', v)}
			error={errors.zip}
		/>,
	],

	paymentForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='cardNumber'
			kind='credit-card'
			value={values.cardNumber}
			onChange={(v: any) => onChange('cardNumber', v)}
			error={errors.cardNumber}
		/>,
		<F
			key='expiry'
			kind='expiry-date'
			value={values.expiry}
			onChange={(v: any) => onChange('expiry', v)}
			error={errors.expiry}
		/>,
		<F
			key='cvv'
			kind='cvv'
			value={values.cvv}
			onChange={(v: any) => onChange('cvv', v)}
			error={errors.cvv}
		/>,
	],

	profileForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='firstName'
			kind='first-name'
			value={values.firstName}
			onChange={(v: any) => onChange('firstName', v)}
			error={errors.firstName}
		/>,
		<F
			key='lastName'
			kind='last-name'
			value={values.lastName}
			onChange={(v: any) => onChange('lastName', v)}
			error={errors.lastName}
		/>,
		<F
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<F
			key='phone'
			kind='phone'
			value={values.phone}
			onChange={(v: any) => onChange('phone', v)}
			error={errors.phone}
		/>,
		<F
			key='bio'
			kind='bio'
			value={values.bio}
			onChange={(v: any) => onChange('bio', v)}
			error={errors.bio}
		/>,
		<F
			key='website'
			kind='website'
			value={values.website}
			onChange={(v: any) => onChange('website', v)}
			error={errors.website}
		/>,
	],

	settingsForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<F
			key='notifications'
			kind='notification-switch'
			value={values.notifications}
			onChange={(v: any) => onChange('notifications', v)}
			error={errors.notifications}
		/>,
		<F
			key='privacy'
			kind='privacy-switch'
			value={values.privacy}
			onChange={(v: any) => onChange('privacy', v)}
			error={errors.privacy}
		/>,
		<F
			key='theme'
			kind='theme-switch'
			value={values.theme}
			onChange={(v: any) => onChange('theme', v)}
			error={errors.theme}
		/>,
	],
};

export default FormFieldFactory;
