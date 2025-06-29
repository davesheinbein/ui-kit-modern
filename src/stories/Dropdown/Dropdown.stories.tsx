import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import {
	basicOptions,
	detailedOptions,
	categories
} from '../mocks';

const meta: Meta<typeof Dropdown> = {
	title: 'Dropdown/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive dropdown component with search, multiDropdown, and various specialized configurations. Migrated from Selects, prioritizing Selects story structure and prop coverage.',
			},
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'dropdown',
				'multiDropdown',
				'searchable',
				'custom',
			],
			description: 'The style/behavior of the dropdown',
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
			description: 'Whether the dropdown is disabled',
		},
		loading: {
			control: 'boolean',
			description:
				'Whether the dropdown is in loading state',
		},
		required: {
			control: 'boolean',
			description: 'Whether the dropdown is required',
		},
		label: {
			control: 'text',
			description: 'The label for the dropdown',
		},
		helpText: {
			control: 'text',
			description:
				'Help text to display below the dropdown',
		},
		error: {
			control: 'text',
			description: 'Error message to display',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the dropdown',
		},
		searchPlaceholder: {
			control: 'text',
			description: 'Placeholder for the search input',
		},
		loadingMessage: {
			control: 'text',
			description: 'Message to show while loading',
		},
		options: {
			control: 'object',
			description: 'Dropdown options',
		},
		value: {
			control: 'object',
			description: 'Selected value(s)',
		},
		defaultValue: {
			control: 'object',
			description: 'Default value(s)',
		},
		filter: {
			control: 'boolean',
			description: 'Enable filter dropdown',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			description: 'Dropdown size',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// DRY: Story factory
const createStory = (
	args: Partial<React.ComponentProps<typeof Dropdown>>
): Story => ({ args });

export const DropdownVariants: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Dropdown'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Dropdown (Filter)'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Dropdown (Searchable)'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='multiselect'
					options={categories}
					label='Multiselect'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='multiselect'
					options={categories}
					label='Multiselect (Filter)'
					filter
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='multiselect'
					options={categories}
					label='Multiselect (Searchable)'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='dropdown'
					options={detailedOptions}
					label='Searchable'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Required Selection'
					error='Please select an option to continue'
					required
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='dropdown'
					options={[]}
					label='Loading Options'
					loading
					helpText='Options are being loaded...'
					loadingMessage='Loading...'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Disabled Select'
					disabled
					value='option2'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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

export const WithFilter: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
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

const allOptions = {
	basic: basicOptions,
	detailed: detailedOptions,
	categories,
};

export const AllVariants: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={basicOptions}
					label='Dropdown'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='multiselect'
					options={categories}
					label='Multiselect'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={detailedOptions}
					label='Searchable'
					searchable
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
					variant='dropdown'
					options={allOptions.basic}
					label='With Error'
					error='Please select an option to continue'
					required
					helpText='with error'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={[]}
					label='Loading'
					loading
					helpText='loading'
				/>
			</div>
			<div className='all-variants-cell'>
				<Dropdown
					variant='dropdown'
					options={allOptions.basic}
					label='Disabled'
					disabled
					value='option2'
					helpText='disabled'
				/>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All Dropdown variants rendered side-by-side for visual comparison.',
			},
		},
	},
};

export const SizeComparison: Story = {
	render: () => (
		<div className='all-variants-grid'>
			<div className='all-variants-cell'>
				<Dropdown
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
				<Dropdown
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
				<Dropdown
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
					'All Dropdown sizes (small, medium, large) rendered side-by-side for visual comparison.',
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
