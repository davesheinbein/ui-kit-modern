import type { Meta, StoryObj } from '@storybook/react';
import { Wrapper } from '../../components/Wrappers';
import { Utility } from '../../components/Utility';
import { UtilityKind } from '../../components/Utility/configurations';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Utility> = {
	title: 'Utility/Utility',
	component: Utility,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive utility component system with helpers for spacing, typography, layout, and common UI patterns.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'tooltip',
				'popover',
				'dropdown-menu',
				'context-menu',
				'modal-overlay',
				'divider',
				'separator',
				'spacer',
				'section-break',
				'tag',
				'chip',
				'badge',
				'label',
				'pill',
				'status-indicator',
				'stepper',
				'breadcrumb',
				'pagination',
				'wizard-steps',
				'rating-stars',
				'rating-hearts',
				'thumbs-rating',
				'numeric-rating',
				'feedback-scale',
				'container',
				'grid-item',
				'flex-item',
				'stack',
				'inline-stack',
			] as UtilityKind[],
			description: 'Utility component kind/type',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'primary',
				'secondary',
				'success',
				'warning',
				'error',
				'info',
				'ghost',
				'outline',
			],
			description: 'Utility variant/style',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Utility size',
		},
		placement: {
			control: 'select',
			options: [
				'top',
				'bottom',
				'left',
				'right',
				'top-start',
				'top-end',
				'bottom-start',
				'bottom-end',
			],
			description:
				'Placement position (for tooltips/popovers)',
		},
		label: {
			control: 'text',
			description: 'Component label text',
		},
		description: {
			control: 'text',
			description: 'Component description',
		},
		icon: {
			control: 'text',
			description: 'Icon (emoji or text)',
		},
		active: {
			control: 'boolean',
			description: 'Active state',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		dismissible: {
			control: 'boolean',
			description: 'Can be dismissed',
		},
		interactive: {
			control: 'boolean',
			description: 'Enable interactions',
		},
		value: {
			control: {
				type: 'range',
				min: 0,
				max: 10,
				step: 0.1,
			},
			description: 'Current value (for ratings/steppers)',
		},
		maxValue: {
			control: { type: 'range', min: 1, max: 10, step: 1 },
			description: 'Maximum value',
		},
		trigger: {
			control: 'select',
			options: ['hover', 'click', 'focus', 'manual'],
			description: 'Trigger event',
		},
		delay: {
			control: {
				type: 'range',
				min: 0,
				max: 2000,
				step: 100,
			},
			description: 'Delay before showing (ms)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Overlay components
export const Tooltip: Story = {
	args: {
		kind: 'tooltip',
		size: 'md',
		children: 'Hover over me for tooltip',
	},
};

export const Popover: Story = {
	args: {
		kind: 'popover',
		size: 'md',
		children: 'Click for popover content',
	},
};

export const DropdownMenu: Story = {
	args: {
		kind: 'dropdown-menu',
		size: 'md',
		children: 'Dropdown menu trigger',
	},
};

export const ContextMenu: Story = {
	args: {
		kind: 'context-menu',
		size: 'md',
		children: 'Right-click for context menu',
	},
};

export const ModalOverlay: Story = {
	args: {
		kind: 'modal-overlay',
		size: 'lg',
		children: 'Modal overlay content',
	},
};

// Separator components
export const Divider: Story = {
	args: {
		kind: 'divider',
		variant: 'default',
		size: 'md',
	},
};

export const Separator: Story = {
	args: {
		kind: 'separator',
		variant: 'secondary',
		size: 'lg',
	},
};

export const Spacer: Story = {
	args: {
		kind: 'spacer',
		size: 'md',
	},
};

export const SectionBreak: Story = {
	args: {
		kind: 'section-break',
		size: 'lg',
	},
};

// Tag/Label components
export const Tag: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'md',
		children: 'Tag content',
	},
};

export const Chip: Story = {
	args: {
		kind: 'chip',
		variant: 'secondary',
		size: 'sm',
		children: 'Chip content',
	},
};

export const Badge: Story = {
	args: {
		kind: 'badge',
		variant: 'success',
		size: 'sm',
		children: '3',
	},
};

export const Label: Story = {
	args: {
		kind: 'label',
		variant: 'default',
		size: 'md',
		children: 'Label text',
	},
};

export const Pill: Story = {
	args: {
		kind: 'pill',
		variant: 'info',
		size: 'sm',
		children: 'Pill content',
	},
};

export const StatusIndicator: Story = {
	args: {
		kind: 'status-indicator',
		variant: 'success',
		size: 'sm',
		children: 'Online',
	},
};

// Step/Process components
export const Stepper: Story = {
	args: {
		kind: 'stepper',
		size: 'md',
		children: 'Step 1 of 3',
	},
};

export const Breadcrumb: Story = {
	args: {
		kind: 'breadcrumb',
		size: 'md',
		children: 'Home > Category > Page',
	},
};

export const Pagination: Story = {
	args: {
		kind: 'pagination',
		size: 'md',
		children: 'Page 1 of 10',
	},
};

export const WizardSteps: Story = {
	args: {
		kind: 'wizard-steps',
		size: 'lg',
		children: 'Step navigation',
	},
};

// Rating/Feedback components
export const RatingStars: Story = {
	args: {
		kind: 'rating-stars',
		size: 'md',
		children: '★★★★☆',
	},
};

export const RatingHearts: Story = {
	args: {
		kind: 'rating-hearts',
		size: 'md',
		children: '♥♥♥♡♡',
	},
};

export const ThumbsRating: Story = {
	args: {
		kind: 'thumbs-rating',
		size: 'md',
		children: '👍 👎',
	},
};

export const NumericRating: Story = {
	args: {
		kind: 'numeric-rating',
		size: 'md',
		children: '4.5/5.0',
	},
};

export const FeedbackScale: Story = {
	args: {
		kind: 'feedback-scale',
		size: 'lg',
		children: '1 2 3 4 5',
	},
};

// Layout utilities
export const Container: Story = {
	args: {
		kind: 'container',
		size: 'lg',
		children: 'Container content',
	},
};

export const GridItem: Story = {
	args: {
		kind: 'grid-item',
		size: 'md',
		children: 'Grid item content',
	},
};

export const FlexItem: Story = {
	args: {
		kind: 'flex-item',
		size: 'md',
		children: 'Flex item content',
	},
};

export const Stack: Story = {
	args: {
		kind: 'stack',
		size: 'md',
		children: (
			<Wrapper direction='column' gap={2}>
				<Wrapper>Stack item 1</Wrapper>
				<Wrapper>Stack item 2</Wrapper>
				<Wrapper>Stack item 3</Wrapper>
			</Wrapper>
		),
	},
};

export const InlineStack: Story = {
	args: {
		kind: 'inline-stack',
		size: 'md',
		children: (
			<Wrapper direction='row' gap={2}>
				<span>Inline item 1</span>
				<span>Inline item 2</span>
				<span>Inline item 3</span>
			</Wrapper>
		),
	},
};

// Size variants
export const ExtraSmallUtility: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'xs',
		children: 'XS Tag',
	},
};

export const SmallUtility: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'sm',
		children: 'Small Tag',
	},
};

export const MediumUtility: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'md',
		children: 'Medium Tag',
	},
};

export const LargeUtility: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'lg',
		children: 'Large Tag',
	},
};

export const ExtraLargeUtility: Story = {
	args: {
		kind: 'tag',
		variant: 'primary',
		size: 'xl',
		children: 'XL Tag',
	},
};

// Variant stories
export const PrimaryVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'primary',
		size: 'md',
		children: 'Primary',
	},
};

export const SecondaryVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'secondary',
		size: 'md',
		children: 'Secondary',
	},
};

export const SuccessVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'success',
		size: 'md',
		children: 'Success',
	},
};

export const WarningVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'warning',
		size: 'md',
		children: 'Warning',
	},
};

export const ErrorVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'error',
		size: 'md',
		children: 'Error',
	},
};

export const InfoVariant: Story = {
	args: {
		kind: 'badge',
		variant: 'info',
		size: 'md',
		children: 'Info',
	},
};
