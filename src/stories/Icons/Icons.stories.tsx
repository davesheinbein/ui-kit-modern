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

export const CustomSVG: Story = {
	render: (args) => (
		<div
			style={{
				display: 'flex',
				gap: 40,
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Icons
					svg={
						<svg
							width='32'
							height='32'
							viewBox='0 0 32 32'
							fill='none'
						>
							<circle
								cx='16'
								cy='16'
								r='14'
								stroke='#2563eb'
								strokeWidth='4'
							/>
							<path
								d='M10 16l4 4 8-8'
								stroke='#2563eb'
								strokeWidth='3'
								fill='none'
							/>
						</svg>
					}
					aria-label='Custom checkmark circle'
				/>
				<span style={{ fontSize: 12, marginTop: 8 }}>
					React SVG Element
				</span>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Icons
					svg={`<svg width='32' height='32' viewBox='0 0 32 32' fill='none'><rect x='4' y='4' width='24' height='24' rx='6' fill='white' stroke='#2563eb' stroke-width='4'/><circle cx='16' cy='16' r='6' fill='#2563eb'/></svg>`}
					title='Custom SVG string'
				/>
				<span style={{ fontSize: 12, marginTop: 8 }}>
					SVG String
				</span>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'You can render custom SVGs by passing a React element to the `svg` prop, or an SVG string. Accessibility is supported via `aria-label` or `title`. For decorative icons, omit these props to set `aria-hidden`.',
			},
		},
	},
};

// Add expanded docs after meta definition
const docsDescription = `
**Accessibility**

- If you provide \`aria-label\` or \`title\`, the icon will have \`role="img"\` and be announced by screen readers.
- If neither is provided, the icon is marked \`aria-hidden="true"\` and ignored by assistive tech.
- For decorative icons, omit \`aria-label\` and \`title\`.
- For semantic icons, always provide a label or title.

**Custom SVGs**

- Pass a React element to the \`svg\` prop for custom icons.
- Or pass an SVG string to the \`svg\` prop.
- Both approaches support accessibility props.
- See the \`CustomSVG\` story for examples.
`;
if (!meta.parameters) meta.parameters = {};
if (!meta.parameters.docs) meta.parameters.docs = {};
if (!meta.parameters.docs.description)
	meta.parameters.docs.description = {};
meta.parameters.docs.description.component =
	docsDescription;
