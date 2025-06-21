import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	MonetizationFactory,
	UnifiedMonetization,
	MonetizationPresets,
	QuickMonetization,
	SimpleMonetizationFactory,
	PricingPlan,
	UsageData,
	PaymentData,
} from '../../components/Monetization';

// =============================================================================
// STORYBOOK META
// =============================================================================

const meta: Meta<typeof UnifiedMonetization> = {
	title: 'Components/Monetization',
	component: UnifiedMonetization,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Monetization Component System

A comprehensive monetization component system that supports pricing cards, payment forms, usage meters, billing summaries, and more.

## Features

- **Multiple Types**: Pricing cards, subscription plans, payment forms, usage meters, credit displays, and more
- **DRY Architecture**: Unified system with factory patterns for easy component creation
- **Customizable**: Full theming, sizing, and behavior configuration
- **TypeScript**: Full type safety with comprehensive interfaces
- **Responsive**: Mobile-friendly designs with responsive layouts
- **Accessible**: Built with accessibility best practices

## Usage Examples

### Basic Pricing Card
\`\`\`tsx
<UnifiedMonetization 
  kind="pricing-card" 
  plan={pricingPlan}
  onSelect={handlePlanSelect}
/>
\`\`\`

### Usage Meter
\`\`\`tsx
<UnifiedMonetization 
  kind="usage-meter"
  usage={{ current: 750, limit: 1000, unit: 'API Calls' }}
  onUpgrade={handleUpgrade}
/>
\`\`\`

### Payment Form
\`\`\`tsx
<UnifiedMonetization 
  kind="payment-form"
  paymentData={{ amount: 29.99, currency: 'USD' }}
  onSubmit={handlePayment}
/>
\`\`\`

## Factory Usage

\`\`\`tsx
// Using MonetizationFactory
<MonetizationFactory kind="pricing-card" plan={plan} />

// Using presets
{MonetizationPresets.premiumPlan(plan, onSelect)}

// Using quick components
<QuickMonetization.PricingCard plan={plan} onSelect={onSelect} />
\`\`\`
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'pricing-card',
				'subscription-plan',
				'feature-comparison',
				'payment-form',
				'billing-summary',
				'upgrade-prompt',
				'usage-meter',
				'credit-display',
				'purchase-button',
				'discount-banner',
			],
		},
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// SAMPLE DATA
// =============================================================================

const samplePlans: PricingPlan[] = [
	{
		id: 'starter',
		name: 'Starter',
		price: 9.99,
		currency: 'USD',
		period: 'monthly',
		features: [
			'Up to 1,000 API calls',
			'Basic support',
			'1 team member',
			'Standard templates',
		],
		description: 'Perfect for getting started',
		buttonText: 'Start Free Trial',
	},
	{
		id: 'professional',
		name: 'Professional',
		price: 29.99,
		originalPrice: 39.99,
		currency: 'USD',
		period: 'monthly',
		features: [
			'Up to 10,000 API calls',
			'Priority support',
			'5 team members',
			'Advanced templates',
			'Analytics dashboard',
			'Custom integrations',
		],
		highlights: ['Most Popular'],
		popular: true,
		badge: 'Popular',
		description: 'Great for growing businesses',
		buttonText: 'Upgrade Now',
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		price: 99.99,
		currency: 'USD',
		period: 'monthly',
		features: [
			'Unlimited API calls',
			'24/7 support',
			'Unlimited team members',
			'Custom templates',
			'Advanced analytics',
			'Custom integrations',
			'Dedicated account manager',
			'SLA guarantee',
		],
		description: 'For large organizations',
		buttonText: 'Contact Sales',
	},
];

const sampleUsage: UsageData = {
	current: 750,
	limit: 1000,
	unit: 'API Calls',
	period: 'this month',
	resetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
};

const samplePaymentData: PaymentData = {
	amount: 29.99,
	currency: 'USD',
	method: 'card',
	description: 'Professional Plan Subscription',
	recurring: true,
	period: 'monthly',
};

const sampleBillingItems = [
	{ description: 'Professional Plan', amount: 29.99 },
	{ description: 'Extra API Calls (500)', amount: 5.0 },
	{ description: 'Priority Support', amount: 9.99 },
];

// =============================================================================
// BASIC STORIES
// =============================================================================

export const PricingCard: Story = {
	args: {
		kind: 'pricing-card',
		plan: samplePlans[1], // Professional plan
		onSelect: (plan) => console.log('Selected plan:', plan),
	},
};

export const UsageMeter: Story = {
	args: {
		kind: 'usage-meter',
		usage: sampleUsage,
		warningThreshold: 80,
		criticalThreshold: 95,
		onUpgrade: () => console.log('Upgrade clicked'),
	},
};

export const PaymentForm: Story = {
	args: {
		kind: 'payment-form',
		paymentData: samplePaymentData,
		acceptedMethods: ['card', 'paypal', 'apple-pay'],
		onSubmit: (data) =>
			console.log('Payment submitted:', data),
		onCancel: () => console.log('Payment cancelled'),
	},
};

export const BillingSummary: Story = {
	args: {
		kind: 'billing-summary',
		items: sampleBillingItems,
		total: 44.98,
		currency: 'USD',
		tax: 4.5,
		discount: {
			type: 'percentage',
			value: 10,
			code: 'SAVE10',
		},
	},
};

export const FeatureComparison: Story = {
	args: {
		kind: 'feature-comparison',
		plans: samplePlans,
		features: [
			'API Calls',
			'Team Members',
			'Support Level',
			'Analytics',
			'Custom Integrations',
			'SLA Guarantee',
		],
		selectedPlan: 'professional',
	},
};

export const UpgradePrompt: Story = {
	args: {
		kind: 'upgrade-prompt',
		currentPlan: 'Starter',
		recommendedPlan: samplePlans[1],
		benefits: [
			'10x more API calls',
			'Priority support',
			'Advanced analytics',
			'Team collaboration tools',
		],
		onUpgrade: () => console.log('Upgrade initiated'),
		onDismiss: () => console.log('Upgrade dismissed'),
	},
};

export const CreditDisplay: Story = {
	args: {
		kind: 'credit-display',
		credits: 2500,
		maxCredits: 5000,
		onPurchase: () => console.log('Purchase credits'),
		onEarn: () => console.log('Earn more credits'),
	},
};

export const PurchaseButton: Story = {
	args: {
		kind: 'purchase-button',
		product: {
			name: 'API Credits Bundle',
			price: 19.99,
			currency: 'USD',
		},
		onPurchase: () => console.log('Purchase initiated'),
	},
};

export const DiscountBanner: Story = {
	args: {
		kind: 'discount-banner',
		discount: {
			type: 'percentage',
			value: 25,
			code: 'FLASH25',
			expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
		},
		onApply: (code) =>
			console.log('Applied discount code:', code),
		onDismiss: () => console.log('Banner dismissed'),
	},
};

export const SubscriptionPlans: Story = {
	args: {
		kind: 'subscription-plan',
		plans: samplePlans,
		selectedPlan: 'professional',
		onPlanSelect: (planId) =>
			console.log('Selected plan:', planId),
	},
	parameters: {
		layout: 'fullscreen',
		docs: {
			canvas: {
				sourceState: 'shown',
			},
		},
	},
};

// =============================================================================
// VARIANT STORIES
// =============================================================================

export const PricingCardVariants: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '2rem',
				padding: '2rem',
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<h3>Default</h3>
				<UnifiedMonetization
					kind='pricing-card'
					plan={samplePlans[0]}
					config={{ variant: 'default' }}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>
				<h3>Premium</h3>
				<UnifiedMonetization
					kind='pricing-card'
					plan={samplePlans[1]}
					config={{
						variant: 'premium',
						styling: { theme: 'gradient', highlight: true },
					}}
				/>
			</div>
			<div style={{ textAlign: 'center' }}>
				<h3>Featured</h3>
				<UnifiedMonetization
					kind='pricing-card'
					plan={samplePlans[2]}
					config={{
						variant: 'featured',
						styling: { theme: 'dark', animation: 'subtle' },
					}}
				/>
			</div>
		</div>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

export const UsageMeterStates: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				padding: '2rem',
				maxWidth: '600px',
			}}
		>
			<div>
				<h3>Low Usage (25%)</h3>
				<UnifiedMonetization
					kind='usage-meter'
					usage={{
						current: 250,
						limit: 1000,
						unit: 'API Calls',
					}}
				/>
			</div>
			<div>
				<h3>Warning Level (85%)</h3>
				<UnifiedMonetization
					kind='usage-meter'
					usage={{
						current: 850,
						limit: 1000,
						unit: 'API Calls',
					}}
					warningThreshold={80}
				/>
			</div>
			<div>
				<h3>Critical Level (98%)</h3>
				<UnifiedMonetization
					kind='usage-meter'
					usage={{
						current: 980,
						limit: 1000,
						unit: 'API Calls',
					}}
					warningThreshold={80}
					criticalThreshold={95}
					onUpgrade={() => console.log('Upgrade needed!')}
				/>
			</div>
		</div>
	),
};

// =============================================================================
// FACTORY PATTERN STORIES
// =============================================================================

export const FactoryExamples: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				padding: '2rem',
			}}
		>
			<div>
				<h3>MonetizationFactory</h3>
				<MonetizationFactory
					kind='pricing-card'
					plan={samplePlans[1]}
					config={{
						styling: {
							theme: 'gradient',
							animation: 'pulse',
						},
					}}
				/>
			</div>

			<div>
				<h3>MonetizationPresets.premiumPlan</h3>
				{MonetizationPresets.premiumPlan(
					samplePlans[1],
					(plan) => console.log('Selected:', plan)
				)}
			</div>

			<div>
				<h3>QuickMonetization.UsageBar</h3>
				<QuickMonetization.UsageBar
					usage={sampleUsage}
					onUpgrade={() => console.log('Quick upgrade!')}
				/>
			</div>

			<div>
				<h3>SimpleMonetizationFactory.creditDisplay</h3>
				{SimpleMonetizationFactory.creditDisplay(2500, () =>
					console.log('Buy credits')
				)}
			</div>
		</div>
	),
	parameters: {
		layout: 'fullscreen',
	},
};

// =============================================================================
// RESPONSIVE STORIES
// =============================================================================

export const ResponsiveLayout: Story = {
	render: () => (
		<div style={{ padding: '1rem' }}>
			<h2>Responsive Monetization Components</h2>
			<p>
				Resize the viewport to see how components adapt to
				different screen sizes.
			</p>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(280px, 1fr))',
					gap: '1.5rem',
					marginTop: '2rem',
				}}
			>
				{samplePlans.map((plan) => (
					<UnifiedMonetization
						key={plan.id}
						kind='pricing-card'
						plan={plan}
						config={{
							size: 'medium',
							styling: {
								theme: plan.popular ? 'gradient' : 'light',
								highlight: plan.popular,
							},
						}}
					/>
				))}
			</div>

			<div style={{ marginTop: '3rem', maxWidth: '600px' }}>
				<h3>Usage Tracking</h3>
				<UnifiedMonetization
					kind='usage-meter'
					usage={sampleUsage}
					onUpgrade={() =>
						console.log('Upgrade from responsive view')
					}
				/>
			</div>
		</div>
	),
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'responsive',
		},
	},
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveDemo: Story = {
	render: () => {
		const [selectedPlan, setSelectedPlan] =
			React.useState<string>('professional');
		const [credits, setCredits] = React.useState(2500);
		const [usage, setUsage] = React.useState(750);

		return (
			<div style={{ padding: '2rem' }}>
				<h2>Interactive Monetization Demo</h2>

				<div
					style={{
						display: 'grid',
						gap: '2rem',
						marginTop: '2rem',
					}}
				>
					<div>
						<h3>Plan Selection</h3>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns:
									'repeat(auto-fit, minmax(280px, 1fr))',
								gap: '1rem',
							}}
						>
							{samplePlans.map((plan) => (
								<UnifiedMonetization
									key={plan.id}
									kind='pricing-card'
									plan={plan}
									onSelect={(selectedPlan) =>
										setSelectedPlan(selectedPlan.id)
									}
									config={{
										styling: {
											highlight: selectedPlan === plan.id,
											theme:
												selectedPlan === plan.id ?
													'gradient'
												:	'light',
										},
									}}
								/>
							))}
						</div>
						<p style={{ marginTop: '1rem', color: '#666' }}>
							Selected Plan: <strong>{selectedPlan}</strong>
						</p>
					</div>

					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
							gap: '2rem',
						}}
					>
						<div>
							<h3>Credits Balance</h3>
							<UnifiedMonetization
								kind='credit-display'
								credits={credits}
								onPurchase={() =>
									setCredits(credits + 1000)
								}
								onEarn={() => setCredits(credits + 100)}
							/>
						</div>

						<div>
							<h3>API Usage</h3>
							<UnifiedMonetization
								kind='usage-meter'
								usage={{
									current: usage,
									limit: 1000,
									unit: 'API Calls',
								}}
								onUpgrade={() =>
									setUsage(Math.floor(usage * 0.5))
								} // "Upgrade" reduces usage by giving more quota
							/>
							<button
								onClick={() =>
									setUsage(Math.min(usage + 50, 1000))
								}
								style={{
									marginTop: '1rem',
									padding: '0.5rem 1rem',
									border: 'none',
									borderRadius: '4px',
									background: '#3b82f6',
									color: 'white',
									cursor: 'pointer',
								}}
							>
								Use 50 API Calls
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		layout: 'fullscreen',
	},
};

// =============================================================================
// STATE STORIES
// =============================================================================

export const LoadingStates: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				padding: '2rem',
			}}
		>
			<div>
				<h3>Loading Pricing Card</h3>
				<UnifiedMonetization
					kind='pricing-card'
					plan={samplePlans[1]}
					loading={true}
				/>
			</div>
			<div>
				<h3>Loading Payment Form</h3>
				<UnifiedMonetization
					kind='payment-form'
					paymentData={samplePaymentData}
					loading={true}
				/>
			</div>
			<div>
				<h3>Loading Purchase Button</h3>
				<UnifiedMonetization
					kind='purchase-button'
					product={{
						name: 'Premium Plan',
						price: 29.99,
						currency: 'USD',
					}}
					loading={true}
				/>
			</div>
		</div>
	),
};

export const DisabledStates: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '2rem',
				padding: '2rem',
			}}
		>
			<div>
				<h3>Disabled Pricing Card</h3>
				<UnifiedMonetization
					kind='pricing-card'
					plan={samplePlans[1]}
					disabled={true}
				/>
			</div>
			<div>
				<h3>Disabled Payment Form</h3>
				<UnifiedMonetization
					kind='payment-form'
					paymentData={samplePaymentData}
					disabled={true}
				/>
			</div>
		</div>
	),
};
