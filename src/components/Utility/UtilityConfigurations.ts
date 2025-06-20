/**
 * UtilityConfigurations.ts - DRY Utility Component Configuration System
 */

import { ReactNode } from 'react';

export type UtilityKind =
	// Overlay components
	| 'tooltip'
	| 'popover'
	| 'dropdown-menu'
	| 'context-menu'
	| 'modal-overlay'

	// Separator components
	| 'divider'
	| 'separator'
	| 'spacer'
	| 'section-break'

	// Tag/Label components
	| 'tag'
	| 'chip'
	| 'badge'
	| 'label'
	| 'pill'
	| 'status-indicator'

	// Step/Process components
	| 'stepper'
	| 'breadcrumb'
	| 'pagination'
	| 'wizard-steps'

	// Rating/Feedback components
	| 'rating-stars'
	| 'rating-hearts'
	| 'thumbs-rating'
	| 'numeric-rating'
	| 'feedback-scale'

	// Layout utilities
	| 'container'
	| 'grid-item'
	| 'flex-item'
	| 'stack'
	| 'inline-stack';

export type UtilitySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type UtilityVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'info';
export type UtilityPlacement =
	| 'top'
	| 'bottom'
	| 'left'
	| 'right'
	| 'top-start'
	| 'top-end'
	| 'bottom-start'
	| 'bottom-end';

export interface UtilityAction {
	id: string;
	label: string;
	icon?: ReactNode;
	onClick: () => void;
	disabled?: boolean;
}

export interface UtilityConfiguration {
	kind: UtilityKind;
	variant: UtilityVariant;
	size: UtilitySize;

	// Content
	label?: string;
	description?: string;
	icon?: ReactNode;

	// Behavior
	placement?: UtilityPlacement;
	trigger?: 'hover' | 'click' | 'focus' | 'manual';
	delay?: number;
	dismissible?: boolean;
	interactive?: boolean;

	// State
	active?: boolean;
	disabled?: boolean;
	loading?: boolean;

	// Actions
	actions?: UtilityAction[];

	// Styling
	color?: string;
	backgroundColor?: string;
	borderRadius?: string;
	className?: string;
}

export const UTILITY_CONFIGURATIONS: Record<
	UtilityKind,
	UtilityConfiguration
> = {
	// Overlay components
	'tooltip': {
		kind: 'tooltip',
		variant: 'default',
		size: 'sm',
		placement: 'top',
		trigger: 'hover',
		delay: 300,
		dismissible: false,
		interactive: false,
	},

	'popover': {
		kind: 'popover',
		variant: 'default',
		size: 'md',
		placement: 'bottom',
		trigger: 'click',
		dismissible: true,
		interactive: true,
	},

	'dropdown-menu': {
		kind: 'dropdown-menu',
		variant: 'default',
		size: 'md',
		placement: 'bottom-start',
		trigger: 'click',
		dismissible: true,
		interactive: true,
	},

	'context-menu': {
		kind: 'context-menu',
		variant: 'default',
		size: 'md',
		placement: 'bottom-start',
		trigger: 'click',
		dismissible: true,
		interactive: true,
	},

	'modal-overlay': {
		kind: 'modal-overlay',
		variant: 'default',
		size: 'lg',
		dismissible: true,
		interactive: true,
	},

	// Separator components
	'divider': {
		kind: 'divider',
		variant: 'default',
		size: 'md',
	},

	'separator': {
		kind: 'separator',
		variant: 'default',
		size: 'sm',
	},

	'spacer': {
		kind: 'spacer',
		variant: 'default',
		size: 'md',
	},

	'section-break': {
		kind: 'section-break',
		variant: 'default',
		size: 'lg',
		label: 'Section Break',
	},

	// Tag/Label components
	'tag': {
		kind: 'tag',
		variant: 'default',
		size: 'sm',
		dismissible: false,
	},

	'chip': {
		kind: 'chip',
		variant: 'primary',
		size: 'md',
		dismissible: true,
		interactive: true,
	},

	'badge': {
		kind: 'badge',
		variant: 'error',
		size: 'xs',
		dismissible: false,
	},

	'label': {
		kind: 'label',
		variant: 'secondary',
		size: 'sm',
		dismissible: false,
	},

	'pill': {
		kind: 'pill',
		variant: 'primary',
		size: 'md',
		dismissible: false,
	},

	'status-indicator': {
		kind: 'status-indicator',
		variant: 'success',
		size: 'sm',
		dismissible: false,
	},

	// Step/Process components
	'stepper': {
		kind: 'stepper',
		variant: 'primary',
		size: 'md',
		interactive: true,
	},

	'breadcrumb': {
		kind: 'breadcrumb',
		variant: 'default',
		size: 'sm',
		interactive: true,
	},

	'pagination': {
		kind: 'pagination',
		variant: 'default',
		size: 'md',
		interactive: true,
	},

	'wizard-steps': {
		kind: 'wizard-steps',
		variant: 'primary',
		size: 'lg',
		interactive: true,
	},

	// Rating/Feedback components
	'rating-stars': {
		kind: 'rating-stars',
		variant: 'warning',
		size: 'md',
		interactive: true,
	},

	'rating-hearts': {
		kind: 'rating-hearts',
		variant: 'error',
		size: 'md',
		interactive: true,
	},

	'thumbs-rating': {
		kind: 'thumbs-rating',
		variant: 'default',
		size: 'md',
		interactive: true,
	},

	'numeric-rating': {
		kind: 'numeric-rating',
		variant: 'primary',
		size: 'md',
		interactive: true,
	},

	'feedback-scale': {
		kind: 'feedback-scale',
		variant: 'default',
		size: 'lg',
		interactive: true,
	},

	// Layout utilities
	'container': {
		kind: 'container',
		variant: 'default',
		size: 'lg',
	},

	'grid-item': {
		kind: 'grid-item',
		variant: 'default',
		size: 'md',
	},

	'flex-item': {
		kind: 'flex-item',
		variant: 'default',
		size: 'md',
	},

	'stack': {
		kind: 'stack',
		variant: 'default',
		size: 'md',
	},

	'inline-stack': {
		kind: 'inline-stack',
		variant: 'default',
		size: 'sm',
	},
};

export const getUtilityConfig = (
	kind: UtilityKind
): UtilityConfiguration => {
	return UTILITY_CONFIGURATIONS[kind];
};
