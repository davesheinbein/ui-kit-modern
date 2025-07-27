
// ArgTypes for Map component (auto-generated for API-like prop structure)
import { MapProps } from '../../components/Map/Sub/types';

export const mapArgTypes = {
	kind: {
		description:
			'The kind of map to render (e.g., world-map, horseTrack, minimap, etc.).',
		type: { name: 'string', required: true },
		table: {
			type: { summary: 'MapKind' },
			category: 'Core',
		},
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
		defaultValue: 'world-map',
	},
	componentId: {
		description:
			'Unique component ID for accessibility and testing.',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Accessibility',
		},
	},
	className: {
		description:
			'Custom class name(s) for the map container.',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Style',
		},
	},
	style: {
		description:
			'Custom style object for the map container.',
		type: { name: 'object' },
		table: {
			type: { summary: 'React.CSSProperties' },
			category: 'Style',
		},
	},
	ariaLabel: {
		description:
			"ARIA label for accessibility. Defaults to 'Map'.",
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Accessibility',
		},
		defaultValue: 'Map',
	},
	center: {
		description: 'The map center coordinate (lat/lng).',
		type: { name: 'object' },
		table: {
			type: { summary: 'MapCoordinate' },
			category: 'Core',
		},
		defaultValue: { lat: 0, lng: 0 },
	},
	zoom: {
		description: 'The current zoom level.',
		type: { name: 'number' },
		table: {
			type: { summary: 'number' },
			category: 'Core',
		},
		defaultValue: 1,
	},
	minZoom: {
		description: 'Minimum allowed zoom level.',
		type: { name: 'number' },
		table: {
			type: { summary: 'number' },
			category: 'Core',
		},
		defaultValue: 1,
	},
	maxZoom: {
		description: 'Maximum allowed zoom level.',
		type: { name: 'number' },
		table: {
			type: { summary: 'number' },
			category: 'Core',
		},
		defaultValue: 20,
	},
	markers: {
		description:
			'Array of marker objects to display on the map.',
		type: { name: 'object' },
		table: {
			type: { summary: 'MapMarker[]' },
			category: 'Data',
		},
	},
	regions: {
		description:
			'Array of region objects to display on the map.',
		type: { name: 'object' },
		table: {
			type: { summary: 'MapRegion[]' },
			category: 'Data',
		},
	},
	interactive: {
		description:
			'If true, the map is interactive (panning, zooming, etc.).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Behavior',
		},
		defaultValue: true,
	},
	zoomable: {
		description: 'If true, the map is zoomable.',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Behavior',
		},
		defaultValue: true,
	},
	pannable: {
		description: 'If true, the map is pannable.',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Behavior',
		},
		defaultValue: true,
	},
	rotatable: {
		description: 'If true, the map is rotatable.',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Behavior',
		},
		defaultValue: false,
	},
	variant: {
		description:
			'Map visual variant (e.g., tile style, board type).',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Style',
		},
		defaultValue: 'default',
	},
	size: {
		description:
			'Map size preset (e.g., small, medium, large).',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Style',
		},
	},
	aspectRatio: {
		description:
			'Aspect ratio for the map container (e.g., 16/9).',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Style',
		},
	},
	borderRadius: {
		description:
			'Border radius for the map container (e.g., 12px).',
		type: { name: 'string' },
		table: {
			type: { summary: 'string' },
			category: 'Style',
		},
	},
	overlays: {
		description:
			'Array of overlay components to render on top of the map, in order.',
		type: { name: 'object' },
		table: {
			type: { summary: 'React.ReactNode[]' },
			category: 'Overlays',
		},
		defaultValue: [],
	},
	loading: {
		description:
			'If true, show the loading spinner overlay.',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'State',
		},
		defaultValue: false,
	},
	controls: {
		description:
			'Controls configuration object. Allows full control over which controls are shown and their props.',
		type: { name: 'object' },
		table: {
			type: { summary: 'object' },
			category: 'Controls',
		},
	},
	showZoomControls: {
		description:
			'Show zoom controls (legacy, prefer controls prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Controls',
		},
	},
	showLayerControls: {
		description:
			'Show layer controls (legacy, prefer controls prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Controls',
		},
	},
	showScale: {
		description:
			'Show scale control (legacy, prefer controls prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Controls',
		},
	},
	showCompass: {
		description:
			'Show compass overlay (legacy, prefer overlays prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Overlays',
		},
	},
	showFullscreen: {
		description:
			'Show fullscreen control (legacy, prefer controls prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Controls',
		},
	},
	showGrid: {
		description:
			'Show grid overlay (legacy, prefer overlays prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Overlays',
		},
	},
	showCoordinates: {
		description:
			'Show coordinates overlay (legacy, prefer overlays prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Overlays',
		},
	},
	showMinimap: {
		description:
			'Show minimap overlay (legacy, prefer overlays prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Overlays',
		},
	},
	showFogOfWar: {
		description:
			'Show fog of war overlay (legacy, prefer overlays prop).',
		type: { name: 'boolean' },
		table: {
			type: { summary: 'boolean' },
			category: 'Overlays',
		},
	},
	onClick: {
		description: 'Event: Called when the map is clicked.',
		type: { name: 'function' },
		table: {
			type: {
				summary: '(coordinate: MapCoordinate) => void',
			},
			category: 'Events',
		},
		action: 'clicked',
	},
	onMarkerClick: {
		description: 'Event: Called when a marker is clicked.',
		type: { name: 'function' },
		table: {
			type: { summary: '(marker: MapMarker) => void' },
			category: 'Events',
		},
		action: 'markerClicked',
	},
	onRegionClick: {
		description: 'Event: Called when a region is clicked.',
		type: { name: 'function' },
		table: {
			type: { summary: '(region: MapRegion) => void' },
			category: 'Events',
		},
		action: 'regionClicked',
	},
	onZoomChange: {
		description:
			'Event: Called when the zoom level changes.',
		type: { name: 'function' },
		table: {
			type: { summary: '(zoom: number) => void' },
			category: 'Events',
		},
		action: 'zoomChanged',
	},
	children: {
		description:
			'Children to render inside the map container (e.g., custom overlays, controls).',
		type: { name: 'object' },
		table: {
			type: { summary: 'React.ReactNode' },
			category: 'Advanced',
		},
	},
};
