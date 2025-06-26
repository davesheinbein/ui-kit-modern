import React from 'react';
import { Forms } from '../../components/Forms';
import { commonDecorators } from '../config/decorators';

export default {
	title: 'Forms/Forms',
	component: Forms,
	decorators: commonDecorators,
	tags: ['autodocs'],
};

const fields = [
	{
		kind: 'input',
		name: 'username',
		label: 'Username',
		required: true,
	},
	{
		kind: 'input',
		name: 'email',
		label: 'Email',
		type: 'email',
		required: true,
	},
	{ kind: 'textarea', name: 'bio', label: 'Bio' },
	{
		kind: 'select',
		name: 'role',
		label: 'Role',
		options: [
			{ value: 'user', label: 'User' },
			{ value: 'admin', label: 'Admin' },
		],
		required: true,
	},
	{
		kind: 'checkbox',
		name: 'subscribe',
		label: 'Subscribe to newsletter',
	},
	{
		kind: 'radio',
		name: 'gender',
		label: 'Gender',
		options: [
			{ value: 'male', label: 'Male' },
			{ value: 'female', label: 'Female' },
			{ value: 'other', label: 'Other' },
		],
	},
	{
		kind: 'switch',
		name: 'darkMode',
		label: 'Enable Dark Mode',
	},
	{
		kind: 'range',
		name: 'age',
		label: 'Age',
		min: 0,
		max: 100,
		step: 1,
	},
] as const;

export const Default = () => (
	<Forms
		fields={
			fields as unknown as import('../../components/Forms').FormsFieldConfig[]
		}
		onSubmit={(data) =>
			alert(JSON.stringify(data, null, 2))
		}
	/>
);
