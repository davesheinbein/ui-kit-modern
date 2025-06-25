import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/Selects';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Select> = {
	title: 'Selects/Select',
	component: Select,
	decorators: commonDecorators,
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
		kind: {
			control: 'select',
			options: [
				'dropdown',
				'multiselect',
				'autocomplete',
				'searchable-dropdown',
				'country-selector',
				'timezone-selector',
				'language-selector',
				'category-filter',
				'tag-selector',
				'user-picker',
				'date-range',
				'custom',
			],
			description: 'The type of select component to render',
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
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options for stories
const basicOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
	{ value: 'option4', label: 'Option 4' },
];

const detailedOptions = [
	{
		value: 'frontend',
		label: 'Frontend Developer',
		description: 'HTML, CSS, JavaScript, React',
	},
	{
		value: 'backend',
		label: 'Backend Developer',
		description: 'Node.js, Python, Java, Databases',
	},
	{
		value: 'fullstack',
		label: 'Full Stack Developer',
		description: 'Frontend and Backend technologies',
	},
	{
		value: 'mobile',
		label: 'Mobile Developer',
		description: 'iOS, Android, React Native, Flutter',
	},
	{
		value: 'devops',
		label: 'DevOps Engineer',
		description: 'CI/CD, Docker, Kubernetes, Cloud',
	},
];

const countries = [
	{ value: 'us', label: 'United States' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'jp', label: 'Japan' },
	{ value: 'au', label: 'Australia' },
	{ value: 'br', label: 'Brazil' },
	{ value: 'in', label: 'India' },
	{ value: 'cn', label: 'China' },
];

const categories = [
	{ value: 'tech', label: 'Technology' },
	{ value: 'design', label: 'Design' },
	{ value: 'business', label: 'Business' },
	{ value: 'marketing', label: 'Marketing' },
	{ value: 'sales', label: 'Sales' },
	{ value: 'support', label: 'Support' },
];

const tags = [
	{ value: 'javascript', label: 'JavaScript' },
	{ value: 'typescript', label: 'TypeScript' },
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue.js' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'nodejs', label: 'Node.js' },
	{ value: 'python', label: 'Python' },
	{ value: 'css', label: 'CSS' },
	{ value: 'html', label: 'HTML' },
];

const users = [
	{
		value: 'john',
		label: 'John Doe',
		description: 'john.doe@example.com',
	},
	{
		value: 'jane',
		label: 'Jane Smith',
		description: 'jane.smith@example.com',
	},
	{
		value: 'bob',
		label: 'Bob Johnson',
		description: 'bob.johnson@example.com',
	},
	{
		value: 'alice',
		label: 'Alice Brown',
		description: 'alice.brown@example.com',
	},
];

export const Dropdown: Story = {
	args: {
		kind: 'dropdown',
		options: basicOptions,
		label: 'Choose an option',
		helpText: 'Select one option from the dropdown',
	},
};

export const Multiselect: Story = {
	args: {
		kind: 'multiselect',
		options: categories,
		label: 'Categories',
		helpText: 'Select one or more categories',
	},
};

export const Autocomplete: Story = {
	args: {
		kind: 'autocomplete',
		options: detailedOptions,
		label: 'Job Role',
		helpText: 'Type to search for job roles',
	},
};

export const SearchableDropdown: Story = {
	args: {
		kind: 'searchable-dropdown',
		options: detailedOptions,
		label: 'Developer Role',
		helpText: 'Search or select from the dropdown',
	},
};

export const CountrySelector: Story = {
	args: {
		kind: 'country-selector',
		options: countries,
		label: 'Country',
		required: true,
	},
};

export const TagSelector: Story = {
	args: {
		kind: 'tag-selector',
		options: tags,
		label: 'Skills',
		helpText: 'Add your programming skills',
	},
};

export const UserPicker: Story = {
	args: {
		kind: 'user-picker',
		options: users,
		label: 'Assign to',
		helpText: 'Search and select a user',
	},
};

export const CategoryFilter: Story = {
	args: {
		kind: 'category-filter',
		options: categories,
		label: 'Filter by Categories',
		helpText: 'Select categories to filter results',
	},
};

export const WithError: Story = {
	args: {
		kind: 'dropdown',
		options: basicOptions,
		label: 'Required Selection',
		error: 'Please select an option to continue',
		required: true,
	},
};

export const Loading: Story = {
	args: {
		kind: 'searchable-dropdown',
		options: [],
		label: 'Loading Options',
		loading: true,
		helpText: 'Options are being loaded...',
	},
};

export const Disabled: Story = {
	args: {
		kind: 'dropdown',
		options: basicOptions,
		label: 'Disabled Select',
		disabled: true,
		value: 'option2',
	},
};

export const DateRange: Story = {
	args: {
		kind: 'date-range',
		options: [
			{ value: 'today', label: 'Today' },
			{ value: 'yesterday', label: 'Yesterday' },
			{ value: 'last7days', label: 'Last 7 days' },
			{ value: 'last30days', label: 'Last 30 days' },
			{ value: 'last90days', label: 'Last 90 days' },
			{ value: 'custom', label: 'Custom range' },
		],
		label: 'Date Range',
		defaultValue: 'last7days',
	},
};
