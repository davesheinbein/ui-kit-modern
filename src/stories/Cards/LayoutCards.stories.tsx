import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedCard,
	CardFactory,
	CardPresets,
	QuickCards,
} from '../../components/Card';

const meta: Meta<typeof UnifiedCard> = {
	title: 'Cards/Layout Cards',
	component: UnifiedCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Basic layout cards for general content display. These are the foundational card types ' +
					'that can be used for any content and provide different visual treatments.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'default',
				'elevated',
				'outlined',
				'filled',
			],
			description: 'The basic card layout style',
		},
		title: {
			control: 'text',
			description: 'Card title',
		},
		subtitle: {
			control: 'text',
			description: 'Card subtitle',
		},
		content: {
			control: 'text',
			description: 'Card content',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedCard>;

export const DefaultCard: Story = {
	args: {
		kind: 'default',
		title: 'Default Card',
		subtitle: 'Basic card with standard styling',
		content: (
			<div>
				<p>This is the default card style with:</p>
				<ul
					style={{
						marginLeft: '1.2rem',
						marginTop: '0.5rem',
					}}
				>
					<li>Standard white background</li>
					<li>Subtle border</li>
					<li>Light shadow</li>
					<li>Medium padding</li>
				</ul>
				<p
					style={{
						marginTop: '1rem',
						color: '#666',
						fontSize: '0.9rem',
					}}
				>
					Perfect for general content display and
					information cards.
				</p>
			</div>
		),
	},
};

export const ElevatedCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Elevated Card',
		subtitle: 'Card with enhanced shadow elevation',
		content: (
			<div>
				<p>This card style features:</p>
				<ul
					style={{
						marginLeft: '1.2rem',
						marginTop: '0.5rem',
					}}
				>
					<li>No border</li>
					<li>Enhanced shadow for depth</li>
					<li>Hover effects</li>
					<li>Premium appearance</li>
				</ul>
				<p
					style={{
						marginTop: '1rem',
						color: '#666',
						fontSize: '0.9rem',
					}}
				>
					Great for highlighting important content or
					interactive elements.
				</p>
			</div>
		),
	},
};

export const OutlinedCard: Story = {
	args: {
		kind: 'outlined',
		title: 'Outlined Card',
		subtitle: 'Clean card with border outline',
		content: (
			<div>
				<p>This minimalist card includes:</p>
				<ul
					style={{
						marginLeft: '1.2rem',
						marginTop: '0.5rem',
					}}
				>
					<li>Transparent background</li>
					<li>Prominent border</li>
					<li>No shadow</li>
					<li>Clean, minimal aesthetic</li>
				</ul>
				<p
					style={{
						marginTop: '1rem',
						color: '#666',
						fontSize: '0.9rem',
					}}
				>
					Ideal for secondary content or when you want a
					lighter visual impact.
				</p>
			</div>
		),
	},
};

export const FilledCard: Story = {
	args: {
		kind: 'filled',
		title: 'Filled Card',
		subtitle: 'Card with background color fill',
		content: (
			<div>
				<p>This card style provides:</p>
				<ul
					style={{
						marginLeft: '1.2rem',
						marginTop: '0.5rem',
					}}
				>
					<li>Colored background</li>
					<li>No border or shadow</li>
					<li>Solid appearance</li>
					<li>Good contrast</li>
				</ul>
				<p
					style={{
						marginTop: '1rem',
						color: '#666',
						fontSize: '0.9rem',
					}}
				>
					Perfect for creating visual sections or grouping
					related content.
				</p>
			</div>
		),
	},
};

// Size Variations
export const SmallCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Small Card',
		subtitle: 'Compact size variant',
		content:
			'This is a small card with reduced padding and border radius.',
		overrideConfig: {
			size: 'small',
			padding: 'small',
		},
	},
};

export const LargeCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Large Card',
		subtitle: 'Spacious size variant',
		content: (
			<div>
				<p>
					This is a large card with increased padding and
					border radius.
				</p>
				<p>
					Perfect for featured content or when you need more
					space for complex layouts.
				</p>
			</div>
		),
		overrideConfig: {
			size: 'large',
			padding: 'large',
		},
	},
};

// Interactive Cards
export const ClickableCard: Story = {
	args: {
		kind: 'default',
		title: 'Clickable Card',
		subtitle: 'Interactive card with click handlers',
		content: (
			<div>
				<p>
					This card responds to clicks and shows hover
					effects.
				</p>
				<p style={{ fontSize: '0.9rem', color: '#666' }}>
					Click me to see the interaction!
				</p>
			</div>
		),
		overrideConfig: {
			clickable: true,
			hover: true,
		},
		onClick: () => alert('Card clicked!'),
	},
};

export const HoverCard: Story = {
	args: {
		kind: 'outlined',
		title: 'Hover Effect Card',
		subtitle: 'Card with hover animations',
		content: (
			<div>
				<p>
					This card has hover effects without being
					clickable.
				</p>
				<p style={{ fontSize: '0.9rem', color: '#666' }}>
					Hover over me to see the effect!
				</p>
			</div>
		),
		overrideConfig: {
			hover: true,
		},
	},
};

// Content Variations
export const ImageCard: Story = {
	args: {
		kind: 'elevated',
		title: 'Image Content Card',
		subtitle: 'Card with image content',
		content: (
			<div>
				<div
					style={{
						width: '100%',
						height: '200px',
						background:
							'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
						borderRadius: '0.5rem',
						marginBottom: '1rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: 'white',
						fontSize: '1.2rem',
					}}
				>
					🎨 Image Placeholder
				</div>
				<p>
					Cards can contain images, graphics, or any custom
					content.
				</p>
			</div>
		),
	},
};

export const ActionCard: Story = {
	args: {
		kind: 'default',
		title: 'Card with Actions',
		subtitle: 'Interactive card with action buttons',
		content:
			'This card includes action buttons in the footer area for user interactions.',
		actions: (
			<div
				style={{
					display: 'flex',
					gap: '0.5rem',
					justifyContent: 'flex-end',
				}}
			>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: 'transparent',
						color: '#6c757d',
						border: '1px solid #6c757d',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Cancel
				</button>
				<button
					style={{
						padding: '0.5rem 1rem',
						backgroundColor: '#007bff',
						color: 'white',
						border: 'none',
						borderRadius: '0.375rem',
						cursor: 'pointer',
					}}
				>
					Confirm
				</button>
			</div>
		),
	},
};

// Factory Method Examples
export const FactoryComparison: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h3 style={{ marginBottom: '1.5rem' }}>
				Different Ways to Create Cards
			</h3>

			<div
				style={{
					display: 'grid',
					gap: '1.5rem',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
				}}
			>
				{/* Direct UnifiedCard */}
				<div>
					<h4
						style={{
							marginBottom: '1rem',
							fontSize: '1.1rem',
						}}
					>
						1. Direct UnifiedCard
					</h4>
					<UnifiedCard
						kind='elevated'
						title='Direct Card'
						content='Created using UnifiedCard component directly'
					/>
				</div>

				{/* CardFactory */}
				<div>
					<h4
						style={{
							marginBottom: '1rem',
							fontSize: '1.1rem',
						}}
					>
						2. CardFactory Function
					</h4>
					<CardFactory
						kind='elevated'
						title='Factory Card'
						content='Created using CardFactory function'
					/>
				</div>

				{/* CardPresets */}
				<div>
					<h4
						style={{
							marginBottom: '1rem',
							fontSize: '1.1rem',
						}}
					>
						3. CardPresets
					</h4>
					<CardPresets.ActionCard
						title='Preset Card'
						content='Created using CardPresets.ActionCard'
					/>
				</div>

				{/* QuickCards */}
				<div>
					<h4
						style={{
							marginBottom: '1rem',
							fontSize: '1.1rem',
						}}
					>
						4. QuickCards
					</h4>
					{QuickCards.action({
						title: 'Quick Card',
						content:
							'Created using QuickCards.action shorthand',
					})}
				</div>
			</div>
		</div>
	),
};

// Layout Grid Showcase
export const LayoutShowcase: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '1.5rem',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(280px, 1fr))',
				padding: '1rem',
			}}
		>
			<UnifiedCard
				kind='default'
				title='Information'
				content='Default card for general information display'
			/>

			<UnifiedCard
				kind='elevated'
				title='Featured'
				content='Elevated card for highlighting important content'
			/>

			<UnifiedCard
				kind='outlined'
				title='Secondary'
				content='Outlined card for secondary information'
			/>

			<UnifiedCard
				kind='filled'
				title='Grouped'
				content='Filled card for visual grouping'
			/>

			<UnifiedCard
				kind='default'
				title='Interactive'
				content='Card with hover and click effects'
				overrideConfig={{ clickable: true, hover: true }}
				onClick={() => alert('Clicked!')}
			/>

			<UnifiedCard
				kind='elevated'
				title='Action Card'
				content='Card with action buttons'
				actions={
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#007bff',
							color: 'white',
							border: 'none',
							borderRadius: '0.375rem',
							cursor: 'pointer',
						}}
					>
						Take Action
					</button>
				}
			/>
		</div>
	),
};
