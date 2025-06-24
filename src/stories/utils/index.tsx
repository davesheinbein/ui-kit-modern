// Shared utilities for Storybook stories
import React from 'react';
import { Wrapper } from '../../components/Wrappers';

export const createStoryDecorator =
	(wrapperProps?: any) => (Story: any) => (
		<Wrapper
			kind='flex-container'
			direction='column'
			style={{
				padding: '1rem',
				minHeight: '400px',
				...wrapperProps,
			}}
		>
			<Story />
		</Wrapper>
	);

export const createVariantControl = (
	variants: string[]
) => ({
	control: 'select',
	options: variants,
});

export const createKindControl = (kinds: string[]) => ({
	control: 'select',
	options: kinds,
	description: 'Component kind/variant to display',
});

export const commonArgTypes = {
	variant: createVariantControl([
		'default',
		'primary',
		'secondary',
		'danger',
		'success',
		'warning',
	]),
	size: createVariantControl(['small', 'medium', 'large']),
	disabled: {
		control: 'boolean',
		description: 'Disable the component',
	},
	loading: {
		control: 'boolean',
		description: 'Show loading state',
	},
	className: {
		control: 'text',
		description: 'Additional CSS classes',
	},
};

export const createComponentMeta = (
	title: string,
	component: any,
	description: string,
	additionalArgTypes: any = {}
) => ({
	title,
	component,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: description,
			},
		},
	},
	argTypes: {
		...commonArgTypes,
		...additionalArgTypes,
	},
});

export const createFactoryStory = (
	name: string,
	factoryFn: any,
	props: any = {}
) => ({
	name: `🏭 ${name}`,
	render: () => factoryFn(props),
});

export const createPlaygroundStory = (
	name: string,
	component: any
) => ({
	name: `🎮 ${name}`,
	component,
	parameters: {
		docs: {
			description: {
				story:
					'Interactive playground for testing all component variants and configurations.',
			},
		},
	},
});
