import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Card } from '../../Card';
import { Wrapper } from '../../Wrappers';
import { Dropdown } from '../../Dropdown/Dropdown';
import Input from '../../Inputs/Input';
import styles from '../chart.module.scss';

interface ChartLegendProps {
	dataSeries?: any[];
	legendOrientation?: 'horizontal' | 'vertical' | 'grid';
	size?: 'small' | 'medium' | 'large';
	variant?: 'default' | 'elevated' | 'outlined' | 'filled';
	className?: string;
	selectedSeries?: any;
	onSelectSeries?: (id: any) => void;
	showFilter?: boolean;
	showSearch?: boolean;
	[key: string]: any;
}

// Map ChartVariant to Card variant
const mapToCardVariant = (
	variant: string | undefined
): 'default' | 'elevated' | 'outlined' | 'filled' => {
	switch (variant) {
		case 'elevated':
		case 'outlined':
		case 'filled':
			return variant;
		default:
			return 'default';
	}
};

const ChartLegend: React.FC<
	ChartLegendProps & {
		search?: string;
		setSearch?: (s: string) => void;
		sort?: string;
		setSort?: (s: string) => void;
	}
> = ({
	dataSeries = [],
	legendOrientation = 'horizontal',
	size = 'medium',
	variant = 'default',
	className = '',
	selectedSeries,
	onSelectSeries,
	showFilter = false,
	showSearch = false,
	search = '',
	setSearch,
	sort = 'alpha',
	setSort,
	...cardProps
}) => {
	const legendListClass = clsx(
		styles.legend,
		styles.legend__items,
		legendOrientation === 'grid' && styles.grid,
		legendOrientation === 'horizontal' && styles.horizontal,
		legendOrientation === 'vertical' && styles.vertical,
		`legend ${legendOrientation}`
	);

	return (
		<div
			className={clsx(styles.legendContainer, className)}
			{...cardProps}
		>
			{(showSearch || showFilter) && (
				<Wrapper
					className={styles.filter}
					style={{ marginBottom: 8 }}
				>
					{showSearch && setSearch && (
						<>
							<Input
								kind='search'
								id='chart-filter-search'
								className={styles.filter__search}
								type='search'
								placeholder='Search...'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								aria-label='Search legend items'
							/>
						</>
					)}
					{showFilter && setSort && (
						<div
							className={styles.legend__sortWrapper}
							style={{
								display: 'flex',
								alignItems: 'center',
								gap: 8,
								marginBottom: 12,
							}}
						>
							<label
								htmlFor='legend-sort-select'
								className={styles.legend__sortLabel}
								style={{
									fontWeight: 500,
									fontSize: 14,
									color: 'var(--chart-accent, #555)',
								}}
							>
								Sort:
							</label>
							<select
								id='legend-sort-select'
								className={clsx(
									styles.legend__sort,
									'chart-legend-sort-select'
								)}
								value={sort}
								onChange={(e) => setSort(e.target.value)}
								aria-label='Sort legend'
								style={{
									padding: '6px 24px 6px 10px',
									borderRadius: 6,
									border: '1px solid #d1d5db',
									background:
										'var(--chart-legend-bg, #fff)',
									color: '#222',
									fontSize: 14,
									appearance: 'none',
									boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
									minWidth: 110,
									cursor: 'pointer',
								}}
							>
								<option value='alpha'>A–Z</option>
								<option value='reverse-alpha'>Z–A</option>
								<option value='value-asc'>Value ↑</option>
								<option value='value-desc'>Value ↓</option>
							</select>
							<span
								style={{
									marginLeft: -22,
									pointerEvents: 'none',
									color: '#888',
									fontSize: 16,
									position: 'relative',
									top: 1,
								}}
							>
								▼
							</span>
						</div>
					)}
				</Wrapper>
			)}
			<Card
				className={clsx(
					styles.baseCard,
					cardProps.className,
					`card-size-${size}`
				)}
				size={size}
				variant={mapToCardVariant(variant)}
				shape={
					legendOrientation === 'vertical' ? 'vertical-rect'
					:	cardProps.shape
				}
			>
				<ul
					className={legendListClass}
					style={
						legendOrientation === 'vertical' ?
							{ maxHeight: 240, overflowY: 'auto' }
						:	undefined
					}
				>
					{dataSeries.map((series: any) => (
						<li
							key={series.id}
							className={clsx(
								styles.legend__item,
								selectedSeries === series.id &&
									styles['legend__item--selected']
							)}
							tabIndex={0}
							role='button'
							aria-pressed={selectedSeries === series.id}
							onClick={() =>
								onSelectSeries && onSelectSeries(series.id)
							}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									onSelectSeries &&
										onSelectSeries(series.id);
								}
							}}
						>
							<span
								className={styles.legend__marker}
								style={{ backgroundColor: series.color }}
								aria-hidden='true'
							/>
							<span className={styles.legend__label}>
								{series.label}
							</span>
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
};

export default ChartLegend;
