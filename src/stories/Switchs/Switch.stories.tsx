import type { Meta, StoryObj } from '@storybook/react';
import { SwitchFactory } from '../../components/Switchs';
import {
	commonDecorators,
	reduxDecorator,
} from '../config/decorators';

const meta: Meta<typeof SwitchFactory> = {
	title: 'Switch',
	component: SwitchFactory,
	decorators: [reduxDecorator, ...commonDecorators],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A versatile switch component for toggling between on/off states with various styles and configurations.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'toggle',
				'checkbox-switch',
				'button-switch',
				'slider-switch',
				'dark-mode-toggle',
				'notification-toggle',
				'privacy-switch',
				'feature-toggle',
				'power-switch',
				'custom',
			],
			description: 'The type of switch component to render',
		},
		checked: {
			control: 'boolean',
			description: 'Whether the switch is checked',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the switch is disabled',
		},
		required: {
			control: 'boolean',
			description: 'Whether the switch is required',
		},
		label: {
			control: 'text',
			description: 'The label for the switch',
		},
		onLabel: {
			control: 'text',
			description: 'Label to show when switch is on',
		},
		offLabel: {
			control: 'text',
			description: 'Label to show when switch is off',
		},
		helpText: {
			control: 'text',
			description: 'Help text to display below the switch',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
	args: {
		kind: 'toggle',
		label: 'Enable notifications',
		helpText: 'Receive alerts when something happens',
	},
};

export const CheckboxSwitch: Story = {
	args: {
		kind: 'checkbox-switch',
		label: 'Agree to terms',
		required: true,
	},
};

export const ButtonSwitch: Story = {
	args: {
		kind: 'button-switch',
		label: 'Auto-save',
		onLabel: 'On',
		offLabel: 'Off',
		defaultChecked: true,
	},
};

export const SliderSwitch: Story = {
	args: {
		kind: 'slider-switch',
		label: 'Enable feature',
		helpText: 'This will activate the new feature',
	},
};

export const DarkModeToggle: Story = {
	args: {
		kind: 'dark-mode-toggle',
		label: 'Dark mode',
		helpText: 'Switch between light and dark themes',
	},
};

export const NotificationToggle: Story = {
	args: {
		kind: 'notification-toggle',
		label: 'Push notifications',
		onLabel: 'Enabled',
		offLabel: 'Disabled',
	},
};

export const PrivacySwitch: Story = {
	args: {
		kind: 'privacy-switch',
		label: 'Make profile public',
		helpText:
			'Allow others to see your profile information',
	},
};

export const FeatureToggle: Story = {
	args: {
		kind: 'feature-toggle',
		label: 'Beta features',
		onLabel: 'Enabled',
		offLabel: 'Disabled',
		helpText: 'Access experimental features',
	},
};

export const PowerSwitch: Story = {
	args: {
		kind: 'power-switch',
		label: 'System power',
		helpText: 'Turn the system on or off',
	},
};

export const WithError: Story = {
	args: {
		kind: 'toggle',
		label: 'Required toggle',
		error: 'This setting must be enabled to continue',
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		kind: 'toggle',
		label: 'Disabled switch',
		disabled: true,
		checked: true,
		helpText: 'This switch cannot be changed',
	},
};
