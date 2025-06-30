import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../../components/Radios';
import { StatefulRadio } from '../../utils/storyHelpers';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Radio> = {
	title: 'Radios/Radio',
	component: Radio,
	decorators: commonDecorators,
	tags: ['autodocs'],
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
		selected: {
			control: 'text',
			description:
				'The controlled value of the radio group',
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
		footerText: {
			control: 'text',
			description:
				'Footer text (help or error) to display below the radio group',
		},
		footerType: {
			control: 'select',
			options: ['help', 'error'],
			description: 'Type of footer text',
		},
		configuration: {
			control: 'object',
			description:
				'Advanced configuration for layout, style, etc.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- One story per variant ---
export const Standard: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'standard',
		name: 'standard-radio',
		selected: 'option1',
		options: [
			{
				value: 'option1',
				label: 'Option 1',
				meta: { description: 'First option', icon: '🔵' },
			},
			{
				value: 'option2',
				label: 'Option 2',
				meta: { description: 'Second option', icon: '🟢' },
			},
			{
				value: 'option3',
				label: 'Option 3',
				meta: { description: 'Third option', icon: '🟣' },
			},
		],
		label: 'Standard Radio',
		footerText: 'Select one of the available options',
		footerType: 'help',
		configuration: {
			variant: 'standard',
			size: 'medium',
			alignment: 'vertical',
			showLabels: true,
			showDescriptions: true,
			labelPosition: 'right',
		},
	},
};

export const ButtonGroup: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'button-group',
		name: 'button-radio',
		selected: 'option1',
		options: [
			{
				value: 'option1',
				label: 'Button 1',
				meta: { icon: '🔘' },
			},
			{
				value: 'option2',
				label: 'Button 2',
				meta: { icon: '🔘' },
			},
		],
		label: 'Button Group',
		footerText: 'Choose a button',
		configuration: {
			variant: 'button',
			size: 'medium',
			alignment: 'horizontal',
			showLabels: true,
			labelPosition: 'right',
		},
	},
};

export const CardSelection: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'card-selection',
		name: 'card-radio',
		selected: 'card1',
		options: [
			{
				value: 'card1',
				label: 'Card 1',
				meta: {
					description: 'Card one',
					image: 'https://picsum.photos/40/40?random=1',
				},
			},
			{
				value: 'card2',
				label: 'Card 2',
				meta: {
					description: 'Card two',
					image: 'https://picsum.photos/40/40?random=2',
				},
			},
			{
				value: 'card3',
				label: 'Card 3',
				meta: {
					image: 'https://picsum.photos/40/40?random=3',
				},
			},
		],
		label: 'Card Selection',
		footerText: 'Pick a card',
		configuration: {
			variant: 'card',
			size: 'large',
			alignment: 'grid',
			showLabels: true,
			showDescriptions: true,
			labelPosition: 'right',
		},
	},
};

export const ImageRadio: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'image-radio',
		name: 'image-radio',
		selected: 'cat',
		options: [
			{
				value: 'cat',
				label: 'Cat',
				meta: {
					image: 'https://picsum.photos/40/40?random=3',
				},
			},
			{
				value: 'dog',
				label: 'Dog',
				meta: {
					image: 'https://picsum.photos/40/40?random=4',
				},
			},
		],
		label: 'Image Radio',
		footerText: 'Pick a pet',
		configuration: {
			variant: 'card',
			alignment: 'horizontal',
			showLabels: true,
			labelPosition: 'right',
		},
	},
};

export const ColorPicker: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'color-picker',
		name: 'color-radio',
		selected: 'red',
		options: [
			{
				value: 'red',
				label: 'Red',
				meta: { color: '#ef4444' },
			},
			{
				value: 'blue',
				label: 'Blue',
				meta: { color: '#3b82f6' },
			},
			{
				value: 'green',
				label: 'Green',
				meta: { color: '#22c55e' },
			},
			{
				value: 'yellow',
				label: 'Yellow',
				meta: { color: '#eab308' },
			},
		],
		label: 'Color Picker',
		footerText: 'Pick a color',
		configuration: {
			variant: 'button',
			style: 'filled',
			showLabels: true,
			labelPosition: 'right',
		},
	},
};

export const SizeSelector: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'size-selector',
		name: 'size-radio',
		selected: 'm',
		options: [
			{ value: 'xs', label: 'XS' },
			{ value: 's', label: 'S' },
			{ value: 'm', label: 'M' },
			{ value: 'l', label: 'L' },
			{ value: 'xl', label: 'XL' },
		],
		label: 'Size Selector',
		footerText: 'Pick a size',
		configuration: {
			variant: 'button',
			size: 'small',
			labelPosition: 'right',
		},
	},
};

export const PlanSelector: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'plan-selector',
		name: 'plan-radio',
		selected: 'pro',
		options: [
			{
				value: 'basic',
				label: 'Basic',
				meta: { description: 'Basic plan' },
			},
			{
				value: 'pro',
				label: 'Pro',
				meta: { description: 'Pro plan' },
			},
			{
				value: 'enterprise',
				label: 'Enterprise',
				meta: { description: 'Enterprise plan' },
				disabled: true,
			},
		],
		label: 'Plan Selector',
		footerText: 'Choose your plan',
		configuration: {
			variant: 'card',
			showDescriptions: true,
			required: true,
			labelPosition: 'right',
		},
	},
};

export const Preference: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'preference',
		name: 'preference-radio',
		selected: 'email',
		options: [
			{
				value: 'email',
				label: 'Email',
				meta: { description: 'Receive updates via email' },
			},
			{
				value: 'sms',
				label: 'SMS',
				meta: { description: 'Receive updates via SMS' },
			},
			{
				value: 'push',
				label: 'Push',
				meta: { description: 'Receive updates in the app' },
			},
			{
				value: 'none',
				label: 'None',
				meta: { description: 'Disable all notifications' },
			},
		],
		label: 'Notification Preferences',
		footerText:
			'Choose how you would like to receive notifications',
		configuration: {
			showDescriptions: true,
			labelPosition: 'right',
		},
	},
};

export const Custom: Story = {
	render: (args) => <StatefulRadio {...args} />,
	args: {
		kind: 'custom',
		name: 'custom-radio',
		selected: 'blue',
		options: [
			{
				value: 'red',
				label: 'Red',
				meta: { color: '#ef4444' },
			},
			{
				value: 'blue',
				label: 'Blue',
				meta: { color: '#3b82f6' },
			},
			{
				value: 'green',
				label: 'Green',
				meta: { color: '#22c55e' },
			},
			{
				value: 'yellow',
				label: 'Yellow',
				meta: { color: '#eab308' },
			},
		],
		label: 'Custom Colored Radio',
		footerText: 'Pick a color',
		configuration: {
			variant: 'custom',
			labelPosition: 'right',
		},
	},
};

// --- Variants Gallery ---
export const VariantsGallery: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(340px, 1fr))',
				gap: 32,
				alignItems: 'flex-start',
				width: '100%',
				padding: 24,
			}}
		>
			<StatefulRadio
				key='standard'
				{...(Standard.args as any)}
			/>
			<StatefulRadio
				key='button-group'
				{...(ButtonGroup.args as any)}
			/>
			<StatefulRadio
				key='card-selection'
				{...(CardSelection.args as any)}
			/>
			<StatefulRadio
				key='image-radio'
				{...(ImageRadio.args as any)}
			/>
			<StatefulRadio
				key='color-picker'
				{...(ColorPicker.args as any)}
			/>
			<StatefulRadio
				key='size-selector'
				{...(SizeSelector.args as any)}
			/>
			<StatefulRadio
				key='plan-selector'
				{...(PlanSelector.args as any)}
			/>
			<StatefulRadio
				key='preference'
				{...(Preference.args as any)}
			/>
			<StatefulRadio
				key='custom'
				{...(Custom.args as any)}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Gallery of all Radio variants for side-by-side comparison.',
			},
		},
	},
};

// --- Card Image Shapes Demo ---
export const CardImageShapes = () => (
	<>
		<StatefulRadio
			kind='card-selection'
			name='card-image-shape-circle'
			label='Card Image Shape: Circle'
			options={[
				{
					value: 'card1',
					label: 'Card 1',
					meta: {
						image: 'https://picsum.photos/40/40?random=1',
						imageShape: 'circle',
						description: 'Card one',
					},
				},
				{
					value: 'card2',
					label: 'Card 2',
					meta: {
						image: 'https://picsum.photos/40/40?random=2',
						imageShape: 'circle',
						description: 'Card two',
					},
				},
			]}
			configuration={{
				alignment: 'grid',
				size: 'large',
				variant: 'card',
			}}
			footerText='Pick a card (circle)'
		/>
		<StatefulRadio
			kind='card-selection'
			name='card-image-shape-rounded'
			label='Card Image Shape: Rounded'
			options={[
				{
					value: 'card1',
					label: 'Card 1',
					meta: {
						image: 'https://picsum.photos/40/40?random=3',
						imageShape: 'rounded',
						description: 'Card one',
					},
				},
				{
					value: 'card2',
					label: 'Card 2',
					meta: {
						image: 'https://picsum.photos/40/40?random=4',
						imageShape: 'rounded',
						description: 'Card two',
					},
				},
			]}
			configuration={{
				alignment: 'grid',
				size: 'large',
				variant: 'card',
			}}
			footerText='Pick a card (rounded)'
		/>
		<StatefulRadio
			kind='card-selection'
			name='card-image-shape-square'
			label='Card Image Shape: Square'
			options={[
				{
					value: 'card1',
					label: 'Card 1',
					meta: {
						image: 'https://picsum.photos/40/40?random=5',
						imageShape: 'square',
						description: 'Card one',
					},
				},
				{
					value: 'card2',
					label: 'Card 2',
					meta: {
						image: 'https://picsum.photos/40/40?random=6',
						imageShape: 'square',
						description: 'Card two',
					},
				},
			]}
			configuration={{
				alignment: 'grid',
				size: 'large',
				variant: 'card',
			}}
			footerText='Pick a card (square)'
		/>
	</>
);
