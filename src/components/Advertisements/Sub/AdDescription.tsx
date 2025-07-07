import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdDescription: React.FC<{
	description?: string;
	descriptionClassName?: string;
	descriptionStyle?: React.CSSProperties;
	descriptionColor?: string;
	descriptionSize?: string | number;
}> = ({
	description,
	descriptionClassName = '',
	descriptionStyle = {},
	descriptionColor,
	descriptionSize,
}) => {
	if (!description) return null;

	const stylesObj: React.CSSProperties = {
		...descriptionStyle,
		...(descriptionColor && { color: descriptionColor }),
		...(descriptionSize && { fontSize: descriptionSize }),
	};

	const className = [
		styles.advertisement__description,
		descriptionClassName,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<p className={className} style={stylesObj}>
			{description}
		</p>
	);
};

export default AdDescription;
