import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory } from '../../components/Grid';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/PregameGridLockout (DRY System)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Pregame grid lockout using the DRY Grid system. Displays a locked, blurred grid with placeholder cells for pregame state.',
			},
		},
	},
	argTypes: {
		words: {
			control: 'object',
			description:
				'Array of grid words (used for cell count)',
		},
		gridSize: {
			control: 'object',
			description: 'Grid dimensions (rows and cols)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleWords = Array(16)
	.fill('')
	.map((_, i) => `WORD${i + 1}`);

export const Default: Story = {
	args: {
		kind: 'pregame-lockout',
		words: sampleWords,
		gridSize: { rows: 4, cols: 4 },
	},
};

export const TwoByTwo: Story = {
	args: {
		kind: 'pregame-lockout',
		words: ['WORD1', 'WORD2', 'WORD3', 'WORD4'],
		gridSize: { rows: 2, cols: 2 },
	},
};

export const ThreeByThree: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(9)
			.fill('')
			.map((_, i) => `WORD${i + 1}`),
		gridSize: { rows: 3, cols: 3 },
	},
};

export const FiveByFive: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(25)
			.fill('')
			.map((_, i) => `WORD${i + 1}`),
		gridSize: { rows: 5, cols: 5 },
	},
};

export const RectangularGrid: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(15)
			.fill('')
			.map((_, i) => `WORD${i + 1}`),
		gridSize: { rows: 3, cols: 5 },
	},
};

export const CustomStyling: Story = {
	args: {
		kind: 'pregame-lockout',
		words: Array(16)
			.fill('')
			.map((_, i) => `LOCK${i + 1}`),
		gridSize: { rows: 4, cols: 4 },
		overrideConfig: {
			layout: {
				rows: 4,
				cols: 4,
				gap: 16,
			},
			styling: {
				background: '#fefce8',
				borderRadius: 16,
				padding: 16,
			},
		},
	},
};

export const Comparison: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '20px',
				flexWrap: 'wrap',
			}}
		>
			<div>
				<h3 style={{ margin: '0 0 10px 0' }}>2x2 Grid</h3>
				<GridFactory
					kind='pregame-lockout'
					words={['WORD1', 'WORD2', 'WORD3', 'WORD4']}
					gridSize={{ rows: 2, cols: 2 }}
				/>
			</div>
			<div>
				<h3 style={{ margin: '0 0 10px 0' }}>3x3 Grid</h3>
				<GridFactory
					kind='pregame-lockout'
					words={Array(9)
						.fill('')
						.map((_, i) => `W${i + 1}`)}
					gridSize={{ rows: 3, cols: 3 }}
				/>
			</div>
			<div>
				<h3 style={{ margin: '0 0 10px 0' }}>
					4x4 Grid (Default)
				</h3>
				<GridFactory
					kind='pregame-lockout'
					words={Array(16)
						.fill('')
						.map((_, i) => `WORD${i + 1}`)}
					gridSize={{ rows: 4, cols: 4 }}
				/>
			</div>
		</div>
	),
};
