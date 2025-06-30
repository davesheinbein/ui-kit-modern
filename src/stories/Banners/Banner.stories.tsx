import React, { useState } from 'react';
import { Button } from '../../components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import Banner from '../../components/Banner/Banner';
import { Wrapper } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';

const action = (label: string) => () =>
	console.log(`${label} clicked`);

const meta: Meta<typeof Banner> = {
	title: 'Banners/Banner',
	component: Banner,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# Banner System

A comprehensive banner system with multiple variants and a DRY configuration pattern.

## Features
- **Base Component**: Banner - foundational styling and behavior
- **Ultra-DRY**: Banner - create any banner type with configuration

## Banner Types
- **Feedback**: Game completion, user feedback
- **Notifications**: System alerts, achievements, burns, taunts
- **Toasts**: Success, error, warning, info messages
- **Status Bar**: VS game status with player/opponent data
- **Global**: App-wide notifications

## Usage Examples
\`\`\`tsx
// Feedback banner
<Banner kind="feedback" message="Game completed!" />

// Toast notification
<Banner kind="toast" message="Saved successfully!" type="success" />

// Status bar
<Banner
  kind="status"
  player={player}
  opponent={opponent}
  timer="01:23"
  showMistakes
  showTimer
/>
\`\`\`
`,
			},
		},
		layout: 'padded',
	},
	argTypes: {
		'kind': {
			control: 'select',
			options: [
				'feedback',
				'notification',
				'toast',
				'status',
				'global',
				'burn-notification',
				'achievement-notification',
				'system-notification',
				'taunt-notification',
				'success-toast',
				'error-toast',
				'warning-toast',
				'info-toast',
				'vs-status',
			],
			description: 'Banner kind/configuration to use',
		},
		'message': {
			control: 'text',
			description: 'Message to display in the banner',
		},
		'type': {
			control: 'select',
			options: [
				'burn',
				'achievement',
				'system',
				'taunt',
				'success',
				'error',
				'info',
				'warning',
			],
			description:
				'Banner type (affects colors and styling)',
		},
		'icon': {
			control: 'text',
			description: 'Custom icon (emoji or text)',
		},
		'duration': {
			control: {
				type: 'range',
				min: 1000,
				max: 10000,
				step: 500,
			},
			description: 'Auto hide duration (ms)',
		},
		'onClose': {
			action: 'close clicked',
			description: 'Callback when banner is closed',
		},

		'player.username': {
			control: 'text',
			description: 'Player username',
		},
		'player.groupsSolved': {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Number of groups solved by player',
		},
		'player.mistakes': {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Number of mistakes made by player',
		},
		'opponent.username': {
			control: 'text',
			description: 'Opponent username',
		},
		'opponent.groupsSolved': {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Number of groups solved by opponent',
		},
		'opponent.mistakes': {
			control: { type: 'number', min: 0, max: 10 },
			description: 'Number of mistakes made by opponent',
		},
		'timer': {
			control: 'text',
			description: 'Timer display (e.g., "02:45")',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Banner>;

const BannerDemo = (args: any) => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>
				Show Banner
			</button>
			{open && (
				<Banner {...args} close={() => setOpen(false)} />
			)}
		</>
	);
};

export const Playground: Story = {
	name: 'Playground',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'success-toast',
		message: 'This is a customizable banner!',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Use the button below to show the banner. Only one banner is visible at a time.',
			},
		},
	},
};

export const FeedbackBanner: Story = {
	name: 'Feedback Banner',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'feedback',
		message:
			'Congratulations! You completed the game with a perfect score! 🎉',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Click the button to show a feedback banner. Only one banner is visible at a time.',
			},
		},
	},
};

export const NotificationBanner: Story = {
	name: 'Notification Banner',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'notification',
		message: 'System maintenance will begin in 15 minutes.',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Basic notification banners for system alerts and general notifications.',
			},
		},
	},
};

export const ToastBanner: Story = {
	name: 'Toast Banner',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'toast',
		message: 'Achievement unlocked: First Victory!',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Toast banners appear temporarily with auto-close functionality.',
			},
		},
	},
};

export const GlobalToast: Story = {
	name: 'Global Toast',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'global',
		message: 'Welcome to the new game mode!',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Global toasts appear at the top of the viewport with maximum z-index.',
			},
		},
	},
};

export const BurnNotification: Story = {
	name: 'Burn Notification',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'burn-notification',
		message: 'Player got burned! -50 points',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Burn notifications use warning/error gradient colors to indicate negative events.',
			},
		},
	},
};

export const AchievementNotification: Story = {
	name: 'Achievement Notification',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'achievement-notification',
		message: 'Achievement Unlocked: Perfect Game!',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Achievement notifications use golden gradient colors for celebrations.',
			},
		},
	},
};

export const SystemNotification: Story = {
	name: 'System Notification',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'system-notification',
		message: 'Game rules have been updated',
	},
	parameters: {
		docs: {
			description: {
				story:
					'System notifications use blue gradient colors for informational messages.',
			},
		},
	},
};

export const TauntNotification: Story = {
	name: 'Taunt Notification',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'taunt-notification',
		message: 'Player sent a taunt: "Too easy!"',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Taunt notifications use purple gradient colors for playful provocations.',
			},
		},
	},
};

export const SuccessToast: Story = {
	name: 'Success Toast',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'success-toast',
		message: 'Data saved successfully!',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Success toasts use green gradient colors for positive confirmations.',
			},
		},
	},
};

export const ErrorToast: Story = {
	name: 'Error Toast',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'error-toast',
		message: 'Failed to connect to server',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Error toasts use red gradient colors and stay visible longer (5s).',
			},
		},
	},
};

export const WarningToast: Story = {
	name: 'Warning Toast',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'warning-toast',
		message:
			'Connection unstable - some features may be limited',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Warning toasts use orange gradient colors for cautionary messages.',
			},
		},
	},
};

export const InfoToast: Story = {
	name: 'Info Toast',
	render: (args) => <BannerDemo {...args} />,
	args: {
		kind: 'info-toast',
		message: 'New update available - restart to apply',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Info toasts use blue gradient colors for informational updates.',
			},
		},
	},
};

export const VSStatusBar: Story = {
	name: 'VS Status Bar',
	args: {
		kind: 'vs-status',
		player: {
			username: 'ayer1',
			avatarUrl:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
			groupsSolved: 2,
			mistakes: 1,
			isYou: true,
		},
		opponent: {
			username: 'ayer2',
			avatarUrl:
				'https://images.unsplash.com/photo-1494790108755-2616b332c6ff?w=32&h=32&fit=crop&crop=face',
			groupsSolved: 1,
			mistakes: 0,
		},
		timer: '02:45',
		totalGroups: 4,
		onEmoteClick: action('emote clicked'),
		// Ensure close button is hidden
		showCloseButton: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					'VS Status Bar shows real-time game information including player stats, timer, and opponent data.',
			},
		},
	},
};

export const UsingPresets: Story = {
	name: 'Using Presets',
	render: () => {
		return (
			<Wrapper direction='column' gap={2}>
				<Banner
					kind='feedback'
					message='Congratulations! Perfect score achieved!'
				/>
				<Banner
					kind='achievement-notification'
					message='Level Up! You reached level 10'
				/>
				<Banner
					kind='burn-notification'
					message='Ouch! You got burned by the opponent'
				/>
				<Banner
					kind='success-toast'
					message='Settings saved successfully'
				/>
			</Wrapper>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
Examples using the \`Banner\` component for common patterns:
\`\`\`tsx
<Banner kind="feedback" message="Perfect score achieved!" />
<Banner kind="achievement-notification" message="Level Up!" />
<Banner kind="burn-notification" message="You got burned!" />
<Banner kind="success-toast" message="Settings saved" />
\`\`\`
				`,
			},
		},
	},
};

export const BaseBannerComponent: Story = {
	name: 'Base Banner Component',
	render: () => {
		return (
			<Wrapper
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<Banner variant='feedback' type='achievement'>
					Using the base Banner component directly
				</Banner>
				<Banner
					variant='toast'
					type='success'
					onClose={action('closed')}
				>
					<Wrapper
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
						}}
					>
						<span>✅</span>
						<span>Custom content with JSX</span>
					</Wrapper>
				</Banner>
				<Banner variant='notification' type='warning'>
					<Wrapper>
						<strong>Warning:</strong> This banner has custom
						JSX content
					</Wrapper>
				</Banner>
			</Wrapper>
		);
	},
	parameters: {
		docs: {
			description: {
				story: `
Examples using the base \`Banner\` component with custom JSX content:
\`\`\`tsx
<Banner variant="feedback" type="achievement">
  Using the base Banner component directly
</Banner>

<Banner variant="toast" type="success" onClose={handleClose}>
  <Wrapper kind="flex-container" alignItems: 'center', gap: '8px' }}>
    <span>✅</span>
    <span>Custom content with JSX</span>
  </Wrapper>
</Banner>
\`\`\`
				`,
			},
		},
	},
};

export const AutoCloseDemo: Story = {
	name: 'Auto-Close Demo',
	args: {
		kind: 'success-toast',
		message: 'This banner will auto-close in 3 seconds!',
		duration: 3000,
		onClose: action('auto-closed'),
	},
	parameters: {
		docs: {
			description: {
				story:
					'This banner demonstrates the auto-close functionality with a 3-second timer.',
			},
		},
	},
};

const ALL_BANNER_VARIANTS = [
	{
		label: 'Feedback',
		args: {
			kind: 'feedback',
			message: 'Feedback banner: Game completed! 🎉',
		},
	},
	{
		label: 'Notification',
		args: {
			kind: 'notification',
			message: 'Notification banner: System alert!',
		},
	},
	{
		label: 'Toast',
		args: {
			kind: 'toast',
			message: 'Toast banner: Saved successfully!',
		},
	},
	{
		label: 'Status',
		args: {
			kind: 'status',
			player: {
				username: 'You',
				groupsSolved: 2,
				mistakes: 1,
			},
			opponent: {
				username: 'Opponent',
				groupsSolved: 1,
				mistakes: 2,
			},
			timer: '01:23',
			showMistakes: true,
			showTimer: true,
		},
	},
	{
		label: 'Global',
		args: {
			kind: 'global',
			message: 'Global banner: App-wide notification!',
		},
	},
];

export const AllBannerTypes: Story = {
	name: 'All Banner Types',
	render: () => {
		const [openIdx, setOpenIdx] = React.useState<
			number | null
		>(null);
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 24,
				}}
			>
				<div
					style={{
						display: 'flex',
						gap: 16,
						flexWrap: 'wrap',
					}}
				>
					{ALL_BANNER_VARIANTS.map((variant, idx) => (
						<Button
							key={variant.label}
							onClick={() => setOpenIdx(idx)}
						>
							Show {variant.label}
						</Button>
					))}
				</div>
				{openIdx !== null && (
					<div style={{ marginTop: 24 }}>
						<Banner
							{...ALL_BANNER_VARIANTS[openIdx].args}
							onClose={() => setOpenIdx(null)}
						/>
					</div>
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Click a button to show each banner type. Only one banner is visible at a time, preventing overlap.',
			},
		},
	},
};

export const BannerWithActions: Story = {
	name: 'Banner with Actions',
	args: {
		kind: 'notification',
		message: 'This banner has action buttons!',
		actions: [
			{
				label: 'Accept',
				onClick: () => alert('Accepted!'),
				variant: 'primary',
			},
			{
				label: 'Decline',
				onClick: () => alert('Declined!'),
				variant: 'secondary',
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the new actions prop for Banner, rendering action buttons.',
			},
		},
	},
};
