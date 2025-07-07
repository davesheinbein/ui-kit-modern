import * as React from 'react';
import classNames from 'classnames';
import styles from '../advertisements.module.scss';

const AdTitle: React.FC<{
	title?: string;
	titleTag?: keyof JSX.IntrinsicElements;
	titleClassName?: string;
	titleStyle?: React.CSSProperties;
	titleColor?: string;
	titleSize?: string | number;
	titleWeight?: string | number;
}> = ({
	title,
	titleTag = 'h3',
	titleClassName = '',
	titleStyle = {},
	titleColor,
	titleSize,
	titleWeight,
}) => {
	if (!title) return null;

	const stylesObj: React.CSSProperties = {
		...titleStyle,
		...(titleColor && { color: titleColor }),
		...(titleSize && { fontSize: titleSize }),
		...(titleWeight && { fontWeight: titleWeight }),
	};

	const className = [
		styles.advertisement__title,
		titleClassName,
	]
		.filter(Boolean)
		.join(' ');

	return React.createElement(
		titleTag,
		{
			className,
			style: stylesObj,
		},
		title
	);
};

export default AdTitle;
