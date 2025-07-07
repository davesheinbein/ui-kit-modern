import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdImage: React.FC<{
	imageUrl?: string;
	imageAlt?: string;
	imageClassName?: string;
	imageStyle?: React.CSSProperties;
	imageWidth?: string | number;
	imageHeight?: string | number;
	imageBorderRadius?: string | number;
}> = ({
	imageUrl,
	imageAlt = 'Advertisement',
	imageClassName = '',
	imageStyle = {},
	imageWidth,
	imageHeight,
	imageBorderRadius,
}) => {
	if (!imageUrl) return null;

	const stylesObj: React.CSSProperties = {
		...imageStyle,
		...(imageWidth && { width: imageWidth }),
		...(imageHeight && { height: imageHeight }),
		...(imageBorderRadius !== undefined && {
			borderRadius: imageBorderRadius,
		}),
	};

	const className = [
		styles.advertisement__image,
		imageClassName,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<img
			src={imageUrl}
			alt={imageAlt}
			className={className}
			style={stylesObj}
		/>
	);
};

export default AdImage;
