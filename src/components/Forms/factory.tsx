import React, { forwardRef } from 'react';
import {
	FORM_FIELD_CONFIGURATIONS,
	ExtendedFormsKind,
	FormsConfiguration,
	createFormsConfig,
} from './configurations';
import {
	default as Forms,
	FieldKind,
	FormsProps,
} from './Forms';

export interface FormsFactoryProps {
	kind: ExtendedFormsKind;
	value?: any;
	onChange?: (value: any, event?: any) => void;
	error?: string;
	overrideConfig?: Partial<FormsConfiguration>;
	[key: string]: any; // Allow additional props to be passed through
}

/**
 * FormsFactory - Ultra-DRY form field creation using configurations
 *
 * Usage examples:
 * <FormsFactory kind="email" />
 * <FormsFactory kind="password" />
 * <FormsFactory kind="username" />
 * <FormsFactory kind="comment" />
 * <FormsFactory kind="terms-checkbox" />
 */
export const FormsFactory = forwardRef<
	any,
	FormsFactoryProps
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
				createFormsConfig(kind, overrideConfig)
			:	FORM_FIELD_CONFIGURATIONS[kind as ExtendedFormsKind];

		// Map extended kinds to basic field kinds
		const getFieldKind = (
			extendedKind: ExtendedFormsKind
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

		// Build  field props
		const Props: any = {
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
			Props.type =
				kind.includes('-') ? kind.split('-')[0] : kind;
		}

		return <Forms {...Props} />;
	}
);

FormsFactory.displayName = 'FormsFactory';

// Form field presets for common combinations
export const FormsPresets = {
	// Quick form creators
	loginForm: (
		values: any,
		onChange: any,
		errors: any = {}
	) => [
		<FormsFactory
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='firstName'
			kind='first-name'
			value={values.firstName}
			onChange={(v: any) => onChange('firstName', v)}
			error={errors.firstName}
		/>,
		<FormsFactory
			key='lastName'
			kind='last-name'
			value={values.lastName}
			onChange={(v: any) => onChange('lastName', v)}
			error={errors.lastName}
		/>,
		<FormsFactory
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<FormsFactory
			key='password'
			kind='password'
			value={values.password}
			onChange={(v: any) => onChange('password', v)}
			error={errors.password}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='name'
			kind='full-name'
			value={values.name}
			onChange={(v: any) => onChange('name', v)}
			error={errors.name}
		/>,
		<FormsFactory
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<FormsFactory
			key='phone'
			kind='phone'
			value={values.phone}
			onChange={(v: any) => onChange('phone', v)}
			error={errors.phone}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='address'
			kind='address'
			value={values.address}
			onChange={(v: any) => onChange('address', v)}
			error={errors.address}
		/>,
		<FormsFactory
			key='city'
			kind='city'
			value={values.city}
			onChange={(v: any) => onChange('city', v)}
			error={errors.city}
		/>,
		<FormsFactory
			key='state'
			kind='state'
			value={values.state}
			onChange={(v: any) => onChange('state', v)}
			error={errors.state}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='cardNumber'
			kind='credit-card'
			value={values.cardNumber}
			onChange={(v: any) => onChange('cardNumber', v)}
			error={errors.cardNumber}
		/>,
		<FormsFactory
			key='expiry'
			kind='expiry-date'
			value={values.expiry}
			onChange={(v: any) => onChange('expiry', v)}
			error={errors.expiry}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='firstName'
			kind='first-name'
			value={values.firstName}
			onChange={(v: any) => onChange('firstName', v)}
			error={errors.firstName}
		/>,
		<FormsFactory
			key='lastName'
			kind='last-name'
			value={values.lastName}
			onChange={(v: any) => onChange('lastName', v)}
			error={errors.lastName}
		/>,
		<FormsFactory
			key='email'
			kind='email'
			value={values.email}
			onChange={(v: any) => onChange('email', v)}
			error={errors.email}
		/>,
		<FormsFactory
			key='phone'
			kind='phone'
			value={values.phone}
			onChange={(v: any) => onChange('phone', v)}
			error={errors.phone}
		/>,
		<FormsFactory
			key='bio'
			kind='bio'
			value={values.bio}
			onChange={(v: any) => onChange('bio', v)}
			error={errors.bio}
		/>,
		<FormsFactory
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
		<FormsFactory
			key='notifications'
			kind='notification-switch'
			value={values.notifications}
			onChange={(v: any) => onChange('notifications', v)}
			error={errors.notifications}
		/>,
		<FormsFactory
			key='privacy'
			kind='privacy-switch'
			value={values.privacy}
			onChange={(v: any) => onChange('privacy', v)}
			error={errors.privacy}
		/>,
		<FormsFactory
			key='theme'
			kind='theme-switch'
			value={values.theme}
			onChange={(v: any) => onChange('theme', v)}
			error={errors.theme}
		/>,
	],
};

export default FormsFactory;
