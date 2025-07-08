import React from 'react';
import clsx from 'clsx';
import styles from '../chart.module.scss';
import {
	BaseWidget,
	BaseWidgetWithSVG,
} from './ChartWidgetBase';
import {
	getPrimaryValue,
	getPrimaryLabel,
	getPrimaryDelta,
	getPrimaryStatus,
	getLeaderboardEntries,
} from '../chartHelpers';

export const widgetConfig = {
	kpi: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.kpiWidget,
					styles[`kpiWidget--${size}`],
					styles[`kpiWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.kpiValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.kpiLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel={`KPI: ${getPrimaryLabel(dataSeries)}`}
			/>
		);
	},
	scorecard: (props: any) => {
		const {
			dataSeries,
			styles,
			scorecardIcon,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.scorecardWidget,
					styles[`scorecardWidget--${size}`],
					styles[`scorecardWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.scorecardValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.scorecardLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Scorecard Widget'
				extraContent={
					scorecardIcon ?
						<span className={styles.scorecardIcon}>
							{scorecardIcon}
						</span>
					:	undefined
				}
			/>
		);
	},
	progress: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.progressWidget,
					styles[`progressWidget--${size}`],
					styles[`progressWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.progressValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.progressLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Progress Widget'
			/>
		);
	},
	gauge: (props: any) => {
		const {
			dataSeries,
			styles,
			color,
			size,
			variant,
			orientation,
			...cardProps
		} = props;
		return (
			<BaseWidget
				cardClass={clsx(
					styles.gaugeWidget,
					styles[`gaugeWidget--${size}`],
					styles[`gaugeWidget--${variant}`]
				)}
				fields={[
					{
						className: styles.gaugeValue,
						value: getPrimaryValue(dataSeries),
					},
					{
						className: styles.gaugeLabel,
						value: getPrimaryLabel(dataSeries),
					},
				]}
				styles={styles}
				variant={variant}
				size={size}
				orientation={orientation}
				color={color}
				cardProps={cardProps}
				ariaLabel='Gauge Widget'
			/>
		);
	},
	delta: (props: any) => {
		// Stub implementation for delta widget
		return (
			<div style={{ padding: 16, color: '#888' }}>
				Delta widget is not yet implemented.
			</div>
		);
	},
	circularProgress: (props: any) => {
		// Stub implementation for circularProgress widget
		return (
			<div style={{ padding: 16, color: '#888' }}>
				Circular Progress widget is not yet implemented.
			</div>
		);
	},
	// ...add status, leaderboard, etc. as needed
};
