/**
 * MonetizationFactory - DRY monetization factory system
 *
 * This factory provides a simplified API for creating monetization components using the configuration system,
 * similar to ButtonFactory but for monetization components.
 */

import React, { forwardRef } from 'react';
import Monetization, {
	MonetizationProps,
} from './Monetization';
import {
	MonetizationKind,
	PricingPlan,
	UsageData,
	PaymentData,
	createMonetizationConfig,
} from './configurations';

// Factory function for creating monetization components
export const MonetizationFactory: React.FC<
	MonetizationProps
> = ({ kind, config, ...props }) => {
	const finalConfig =
		config ?
			{ ...createMonetizationConfig(kind), ...config }
		:	createMonetizationConfig(kind);

	return (
		<Monetization
			kind={kind}
			config={finalConfig}
			{...props}
		/>
	);
};

MonetizationFactory.displayName = 'MonetizationFactory';

// Ultra-short alias for the factory
export const M = MonetizationFactory;

// =============================================================================
// PRESET CREATORS
// =============================================================================

export const MonetizationPresets = {
	// Pricing presets
	basicPlan: (
		plan: PricingPlan,
		onSelect?: (plan: PricingPlan) => void
	) => (
		<MonetizationFactory
			kind='pricing-card'
			plan={plan}
			onSelect={onSelect}
			config={{
				variant: 'default',
				size: 'medium',
				styling: { theme: 'light', color: 'primary' },
			}}
		/>
	),

	premiumPlan: (
		plan: PricingPlan,
		onSelect?: (plan: PricingPlan) => void
	) => (
		<MonetizationFactory
			kind='pricing-card'
			plan={plan}
			onSelect={onSelect}
			config={{
				variant: 'premium',
				size: 'large',
				styling: {
					theme: 'gradient',
					color: 'primary',
					highlight: true,
					animation: 'subtle',
				},
			}}
		/>
	),

	// Usage presets
	usageTracker: (
		usage: UsageData,
		onUpgrade?: () => void
	) => (
		<MonetizationFactory
			kind='usage-meter'
			usage={usage}
			onUpgrade={onUpgrade}
			config={{
				size: 'medium',
				styling: { theme: 'light', color: 'primary' },
			}}
		/>
	),

	// Payment presets
	checkoutForm: (
		paymentData: PaymentData,
		onSubmit?: (data: any) => void,
		onCancel?: () => void
	) => (
		<MonetizationFactory
			kind='payment-form'
			paymentData={paymentData}
			onSubmit={onSubmit}
			onCancel={onCancel}
			config={{
				size: 'large',
				styling: {
					theme: 'light',
					borderRadius: 'medium',
					shadow: 'medium',
				},
			}}
		/>
	),

	// Upgrade presets
	upgradeModal: (
		currentPlan: string,
		recommendedPlan: PricingPlan,
		benefits: string[],
		onUpgrade?: () => void
	) => (
		<MonetizationFactory
			kind='upgrade-prompt'
			currentPlan={currentPlan}
			recommendedPlan={recommendedPlan}
			benefits={benefits}
			onUpgrade={onUpgrade}
			config={{
				variant: 'featured',
				size: 'medium',
				styling: {
					theme: 'gradient',
					color: 'primary',
					highlight: true,
					animation: 'pulse',
				},
			}}
		/>
	),

	// Credit presets
	creditBalance: (
		credits: number,
		onPurchase?: () => void
	) => (
		<MonetizationFactory
			kind='credit-display'
			credits={credits}
			onPurchase={onPurchase}
			config={{
				size: 'small',
				styling: { theme: 'light', color: 'success' },
			}}
		/>
	),

	// Purchase presets
	buyButton: (
		product: {
			name: string;
			price: number;
			currency: string;
		},
		onPurchase?: () => void
	) => (
		<MonetizationFactory
			kind='purchase-button'
			product={product}
			onPurchase={onPurchase}
			config={{
				variant: 'premium',
				styling: {
					theme: 'gradient',
					color: 'primary',
					animation: 'pulse',
				},
			}}
		/>
	),

	// Discount presets
	flashSale: (
		discount: {
			type: 'percentage' | 'fixed';
			value: number;
			code?: string;
			expiresAt?: Date;
		},
		onApply?: (code?: string) => void
	) => (
		<MonetizationFactory
			kind='discount-banner'
			discount={discount}
			onApply={onApply}
			config={{
				variant: 'featured',
				styling: {
					theme: 'gradient',
					color: 'warning',
					animation: 'bounce',
					highlight: true,
				},
			}}
		/>
	),
};

// =============================================================================
// SIMPLIFIED CREATOR FUNCTIONS
// =============================================================================

export const createMonetization = (
	kind: MonetizationKind,
	props: Omit<MonetizationProps, 'kind'> = {}
): React.ReactElement => {
	return <MonetizationFactory kind={kind} {...props} />;
};

// =============================================================================
// CLASS-BASED FACTORY (Advanced Usage)
// =============================================================================

export class SimpleMonetizationFactory {
	static create(
		kind: MonetizationKind,
		props: Omit<MonetizationProps, 'kind'> = {}
	): React.ReactElement {
		return <MonetizationFactory kind={kind} {...props} />;
	}

	// Pricing methods
	static pricingCard(
		plan: PricingPlan,
		onSelect?: (plan: PricingPlan) => void
	): React.ReactElement {
		return this.create('pricing-card', { plan, onSelect });
	}

	static subscriptionPlans(
		plans: PricingPlan[],
		selectedPlan?: string,
		onPlanSelect?: (planId: string) => void
	): React.ReactElement {
		return this.create('subscription-plan', {
			plans,
			selectedPlan,
			onPlanSelect,
		});
	}

	static featureComparison(
		plans: PricingPlan[],
		features: string[]
	): React.ReactElement {
		return this.create('feature-comparison', {
			plans,
			features,
		});
	}

	// Payment methods
	static paymentForm(
		paymentData: PaymentData,
		onSubmit?: (data: any) => void,
		onCancel?: () => void
	): React.ReactElement {
		return this.create('payment-form', {
			paymentData,
			onSubmit,
			onCancel,
		});
	}

	static billingSummary(
		items: Array<{
			description: string;
			amount: number;
			quantity?: number;
		}>,
		total: number,
		currency: string = 'USD'
	): React.ReactElement {
		return this.create('billing-summary', {
			items,
			total,
			currency,
		});
	}

	// Engagement methods
	static upgradePrompt(
		currentPlan: string,
		recommendedPlan: PricingPlan,
		benefits: string[],
		onUpgrade?: () => void
	): React.ReactElement {
		return this.create('upgrade-prompt', {
			currentPlan,
			recommendedPlan,
			benefits,
			onUpgrade,
		});
	}

	static discountBanner(
		discount: {
			type: 'percentage' | 'fixed';
			value: number;
			code?: string;
			expiresAt?: Date;
		},
		onApply?: (code?: string) => void
	): React.ReactElement {
		return this.create('discount-banner', {
			discount,
			onApply,
		});
	}

	// Tracking methods
	static usageMeter(
		usage: UsageData,
		onUpgrade?: () => void
	): React.ReactElement {
		return this.create('usage-meter', { usage, onUpgrade });
	}

	static creditDisplay(
		credits: number,
		onPurchase?: () => void
	): React.ReactElement {
		return this.create('credit-display', {
			credits,
			onPurchase,
		});
	}

	static purchaseButton(
		product: {
			name: string;
			price: number;
			currency: string;
		},
		onPurchase?: () => void
	): React.ReactElement {
		return this.create('purchase-button', {
			product,
			onPurchase,
		});
	}
}

// =============================================================================
// QUICK MONETIZATION COMPONENTS
// =============================================================================

export const QuickMonetization = {
	// Quick pricing components
	PricingCard: (props: {
		plan: PricingPlan;
		onSelect?: (plan: PricingPlan) => void;
	}) =>
		MonetizationPresets.basicPlan(
			props.plan,
			props.onSelect
		),

	PremiumCard: (props: {
		plan: PricingPlan;
		onSelect?: (plan: PricingPlan) => void;
	}) =>
		MonetizationPresets.premiumPlan(
			props.plan,
			props.onSelect
		),

	// Quick usage components
	UsageBar: (props: {
		usage: UsageData;
		onUpgrade?: () => void;
	}) =>
		MonetizationPresets.usageTracker(
			props.usage,
			props.onUpgrade
		),

	// Quick payment components
	PaymentForm: (props: {
		paymentData: PaymentData;
		onSubmit?: (data: any) => void;
		onCancel?: () => void;
	}) =>
		MonetizationPresets.checkoutForm(
			props.paymentData,
			props.onSubmit,
			props.onCancel
		),

	// Quick engagement components
	UpgradeModal: (props: {
		currentPlan: string;
		recommendedPlan: PricingPlan;
		benefits: string[];
		onUpgrade?: () => void;
	}) =>
		MonetizationPresets.upgradeModal(
			props.currentPlan,
			props.recommendedPlan,
			props.benefits,
			props.onUpgrade
		),

	// Quick tracking components
	Credits: (props: {
		credits: number;
		onPurchase?: () => void;
	}) =>
		MonetizationPresets.creditBalance(
			props.credits,
			props.onPurchase
		),

	// Quick purchase components
	BuyButton: (props: {
		product: {
			name: string;
			price: number;
			currency: string;
		};
		onPurchase?: () => void;
	}) =>
		MonetizationPresets.buyButton(
			props.product,
			props.onPurchase
		),

	// Quick discount components
	FlashSale: (props: {
		discount: {
			type: 'percentage' | 'fixed';
			value: number;
			code?: string;
			expiresAt?: Date;
		};
		onApply?: (code?: string) => void;
	}) =>
		MonetizationPresets.flashSale(
			props.discount,
			props.onApply
		),
};

export default MonetizationFactory;
