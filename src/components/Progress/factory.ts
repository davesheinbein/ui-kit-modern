// src/components/Progress/ProgressFactory.ts
import React from 'react';
import {
	ProgressConfiguration,
	getProgressConfig,
	ProgressKind,
} from './configurations';
import { UnifiedProgressProps } from './UnifiedProgress';
import UnifiedProgress from './UnifiedProgress';

/**
 * Factory Progress Factory
 * Creates configured progress components from configuration objects
 */
export class ProgressFactory {
	static create(
		config: ProgressConfiguration &
			Partial<UnifiedProgressProps>
	) {
		return React.forwardRef<
			HTMLDivElement,
			Partial<UnifiedProgressProps>
		>((props, ref) =>
			React.createElement(UnifiedProgress, {
				ref,
				...config,
				...props,
			})
		);
	}

	static createFromKind(kind: ProgressKind) {
		const config = getProgressConfig(kind);
		return this.create(config);
	}
}

// Pre-configured progress components
export const ProgressComponents = {
	// Loading indicators
	LoadingSpinner: ProgressFactory.createFromKind(
		'loading-spinner'
	),
	DotsLoader: ProgressFactory.createFromKind('dots-loader'),
	PulseLoader:
		ProgressFactory.createFromKind('pulse-loader'),
	BounceLoader:
		ProgressFactory.createFromKind('bounce-loader'),
	SkeletonLoader: ProgressFactory.createFromKind(
		'skeleton-loader'
	),

	// Progress bars
	LinearProgress: ProgressFactory.createFromKind(
		'linear-progress'
	),
	CircularProgress: ProgressFactory.createFromKind(
		'circular-progress'
	),
	RadialProgress: ProgressFactory.createFromKind(
		'radial-progress'
	),
	StepProgress:
		ProgressFactory.createFromKind('step-progress'),
	MultiStep: ProgressFactory.createFromKind('multi-step'),

	// Upload/Download progress
	UploadProgress: ProgressFactory.createFromKind(
		'upload-progress'
	),
	DownloadProgress: ProgressFactory.createFromKind(
		'download-progress'
	),
	SyncProgress:
		ProgressFactory.createFromKind('sync-progress'),

	// Game/Activity progress
	LevelProgress: ProgressFactory.createFromKind(
		'level-progress'
	),
	AchievementProgress: ProgressFactory.createFromKind(
		'achievement-progress'
	),
	CompletionProgress: ProgressFactory.createFromKind(
		'completion-progress'
	),
	HealthBar: ProgressFactory.createFromKind('health-bar'),
	ExperienceBar: ProgressFactory.createFromKind(
		'experience-bar'
	),

	// System progress
	InstallationProgress: ProgressFactory.createFromKind(
		'installation-progress'
	),
	BackupProgress: ProgressFactory.createFromKind(
		'backup-progress'
	),
	ProcessingProgress: ProgressFactory.createFromKind(
		'processing-progress'
	),
	BatteryIndicator: ProgressFactory.createFromKind(
		'battery-indicator'
	),
};
