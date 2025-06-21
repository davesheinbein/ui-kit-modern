// src/components/Utility/UtilityFactory.ts
import React from 'react';
import {
	UtilityConfiguration,
	getUtilityConfig,
	UtilityKind,
} from './configurations';
import { UnifiedUtilityProps } from './UnifiedUtility';
import UnifiedUtility from './UnifiedUtility';

/**
 * Factory Utility Factory
 * Creates configured utility components from configuration objects
 */
export class UtilityFactory {
	static create(
		config: UtilityConfiguration &
			Partial<UnifiedUtilityProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<UnifiedUtilityProps>
		>((props, ref) =>
			React.createElement(UnifiedUtility, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: UtilityKind) {
		const config = getUtilityConfig(kind);
		return this.create(config);
	}
}

// Pre-configured utility components
export const UtilityComponents = {
	// Overlay components
	Tooltip: UtilityFactory.createFromKind('tooltip'),
	Popover: UtilityFactory.createFromKind('popover'),
	DropdownMenu:
		UtilityFactory.createFromKind('dropdown-menu'),
	ContextMenu:
		UtilityFactory.createFromKind('context-menu'),
	ModalOverlay:
		UtilityFactory.createFromKind('modal-overlay'),

	// Separator components
	Divider: UtilityFactory.createFromKind('divider'),
	Separator: UtilityFactory.createFromKind('separator'),
	Spacer: UtilityFactory.createFromKind('spacer'),
	SectionBreak:
		UtilityFactory.createFromKind('section-break'),

	// Tag/Label components
	Tag: UtilityFactory.createFromKind('tag'),
	Chip: UtilityFactory.createFromKind('chip'),
	Badge: UtilityFactory.createFromKind('badge'),
	Label: UtilityFactory.createFromKind('label'),
	Pill: UtilityFactory.createFromKind('pill'),
	StatusIndicator: UtilityFactory.createFromKind(
		'status-indicator'
	),

	// Step/Process components
	Stepper: UtilityFactory.createFromKind('stepper'),
	Breadcrumb: UtilityFactory.createFromKind('breadcrumb'),
	Pagination: UtilityFactory.createFromKind('pagination'),
	WizardSteps:
		UtilityFactory.createFromKind('wizard-steps'),

	// Rating/Feedback components
	RatingStars:
		UtilityFactory.createFromKind('rating-stars'),
	RatingHearts:
		UtilityFactory.createFromKind('rating-hearts'),
	ThumbsRating:
		UtilityFactory.createFromKind('thumbs-rating'),
	NumericRating: UtilityFactory.createFromKind(
		'numeric-rating'
	),
	FeedbackScale: UtilityFactory.createFromKind(
		'feedback-scale'
	),

	// Layout utilities
	Container: UtilityFactory.createFromKind('container'),
	GridItem: UtilityFactory.createFromKind('grid-item'),
	FlexItem: UtilityFactory.createFromKind('flex-item'),
	Stack: UtilityFactory.createFromKind('stack'),
	InlineStack:
		UtilityFactory.createFromKind('inline-stack'),
};
