import React from 'react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { Wrapper } from '../../Wrappers';
import styles from '../chart.module.scss';

export function renderFields(
	fields: Array<{ className: string; value: any }>
) {
	return fields.map((f, i) => (
		<Wrapper
			key={i}
			className={f.className}
			style={{
				wordBreak: 'break-word',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
			}}
		>
			{f.value}
		</Wrapper>
	));
}

export const BaseWidget = ({
	cardClass,
	fields,
	styles,
	variant,
	size,
	orientation,
	color,
	cardProps = {},
	ariaLabel,
	extraContent,
}: {
	cardClass: string;
	fields: Array<{ className: string; value: any }>;
	styles: any;
	variant: any;
	size: any;
	orientation?: any;
	color?: any;
	cardProps?: any;
	ariaLabel: string;
	extraContent?: React.ReactNode;
}) => (
	<Card
		className={clsx(cardClass, `card-size-${size}`)}
		variant={variant}
		size={size}
		orientation={orientation}
		style={{
			'--chart-accent': color,
			'minWidth': 0,
			'minHeight': 0,
			...(cardProps?.style || {}),
		}}
		role='group'
		aria-label={ariaLabel}
		{...cardProps}
	>
		<Wrapper className={styles.widgetContent}>
			{renderFields(fields)}
			{extraContent}
		</Wrapper>
	</Card>
);

export const BaseWidgetWithSVG = ({
	cardClass,
	svg,
	fields,
	styles,
	variant,
	size,
	orientation,
	color,
	cardProps = {},
	ariaLabel,
}: {
	cardClass: string;
	svg: React.ReactNode;
	fields: Array<{ className: string; value: any }>;
	styles: any;
	variant: any;
	size: any;
	orientation?: any;
	color?: any;
	cardProps?: any;
	ariaLabel: string;
}) => (
	<Card
		className={clsx(cardClass, `card-size-${size}`)}
		variant={variant}
		size={size}
		style={{
			'--chart-accent': color,
			'minWidth': 0,
			'minHeight': 0,
			...(cardProps?.style || {}),
		}}
		role='group'
		aria-label={ariaLabel}
		{...cardProps}
	>
		{svg}
		<Wrapper className={styles.widgetContent}>
			{renderFields(fields)}
		</Wrapper>
	</Card>
);
