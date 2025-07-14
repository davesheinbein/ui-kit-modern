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
import FilterItem from './Sub/FilterItem';
import FilterModal from './Sub/FilterModal';
import FilterCollapse from './Sub/FilterCollapse';
import FilterAddRemove from './Sub/FilterAddRemove';

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

	const filterList = useMemo(
		() =>
			filters.map((filter) => (
				<FilterItem
					key={filter.key}
					filter={filter}
					value={
						value[filter.key] ??
						(filter.mode === 'multi' ? [] : '')
					}
					onChange={(val) => handleChange(filter.key, val)}
				/>
			)),
		[filters, value]
	);

	const addRemove =
		dynamic ?
			<FilterAddRemove
				onAdd={handleAddFilter}
				onRemove={handleRemoveFilter}
				filterKeys={Object.keys(value)}
			/>
		:	null;

	const content = (
		<Wrapper
			direction='row'
			gap={4}
			className={className}
			style={style}
		>
			{filterList}
			{addRemove}
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
				<FilterModal
					open={
						onModalToggle ? modalOpen : internalModalOpen
					}
					onToggle={handleModalToggle}
				>
					{content}
				</FilterModal>
			</>
		);
	}

	if (collapsible) {
		return (
			<FilterCollapse
				collapsed={internalCollapsed}
				onToggle={handleCollapseToggle}
			>
				{content}
			</FilterCollapse>
		);
	}

	return content;
};

export default Filters;
