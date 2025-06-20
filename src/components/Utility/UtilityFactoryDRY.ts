// src/components/Utility/UtilityFactoryDRY.ts
import React from 'react';
import {
	UtilityConfiguration,
	getUtilityConfig,
	UtilityKind,
} from './UtilityConfigurations';
import { UnifiedUtilityProps } from './UnifiedUtility';
import UnifiedUtility from './UnifiedUtility';

/**
 * Ultra-DRY Utility Factory
 * Creates configured utility components from configuration objects
 */
export class UtilityFactoryDRY {
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
	Tooltip: UtilityFactoryDRY.createFromKind('tooltip'),
	Popover: UtilityFactoryDRY.createFromKind('popover'),
	DropdownMenu:
		UtilityFactoryDRY.createFromKind('dropdown-menu'),
	ContextMenu:
		UtilityFactoryDRY.createFromKind('context-menu'),
	ModalOverlay:
		UtilityFactoryDRY.createFromKind('modal-overlay'),

	// Separator components
	Divider: UtilityFactoryDRY.createFromKind('divider'),
	Separator: UtilityFactoryDRY.createFromKind('separator'),
	Spacer: UtilityFactoryDRY.createFromKind('spacer'),
	SectionBreak:
		UtilityFactoryDRY.createFromKind('section-break'),

	// Tag/Label components
	Tag: UtilityFactoryDRY.createFromKind('tag'),
	Chip: UtilityFactoryDRY.createFromKind('chip'),
	Badge: UtilityFactoryDRY.createFromKind('badge'),
	Label: UtilityFactoryDRY.createFromKind('label'),
	Pill: UtilityFactoryDRY.createFromKind('pill'),
	StatusIndicator: UtilityFactoryDRY.createFromKind(
		'status-indicator'
	),

	// Step/Process components
	Stepper: UtilityFactoryDRY.createFromKind('stepper'),
	Breadcrumb:
		UtilityFactoryDRY.createFromKind('breadcrumb'),
	Pagination:
		UtilityFactoryDRY.createFromKind('pagination'),
	WizardSteps:
		UtilityFactoryDRY.createFromKind('wizard-steps'),

	// Rating/Feedback components
	RatingStars:
		UtilityFactoryDRY.createFromKind('rating-stars'),
	RatingHearts:
		UtilityFactoryDRY.createFromKind('rating-hearts'),
	ThumbsRating:
		UtilityFactoryDRY.createFromKind('thumbs-rating'),
	NumericRating: UtilityFactoryDRY.createFromKind(
		'numeric-rating'
	),
	FeedbackScale: UtilityFactoryDRY.createFromKind(
		'feedback-scale'
	),

	// Layout utilities
	Container: UtilityFactoryDRY.createFromKind('container'),
	GridItem: UtilityFactoryDRY.createFromKind('grid-item'),
	FlexItem: UtilityFactoryDRY.createFromKind('flex-item'),
	Stack: UtilityFactoryDRY.createFromKind('stack'),
	InlineStack:
		UtilityFactoryDRY.createFromKind('inline-stack'),
};
