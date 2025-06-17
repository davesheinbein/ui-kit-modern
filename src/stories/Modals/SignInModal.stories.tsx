import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignInModal } from '../../components/SignInModal';
import type { SignInModalProps } from '../../components/SignInModal/SignInModal';

const meta: Meta<typeof SignInModal> = {
	title: 'Modals/SignInModal',
	component: SignInModal,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A modal component for user authentication with sign-in functionality.',
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
type Story = StoryObj<typeof SignInModal>;

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
