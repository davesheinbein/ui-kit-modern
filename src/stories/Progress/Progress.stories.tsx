import type { Meta, StoryObj } from '@storybook/react';
import {
	Progress,
	ProgressComponents,
} from '../../components/Progress';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Progress> = {
	title: 'Progress/Progress',
	component: Progress,
	decorators: commonDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive progress component system supporting loading indicators, progress bars, game progress, and system progress with configurable animations and styling.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'loading-spinner',
				'dots-loader',
				'pulse-loader',
				'bounce-loader',
				'skeleton-loader',
				'linear-progress',
				'circular-progress',
				'radial-progress',
				'step-progress',
				'multi-step',
				'upload-progress',
				'download-progress',
				'sync-progress',
				'level-progress',
				'achievement-progress',
				'completion-progress',
				'health-bar',
				'experience-bar',
				'installation-progress',
				'backup-progress',
				'processing-progress',
				'battery-indicator',
			],
			description: 'Progress component type',
		},
		variant: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'error',
				'info',
			],
			description: 'Color variant',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			description: 'Component size',
		},
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
			description: 'Progress value (0-100)',
		},
		max: {
			control: {
				type: 'number',
				min: 1,
				max: 1000,
				step: 1,
			},
			description: 'Maximum value',
		},
		label: {
			control: 'text',
			description: 'Progress label text',
		},
		description: {
			control: 'text',
			description: 'Progress description',
		},
		showPercentage: {
			control: 'boolean',
			description: 'Show percentage value',
		},
		showValue: {
			control: 'boolean',
			description: 'Show current value',
		},
		indeterminate: {
			control: 'boolean',
			description: 'Indeterminate/unknown progress',
		},
		striped: {
			control: 'boolean',
			description: 'Striped appearance',
		},
		animated: {
			control: 'boolean',
			description: 'Animated stripes/progress',
		},
		duration: {
			control: {
				type: 'range',
				min: 100,
				max: 5000,
				step: 100,
			},
			description: 'Animation duration (ms)',
		},
		thickness: {
			control: { type: 'range', min: 2, max: 20, step: 1 },
			description: 'Progress bar thickness',
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Progress orientation',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const LoadingSpinner: Story = {
	args: {
		kind: 'loading-spinner',
		variant: 'primary',
		size: 'md',
	},
};

export const LinearProgress: Story = {
	args: {
		kind: 'linear-progress',
		variant: 'primary',
		size: 'md',
		value: 65,
		max: 100,
		label: 'Progress',
		showPercentage: true,
	},
};

export const CircularProgress: Story = {
	args: {
		kind: 'circular-progress',
		variant: 'primary',
		size: 'lg',
		value: 75,
		max: 100,
		showPercentage: true,
	},
};

export const UploadProgress: Story = {
	args: {
		kind: 'upload-progress',
		variant: 'success',
		size: 'md',
		value: 45,
		max: 100,
		label: 'Uploading file.pdf',
		showPercentage: true,
		showValue: true,
		striped: true,
		animated: true,
	},
};

export const LevelProgress: Story = {
	args: {
		kind: 'level-progress',
		variant: 'warning',
		size: 'md',
		value: 820,
		max: 1000,
		label: 'Level 15 Progress',
		showValue: true,
	},
};

export const Components: Story = {
	render: () => (
		<Wrapper
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '2rem',
			}}
		>
			<Wrapper>
				<h3>Loading Indicators</h3>
				<Wrapper
					style={{
						display: 'flex',
						gap: '1rem',
						alignItems: 'center',
					}}
				>
					<ProgressComponents.LoadingSpinner />
					<ProgressComponents.DotsLoader />
					<ProgressComponents.PulseLoader />
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h3>Progress Bars</h3>
				<Wrapper
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						width: '300px',
					}}
				>
					<ProgressComponents.LinearProgress value={65} />
					<ProgressComponents.UploadProgress value={45} />
					<ProgressComponents.DownloadProgress value={75} />
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h3>Game Progress</h3>
				<Wrapper
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						width: '300px',
					}}
				>
					<ProgressComponents.LevelProgress
						value={820}
						max={1000}
					/>
					<ProgressComponents.ExperienceBar
						value={1250}
						max={2000}
					/>
					<ProgressComponents.HealthBar
						value={68}
						max={100}
					/>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
};
