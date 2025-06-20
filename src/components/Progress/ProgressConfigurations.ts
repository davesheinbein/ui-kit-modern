/**
 * ProgressConfigurations.ts - DRY Progress Component Configuration System
 */

import { ReactNode } from 'react';

export type ProgressKind =
	// Loading indicators
	| 'loading-spinner'
	| 'dots-loader'
	| 'pulse-loader'
	| 'bounce-loader'
	| 'skeleton-loader'

	// Progress bars
	| 'linear-progress'
	| 'circular-progress'
	| 'radial-progress'
	| 'step-progress'
	| 'multi-step'

	// Upload/Download progress
	| 'upload-progress'
	| 'download-progress'
	| 'sync-progress'

	// Game/Activity progress
	| 'level-progress'
	| 'achievement-progress'
	| 'completion-progress'
	| 'health-bar'
	| 'experience-bar'

	// System progress
	| 'installation-progress'
	| 'backup-progress'
	| 'processing-progress'
	| 'battery-indicator';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ProgressVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'info';
export type ProgressAnimation =
	| 'none'
	| 'pulse'
	| 'bounce'
	| 'spin'
	| 'slide'
	| 'fade';

export interface ProgressStep {
	id: string;
	label: string;
	description?: string;
	status: 'pending' | 'active' | 'completed' | 'error';
	icon?: ReactNode;
}

export interface ProgressConfiguration {
	kind: ProgressKind;
	variant: ProgressVariant;
	size: ProgressSize;
	animation: ProgressAnimation;

	// Content
	label?: string;
	description?: string;
	showPercentage?: boolean;
	showValue?: boolean;

	// Behavior
	indeterminate?: boolean;
	striped?: boolean;
	animated?: boolean;
	duration?: number;

	// Multi-step specific
	steps?: ProgressStep[];
	orientation?: 'horizontal' | 'vertical';

	// Styling
	thickness?: number;
	color?: string;
	backgroundColor?: string;
	className?: string;
}

export const PROGRESS_CONFIGURATIONS: Record<
	ProgressKind,
	ProgressConfiguration
> = {
	// Loading indicators
	'loading-spinner': {
		kind: 'loading-spinner',
		variant: 'primary',
		size: 'md',
		animation: 'spin',
		label: 'Loading...',
		indeterminate: true,
		duration: 1000,
	},

	'dots-loader': {
		kind: 'dots-loader',
		variant: 'primary',
		size: 'md',
		animation: 'bounce',
		label: 'Loading...',
		indeterminate: true,
		duration: 1200,
	},

	'pulse-loader': {
		kind: 'pulse-loader',
		variant: 'primary',
		size: 'md',
		animation: 'pulse',
		label: 'Loading...',
		indeterminate: true,
		duration: 2000,
	},

	'bounce-loader': {
		kind: 'bounce-loader',
		variant: 'primary',
		size: 'md',
		animation: 'bounce',
		label: 'Loading...',
		indeterminate: true,
		duration: 800,
	},

	'skeleton-loader': {
		kind: 'skeleton-loader',
		variant: 'secondary',
		size: 'md',
		animation: 'slide',
		indeterminate: true,
		duration: 1500,
	},

	// Progress bars
	'linear-progress': {
		kind: 'linear-progress',
		variant: 'primary',
		size: 'md',
		animation: 'none',
		showPercentage: true,
		thickness: 8,
	},

	'circular-progress': {
		kind: 'circular-progress',
		variant: 'primary',
		size: 'md',
		animation: 'none',
		showPercentage: true,
		thickness: 4,
	},

	'radial-progress': {
		kind: 'radial-progress',
		variant: 'primary',
		size: 'lg',
		animation: 'none',
		showPercentage: true,
		showValue: true,
		thickness: 6,
	},

	'step-progress': {
		kind: 'step-progress',
		variant: 'primary',
		size: 'md',
		animation: 'none',
		orientation: 'horizontal',
		steps: [],
	},

	'multi-step': {
		kind: 'multi-step',
		variant: 'primary',
		size: 'md',
		animation: 'none',
		orientation: 'horizontal',
		showPercentage: true,
		steps: [],
	},

	// Upload/Download progress
	'upload-progress': {
		kind: 'upload-progress',
		variant: 'success',
		size: 'md',
		animation: 'slide',
		label: 'Uploading...',
		showPercentage: true,
		showValue: true,
		striped: true,
		animated: true,
	},

	'download-progress': {
		kind: 'download-progress',
		variant: 'info',
		size: 'md',
		animation: 'slide',
		label: 'Downloading...',
		showPercentage: true,
		showValue: true,
		striped: true,
		animated: true,
	},

	'sync-progress': {
		kind: 'sync-progress',
		variant: 'primary',
		size: 'sm',
		animation: 'pulse',
		label: 'Syncing...',
		showPercentage: false,
		indeterminate: true,
	},

	// Game/Activity progress
	'level-progress': {
		kind: 'level-progress',
		variant: 'warning',
		size: 'md',
		animation: 'none',
		label: 'Level Progress',
		showPercentage: false,
		showValue: true,
		thickness: 12,
	},

	'achievement-progress': {
		kind: 'achievement-progress',
		variant: 'success',
		size: 'lg',
		animation: 'none',
		showPercentage: true,
		thickness: 8,
	},

	'completion-progress': {
		kind: 'completion-progress',
		variant: 'primary',
		size: 'md',
		animation: 'none',
		label: 'Completion',
		showPercentage: true,
		thickness: 6,
	},

	'health-bar': {
		kind: 'health-bar',
		variant: 'error',
		size: 'md',
		animation: 'none',
		showValue: true,
		thickness: 10,
		color: '#dc2626',
	},

	'experience-bar': {
		kind: 'experience-bar',
		variant: 'info',
		size: 'sm',
		animation: 'none',
		showValue: true,
		thickness: 6,
		color: '#3b82f6',
	},

	// System progress
	'installation-progress': {
		kind: 'installation-progress',
		variant: 'primary',
		size: 'lg',
		animation: 'slide',
		label: 'Installing...',
		description:
			'Please wait while the installation completes',
		showPercentage: true,
		showValue: true,
		striped: true,
		animated: true,
	},

	'backup-progress': {
		kind: 'backup-progress',
		variant: 'success',
		size: 'md',
		animation: 'slide',
		label: 'Creating backup...',
		showPercentage: true,
		showValue: true,
		striped: true,
	},

	'processing-progress': {
		kind: 'processing-progress',
		variant: 'primary',
		size: 'md',
		animation: 'pulse',
		label: 'Processing...',
		indeterminate: true,
	},

	'battery-indicator': {
		kind: 'battery-indicator',
		variant: 'success',
		size: 'sm',
		animation: 'none',
		showPercentage: true,
		thickness: 8,
	},
};

export const getProgressConfig = (
	kind: ProgressKind
): ProgressConfiguration => {
	return PROGRESS_CONFIGURATIONS[kind];
};
