import React, { forwardRef, useMemo } from 'react';
import clsx from 'clsx';
import { Wrapper } from '../Wrappers';
import styles from './Monetization.module.scss';
import {
	MONETIZATION_CONFIGURATIONS,
	MonetizationKind,
	MonetizationConfiguration,
	PricingPlan,
	UsageData,
	PaymentData,
	PaymentMethod,
	formatPrice,
	calculateDiscount,
} from './configurations';
import Button from '../Button/Button';

// =============================================================================
// BASE INTERFACES
// =============================================================================

export interface BaseMonetizationProps {
	'kind': MonetizationKind;
	'className'?: string;
	'id'?: string;
	'testId'?: string;
	'data-testid'?: string;
}

export interface MonetizationProps
	extends BaseMonetizationProps {
	// Configuration override
	config?: Partial<MonetizationConfiguration>;

	// Common props
	title?: string;
	subtitle?: string;
	description?: string;
	loading?: boolean;
	disabled?: boolean;

	// Pricing-related props
	plan?: PricingPlan;
	plans?: PricingPlan[];
	selectedPlan?: string;
	onPlanSelect?: (planId: string) => void;
	onSelect?: (plan: PricingPlan) => void;

	// Usage-related props
	usage?: UsageData;
	credits?: number;
	maxCredits?: number;
	warningThreshold?: number;
	criticalThreshold?: number;

	// Payment-related props
	paymentData?: PaymentData;
	acceptedMethods?: PaymentMethod[];
	onSubmit?: (data: any) => void;
	onPurchase?: () => void;
	onUpgrade?: () => void;
	onCancel?: () => void;
	onDismiss?: () => void;
	onApply?: (code?: string) => void;
	onEarn?: () => void;

	// Billing props
	items?: Array<{
		description: string;
		amount: number;
		quantity?: number;
	}>;
	total?: number;
	currency?: string;
	tax?: number;
	discount?: {
		type: 'percentage' | 'fixed';
		value: number;
		code?: string;
		expiresAt?: Date;
	};

	// Feature comparison props
	features?: string[];

	// Product props
	product?: {
		name: string;
		price: number;
		currency: string;
	};

	// Content props
	buttonText?: string;
	disclaimer?: string;
	benefits?: string[];
	currentPlan?: string;
	recommendedPlan?: PricingPlan;
}

// =============================================================================
//  MONETIZATION COMPONENT
// =============================================================================

const Monetization = forwardRef<
	HTMLDivElement,
	MonetizationProps
>(
	(
		{
			kind,
			config,
			className,
			id,
			testId,
			'data-testid': dataTestId,
			loading = false,
			disabled = false,
			...props
		},
		ref
	) => {
		// Merge configuration
		const finalConfig = useMemo(
			() => ({
				...MONETIZATION_CONFIGURATIONS[kind],
				...config,
				kind,
			}),
			[kind, config]
		);

		// Generate CSS classes
		const classes = useMemo(() => {
			const baseClasses = [
				styles.monetizationWrapper,
				styles[kind.replace('-', '')], // Convert kebab-case to camelCase
			];

			// Theme
			if (finalConfig.styling?.theme) {
				baseClasses.push(styles[finalConfig.styling.theme]);
			}

			// Size
			if (finalConfig.size) {
				baseClasses.push(styles[finalConfig.size]);
			}

			// Color
			if (finalConfig.styling?.color) {
				baseClasses.push(styles[finalConfig.styling.color]);
			}

			// Border radius
			if (finalConfig.styling?.borderRadius) {
				baseClasses.push(
					styles[
						`borderRadius${finalConfig.styling.borderRadius.charAt(0).toUpperCase() + finalConfig.styling.borderRadius.slice(1)}`
					]
				);
			}

			// Shadow
			if (finalConfig.styling?.shadow) {
				baseClasses.push(
					styles[
						`shadow${finalConfig.styling.shadow.charAt(0).toUpperCase() + finalConfig.styling.shadow.slice(1)}`
					]
				);
			}

			// Behavior states
			if (finalConfig.behavior?.interactive) {
				baseClasses.push(styles.interactive);
			}

			if (finalConfig.behavior?.clickable) {
				baseClasses.push(styles.clickable);
			}

			if (finalConfig.behavior?.hoverable) {
				baseClasses.push(styles.hoverable);
			}

			if (finalConfig.styling?.highlight) {
				baseClasses.push(styles.highlight);
			}

			// Animation
			if (
				finalConfig.styling?.animation &&
				finalConfig.styling.animation !== 'none'
			) {
				baseClasses.push(
					styles[finalConfig.styling.animation]
				);
			}

			// State classes
			if (loading) {
				baseClasses.push(styles.loading);
			}

			if (disabled) {
				baseClasses.push(styles.disabled);
			}

			return clsx(baseClasses, className);
		}, [finalConfig, kind, loading, disabled, className]);

		// Render content based on kind
		const renderContent = () => {
			switch (kind) {
				case 'pricing-card':
					return renderPricingCard();
				case 'subscription-plan':
					return renderSubscriptionPlan();
				case 'feature-comparison':
					return renderFeatureComparison();
				case 'payment-form':
					return renderPaymentForm();
				case 'billing-summary':
					return renderBillingSummary();
				case 'upgrade-prompt':
					return renderUpgradePrompt();
				case 'usage-meter':
					return renderUsageMeter();
				case 'credit-display':
					return renderCreditDisplay();
				case 'purchase-button':
					return renderPurchaseButton();
				case 'discount-banner':
					return renderDiscountBanner();
				default:
					return (
						<Wrapper>
							Unknown monetization type: {kind}
						</Wrapper>
					);
			}
		};

		// --- Renderers for each kind ---
		const renderPricingCard = () => {
			const { plan, onSelect } = props;
			if (!plan) return <Wrapper>No plan provided</Wrapper>;
			const discountInfo =
				plan.originalPrice ?
					calculateDiscount(plan.originalPrice, plan.price)
				:	null;
			return (
				<Wrapper className={styles.pricingCard}>
					{plan.badge && (
						<Wrapper className={styles.pricingBadge}>
							{plan.badge}
						</Wrapper>
					)}
					<Wrapper className={styles.pricingHeader}>
						<div className={styles.pricingTitle}>
							{plan.name}
						</div>
						{plan.description && (
							<div className={styles.pricingSubtitle}>
								{plan.description}
							</div>
						)}
					</Wrapper>
					<Wrapper className={styles.pricingPrice}>
						<span className={styles.pricingCurrency}>
							{plan.currency}
						</span>
						<span className={styles.pricingAmount}>
							{formatPrice(
								plan.price,
								plan.currency,
								plan.period
							)}
						</span>
						{plan.originalPrice && (
							<span className={styles.pricingOriginalPrice}>
								{formatPrice(
									plan.originalPrice,
									plan.currency,
									plan.period
								)}
							</span>
						)}
						{plan.period && (
							<span className={styles.pricingPeriod}>
								/ {plan.period}
							</span>
						)}
					</Wrapper>
					{discountInfo && (
						<Wrapper
							style={{
								color: 'var(--color-success-500)',
								fontWeight: 600,
								marginBottom: '1rem',
							}}
						>
							Save {discountInfo.percentage}%
						</Wrapper>
					)}
					<Wrapper className={styles.pricingFeatures}>
						<ul className={styles.pricingFeaturesList}>
							{plan.features.map((feature, i) => (
								<li
									key={i}
									className={styles.pricingFeature}
								>
									{feature}
								</li>
							))}
						</ul>
					</Wrapper>
					<Button
						kind='primary'
						className={styles.pricingButton}
						onClick={() => onSelect?.(plan)}
						disabled={disabled || loading}
					>
						{loading ?
							'Processing...'
						:	plan.buttonText || 'Select'}
					</Button>
				</Wrapper>
			);
		};

		const renderUsageMeter = () => {
			const {
				usage,
				warningThreshold = 80,
				criticalThreshold = 95,
				onUpgrade,
			} = props;
			if (!usage) return <Wrapper>No usage data</Wrapper>;
			const percentage =
				(usage.current / usage.limit) * 100;
			const isWarning = percentage >= warningThreshold;
			const isCritical = percentage >= criticalThreshold;
			return (
				<Wrapper className={styles.usageMeter}>
					<div className={styles.usageHeader}>
						<span className={styles.usageTitle}>Usage</span>
						<span className={styles.usageValue}>
							{usage.current} / {usage.limit} {usage.unit}
						</span>
					</div>
					<div className={styles.usageBar}>
						<div
							className={clsx(styles.usageProgress, {
								[styles.warning]: isWarning && !isCritical,
								[styles.critical]: isCritical,
							})}
							style={{
								width: `${Math.min(percentage, 100)}%`,
							}}
						/>
					</div>
					<div className={styles.usageInfo}>
						<span>{percentage.toFixed(0)}%</span>
						{isWarning && onUpgrade && (
							<Button
								kind='warning'
								size='small'
								onClick={onUpgrade}
							>
								Upgrade
							</Button>
						)}
					</div>
				</Wrapper>
			);
		};

		const renderPaymentForm = () => {
			const {
				paymentData,
				acceptedMethods = ['card'],
				onSubmit,
				onCancel,
			} = props;
			if (!paymentData)
				return <Wrapper>No payment data</Wrapper>;
			return (
				<Wrapper className={styles.paymentForm}>
					<div className={styles.paymentSectionTitle}>
						Amount
					</div>
					<div>
						{formatPrice(
							paymentData.amount,
							paymentData.currency,
							paymentData.period
						)}
					</div>
					<div className={styles.paymentSectionTitle}>
						Method
					</div>
					<div className={styles.paymentMethods}>
						{acceptedMethods.map((method) => (
							<div
								key={method}
								className={styles.paymentMethod}
							>
								{method}
							</div>
						))}
					</div>
					<div className={styles.paymentActions}>
						<Button
							kind='primary'
							onClick={() => onSubmit?.(paymentData)}
							disabled={disabled || loading}
						>
							Pay
						</Button>
						<Button kind='secondary' onClick={onCancel}>
							Cancel
						</Button>
					</div>
				</Wrapper>
			);
		};

		const renderBillingSummary = () => {
			const {
				items = [],
				total = 0,
				currency = 'USD',
				tax,
				discount,
			} = props;
			return (
				<Wrapper className={styles.billingSummary}>
					<table style={{ width: '100%' }}>
						<tbody>
							{items.map((item, i) => (
								<tr key={i}>
									<td>{item.description}</td>
									<td style={{ textAlign: 'right' }}>
										{formatPrice(item.amount, currency)}
									</td>
								</tr>
							))}
							{tax && (
								<tr>
									<td>Tax</td>
									<td style={{ textAlign: 'right' }}>
										{formatPrice(tax, currency)}
									</td>
								</tr>
							)}
							{discount && (
								<tr>
									<td>Discount</td>
									<td
										style={{
											textAlign: 'right',
											color: 'var(--color-success-500)',
										}}
									>
										-{' '}
										{discount.type === 'percentage' ?
											`${discount.value}%`
										:	formatPrice(discount.value, currency)}
									</td>
								</tr>
							)}
							<tr>
								<td>
									<b>Total</b>
								</td>
								<td style={{ textAlign: 'right' }}>
									<b>{formatPrice(total, currency)}</b>
								</td>
							</tr>
						</tbody>
					</table>
				</Wrapper>
			);
		};

		const renderFeatureComparison = () => {
			const { plans = [], features = [] } = props;
			return (
				<Wrapper className={styles.featureComparison}>
					<table className={styles.comparisonTable}>
						<thead className={styles.comparisonHeader}>
							<tr>
								<th className={styles.comparisonHeaderCell}>
									Feature
								</th>
								{plans.map((plan) => (
									<th
										key={plan.id}
										className={styles.comparisonHeaderCell}
									>
										{plan.name}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{features.map((feature, i) => (
								<tr
									key={i}
									className={styles.comparisonRow}
								>
									<td className={styles.comparisonFeature}>
										{feature}
									</td>
									{plans.map((plan) => (
										<td
											key={plan.id}
											className={styles.comparisonCell}
										>
											{plan.features.includes(feature) ?
												<span
													className={
														styles.comparisonCheckmark
													}
												>
													✔
												</span>
											:	<span
													className={styles.comparisonCross}
												>
													✖
												</span>
											}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</Wrapper>
			);
		};

		const renderSubscriptionPlan = () => {
			const {
				plans = [],
				selectedPlan,
				onPlanSelect,
			} = props;
			return (
				<Wrapper
					style={{
						display: 'grid',
						gridTemplateColumns:
							'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '1.5rem',
					}}
				>
					{plans.map((plan) => (
						<Monetization
							key={plan.id}
							kind='pricing-card'
							plan={plan}
							onSelect={() => onPlanSelect?.(plan.id)}
							className={
								selectedPlan === plan.id ?
									styles.highlight
								:	undefined
							}
						/>
					))}
				</Wrapper>
			);
		};

		const renderUpgradePrompt = () => {
			const {
				currentPlan,
				recommendedPlan,
				benefits = [],
				onUpgrade,
				onDismiss,
			} = props;
			return (
				<Wrapper style={{ textAlign: 'center' }}>
					{recommendedPlan && (
						<>
							<div
								style={{
									fontWeight: 700,
									fontSize: '1.25rem',
									marginBottom: 8,
								}}
							>
								Upgrade from {currentPlan} to{' '}
								{recommendedPlan.name}
							</div>
							<ul
								style={{
									margin: '1rem 0',
									padding: 0,
									listStyle: 'none',
								}}
							>
								{benefits.map((b, i) => (
									<li key={i}>• {b}</li>
								))}
							</ul>
							<Button kind='primary' onClick={onUpgrade}>
								Upgrade Now
							</Button>
							{onDismiss && (
								<Button
									kind='secondary'
									onClick={onDismiss}
									style={{ marginLeft: 8 }}
								>
									Dismiss
								</Button>
							)}
						</>
					)}
				</Wrapper>
			);
		};

		const renderCreditDisplay = () => {
			const {
				credits = 0,
				maxCredits,
				onPurchase,
				onEarn,
			} = props;
			return (
				<Wrapper style={{ textAlign: 'center' }}>
					<div
						style={{ fontWeight: 700, fontSize: '2rem' }}
					>
						{credits}
						{maxCredits ? ` / ${maxCredits}` : ''} credits
					</div>
					{onPurchase && (
						<Button kind='primary' onClick={onPurchase}>
							Buy Credits
						</Button>
					)}
					{onEarn && (
						<Button
							kind='secondary'
							onClick={onEarn}
							style={{ marginLeft: 8 }}
						>
							Earn Credits
						</Button>
					)}
				</Wrapper>
			);
		};

		const renderPurchaseButton = () => {
			const { product, onPurchase } = props;
			if (!product) return <Wrapper>No product</Wrapper>;
			return (
				<Button
					kind='primary'
					className={styles.pricingButton}
					onClick={onPurchase}
					disabled={disabled || loading}
					style={{ width: '100%' }}
				>
					{loading ?
						'Processing...'
					:	`Buy ${product.name} - ${formatPrice(product.price, product.currency)}`
					}
				</Button>
			);
		};

		const renderDiscountBanner = () => {
			const { discount, onApply, onDismiss } = props;
			if (!discount) return <Wrapper>No discount</Wrapper>;
			const discountText =
				discount.type === 'percentage' ?
					`${discount.value}% OFF`
				:	`${formatPrice(discount.value)} OFF`;
			return (
				<Wrapper
					style={{
						textAlign: 'center',
						position: 'relative',
					}}
				>
					{onDismiss && (
						<Button
							kind='secondary'
							onClick={onDismiss}
							style={{
								position: 'absolute',
								right: 0,
								top: 0,
							}}
						>
							×
						</Button>
					)}
					<div
						style={{
							fontWeight: 700,
							fontSize: '1.5rem',
							marginBottom: 8,
						}}
					>
						{discountText}
					</div>
					{discount.code && (
						<div style={{ marginBottom: 8 }}>
							Use code: <b>{discount.code}</b>
						</div>
					)}
					{discount.expiresAt && (
						<div
							style={{
								color: 'var(--color-error-500)',
								marginBottom: 8,
							}}
						>
							Expires:{' '}
							{discount.expiresAt.toLocaleDateString()}
						</div>
					)}
					{onApply && (
						<Button
							kind='primary'
							onClick={() => onApply(discount.code)}
						>
							Apply
						</Button>
					)}
				</Wrapper>
			);
		};

		return (
			<Wrapper
				ref={ref}
				id={id}
				data-testid={dataTestId || testId}
				className={classes}
			>
				{renderContent()}
			</Wrapper>
		);
	}
);

Monetization.displayName = 'Monetization';

// ===================== PRESET HELPERS (formerly factory) =====================

// Example: You can add static helpers if you want to keep preset convenience
Monetization.Presets = {
	basicPlan: (
		plan: PricingPlan,
		onSelect?: (plan: PricingPlan) => void
	) => (
		<Monetization
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
		<Monetization
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
	usageTracker: (
		usage: UsageData,
		onUpgrade?: () => void
	) => (
		<Monetization
			kind='usage-meter'
			usage={usage}
			onUpgrade={onUpgrade}
			config={{
				size: 'medium',
				styling: { theme: 'light', color: 'primary' },
			}}
		/>
	),
	checkoutForm: (
		paymentData: PaymentData,
		onSubmit?: (data: any) => void,
		onCancel?: () => void
	) => (
		<Monetization
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
	upgradeModal: (
		currentPlan: string,
		recommendedPlan: PricingPlan,
		benefits: string[],
		onUpgrade?: () => void
	) => (
		<Monetization
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
	creditBalance: (
		credits: number,
		onPurchase?: () => void
	) => (
		<Monetization
			kind='credit-display'
			credits={credits}
			onPurchase={onPurchase}
			config={{
				size: 'small',
				styling: { theme: 'light', color: 'success' },
			}}
		/>
	),
	buyButton: (
		product: {
			name: string;
			price: number;
			currency: string;
		},
		onPurchase?: () => void
	) => (
		<Monetization
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
	flashSale: (
		discount: {
			type: 'percentage' | 'fixed';
			value: number;
			code?: string;
			expiresAt?: Date;
		},
		onApply?: (code?: string) => void
	) => (
		<Monetization
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

export default Monetization;
