import React from 'react';
import {
	Advertisements,
	type AdvertisementProps,
} from './Advertisements';
import {
	type ExtendedAdKind,
	type AdContent,
} from './configurations';

// Use the actual ad kinds from the system
export type AdKind = ExtendedAdKind;

export type AdCreationConfig = {
	kind: AdKind;
	defaultProps: Partial<AdvertisementProps>;
	validator?: (content: AdContent) => boolean;
};

// Simplified, DRY configuration - only uses valid AdvertisementProps
const AD_CREATION_CONFIGS: Partial<
	Record<AdKind, AdCreationConfig>
> = {
	'banner': {
		kind: 'banner',
		defaultProps: {
			position: 'relative',
		},
		validator: (content: AdContent) =>
			!!content.title || !!content.imageUrl,
	},
	'banner-ad': {
		kind: 'banner-ad',
		defaultProps: {
			position: 'relative',
		},
		validator: (content: AdContent) =>
			!!content.title || !!content.imageUrl,
	},
	'interstitial': {
		kind: 'interstitial',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'interstitial-ad': {
		kind: 'interstitial-ad',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'rewarded-modal': {
		kind: 'rewarded-modal',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'rewarded-ad-modal': {
		kind: 'rewarded-ad-modal',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
		validator: (content: AdContent) =>
			!!content.title && !!content.ctaText,
	},
	'native-card': {
		kind: 'native-card',
		defaultProps: {
			position: 'relative',
		},
		validator: (content: AdContent) =>
			!!content.title || !!content.description,
	},
	'native-ad-card': {
		kind: 'native-ad-card',
		defaultProps: {
			position: 'relative',
		},
		validator: (content: AdContent) =>
			!!content.title || !!content.description,
	},
	'sticky-bar': {
		kind: 'sticky-bar',
		defaultProps: {
			position: 'fixed',
		},
	},
	'sticky-ad-bar': {
		kind: 'sticky-ad-bar',
		defaultProps: {
			position: 'fixed',
		},
	},
	'floating-widget': {
		kind: 'floating-widget',
		defaultProps: {
			position: 'fixed',
		},
	},
	'floating-ad-widget': {
		kind: 'floating-ad-widget',
		defaultProps: {
			position: 'fixed',
		},
	},
	'toast-notification': {
		kind: 'toast-notification',
		defaultProps: {
			position: 'fixed',
			autoHide: true,
			hideDelay: 5000,
		},
	},
	'toast-ad-notification': {
		kind: 'toast-ad-notification',
		defaultProps: {
			position: 'fixed',
			autoHide: true,
			hideDelay: 5000,
		},
	},
	'exit-intent-modal': {
		kind: 'exit-intent-modal',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
	},
	'exit-intent-ad-modal': {
		kind: 'exit-intent-ad-modal',
		defaultProps: {
			position: 'fixed',
			showBackdrop: true,
		},
	},
	'in-game-billboard': {
		kind: 'in-game-billboard',
		defaultProps: {
			position: 'relative',
		},
	},
};

// Use case configurations for smart ad creation
const USE_CASE_CONFIGS = {
	website: {
		primary: 'banner' as AdKind,
		secondary: [
			'native-card',
			'sticky-bar',
			'exit-intent-modal',
		] as AdKind[],
		priorities: {
			'banner': 1,
			'native-card': 2,
			'sticky-bar': 3,
			'exit-intent-modal': 4,
		},
	},
	mobile: {
		primary: 'interstitial' as AdKind,
		secondary: [
			'rewarded-modal',
			'toast-notification',
		] as AdKind[],
		priorities: {
			'interstitial': 1,
			'rewarded-modal': 2,
			'toast-notification': 3,
		},
	},
	game: {
		primary: 'in-game-billboard' as AdKind,
		secondary: [
			'rewarded-modal',
			'floating-widget',
		] as AdKind[],
		priorities: {
			'in-game-billboard': 1,
			'rewarded-modal': 2,
			'floating-widget': 3,
		},
	},
	ecommerce: {
		primary: 'banner' as AdKind,
		secondary: [
			'native-card',
			'exit-intent-modal',
			'sticky-bar',
		] as AdKind[],
		priorities: {
			'banner': 1,
			'native-card': 2,
			'exit-intent-modal': 3,
			'sticky-bar': 4,
		},
	},
	blog: {
		primary: 'native-card' as AdKind,
		secondary: ['banner', 'sticky-bar'] as AdKind[],
		priorities: {
			'native-card': 1,
			'banner': 2,
			'sticky-bar': 3,
		},
	},
};

/**
 * Modern, DRY Advertisement Factory
 * Eliminates all repetitive code through configuration-driven approach
 */
export class AdvertisementFactory {
	/**
	 * Core creation method - all other methods route through this
	 * Uses configuration to eliminate repetition
	 */
	static createWithConfig(
		kind: AdKind,
		content: AdContent,
		customProps: Partial<AdvertisementProps> = {}
	): React.ReactElement<AdvertisementProps> {
		const config = AD_CREATION_CONFIGS[kind];

		if (!config) {
			// Fallback to basic props if no specific config
			console.warn(
				`No specific config found for ad kind: ${kind}, using defaults`
			);
		}

		// Validate content if validator exists
		if (config?.validator && !config.validator(content)) {
			console.warn(
				`Content validation failed for ad kind: ${kind}`,
				content
			);
		}

		// Merge props in order: defaults -> config defaults -> custom props
		const mergedProps: AdvertisementProps = {
			...(config?.defaultProps || {}),
			...customProps,
			content,
			kind,
		} as AdvertisementProps;

		return React.createElement(Advertisements, mergedProps);
	}

	/**
	 * Simple create method - shorthand for createWithConfig
	 * This is the method expected by stories using A.create()
	 */
	static create(
		kind: AdKind,
		content: AdContent,
		customProps: Partial<AdvertisementProps> = {}
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			kind,
			content,
			customProps
		);
	}

	/**
	 * Batch creation utility - create multiple ads at once
	 */
	static createBatch(
		specs: Array<{
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	): React.ReactElement<AdvertisementProps>[] {
		return specs.map(({ kind, content, props = {} }) =>
			this.createWithConfig(kind, content, props)
		);
	}

	/**
	 * Conditional creation utility - create ad only if condition is true
	 */
	static createConditional(
		condition: boolean,
		kind: AdKind,
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> | null {
		return condition ?
				this.createWithConfig(kind, content, props)
			:	null;
	}

	/**
	 * Smart creation utility - chooses ad type based on context using ternary operators
	 */
	static createSmart(
		context: {
			isMobile?: boolean;
			isGame?: boolean;
			hasSpace?: boolean;
			userEngagement?: 'high' | 'medium' | 'low';
		},
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		const {
			isMobile = false,
			isGame = false,
			hasSpace = true,
			userEngagement = 'medium',
		} = context;

		// Use ternary operators for smart ad type selection
		const kind: AdKind =
			isGame ?
				userEngagement === 'high' ?
					'rewarded-modal'
				:	'in-game-billboard'
			: isMobile ?
				hasSpace ? 'interstitial'
				:	'toast-notification'
			: hasSpace ?
				userEngagement === 'low' ?
					'exit-intent-modal'
				:	'banner'
			:	'sticky-bar';

		return this.createWithConfig(kind, content, props);
	}

	/**
	 * Universal ad set creation - replaces all specific createXxxAds methods
	 */
	static createAdSet(
		useCase: keyof typeof USE_CASE_CONFIGS,
		contentMap: Record<string, AdContent>,
		options: {
			sharedProps?: Partial<AdvertisementProps>;
			positions?: Record<
				string,
				Partial<AdvertisementProps>
			>;
			onlyPrimary?: boolean;
		} = {}
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		const {
			sharedProps = {},
			positions = {},
			onlyPrimary = false,
		} = options;
		const config = USE_CASE_CONFIGS[useCase];
		const ads: Record<
			string,
			React.ReactElement<AdvertisementProps>
		> = {};

		if (!config) {
			throw new Error(`Unknown use case: ${useCase}`);
		}

		// Create primary ad
		const primaryKey = `${config.primary}Primary`;
		if (contentMap[primaryKey]) {
			ads[primaryKey] = this.createWithConfig(
				config.primary,
				contentMap[primaryKey],
				{ ...sharedProps, ...positions[primaryKey] }
			);
		}

		// Create secondary ads unless onlyPrimary is true
		if (!onlyPrimary) {
			config.secondary.forEach((kind) => {
				const key = `${kind}Secondary`;
				if (contentMap[key]) {
					ads[key] = this.createWithConfig(
						kind,
						contentMap[key],
						{ ...sharedProps, ...positions[key] }
					);
				}
			});
		}

		return ads;
	}

	/**
	 * Group creation utility - creates multiple related ads with shared props
	 */
	static createGroup(groupConfig: {
		ads: Array<{
			kind: AdKind;
			content: AdContent;
			id: string;
		}>;
		sharedProps?: Partial<AdvertisementProps>;
		groupName?: string;
	}): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		const {
			ads,
			sharedProps = {},
			groupName = 'group',
		} = groupConfig;
		const result: Record<
			string,
			React.ReactElement<AdvertisementProps>
		> = {};

		ads.forEach(({ kind, content, id }) => {
			const key = `${groupName}_${id}`;
			result[key] = this.createWithConfig(
				kind,
				content,
				sharedProps
			);
		});

		return result;
	}

	/**
	 * Use case specific method - routes through createAdSet for DRYness
	 */
	static createForUseCase(
		useCase:
			| 'website'
			| 'mobile'
			| 'game'
			| 'ecommerce'
			| 'blog',
		primary: { kind: AdKind; content: AdContent },
		secondary: Array<{
			kind: AdKind;
			content: AdContent;
			condition?: boolean;
		}> = [],
		options: {
			sharedProps?: Partial<AdvertisementProps>;
			positions?: Record<
				string,
				Partial<AdvertisementProps>
			>;
		} = {}
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		const { sharedProps = {}, positions = {} } = options;
		const ads: Record<
			string,
			React.ReactElement<AdvertisementProps>
		> = {};

		// Create primary ad
		ads.primary = this.createWithConfig(
			primary.kind,
			primary.content,
			{ ...sharedProps, ...positions.primary }
		);

		// Create secondary ads with conditions
		secondary.forEach(
			({ kind, content, condition = true }, index) => {
				if (condition) {
					const key = `secondary_${index}`;
					ads[key] = this.createWithConfig(kind, content, {
						...sharedProps,
						...positions[key],
					});
				}
			}
		);

		return ads;
	}

	// Legacy method support - all route through createWithConfig for DRYness
	static createBanner(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig('banner', content, props);
	}

	static createInterstitial(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'interstitial',
			content,
			props
		);
	}

	static createRewardedModal(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'rewarded-modal',
			content,
			props
		);
	}

	static createNativeCard(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'native-card',
			content,
			props
		);
	}

	static createStickyBar(
		content: AdContent,
		position?: Partial<AdvertisementProps>,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig('sticky-bar', content, {
			...position,
			...props,
		});
	}

	static createFloatingWidget(
		content: AdContent,
		position?: Partial<AdvertisementProps>,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'floating-widget',
			content,
			{ ...position, ...props }
		);
	}

	static createToastNotification(
		content: AdContent,
		position?: Partial<AdvertisementProps>,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'toast-notification',
			content,
			{ ...position, ...props }
		);
	}

	static createExitIntentModal(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'exit-intent-modal',
			content,
			props
		);
	}

	static createInGameBillboard(
		content: AdContent,
		props?: Partial<AdvertisementProps>
	): React.ReactElement<AdvertisementProps> {
		return this.createWithConfig(
			'in-game-billboard',
			content,
			props
		);
	}

	// Legacy ad set methods - route through createAdSet
	static createWebsiteAds(
		contentMap: Record<string, AdContent>,
		sharedProps?: Partial<AdvertisementProps>
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		return this.createAdSet('website', contentMap, {
			sharedProps,
		});
	}

	static createMobileAppAds(
		contentMap: Record<string, AdContent>,
		sharedProps?: Partial<AdvertisementProps>
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		return this.createAdSet('mobile', contentMap, {
			sharedProps,
		});
	}

	static createGameAds(
		contentMap: Record<string, AdContent>,
		sharedProps?: Partial<AdvertisementProps>
	): Record<
		string,
		React.ReactElement<AdvertisementProps>
	> {
		return this.createAdSet('game', contentMap, {
			sharedProps,
		});
	}

	// Utility methods
	static getConfig(
		kind: AdKind
	): AdCreationConfig | undefined {
		return AD_CREATION_CONFIGS[kind];
	}

	static getSupportedKinds(): AdKind[] {
		return Object.keys(AD_CREATION_CONFIGS) as AdKind[];
	}

	static validateContent(
		kind: AdKind,
		content: AdContent
	): boolean {
		const config = AD_CREATION_CONFIGS[kind];
		return config?.validator ?
				config.validator(content)
			:	true;
	}

	static getUseCaseConfig(
		useCase: keyof typeof USE_CASE_CONFIGS
	) {
		return USE_CASE_CONFIGS[useCase];
	}
}

/**
 * Utility functions for ad creation - promotes DRY principles
 */
export const AdUtils = {
	// Batch creation with error handling
	batchCreate: (
		requests: Array<{
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	): Array<React.ReactElement<AdvertisementProps> | null> => {
		return requests.map(({ kind, content, props }) => {
			try {
				return AdvertisementFactory.createWithConfig(
					kind,
					content,
					props
				);
			} catch (error) {
				console.error(
					`Failed to create ad of kind ${kind}:`,
					error
				);
				return null;
			}
		});
	},

	// Conditional creation with ternary operators
	conditionalCreate: (
		conditions: Array<{
			condition: boolean;
			kind: AdKind;
			content: AdContent;
			props?: Partial<AdvertisementProps>;
		}>
	): Array<React.ReactElement<AdvertisementProps> | null> => {
		return conditions.map(
			({ condition, kind, content, props }) =>
				condition ?
					AdvertisementFactory.createWithConfig(
						kind,
						content,
						props
					)
				:	null
		);
	},

	// Smart responsive creation
	responsiveCreate: (
		content: AdContent,
		breakpoints: {
			mobile?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
			tablet?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
			desktop?: {
				kind: AdKind;
				props?: Partial<AdvertisementProps>;
			};
		}
	) => ({
		mobile:
			breakpoints.mobile ?
				AdvertisementFactory.createWithConfig(
					breakpoints.mobile.kind,
					content,
					breakpoints.mobile.props
				)
			:	null,
		tablet:
			breakpoints.tablet ?
				AdvertisementFactory.createWithConfig(
					breakpoints.tablet.kind,
					content,
					breakpoints.tablet.props
				)
			:	null,
		desktop:
			breakpoints.desktop ?
				AdvertisementFactory.createWithConfig(
					breakpoints.desktop.kind,
					content,
					breakpoints.desktop.props
				)
			:	null,
	}),

	// A/B testing utility
	abTestCreate: (
		content: AdContent,
		variants: Array<{
			kind: AdKind;
			props?: Partial<AdvertisementProps>;
			weight?: number;
		}>,
		testGroup?: string
	): React.ReactElement<AdvertisementProps> => {
		const totalWeight = variants.reduce(
			(sum, variant) => sum + (variant.weight || 1),
			0
		);
		const random = Math.random() * totalWeight;
		let currentWeight = 0;

		for (const variant of variants) {
			currentWeight += variant.weight || 1;
			if (random <= currentWeight) {
				const props = { ...variant.props } as any;
				if (testGroup) props.testGroup = testGroup;
				return AdvertisementFactory.createWithConfig(
					variant.kind,
					content,
					props
				);
			}
		}

		// Fallback to first variant
		const props = { ...variants[0].props } as any;
		if (testGroup) props.testGroup = testGroup;
		return AdvertisementFactory.createWithConfig(
			variants[0].kind,
			content,
			props
		);
	},
};

/**
 * Preset configurations for common use cases
 * All use the new DRY system under the hood
 */
export const AdPresets = {
	// Website presets
	websiteHeader: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),

	websiteFooter: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),

	websiteInContent: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),

	websiteSidebar: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),

	// Mobile presets
	mobileFullscreen: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'interstitial',
			content,
			{ position: 'fixed' }
		),

	mobileReward: (
		content: AdContent & { rewardData: any }
	) =>
		AdvertisementFactory.createWithConfig(
			'rewarded-modal',
			content,
			{ position: 'fixed' }
		),

	// Game presets
	gameBillboard: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'in-game-billboard',
			content,
			{ position: 'relative' }
		),

	gameReward: (content: AdContent & { rewardData: any }) =>
		AdvertisementFactory.createWithConfig(
			'rewarded-modal',
			content,
			{
				position: 'fixed',
				showBackdrop: true,
			}
		),

	// E-commerce presets
	productPromo: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'banner',
			content,
			{ position: 'relative' }
		),

	cartAbandonment: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'exit-intent-modal',
			content,
			{
				position: 'fixed',
				showBackdrop: true,
			}
		),

	saleNotification: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'toast-notification',
			content,
			{
				position: 'fixed',
				autoHide: true,
				hideDelay: 8000,
			}
		),

	// Blog presets
	sponsoredContent: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'native-card',
			content,
			{ position: 'relative' }
		),

	newsletterPromo: (content: AdContent) =>
		AdvertisementFactory.createWithConfig(
			'sticky-bar',
			content,
			{ position: 'fixed' }
		),
};
