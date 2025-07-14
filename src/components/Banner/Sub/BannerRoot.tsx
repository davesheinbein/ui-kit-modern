import React, { forwardRef } from 'react';
import type { BannerProps } from './types';
import BannerContent from './BannerContent';
import styles from '../banner.module.scss';
import { Wrapper } from '../../Wrappers';

const Banner = forwardRef<HTMLDivElement, BannerProps>(
	(props, ref) => {
		const { className = '', variant, ...rest } = props;
		// Add logic for autoClose, close button, etc. as needed
		return (
			<Wrapper
				ref={ref}
				className={`${styles.banner} ${className}`}
				// Add more props as needed
			>
				<BannerContent {...rest} />
			</Wrapper>
		);
	}
);

Banner.displayName = 'Banner';
export default Banner;
