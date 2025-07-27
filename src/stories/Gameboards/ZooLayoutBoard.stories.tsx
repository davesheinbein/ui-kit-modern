// ...existing code...
import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import ZooLayoutBoard, {
	generateSampleZooData,
	ZooEnclosure,
	ZooAnimal,
} from '../../components/Gameboards/Sub/ZooLayoutBoard';
import '../../components/Gameboards/Sub/ZooLayoutBoard.module.scss';

const meta: Meta<typeof ZooLayoutBoard> = {
	title: 'Gameboards/ZooLayoutBoard',
	component: ZooLayoutBoard,
};
export default meta;

type Story = StoryObj<typeof ZooLayoutBoard>;

const { enclosures, animals } = generateSampleZooData();

export const Default: Story = {
	args: {
		enclosures,
		animals,
	},
};

export const CustomStyling: Story = {
	args: {
		enclosures,
		animals,
		style: {
			background: '#e0f2fe',
			border: '2px dashed #0ea5e9',
			borderRadius: 32,
		},
		className: 'custom-zoo-board',
	},
};

export const VisualVariety: Story = {
	args: {
		enclosures: enclosures.map((e, i) => ({
			...e,
			color: i % 2 === 0 ? '#fbbf24' : '#60a5fa',
		})),
		animals: animals.map((a, i) => ({
			...a,
			icon: ['🦁', '🐧', '🦒', '🦎', '🐼', '🦓'][i % 6],
		})),
	},
};

export const CustomEnclosureRenderer: Story = {
	args: {
		enclosures,
		animals,
		enclosureRenderer: (enc: ZooEnclosure, idx: number) => (
			<g key={enc.id}>
				<ellipse
					cx={enc.x + enc.width / 2}
					cy={enc.y + enc.height / 2}
					rx={enc.width / 2}
					ry={enc.height / 2}
					fill={enc.color || '#fbbf24'}
					stroke='#22223b'
					strokeWidth={3}
				/>
				<text
					x={enc.x + enc.width / 2}
					y={enc.y + 24}
					textAnchor='middle'
					fontSize={16}
					fill='#22223b'
					fontWeight={700}
				>
					{enc.name}
				</text>
			</g>
		),
	},
};

export const CustomAnimalRenderer: Story = {
	args: {
		enclosures,
		animals,
		animalRenderer: (
			animal: ZooAnimal,
			idx: number,
			enc: ZooEnclosure
		) => (
			<g key={animal.id}>
				<rect
					x={
						enc.x + enc.width / 2 - 12 + 20 * Math.cos(idx)
					}
					y={
						enc.y + enc.height / 2 - 12 + 20 * Math.sin(idx)
					}
					width={24}
					height={24}
					fill={animal.color || '#60a5fa'}
					stroke='#22223b'
					strokeWidth={2}
					rx={6}
				/>
				<text
					x={enc.x + enc.width / 2 + 20 * Math.cos(idx)}
					y={
						enc.y + enc.height / 2 + 20 * Math.sin(idx) + 8
					}
					textAnchor='middle'
					fontSize={14}
					fill='#22223b'
					fontWeight={600}
				>
					{animal.icon || '🐾'}
				</text>
			</g>
		),
	},
};

export const EdgeCase_Empty: Story = {
	args: {
		enclosures: [],
		animals: [],
	},
};
