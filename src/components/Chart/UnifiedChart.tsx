import React, { forwardRef, memo, useState } from 'react';
import {
	ChartKind,
	ChartConfiguration,
	ChartDataSeries,
	getChartConfig,
} from './configurations';
import styles from './Chart.module.scss';

export interface UnifiedChartProps {
	kind: ChartKind;
	children?: React.ReactNode;
	className?: string;

	// Data
	dataSeries?: ChartDataSeries[];

	// Configuration overrides
	variant?: ChartConfiguration['variant'];
	position?: ChartConfiguration['position'];
	orientation?: 'horizontal' | 'vertical';

	// Features
	showIcons?: boolean;
	showValues?: boolean;
	interactive?: boolean;
	followCursor?: boolean;
	showArrow?: boolean;
	multiValue?: boolean;
	allowMultiSelect?: boolean;
	showSelectAll?: boolean;
	searchable?: boolean;

	// Styling
	spacing?: 'tight' | 'normal' | 'loose';
	size?: 'small' | 'medium' | 'large';

	// Callbacks
	onSeriesToggle?: (
		seriesId: string,
		visible: boolean
	) => void;
	onFilterChange?: (filters: string[]) => void;
	onTooltipShow?: (data: any) => void;
	onTooltipHide?: () => void;
}

const UnifiedChart = forwardRef<
	HTMLDivElement,
	UnifiedChartProps
>((props, ref) => {
	const {
		kind,
		children,
		className,
		dataSeries = [],

		// Configuration overrides
		variant,
		position,
		orientation,

		// Features
		showIcons,
		showValues,
		interactive,
		followCursor,
		showArrow,
		multiValue,
		allowMultiSelect,
		showSelectAll,
		searchable,

		// Styling
		spacing,
		size,

		// Callbacks
		onSeriesToggle,
		onFilterChange,
		onTooltipShow,
		onTooltipHide,

		...restProps
	} = props;

	// Configuration Resolution
	const baseConfig = getChartConfig(kind);
	const config: ChartConfiguration = {
		...baseConfig,
		variant: variant || baseConfig.variant,
		position: position || baseConfig.position,
		orientation: orientation || baseConfig.orientation,
		showIcons:
			showIcons !== undefined ? showIcons : (
				baseConfig.showIcons
			),
		showValues:
			showValues !== undefined ? showValues : (
				baseConfig.showValues
			),
		interactive:
			interactive !== undefined ? interactive : (
				baseConfig.interactive
			),
		followCursor:
			followCursor !== undefined ? followCursor : (
				baseConfig.followCursor
			),
		showArrow:
			showArrow !== undefined ? showArrow : (
				baseConfig.showArrow
			),
		multiValue:
			multiValue !== undefined ? multiValue : (
				baseConfig.multiValue
			),
		allowMultiSelect:
			allowMultiSelect !== undefined ?
				allowMultiSelect
			:	baseConfig.allowMultiSelect,
		showSelectAll:
			showSelectAll !== undefined ? showSelectAll : (
				baseConfig.showSelectAll
			),
		searchable:
			searchable !== undefined ? searchable : (
				baseConfig.searchable
			),
		spacing: spacing || baseConfig.spacing,
		size: size || baseConfig.size,
	};

	// State Management
	const [selectedSeries, setSelectedSeries] = useState<
		string[]
	>(dataSeries.filter((s) => s.visible).map((s) => s.id));
	const [searchTerm, setSearchTerm] = useState('');

	// Event Handlers
	const handleSeriesToggle = (seriesId: string) => {
		if (!config.interactive) return;

		const series = dataSeries.find(
			(s) => s.id === seriesId
		);
		if (!series) return;

		const newVisible = !series.visible;
		series.visible = newVisible;

		if (config.allowMultiSelect) {
			const newSelected =
				newVisible ?
					[...selectedSeries, seriesId]
				:	selectedSeries.filter((id) => id !== seriesId);
			setSelectedSeries(newSelected);
			onFilterChange?.(newSelected);
		} else {
			setSelectedSeries([seriesId]);
			onFilterChange?.([seriesId]);
		}

		onSeriesToggle?.(seriesId, newVisible);
	};

	const handleSelectAll = () => {
		const allVisible = dataSeries.every((s) => s.visible);
		dataSeries.forEach((s) => (s.visible = !allVisible));
		const newSelected =
			allVisible ? [] : dataSeries.map((s) => s.id);
		setSelectedSeries(newSelected);
		onFilterChange?.(newSelected);
	};

	// CSS Classes
	const chartClasses = [
		styles.chart,
		styles[`chart--${config.kind}`],
		styles[`chart--${config.variant}`],
		styles[`chart--${config.position}`],
		config.orientation &&
			styles[`chart--${config.orientation}`],
		config.spacing &&
			styles[`chart--spacing-${config.spacing}`],
		config.size && styles[`chart--size-${config.size}`],
		className,
	]
		.filter(Boolean)
		.join(' ');

	// Render Functions
	const renderLegendItem = (series: ChartDataSeries) => (
		<div
			key={series.id}
			className={`${styles.legend__item} ${
				series.visible ? styles['legend__item--active'] : ''
			}`}
			onClick={() => handleSeriesToggle(series.id)}
		>
			{config.showIcons && (
				<div
					className={styles.legend__icon}
					style={{ backgroundColor: series.color }}
				>
					{series.icon}
				</div>
			)}
			<span className={styles.legend__label}>
				{series.label}
			</span>
			{config.showValues && series.data && (
				<span className={styles.legend__value}>
					{series.data.length}
				</span>
			)}
		</div>
	);

	const renderFilterControls = () => {
		if (!config.kind.includes('filter')) return null;

		const filteredSeries =
			config.searchable && searchTerm ?
				dataSeries.filter((s) =>
					s.label
						.toLowerCase()
						.includes(searchTerm.toLowerCase())
				)
			:	dataSeries;

		return (
			<div className={styles.filter}>
				{config.searchable && (
					<input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className={styles.filter__search}
					/>
				)}

				{config.showSelectAll && (
					<button
						onClick={handleSelectAll}
						className={styles.filter__select_all}
					>
						{dataSeries.every((s) => s.visible) ?
							'Deselect All'
						:	'Select All'}
					</button>
				)}

				<div className={styles.filter__items}>
					{filteredSeries.map((series) => (
						<label
							key={series.id}
							className={styles.filter__item}
						>
							<input
								type={
									config.allowMultiSelect ? 'checkbox' : (
										'radio'
									)
								}
								checked={series.visible}
								onChange={() =>
									handleSeriesToggle(series.id)
								}
							/>
							<span style={{ color: series.color }}>
								{series.label}
							</span>
						</label>
					))}
				</div>
			</div>
		);
	};

	const renderTooltip = () => {
		if (!config.kind.includes('tooltip')) return null;

		return (
			<div className={styles.tooltip}>
				{config.showArrow && (
					<div className={styles.tooltip__arrow} />
				)}
				<div className={styles.tooltip__content}>
					{children || 'Tooltip content'}
				</div>
			</div>
		);
	};

	const renderChartControls = () => {
		if (
			!config.kind.includes('controls') &&
			!config.kind.includes('zoom')
		)
			return null;

		return (
			<div className={styles.controls}>
				{config.kind.includes('zoom') && (
					<>
						<button className={styles.controls__button}>
							+
						</button>
						<button className={styles.controls__button}>
							-
						</button>
						<button className={styles.controls__button}>
							Reset
						</button>
					</>
				)}
				{config.kind.includes('time-range') && (
					<select className={styles.controls__select}>
						<option>Last 7 days</option>
						<option>Last 30 days</option>
						<option>Last 90 days</option>
					</select>
				)}
			</div>
		);
	};

	// Main Render
	return (
		<div {...restProps} ref={ref} className={chartClasses}>
			{config.kind.includes('legend') && (
				<div className={styles.legend}>
					{dataSeries.map(renderLegendItem)}
				</div>
			)}

			{renderFilterControls()}
			{renderTooltip()}
			{renderChartControls()}

			{children}
		</div>
	);
});

UnifiedChart.displayName = 'UnifiedChart';
export default memo(UnifiedChart);
