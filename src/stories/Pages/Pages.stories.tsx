import type { Meta, StoryObj } from '@storybook/react';
import { PageFactory } from '../../components/Pages';

const meta: Meta<typeof PageFactory> = {
	title: 'Pages/Pages (DRY System)',
	component: PageFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Unified page system supporting multiple page types: startup, landing, dashboard, settings, and more. Built with the DRY factory pattern for maximum reusability.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'startup',
				'landing',
				'dashboard',
				'settings',
				'profile',
				'game',
				'browse',
				'results',
				'about',
				'help',
				'custom',
			],
			description: 'The type of page to render',
		},
		title: {
			control: 'text',
			description: 'Page title',
		},
		subtitle: {
			control: 'text',
			description: 'Page subtitle',
		},
		onStartDaily: {
			action: 'startDaily',
			description:
				'Function called when starting daily mode (startup page)',
		},
		onStartCustom: {
			action: 'startCustom',
			description:
				'Function called when starting custom mode (startup page)',
		},
		onBrowseCustom: {
			action: 'browseCustom',
			description:
				'Function called when browsing custom puzzles (startup page)',
		},
		onShare: {
			action: 'share',
			description:
				'Function called when sharing (startup page)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		kind: 'startup',
		title: 'Game Title',
		onStartDaily: () => {},
		onStartCustom: () => {},
		onBrowseCustom: () => {},
		onShare: () => {},
	},
};

export const AllPageTypes: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<div
				style={{
					height: '400px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<h3
					style={{
						padding: '1rem',
						margin: 0,
						background: '#f8fafc',
						borderBottom: '1px solid #e5e7eb',
					}}
				>
					Startup Page
				</h3>
				<div
					style={{ height: '340px', position: 'relative' }}
				>
					<PageFactory
						kind='startup'
						title='Welcome to the Game'
						subtitle='Choose your adventure'
						onStartDaily={() => {}}
						onStartCustom={() => {}}
						onBrowseCustom={() => {}}
						onShare={() => {}}
					/>
				</div>
			</div>

			<div
				style={{
					height: '400px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<h3
					style={{
						padding: '1rem',
						margin: 0,
						background: '#f8fafc',
						borderBottom: '1px solid #e5e7eb',
					}}
				>
					Landing Page
				</h3>
				<div
					style={{ height: '340px', position: 'relative' }}
				>
					<PageFactory
						kind='landing'
						title='Welcome'
						subtitle='A beautiful landing page experience'
						configuration={{
							showHeader: true,
							showFooter: true,
						}}
					>
						<p>
							This is a landing page with header and footer.
						</p>
					</PageFactory>
				</div>
			</div>

			<div
				style={{
					height: '400px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<h3
					style={{
						padding: '1rem',
						margin: 0,
						background: '#f8fafc',
						borderBottom: '1px solid #e5e7eb',
					}}
				>
					Dashboard Page
				</h3>
				<div
					style={{ height: '340px', position: 'relative' }}
				>
					<PageFactory
						kind='dashboard'
						title='Dashboard'
						subtitle='Your analytics overview'
						configuration={{
							showHeader: true,
							showNavigation: true,
						}}
					>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								gap: '1rem',
							}}
						>
							<div
								style={{
									background: '#fff',
									padding: '1rem',
									borderRadius: '8px',
									boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
								}}
							>
								<h4>Metric 1</h4>
								<p>Value</p>
							</div>
							<div
								style={{
									background: '#fff',
									padding: '1rem',
									borderRadius: '8px',
									boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
								}}
							>
								<h4>Metric 2</h4>
								<p>Value</p>
							</div>
							<div
								style={{
									background: '#fff',
									padding: '1rem',
									borderRadius: '8px',
									boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
								}}
							>
								<h4>Metric 3</h4>
								<p>Value</p>
							</div>
						</div>
					</PageFactory>
				</div>
			</div>
		</div>
	),
};

export const StartupPageVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			<h3>Startup Page - Default</h3>
			<div
				style={{
					height: '300px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<PageFactory
					kind='startup'
					title='Game Title'
					onStartDaily={() => {}}
					onStartCustom={() => {}}
					onBrowseCustom={() => {}}
					onShare={() => {}}
				/>
			</div>

			<h3>Startup Page - Custom Title</h3>
			<div
				style={{
					height: '300px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<PageFactory
					kind='startup'
					title='My Custom Game'
					subtitle='Experience the adventure'
					onStartDaily={() => {}}
					onStartCustom={() => {}}
					onBrowseCustom={() => {}}
					onShare={() => {}}
				/>
			</div>

			<h3>Startup Page - Without Share</h3>
			<div
				style={{
					height: '300px',
					border: '1px solid #e5e7eb',
					borderRadius: '8px',
					overflow: 'hidden',
				}}
			>
				<PageFactory
					kind='startup'
					title='Puzzle Challenge'
					onStartDaily={() => {}}
					onStartCustom={() => {}}
					onBrowseCustom={() => {}}
					// onShare not provided
				/>
			</div>
		</div>
	),
};

export const PageWithNavigation: Story = {
	args: {
		kind: 'settings',
		title: 'Settings',
		subtitle: 'Manage your account preferences',
		configuration: {
			showHeader: true,
			showNavigation: true,
			showFooter: true,
		},
		children: (
			<div style={{ padding: '2rem' }}>
				<h3>Account Settings</h3>
				<p>Configure your account preferences here.</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						maxWidth: '400px',
					}}
				>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
						}}
					>
						<input type='checkbox' defaultChecked />
						Enable notifications
					</label>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
						}}
					>
						<input type='checkbox' />
						Subscribe to newsletter
					</label>
					<label
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
						}}
					>
						<input type='checkbox' defaultChecked />
						Two-factor authentication
					</label>
				</div>
			</div>
		),
	},
};

export const CustomPageExample: Story = {
	args: {
		kind: 'custom',
		configuration: {
			variant: 'centered',
			layout: 'centered',
			size: 'medium',
			showHeader: false,
			showFooter: false,
			fullHeight: true,
			background:
				'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		},
		children: (
			<div
				style={{
					color: '#fff',
					textAlign: 'center',
					padding: '3rem',
					borderRadius: '12px',
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
				}}
			>
				<h1
					style={{
						fontSize: '2.5rem',
						marginBottom: '1rem',
					}}
				>
					Custom Page
				</h1>
				<p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
					This is a custom page with gradient background and
					glassmorphism effect.
				</p>
				<button
					style={{
						background: 'rgba(255, 255, 255, 0.2)',
						border: '1px solid rgba(255, 255, 255, 0.3)',
						color: '#fff',
						padding: '12px 24px',
						borderRadius: '8px',
						marginTop: '2rem',
						cursor: 'pointer',
					}}
				>
					Get Started
				</button>
			</div>
		),
	},
};
