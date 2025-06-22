/**
 * Monetization Component Configurations
 * Defines all possible monetization component types and their properties
 */

// Import CartItem from Redux store to avoid duplication
import type { CartItem } from '../../store/slices/cartSlice';

// Re-export CartItem for convenience
export type { CartItem };

// =============================================================================
// TYPES & INTERFACES
// =============================================================================

export type MonetizationKind =
	| 'pricing-card'
	| 'subscription-plan'
	| 'feature-comparison'
	| 'payment-form'
	| 'billing-summary'
	| 'upgrade-prompt'
	| 'usage-meter'
	| 'credit-display'
	| 'purchase-button'
	| 'discount-banner'
	| 'shopping-cart'
	| 'cart-summary'
	| 'cart-item'
	| 'add-to-cart-button';

export type MonetizationVariant =
	| 'default'
	| 'premium'
	| 'popular'
	| 'featured'
	| 'compact'
	| 'detailed';

export type MonetizationSize = 'small' | 'medium' | 'large';

export type PricingPeriod =
	| 'monthly'
	| 'yearly'
	| 'lifetime'
	| 'usage';

export type PaymentMethod =
	| 'card'
	| 'paypal'
	| 'bank'
	| 'crypto'
	| 'apple-pay'
	| 'google-pay';

// =============================================================================
// CONFIGURATION INTERFACES
// =============================================================================

export interface MonetizationConfiguration {
	kind: MonetizationKind;
	variant?: MonetizationVariant;
	size?: MonetizationSize;
	styling?: MonetizationStyling;
	behavior?: MonetizationBehavior;
	content?: MonetizationContent;
}

export interface MonetizationStyling {
	theme?: 'light' | 'dark' | 'gradient';
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'error';
	borderRadius?:
		| 'none'
		| 'small'
		| 'medium'
		| 'large'
		| 'round';
	shadow?: 'none' | 'small' | 'medium' | 'large';
	animation?: 'none' | 'subtle' | 'bounce' | 'pulse';
	highlight?: boolean;
}

export interface MonetizationBehavior {
	interactive?: boolean;
	clickable?: boolean;
	hoverable?: boolean;
	loading?: boolean;
	disabled?: boolean;
	autoSelect?: boolean;
	showComparison?: boolean;
}

export interface MonetizationContent {
	title?: string;
	subtitle?: string;
	description?: string;
	price?: string | number;
	originalPrice?: string | number;
	currency?: string;
	period?: PricingPeriod;
	features?: string[];
	highlights?: string[];
	buttonText?: string;
	disclaimer?: string;
	badge?: string;
	icon?: string;
}

// =============================================================================
// PRICING & PLAN INTERFACES
// =============================================================================

export interface PricingPlan {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	currency: string;
	period: PricingPeriod;
	features: string[];
	highlights?: string[];
	popular?: boolean;
	recommended?: boolean;
	badge?: string;
	description?: string;
	buttonText?: string;
	comingSoon?: boolean;
}

export interface UsageData {
	current: number;
	limit: number;
	unit: string;
	period?: string;
	resetDate?: Date;
}

export interface PaymentData {
	amount: number;
	currency: string;
	method?: PaymentMethod;
	description?: string;
	recurring?: boolean;
	period?: PricingPeriod;
}

// =============================================================================
// COMPONENT-SPECIFIC INTERFACES
// =============================================================================

export interface PricingCardConfig
	extends MonetizationConfiguration {
	kind: 'pricing-card';
	plan: PricingPlan;
	selected?: boolean;
	onSelect?: (plan: PricingPlan) => void;
}

export interface SubscriptionPlanConfig
	extends MonetizationConfiguration {
	kind: 'subscription-plan';
	plans: PricingPlan[];
	selectedPlan?: string;
	onPlanSelect?: (planId: string) => void;
	showComparison?: boolean;
}

export interface FeatureComparisonConfig
	extends MonetizationConfiguration {
	kind: 'feature-comparison';
	plans: PricingPlan[];
	features: string[];
	selectedPlan?: string;
}

export interface PaymentFormConfig
	extends MonetizationConfiguration {
	kind: 'payment-form';
	paymentData: PaymentData;
	acceptedMethods?: PaymentMethod[];
	onSubmit?: (data: any) => void;
	onCancel?: () => void;
}

export interface BillingSummaryConfig
	extends MonetizationConfiguration {
	kind: 'billing-summary';
	items: Array<{
		description: string;
		amount: number;
		quantity?: number;
	}>;
	total: number;
	currency: string;
	tax?: number;
	discount?: number;
}

export interface UpgradePromptConfig
	extends MonetizationConfiguration {
	kind: 'upgrade-prompt';
	currentPlan: string;
	recommendedPlan: PricingPlan;
	benefits: string[];
	onUpgrade?: () => void;
	onDismiss?: () => void;
}

export interface UsageMeterConfig
	extends MonetizationConfiguration {
	kind: 'usage-meter';
	usage: UsageData;
	warningThreshold?: number;
	criticalThreshold?: number;
	onUpgrade?: () => void;
}

export interface CreditDisplayConfig
	extends MonetizationConfiguration {
	kind: 'credit-display';
	credits: number;
	maxCredits?: number;
	unit?: string;
	onPurchase?: () => void;
	onEarn?: () => void;
}

export interface PurchaseButtonConfig
	extends MonetizationConfiguration {
	kind: 'purchase-button';
	product: {
		name: string;
		price: number;
		currency: string;
	};
	onPurchase?: () => void;
	loading?: boolean;
	disabled?: boolean;
}

export interface DiscountBannerConfig
	extends MonetizationConfiguration {
	kind: 'discount-banner';
	discount: {
		type: 'percentage' | 'fixed';
		value: number;
		code?: string;
		expiresAt?: Date;
	};
	onApply?: (code?: string) => void;
	onDismiss?: () => void;
}

// =============================================================================
// CART INTERFACES
// =============================================================================

// CartItem is imported from Redux store above to avoid duplication

export interface ShoppingCartConfig
	extends MonetizationConfiguration {
	kind: 'shopping-cart';
	items: CartItem[];
	total: number;
	currency: string;
	onUpdateQuantity?: (
		itemId: string,
		quantity: number
	) => void;
	onRemoveItem?: (itemId: string) => void;
	onCheckout?: () => void;
	onClearCart?: () => void;
	discountCode?: string;
	discountAmount?: number;
	tax?: number;
	shipping?: number;
}

export interface CartSummaryConfig
	extends MonetizationConfiguration {
	kind: 'cart-summary';
	subtotal: number;
	tax?: number;
	shipping?: number;
	discount?: number;
	total: number;
	currency: string;
	itemCount: number;
	onCheckout?: () => void;
	promoCode?: string;
	onApplyPromo?: (code: string) => void;
}

export interface CartItemConfig
	extends MonetizationConfiguration {
	kind: 'cart-item';
	item: CartItem;
	onUpdateQuantity?: (quantity: number) => void;
	onRemove?: () => void;
	editable?: boolean;
	showImage?: boolean;
	showDescription?: boolean;
}

export interface AddToCartButtonConfig
	extends MonetizationConfiguration {
	kind: 'add-to-cart-button';
	product: {
		id: string;
		name: string;
		price: number;
		currency: string;
		image?: string;
		variant?: string;
	};
	quantity?: number;
	onAddToCart?: (product: any, quantity: number) => void;
	inCart?: boolean;
	disabled?: boolean;
	loading?: boolean;
}

// =============================================================================
// PREDEFINED CONFIGURATIONS
// =============================================================================

export const MONETIZATION_CONFIGURATIONS: Record<
	MonetizationKind,
	MonetizationConfiguration
> = {
	'pricing-card': {
		kind: 'pricing-card',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
		},
		behavior: {
			interactive: true,
			clickable: true,
			hoverable: true,
		},
	},
	'subscription-plan': {
		kind: 'subscription-plan',
		variant: 'default',
		size: 'large',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'medium',
		},
		behavior: {
			interactive: true,
			showComparison: true,
		},
	},
	'feature-comparison': {
		kind: 'feature-comparison',
		variant: 'detailed',
		size: 'large',
		styling: {
			theme: 'light',
			borderRadius: 'small',
			shadow: 'small',
		},
		behavior: {
			interactive: true,
		},
	},
	'payment-form': {
		kind: 'payment-form',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'medium',
		},
		behavior: {
			interactive: true,
		},
	},
	'billing-summary': {
		kind: 'billing-summary',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'small',
		},
	},
	'upgrade-prompt': {
		kind: 'upgrade-prompt',
		variant: 'featured',
		size: 'medium',
		styling: {
			theme: 'gradient',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'large',
			animation: 'subtle',
			highlight: true,
		},
		behavior: {
			interactive: true,
		},
	},
	'usage-meter': {
		kind: 'usage-meter',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'small',
		},
		behavior: {
			interactive: true,
		},
	},
	'credit-display': {
		kind: 'credit-display',
		variant: 'default',
		size: 'small',
		styling: {
			theme: 'light',
			color: 'success',
			borderRadius: 'medium',
			shadow: 'small',
		},
		behavior: {
			interactive: true,
		},
	},
	'purchase-button': {
		kind: 'purchase-button',
		variant: 'premium',
		size: 'medium',
		styling: {
			theme: 'gradient',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
			animation: 'pulse',
		},
		behavior: {
			interactive: true,
			clickable: true,
			hoverable: true,
		},
	},
	'discount-banner': {
		kind: 'discount-banner',
		variant: 'featured',
		size: 'medium',
		styling: {
			theme: 'gradient',
			color: 'warning',
			borderRadius: 'medium',
			shadow: 'medium',
			animation: 'bounce',
			highlight: true,
		},
		behavior: {
			interactive: true,
		},
	},
	'shopping-cart': {
		kind: 'shopping-cart',
		variant: 'default',
		size: 'large',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'medium',
		},
		behavior: {
			interactive: true,
		},
	},
	'cart-summary': {
		kind: 'cart-summary',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			borderRadius: 'medium',
			shadow: 'small',
		},
		behavior: {
			interactive: true,
		},
	},
	'cart-item': {
		kind: 'cart-item',
		variant: 'default',
		size: 'medium',
		styling: {
			theme: 'light',
			borderRadius: 'small',
			shadow: 'none',
		},
		behavior: {
			interactive: true,
			hoverable: true,
		},
	},
	'add-to-cart-button': {
		kind: 'add-to-cart-button',
		variant: 'premium',
		size: 'medium',
		styling: {
			theme: 'gradient',
			color: 'primary',
			borderRadius: 'medium',
			shadow: 'medium',
			animation: 'subtle',
		},
		behavior: {
			interactive: true,
			clickable: true,
			hoverable: true,
		},
	},
};

// =============================================================================
// CONFIGURATION GROUPS
// =============================================================================

export const MONETIZATION_GROUPS = {
	pricing: [
		'pricing-card',
		'subscription-plan',
		'feature-comparison',
	] as MonetizationKind[],
	payment: [
		'payment-form',
		'billing-summary',
		'purchase-button',
	] as MonetizationKind[],
	engagement: [
		'upgrade-prompt',
		'discount-banner',
	] as MonetizationKind[],
	tracking: [
		'usage-meter',
		'credit-display',
	] as MonetizationKind[],
	commerce: [
		'shopping-cart',
		'cart-summary',
		'cart-item',
		'add-to-cart-button',
	] as MonetizationKind[],
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export const createMonetizationConfig = (
	kind: MonetizationKind,
	overrides?: Partial<MonetizationConfiguration>
): MonetizationConfiguration => ({
	...MONETIZATION_CONFIGURATIONS[kind],
	...overrides,
});

export const validateMonetizationConfig = (
	config: MonetizationConfiguration
): boolean => {
	return !!(
		config.kind && MONETIZATION_CONFIGURATIONS[config.kind]
	);
};

export const formatPrice = (
	price: number,
	currency: string = 'USD',
	period?: PricingPeriod
): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	});

	const formattedPrice = formatter.format(price);

	if (period && period !== 'lifetime') {
		return `${formattedPrice}/${
			period === 'monthly' ? 'mo'
			: period === 'yearly' ? 'yr'
			: period
		}`;
	}

	return formattedPrice;
};

export const calculateDiscount = (
	originalPrice: number,
	discountedPrice: number
): { amount: number; percentage: number } => {
	const amount = originalPrice - discountedPrice;
	const percentage = Math.round(
		(amount / originalPrice) * 100
	);

	return { amount, percentage };
};
