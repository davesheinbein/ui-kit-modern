// Quick test of the Advertisements component system
import React from 'react';
import {
	AdvertisementFactory,
	A,
	UnifiedAdvertisement,
	AdContainer,
} from './src/components/Advertisements';

// Test basic factory usage
const TestApp = () => {
	return (
		<div>
			<h1>Advertisement Component System Test</h1>

			{/* Test factory shorthand */}
			{A.create('banner-ad', {
				title: 'Test Banner Ad',
				ctaText: 'Click Here',
			})}

			{/* Test direct component */}
			<UnifiedAdvertisement
				kind='interstitial-ad'
				content={{
					title: 'Test Interstitial Ad',
					description: 'This is a test ad',
				}}
			/>

			{/* Test container */}
			<AdContainer
				adPool={[
					{
						kind: 'native-ad-card',
						content: { title: 'Native Ad 1' },
					},
					{
						kind: 'banner-ad',
						content: { title: 'Banner Ad 2' },
					},
				]}
				layout='carousel'
			/>
		</div>
	);
};

export default TestApp;
