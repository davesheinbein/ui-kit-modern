// Note: Using generic props since legacy components were removed
// These interfaces are now handled by the DRY system

// Enhanced form field configuration interface
export interface FormFieldConfiguration {
	component:
		| 'input'
		| 'textarea'
		| 'select'
		| 'checkbox'
		| 'radio'
		| 'radio-group'
		| 'switch'
		| 'range';
	variant?:
		| 'outlined'
		| 'filled'
		| 'underlined'
		| 'standard';
	size?: 'small' | 'medium' | 'large';
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'warning';
	fullWidth?: boolean;
	label?: string;
	placeholder?: string;
	helperText?: string;
	validation?: {
		required?: boolean;
		minLength?: number;
		maxLength?: number;
		min?: number;
		max?: number;
		pattern?: string;
		custom?: (value: any) => string | null;
	};
	behavior?:
		| 'standard'
		| 'controlled'
		| 'debounced'
		| 'masked'
		| 'email'
		| 'password'
		| 'search'
		| 'url'
		| 'tel'
		| 'numeric';
	inputMode?:
		| 'text'
		| 'email'
		| 'search'
		| 'tel'
		| 'url'
		| 'numeric'
		| 'decimal';
	autoComplete?: string;
	style?: React.CSSProperties;
	className?: string;
	[key: string]: any;
}

// Comprehensive form field kind definitions
export type ExtendedFormFieldKind =
	// Basic component types (used by stories and DRY system)
	| 'input'
	| 'textarea'
	| 'select'
	| 'checkbox'
	| 'radio'
	| 'radio-group'
	| 'switch'
	| 'range'

	// Extended input types
	| 'email-input'
	| 'password-input'
	| 'search-input'
	| 'number-input'
	| 'tel-input'
	| 'url-input'
	| 'date-input'
	| 'time-input'
	| 'datetime-local-input'
	| 'username-input'
	| 'first-name-input'
	| 'last-name-input'
	| 'verification-code-input'
	| 'credit-card-input'
	| 'cvv-input'
	| 'zip-code-input'
	| 'address-input'
	| 'city-input'
	| 'state-input'
	| 'country-input'
	| 'company-input'
	| 'job-title-input'
	| 'website-input'
	| 'social-handle-input'

	// Extended checkbox types
	| 'terms-checkbox'
	| 'privacy-checkbox'
	| 'newsletter-checkbox'
	| 'consent-checkbox'

	// Extended radio types
	| 'gender-radio'
	| 'subscription-radio'
	| 'payment-radio'

	// Extended switch types
	| 'notification-switch'
	| 'privacy-switch'
	| 'theme-switch'
	| 'marketing-switch'

	// Extended range types
	| 'volume-range'
	| 'brightness-range'
	| 'price-range'
	| 'age-range'

	// Extended select types
	| 'country-select'
	| 'language-select'
	| 'timezone-select'
	| 'currency-select'

	// Extended textarea types
	| 'comment'
	| 'description'
	| 'message'
	| 'bio'
	| 'feedback'

	// Legacy backward compatibility
	| 'text'
	| 'email'
	| 'password'
	| 'search'
	| 'tel'
	| 'url'
	| 'number'
	| 'date'
	| 'time'
	| 'datetime-local'
	| 'file'
	| 'hidden'
	| 'custom';

// Predefined configurations for maximum DRYness
export const FORM_FIELD_CONFIGURATIONS: Record<
	ExtendedFormFieldKind,
	FormFieldConfiguration
> = {
	// Basic component types (used by stories)
	'input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'textarea': {
		component: 'textarea',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'select': {
		component: 'select',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'checkbox': {
		component: 'checkbox',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'radio': {
		component: 'radio',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'radio-group': {
		component: 'radio-group',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'switch': {
		component: 'switch',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'range': {
		component: 'range',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},

	// Extended input types
	'email-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'email',
		inputMode: 'email',
		autoComplete: 'email',
	},
	'password-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'password',
		autoComplete: 'current-password',
	},
	'search-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'search',
		inputMode: 'search',
		placeholder: 'Search...',
	},
	'number-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'numeric',
	},
	'tel-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'tel',
		autoComplete: 'tel',
	},
	'url-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'url',
		autoComplete: 'url',
	},
	'date-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'time-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'datetime-local-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'username-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Username',
		placeholder: 'Enter username',
		autoComplete: 'username',
	},
	'first-name-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'First Name',
		placeholder: 'Enter first name',
		autoComplete: 'given-name',
	},
	'last-name-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Last Name',
		placeholder: 'Enter last name',
		autoComplete: 'family-name',
	},
	'verification-code-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Verification Code',
		placeholder: 'Enter code',
		inputMode: 'numeric',
	},
	'credit-card-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Card Number',
		placeholder: '1234 5678 9012 3456',
		autoComplete: 'cc-number',
	},
	'cvv-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'CVV',
		placeholder: '123',
		autoComplete: 'cc-csc',
	},
	'zip-code-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'ZIP Code',
		placeholder: '12345',
		autoComplete: 'postal-code',
	},
	'address-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Address',
		placeholder: 'Enter address',
		autoComplete: 'street-address',
	},
	'city-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'City',
		placeholder: 'Enter city',
		autoComplete: 'address-level2',
	},
	'state-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'State',
		placeholder: 'Enter state',
		autoComplete: 'address-level1',
	},
	'country-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Country',
		placeholder: 'Enter country',
		autoComplete: 'country',
	},
	'company-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Company',
		placeholder: 'Enter company',
		autoComplete: 'organization',
	},
	'job-title-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Job Title',
		placeholder: 'Enter job title',
		autoComplete: 'organization-title',
	},
	'website-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Website',
		placeholder: 'https://example.com',
		inputMode: 'url',
		autoComplete: 'url',
	},
	'social-handle-input': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		label: 'Social Handle',
		placeholder: '@username',
	},

	// Extended checkbox types
	'terms-checkbox': {
		component: 'checkbox',
		variant: 'outlined',
		size: 'medium',
		label: 'I agree to the terms and conditions',
		validation: {
			required: true,
		},
	},
	'privacy-checkbox': {
		component: 'checkbox',
		variant: 'outlined',
		size: 'medium',
		label: 'I agree to the privacy policy',
		validation: {
			required: true,
		},
	},
	'newsletter-checkbox': {
		component: 'checkbox',
		variant: 'outlined',
		size: 'medium',
		label: 'Subscribe to newsletter',
	},
	'consent-checkbox': {
		component: 'checkbox',
		variant: 'outlined',
		size: 'medium',
		label: 'I give my consent',
		validation: {
			required: true,
		},
	},

	// Extended radio types
	'gender-radio': {
		component: 'radio-group',
		variant: 'outlined',
		size: 'medium',
		label: 'Gender',
	},
	'subscription-radio': {
		component: 'radio-group',
		variant: 'outlined',
		size: 'medium',
		label: 'Subscription Plan',
	},
	'payment-radio': {
		component: 'radio-group',
		variant: 'outlined',
		size: 'medium',
		label: 'Payment Method',
	},

	// Extended switch types
	'notification-switch': {
		component: 'switch',
		variant: 'outlined',
		size: 'medium',
		label: 'Enable notifications',
	},
	'privacy-switch': {
		component: 'switch',
		variant: 'outlined',
		size: 'medium',
		label: 'Privacy mode',
	},
	'theme-switch': {
		component: 'switch',
		variant: 'outlined',
		size: 'medium',
		label: 'Dark theme',
	},
	'marketing-switch': {
		component: 'switch',
		variant: 'outlined',
		size: 'medium',
		label: 'Marketing emails',
	},

	// Extended range types
	'volume-range': {
		component: 'range',
		variant: 'outlined',
		size: 'medium',
		label: 'Volume',
	},
	'brightness-range': {
		component: 'range',
		variant: 'outlined',
		size: 'medium',
		label: 'Brightness',
	},
	'price-range': {
		component: 'range',
		variant: 'outlined',
		size: 'medium',
		label: 'Price Range',
	},
	'age-range': {
		component: 'range',
		variant: 'outlined',
		size: 'medium',
		label: 'Age',
	},

	// Extended select types
	'country-select': {
		component: 'select',
		variant: 'outlined',
		size: 'medium',
		label: 'Country',
	},
	'language-select': {
		component: 'select',
		variant: 'outlined',
		size: 'medium',
		label: 'Language',
	},
	'timezone-select': {
		component: 'select',
		variant: 'outlined',
		size: 'medium',
		label: 'Timezone',
	},
	'currency-select': {
		component: 'select',
		variant: 'outlined',
		size: 'medium',
		label: 'Currency',
	},

	// Extended textarea types
	'comment': {
		component: 'textarea',
		variant: 'outlined',
		size: 'medium',
		label: 'Comment',
		placeholder: 'Enter your comment...',
		helperText: 'Share your thoughts',
	},
	'description': {
		component: 'textarea',
		variant: 'outlined',
		size: 'large',
		label: 'Description',
		placeholder: 'Enter description...',
	},
	'message': {
		component: 'textarea',
		variant: 'outlined',
		size: 'medium',
		label: 'Message',
		placeholder: 'Type your message...',
	},
	'bio': {
		component: 'textarea',
		variant: 'outlined',
		size: 'large',
		label: 'Bio',
		placeholder: 'Tell us about yourself...',
	},
	'feedback': {
		component: 'textarea',
		variant: 'outlined',
		size: 'medium',
		label: 'Feedback',
		placeholder: 'Your feedback...',
	},

	// Legacy backward compatibility
	'text': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
	'email': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'email',
		inputMode: 'email',
		autoComplete: 'email',
	},
	'password': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'password',
		autoComplete: 'current-password',
	},
	'search': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'search',
		inputMode: 'search',
		placeholder: 'Search...',
	},
	'tel': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'tel',
		autoComplete: 'tel',
	},
	'url': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'url',
		autoComplete: 'url',
	},
	'number': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		inputMode: 'numeric',
	},
	'date': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'time': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'datetime-local': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'file': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'hidden': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
	},
	'custom': {
		component: 'input',
		variant: 'outlined',
		size: 'medium',
		behavior: 'standard',
	},
};

// Form field groups for easy organization
export const FORM_FIELD_GROUPS = {
	basic: [
		'input',
		'textarea',
		'select',
		'checkbox',
		'radio',
		'radio-group',
		'switch',
		'range',
	],
	inputs: [
		'input',
		'email-input',
		'password-input',
		'search-input',
		'number-input',
		'tel-input',
		'url-input',
		'date-input',
		'time-input',
		'datetime-local-input',
	],
	personal: [
		'username-input',
		'first-name-input',
		'last-name-input',
		'email-input',
		'tel-input',
		'address-input',
		'city-input',
		'state-input',
		'country-input',
	],
	business: [
		'company-input',
		'job-title-input',
		'website-input',
		'social-handle-input',
	],
	payment: [
		'credit-card-input',
		'cvv-input',
		'zip-code-input',
	],
	checkboxes: [
		'checkbox',
		'terms-checkbox',
		'privacy-checkbox',
		'newsletter-checkbox',
		'consent-checkbox',
	],
	switches: [
		'switch',
		'notification-switch',
		'privacy-switch',
		'theme-switch',
		'marketing-switch',
	],
	ranges: [
		'range',
		'volume-range',
		'brightness-range',
		'price-range',
		'age-range',
	],
	selects: [
		'select',
		'country-select',
		'language-select',
		'timezone-select',
		'currency-select',
	],
	textareas: [
		'textarea',
		'comment',
		'description',
		'message',
		'bio',
		'feedback',
	],
};

// Form field presets for common combinations
export const FORM_FIELD_PRESETS = {
	loginForm: ['email-input', 'password-input'],
	registrationForm: [
		'first-name-input',
		'last-name-input',
		'email-input',
		'password-input',
		'terms-checkbox',
	],
	profileForm: [
		'first-name-input',
		'last-name-input',
		'email-input',
		'tel-input',
		'bio',
	],
	addressForm: [
		'address-input',
		'city-input',
		'state-input',
		'zip-code-input',
		'country-select',
	],
	paymentForm: [
		'credit-card-input',
		'cvv-input',
		'zip-code-input',
	],
	settingsForm: [
		'notification-switch',
		'privacy-switch',
		'theme-switch',
		'marketing-switch',
	],
};

// Helper function to create custom form field configurations
export const createFormFieldConfig = (
	baseKind: ExtendedFormFieldKind,
	overrides: Partial<FormFieldConfiguration>
): FormFieldConfiguration => {
	const baseConfig = FORM_FIELD_CONFIGURATIONS[baseKind];
	if (!baseConfig) {
		throw new Error(`Unknown form field kind: ${baseKind}`);
	}

	return {
		...baseConfig,
		...overrides,
		validation: {
			...baseConfig.validation,
			...overrides.validation,
		},
	};
};

// Helper function to validate form field values
export const validateFormField = (
	value: any,
	config: FormFieldConfiguration
): string | null => {
	const { validation } = config;
	if (!validation) return null;

	if (
		validation.required &&
		(!value ||
			(typeof value === 'string' && value.trim() === ''))
	) {
		return 'This field is required';
	}

	if (typeof value === 'string') {
		if (
			validation.minLength &&
			value.length < validation.minLength
		) {
			return `Minimum length is ${validation.minLength} characters`;
		}

		if (
			validation.maxLength &&
			value.length > validation.maxLength
		) {
			return `Maximum length is ${validation.maxLength} characters`;
		}

		if (
			validation.pattern &&
			!new RegExp(validation.pattern).test(value)
		) {
			return 'Invalid format';
		}
	}

	if (typeof value === 'number') {
		if (
			validation.min !== undefined &&
			value < validation.min
		) {
			return `Minimum value is ${validation.min}`;
		}

		if (
			validation.max !== undefined &&
			value > validation.max
		) {
			return `Maximum value is ${validation.max}`;
		}
	}

	if (validation.custom) {
		return validation.custom(value);
	}

	return null;
};
