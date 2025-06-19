import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Go Back (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Go back button using UnifiedButton with kind="go-back". A navigation button with back arrow icon for returning to previous pages. Can display with text or as icon-only.',
			},
		},
	},
	argTypes: {
		onClick: {
			action: 'clicked',
			description: 'Function called when button is clicked',
		},
		children: {
			control: 'text',
			description:
				'Optional text label to display next to the icon',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply',
		},
		style: {
			control: 'object',
			description: 'Inline styles to apply',
		},
		kind: {
			control: false,
			description:
				'Button kind (fixed to "go-back" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'go-back',
		onClick: () => {},
	},
};

export const WithLabel: Story = {
	args: {
		kind: 'go-back',
		onClick: () => {},
		children: 'Go Back',
	},
};

export const IconOnly: Story = {
	args: {
		kind: 'nav-back',
		onClick: () => {},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Icon-only navigation back button using kind="nav-back". Optimized for navigation contexts with minimal UI footprint.',
			},
		},
	},
};

export const IconOnlyVariations: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '16px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<div>
				<h4>Nav Back (Icon Only)</h4>
				<UnifiedButton
					kind='nav-back'
					onClick={() => alert('Nav back clicked!')}
				/>
			</div>

			<div>
				<h4>Go Back with Override</h4>
				<UnifiedButton
					kind='go-back'
					onClick={() => alert('Override back clicked!')}
					overrideConfig={{
						iconPosition: 'only',
						ariaLabel: 'Go back',
					}}
				/>
			</div>

			<div>
				<h4>Custom Icon</h4>
				<UnifiedButton
					kind='nav-back'
					icon='‹'
					onClick={() => alert('Custom back clicked!')}
				/>
			</div>

			<div>
				<h4>Custom Label</h4>
				<UnifiedButton
					kind='nav-back'
					label='Return to previous screen'
					onClick={() => alert('Navigation back!')}
				/>
			</div>

			<div>
				<h4>Disabled</h4>
				<UnifiedButton kind='nav-back' disabled />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Various icon-only go-back button configurations. Includes dedicated nav-back kind and go-back with overrides.',
			},
		},
	},
};

// Test component to demonstrate go-back button in navigation context
const NavigationExample = () => {
	const [currentPage, setCurrentPage] = React.useState<
		'home' | 'list' | 'details'
	>('details');

	const pages = {
		home: {
			title: 'Home Page',
			content: 'Welcome to the home page!',
		},
		list: {
			title: 'Product List',
			content: 'Here are all the products...',
		},
		details: {
			title: 'Product Details',
			content: 'Detailed information about the product.',
		},
	} as const;

	const navigation: Record<
		'home' | 'list' | 'details',
		'home' | 'list' | null
	> = {
		details: 'list',
		list: 'home',
		home: null,
	};

	const canGoBack = navigation[currentPage] !== null;

	return (
		<div
			style={{
				padding: '20px',
				border: '1px solid #eee',
				borderRadius: '8px',
				maxWidth: '500px',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: '20px',
					gap: '10px',
				}}
			>
				{canGoBack && (
					<UnifiedButton
						kind='nav-back'
						onClick={() => {
							const nextPage = navigation[currentPage];
							if (nextPage) setCurrentPage(nextPage);
						}}
						label={`Go back to ${navigation[currentPage] || 'previous page'}`}
					/>
				)}
				<h2 style={{ margin: 0 }}>
					{pages[currentPage].title}
				</h2>
			</div>

			<p>{pages[currentPage].content}</p>

			<div
				style={{
					marginTop: '20px',
					display: 'flex',
					gap: '10px',
				}}
			>
				{currentPage === 'home' && (
					<button onClick={() => setCurrentPage('list')}>
						View Products
					</button>
				)}
				{currentPage === 'list' && (
					<button onClick={() => setCurrentPage('details')}>
						View Details
					</button>
				)}
			</div>
		</div>
	);
};

export const NavigationContext: Story = {
	render: () => <NavigationExample />,
	parameters: {
		docs: {
			description: {
				story:
					'Go back button used in a navigation context - icon only for clean UI.',
			},
		},
	},
};

export const WithCustomStyle: Story = {
	args: {
		kind: 'go-back',
		onClick: () => {},
		style: { fontSize: '18px', color: 'blue' },
	},
};

export const UsingFactory: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '8px',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
		>
			{ButtonFactory.create('go-back', {
				onClick: () => console.log('Go back with text'),
			})}
			{ButtonFactory.create('go-back', {
				onClick: () => console.log('Go back with label'),
				children: 'Back to Home',
			})}
			{ButtonFactory.create('nav-back', {
				onClick: () => console.log('Nav back (icon only)'),
			})}
			{ButtonFactory.create('go-back', {
				onClick: () =>
					console.log('Icon only with override'),
				overrideConfig: {
					iconPosition: 'only',
					ariaLabel: 'Go back',
				},
			})}
			{ButtonFactory.create('nav-back', {
				onClick: () => console.log('Disabled nav back'),
				disabled: true,
			})}
		</div>
	),
};

export const GoBackAccessibility: Story = {
	render: () => (
		<div style={{ padding: '20px' }}>
			<h3>Accessibility Test</h3>
			<p>
				Go back buttons should have proper ARIA labels for
				screen readers:
			</p>
			<div
				style={{
					display: 'flex',
					gap: '16px',
					marginTop: '16px',
					flexWrap: 'wrap',
				}}
			>
				<UnifiedButton
					kind='go-back'
					onClick={() => alert('Default back')}
				/>
				<UnifiedButton
					kind='nav-back'
					onClick={() => alert('Nav back (icon only)')}
				/>
				<UnifiedButton
					kind='nav-back'
					label='Return to previous page'
					onClick={() => alert('Custom label nav back')}
				/>
				<UnifiedButton
					kind='go-back'
					text='Back to Dashboard'
					onClick={() => alert('With text back')}
				/>
			</div>
			<p
				style={{
					marginTop: '16px',
					fontSize: '14px',
					color: '#666',
				}}
			>
				Inspect these buttons to verify they have proper
				aria-label attributes.
			</p>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Go back buttons with different accessibility labels and text configurations.',
			},
		},
	},
};
