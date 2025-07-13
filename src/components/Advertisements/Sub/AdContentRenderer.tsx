// Renders ad content based on kind
import * as React from 'react';
import type { SingleAdProps } from './types';
import AdModalLayout from './AdModalLayout';
import AdBannerLayout from './AdBannerLayout';
import AdLoading from './AdLoading';
import AdError from './AdError';

export const AdContentRenderer: React.FC<{
	singleProps: SingleAdProps;
	adState: string;
	metrics: any;
	handleAdClick: () => void;
	handleAdClose: () => void;
}> = ({
	singleProps,
	adState,
	metrics,
	handleAdClick,
	handleAdClose,
}) => {
	if (singleProps.loading) {
		return <AdLoading {...singleProps} />;
	}
	if (singleProps.error) {
		return <AdError {...singleProps} />;
	}
	if (singleProps.customContent) {
		return <>{singleProps.customContent}</>;
	}
	switch (singleProps.kind) {
		case 'modal':
		case 'rewarded-ad-modal':
		case 'exit-intent-ad-modal':
			return (
				<AdModalLayout
					{...singleProps}
					adState={adState}
					metrics={metrics}
					onAdClick={handleAdClick}
					onAdClose={handleAdClose}
				/>
			);
		case 'banner':
		case 'leaderboard':
		case 'rectangle':
		case 'skyscraper':
		case 'mobile-banner':
			return (
				<AdBannerLayout
					{...singleProps}
					adState={adState}
					metrics={metrics}
					onAdClick={handleAdClick}
					onAdClose={handleAdClose}
				/>
			);
		// Add more cases for other ad kinds as needed
		default:
			return (
				<AdBannerLayout
					{...singleProps}
					adState={adState}
					metrics={metrics}
					onAdClick={handleAdClick}
					onAdClose={handleAdClose}
				/>
			);
	}
};
