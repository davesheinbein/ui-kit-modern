import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdSponsoredLabel: React.FC<{
	sponsored?: boolean;
	sponsoredText?: string;
	sponsoredClassName?: string;
	sponsoredStyle?: React.CSSProperties;
	sponsoredColor?: string;
	sponsoredSize?: string | number;
}> = ({
	sponsored,
	sponsoredText = 'Sponsored',
	sponsoredClassName = '',
	sponsoredStyle = {},
	sponsoredColor,
	sponsoredSize,
}) => {
	if (!sponsored) return null;

	const stylesObj: React.CSSProperties = {
		...sponsoredStyle,
		...(sponsoredColor && { color: sponsoredColor }),
		...(sponsoredSize && { fontSize: sponsoredSize }),
	};

	const className = [
		styles.advertisement__sponsored,
		sponsoredClassName,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<span className={className} style={stylesObj}>
			{sponsoredText}
		</span>
	);
};

export default AdSponsoredLabel;
