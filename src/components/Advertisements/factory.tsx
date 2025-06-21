import React from 'react';
import UnifiedAdvertisement, {
	UnifiedAdvertisementProps,
	AdKind,
} from './UnifiedAdvertisement';
import {
	ADVERTISEMENT_CONFIGURATIONS,
	ADVERTISEMENT_GROUPS,
	AdvertisementConfiguration,
	AdContent,
} from './configurations';

/**
 * Advertisement Factory - Creates advertisements with minimal configuration
 * This is the most DRY way to create advertisements in the entire system
 */
export class AdvertisementFactory {
	/**
	 * Create an advertisement with a specific kind and minimal props
	 */
	static create(
		kind: AdKind,
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	): React.ReactElement<UnifiedAdvertisementProps> {
		return React.createElement(UnifiedAdvertisement, {
			kind,
			content: {
				id:
					content.id ||
					`ad-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
				...content,
			},
			...props,
		});
	}

	/**
	 * Create multiple advertisements from a group configuration
	 */
	static createGroup(
		groupConfig: Record<
			string,
			{
				kind: AdKind;
				content: AdContent;
				props?: Partial<UnifiedAdvertisementProps>;
			}
		>,
		sharedProps: Partial<UnifiedAdvertisementProps> = {}
	): Record<
		string,
		React.ReactElement<UnifiedAdvertisementProps>
	> {
		return Object.fromEntries(
			Object.entries(groupConfig).map(
				([key, { kind, content, props = {} }]) => [
					key,
					this.create(kind, content, {
						...sharedProps,
						...props,
					}),
				]
			)
		);
	}

	/**
	 * Create a banner advertisement
	 */
	static createBanner(
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('banner', content, {
			position: 'relative',
			...props,
		});
	}

	/**
	 * Create an interstitial advertisement
	 */
	static createInterstitial(
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('interstitial', content, {
			showBackdrop: true,
			backdropOpacity: 0.8,
			...props,
		});
	}

	/**
	 * Create a rewarded modal advertisement
	 */
	static createRewardedModal(
		content: AdContent & {
			rewardData: {
				type: string;
				amount: number;
				description: string;
			};
		},
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('rewarded-modal', content, {
			showBackdrop: true,
			backdropOpacity: 0.9,
			...props,
		});
	}

	/**
	 * Create a native card advertisement
	 */
	static createNativeCard(
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('native-card', content, {
			animationEnabled: true,
			...props,
		});
	}

	/**
	 * Create a sticky bar advertisement
	 */
	static createStickyBar(
		content: AdContent,
		position: 'top' | 'bottom' = 'bottom',
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('sticky-bar', content, {
			position: 'fixed',
			style: {
				[position]: 0,
				left: 0,
				right: 0,
			},
			autoHide: false,
			...props,
		});
	}

	/**
	 * Create a floating widget advertisement
	 */
	static createFloatingWidget(
		content: AdContent,
		position: {
			top?: number;
			bottom?: number;
			left?: number;
			right?: number;
		} = { bottom: 20, right: 20 },
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('floating-widget', content, {
			position: 'fixed',
			style: position,
			autoHide: true,
			hideDelay: 10000,
			...props,
		});
	}

	/**
	 * Create a toast notification advertisement
	 */
	static createToastNotification(
		content: AdContent,
		position: 'top' | 'bottom' = 'top',
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('toast-notification', content, {
			position: 'fixed',
			style: {
				[position]: 20,
				right: 20,
			},
			autoHide: true,
			hideDelay: 5000,
			animationEnabled: true,
			...props,
		});
	}

	/**
	 * Create an exit intent modal advertisement
	 */
	static createExitIntentModal(
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('exit-intent-modal', content, {
			showBackdrop: true,
			backdropOpacity: 0.8,
			isVisible: false, // Initially hidden, shown on exit intent
			...props,
		});
	}

	/**
	 * Create an in-game billboard advertisement
	 */
	static createInGameBillboard(
		content: AdContent,
		props: Partial<UnifiedAdvertisementProps> = {}
	) {
		return this.create('ingame-billboard', content, {
			animationEnabled: true,
			...props,
		});
	}

	/**
	 * Create predefined advertisement sets for common use cases
	 */
	static createWebsiteAds(props: {
		bannerContent: AdContent;
		floatingContent?: AdContent;
		exitIntentContent?: AdContent;
		sharedProps?: Partial<UnifiedAdvertisementProps>;
	}) {
		const {
			bannerContent,
			floatingContent,
			exitIntentContent,
			sharedProps = {},
		} = props;

		const ads: Record<
			string,
			React.ReactElement<UnifiedAdvertisementProps>
		> = {
			banner: this.createBanner(bannerContent, sharedProps),
		};

		if (floatingContent) {
			ads.floating = this.createFloatingWidget(
				floatingContent,
				{ bottom: 20, right: 20 },
				sharedProps
			);
		}

		if (exitIntentContent) {
			ads.exitIntent = this.createExitIntentModal(
				exitIntentContent,
				sharedProps
			);
		}

		return ads;
	}

	/**
	 * Create predefined advertisement sets for mobile apps
	 */
	static createMobileAppAds(props: {
		bannerContent: AdContent;
		interstitialContent?: AdContent;
		rewardedContent?: AdContent & { rewardData: any };
		sharedProps?: Partial<UnifiedAdvertisementProps>;
	}) {
		const {
			bannerContent,
			interstitialContent,
			rewardedContent,
			sharedProps = {},
		} = props;

		const ads: Record<
			string,
			React.ReactElement<UnifiedAdvertisementProps>
		> = {
			banner: this.createBanner(bannerContent, {
				position: 'relative',
				style: { maxWidth: '100%' },
				...sharedProps,
			}),
		};

		if (interstitialContent) {
			ads.interstitial = this.createInterstitial(
				interstitialContent,
				sharedProps
			);
		}

		if (rewardedContent) {
			ads.rewarded = this.createRewardedModal(
				rewardedContent,
				sharedProps
			);
		}

		return ads;
	}

	/**
	 * Create predefined advertisement sets for games
	 */
	static createGameAds(props: {
		billboardContent: AdContent;
		rewardedContent?: AdContent & { rewardData: any };
		interstitialContent?: AdContent;
		sharedProps?: Partial<UnifiedAdvertisementProps>;
	}) {
		const {
			billboardContent,
			rewardedContent,
			interstitialContent,
			sharedProps = {},
		} = props;

		const ads: Record<
			string,
			React.ReactElement<UnifiedAdvertisementProps>
		> = {
			billboard: this.createInGameBillboard(
				billboardContent,
				sharedProps
			),
		};

		if (rewardedContent) {
			ads.rewarded = this.createRewardedModal(
				rewardedContent,
				sharedProps
			);
		}

		if (interstitialContent) {
			ads.interstitial = this.createInterstitial(
				interstitialContent,
				sharedProps
			);
		}

		return ads;
	}

	/**
	 * Get advertisement configuration by kind
	 */
	static getConfig(
		kind: AdKind
	): AdvertisementConfiguration | undefined {
		const kindMap: Record<
			string,
			keyof typeof ADVERTISEMENT_CONFIGURATIONS
		> = {
			'banner': 'banner-ad',
			'interstitial': 'interstitial-ad',
			'rewarded-modal': 'rewarded-ad-modal',
			'native-card': 'native-ad-card',
			'sticky-bar': 'sticky-ad-bar',
			'floating-widget': 'floating-ad-widget',
			'toast-notification': 'toast-ad-notification',
			'exit-intent-modal': 'exit-intent-ad-modal',
			'ingame-billboard': 'in-game-billboard',
			'container': 'ad-container',
		};

		const configKey = kindMap[kind] || kind;
		return ADVERTISEMENT_CONFIGURATIONS[
			configKey as keyof typeof ADVERTISEMENT_CONFIGURATIONS
		];
	}

	/**
	 * Create advertisements from a predefined group
	 */
	static createFromGroup(
		groupName: keyof typeof ADVERTISEMENT_GROUPS,
		contentMap: Record<string, AdContent>,
		sharedProps: Partial<UnifiedAdvertisementProps> = {}
	) {
		const group = ADVERTISEMENT_GROUPS[groupName];
		const ads: Record<
			string,
			React.ReactElement<UnifiedAdvertisementProps>
		> = {};

		group.forEach((kind, index) => {
			const key = `${groupName}-${index}`;
			const content = contentMap[kind] ||
				contentMap[key] || {
					title: `${kind} Advertisement`,
					description: 'Sample advertisement content',
				};

			ads[key] = this.create(
				kind as AdKind,
				content,
				sharedProps
			);
		});

		return ads;
	}
}

/**
 * Shorthand factory function for quick advertisement creation
 */
export const A = AdvertisementFactory;

/**
 * Predefined advertisement presets for common scenarios
 */
export const AdvertisementPresets = {
	// Website presets
	websiteBanner: (content: AdContent) =>
		AdvertisementFactory.createBanner(content, {
			animationEnabled: true,
		}),

	websiteFloating: (content: AdContent) =>
		AdvertisementFactory.createFloatingWidget(content, {
			bottom: 20,
			right: 20,
		}),

	websiteExitIntent: (content: AdContent) =>
		AdvertisementFactory.createExitIntentModal(content),

	// Mobile app presets
	mobileBanner: (content: AdContent) =>
		AdvertisementFactory.createBanner(content, {
			style: { maxWidth: '100%' },
			animationEnabled: true,
		}),

	mobileInterstitial: (content: AdContent) =>
		AdvertisementFactory.createInterstitial(content, {
			animationEnabled: true,
		}),

	// Game presets
	gameBillboard: (content: AdContent) =>
		AdvertisementFactory.createInGameBillboard(content),

	gameReward: (content: AdContent & { rewardData: any }) =>
		AdvertisementFactory.createRewardedModal(content),

	// E-commerce presets
	productPromo: (content: AdContent) =>
		AdvertisementFactory.createNativeCard(content, {
			animationEnabled: true,
			trackingEnabled: true,
		}),

	saleNotification: (content: AdContent) =>
		AdvertisementFactory.createToastNotification(
			content,
			'top'
		),

	// News/Blog presets
	sponsoredContent: (content: AdContent) =>
		AdvertisementFactory.createNativeCard(content, {
			variant: 'sponsored',
		} as any),

	newsletterPromo: (content: AdContent) =>
		AdvertisementFactory.createStickyBar(content, 'bottom'),
};

export default AdvertisementFactory;
