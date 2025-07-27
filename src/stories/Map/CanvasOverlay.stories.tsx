import React from 'react';
import { Map } from '../../components/Map';
import { CanvasOverlayProps } from '../../components/Map/Sub/MapOverlays';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta = {
	title: 'Map/CanvasOverlay',
	component: Map,
	parameters: {
		docs: {
			description: {
				component: `
A highly configurable, accessible, and themeable canvas overlay for map visualizations. Supports custom rendering, interactivity, dark mode, CSS variables, and strict TypeScript types.

**Props:**
- \`render\`: (ctx, map) => void — Custom canvas drawing logic
- \`bounds\`: [[number, number], [number, number]] — Map bounds for overlay
- \`zIndex\`, \`opacity\`, \`blendMode\`, \`className\`, \`style\`, \`onClick\`, \`ariaLabel\`, \`visible\`, \`theme\`

**Features:**
- Dynamic updates on map move/zoom
- Keyboard and screen reader accessibility
- Theming via CSS variables and dark mode
- Animation for mount/unmount
- Strict TypeScript types and JSDoc
        `,
			},
		},
	},
	argTypes: {
		opacity: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.01,
			},
		},
		blendMode: { control: 'text' },
		zIndex: { control: 'number' },
		visible: { control: 'boolean' },
		theme: { control: 'text' },
	},
};
export default meta;

type Story = StoryObj<typeof Map>;

const bounds: CanvasOverlayProps['bounds'] = [
	[40.700292, -74.017134],
	[40.877483, -73.907005],
];

const defaultOverlay: CanvasOverlayProps = {
	render: (ctx: CanvasRenderingContext2D, map: any) => {
		ctx.clearRect(
			0,
			0,
			ctx.canvas.width,
			ctx.canvas.height
		);
		ctx.fillStyle = 'rgba(0, 128, 255, 0.3)';
		ctx.fillRect(
			20,
			20,
			ctx.canvas.width - 40,
			ctx.canvas.height - 40
		);
		ctx.strokeStyle = '#0077ff';
		ctx.lineWidth = 4;
		ctx.strokeRect(
			20,
			20,
			ctx.canvas.width - 40,
			ctx.canvas.height - 40
		);
	},
	bounds,
	opacity: 0.8,
	zIndex: 10,
	blendMode: 'multiply',
	visible: true,
	ariaLabel: 'Demo canvas overlay',
	theme: 'auto',
};

export const Default: Story = {
	args: {
		kind: 'city-map',
		center: { lat: 40.78, lng: -73.96 },
		zoom: 12,
		overlays: [
			{
				type: 'canvas',
				props: defaultOverlay,
			},
		],
		style: { height: 400 },
	},
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		overlays: [
			{
				type: 'canvas',
				props: { ...defaultOverlay, theme: 'dark' },
			},
		],
	},
};

export const Hidden: Story = {
	args: {
		...Default.args,
		overlays: [
			{
				type: 'canvas',
				props: { ...defaultOverlay, visible: false },
			},
		],
	},
};
