import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button';
import { Wrapper } from '../../components/Wrappers';
import type { WrapperProps } from '../../components/Wrappers';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Wrapper> = {
	title: 'Wrappers/Wrapper',
	component: Wrapper,
	decorators: commonDecorators,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'The ultimate DRY wrapper component. Single component handles ALL wrapper types through the "kind" prop. Supports component, provider, and legacy wrapper kinds with configuration-driven approach.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'component',
				'provider',
				'flex-container',
				'grid-container',
				'center-container',
				'stack-container',
				'socket-provider-wrapper',
				'user-settings-provider-wrapper',
				'theme-palette-provider-wrapper',
				'achievement-socket-listener-wrapper',
			],
			description: 'The type of wrapper to render',
		},
		children: {
			control: 'text',
			description: 'Content to wrap',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes',
		},
		configuration: {
			control: 'object',
			description: 'Custom wrapper configuration',
		},
		layout: {
			control: 'select',
			options: [
				'flex',
				'grid',
				'block',
				'inline',
				'inline-block',
			],
			description: 'Layout display type',
		},
		direction: {
			control: 'select',
			options: [
				'row',
				'column',
				'row-reverse',
				'column-reverse',
			],
			description: 'Flex direction',
		},
		align: {
			control: 'select',
			options: [
				'start',
				'center',
				'end',
				'stretch',
				'baseline',
			],
			description: 'Alignment',
		},
		justify: {
			control: 'select',
			options: [
				'start',
				'center',
				'end',
				'between',
				'around',
				'evenly',
			],
			description: 'Justification',
		},
		gap: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
			description: 'Gap between items',
		},
		padding: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
			description: 'Internal padding',
		},
		margin: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'none'],
			description: 'External margin',
		},
		fullWidth: {
			control: 'boolean',
			description: 'Take full width',
		},
		fullHeight: {
			control: 'boolean',
			description: 'Take full height',
		},
		centered: {
			control: 'boolean',
			description: 'Center content',
		},
		scrollable: {
			control: 'boolean',
			description: 'Enable scrolling',
		},
		bordered: {
			control: 'boolean',
			description: 'Show border',
		},
		elevated: {
			control: 'boolean',
			description: 'Add elevation/shadow',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

// ========================================
// Basic Wrapper Stories
// ========================================

export const ComponentWrapper: Story = {
	args: {
		kind: 'component',
		children:
			'This content is wrapped in a component wrapper',
	},
};

export const ProviderWrapper: Story = {
	args: {
		kind: 'provider',
		children:
			'This content is wrapped in a provider wrapper',
	},
};

// ========================================
// Specific Provider Wrapper Stories
// ========================================

export const SocketProviderWrapper: Story = {
	args: {
		kind: 'socket-provider-wrapper',
		children: 'Socket provider wrapper content',
	},
};

export const UserSettingsProviderWrapper: Story = {
	args: {
		kind: 'user-settings-provider-wrapper',
		children: 'User settings provider wrapper content',
	},
};

export const ThemeProviderWrapper: Story = {
	args: {
		kind: 'theme-palette-provider-wrapper',
		children: 'Theme palette provider wrapper content',
	},
};

export const AchievementSocketListenerWrapper: Story = {
	args: {
		kind: 'achievement-socket-listener-wrapper',
		children: 'Achievement socket listener wrapper content',
	},
};

// ========================================
// Layout Container Stories
// ========================================

export const FlexContainer: Story = {
	args: {
		kind: 'flex-container',
		direction: 'row',
		justify: 'center',
		align: 'center',
		gap: '1rem',
		children: (
			<>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#e3f2fd',
						borderRadius: '4px',
					}}
				>
					Item 1
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#f3e5f5',
						borderRadius: '4px',
					}}
				>
					Item 2
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#e8f5e8',
						borderRadius: '4px',
					}}
				>
					Item 3
				</Wrapper>
			</>
		),
	},
};

export const GridContainer: Story = {
	args: {
		kind: 'grid-container',
		columns: 'repeat(auto-fit, minmax(150px, 1fr))',
		gap: '1rem',
		children: (
			<>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#ffecb3',
						borderRadius: '4px',
					}}
				>
					Grid Item 1
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#ffcdd2',
						borderRadius: '4px',
					}}
				>
					Grid Item 2
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#c8e6c9',
						borderRadius: '4px',
					}}
				>
					Grid Item 3
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#dcedc8',
						borderRadius: '4px',
					}}
				>
					Grid Item 4
				</Wrapper>
			</>
		),
	},
};

export const CenterContainer: Story = {
	args: {
		kind: 'center-container',
		method: 'flex',
		children: (
			<Wrapper
				style={{
					padding: '2rem',
					background: '#f5f5f5',
					borderRadius: '8px',
					border: '2px dashed #ccc',
					textAlign: 'center',
				}}
			>
				<h3>Centered Content</h3>
				<p>
					This content is perfectly centered both
					horizontally and vertically
				</p>
			</Wrapper>
		),
	},
};

export const StackContainer: Story = {
	args: {
		kind: 'stack-container',
		direction: 'column',
		gap: '0.5rem',
		align: 'stretch',
		children: (
			<>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#e1f5fe',
						borderRadius: '4px',
					}}
				>
					Stack Item 1
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#f3e5f5',
						borderRadius: '4px',
					}}
				>
					Stack Item 2
				</Wrapper>
				<Wrapper
					style={{
						padding: '1rem',
						background: '#fff3e0',
						borderRadius: '4px',
					}}
				>
					Stack Item 3
				</Wrapper>
			</>
		),
	},
};

export const Component: Story = {
	render: () => (
		<Wrapper>
			<h3>Wrapper Examples (No)</h3>
			<Wrapper
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
				}}
			>
				<Wrapper>
					<h4>Generic Wrappers</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<Wrapper kind='component'>
							component wrapper
						</Wrapper>
						<Wrapper kind='provider'>
							provider wrapper
						</Wrapper>
					</Wrapper>
				</Wrapper>

				<Wrapper>
					<h4>Layout Containers</h4>
					<Wrapper
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '1rem',
						}}
					>
						<Wrapper kind='flex-container' gap='0.5rem'>
							<span
								style={{
									padding: '0.5rem',
									background: '#e3f2fd',
								}}
							>
								Flex Item 1
							</span>
							<span
								style={{
									padding: '0.5rem',
									background: '#f3e5f5',
								}}
							>
								Flex Item 2
							</span>
						</Wrapper>
						<Wrapper
							kind='center-container'
							style={{
								height: '100px',
								background: '#f5f5f5',
								border: '1px dashed #ccc',
							}}
						>
							Centered content via
						</Wrapper>
						<Wrapper kind='stack-container'>
							<Wrapper
								style={{
									padding: '0.5rem',
									background: '#ffecb3',
								}}
							>
								Stack Item 1
							</Wrapper>
							<Wrapper
								style={{
									padding: '0.5rem',
									background: '#ffcdd2',
								}}
							>
								Stack Item 2
							</Wrapper>
						</Wrapper>
					</Wrapper>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
};

// ========================================
// Advanced Configuration Examples
// ========================================

export const WithCustomConfiguration: Story = {
	args: {
		kind: 'component',
		children: 'Custom configured wrapper',
		configuration: {
			deprecationMessage:
				'This is a custom deprecation message',
			enableConsoleWarning: true,
		},
	},
};

export const WithClassName: Story = {
	args: {
		kind: 'component',
		children: 'Wrapper with custom styling',
		className: 'custom-wrapper-class',
		style: {
			border: '2px solid #007acc',
			padding: '1rem',
			borderRadius: '8px',
			backgroundColor: '#f5f5f5',
		},
	},
};

// ========================================
// Complex Content Examples
// ========================================

export const WithComplexContent: Story = {
	args: {
		kind: 'component',
		children: (
			<Wrapper>
				<h4>Complex Wrapped Content</h4>
				<p>This wrapper contains multiple elements:</p>
				<ul>
					<li>List item 1</li>
					<li>List item 2</li>
					<li>List item 3</li>
				</ul>
				<Button kind='primary'>
					A button inside the wrapper
				</Button>
			</Wrapper>
		),
	},
};

export const NestedWrappers: Story = {
	render: () => (
		<Wrapper kind='component'>
			<h4>Outer Wrapper</h4>
			<Wrapper kind='provider'>
				<h5>Inner Provider Wrapper</h5>
				<Wrapper>
					<span>Deeply nested wrapper content</span>
				</Wrapper>
			</Wrapper>
		</Wrapper>
	),
};

// ========================================
// Sidebar Overlay Example
// ========================================

export const SidebarWithOverlay: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState(false);
		return (
			<div
				style={{ position: 'relative', minHeight: '300px' }}
			>
				<Button
					kind='primary'
					size='small'
					onClick={() => setOpen(true)}
				>
					Open Sidebar With Overlay
				</Button>
				{open && (
					<>
						{/* Overlay covers the whole screen */}
						<div
							style={{
								position: 'fixed',
								top: 0,
								left: 0,
								width: '100vw',
								height: '100vh',
								background: 'rgba(0,0,0,0.2)',
								zIndex: 99,
							}}
							onClick={() => setOpen(false)}
							aria-label='Close sidebar overlay'
						/>
						<Wrapper
							kind='sidebar-wrapper'
							style={{
								position: 'fixed',
								top: 0,
								right: 0,
								height: '100vh',
								width: 320,
								background: '#fff',
								zIndex: 100,
								boxShadow: '0 0 16px rgba(0,0,0,0.15)',
								padding: 24,
							}}
							onClose={() => setOpen(false)}
						>
							<div>
								<h3>Sidebar With Overlay</h3>
								<p>
									This sidebar closes when you click the
									overlay or outside the sidebar.
								</p>
								<Button
									kind='secondary'
									size='small'
									onClick={() => setOpen(false)}
								>
									Close
								</Button>
							</div>
						</Wrapper>
					</>
				)}
			</div>
		);
	},
};

// ========================================
// Sidebar Wrapper Stories with Overlay (All Sidebar Stories)
// ========================================

export const SidebarWrapperWithOverlay: Story = {
	render: (args) => {
		const [open, setOpen] = React.useState(false);
		return (
			<div style={{ position: 'relative', minHeight: 300 }}>
				<Button
					kind='primary'
					size='small'
					onClick={() => setOpen(true)}
				>
					Open Sidebar With Overlay
				</Button>
				{open && (
					<>
						{/* Overlay covers the whole screen */}
						<div
							style={{
								position: 'fixed',
								top: 0,
								left: 0,
								width: '100vw',
								height: '100vh',
								background: 'rgba(0,0,0,0.2)',
								zIndex: 99,
							}}
							onClick={() => setOpen(false)}
							aria-label='Close sidebar overlay'
						/>
						<Wrapper
							kind='sidebar-wrapper'
							style={{
								position: 'fixed',
								top: 0,
								right: 0,
								height: '100vh',
								width: 320,
								background: '#fff',
								zIndex: 100,
								boxShadow: '0 0 16px rgba(0,0,0,0.15)',
								padding: 24,
							}}
							onClose={() => setOpen(false)}
						>
							<div>
								<h3>Sidebar With Overlay</h3>
								<p>
									This sidebar closes when you click the
									overlay or outside the sidebar.
								</p>
								<Button
									kind='secondary'
									size='small'
									onClick={() => setOpen(false)}
								>
									Close
								</Button>
							</div>
						</Wrapper>
					</>
				)}
			</div>
		);
	},
};

// If you have other sidebar stories, repeat the overlay pattern for each variant as needed.
