import type { Meta, StoryObj } from '@storybook/react';
import { Map } from '../../components/Map';

const meta: Meta<typeof Map> = {
	title: 'Map/Map',
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
		showScale: true,
		showCompass: true,
		markers: [
			{
				id: '1',
				position: { lat: 37.7749, lng: -122.4194 },
				title: 'San Francisco',
				description: 'Beautiful city by the bay',
				icon: '🏙️',
				color: '#1976d2',
				clickable: true,
			},
			{
				id: '2',
				position: { lat: 37.7849, lng: -122.4094 },
				title: 'Golden Gate Park',
				description: 'Large urban park',
				icon: '🌳',
				color: '#388e3c',
				clickable: true,
			},
		],
		regions: [
			{
				id: 'sf-downtown',
				title: 'Downtown',
				coordinates: [
					{ lat: 37.789, lng: -122.401 },
					{ lat: 37.789, lng: -122.41 },
					{ lat: 37.78, lng: -122.41 },
					{ lat: 37.78, lng: -122.401 },
				],
				color: '#f44336',
				fillColor: '#e57373',
				fillOpacity: 0.3,
				strokeWidth: 2,
				clickable: true,
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
		showScale: true,
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
		showScale: true,
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
		showScale: true,
		markers: [
			{
				id: '1',
				position: { lat: 48.8584, lng: 2.2945 },
				title: 'Eiffel Tower',
				description: 'Iconic iron lattice tower',
				icon: '🗼',
				color: '#b71c1c',
				clickable: true,
			},
			{
				id: '2',
				position: { lat: 48.8606, lng: 2.3376 },
				title: 'Louvre Museum',
				description: "World's largest art museum",
				icon: '🖼️',
				color: '#1976d2',
				clickable: true,
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
		showMinimap: true,
		markers: [
			{
				id: 'player',
				position: { lat: 0, lng: 0 },
				title: 'Player',
				icon: '🧑‍🚀',
				color: '#ffeb3b',
				clickable: true,
			},
		],
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
		showMinimap: false,
	},
};

export const AllKindsShowcase: Story = {
	render: () => {
		const containerStyle: React.CSSProperties = {
			display: 'flex',
			flexWrap: 'wrap',
			gap: 32,
			alignItems: 'flex-start',
		};
		const mapBoxStyle: React.CSSProperties = {
			minWidth: 340,
			maxWidth: 420,
			flex: '1 1 340px',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		};
		return (
			<div style={containerStyle}>
				{/* Spherical/rotatable map */}
				<div style={mapBoxStyle}>
					<h3>Spherical (Rotatable) Map</h3>
					<div style={{ width: '100%' }}>
						<Map
							kind='interactive-map'
							rotatable
							zoomable
							pannable
							showZoomControls
							showCompass
							showScale
							showLayerControls
							markers={[
								{
									id: 'rot',
									position: { lat: 0, lng: 0 },
									title: 'Equator',
									icon: '🌐',
									color: '#1976d2',
									clickable: true,
								},
							]}
						/>
					</div>
				</div>
				{/* Rectangular/zoomable map */}
				<div style={mapBoxStyle}>
					<h3>Rectangular (Zoomable) Map</h3>
					<div style={{ width: '100%' }}>
						<Map
							kind='world-map'
							zoomable
							pannable
							showZoomControls
							showLayerControls
							showScale
							markers={[
								{
									id: 'nyc',
									position: { lat: 40.7128, lng: -74.006 },
									title: 'NYC',
									icon: '🗽',
									color: '#388e3c',
									clickable: true,
								},
							]}
						/>
					</div>
				</div>
				{/* Game board map with minimap */}
				<div style={mapBoxStyle}>
					<h3>Game Board Map (with Minimap)</h3>
					<div style={{ width: '100%' }}>
						<Map
							kind='game-map'
							showMinimap
							showGrid
							showCoordinates
							zoomable
							pannable
							markers={[
								{
									id: 'player',
									position: { lat: 0, lng: 0 },
									title: 'Player',
									icon: '🧑‍🚀',
									color: '#ffeb3b',
									clickable: true,
								},
							]}
						/>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Showcase of all major map kinds: spherical/rotatable, rectangular/zoomable, and game board/minimap navigation.',
			},
		},
	},
};
