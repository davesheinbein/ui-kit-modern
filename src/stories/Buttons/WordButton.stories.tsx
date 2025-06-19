import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	UnifiedButton,
	ButtonFactory,
} from '../../components/Button';
import type { UnifiedButtonProps } from '../../components/Button';

const meta: Meta<typeof UnifiedButton> = {
	title: 'Buttons/Word (Button)',
	component: UnifiedButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Word button using UnifiedButton with kind="word". A specialized button for word-based games with selection, lock, and burn states.',
			},
		},
	},
	argTypes: {
		word: {
			control: 'text',
			description: 'The word to display on the button',
		},
		isSelected: {
			control: 'boolean',
			description: 'Whether the word is currently selected',
		},
		isLocked: {
			control: 'boolean',
			description:
				'Whether the word button is locked/disabled',
		},
		burnSuspect: {
			control: 'boolean',
			description:
				'Whether the word is suspected to be incorrect',
		},
		isBurned: {
			control: 'boolean',
			description:
				'Whether the word has been marked as incorrect',
		},
		onClick: {
			action: 'clicked',
			description: 'Function called when word is clicked',
		},
		onKeyDown: {
			action: 'keyDown',
			description: 'Function called when key is pressed',
		},
		kind: {
			control: false,
			description:
				'Button kind (fixed to "word" for this story)',
		},
	},
};

export default meta;
type Story = StoryObj<typeof UnifiedButton>;

export const Default: Story = {
	args: {
		kind: 'word',
		word: 'Example',
		isSelected: false,
		isLocked: false,
	},
};

export const Selected: Story = {
	args: {
		kind: 'word',
		word: 'Selected',
		isSelected: true,
		isLocked: false,
	},
};

export const Locked: Story = {
	args: {
		kind: 'word',
		word: 'Locked',
		isSelected: false,
		isLocked: true,
	},
};

export const BurnSuspect: Story = {
	args: {
		kind: 'word',
		word: 'Suspect',
		isSelected: false,
		isLocked: false,
		burnSuspect: true,
	},
};

export const Burned: Story = {
	args: {
		kind: 'word',
		word: 'Burned',
		isSelected: false,
		isLocked: false,
		isBurned: true,
	},
};

export const SelectedAndBurnSuspect: Story = {
	args: {
		kind: 'word',
		word: 'Selected+Suspect',
		isSelected: true,
		isLocked: false,
		burnSuspect: true,
	},
};

export const LockedAndSelected: Story = {
	args: {
		kind: 'word',
		word: 'Locked+Selected',
		isSelected: true,
		isLocked: true,
	},
};

export const LongWord: Story = {
	args: {
		kind: 'word',
		word: 'Extraordinarily',
		isSelected: false,
		isLocked: false,
	},
};

export const ShortWord: Story = {
	args: {
		kind: 'word',
		word: 'Hi',
		isSelected: false,
		isLocked: false,
	},
};

export const AllStatesGrid: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				gap: '1rem',
				maxWidth: '600px',
			}}
		>
			<UnifiedButton
				kind='word'
				word='Default'
				isSelected={false}
				isLocked={false}
				onClick={() => {}}
			/>
			<UnifiedButton
				kind='word'
				word='Selected'
				isSelected={true}
				isLocked={false}
				onClick={() => {}}
			/>
			<UnifiedButton
				kind='word'
				word='Locked'
				isSelected={false}
				isLocked={true}
				onClick={() => {}}
			/>
			<UnifiedButton
				kind='word'
				word='Suspect'
				isSelected={false}
				isLocked={false}
				burnSuspect={true}
				onClick={() => {}}
			/>
			<UnifiedButton
				kind='word'
				word='Burned'
				isSelected={false}
				isLocked={false}
				isBurned={true}
				onClick={() => {}}
			/>
			<UnifiedButton
				kind='word'
				word='Sel+Susp'
				isSelected={true}
				isLocked={false}
				burnSuspect={true}
				onClick={() => {}}
			/>
		</div>
	),
};

export const UsingFactory: Story = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gap: '8px',
				gridTemplateColumns:
					'repeat(auto-fit, minmax(120px, 1fr))',
			}}
		>
			{ButtonFactory.create('word', {
				word: 'NORMAL',
				isSelected: false,
				isLocked: false,
			})}
			{ButtonFactory.create('word', {
				word: 'SELECTED',
				isSelected: true,
				isLocked: false,
			})}
			{ButtonFactory.create('word', {
				word: 'LOCKED',
				isSelected: false,
				isLocked: true,
			})}
			{ButtonFactory.create('word', {
				word: 'SUSPECT',
				burnSuspect: true,
			})}
			{ButtonFactory.create('word', {
				word: 'BURNED',
				isBurned: true,
			})}
		</div>
	),
};
