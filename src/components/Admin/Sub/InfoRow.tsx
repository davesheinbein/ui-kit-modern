import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import styles from '../admin.module.scss';

interface InfoRowProps {
	label: string;
	value: string | number;
	unit?: string;
	className?: string;
	labelClassName?: string;
	valueClassName?: string;
	formatter?: (value: any) => string;
}

const InfoRow: React.FC<InfoRowProps> = ({
	label,
	value,
	unit = '',
	className = '',
	labelClassName = '',
	valueClassName = '',
	formatter,
}) => {
	const formattedValue =
		formatter ? formatter(value) : value;
	return (
		<Wrapper
			className={[styles['admin__info-row'], className]
				.filter(Boolean)
				.join(' ')}
		>
			<span
				className={[
					styles['admin__info-label'],
					labelClassName,
				]
					.filter(Boolean)
					.join(' ')}
			>
				{label}
			</span>
			<span className={valueClassName}>
				{formattedValue}
				{unit ? ` ${unit}` : ''}
			</span>
		</Wrapper>
	);
};

export default InfoRow;
