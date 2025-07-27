import React from 'react';
import DynamicMinimap, {
	useSimulatedPlayers,
	MinimapLandmark,
} from '../../components/Map/Sub/DynamicMinimap';

export default {
	title: 'Map/DynamicMinimap',
	component: DynamicMinimap,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 1000;

const demoLandmarks: MinimapLandmark[] = [
	{
		id: 'castle',
		x: 200,
		y: 200,
		label: 'Castle',
		color: '#6366f1',
	},
	{
		id: 'lake',
		x: 800,
		y: 300,
		label: 'Lake',
		color: '#60a5fa',
	},
	{
		id: 'forest',
		x: 500,
		y: 800,
		label: 'Forest',
		color: '#34d399',
	},
];

export const Default = (args) => {
	const players = useSimulatedPlayers(
		2,
		MAP_WIDTH,
		MAP_HEIGHT
	);
	return (
		<DynamicMinimap
			mapWidth={MAP_WIDTH}
			mapHeight={MAP_HEIGHT}
			players={players}
			landmarks={demoLandmarks}
			{...args}
		/>
	);
};
Default.args = {
	width: 120,
	height: 120,
	shape: 'circle',
	showBorder: true,
	showLandmarks: true,
	showPlayers: true,
};

export const SquareWithFourPlayers = (args) => {
	const players = useSimulatedPlayers(
		4,
		MAP_WIDTH,
		MAP_HEIGHT
	);
	return (
		<DynamicMinimap
			mapWidth={MAP_WIDTH}
			mapHeight={MAP_HEIGHT}
			players={players}
			landmarks={demoLandmarks}
			shape='square'
			width={140}
			height={140}
			{...args}
		/>
	);
};

export const ShowcaseAllFeatures = (args) => {
	const players = useSimulatedPlayers(
		3,
		MAP_WIDTH,
		MAP_HEIGHT
	);
	const demoLandmarks = [
		{
			id: 'castle',
			x: 200,
			y: 200,
			label: 'Castle',
			color: '#6366f1',
		},
		{
			id: 'lake',
			x: 800,
			y: 300,
			label: 'Lake',
			color: '#60a5fa',
		},
		{
			id: 'forest',
			x: 500,
			y: 800,
			label: 'Forest',
			color: '#34d399',
		},
		{
			id: 'mountain',
			x: 900,
			y: 900,
			label: 'Mountain',
			color: '#fbbf24',
		},
	];
	return (
		<div
			style={{
				background:
					'radial-gradient(circle at 60% 40%, #e0e7ff 0%, #f1f5f9 100%)',
				padding: 32,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				borderRadius: 24,
				boxShadow: '0 4px 32px 0 #6366f120',
				maxWidth: 400,
				margin: '0 auto',
			}}
		>
			<h3
				style={{
					marginBottom: 16,
					color: '#334155',
					fontWeight: 700,
				}}
			>
				Dynamic Minimap – All Features
			</h3>
			<DynamicMinimap
				mapWidth={MAP_WIDTH}
				mapHeight={MAP_HEIGHT}
				players={players}
				landmarks={demoLandmarks}
				width={180}
				height={180}
				shape='circle'
				showBorder
				showLandmarks
				showPlayers
				showPlayerLabels
				showLandmarkLabels
				borderColor='#6366f1'
				borderWidth={4}
				landmarkSize={18}
				playerSize={16}
				playerLabelStyle={{
					fontSize: 12,
					fontWeight: 600,
					fill: '#fff',
					textShadow: '0 1px 2px #0008',
				}}
				landmarkLabelStyle={{
					fontSize: 11,
					fontWeight: 500,
					fill: '#334155',
				}}
				minimapBgColor='#f8fafc'
				minimapBorderRadius={24}
				{...args}
			/>
			<div
				style={{
					marginTop: 16,
					color: '#64748b',
					fontSize: 14,
				}}
			>
				All features enabled: border, custom colors,
				player/landmark labels, and more.
			</div>
		</div>
	);
};
ShowcaseAllFeatures.storyName = 'Showcase: All Features';
