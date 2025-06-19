import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedWrapper,
	WrapperFactory,
	W,
} from '../../components/Wrappers';
import type { UnifiedWrapperProps } from '../../components/Wrappers';

const meta: Meta<typeof UnifiedWrapper> = {
	title: 'Wrappers/UnifiedWrapper',
	component: UnifiedWrapper,
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
				'legacy',
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
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedWrapper>;

// ========================================
// Basic Wrapper Stories
// ========================================

export const ComponentWrapper: Story = {
	args: {
		kind: 'component',
		children: 'This content is wrapped in a component wrapper',
	},
};

export const ProviderWrapper: Story = {
	args: {
		kind: 'provider',
		children: 'This content is wrapped in a provider wrapper',
	},
};

export const LegacyWrapper: Story = {
	args: {
		kind: 'legacy',
		children: 'This content is wrapped in a legacy wrapper',
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

export const ThemePaletteProviderWrapper: Story = {
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
				<div style={{ padding: '1rem', background: '#e3f2fd', borderRadius: '4px' }}>Item 1</div>
				<div style={{ padding: '1rem', background: '#f3e5f5', borderRadius: '4px' }}>Item 2</div>
				<div style={{ padding: '1rem', background: '#e8f5e8', borderRadius: '4px' }}>Item 3</div>
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
				<div style={{ padding: '1rem', background: '#ffecb3', borderRadius: '4px' }}>Grid Item 1</div>
				<div style={{ padding: '1rem', background: '#ffcdd2', borderRadius: '4px' }}>Grid Item 2</div>
				<div style={{ padding: '1rem', background: '#c8e6c9', borderRadius: '4px' }}>Grid Item 3</div>
				<div style={{ padding: '1rem', background: '#dcedc8', borderRadius: '4px' }}>Grid Item 4</div>
			</>
		),
	},
};

export const CenterContainer: Story = {
	args: {
		kind: 'center-container',
		method: 'flex',
		children: (
			<div style={{ 
				padding: '2rem', 
				background: '#f5f5f5', 
				borderRadius: '8px',
				border: '2px dashed #ccc',
				textAlign: 'center'
			}}>
				<h3>Centered Content</h3>
				<p>This content is perfectly centered both horizontally and vertically</p>
			</div>
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
				<div style={{ padding: '1rem', background: '#e1f5fe', borderRadius: '4px' }}>Stack Item 1</div>
				<div style={{ padding: '1rem', background: '#f3e5f5', borderRadius: '4px' }}>Stack Item 2</div>
				<div style={{ padding: '1rem', background: '#fff3e0', borderRadius: '4px' }}>Stack Item 3</div>
			</>
		),
	},
};

// ========================================
// Factory Examples
// ========================================

export const FactoryComponent: Story = {
	render: () => (
		<div>
			<h3>WrapperFactory Examples</h3>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
				<div>
					<h4>Generic Wrappers</h4>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{WrapperFactory.component({ children: 'Factory component wrapper' })}
						{WrapperFactory.provider({ children: 'Factory provider wrapper' })}
						{WrapperFactory.legacy({ children: 'Factory legacy wrapper' })}
					</div>
				</div>
				
				<div>
					<h4>Layout Containers</h4>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{WrapperFactory.flexContainer({ 
							children: (
								<>
									<span style={{ padding: '0.5rem', background: '#e3f2fd' }}>Flex Item 1</span>
									<span style={{ padding: '0.5rem', background: '#f3e5f5' }}>Flex Item 2</span>
								</>
							),
							gap: '0.5rem'
						})}
						{WrapperFactory.centerContainer({ 
							children: 'Centered content via factory',
							style: { height: '100px', background: '#f5f5f5', border: '1px dashed #ccc' }
						})}
						{WrapperFactory.stackContainer({ 
							children: (
								<>
									<div style={{ padding: '0.5rem', background: '#ffecb3' }}>Stack Item 1</div>
									<div style={{ padding: '0.5rem', background: '#ffcdd2' }}>Stack Item 2</div>
								</>
							),
							gap: '0.25rem'
						})}
					</div>
				</div>
			</div>
		</div>
	),
};

export const UltraShortAliases: Story = {
	render: () => (
		<div>
			<h3>Ultra-Short W Aliases</h3>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
				<div>
					<h4>Generic W Aliases</h4>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{W.component({ children: 'W.component wrapper' })}
						{W.provider({ children: 'W.provider wrapper' })}
						{W.legacy({ children: 'W.legacy wrapper' })}
					</div>
				</div>
				
				<div>
					<h4>Layout W Aliases</h4>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
						{W.flexContainer({ 
							children: (
								<>
									<span style={{ padding: '0.5rem', background: '#e8f5e8' }}>W.flex Item 1</span>
									<span style={{ padding: '0.5rem', background: '#fff3e0' }}>W.flex Item 2</span>
								</>
							),
							gap: '0.5rem'
						})}
						{W.centerContainer({ 
							children: 'W.center content',
							style: { height: '80px', background: '#f0f0f0', border: '1px solid #ddd' }
						})}
						{W.stackContainer({ 
							children: (
								<>
									<div style={{ padding: '0.5rem', background: '#e1f5fe' }}>W.stack Item 1</div>
									<div style={{ padding: '0.5rem', background: '#fce4ec' }}>W.stack Item 2</div>
								</>
							),
							gap: '0.25rem'
						})}
					</div>
				</div>
			</div>
		</div>
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
			deprecationMessage: 'This is a custom deprecation message',
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
			<div>
				<h4>Complex Wrapped Content</h4>
				<p>This wrapper contains multiple elements:</p>
				<ul>
					<li>List item 1</li>
					<li>List item 2</li>
					<li>List item 3</li>
				</ul>
				<button>A button inside the wrapper</button>
			</div>
		),
	},
};

export const NestedWrappers: Story = {
	render: () => (
		<UnifiedWrapper kind="component">
			<h4>Outer Wrapper</h4>
			<UnifiedWrapper kind="provider">
				<h5>Inner Provider Wrapper</h5>
				<UnifiedWrapper kind="legacy">
					<span>Deeply nested legacy wrapper content</span>
				</UnifiedWrapper>
			</UnifiedWrapper>
		</UnifiedWrapper>
	),
};
