import React from 'react';
import { Icons } from '../../components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ICONS_LIST } from '../../components/Icons/configurations';

const meta: Meta<typeof Icons> = {
	title: 'Icons/Icons',
	component: Icons,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'select',
			options: ICONS_LIST,
			description: 'Icon name',
		},
		size: {
			control: 'number',
			description: 'Icon size (px)',
		},
		color: {
			control: 'color',
			description: 'Icon color',
		},
		className: {
			control: 'text',
			description: 'Custom className',
		},
	},
};
export default meta;
type Story = StoryObj<typeof Icons>;

export const Playground: Story = {
	args: {
		name: 'check',
		size: 32,
		color: '#2563eb',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Use controls to preview any icon, size, and color.',
			},
		},
	},
};

export const AllIcons: Story = {
	render: (args) => (
		<div
			style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}
		>
			{ICONS_LIST.map((name) => (
				<div
					key={name}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: 80,
					}}
				>
					<Icons name={name} size={32} color='#2563eb' />
					<span style={{ fontSize: 12, marginTop: 8 }}>
						{name}
					</span>
				</div>
			))}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'All available icons in the system.',
			},
		},
	},
};
