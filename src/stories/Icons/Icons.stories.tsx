import React from 'react';
import { Icons } from '../../components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ICONS_LIST } from '../../components/Icons/configurations';
import { ICONS_ALL_LIST } from '../../components/Icons/Sub/IconMap';
import { commonDecorators } from '../config/decorators';

const meta: Meta<typeof Icons> = {
	title: 'Icons/Icons',
	component: Icons,
	decorators: commonDecorators,
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
		sizeVariant: {
			control: 'select',
			options: ['small', 'medium', 'large', 's', 'm', 'l'],
			description:
				'Icon size variant (uses CSS class, not inline size)',
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
			{ICONS_ALL_LIST.map((name) => (
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
					<span
						style={{
							fontSize: 12,
							marginTop: 8,
							textAlign: 'center',
							wordBreak: 'break-all',
						}}
					>
						{name}
					</span>
				</div>
			))}
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'All available icons in the system, each labeled by name.',
			},
		},
	},
};

export const SizeVariants: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: 40,
				alignItems: 'center',
			}}
		>
			{(['small', 'medium', 'large'] as const).map(
				(sizeVariant) => (
					<div
						key={sizeVariant}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Icons
							name={args.name || 'check'}
							sizeVariant={sizeVariant}
							color='#2563eb'
						/>
						<span style={{ fontSize: 12, marginTop: 8 }}>
							{sizeVariant}
						</span>
					</div>
				)
			)}
		</div>
	),
	args: {
		name: 'check',
	},
	parameters: {
		docs: {
			description: {
				story:
					'Showcases the visual difference between small, medium, and large sizeVariant (with no size prop).',
			},
		},
	},
};
