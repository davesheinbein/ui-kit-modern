import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../../components/Loading';
import type { LoadingProps } from '../../components/Loading';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Loading> = {
	title: 'Feedback/Loading',
	component: Loading,
	decorators: commonDecorators,
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'spinner',
				'dots',
				'bar',
				'skeleton',
				'custom',
			],
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
		color: { control: 'color' },
		message: { control: 'text' },
	},
};
export default meta;
type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
	args: {
		kind: 'spinner',
		size: 'md',
		message: 'Loading...',
	},
};

export const Dots: Story = {
	args: {
		kind: 'dots',
		size: 'md',
		message: 'Please wait',
	},
};

export const Bar: Story = {
	args: {
		kind: 'bar',
		size: 'md',
		message: 'Processing',
	},
};

export const Skeleton: Story = {
	args: {
		kind: 'skeleton',
		size: 'md',
		message: 'Loading content',
	},
};

export const AllVariants: Story = {
	render: (args) => (
		<div style={{ display: 'flex', gap: 32 }}>
			<div>
				<Loading
					kind='spinner'
					size='md'
					message='Spinner'
				/>
			</div>
			<div>
				<Loading kind='dots' size='md' message='Dots' />
			</div>
			<div>
				<Loading kind='bar' size='md' message='Bar' />
			</div>
			<div>
				<Loading
					kind='skeleton'
					size='md'
					message='Skeleton'
				/>
			</div>
		</div>
	),
};
