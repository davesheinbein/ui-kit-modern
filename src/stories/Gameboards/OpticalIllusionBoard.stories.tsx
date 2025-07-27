import React, { useState } from 'react';
import OpticalIllusionBoard from '../../components/Gameboards/Sub/OpticalIllusionBoard';

// Unified and expanded illusion types (canonical kebab-case keys)
const illusionTypes = [
	{ label: 'Café Wall', value: 'cafe-wall' },
	{ label: 'Checker Shadow', value: 'checker-shadow' },
	{ label: 'Hermann Grid', value: 'hermann-grid' },
	{ label: 'Poggendorff', value: 'poggendorff' },
	{ label: 'Zöllner', value: 'zollner' },
	{ label: 'Zoellner (alt)', value: 'zoellner' },
	{ label: 'Müller-Lyer', value: 'muller-lyer' },
	{ label: 'Hering', value: 'hering' },
	{ label: 'Kanizsa Triangle', value: 'kanizsa-triangle' },
	{ label: 'White', value: 'white' },
	{ label: 'Wundt', value: 'wundt' },
	{ label: 'Jastrow', value: 'jastrow' },
	{ label: 'Delboeuf', value: 'delboeuf' },
	{ label: 'Titchener', value: 'titchener' },
	{ label: 'Parallel Lines', value: 'parallel-lines' },
];

// Gallery story: show all variations in a grid, animated
export const Gallery = () => (
	<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl'>
		{illusionTypes.map((opt) => (
			<div
				key={opt.value}
				className='flex flex-col items-center bg-white rounded-lg shadow p-4'
			>
				<div className='mb-2 text-base font-semibold text-gray-700'>
					{opt.label}
				</div>
				<div className='w-full flex justify-center'>
					<OpticalIllusionBoard
						illusionType={opt.value}
						animate={true}
						animationSpeed={30}
						style={{ minHeight: 220, width: '100%' }}
					/>
				</div>
			</div>
		))}
	</div>
);

// Add a Basic story for Storybook autodocs and controls
export const Basic = {
	args: {
		illusionType: 'cafe-wall',
		animate: true,
		animationSpeed: 30,
	},
	render: (args: {
		illusionType: string;
		animate?: boolean;
		animationSpeed?: number;
	}) => <OpticalIllusionBoard {...args} />,
};

export default {
	title: 'Gameboards/OpticalIllusionBoard',
	component: OpticalIllusionBoard,
	tags: ['autodocs'],
	argTypes: {
		illusionType: {
			control: {
				type: 'select',
				options: illusionTypes.map((opt) => opt.value),
			},
			defaultValue: 'cafe-wall',
			description: 'Type of optical illusion to display',
		},
		className: { control: 'text' },
		style: { control: 'object' },
	},
};

export const Interactive = () => {
	const [illusion, setIllusion] = useState('cafe-wall');
	return (
		<div className='flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-[420px] rounded-xl shadow-lg'>
			<label className='mb-2 text-lg font-semibold text-gray-700'>
				Select Illusion Type:
			</label>
			<select
				className='mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800'
				value={illusion}
				onChange={(e) => setIllusion(e.target.value)}
				style={{ maxWidth: 260 }}
			>
				{illusionTypes.map((opt) => (
					<option key={opt.value} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			<div className='w-full flex justify-center'>
				<OpticalIllusionBoard
					illusionType={illusion}
					animate={true}
					animationSpeed={30}
				/>
			</div>
		</div>
	);
};
