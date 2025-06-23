import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import type { FooterProps } from '../../components/Footer/Footer';

const meta: Meta<typeof Footer> = {
	title: 'Footers/Footer',
	component: Footer,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A flexible footer component with configurable left, center, and right content sections, built-in copyright and navigation links support.',
			},
		},
	},
	argTypes: {
		leftContent: {
			control: false,
			description: 'Custom content for the left section',
		},
		rightContent: {
			control: false,
			description: 'Custom content for the right section',
		},
		centerContent: {
			control: false,
			description: 'Custom content for the center section',
		},
		children: {
			control: false,
			description: 'Child components to render in footer',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		copyright: {
			control: 'text',
			description:
				'Copyright text (defaults to current year)',
		},
		links: {
			control: 'object',
			description: 'Navigation links for the right section',
		},
		showDivider: {
			control: 'boolean',
			description: 'Show dividers between navigation links',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const WithCopyright: Story = {
	args: {
		copyright: '© 2024 My Company. All rights reserved.',
	},
};

export const WithLinks: Story = {
	args: {
		links: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' },
			{ label: 'Contact', href: '/contact' },
		],
	},
};

export const WithClickableLinks: Story = {
	args: {
		copyright: '© 2024 Gaming Company',
		links: [
			{
				label: 'Help',
				onClick: () => alert('Help clicked'),
			},
			{ label: 'About', href: '/about' },
			{
				label: 'Support',
				onClick: () => alert('Support clicked'),
			},
		],
	},
};

export const WithCenterContent: Story = {
	args: {
		copyright: '© 2024 UI Kit',
		centerContent: (
			<div
				style={{
					display: 'flex',
					gap: '1rem',
					alignItems: 'center',
				}}
			>
				<span>🎮</span>
				<span>Made with ❤️</span>
				<span>⭐</span>
			</div>
		),
		links: [
			{ label: 'GitHub', href: 'https://github.com' },
			{ label: 'Discord', href: 'https://discord.com' },
		],
	},
};

export const CustomContent: Story = {
	args: {
		leftContent: (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				<span style={{ fontSize: '1.2rem' }}>🎯</span>
				<span>Puzzle Game v2.1.0</span>
			</div>
		),
		centerContent: (
			<div style={{ display: 'flex', gap: '1rem' }}>
				<Button
					kind='ghost'
					style={{
						background: 'none',
						border: 'none',
						color: '#6b7280',
						cursor: 'pointer',
					}}
				>
					🌙
				</Button>
				<Button
					kind='ghost'
					style={{
						background: 'none',
						border: 'none',
						color: '#6b7280',
						cursor: 'pointer',
					}}
				>
					⚙️
				</Button>
			</div>
		),
		rightContent: (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<span>Status: Online</span>
				<div
					style={{
						width: '8px',
						height: '8px',
						borderRadius: '50%',
						background: '#22c55e',
					}}
				></div>
			</div>
		),
	},
};

export const SocialLinks: Story = {
	args: {
		copyright: '© 2024 Social Gaming',
		links: [
			{ label: 'Twitter', href: 'https://twitter.com' },
			{ label: 'Facebook', href: 'https://facebook.com' },
			{ label: 'Instagram', href: 'https://instagram.com' },
			{ label: 'YouTube', href: 'https://youtube.com' },
		],
	},
};

export const InPageLayout: Story = {
	args: {
		copyright: '© 2024 My App',
		links: [
			{ label: 'Privacy', href: '/privacy' },
			{ label: 'Terms', href: '/terms' },
			{ label: 'Support', href: '/support' },
		],
	},
	decorators: [
		(Story) => (
			<div
				style={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<header
					style={{
						padding: '1rem 2rem',
						background: '#f8fafc',
						borderBottom: '1px solid #e5e7eb',
					}}
				>
					<h1>My Application</h1>
				</header>
				<main
					style={{
						flex: 1,
						padding: '2rem',
						background: '#ffffff',
					}}
				>
					<h2>Page Content</h2>
					<p>
						This is the main content area that grows to fill
						available space.
					</p>
					<p>
						The footer will always stick to the bottom of
						the viewport.
					</p>
				</main>
				<Story />
			</div>
		),
	],
};
