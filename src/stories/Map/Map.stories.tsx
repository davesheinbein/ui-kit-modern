import type { Meta, StoryObj } from '@storybook/react';
import { Map } from '../../components/Map';

const meta: Meta<typeof Map> = {
	title: 'Components/Map',
	component: Map,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A comprehensive map component system with support for various map types, markers, overlays, and geo components.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'world-map',
				'region-map',
				'city-map',
				'street-map',
				'satellite-map',
				'terrain-map',
				'interactive-map',
				'game-map',
				'floor-plan',
				'campus-map',
				'location-marker',
				'region-claim-marker',
				'player-presence-indicator',
				'poi-marker',
				'cluster-marker',
				'territory-map',
				'battle-map',
				'resource-map',
				'mini-map',
				'radar-view',
			],
			description: 'Map kind/type',
		},
		variant: {
			control: 'select',
			options: [
				'default',
				'dark',
				'light',
				'satellite',
				'terrain',
				'gaming',
			],
			description: 'Map variant/theme',
		},
		size: {
			control: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
			description: 'Map size',
		},
		center: {
			control: 'object',
			description: 'Map center coordinates {lat, lng}',
		},
		zoom: {
			control: { type: 'range', min: 1, max: 20, step: 1 },
			description: 'Map zoom level (1-20)',
		},
		minZoom: {
			control: { type: 'range', min: 1, max: 10, step: 1 },
			description: 'Minimum zoom level',
		},
		maxZoom: {
			control: { type: 'range', min: 10, max: 20, step: 1 },
			description: 'Maximum zoom level',
		},
		markers: {
			control: 'object',
			description: 'Array of map markers',
		},
		regions: {
			control: 'object',
			description: 'Array of map regions',
		},
		interactive: {
			control: 'boolean',
			description: 'Enable map interactions',
		},
		zoomable: {
			control: 'boolean',
			description: 'Allow zooming',
		},
		pannable: {
			control: 'boolean',
			description: 'Allow panning/dragging',
		},
		rotatable: {
			control: 'boolean',
			description: 'Allow rotation',
		},
		showZoomControls: {
			control: 'boolean',
			description: 'Show zoom controls',
		},
		showLayerControls: {
			control: 'boolean',
			description: 'Show layer controls',
		},
		showScale: {
			control: 'boolean',
			description: 'Show scale indicator',
		},
		showCompass: {
			control: 'boolean',
			description: 'Show compass control',
		},
		showFullscreen: {
			control: 'boolean',
			description: 'Show fullscreen control',
		},
		showGrid: {
			control: 'boolean',
			description: 'Show grid overlay',
		},
		showCoordinates: {
			control: 'boolean',
			description: 'Show coordinate display',
		},
		showMinimap: {
			control: 'boolean',
			description: 'Show minimap',
		},
		showFogOfWar: {
			control: 'boolean',
			description: 'Show fog of war (gaming)',
		},
		aspectRatio: {
			control: 'select',
			options: ['16:9', '4:3', '1:1', '3:2', 'auto'],
			description: 'Map aspect ratio',
		},
		borderRadius: {
			control: 'text',
			description: 'Border radius (CSS value)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic map stories
export const BasicWorldMap: Story = {
	args: {
		kind: 'world-map',
		size: 'md',
		center: { lat: 40.7128, lng: -74.006 }, // New York City
		zoom: 10,
		interactive: true,
		showZoomControls: true,
	},
};

export const InteractiveMap: Story = {
	args: {
		kind: 'interactive-map',
		size: 'lg',
		center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
		zoom: 12,
		interactive: true,
		showZoomControls: true,
		markers: [
			{
				id: '1',
				position: { lat: 37.7749, lng: -122.4194 },
				title: 'San Francisco',
				description: 'Beautiful city by the bay',
			},
			{
				id: '2',
				position: { lat: 37.7849, lng: -122.4094 },
				title: 'Golden Gate Park',
				description: 'Large urban park',
			},
		],
	},
};

export const SatelliteMap: Story = {
	args: {
		kind: 'satellite-map',
		variant: 'satellite',
		size: 'md',
		center: { lat: 35.6762, lng: 139.6503 }, // Tokyo
		zoom: 11,
		interactive: true,
		showZoomControls: true,
	},
};

export const TerrainMap: Story = {
	args: {
		kind: 'terrain-map',
		variant: 'terrain',
		size: 'lg',
		center: { lat: 46.2044, lng: 6.1432 }, // Geneva
		zoom: 10,
		interactive: true,
		showZoomControls: true,
	},
};

export const CityMap: Story = {
	args: {
		kind: 'city-map',
		size: 'lg',
		center: { lat: 48.8566, lng: 2.3522 }, // Paris
		zoom: 12,
		interactive: true,
		showZoomControls: true,
		markers: [
			{
				id: '1',
				position: { lat: 48.8584, lng: 2.2945 },
				title: 'Eiffel Tower',
				description: 'Iconic iron lattice tower',
			},
			{
				id: '2',
				position: { lat: 48.8606, lng: 2.3376 },
				title: 'Louvre Museum',
				description: "World's largest art museum",
			},
		],
	},
};

export const GameMap: Story = {
	args: {
		kind: 'game-map',
		variant: 'gaming',
		size: 'lg',
		center: { lat: 0, lng: 0 },
		zoom: 5,
		interactive: true,
		showZoomControls: true,
		showGrid: true,
		showCoordinates: true,
	},
};

export const MiniMap: Story = {
	args: {
		kind: 'mini-map',
		size: 'sm',
		center: { lat: 40.7128, lng: -74.006 },
		zoom: 8,
		interactive: false,
		showZoomControls: false,
	},
};

export const SmallMap: Story = {
	args: {
		kind: 'world-map',
		size: 'sm',
		center: { lat: 59.3293, lng: 18.0686 }, // Stockholm
		zoom: 10,
		interactive: true,
		showZoomControls: true,
	},
};

export const LargeMap: Story = {
	args: {
		kind: 'world-map',
		size: 'lg',
		center: { lat: 59.3293, lng: 18.0686 }, // Stockholm
		zoom: 10,
		interactive: true,
		showZoomControls: true,
	},
};

export const DarkThemeMap: Story = {
	args: {
		kind: 'interactive-map',
		variant: 'dark',
		size: 'lg',
		center: { lat: 55.7558, lng: 37.6176 }, // Moscow
		zoom: 10,
		interactive: true,
		showZoomControls: true,
	},
};
