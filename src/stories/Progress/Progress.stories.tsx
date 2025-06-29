import type { Meta, StoryObj } from '@storybook/react';
import {
	Progress,
	ProgressProps,
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
		showPercentage: true,
	},
};

export const UploadProgress: Story = {
	args: {
		kind: 'upload-progress',
		variant: 'success',
		size: 'md',
		value: 45,
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
		label: 'Level 15 Progress',
		showValue: true,
	},
};

// Local demo components for grid
const DotsLoaderDemo = (props: Partial<ProgressProps>) => (
	<Progress kind='dots-loader' {...props} />
);
const PulseLoaderDemo = (props: Partial<ProgressProps>) => (
	<Progress kind='pulse-loader' {...props} />
);
const BounceLoaderDemo = (
	props: Partial<ProgressProps>
) => <Progress kind='bounce-loader' {...props} />;
const DownloadProgressDemo = (
	props: Partial<ProgressProps>
) => <Progress kind='download-progress' {...props} />;
const ExperienceBarDemo = (
	props: Partial<ProgressProps>
) => <Progress kind='experience-bar' {...props} />;
const HealthBarDemo = (props: Partial<ProgressProps>) => (
	<Progress kind='health-bar' {...props} />
);

export const Components: Story = {
	render: () => (
		<Wrapper direction='column' gap={8} p={8}>
			<Wrapper>
				<h3>Loading Indicators</h3>
				<Wrapper direction='row' gap={4} center>
					<Progress kind='loading-spinner' />
					<DotsLoaderDemo />
					<PulseLoaderDemo />
					<BounceLoaderDemo />
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h3>Progress Bars</h3>
				<Wrapper direction='column' gap={4} w={300}>
					<Progress kind='linear-progress' value={65} />
					<Progress kind='upload-progress' value={45} />
					<DownloadProgressDemo value={75} />
				</Wrapper>
			</Wrapper>

			<Wrapper>
				<h3>Game Progress</h3>
				<Wrapper direction='column' gap={4} w={300}>
					<Progress kind='level-progress' value={820} />
					<ExperienceBarDemo value={1250} />
					<HealthBarDemo value={68} />
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
};

// List of all ProgressKind values
const allKinds = [
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
] as const;

export const AllKinds = () => (
	<Wrapper
		aria-label='All Progress Kinds Grid'
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gap: 32,
			alignItems: 'flex-start',
			padding: 24,
			background: '#f5f7fa',
			borderRadius: 12,
		}}
	>
		{allKinds.map((kind) => (
			<div
				key={kind}
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					padding: 16,
					border: '1px solid #e0e4ea',
					borderRadius: 8,
					background: '#fff',
					boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
				}}
				aria-label={`Progress kind: ${kind}`}
			>
				<Progress
					kind={kind}
					value={60}
					label={kind
						.replace(/-/g, ' ')
						.replace(/\b\w/g, (l) => l.toUpperCase())}
					showPercentage
					style={{ marginBottom: 8, width: '80%' }}
				/>
				<span
					style={{
						fontSize: 13,
						color: '#555',
						textAlign: 'center',
						wordBreak: 'break-all',
						marginTop: 4,
					}}
				>
					{kind}
				</span>
			</div>
		))}
	</Wrapper>
);
