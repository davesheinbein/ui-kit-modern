import * as React from 'react';
import AdSponsoredLabel from './AdSponsoredLabel';
import AdImage from './AdImage';
import AdTitle from './AdTitle';
import AdDescription from './AdDescription';
import AdCTAButton from './AdCTAButton';
import AdCloseButton from './AdCloseButton';
import { Wrapper } from '../../Wrappers';
import classNames from '../advertisements.module.scss';
import type { SingleAdProps } from './types';

const AdBannerLayout: React.FC<{
	singleProps: SingleAdProps;
	handleAdClick: () => void;
	handleAdClose: () => void;
}> = ({ singleProps, handleAdClick, handleAdClose }) => (
	<Wrapper
		role='region'
		aria-label={
			singleProps.title ||
			singleProps.kind ||
			'Advertisement'
		}
		aria-live={
			singleProps.kind === 'toast' ? 'polite' : undefined
		}
		tabIndex={0}
		onClick={
			singleProps.clickable ? handleAdClick : undefined
		}
	>
		{singleProps.headerContent}
		<AdSponsoredLabel {...singleProps} />
		{singleProps.imagePosition !== 'background' && (
			<AdImage {...singleProps} />
		)}
		<div
			className={classNames.advertisement__content}
			aria-labelledby={
				singleProps.title ?
					`${singleProps.kind}-ad-title`
				:	undefined
			}
		>
			<AdTitle
				{...singleProps}
				{...(singleProps.title ?
					{ id: `${singleProps.kind}-ad-title` }
				:	{})}
			/>
			<AdDescription {...singleProps} />
		</div>
		<AdCTAButton
			{...singleProps}
			onClick={handleAdClick}
			{...(singleProps.ctaText ?
				{
					'aria-label': `Call to action: ${singleProps.ctaText}`,
				}
			:	{})}
		/>
		{singleProps.closable && (
			<AdCloseButton
				{...singleProps}
				onClick={handleAdClose}
				aria-label='Close advertisement'
			/>
		)}
		{singleProps.footerContent}
	</Wrapper>
);

export default AdBannerLayout;
