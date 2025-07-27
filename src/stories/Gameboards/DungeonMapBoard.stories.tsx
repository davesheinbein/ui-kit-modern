import DungeonMapBoard from '../../components/Gameboards/Sub/DungeonMapBoard';

export default {
	title: 'Gameboards/DungeonMapBoard',
	component: DungeonMapBoard,
	argTypes: {
		rooms: {
			description:
				'Array of room objects. Each room can have label, color, and optional x/y for custom layout.',
			type: {
				summary:
					'Array<{ label?: string; color?: string; x?: number; y?: number }>',
			},
			control: 'object',
			required: true,
		},
		connections: {
			description:
				'Array of connections, each with { from: number; to: number; color?: string; strokeWidth?: number }',
			type: {
				summary:
					'Array<{ from: number; to: number; color?: string; strokeWidth?: number }>',
			},
			control: 'object',
			required: true,
		},
		width: {
			description: 'SVG/canvas width',
			type: { summary: 'number' },
			defaultValue: 400,
			control: 'number',
		},
		height: {
			description: 'SVG/canvas height',
			type: { summary: 'number' },
			defaultValue: 300,
			control: 'number',
		},
		roomRadius: {
			description: 'Radius of each room node',
			type: { summary: 'number' },
			defaultValue: 18,
			control: 'number',
		},
		roomStroke: {
			description: 'Stroke color for room circles',
			type: { summary: 'string' },
			defaultValue: '#333',
			control: 'color',
		},
		roomStrokeWidth: {
			description: 'Stroke width for room circles',
			type: { summary: 'number' },
			defaultValue: 2,
			control: 'number',
		},
		fontSize: {
			description: 'Font size for room labels',
			type: { summary: 'number' },
			defaultValue: 14,
			control: 'number',
		},
		labelColor: {
			description: 'Color for room labels',
			type: { summary: 'string' },
			defaultValue: '#222',
			control: 'color',
		},
		connectionColor: {
			description: 'Default color for connections',
			type: { summary: 'string' },
			defaultValue: '#888',
			control: 'color',
		},
		connectionStrokeWidth: {
			description: 'Default stroke width for connections',
			type: { summary: 'number' },
			defaultValue: 3,
			control: 'number',
		},
		layout: {
			description:
				"Layout: 'circle' (default) or 'custom' (use room.x/y)",
			type: { summary: "'circle' | 'custom'" },
			defaultValue: 'circle',
			control: {
				type: 'radio',
				options: ['circle', 'custom'],
			},
		},
		className: {
			description: 'Optional className for root div',
			type: { summary: 'string' },
			control: 'text',
		},
		style: {
			description: 'Optional style for root div',
			type: { summary: 'object' },
			control: 'object',
		},
	},
};

const demoRooms = [
	{ label: 'A', color: '#fbbf24' },
	{ label: 'B', color: '#60a5fa' },
	{ label: 'C', color: '#34d399' },
	{ label: 'D', color: '#f472b6' },
	{ label: 'E', color: '#f87171' },
];
const demoConnections = [
	{ from: 0, to: 1 },
	{ from: 1, to: 2 },
	{ from: 2, to: 3 },
	{ from: 3, to: 4 },
	{ from: 4, to: 0 },
];

export const Basic = {
	args: {
		rooms: demoRooms,
		connections: demoConnections,
	},
};
