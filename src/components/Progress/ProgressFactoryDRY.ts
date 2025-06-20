// src/components/Progress/ProgressFactoryDRY.ts
import React from 'react';
import {
	ProgressConfiguration,
	getProgressConfig,
	ProgressKind,
} from './ProgressConfigurations';
import { UnifiedProgressProps } from './UnifiedProgress';
import UnifiedProgress from './UnifiedProgress';

/**
 * Ultra-DRY Progress Factory
 * Creates configured progress components from configuration objects
 */
export class ProgressFactoryDRY {
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
	LoadingSpinner: ProgressFactoryDRY.createFromKind(
		'loading-spinner'
	),
	DotsLoader:
		ProgressFactoryDRY.createFromKind('dots-loader'),
	PulseLoader:
		ProgressFactoryDRY.createFromKind('pulse-loader'),
	BounceLoader:
		ProgressFactoryDRY.createFromKind('bounce-loader'),
	SkeletonLoader: ProgressFactoryDRY.createFromKind(
		'skeleton-loader'
	),

	// Progress bars
	LinearProgress: ProgressFactoryDRY.createFromKind(
		'linear-progress'
	),
	CircularProgress: ProgressFactoryDRY.createFromKind(
		'circular-progress'
	),
	RadialProgress: ProgressFactoryDRY.createFromKind(
		'radial-progress'
	),
	StepProgress:
		ProgressFactoryDRY.createFromKind('step-progress'),
	MultiStep:
		ProgressFactoryDRY.createFromKind('multi-step'),

	// Upload/Download progress
	UploadProgress: ProgressFactoryDRY.createFromKind(
		'upload-progress'
	),
	DownloadProgress: ProgressFactoryDRY.createFromKind(
		'download-progress'
	),
	SyncProgress:
		ProgressFactoryDRY.createFromKind('sync-progress'),

	// Game/Activity progress
	LevelProgress: ProgressFactoryDRY.createFromKind(
		'level-progress'
	),
	AchievementProgress: ProgressFactoryDRY.createFromKind(
		'achievement-progress'
	),
	CompletionProgress: ProgressFactoryDRY.createFromKind(
		'completion-progress'
	),
	HealthBar:
		ProgressFactoryDRY.createFromKind('health-bar'),
	ExperienceBar: ProgressFactoryDRY.createFromKind(
		'experience-bar'
	),

	// System progress
	InstallationProgress: ProgressFactoryDRY.createFromKind(
		'installation-progress'
	),
	BackupProgress: ProgressFactoryDRY.createFromKind(
		'backup-progress'
	),
	ProcessingProgress: ProgressFactoryDRY.createFromKind(
		'processing-progress'
	),
	BatteryIndicator: ProgressFactoryDRY.createFromKind(
		'battery-indicator'
	),
};
