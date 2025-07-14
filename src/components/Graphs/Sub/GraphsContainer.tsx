import React from 'react';
import styles from '../graphs.module.scss';

interface GraphsContainerProps {
	title?: string;
	subtitle?: string;
	width?: string | number;
	height?: string | number;
	colorScheme?: string;
	className?: string;
	style?: React.CSSProperties;
	backgroundColor?: string;
	ariaLabel?: string;
	ariaDescription?: string;
	children: React.ReactNode;
}

const GraphsContainer: React.FC<GraphsContainerProps> = ({
	title,
	subtitle,
	width = '100%',
	height,
	colorScheme = 'default',
	className = '',
	style = {},
	backgroundColor,
	ariaLabel,
	ariaDescription,
	children,
}) => (
	<div
		className={[
			styles.graphsContainer,
			styles[`graphsContainer--${colorScheme}`],
			className,
		]
			.filter(Boolean)
			.join(' ')}
		style={{
			...style,
			background: backgroundColor || style?.background,
		}}
		aria-label={ariaLabel || title}
		aria-description={ariaDescription}
	>
		{title && (
			<div className={styles.graphsTitle}>{title}</div>
		)}
		{subtitle && (
			<div className={styles.graphsSubtitle}>
				{subtitle}
			</div>
		)}
		<div
			className={styles.graphsChartWrapper}
			style={{
				width:
					typeof width === 'number' ? `${width}px` : width,
				height: height ? `${height}px` : undefined,
			}}
		>
			{children}
		</div>
	</div>
);

export default GraphsContainer;
