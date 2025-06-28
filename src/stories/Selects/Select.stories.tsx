import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/Selects/Select';
import { selectDecorators } from '../config/decorators';
import {
	basicOptions,
	categories,
	detailedOptions,
	dateRanges,
} from '../mocks';

const meta: Meta<typeof Select> = {
	title: 'Selects/Select',
	component: Select,
	decorators: selectDecorators,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive select dropdown component with search, multiselect, and various specialized configurations.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'dropdown',
				'multiselect',
				'searchable',
				'custom',
			],
			description: 'The style/behavior of the select',
		},
		searchable: {
			control: 'boolean',
			description: 'Enable search input',
		},
		clearable: {
			control: 'boolean',
			description: 'Allow clearing the selection',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the select is disabled',
		},
		loading: {
			control: 'boolean',
			description: 'Whether the select is in loading state',
		},
		required: {
			control: 'boolean',
			description: 'Whether the select is required',
		},
		label: {
			control: 'text',
			description: 'The label for the select',
		},
		helpText: {
			control: 'text',
			description: 'Help text to display below the select',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the select',
		},
		searchPlaceholder: {
			control: 'text',
			description: 'Placeholder for the search input',
		},
		loadingMessage: {
			control: 'text',
			description: 'Message to show while loading',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// DRY: Story factory
const createStory = (
	args: Partial<React.ComponentProps<typeof Select>>
): Story => ({ args });

export const Dropdown: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Dropdown'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Dropdown (Filter)'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Dropdown (Searchable)'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Dropdown (Searchable + Filter)'
					searchable
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Dropdown Select variations side by side.',
			},
		},
	},
};

export const Multiselect: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='multiselect'
					options={categories}
					label='Multiselect'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='multiselect'
					options={categories}
					label='Multiselect (Filter)'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='multiselect'
					options={categories}
					label='Multiselect (Searchable)'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='multiselect'
					options={categories}
					label='Multiselect (Searchable + Filter)'
					searchable
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Multiselect variations side by side.',
			},
		},
	},
};

export const Searchable: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={detailedOptions}
					label='Searchable'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={detailedOptions}
					label='Searchable (Filter)'
					searchable
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Searchable Select variations side by side.',
			},
		},
	},
};

export const WithError: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Required Selection'
					error='Please select an option to continue'
					required
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Required Selection (Filter)'
					error='Please select an option to continue'
					required
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Error state variations side by side.',
			},
		},
	},
};

export const Loading: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[]}
					label='Loading Options'
					loading
					helpText='Options are being loaded...'
					loadingMessage='Loading...'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[]}
					label='Loading Options (Filter)'
					loading
					helpText='Options are being loaded...'
					loadingMessage='Loading...'
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Loading state variations side by side.',
			},
		},
	},
};

export const Disabled: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Disabled Select'
					disabled
					value='option2'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Disabled Select (Filter)'
					disabled
					value='option2'
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Disabled state variations side by side.',
			},
		},
	},
};

export const DateRange: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={dateRanges}
					label='Date Range'
					defaultValue='last7days'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={dateRanges}
					label='Date Range (Filter)'
					defaultValue='last7days'
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Date range variations side by side.',
			},
		},
	},
};

export const WithFilter: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='With Filter'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='With Filter (Searchable)'
					filter
					searchable
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Filter dropdown variations side by side.',
			},
		},
	},
};

// === ALL VARIANTS SIDE-BY-SIDE ===
const allOptions = {
	basic: basicOptions,
	detailed: detailedOptions,
	categories,
	dateRanges,
};

export const AllVariants: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={basicOptions}
					label='Dropdown'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='multiselect'
					options={categories}
					label='Multiselect'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={detailedOptions}
					label='Searchable'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='With Filter'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={allOptions.basic}
					label='With Error'
					error='Please select an option to continue'
					required
					helpText='with error'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={[]}
					label='Loading'
					loading
					helpText='loading'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={allOptions.basic}
					label='Disabled'
					disabled
					value='option2'
					helpText='disabled'
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					variant='dropdown'
					options={allOptions.dateRanges}
					label='Date Range'
					defaultValue='last7days'
					helpText='date range'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All Select variants rendered side-by-side for visual comparison.',
			},
		},
	},
};

// Add CSS for the grid layout (for Storybook only)
if (typeof document !== 'undefined') {
	const style = document.createElement('style');
	style.innerHTML = `
		.all-variants-grid {
			display: flex;
			flex-wrap: wrap;
			gap: 32px;
		}
		.all-variants-cell {
			min-width: 260px;
			flex: 1 1 260px;
			box-sizing: border-box;
		}
	`;
	document.head.appendChild(style);
}

export const SizeComparison: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Select
					size='small'
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='Small'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					size='medium'
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='Medium'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Select
					size='large'
					variant='dropdown'
					options={[
						{
							label: 'Apple',
							value: 'apple',
							numericValue: 5,
						},
						{
							label: 'Banana',
							value: 'banana',
							numericValue: 2,
						},
						{
							label: 'Cherry',
							value: 'cherry',
							numericValue: 8,
						},
						{
							label: 'Date',
							value: 'date',
							numericValue: 1,
						},
						{
							label: 'Elderberry',
							value: 'elderberry',
							numericValue: 10,
						},
					]}
					label='Large'
					filter
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All Select sizes (small, medium, large) rendered side-by-side for visual comparison.',
			},
		},
	},
};
