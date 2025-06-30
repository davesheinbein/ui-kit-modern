import React, { useState, useMemo } from 'react';
import { Searchbar } from '../../components/Searchbars';
import { Filters } from '../../components/Filters';
import { Table } from '../../components/Table';
import { mockFriends } from '../mocks';
import type { Meta, StoryObj } from '@storybook/react';
import { commonDecorators } from '../config/decorators';
import type { FilterMode } from '../../components/Filters/configurations';

const meta: Meta<typeof Searchbar> = {
	title: 'Searchbars/Searchbar',
	component: Searchbar,
	decorators: commonDecorators,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'default',
				'minimal',
				'outlined',
				'filled',
				'underlined',
			],
			description: 'Visual style variant',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Input size',
		},
		clearable: { control: 'boolean' },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		debounce: {
			control: 'number',
			description: 'Debounce ms',
		},
		placeholder: { control: 'text' },
	},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
	render: (args) => {
		const [value, setValue] = useState('');
		return (
			<Searchbar
				{...args}
				value={value}
				onChange={setValue}
				onSearch={(v) => {
					// eslint-disable-next-line no-console
					console.log('Search:', v);
				}}
			/>
		);
	},
	args: {
		placeholder: 'Search users...',
		variant: 'default',
		size: 'medium',
		clearable: true,
		loading: false,
		disabled: false,
		debounce: 0,
	},
};

export const Variants: Story = {
	render: () => {
		const [value, setValue] = useState('');
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 16,
				}}
			>
				{[
					'default',
					'minimal',
					'outlined',
					'filled',
					'underlined',
				].map((variant) => (
					<Searchbar
						key={variant}
						value={value}
						onChange={setValue}
						placeholder={`Search (${variant})`}
						variant={variant as any}
						clearable
					/>
				))}
			</div>
		);
	},
};

export const Sizes: Story = {
	render: () => {
		const [value, setValue] = useState('');
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 16,
				}}
			>
				{['small', 'medium', 'large'].map((size) => (
					<Searchbar
						key={size}
						value={value}
						onChange={setValue}
						placeholder={`Search (${size})`}
						size={size as any}
						clearable
					/>
				))}
			</div>
		);
	},
};

export const Debounced: Story = {
	render: () => {
		const [value, setValue] = useState('');
		const [search, setSearch] = useState('');
		return (
			<div style={{ maxWidth: 400 }}>
				<Searchbar
					value={value}
					onChange={setValue}
					onSearch={setSearch}
					placeholder='Debounced search (500ms)'
					debounce={500}
					clearable
				/>
				<div style={{ marginTop: 16, color: '#888' }}>
					<strong>Debounced value:</strong> {search}
				</div>
			</div>
		);
	},
};

export const FilterAndSearch: Story = {
	render: () => {
		// Table columns
		const columns = [
			{ key: 'name', label: 'Name' },
			{ key: 'status', label: 'Status' },
			{ key: 'lastSeen', label: 'Last Seen' },
		];

		// Filter config
		const filterConfig = [
			{
				key: 'status',
				label: 'Status',
				options: [
					{ label: 'All', value: '' },
					{ label: 'Online', value: 'online' },
					{ label: 'Away', value: 'away' },
					{ label: 'Offline', value: 'offline' },
				],
				mode: 'single' as FilterMode,
				defaultValue: '',
			},
		];

		const [filterValue, setFilterValue] = useState<
			Record<string, string | string[]>
		>({ status: '' });
		const [search, setSearch] = useState('');

		// Filter and search logic
		const filteredData = useMemo(() => {
			let data = mockFriends;
			if (filterValue.status) {
				data = data.filter(
					(row) => row.status === filterValue.status
				);
			}
			if (search) {
				const s = search.toLowerCase();
				data = data.filter(
					(row) =>
						row.name.toLowerCase().includes(s) ||
						row.status.toLowerCase().includes(s) ||
						row.lastSeen.toLowerCase().includes(s)
				);
			}
			return data;
		}, [filterValue, search]);

		const handleFilterChange = (
			value: Record<string, string | string[]>
		) => {
			setFilterValue(value);
		};

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 16,
				}}
			>
				<div style={{ display: 'flex', gap: 16 }}>
					<Filters
						filters={filterConfig}
						value={filterValue}
						onChange={handleFilterChange}
						layout='top'
					/>
					<Searchbar
						value={search}
						onChange={setSearch}
						placeholder='Search friends...'
						clearable
						style={{ minWidth: 240 }}
					/>
				</div>
				<Table
					kind='data-table'
					columns={columns}
					data={filteredData}
					variant='default'
					layout='auto'
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Table with integrated Filter and Searchbar. Filter by status and search by any field.',
			},
		},
	},
};
