import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const ShareModalContentWrapper = ({
	open,
	onClose,
	title = 'Share Your Results',
	shareText = 'Check out my amazing game results!',
}: {
	open: boolean;
	onClose: () => void;
	title?: string;
	shareText?: string;
}) => {
	return (
		<ModalFactory
			kind='share-content'
			open={open}
			title={title}
			onClose={onClose}
		>
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<p style={{ marginBottom: '1.5rem' }}>
					{shareText}
				</p>
				<div
					style={{
						display: 'flex',
						gap: '0.5rem',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#1da1f2',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Twitter
					</button>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#4267b2',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Facebook
					</button>
					<button
						style={{
							padding: '0.5rem 1rem',
							backgroundColor: '#6772e5',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Copy Link
					</button>
				</div>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof ShareModalContentWrapper> = {
	title: 'Modals/Share Content (Modal)',
	component: ShareModalContentWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Share modal content component using the DRY modal system. Provides social sharing options.',
			},
		},
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Title of the share modal',
		},
		shareText: {
			control: 'text',
			description: 'Text content to share',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ShareModalContentWrapper>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
	},
};

export const CustomContent: Story = {
	args: {
		open: true,
		title: 'Share Your Victory!',
		shareText:
			"I just solved today's puzzle in record time! 🎉",
		onClose: () => {},
	},
};
