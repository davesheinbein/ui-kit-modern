import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	ModalFactory,
	ModalPresets,
} from '../../components/Modal';

const meta: Meta = {
	title: 'Modals/Custom Puzzle (Modal)',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Custom Puzzle modal using the DRY modal system. Demonstrates the new unified modal approach with custom-puzzle kind.',
			},
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => (
		<ModalFactory
			kind='custom-puzzle'
			open={true}
			title='Create Custom Puzzle'
			message='Configure your custom puzzle settings below.'
			onConfirm={() => console.log('Puzzle created!')}
			onCancel={() => console.log('Cancelled')}
			onClose={() => console.log('Modal closed')}
		>
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<div style={{ marginBottom: '1rem' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '0.5rem',
						}}
					>
						Grid Size:
					</label>
					<select
						style={{
							padding: '0.5rem',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
					>
						<option value='4x4'>4x4</option>
						<option value='5x5'>5x5</option>
						<option value='6x6'>6x6</option>
					</select>
				</div>
				<div style={{ marginBottom: '1rem' }}>
					<label
						style={{
							display: 'block',
							marginBottom: '0.5rem',
						}}
					>
						Difficulty:
					</label>
					<select
						style={{
							padding: '0.5rem',
							borderRadius: '4px',
							border: '1px solid #ccc',
						}}
					>
						<option value='easy'>Easy</option>
						<option value='medium'>Medium</option>
						<option value='hard'>Hard</option>
					</select>
				</div>
			</div>
		</ModalFactory>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Default custom puzzle modal with form controls.',
			},
		},
	},
};

export const WithM: Story = {
	render: () => (
		<M
			kind='custom-puzzle'
			open={true}
			title='Quick Custom Puzzle'
			onConfirm={() => console.log('Created with M!')}
			onClose={() => console.log('Closed')}
		>
			<p>Using the M alias for shorter syntax.</p>
		</M>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Custom puzzle modal using the M alias for concise syntax.',
			},
		},
	},
};

export const WithPreset: Story = {
	render: () => (
		<ModalPresets.Custom
			open={true}
			title='Preset Custom Puzzle'
			onConfirm={() => console.log('Created with preset!')}
			onClose={() => console.log('Closed')}
		>
			<p>Using ModalPresets for type-safe convenience.</p>
		</ModalPresets.Custom>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Custom puzzle modal using ModalPresets for type safety.',
			},
		},
	},
};

export const WithForm: Story = {
	args: {
		open: true,
		onClose: () => {},
		children: (
			<div style={{ padding: '2rem' }}>
				<h2>New Custom Puzzle</h2>
				<form>
					<div style={{ marginBottom: '1rem' }}>
						<label htmlFor='title'>Puzzle Title:</label>
						<input
							id='title'
							type='text'
							style={{
								width: '100%',
								padding: '0.5rem',
								marginTop: '0.25rem',
							}}
						/>
					</div>
					<div style={{ marginBottom: '1rem' }}>
						<label htmlFor='description'>
							Description:
						</label>
						<textarea
							id='description'
							rows={3}
							style={{
								width: '100%',
								padding: '0.5rem',
								marginTop: '0.25rem',
							}}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							gap: '1rem',
							justifyContent: 'center',
						}}
					>
						<button
							type='submit'
							style={{ padding: '0.5rem 1rem' }}
						>
							Save Puzzle
						</button>
						<button
							type='button'
							style={{ padding: '0.5rem 1rem' }}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		),
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		children: <div>This modal is closed</div>,
	},
};
