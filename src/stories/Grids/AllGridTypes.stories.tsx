import type { Meta, StoryObj } from '@storybook/react';
import { GridFactory } from '../../components/Grid';

const meta: Meta<typeof GridFactory> = {
	title: 'Grids/AllGridTypes (DRY System)',
	component: GridFactory,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Comprehensive overview of all grid types available in the DRY Grid system. This system unifies all grid components (VSGrid, PregameGridLockout, SolvedGroupsDisplay, etc.) under a single, configuration-driven component.',
			},
		},
	},
	argTypes: {
		kind: {
			control: 'select',
			options: [
				'basic',
				'game',
				'preview',
				'locked',
				'vs-grid',
				'vs-bot',
				'vs-multiplayer',
				'pregame-lockout',
				'solved-groups',
				'word-grid',
				'custom',
			],
			description: 'The type of grid to render',
		},
		words: {
			control: 'object',
			description: 'Array of words to display in the grid',
		},
		selected: {
			control: 'object',
			description: 'Array of currently selected words',
		},
		locked: {
			control: 'object',
			description: 'Array of locked words',
		},
		onSelect: {
			action: 'wordSelected',
			description:
				'Function called when a word is selected',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleWords = [
	'BOOK',
	'READ',
	'PAGE',
	'WORD',
	'SONG',
	'SING',
	'NOTE',
	'BEAT',
	'BLUE',
	'CYAN',
	'NAVY',
	'TEAL',
	'DUCK',
	'GOOSE',
	'SWAN',
	'CRANE',
];

const sampleSolvedGroups = [
	{
		groupIdx: 0,
		words: ['BOOK', 'READ', 'PAGE', 'WORD'],
	},
	{
		groupIdx: 1,
		words: ['SONG', 'SING', 'NOTE', 'BEAT'],
	},
];

export const AllGridTypesOverview: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				padding: '1rem',
			}}
		>
			<h2>Basic Grid Types</h2>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<div>
					<h3>Basic Game Grid</h3>
					<GridFactory
						kind='game'
						words={sampleWords}
						selected={['BOOK', 'READ']}
						onSelect={() => {}}
					/>
				</div>

				<div>
					<h3>Preview Grid</h3>
					<GridFactory
						kind='preview'
						words={sampleWords}
						preview={true}
					/>
				</div>

				<div>
					<h3>Locked Grid</h3>
					<GridFactory
						kind='locked'
						words={sampleWords}
						isLocked={true}
					/>
				</div>
			</div>

			<h2>VS Mode Grids</h2>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<div>
					<h3>VS Grid</h3>
					<GridFactory
						kind='vs-grid'
						words={sampleWords}
						selected={['BOOK', 'READ']}
						opponentSelected={['BLUE', 'CYAN']}
						playerId='player1'
						opponentId='player2'
						onSelect={() => {}}
					/>
				</div>

				<div>
					<h3>VS Multiplayer Grid</h3>
					<GridFactory
						kind='vs-multiplayer'
						words={sampleWords}
						selected={['BOOK', 'READ']}
						opponentSelected={['SONG', 'SING']}
						playerId='player1'
						opponentId='player2'
						onSelect={() => {}}
					/>
				</div>
			</div>

			<h2>Special Grid Types</h2>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns:
						'repeat(auto-fit, minmax(300px, 1fr))',
					gap: '2rem',
				}}
			>
				<div>
					<h3>Pregame Lockout</h3>
					<GridFactory
						kind='pregame-lockout'
						words={sampleWords}
						gridSize={{ rows: 4, cols: 4 }}
					/>
				</div>

				<div>
					<h3>Solved Groups Display</h3>
					<GridFactory
						kind='solved-groups'
						pendingSolvedGroups={sampleSolvedGroups}
						activePuzzle={{
							groupLabels: [
								'Reading',
								'Music',
								'Colors',
								'Birds',
							],
						}}
					/>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Overview of all available grid types in the DRY Grid system.',
			},
		},
	},
};

export const BasicGrid: Story = {
	args: {
		kind: 'game',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		locked: [],
	},
};

export const VSModeGrid: Story = {
	args: {
		kind: 'vs-grid',
		words: sampleWords,
		selected: ['BOOK', 'READ'],
		opponentSelected: ['BLUE', 'CYAN'],
		playerId: 'player1',
		opponentId: 'player2',
	},
};

export const PreviewGrid: Story = {
	args: {
		kind: 'preview',
		words: sampleWords,
		preview: true,
	},
};

export const LockedGrid: Story = {
	args: {
		kind: 'locked',
		words: sampleWords,
		isLocked: true,
	},
};

export const SolvedGroupsGrid: Story = {
	args: {
		kind: 'solved-groups',
		pendingSolvedGroups: sampleSolvedGroups,
		activePuzzle: {
			groupLabels: ['Reading', 'Music', 'Colors', 'Birds'],
		},
	},
};
