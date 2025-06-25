import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../../components/Radios';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Radio> = {
	title: 'Radios/Radio',
	component: Radio,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive radio button component with multiple variants and configurations for different use cases.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'standard',
				'button-group',
				'card-selection',
				'toggle-switch',
				'image-radio',
				'color-picker',
				'size-selector',
				'plan-selector',
				'preference',
				'custom',
			],
			description: 'The type of radio component to render',
		},
		name: {
			control: 'text',
			description: 'The name attribute for the radio group',
		},
		value: {
			control: 'text',
			description:
				'The controlled value of the radio group',
		},
		defaultValue: {
			control: 'text',
			description: 'The default value of the radio group',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the radio group is disabled',
		},
		required: {
			control: 'boolean',
			description: 'Whether the radio group is required',
		},
		label: {
			control: 'text',
			description: 'The label for the radio group',
		},
		helpText: {
			control: 'text',
			description:
				'Help text to display below the radio group',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options for stories
const basicOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
];

const detailedOptions = [
	{
		value: 'basic',
		label: 'Basic Plan',
		description: 'Perfect for individuals getting started',
	},
	{
		value: 'pro',
		label: 'Pro Plan',
		description: 'For professionals who need more features',
	},
	{
		value: 'enterprise',
		label: 'Enterprise Plan',
		description: 'For large teams and organizations',
		disabled: true,
	},
];

const colorOptions = [
	{ value: 'red', label: 'Red' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'green', label: 'Green' },
	{ value: 'yellow', label: 'Yellow' },
];

const sizeOptions = [
	{ value: 'xs', label: 'XS' },
	{ value: 's', label: 'S' },
	{ value: 'm', label: 'M' },
	{ value: 'l', label: 'L' },
	{ value: 'xl', label: 'XL' },
];

export const Standard: Story = {
	args: {
		kind: 'standard',
		name: 'standard-radio',
		options: basicOptions,
		label: 'Choose an option',
		helpText: 'Select one of the available options',
	},
};

export const ButtonGroup: Story = {
	args: {
		kind: 'button-group',
		name: 'button-radio',
		options: basicOptions,
		label: 'Selection Type',
		defaultValue: 'option1',
	},
};

export const CardSelection: Story = {
	args: {
		kind: 'card-selection',
		name: 'plan-radio',
		options: detailedOptions,
		label: 'Choose Your Plan',
		helpText: 'Select the plan that best fits your needs',
	},
};

export const ToggleSwitch: Story = {
	args: {
		kind: 'toggle-switch',
		name: 'toggle-radio',
		options: [
			{ value: 'enabled', label: 'Enabled' },
			{ value: 'disabled', label: 'Disabled' },
		],
		label: 'Feature Status',
	},
};

export const ColorPicker: Story = {
	args: {
		kind: 'color-picker',
		name: 'color-radio',
		options: colorOptions,
		label: 'Choose Color',
		defaultValue: 'blue',
	},
};

export const SizeSelector: Story = {
	args: {
		kind: 'size-selector',
		name: 'size-radio',
		options: sizeOptions,
		label: 'Size',
		defaultValue: 'm',
	},
};

export const PlanSelector: Story = {
	args: {
		kind: 'plan-selector',
		name: 'plan-radio',
		options: detailedOptions,
		label: 'Subscription Plan',
		required: true,
	},
};

export const WithError: Story = {
	args: {
		kind: 'standard',
		name: 'error-radio',
		options: basicOptions,
		label: 'Required Selection',
		error: 'Please select an option to continue',
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		kind: 'standard',
		name: 'disabled-radio',
		options: basicOptions,
		label: 'Disabled Radio Group',
		disabled: true,
		defaultValue: 'option2',
	},
};

export const Preference: Story = {
	args: {
		kind: 'preference',
		name: 'preference-radio',
		options: [
			{
				value: 'email',
				label: 'Email Notifications',
				description: 'Receive updates via email',
			},
			{
				value: 'sms',
				label: 'SMS Notifications',
				description: 'Receive updates via text message',
			},
			{
				value: 'push',
				label: 'Push Notifications',
				description: 'Receive updates in the app',
			},
			{
				value: 'none',
				label: 'No Notifications',
				description: 'Disable all notifications',
			},
		],
		label: 'Notification Preferences',
		helpText:
			'Choose how you would like to receive notifications',
	},
};

// 4. Image Radio Options
export const ImageRadio: Story = {
	args: {
		kind: 'image-radio',
		name: 'image-radio',
		options: [
			{ value: 'cat', label: 'Cat', image: '/cat.png' },
			{ value: 'dog', label: 'Dog', image: '/dog.png' },
		],
		label: 'Choose a pet',
	},
};

// 5. Icon Radio Options
import { FaSun, FaMoon } from 'react-icons/fa';
export const IconRadio: Story = {
	args: {
		kind: 'standard',
		name: 'icon-radio',
		options: [
			{ value: 'light', label: 'Light', icon: <FaSun /> },
			{ value: 'dark', label: 'Dark', icon: <FaMoon /> },
		],
		label: 'Theme',
	},
};

// 10. Radios with Badges
export const BadgedRadio: Story = {
	args: {
		kind: 'standard',
		name: 'badged-radio',
		options: [
			{ value: 'standard', label: 'Standard' },
			{
				value: 'premium',
				label: (
					<>
						<span>Premium</span>{' '}
						<span
							style={{
								background: '#ffd700',
								borderRadius: 4,
								padding: '2px 6px',
								marginLeft: 4,
							}}
						>
							Recommended
						</span>
					</>
				),
			},
		],
		label: 'Choose a plan',
	},
};

// 12. Two-Column Grid Layout
export const GridRadio: Story = {
	args: {
		kind: 'card-selection',
		name: 'grid-radio',
		options: [
			{ value: 'a', label: 'A' },
			{ value: 'b', label: 'B' },
			{ value: 'c', label: 'C' },
			{ value: 'd', label: 'D' },
		],
		label: 'Grid Layout',
	},
};

// 15. Image-only Radios
export const ImageOnlyRadio: Story = {
	args: {
		kind: 'image-radio',
		name: 'image-only-radio',
		options: [
			{
				value: 'pattern1',
				label: '',
				image: '/pattern1.png',
			},
			{
				value: 'pattern2',
				label: '',
				image: '/pattern2.png',
			},
		],
		label: 'Choose a pattern',
	},
};

// 16. Radios with Inline Price or Value
export const PriceRadio: Story = {
	args: {
		kind: 'standard',
		name: 'price-radio',
		options: [
			{
				value: 'standard',
				label: 'Standard',
				description: '$5',
			},
			{
				value: 'premium',
				label: 'Premium',
				description: '$10',
			},
		],
		label: 'Pricing',
	},
};

// 17. Step-by-Step Wizard Radio (single step example)
export const WizardRadio: Story = {
	args: {
		kind: 'standard',
		name: 'wizard-radio',
		options: [
			{ value: 'step1', label: 'Step 1' },
			{ value: 'step2', label: 'Step 2' },
		],
		label: 'Wizard Step',
		helpText: 'Select to continue to the next step',
	},
};
