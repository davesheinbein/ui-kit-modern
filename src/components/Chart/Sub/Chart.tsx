import React, {
	forwardRef,
	useState,
	useMemo,
} from 'react';
import clsx from 'clsx';
import { Wrapper } from '../../Wrappers';
import {
	renderWidget,
	WidgetType,
} from './ChartWidgetRenderer'; // Remove .tsx extension for compatibility
import ChartLegend from './ChartLegend';
import { ChartProps } from './Chart.types';
import styles from '../chart.module.scss';

const Chart = forwardRef<HTMLDivElement, ChartProps>(
	(props, ref) => {
		const {
			showLegend = true,
			showFilter = false,
			showSearch = false,
			kind,
			chartId,
			children,
			className,
			dataSeries = [],
			variant = 'default',
			position,
			orientation,
			showIcons,
			showValues,
			interactive,
			followCursor,
			showArrow,
			multiValue,
			allowMultiSelect,
			showSelectAll,
			searchable,
			spacing = 'normal',
			size = 'medium',
			onSeriesToggle,
			onFilterChange,
			onTooltipShow,
			onTooltipHide,
			chartType = 'kpi',
			color,
			scorecardIcon,
			deltaUpIcon,
			deltaDownIcon,
			widgetSize,
			legendOrientation = 'horizontal',
			...restProps
		} = props;

		const [search, setSearch] = useState('');
		const [sort, setSort] = useState('alpha');

		const filteredDataSeries = useMemo(() => {
			let items = [...dataSeries]; // Always start with a clone to avoid mutating props
			if (showSearch && search) {
				items = items.filter((item: any) =>
					item.label
						.toLowerCase()
						.includes(search.toLowerCase())
				);
			}
			// Sort should not depend on showFilter
			if (sort === 'alpha') {
				items.sort((a, b) =>
					a.label.localeCompare(b.label)
				);
			} else if (sort === 'reverse-alpha') {
				items.sort((a, b) =>
					b.label.localeCompare(a.label)
				);
			} else if (sort === 'value-asc') {
				items.sort(
					(a, b) =>
						(a.data?.[0]?.value ?? 0) -
						(b.data?.[0]?.value ?? 0)
				);
			} else if (sort === 'value-desc') {
				items.sort(
					(a, b) =>
						(b.data?.[0]?.value ?? 0) -
						(a.data?.[0]?.value ?? 0)
				);
			}
			return items;
		}, [dataSeries, search, sort, showSearch, showFilter]);

		const [selectedSeries, setSelectedSeries] = useState(
			filteredDataSeries && filteredDataSeries.length > 0 ?
				filteredDataSeries[0].id
			:	null
		);
		const handleSelectSeries = (id: string) =>
			setSelectedSeries(id);
		const widgetData =
			(
				filteredDataSeries &&
				filteredDataSeries.length > 0 &&
				selectedSeries
			) ?
				[
					filteredDataSeries.find(
						(ds: any) => ds.id === selectedSeries
					) ?? filteredDataSeries[0],
				]
			:	[];

		return (
			<Wrapper
				ref={ref}
				className={clsx(
					'chart',
					`chart--${variant}`,
					`chart--${size}`,
					legendOrientation === 'vertical' &&
						'chart--legend-vertical',
					showFilter && 'chart--with-filters',
					className
				)}
				data-chart-type={chartType}
				style={{
					backgroundColor: props.backgroundColor,
					borderColor: props.borderColor,
					borderWidth: props.borderWidth,
					borderRadius: props.borderRadius,
					boxShadow: props.boxShadow,
					padding: props.padding,
					margin: props.margin,
					width: props.width,
					height: props.height,
					minWidth: props.minWidth,
					minHeight: props.minHeight,
					maxWidth: props.maxWidth,
					maxHeight: props.maxHeight,
					fontSize: props.fontSize,
					fontFamily: props.fontFamily,
					color: props.color,
					...(props.style || {}),
				}}
				w={props.w}
				h={props.h}
				minW={props.minW}
				minH={props.minH}
				maxW={props.maxW}
				maxH={props.maxH}
				{...restProps}
			>
				{renderWidget(chartType as WidgetType, {
					dataSeries: widgetData,
					styles,
					color,
					scorecardIcon,
					deltaUpIcon,
					deltaDownIcon,
					widgetSize: size,
					size,
					variant,
					orientation,
					...restProps,
				})}
				{showLegend &&
					filteredDataSeries &&
					filteredDataSeries.length > 0 && (
						<ChartLegend
							dataSeries={filteredDataSeries}
							legendOrientation={legendOrientation}
							size={size}
							variant={variant}
							selectedSeries={selectedSeries}
							onSelectSeries={handleSelectSeries}
							showFilter={showFilter}
							showSearch={showSearch}
							search={search}
							setSearch={setSearch}
							sort={sort}
							setSort={setSort}
							{...restProps}
						/>
					)}
				{children}
			</Wrapper>
		);
	}
);

Chart.displayName = 'Chart';
export default React.memo(Chart);
