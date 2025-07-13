import type { ReactNode } from 'react';
import type {
	EmptyStateKind,
	EmptyStateConfiguration,
	EmptyStateAction,
} from '../configurations';

export interface EmptyStateProps {
	kind: EmptyStateKind;
	children?: ReactNode;
	className?: string;

	// Content overrides
	title?: string;
	description?: string;
	icon?: ReactNode | string;
	illustration?: string;

	// Configuration overrides
	variant?: EmptyStateConfiguration['variant'];
	size?: 'small' | 'medium' | 'large';
	centered?: boolean;
	fullHeight?: boolean;

	// Actions
	primaryAction?: EmptyStateAction;
	secondaryAction?: EmptyStateAction;
	actions?: EmptyStateAction[];

	// Features
	showIcon?: boolean;
	showIllustration?: boolean;
	allowCustomContent?: boolean;
}
