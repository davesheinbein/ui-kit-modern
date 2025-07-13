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

const AdModalLayout: React.FC<{
	singleProps: SingleAdProps;
	handleAdClick: () => void;
	handleAdClose: () => void;
}> = ({ singleProps, handleAdClick, handleAdClose }) => (
	<>
		{singleProps.showBackdrop && (
			<div
				className={classNames.advertisement__backdrop}
				style={{
					background:
						singleProps.backdropBackground ||
						`rgba(0, 0, 0, ${singleProps.backdropOpacity})`,
					...singleProps.backdropStyle,
				}}
				onClick={
					singleProps.closeOnBackdrop ? handleAdClose : (
						undefined
					)
				}
			/>
		)}
		<div
			className={classNames.advertisement__modal_content}
			style={{
				background:
					singleProps.modalBackground || '#ffffff',
				borderRadius: singleProps.modalBorderRadius || 12,
				padding: singleProps.modalPadding || 24,
				boxShadow:
					singleProps.modalShadow ||
					'0 8px 32px rgba(0, 0, 0, 0.2)',
				...singleProps.modalStyle,
			}}
		>
			{singleProps.headerContent}
			<AdSponsoredLabel {...singleProps} />
			<AdImage {...singleProps} />
			<AdTitle {...singleProps} />
			<AdDescription {...singleProps} />
			<AdCTAButton
				{...singleProps}
				onClick={handleAdClick}
			/>
			{singleProps.closable && (
				<div
					style={{
						position: 'absolute',
						top: 8,
						right: 8,
						zIndex: 2,
					}}
				>
					<AdCloseButton
						{...singleProps}
						onClick={handleAdClose}
						closePosition='top-right'
					/>
				</div>
			)}
			{singleProps.footerContent}
		</div>
	</>
);

export default AdModalLayout;
