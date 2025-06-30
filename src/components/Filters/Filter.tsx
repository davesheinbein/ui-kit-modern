import React, { useState, useMemo } from 'react';
import styles from './filter.module.scss';
import type {
	FilterConfig,
	FilterOption,
	FilterLayout,
	FilterMode,
} from './configurations';
import { Wrapper } from '../Wrappers';
import { Button } from '../Button';

export interface FiltersProps {
	filters: FilterConfig[];
	value: Record<string, string | string[]>;
	onChange: (
		value: Record<string, string | string[]>
	) => void;
	layout?: FilterLayout; // 'top' | 'side' | 'modal' | 'context'
	collapsible?: boolean;
	collapsed?: boolean;
	modalOpen?: boolean;
	onModalToggle?: (open: boolean) => void;
	dynamic?: boolean;
	className?: string;
	style?: React.CSSProperties;
	// ...other props as needed
}

const Filters: React.FC<FiltersProps> = ({
	filters,
	value,
	onChange,
	layout = 'top',
	collapsible = false,
	collapsed = false,
	modalOpen = false,
	onModalToggle,
	dynamic = false,
	className = '',
	style,
	...props
}) => {
	const [internalCollapsed, setInternalCollapsed] =
		useState(collapsed);
	const [internalModalOpen, setInternalModalOpen] =
		useState(modalOpen);

	const handleCollapseToggle = () => {
		if (collapsible) setInternalCollapsed((c) => !c);
	};

	const handleModalToggle = () => {
		if (onModalToggle) onModalToggle(!internalModalOpen);
		else setInternalModalOpen((open) => !open);
	};

	const handleChange = (
		key: string,
		val: string | string[]
	) => {
		onChange({ ...value, [key]: val });
	};

	const handleAddFilter = () => {
		if (!dynamic) return;
		// Example: Add a blank filter (extend as needed)
		const newKey = `filter_${Object.keys(value).length + 1}`;
		onChange({ ...value, [newKey]: '' });
	};

	const handleRemoveFilter = (key: string) => {
		if (!dynamic) return;
		const newValue = { ...value };
		delete newValue[key];
		onChange(newValue);
	};

	const renderFilter = (filter: FilterConfig) => {
		const {
			key,
			label,
			options,
			mode = 'single',
			placeholder,
			...rest
		} = filter;
		const filterValue =
			value[key] ?? (mode === 'multi' ? [] : '');
		return (
			<Wrapper
				key={key}
				direction='column'
				gap={2}
				className={styles.filterItem}
			>
				<label className={styles.filterLabel}>
					{label}
				</label>
				{mode === 'multi' ?
					<select
						multiple
						value={filterValue as string[]}
						onChange={(e) => {
							const vals = Array.from(
								e.target.selectedOptions
							).map((o) => o.value);
							handleChange(key, vals);
						}}
						className={styles.filterSelect}
					>
						{options.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				:	<select
						value={filterValue as string}
						onChange={(e) =>
							handleChange(key, e.target.value)
						}
						className={styles.filterSelect}
					>
						<option value=''>{placeholder || 'All'}</option>
						{options.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</select>
				}
				{dynamic && (
					<Button
						kind='danger'
						size='small'
						onClick={() => handleRemoveFilter(key)}
						style={{ marginTop: 4 }}
					>
						Remove
					</Button>
				)}
			</Wrapper>
		);
	};

	const filterList = useMemo(
		() => filters.map(renderFilter),
		[filters, value]
	);

	const content = (
		<Wrapper
			direction='row'
			gap={4}
			className={className}
			style={style}
		>
			{filterList}
			{dynamic && (
				<Button
					kind='primary'
					size='small'
					onClick={handleAddFilter}
					style={{ alignSelf: 'flex-end' }}
				>
					Add Filter
				</Button>
			)}
		</Wrapper>
	);

	if (layout === 'modal') {
		return (
			<>
				<button
					type='button'
					className={styles.openModalBtn}
					onClick={handleModalToggle}
				>
					Open Filters
				</button>
				{(onModalToggle ? modalOpen : (
					internalModalOpen
				)) && (
					<div className={styles.modalOverlay}>
						<div className={styles.modalContent}>
							<button
								type='button'
								className={styles.closeModalBtn}
								onClick={handleModalToggle}
							>
								Close
							</button>
							{content}
						</div>
					</div>
				)}
			</>
		);
	}

	return content;
};

export default Filters;
