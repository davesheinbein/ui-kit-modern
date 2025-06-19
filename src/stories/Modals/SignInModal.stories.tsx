import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalFactory } from '../../components/Modal';

// Create a wrapper component for Storybook compatibility
const SignInModalWrapper = ({
	open,
	onClose,
	onSignIn,
}: {
	open: boolean;
	onClose: () => void;
	onSignIn: () => void;
}) => {
	return (
		<ModalFactory
			kind='sign-in'
			open={open}
			title='Sign In'
			onClose={onClose}
			onConfirm={onSignIn}
			onCancel={onClose}
			confirmText='Sign In with Google'
			cancelText='Maybe Later'
		>
			<div
				style={{ padding: '1rem 0', textAlign: 'center' }}
			>
				<p
					style={{ marginBottom: '1.5rem', color: '#666' }}
				>
					Sign in to save your progress, compete with
					friends, and unlock exclusive features!
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '0.75rem',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							padding: '1rem',
							backgroundColor: '#f8f9fa',
							borderRadius: '8px',
							width: '100%',
						}}
					>
						<h4
							style={{
								margin: '0 0 0.5rem 0',
								fontSize: '1rem',
							}}
						>
							Benefits of signing in:
						</h4>
						<ul
							style={{
								margin: '0',
								paddingLeft: '1.2rem',
								textAlign: 'left',
								fontSize: '0.9rem',
							}}
						>
							<li>Save your game progress</li>
							<li>Track your statistics</li>
							<li>Compete on leaderboards</li>
							<li>Unlock achievements</li>
						</ul>
					</div>
				</div>
			</div>
		</ModalFactory>
	);
};

const meta: Meta<typeof SignInModalWrapper> = {
	title: 'Modals/Sign In (Modal)',
	component: SignInModalWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal component for user authentication with sign-in functionality. Now powered by the DRY modal system.',
			},
		},
	},
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether the modal is open/visible',
		},
		onClose: {
			action: 'closed',
			description:
				'Function called when the modal should be closed',
		},
		onSignIn: {
			action: 'signIn',
			description:
				'Function called when the user attempts to sign in',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SignInModalWrapper>;

export const Default: Story = {
	args: {
		open: true,
		onClose: () => {},
		onSignIn: () => {},
	},
};

export const Closed: Story = {
	args: {
		open: false,
		onClose: () => {},
		onSignIn: () => {},
	},
};
