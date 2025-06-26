import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/Textareas';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';
import { commonArgTypes } from '../config/argTypes';

const meta: Meta<typeof Textarea> = {
	title: 'Textarea/Textarea',
	component: Textarea,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A flexible textarea component with various styling options and sizes.',
			},
		},
	},
	argTypes: {
		kind: {
			control: { type: 'select' },
			options: [
				'standard',
				'comment',
				'description',
				'note',
				'feedback',
				'custom',
			],
			description: 'Textarea type/variant',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		label: {
			control: 'text',
			description: 'Label for the textarea',
		},
		required: {
			control: 'boolean',
			description: 'Whether the field is required',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		helpText: {
			control: 'text',
			description: 'Helper text to display',
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the component',
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'standard',
		placeholder: 'Enter your message...',
	},
};

export const WithLabel: Story = {
	args: {
		kind: 'standard',
		label: 'Description',
		placeholder: 'Describe your experience...',
	},
};

export const Required: Story = {
	args: {
		kind: 'standard',
		label: 'Comments',
		placeholder: 'Your comments are required...',
		required: true,
	},
};

export const WithError: Story = {
	args: {
		kind: 'standard',
		label: 'Feedback',
		placeholder: 'Please provide feedback...',
		error: 'This field is required',
	},
};

export const WithHelperText: Story = {
	args: {
		kind: 'standard',
		label: 'Bio',
		placeholder: 'Tell us about yourself...',
		helpText: 'Maximum 500 characters',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'standard',
		label: 'Read Only',
		value: 'This content cannot be edited',
		disabled: true,
	},
};

export const LargeTextarea: Story = {
	args: {
		kind: 'standard',
		label: 'Essay',
		placeholder: 'Write your essay here...',
		configuration: { rows: 10 },
	},
};

export const CommentStyle: Story = {
	args: {
		kind: 'comment',
		label: 'Add Comment',
		placeholder: 'Write your comment...',
	},
};

export const DescriptionStyle: Story = {
	args: {
		kind: 'description',
		label: 'Product Description',
		placeholder: 'Describe the product...',
	},
};

export const AllKinds: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				width: '100%',
				maxWidth: '600px',
			}}
		>
			<Textarea
				kind='standard'
				label='Standard Textarea'
				placeholder='Standard styling...'
			/>
			<Textarea
				kind='comment'
				label='Comment Textarea'
				placeholder='Comment styling...'
			/>
			<Textarea
				kind='description'
				label='Description Textarea'
				placeholder='Description styling...'
			/>
			<Textarea
				kind='note'
				label='Note Textarea'
				placeholder='Note styling...'
			/>
		</Wrapper>
	),
};
