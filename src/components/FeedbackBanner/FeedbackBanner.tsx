import React from 'react';
import styles from './FeedbackBanner.module.scss';

export interface FeedbackBannerProps {
	message: string;
}

const FeedbackBanner: React.FC<FeedbackBannerProps> = ({
	message,
}) => {
	return (
		<div
			className={
				styles.feedbackBanner +
				(message ? '' : ' ' + styles.feedbackBannerHidden)
			}
			aria-live='polite'
		>
			{message}
		</div>
	);
};

export default FeedbackBanner;
